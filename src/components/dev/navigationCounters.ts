import { create } from "zustand";
import { qaRawFetch } from "./qaApiClient";

export type NavigationCountKey = "bugs" | "testcases" | "flags" | "exploratory" | "evidence" | "generator" | "matrix";

interface NavigationCounterState {
  counts: Partial<Record<NavigationCountKey, number>>;
  setCount: (key: NavigationCountKey, count: number) => void;
  refresh: () => Promise<void>;
}

const endpoints: Array<{ key: NavigationCountKey; endpoint: string; read: (value: unknown) => number }> = [
  { key: "evidence", endpoint: "/api/qa/operacoes/evidencias", read: value => Array.isArray(value) ? value.length : 0 },
  { key: "generator", endpoint: "/api/qa/operacoes/massas", read: value => Array.isArray(value) ? value.length : 0 },
];

const BUG_TYPE_ID = 1;
const OPEN_OR_RETURNED_STATUS_IDS = [2, 8] as const;

async function readRelevantOpenBugsCount() {
  const headers = { Accept: "application/json", "X-QA-Counter": "true" };
  const params = new URLSearchParams({
    pagina: "1",
    tamanhoPagina: "1",
    tipoIds: String(BUG_TYPE_ID),
    somenteMeus: "true",
  });
  OPEN_OR_RETURNED_STATUS_IDS.forEach(statusId => params.append("statusIds", String(statusId)));
  const response = await qaRawFetch(`/api/qa/chamados?${params}`, { headers });
  if (!response.ok) throw new Error(String(response.status));
  const value = await response.json() as { totalItens?: number };
  return ["bugs", Number(value.totalItens ?? 0)] as const;
}

async function readCount(endpoint: (typeof endpoints)[number]) {
  const response = await qaRawFetch(endpoint.endpoint, { headers: { Accept: "application/json", "X-QA-Counter": "true" } });
  if (!response.ok) throw new Error(String(response.status));
  return [endpoint.key, endpoint.read(await response.json())] as const;
}

export const useNavigationCounters = create<NavigationCounterState>((set) => ({
  counts: {},
  setCount: (key, count) => set(state => ({ counts: { ...state.counts, [key]: count } })),
  refresh: async () => {
    const results = await Promise.allSettled([
      readRelevantOpenBugsCount(),
      ...endpoints.map(readCount),
    ]);
    set(state => ({
      counts: results.reduce<Partial<Record<NavigationCountKey, number>>>((counts, result) => {
        if (result.status === "fulfilled") counts[result.value[0]] = result.value[1];
        return counts;
      }, { ...state.counts }),
    }));
  },
}));

export function setNavigationCount(key: NavigationCountKey, count: number) {
  useNavigationCounters.getState().setCount(key, count);
}

let navigationCountersStarted = false;

export function setupNavigationCounters() {
  if (navigationCountersStarted || typeof window === "undefined") return;
  navigationCountersStarted = true;
  void useNavigationCounters.getState().refresh();
  window.setInterval(() => void useNavigationCounters.getState().refresh(), 60_000);
  window.addEventListener("qa:network-replay-success", () => void useNavigationCounters.getState().refresh());
}
