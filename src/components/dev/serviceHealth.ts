import { create } from "zustand";
import { setNavigationCount, type NavigationCountKey } from "./navigationCounters";
import { qaRawFetch } from "./qaApiClient";

export type ServiceHealthStatus = "checking" | "online" | "degraded" | "offline";

export interface ServiceHealthItem {
  id: string;
  name: string;
  endpoint: string;
  status: ServiceHealthStatus;
  statusCode?: number;
  latency?: number;
  checkedAt?: number;
}

type ServiceProbe = Pick<ServiceHealthItem, "id" | "name" | "endpoint"> & {
  counterKey?: NavigationCountKey;
  readCount?: (value: unknown) => number;
};

const SERVICES: ServiceProbe[] = [
  { id: "chamados", name: "Chamados", endpoint: "/api/qa/chamados?pagina=1&tamanhoPagina=1", counterKey: "bugs", readCount: value => Number((value as { totalItens?: number })?.totalItens ?? 0) },
  { id: "testes", name: "Testes", endpoint: "/api/qa/testes/casos", counterKey: "testcases", readCount: value => Array.isArray(value) ? value.length : 0 },
  { id: "devtools", name: "DevTools", endpoint: "/api/qa/devtools/flags", counterKey: "flags", readCount: value => Array.isArray((value as { items?: unknown[] })?.items) ? (value as { items: unknown[] }).items.length : 0 },
  { id: "insights", name: "Insights", endpoint: "/api/qa/insights/performance" },
  { id: "operacoes", name: "Operações", endpoint: "/api/qa/operacoes/exploracoes", counterKey: "exploratory", readCount: value => Array.isArray(value) ? value.length : 0 },
  { id: "validacoes", name: "Validações", endpoint: "/api/qa/validacoes/ambientes", counterKey: "matrix", readCount: value => Array.isArray(value) ? value.length : 0 },
];

interface ServiceHealthState {
  services: ServiceHealthItem[];
  checking: boolean;
  setChecking: (checking: boolean) => void;
  update: (id: string, data: Partial<ServiceHealthItem>) => void;
}

export const useServiceHealth = create<ServiceHealthState>((set) => ({
  services: SERVICES.map(service => ({ ...service, status: "checking" })),
  checking: false,
  setChecking: checking => set({ checking }),
  update: (id, data) => set(state => ({
    services: state.services.map(service => service.id === id ? { ...service, ...data } : service),
  })),
}));

let serviceHealthStarted = false;

async function checkService(service: ServiceProbe) {
  const startedAt = performance.now();
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 5000);
  try {
    const response = await qaRawFetch(service.endpoint, {
      headers: { Accept: "application/json", "X-QA-Health-Check": "true" },
      signal: controller.signal,
    });
    const value = response.ok ? await response.json() as unknown : undefined;
    if (response.ok && service.counterKey && service.readCount) setNavigationCount(service.counterKey, service.readCount(value));
    useServiceHealth.getState().update(service.id, {
      status: response.ok ? "online" : response.status < 500 ? "degraded" : "offline",
      statusCode: response.status,
      latency: Math.round(performance.now() - startedAt),
      checkedAt: Date.now(),
    });
  } catch {
    useServiceHealth.getState().update(service.id, {
      status: "offline",
      statusCode: 0,
      latency: Math.round(performance.now() - startedAt),
      checkedAt: Date.now(),
    });
  } finally {
    window.clearTimeout(timeout);
  }
}

export async function refreshServiceHealth() {
  if (typeof window === "undefined" || useServiceHealth.getState().checking) return;
  useServiceHealth.getState().setChecking(true);
  await Promise.allSettled(SERVICES.map(checkService));
  useServiceHealth.getState().setChecking(false);
}

export function setupServiceHealthMonitor() {
  if (serviceHealthStarted || typeof window === "undefined") return;
  serviceHealthStarted = true;
  void refreshServiceHealth();
  window.setInterval(() => void refreshServiceHealth(), 60_000);
  window.addEventListener("qa:network-replay-success", () => void refreshServiceHealth());
}

