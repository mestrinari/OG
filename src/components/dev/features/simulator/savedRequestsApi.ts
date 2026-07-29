import { qaFetch } from "../../qaApiClient";

export type SimulatorPair = { key: string; value: string };
export type SimulatorUser = { id: number; nome: string; email: string | null; perfilId: number };
export type SavedSimulatorRequestInput = {
  nome: string; descricao: string | null; usuariosSecundariosIds: number[]; metodo: string; url: string;
  queryParameters: SimulatorPair[]; headers: SimulatorPair[]; authTipo: string; authToken: string | null;
  authUsuario: string | null; authSenha: string | null; apiKeyNome: string | null; apiKeyValor: string | null;
  payloadTipo: string; corpo: string | null; credentials: string; modoRequest: string; cacheRequest: string;
  redirectRequest: string; referrer: string | null; referrerPolicy: string; integrity: string | null;
  keepAlive: boolean; timeoutMs: number; curlOriginal: string | null; arquivoCampo: string | null;
  arquivoNome: string | null; arquivoContentType: string | null; arquivoBase64: string | null;
};
export type SavedSimulatorRequestSummary = {
  id: number; nome: string; descricao: string | null; metodo: string; url: string; payloadTipo: string;
  criadoPorUsuarioId: number; criadoPorNome: string; usuariosSecundariosIds: number[]; podeEditar: boolean;
  criadoEm: string; atualizadoEm: string;
};
export type SavedSimulatorRequest = SavedSimulatorRequestInput & SavedSimulatorRequestSummary;

async function request<T>(path: string, init: RequestInit = {}) {
  const headers = new Headers(init.headers); headers.set("Accept", "application/json");
  if (init.body) headers.set("Content-Type", "application/json");
  const response = await qaFetch(path, { ...init, headers, qaSuppressAutomaticTicket: true });
  if (!response.ok) {
    let message = response.statusText;
    try { message = ((await response.json()) as { message?: string }).message ?? message; } catch { /* status */ }
    throw new Error(message || "Falha ao acessar chamadas salvas.");
  }
  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

export const savedSimulatorRequestsApi = {
  listar: () => request<SavedSimulatorRequestSummary[]>("/api/qa/simulador/chamadas"),
  usuarios: () => request<SimulatorUser[]>("/api/qa/simulador/chamadas/usuarios"),
  obter: (id: number) => request<SavedSimulatorRequest>(`/api/qa/simulador/chamadas/${id}`),
  criar: (body: SavedSimulatorRequestInput) => request<SavedSimulatorRequest>("/api/qa/simulador/chamadas", { method: "POST", body: JSON.stringify(body) }),
  atualizar: (id: number, body: SavedSimulatorRequestInput) => request<SavedSimulatorRequest>(`/api/qa/simulador/chamadas/${id}`, { method: "PUT", body: JSON.stringify(body) }),
  excluir: (id: number) => request<void>(`/api/qa/simulador/chamadas/${id}`, { method: "DELETE" }),
};
