export type TestCatalogs = {
  prioridades: string[];
  criticidades: string[];
  tiposTeste: string[];
  ambientes: string[];
  navegadores: string[];
  dispositivos: string[];
  usuarios: string[];
  modulos: string[];
  passosCompartilhados: SharedStep[];
};

export type SharedStep = {
  id: number;
  nome: string;
  acao: string;
  resultadoEsperado: string;
};

export type TestStep = {
  acao: string;
  resultadoEsperado: string;
  passoCompartilhadoId: number | null;
};

export type TestParameter = {
  nome: string;
  valor: string;
};

export type TestAttachment = {
  id?: number;
  nome: string;
  tipo?: string | null;
  tamanho?: number;
  adicionadoEm?: string;
};

export type TestHistory = {
  id: number;
  evento: string;
  descricao: string;
  usuario: string;
  data: string;
};

export type TestVersion = {
  numero: number;
  data: string;
  titulo: string;
  alteradoPor: string;
};

export type TestCase = {
  id: number;
  codigo: string;
  status: "ATIVO" | "ARQUIVADO";
  titulo: string;
  modulo: string;
  funcionalidade: string;
  requisito: string;
  historiaTarefa: string;
  preCondicoes: string[];
  passos: TestStep[];
  resultadoObtidoReferencia: string;
  prioridade: string;
  criticidade: string;
  tipoTeste: string;
  tags: string[];
  responsavel: string;
  tempoEstimadoMinutos: number;
  parametrizado: boolean;
  reutilizavel: boolean;
  parametros: TestParameter[];
  bugsRelacionados: string[];
  versoesRelacionadas: string[];
  anexos: TestAttachment[];
  numeroVersao: number;
  versao: string;
  dataCriacao: string;
  dataAtualizacao: string;
  versoes: TestVersion[];
  historico: TestHistory[];
  origemDuplicacaoId?: number | null;
};

export type TestCaseSummary = Omit<
  TestCase,
  "preCondicoes" | "passos" | "versoes" | "historico"
>;

export type TestCaseInput = Omit<
  TestCase,
  | "id"
  | "codigo"
  | "status"
  | "numeroVersao"
  | "versao"
  | "dataCriacao"
  | "dataAtualizacao"
  | "versoes"
  | "historico"
  | "origemDuplicacaoId"
>;

export type TestPlan = {
  id: number;
  codigo: string;
  nome: string;
  objetivo: string;
  versao: string;
  casoIds: number[];
  status: string;
  criadoPor: string;
  dataCriacao: string;
};

export type TestMetrics = {
  total: number;
  executados: number;
  aprovados: number;
  reprovados: number;
  bloqueados: number;
  naoExecutados: number;
  percentualConcluido: number;
  taxaAprovacao: number;
  taxaBloqueio: number;
  duracaoTotalMinutos: number;
};

export type TestExecution = {
  id: number;
  casoId: number;
  casoCodigo: string;
  casoTitulo: string;
  status: "NAO_EXECUTADO" | "APROVADO" | "REPROVADO" | "BLOQUEADO";
  observacoes: string | null;
  duracaoMinutos: number | null;
  executor: string | null;
  ambiente: string;
  navegador: string;
  dispositivo: string;
  versaoTestada: string;
  afetado: boolean;
  tentativas: number;
  dataExecucao: string | null;
};

export type TestCycle = {
  id: number;
  codigo: string;
  nome: string;
  planoId: number | null;
  planoNome: string | null;
  versaoTestada: string;
  ambiente: string;
  navegador: string;
  dispositivo: string;
  colaborativo: boolean;
  executores: string[];
  status: "PLANEJADO" | "EM_EXECUCAO" | "PAUSADO" | "CONCLUIDO";
  dataCriacao: string;
  dataAtualizacao: string;
  metricas: TestMetrics;
  execucoes: TestExecution[];
};

export type TestCycleSummary = Omit<TestCycle, "execucoes">;

export type TestWorkspace = {
  casos: TestCase[];
  planos: TestPlan[];
  ciclos: TestCycle[];
  passosCompartilhados: SharedStep[];
  catalogos: TestCatalogs;
};


