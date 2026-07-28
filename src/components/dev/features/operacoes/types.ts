export type OperationCatalogs = {
  classificacoesDescoberta: string[];
  frequencias: string[];
  severidades: string[];
  prioridades: string[];
  tiposDefeito: string[];
  tiposEvidencia: string[];
  estrategiasMassa: string[];
};

export type ExplorationNote = {
  id: number;
  tipo: string;
  texto: string;
  classificacao: string;
  area: string;
  data: string;
  convertidaEm?: string | null;
};

export type Exploration = {
  id: number;
  codigo: string;
  titulo: string;
  missao: string;
  duracaoMinutos: number;
  status: "PLANEJADA" | "EM_ANDAMENTO" | "CONCLUIDA";
  responsavel: string;
  ambiente: string;
  dadosUsados: string;
  inicio: string | null;
  fim: string | null;
  areasCobertas: string[];
  areasNaoCobertas: string[];
  anotacoes: ExplorationNote[];
  caminhos: string[];
  marcadores: string[];
  evidenciaIds: number[];
  versao: string;
  dataAtualizacao: string;
};

export type Defect = {
  id: number;
  codigo: string;
  titulo: string;
  descricao: string;
  passosReproducao: string[];
  resultadoEsperado: string;
  resultadoAtual: string;
  frequencia: string;
  severidade: string;
  prioridade: string;
  ambiente: string;
  versaoSistema: string;
  navegador: string;
  sistemaOperacional: string;
  dispositivo: string;
  perfilUtilizado: string;
  dadosTeste: string;
  screenshots: string[];
  videos: string[];
  logs: string;
  requisicoesRelacionadas: string[];
  stackTrace: string;
  traceId: string;
  horarioExato: string;
  urlPagina: string;
  estadoAplicacao: string;
  modulo: string;
  tipo: string;
  regressao: boolean;
  intermitente: boolean;
  bugsSimilares: string[];
  causaProvavel: string;
  criteriosAceite: string[];
  status: string;
  responsavelAtual: string;
  comentarios: { id: number; texto: string; autor: string; data: string }[];
  checklistReteste: string[];
  evidenciasCorrecao: string[];
  historicoStatus: {
    id: number;
    status: string;
    usuario: string;
    data: string;
  }[];
  dataCriacao: string;
  dataAtualizacao: string;
};

export type Evidence = {
  id: number;
  codigo: string;
  titulo: string;
  origem: string;
  tipos: string[];
  rota: string;
  resolucao: string;
  navegadorDispositivo: string;
  versaoSistema: string;
  console: string;
  rede: string;
  estadoAplicacao: string;
  storageAutorizado: string;
  ultimasAcoes: string[];
  arquivos: {
    nome: string;
    tipo: string;
    tamanho: number;
    conteudoBase64?: string;
  }[];
  anonimizado: boolean;
  chamadoCodigo: string | null;
  uploadDireto: boolean;
  capturadoEm: string;
  hashSha256: string;
  imutavel: boolean;
  pacoteZip: string;
};

export type ScriptAction = {
  id?: number;
  tipo: string;
  descricao: string;
  rota: string;
  valor?: string | null;
  data?: string;
};

export type SessionScript = {
  id: number;
  codigo: string;
  titulo: string;
  descricao: string;
  status: string;
  compartilhado: boolean;
  criadoPor: string;
  dataCriacao: string;
  acoes: ScriptAction[];
  dadosSensiveisRemovidos: boolean;
  ultimaReproducao: null | {
    data: string;
    ambiente: string;
    sucesso: boolean;
    pontoDivergencia: number | null;
    comparacao: string;
  };
  versao: string;
};

export type TestDataSet = {
  id: number;
  codigo: string;
  nome: string;
  tipo: string;
  perfil: string;
  estrategias: string[];
  quantidade: number;
  template: string;
  dados: Record<string, unknown>[];
  origem: string;
  compartilhada: boolean;
  criadoPor: string;
  dataCriacao: string;
  dataAtualizacao: string;
  expiraEm: string;
  status: string;
  limpezaSegura: boolean;
};



