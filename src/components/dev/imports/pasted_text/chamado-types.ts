export type Entity = {
  id: number;
  codigo?: string;
  nome: string;
  corHex?: string | null;
  [key: string]: unknown;
};
export type UsuarioResumo = {
  id: number;
  nome: string;
  email: string | null;
  ativo: boolean;
};
export type Etiqueta = Entity & { corHex: string | null };
export type ModuloSistema = Entity & { sistemaId: number };
export type PaginaMapeada = {
  id: number;
  codigo: string;
  nome: string;
  rota: string;
  descricao: string | null;
  ordem: number;
  ativo: boolean;
};
export type ItemPaginaMapeado = {
  id: number;
  paginaId: number;
  parentId: number | null;
  tipo:
    | "AREA"
    | "TAB"
    | "SECAO"
    | "TABELA"
    | "COLUNA"
    | "SELECT"
    | "CAMPO"
    | "CHECKBOX"
    | "BOTAO"
    | "MODAL"
    | "FLUXO"
    | "LISTA"
    | "UPLOAD";
  codigo: string;
  nome: string;
  descricao: string | null;
  ordem: number;
  selecionavel: boolean;
  ativo: boolean;
};
export type MapeamentoPaginasResponse = {
  paginas: PaginaMapeada[];
  itens: ItemPaginaMapeado[];
};
export type DisponibilidadeItemPagina = {
  disponivel: boolean;
  existingTicket: ChamadoExistenteResumo | null;
};
export type ChamadoAlvoMapeado = {
  pagina: PaginaMapeada;
  item: ItemPaginaMapeado;
  caminho: Array<Pick<ItemPaginaMapeado, "id" | "tipo" | "nome">>;
};
export type ChamadoStatus = Entity & {
  codigo: string;
  ordemFluxo: number;
  ehFinal: boolean;
  permiteEdicao: boolean;
};
export type ChamadoPrioridade = Entity & {
  codigo: string;
  ordem: number;
  corHex: string | null;
};

export type Chamado = {
  id: number;
  codigo: string;
  titulo: string;
  descricao: string;
  passosReproducao: string[];
  resultadoEsperado: string | null;
  resultadoObtido: string | null;
  impactoNegocio: string | null;
  criterioAceite: string[];
  tipo: Entity;
  status: ChamadoStatus;
  prioridade: ChamadoPrioridade;
  severidade: Entity | null;
  ambiente: Entity;
  sistema: Entity;
  modulo: ModuloSistema | null;
  criadoPor: UsuarioResumo;
  atribuidoPara: UsuarioResumo | null;
  paginaId: number;
  itemPaginaId: number;
  alvoMapeado: ChamadoAlvoMapeado;
  dataOcorrencia: string | null;
  dataCriacao: string;
  dataAtualizacao: string;
  prazoResolucao: string | null;
  reproducaoPercentual: number | null;
  bloqueante: boolean;
  regressao: boolean;
  recorrente: boolean;
  exigeReteste: boolean;
  estimativaMinutos: number | null;
  versao: string;
  totalComentarios: number;
  totalAnexos: number;
  totalOcorrencias: number;
  totalChecklist: number;
  totalChecklistConcluido: number;
  etiquetas: Etiqueta[];
};

export type ChamadoResumo = Pick<
  Chamado,
  | "id"
  | "codigo"
  | "titulo"
  | "tipo"
  | "status"
  | "prioridade"
  | "severidade"
  | "ambiente"
  | "sistema"
  | "modulo"
  | "criadoPor"
  | "atribuidoPara"
  | "bloqueante"
  | "regressao"
  | "recorrente"
  | "dataCriacao"
  | "dataAtualizacao"
  | "prazoResolucao"
  | "totalComentarios"
  | "totalAnexos"
  | "etiquetas"
>;

export type ChamadoCatalogosResponse = {
  tipos: Entity[];
  status: ChamadoStatus[];
  prioridades: ChamadoPrioridade[];
  severidades: Entity[];
  ambientes: Entity[];
  sistemas: Entity[];
  etiquetas: Etiqueta[];
  modulos?: ModuloSistema[];
};

export type ListarChamadosQuery = {
  pagina?: number;
  tamanhoPagina?: number;
  termo?: string;
  statusIds?: number[];
  tipoIds?: number[];
  prioridadeIds?: number[];
  severidadeIds?: number[];
  ambienteIds?: number[];
  sistemaIds?: number[];
  moduloIds?: number[];
  criadoPorIds?: number[];
  atribuidoParaIds?: number[];
  etiquetaIds?: number[];
  bloqueante?: boolean;
  regressao?: boolean;
  recorrente?: boolean;
  criadoDe?: string;
  criadoAte?: string;
  atualizadoDe?: string;
  atualizadoAte?: string;
  prazoResolucaoAte?: string;
  somenteMeus?: boolean;
  somenteAtrasados?: boolean;
  ordenarPor?:
    | "dataCriacao"
    | "dataAtualizacao"
    | "prioridade"
    | "status"
    | "prazoResolucao";
  direcao?: "asc" | "desc";
};

export type PaginatedResponse<T> = {
  items: T[];
  pagina: number;
  tamanhoPagina: number;
  totalItens: number;
  totalPaginas: number;
  possuiPaginaAnterior: boolean;
  possuiProximaPagina: boolean;
};

export type CriarChamadoRequest = {
  paginaId: number;
  itemPaginaId: number;
  titulo: string;
  descricao: string;
  passosReproducao: string[];
  resultadoEsperado: string | null;
  resultadoObtido: string | null;
  impactoNegocio: string | null;
  criterioAceite: string[];
  tipoId: number;
  prioridadeId: number;
  severidadeId: number | null;
  ambienteId: number;
  sistemaId: number;
  moduloId: number | null;
  dataOcorrencia: string | null;
  reproducaoPercentual: number | null;
  bloqueante: boolean;
  regressao: boolean;
  recorrente: boolean;
  exigeReteste: boolean;
  salvarComoRascunho: boolean;
  ocorrenciaInicial: Record<string, unknown> | null;
  etiquetaIds: number[];
};

export type AtualizarChamadoRequest = Omit<
  CriarChamadoRequest,
  | "paginaId"
  | "itemPaginaId"
  | "salvarComoRascunho"
  | "ocorrenciaInicial"
  | "etiquetaIds"
> & {
  estimativaMinutos: number | null;
  versao: string;
};

export type ChamadoPermissoes = Record<string, boolean>;
export type ChamadoOcorrencia = {
  id: number;
  tipoOcorrencia: string;
  dataExecucao: string;
  observacoes?: string | null;
  executadoPor: UsuarioResumo;
  [key: string]: unknown;
};
export type ChamadoComentario = {
  id: number;
  texto: string;
  tipoComentario: string;
  interno: boolean;
  criadoEm: string;
  usuario: UsuarioResumo;
};
export type ChamadoAnexo = {
  id: number;
  tipoAnexo: string | null;
  nomeArquivo: string;
  mimeType: string | null;
  tamanhoBytes: number | null;
  url: string | null;
  legenda: string | null;
  descricao: string | null;
  larguraImagem: number | null;
  alturaImagem: number | null;
  exibirInline: boolean;
  sensivel: boolean;
  criadoEm: string;
};
export type ChamadoChecklist = {
  id: number;
  titulo: string;
  descricao: string | null;
  concluido: boolean;
  obrigatorio: boolean;
  ordem: number;
};
export type ChamadoParticipante = {
  usuario: UsuarioResumo;
  tipoParticipacao: string;
  recebeNotificacao: boolean;
  ativo: boolean;
};
export type ChamadoRelacionamento = {
  id: number;
  tipoRelacionamento: string;
  chamadoDestino: ChamadoResumo;
  observacao: string | null;
};
export type ChamadoVinculoExterno = {
  id: number;
  provedor: string;
  tipoVinculo: string;
  titulo: string | null;
  url: string;
  statusExterno: string | null;
};
export type ChamadoHistorico = {
  id: number;
  tipoEvento: string;
  campoAlterado: string | null;
  criadoEm: string;
  usuario: UsuarioResumo | null;
};
export type ChamadoStatusTransicao = {
  id: number;
  statusDestino: ChamadoStatus;
  nomeAcao: string;
  exigeComentario: boolean;
  exigeResponsavel: boolean;
};

export type ChamadoDetalhesResponse = {
  chamado: Chamado;
  ocorrencias: ChamadoOcorrencia[];
  comentarios: ChamadoComentario[];
  anexos: ChamadoAnexo[];
  checklist: ChamadoChecklist[];
  participantes: ChamadoParticipante[];
  relacionamentos: ChamadoRelacionamento[];
  vinculosExternos: ChamadoVinculoExterno[];
  historico: ChamadoHistorico[];
  transicoesDisponiveis: ChamadoStatusTransicao[];
  permissoes: ChamadoPermissoes;
};

export type ChamadoExistenteResumo = {
  id: number;
  codigo: string;
  titulo: string;
  status: ChamadoStatus;
};
export type ApiErrorResponse = {
  code: string;
  message: string;
  details?: Record<string, string[]>;
  traceId?: string;
  currentVersion?: string;
  existingTicket?: ChamadoExistenteResumo;
};
