import type {
  AccessibilityPlan,
  ConcurrencyPlan,
  I18nPlan,
  PerformancePlan,
  QualityReport,
  VisualPlan,
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
    throw new Error(
      body.message ?? `Falha na central de qualidade (${response.status}).`,
    );
  }
  return response.json() as Promise<T>;
}
const post = (body?: unknown): RequestInit => ({
  method: "POST",
  body: JSON.stringify(body ?? {}),
});

export const insightsApi = {
  visuais: () => request<VisualPlan[]>("/api/qa/insights/visuais"),
  aprovarReferencia: (id: number, body: Record<string, unknown>) =>
    request<VisualPlan>(
      `/api/qa/insights/visuais/${id}/referencias`,
      post(body),
    ),
  salvarComparacaoVisual: (id: number, body: Record<string, unknown>) =>
    request<VisualPlan>(
      `/api/qa/insights/visuais/${id}/comparacoes`,
      post(body),
    ),
  acessibilidade: () =>
    request<AccessibilityPlan[]>("/api/qa/insights/acessibilidade"),
  salvarAuditoria: (id: number, body: Record<string, unknown>) =>
    request<AccessibilityPlan>(
      `/api/qa/insights/acessibilidade/${id}/auditorias`,
      post(body),
    ),
  internacionalizacao: () =>
    request<I18nPlan[]>("/api/qa/insights/internacionalizacao"),
  salvarComparacaoI18n: (id: number, body: Record<string, unknown>) =>
    request<I18nPlan>(
      `/api/qa/insights/internacionalizacao/${id}/comparar`,
      post(body),
    ),
  performance: () => request<PerformancePlan[]>("/api/qa/insights/performance"),
  salvarMedicao: (id: number, body: Record<string, unknown>) =>
    request<PerformancePlan>(
      `/api/qa/insights/performance/${id}/medicoes`,
      post(body),
    ),
  concorrencia: () =>
    request<ConcurrencyPlan[]>("/api/qa/insights/concorrencia"),
  executarConcorrencia: (id: number, simularFalhas: string[] = []) =>
    request<ConcurrencyPlan>(
      `/api/qa/insights/concorrencia/${id}/executar`,
      post({ simularFalhas }),
    ),
  relatorio: () =>
    request<QualityReport>("/api/qa/insights/relatorios/qualidade"),
};


