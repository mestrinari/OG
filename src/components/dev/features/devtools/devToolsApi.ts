import { qaFetch } from "../../qaApiClient";

const BASE = "/api/qa/devtools";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await qaFetch(`${BASE}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  if (!response.ok) throw new Error(`Falha DEV ${response.status}`);
  return response.json() as Promise<T>;
}

export interface AuthContext {
  usuario: { id: string; nome: string; emailMascarado: string; perfil: string };
  token: {
    emitidoEm: string;
    expiraEm: string;
    claims: Record<string, unknown>;
    oculto: string;
  };
  permissoes: Array<{
    codigo: string;
    origem: string;
    frontend: boolean;
    backend: boolean;
  }>;
  rotasProtegidas: string[];
  componentesProtegidos: string[];
  conflitos: string[];
  tentativasNegadas: unknown[];
}
export interface FeatureFlag {
  id: number;
  chave: string;
  descricao: string;
  ativa: boolean;
  valorOficial: boolean;
  valorSimulado?: boolean | null;
  ambiente: string;
  usuario?: string;
  perfil?: string;
  cliente?: string;
  unidade?: string;
  percentual: number;
  inicio?: string;
  fim?: string;
  owner: string;
  criadoEm: string;
  expiraEm?: string;
  abandonada: boolean;
}

export const devToolsApi = {
  auth: () => request<AuthContext>("/auth/contexto"),
  simularAuth: (modo: string) =>
    request<AuthContext>("/auth/simular", {
      method: "POST",
      body: JSON.stringify({ modo }),
    }),
  verificarPermissao: (permissao: string) =>
    request<{ permitida: boolean; origem: string }>("/auth/verificar", {
      method: "POST",
      body: JSON.stringify({ permissao }),
    }),
  renovar: () => request<AuthContext>("/auth/renovar", { method: "POST" }),
  flags: () =>
    request<{ items: FeatureFlag[]; historico: unknown[] }>("/flags"),
  alternarFlag: (id: number) =>
    request<FeatureFlag>(`/flags/${id}/alternar`, { method: "POST" }),
  simularFlag: (id: number, valor: boolean | null) =>
    request<FeatureFlag>(`/flags/${id}/simular`, {
      method: "POST",
      body: JSON.stringify({ valor }),
    }),
  resetarFlags: () =>
    request<{ items: FeatureFlag[] }>("/flags/resetar", { method: "POST" }),
  compartilharCenario: (cenario: unknown) =>
    request<unknown>("/rede/cenarios", {
      method: "POST",
      body: JSON.stringify(cenario),
    }),
  diagnosticoBackend: () =>
    request<Record<string, unknown>>("/backend/diagnostico"),
  reprocessarJob: (id: string) =>
    request<unknown>(`/backend/jobs/${encodeURIComponent(id)}/reprocessar`, {
      method: "POST",
    }),
  ambiente: () => request<Record<string, unknown>>("/ambiente"),
};

