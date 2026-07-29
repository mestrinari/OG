import type {
  ApiErrorResponse,
  AtualizarChamadoRequest,
  ChamadoAnexo,
  ChamadoCatalogosResponse,
  DisponibilidadeItemPagina,
  ChamadoChecklist,
  ChamadoComentario,
  ChamadoDetalhesResponse,
  ChamadoOcorrencia,
  ChamadoParticipante,
  ChamadoRelacionamento,
  ChamadoResumo,
  ChamadoVinculoExterno,
  CriarChamadoRequest,
  ListarChamadosQuery,
  MapeamentoPaginasResponse,
  ModuloSistema,
  PaginatedResponse,
  UsuarioResumo,
} from "./types";
import { qaFetch } from "../../qaApiClient";

export class ApiError extends Error {
  status: number;
  code: string;
  details?: Record<string, string[]>;
  currentVersion?: string;
  existingTicket?: ApiErrorResponse["existingTicket"];

  constructor(status: number, body: ApiErrorResponse) {
    super(body.message || "Não foi possível concluir a operação.");
    this.name = "ApiError";
    this.status = status;
    this.code = body.code || "ERRO_API";
    this.details = body.details;
    this.currentVersion = body.currentVersion;
    this.existingTicket = body.existingTicket;
  }
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers);
  if (init.body && !(init.body instanceof FormData))
    headers.set("Content-Type", "application/json");
  headers.set("Accept", "application/json");
  const response = await qaFetch(path, { ...init, headers });
  if (!response.ok) {
    let body: ApiErrorResponse = {
      code: `HTTP_${response.status}`,
      message: response.statusText,
    };
    try {
      body = (await response.json()) as ApiErrorResponse;
    } catch {
      /* mantém o erro HTTP */
    }
    throw new ApiError(response.status, body);
  }
  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}

async function requestBlob(path: string): Promise<Blob> {
  const response = await qaFetch(path, {
    headers: { Accept: "*/*" },
  });
  if (!response.ok) {
    throw new ApiError(response.status, {
      code: `HTTP_${response.status}`,
      message: "Não foi possível carregar o conteúdo do anexo.",
    });
  }
  return response.blob();
}

function queryString(query: ListarChamadosQuery): string {
  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;
    if (Array.isArray(value))
      value.forEach((item) => params.append(key, String(item)));
    else params.set(key, String(value));
  });
  const value = params.toString();
  return value ? `?${value}` : "";
}

const json = (method: string, body?: unknown): RequestInit => ({
  method,
  body: body === undefined ? undefined : JSON.stringify(body),
});

export const chamadosApi = {
  catalogos: () =>
    request<ChamadoCatalogosResponse>("/api/qa/chamados/catalogos"),
  mapeamentoPaginas: () =>
    request<MapeamentoPaginasResponse>("/api/qa/chamados/mapeamento-paginas"),
  disponibilidadeItem: (itemPaginaId: number) =>
    request<DisponibilidadeItemPagina>(
      `/api/qa/chamados/mapeamento-paginas/itens/${itemPaginaId}/disponibilidade`,
    ),
  modulos: (sistemaId: number) =>
    request<ModuloSistema[]>(`/api/qa/sistemas/${sistemaId}/modulos`),
  listar: (query: ListarChamadosQuery = {}) =>
    request<PaginatedResponse<ChamadoResumo>>(
      `/api/qa/chamados${queryString(query)}`,
    ),
  usuariosAtribuicao: () =>
    request<UsuarioResumo[]>("/api/qa/chamados/usuarios-atribuicao"),
  obter: (chamadoId: number) =>
    request<ChamadoDetalhesResponse>(`/api/qa/chamados/${chamadoId}`),
  criar: (body: CriarChamadoRequest) =>
    request<ChamadoDetalhesResponse>("/api/qa/chamados", json("POST", body)),
  atualizar: (chamadoId: number, body: AtualizarChamadoRequest) =>
    request<ChamadoDetalhesResponse>(
      `/api/qa/chamados/${chamadoId}`,
      json("PUT", body),
    ),
  alterarStatus: (
    chamadoId: number,
    body: { novoStatusId: number; comentario: string | null; versao: string },
  ) =>
    request<ChamadoDetalhesResponse>(
      `/api/qa/chamados/${chamadoId}/status`,
      json("POST", body),
    ),
  atribuirResponsavel: (
    chamadoId: number,
    body: { usuarioId: number | null; versao: string },
  ) =>
    request<ChamadoDetalhesResponse>(
      `/api/qa/chamados/${chamadoId}/responsavel`,
      json("PUT", body),
    ),
  criarOcorrencia: (chamadoId: number, body: Record<string, unknown>) =>
    request<ChamadoOcorrencia>(
      `/api/qa/chamados/${chamadoId}/ocorrencias`,
      json("POST", body),
    ),
  criarComentario: (
    chamadoId: number,
    body: {
      texto: string;
      tipoComentario: string;
      comentarioPaiId: number | null;
      interno: boolean;
    },
  ) =>
    request<ChamadoComentario>(
      `/api/qa/chamados/${chamadoId}/comentarios`,
      json("POST", body),
    ),
  uploadAnexo: (chamadoId: number, formData: FormData) =>
    request<ChamadoAnexo>(`/api/qa/chamados/${chamadoId}/anexos`, {
      method: "POST",
      body: formData,
    }),
  conteudoAnexo: (chamadoId: number, anexoId: number) =>
    requestBlob(`/api/qa/chamados/${chamadoId}/anexos/${anexoId}/conteudo`),
  atualizarImagemAnexo: (chamadoId: number, anexoId: number, file: File, descricao: string, larguraImagem: number, alturaImagem: number) => {
    const form = new FormData();
    form.append("file", file);
    form.append("descricao", descricao);
    form.append("larguraImagem", String(larguraImagem));
    form.append("alturaImagem", String(alturaImagem));
    return request<ChamadoAnexo>(
      `/api/qa/chamados/${chamadoId}/anexos/${anexoId}/conteudo`,
      { method: "PUT", body: form },
    );
  },
  criarChecklist: (
    chamadoId: number,
    body: {
      titulo: string;
      descricao: string | null;
      ordem: number;
      obrigatorio: boolean;
    },
  ) =>
    request<ChamadoChecklist>(
      `/api/qa/chamados/${chamadoId}/checklist`,
      json("POST", body),
    ),
  atualizarChecklist: (
    chamadoId: number,
    checklistId: number,
    concluido: boolean,
  ) =>
    request<ChamadoChecklist>(
      `/api/qa/chamados/${chamadoId}/checklist/${checklistId}`,
      json("PUT", { concluido }),
    ),
  excluirChecklist: (chamadoId: number, checklistId: number) =>
    request<void>(`/api/qa/chamados/${chamadoId}/checklist/${checklistId}`, {
      method: "DELETE",
    }),
  adicionarEtiqueta: (chamadoId: number, etiquetaId: number) =>
    request(`/api/qa/chamados/${chamadoId}/etiquetas/${etiquetaId}`, {
      method: "POST",
    }),
  removerEtiqueta: (chamadoId: number, etiquetaId: number) =>
    request<void>(`/api/qa/chamados/${chamadoId}/etiquetas/${etiquetaId}`, {
      method: "DELETE",
    }),
  adicionarParticipante: (
    chamadoId: number,
    body: {
      usuarioId: number;
      tipoParticipacao: string;
      recebeNotificacao: boolean;
    },
  ) =>
    request<ChamadoParticipante>(
      `/api/qa/chamados/${chamadoId}/participantes`,
      json("POST", body),
    ),
  removerParticipante: (
    chamadoId: number,
    usuarioId: number,
    tipoParticipacao: string,
  ) =>
    request<void>(
      `/api/qa/chamados/${chamadoId}/participantes/${usuarioId}/${encodeURIComponent(tipoParticipacao)}`,
      { method: "DELETE" },
    ),
  adicionarRelacionamento: (
    chamadoId: number,
    body: {
      chamadoDestinoId: number;
      tipoRelacionamento: string;
      observacao: string | null;
    },
  ) =>
    request<ChamadoRelacionamento>(
      `/api/qa/chamados/${chamadoId}/relacionamentos`,
      json("POST", body),
    ),
  removerRelacionamento: (chamadoId: number, relacionamentoId: number) =>
    request<void>(
      `/api/qa/chamados/${chamadoId}/relacionamentos/${relacionamentoId}`,
      { method: "DELETE" },
    ),
  criarVinculo: (chamadoId: number, body: Omit<ChamadoVinculoExterno, "id">) =>
    request<ChamadoVinculoExterno>(
      `/api/qa/chamados/${chamadoId}/vinculos-externos`,
      json("POST", body),
    ),
  atualizarVinculo: (
    chamadoId: number,
    vinculoId: number,
    body: Partial<ChamadoVinculoExterno>,
  ) =>
    request<ChamadoVinculoExterno>(
      `/api/qa/chamados/${chamadoId}/vinculos-externos/${vinculoId}`,
      json("PUT", body),
    ),
  removerVinculo: (chamadoId: number, vinculoId: number) =>
    request<void>(
      `/api/qa/chamados/${chamadoId}/vinculos-externos/${vinculoId}`,
      { method: "DELETE" },
    ),
};

export function createAnexoFormData(input: {
  file: File;
  tipoAnexo: string;
  ocorrenciaId?: number | null;
  comentarioId?: number | null;
  legenda?: string;
  descricao?: string;
  larguraImagem?: number;
  alturaImagem?: number;
  exibirInline: boolean;
  sensivel: boolean;
  ordem?: number;
}) {
  const form = new FormData();
  form.append("file", input.file);
  form.append("tipoAnexo", input.tipoAnexo);
  form.append("exibirInline", String(input.exibirInline));
  form.append("sensivel", String(input.sensivel));
  if (input.ocorrenciaId != null)
    form.append("ocorrenciaId", String(input.ocorrenciaId));
  if (input.comentarioId != null)
    form.append("comentarioId", String(input.comentarioId));
  if (input.legenda) form.append("legenda", input.legenda);
  if (input.descricao) form.append("descricao", input.descricao);
  if (input.larguraImagem) form.append("larguraImagem", String(input.larguraImagem));
  if (input.alturaImagem) form.append("alturaImagem", String(input.alturaImagem));
  if (input.ordem != null) form.append("ordem", String(input.ordem));
  return form;
}
