import type {
  TestCase,
  TestCaseInput,
  TestCaseSummary,
  TestCatalogs,
  TestCycle,
  TestCycleSummary,
  TestExecution,
  TestPlan,
} from "./types";
import { qaFetch } from "../../qaApiClient";

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers);
  if (init.body) headers.set("Content-Type", "application/json");
  headers.set("Accept", "application/json");
  const response = await qaFetch(path, { ...init, headers });
  if (!response.ok) {
    let message = response.statusText;
    try {
      const body = (await response.json()) as { message?: string };
      message = body.message ?? message;
    } catch {
      /* mantém o status HTTP */
    }
    throw new Error(message || "Não foi possível concluir a operação.");
  }
  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

const json = (method: string, body?: unknown): RequestInit => ({
  method,
  body: body === undefined ? undefined : JSON.stringify(body),
});

export const testesApi = {
  catalogos: () => request<TestCatalogs>("/api/qa/testes/catalogos"),
  listarCasos: (termo = "", status = "") => {
    const params = new URLSearchParams();
    if (termo) params.set("termo", termo);
    if (status) params.set("status", status);
    return request<TestCaseSummary[]>(
      `/api/qa/testes/casos${params.size ? `?${params}` : ""}`,
    );
  },
  obterCaso: (id: number) => request<TestCase>(`/api/qa/testes/casos/${id}`),
  criarCaso: (body: TestCaseInput) =>
    request<TestCase>("/api/qa/testes/casos", json("POST", body)),
  atualizarCaso: (id: number, body: TestCaseInput) =>
    request<TestCase>(`/api/qa/testes/casos/${id}`, json("PUT", body)),
  duplicarCaso: (id: number) =>
    request<TestCase>(`/api/qa/testes/casos/${id}/duplicar`, json("POST")),
  arquivarCaso: (id: number) =>
    request<TestCase>(`/api/qa/testes/casos/${id}/arquivar`, json("POST")),
  exportarCasos: () =>
    request<{ exportadoEm: string; total: number; casos: TestCase[] }>(
      "/api/qa/testes/casos/exportar",
    ),
  importarCasos: (casos: unknown[]) =>
    request<{ totalImportado: number }>(
      "/api/qa/testes/casos/importar",
      json("POST", { casos }),
    ),
  adicionarAnexo: (id: number, file: File) =>
    request<TestCase["anexos"][number]>(
      `/api/qa/testes/casos/${id}/anexos`,
      json("POST", {
        nome: file.name,
        tipo: file.type,
        tamanho: file.size,
      }),
    ),
  listarPlanos: () => request<TestPlan[]>("/api/qa/testes/planos"),
  criarPlano: (body: {
    nome: string;
    objetivo: string;
    versao: string;
    casoIds: number[];
  }) => request<TestPlan>("/api/qa/testes/planos", json("POST", body)),
  listarCiclos: () => request<TestCycleSummary[]>("/api/qa/testes/ciclos"),
  obterCiclo: (id: number) => request<TestCycle>(`/api/qa/testes/ciclos/${id}`),
  criarCiclo: (body: {
    nome: string;
    planoId: number | null;
    casoIds?: number[];
    versaoTestada: string;
    ambiente: string;
    navegador: string;
    dispositivo: string;
    colaborativo: boolean;
    executores: string[];
  }) => request<TestCycle>("/api/qa/testes/ciclos", json("POST", body)),
  estadoCiclo: (
    id: number,
    acao: "INICIAR" | "PAUSAR" | "RETOMAR" | "CONCLUIR",
  ) =>
    request<TestCycle>(
      `/api/qa/testes/ciclos/${id}/estado`,
      json("POST", { acao }),
    ),
  atualizarExecucao: (
    cycleId: number,
    executionId: number,
    body: Partial<TestExecution>,
  ) =>
    request<TestCycle>(
      `/api/qa/testes/ciclos/${cycleId}/execucoes/${executionId}`,
      json("PUT", body),
    ),
  reexecutar: (id: number, tipo: "FALHOS" | "AFETADOS") =>
    request<{ totalReaberto: number; ciclo: TestCycle }>(
      `/api/qa/testes/ciclos/${id}/reexecutar`,
      json("POST", { tipo }),
    ),
  clonarCiclo: (id: number, versaoTestada: string) =>
    request<TestCycle>(
      `/api/qa/testes/ciclos/${id}/clonar`,
      json("POST", { versaoTestada }),
    ),
  relatorio: (id: number) =>
    request<Record<string, unknown>>(`/api/qa/testes/ciclos/${id}/relatorio`),
};


