import type {
  ApiExecution,
  ApiRequest,
  ApiWorkspace,
  EnvironmentMatrix,
  FormSuite,
  PermissionMatrix,
  RegressionSuite,
  ResponsivePlan,
  ValidationCatalogs,
} from "./types";
import { qaFetch } from "../../qaApiClient";
async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers);
  headers.set("Accept", "application/json");
  if (init.body) headers.set("Content-Type", "application/json");
  const response = await qaFetch(path, { ...init, headers });
  if (!response.ok) {
    const body = (await response.json().catch(() => ({}))) as {
      message?: string;
    };
    throw new Error(body.message ?? `Falha na validação (${response.status}).`);
  }
  return response.json() as Promise<T>;
}
const json = (method: string, body?: unknown): RequestInit => ({
  method,
  body: body === undefined ? undefined : JSON.stringify(body),
});

export const validacoesApi = {
  catalogos: () => request<ValidationCatalogs>("/api/qa/validacoes/catalogos"),
  ambientes: () => request<EnvironmentMatrix[]>("/api/qa/validacoes/ambientes"),
  criarAmbiente: (body: Partial<EnvironmentMatrix>) =>
    request<EnvironmentMatrix>(
      "/api/qa/validacoes/ambientes",
      json("POST", body),
    ),
  gerarCombinacoes: (id: number) =>
    request<EnvironmentMatrix>(
      `/api/qa/validacoes/ambientes/${id}/gerar-combinacoes`,
      json("POST"),
    ),
  executarCombinacao: (
    matrixId: number,
    combinationId: number,
    status: string,
    observacao = "",
  ) =>
    request<EnvironmentMatrix>(
      `/api/qa/validacoes/ambientes/${matrixId}/combinacoes/${combinationId}/executar`,
      json("POST", { status, observacao }),
    ),
  formularios: () => request<FormSuite[]>("/api/qa/validacoes/formularios"),
  criarFormulario: (body: Partial<FormSuite>) =>
    request<FormSuite>("/api/qa/validacoes/formularios", json("POST", body)),
  executarFormulario: (id: number, simularFalhas: string[] = []) =>
    request<FormSuite>(
      `/api/qa/validacoes/formularios/${id}/executar`,
      json("POST", { simularFalhas }),
    ),
  apis: () => request<ApiWorkspace>("/api/qa/validacoes/apis"),
  salvarRequisicao: (body: Partial<ApiRequest>) =>
    request<ApiRequest>(
      "/api/qa/validacoes/apis/requisicoes",
      json("POST", body),
    ),
  criarColecao: (body: {
    nome: string;
    descricao: string;
    requisicaoIds?: number[];
  }) =>
    request<ApiWorkspace["colecoes"][number]>(
      "/api/qa/validacoes/apis/colecoes",
      json("POST", body),
    ),
  criarVariaveis: (body: { nome: string; variaveis: Record<string, string> }) =>
    request<ApiWorkspace["ambientes"][number]>(
      "/api/qa/validacoes/apis/ambientes",
      json("POST", body),
    ),
  executarRequisicao: (id: number, ambienteId: number) =>
    request<ApiExecution>(
      `/api/qa/validacoes/apis/requisicoes/${id}/executar`,
      json("POST", { ambienteId }),
    ),
  importarOpenApi: (documento: unknown, colecaoId?: number) =>
    request<{ totalImportado: number }>(
      "/api/qa/validacoes/apis/importar-openapi",
      json("POST", { documento, colecaoId }),
    ),
  exportarColecao: (id: number) =>
    request<Record<string, unknown>>(
      `/api/qa/validacoes/apis/exportar-colecao/${id}`,
    ),
  permissoes: () =>
    request<PermissionMatrix[]>("/api/qa/validacoes/permissoes"),
  criarPermissao: (body: Partial<PermissionMatrix>) =>
    request<PermissionMatrix>(
      "/api/qa/validacoes/permissoes",
      json("POST", body),
    ),
  executarPermissoes: (id: number, simularFalhas: string[] = []) =>
    request<PermissionMatrix>(
      `/api/qa/validacoes/permissoes/${id}/executar`,
      json("POST", { simularFalhas }),
    ),
  regressoes: () => request<RegressionSuite[]>("/api/qa/validacoes/regressoes"),
  criarRegressao: (body: Partial<RegressionSuite>) =>
    request<RegressionSuite>(
      "/api/qa/validacoes/regressoes",
      json("POST", body),
    ),
  avaliarRegressao: (id: number, metricas: RegressionSuite["metricas"]) =>
    request<{
      suite: RegressionSuite;
      relatorioProntidao: Record<string, unknown>;
    }>(
      `/api/qa/validacoes/regressoes/${id}/avaliar`,
      json("POST", { metricas }),
    ),
  responsivos: () =>
    request<ResponsivePlan[]>("/api/qa/validacoes/responsivos"),
  criarResponsivo: (body: Partial<ResponsivePlan>) =>
    request<ResponsivePlan>(
      "/api/qa/validacoes/responsivos",
      json("POST", body),
    ),
  executarResponsivo: (id: number, body: Record<string, unknown>) =>
    request<ResponsivePlan>(
      `/api/qa/validacoes/responsivos/${id}/executar`,
      json("POST", body),
    ),
  relatorioResponsivo: (id: number) =>
    request<Record<string, unknown>>(
      `/api/qa/validacoes/responsivos/${id}/relatorio`,
    ),
};


