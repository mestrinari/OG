import type {
  Defect,
  Evidence,
  Exploration,
  OperationCatalogs,
  SessionScript,
  TestDataSet,
} from "./types";
import { qaFetch } from "../../qaApiClient";

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers);
  headers.set("Accept", "application/json");
  if (init.body) headers.set("Content-Type", "application/json");
  const response = await qaFetch(path, { ...init, headers });
  if (!response.ok) {
    const error = (await response.json().catch(() => ({}))) as {
      message?: string;
    };
    throw new Error(error.message ?? `Falha na operação (${response.status}).`);
  }
  return response.status === 204
    ? (undefined as T)
    : (response.json() as Promise<T>);
}

const json = (method: string, body?: unknown): RequestInit => ({
  method,
  body: body === undefined ? undefined : JSON.stringify(body),
});

export const operacoesApi = {
  catalogos: () => request<OperationCatalogs>("/api/qa/operacoes/catalogos"),
  exploracoes: () => request<Exploration[]>("/api/qa/operacoes/exploracoes"),
  criarExploracao: (body: Partial<Exploration>) =>
    request<Exploration>("/api/qa/operacoes/exploracoes", json("POST", body)),
  atualizarExploracao: (
    id: number,
    body: Partial<Exploration> & { acao?: string },
  ) =>
    request<Exploration>(
      `/api/qa/operacoes/exploracoes/${id}`,
      json("PUT", body),
    ),
  anotar: (
    id: number,
    body: {
      tipo: string;
      texto: string;
      classificacao: string;
      area: string;
      caminho: string;
      marcador: string;
    },
  ) =>
    request<Exploration["anotacoes"][number]>(
      `/api/qa/operacoes/exploracoes/${id}/anotacoes`,
      json("POST", body),
    ),
  converterAnotacao: (
    id: number,
    noteId: number,
    tipo: "DEFEITO" | "MELHORIA",
  ) =>
    request<Defect>(
      `/api/qa/operacoes/exploracoes/${id}/anotacoes/${noteId}/converter`,
      json("POST", { tipo }),
    ),
  compararExploracoes: (a: number, b: number) =>
    request<Record<string, unknown>>(
      `/api/qa/operacoes/exploracoes/comparar?primeiraId=${a}&segundaId=${b}`,
    ),

  defeitos: () => request<Defect[]>("/api/qa/operacoes/defeitos"),
  criarDefeito: (body: Partial<Defect>) =>
    request<Defect>("/api/qa/operacoes/defeitos", json("POST", body)),
  atualizarDefeito: (id: number, body: Partial<Defect>) =>
    request<Defect>(`/api/qa/operacoes/defeitos/${id}`, json("PUT", body)),
  statusDefeito: (id: number, status: string) =>
    request<Defect>(
      `/api/qa/operacoes/defeitos/${id}/status`,
      json("POST", { status }),
    ),
  comentarDefeito: (id: number, texto: string) =>
    request<Defect["comentarios"][number]>(
      `/api/qa/operacoes/defeitos/${id}/comentarios`,
      json("POST", { texto }),
    ),

  evidencias: () => request<Evidence[]>("/api/qa/operacoes/evidencias"),
  criarEvidencia: (body: Partial<Evidence>) =>
    request<Evidence>("/api/qa/operacoes/evidencias", json("POST", body)),
  vincularEvidencia: (id: number, chamadoCodigo: string) =>
    request<Evidence>(
      `/api/qa/operacoes/evidencias/${id}/vincular`,
      json("POST", { chamadoCodigo }),
    ),
  baixarPacote: async (id: number, fileName: string) => {
    const response = await qaFetch(`/api/qa/operacoes/evidencias/${id}/pacote`);
    if (!response.ok) throw new Error("Não foi possível gerar o pacote ZIP.");
    const link = document.createElement("a");
    link.href = URL.createObjectURL(await response.blob());
    link.download = fileName;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  },

  roteiros: () => request<SessionScript[]>("/api/qa/operacoes/roteiros"),
  criarRoteiro: (body: Partial<SessionScript>) =>
    request<SessionScript>("/api/qa/operacoes/roteiros", json("POST", body)),
  atualizarRoteiro: (id: number, body: Partial<SessionScript>) =>
    request<SessionScript>(
      `/api/qa/operacoes/roteiros/${id}`,
      json("PUT", body),
    ),
  reproduzirRoteiro: (id: number, ambiente: string, falhouNoPasso?: number) =>
    request<NonNullable<SessionScript["ultimaReproducao"]>>(
      `/api/qa/operacoes/roteiros/${id}/reproduzir`,
      json("POST", { ambiente, falhouNoPasso }),
    ),

  massas: () => request<TestDataSet[]>("/api/qa/operacoes/massas"),
  criarMassa: (body: Partial<TestDataSet>) =>
    request<TestDataSet>("/api/qa/operacoes/massas", json("POST", body)),
  gerarMassa: (body: Partial<TestDataSet>) =>
    request<TestDataSet>("/api/qa/operacoes/massas/gerar", json("POST", body)),
  acaoMassa: (
    id: number,
    acao: "RESETAR" | "CLONAR" | "COMPARTILHAR" | "LIMPAR",
  ) =>
    request<TestDataSet>(
      `/api/qa/operacoes/massas/${id}/acao`,
      json("POST", { acao }),
    ),
  limparExpiradas: () =>
    request<{ totalLimpo: number; limpezaSegura: boolean }>(
      "/api/qa/operacoes/massas/limpar-expiradas",
      json("POST"),
    ),
};


