export type ValidationCatalogs = {
  ambientes: string[];
  statusCombinacao: string[];
  tiposAutenticacao: string[];
  metodosHttp: string[];
  tiposSuite: string[];
  cenariosFormulario: string[];
  verificacoesResponsivas: string[];
};

export type EnvironmentCombination = {
  id: number;
  ambiente: string;
  navegador: string;
  sistemaOperacional: string;
  resolucao: string;
  dispositivo: string;
  versaoAplicativo: string;
  versaoApi: string;
  regiao: string;
  perfil: string;
  featureFlags: string;
  status: string;
  executadoEm: string | null;
  observacao?: string;
};
export type EnvironmentMatrix = {
  id: number;
  codigo: string;
  nome: string;
  ambientes: string[];
  navegadores: string[];
  sistemasOperacionais: string[];
  resolucoes: string[];
  dispositivos: string[];
  versoesAplicativo: string[];
  versoesApi: string[];
  regioes: string[];
  perfis: string[];
  featureFlags: string[];
  combinacoes: EnvironmentCombination[];
  historico: Record<string, unknown>[];
  dataAtualizacao: string;
};

export type FormResult = {
  id: number;
  cenario: string;
  status: string;
  mensagem: string;
  executadoEm?: string;
};
export type FormSuite = {
  id: number;
  codigo: string;
  nome: string;
  rota: string;
  campos: {
    nome: string;
    tipo: string;
    obrigatorio: boolean;
    minimo: number | null;
    maximo: number | null;
    aceitaDuplicado: boolean;
  }[];
  resultados: FormResult[];
  ultimaExecucao: string | null;
  dataAtualizacao: string;
};

export type ApiRequest = {
  id: number;
  codigo: string;
  nome: string;
  colecaoId: number | null;
  metodo: string;
  url: string;
  headers: Record<string, string>;
  query: Record<string, string>;
  payload: unknown;
  autenticacao: { tipo: string; valor?: string; header?: string };
  extracoes: { nome: string; caminho: string }[];
  validacoes: {
    statusEsperado: number;
    tempoMaximoMs: number;
    schema?: string;
    camposObrigatorios?: string[];
  };
  encadearComId: number | null;
  ultimaExecucao: ApiExecution | null;
  dataAtualizacao: string;
};
export type ApiExecution = {
  executadoEm: string;
  url: string;
  status: number;
  tempoMs: number;
  response?: string;
  erro?: string;
  validacoes: Record<string, boolean>;
  extracoes?: Record<string, unknown>;
};
export type ApiWorkspace = {
  requisicoes: ApiRequest[];
  colecoes: {
    id: number;
    codigo: string;
    nome: string;
    descricao: string;
    requisicaoIds: number[];
  }[];
  ambientes: { id: number; nome: string; variaveis: Record<string, string> }[];
};

export type PermissionRow = {
  id?: number;
  perfil: string;
  visualizar: boolean;
  criar: boolean;
  editar: boolean;
  excluir: boolean;
  exportar: boolean;
};
export type PermissionMatrix = {
  id: number;
  codigo: string;
  nome: string;
  funcionalidade: string;
  matriz: PermissionRow[];
  cenarios: string[];
  historico: Record<string, unknown>[];
  ultimaExecucao: null | {
    data: string;
    resultados: {
      perfil: string;
      cenario: string;
      status: string;
      mensagem: string;
    }[];
  };
};

export type RegressionSuite = {
  id: number;
  codigo: string;
  nome: string;
  versao: string;
  tipo: string;
  modulo: string;
  funcionalidadeAlterada: string;
  casosObrigatorios: string[];
  areasImpactadas: string[];
  criteriosBloqueio: string[];
  metricas: {
    total: number;
    aprovados: number;
    falhos: number;
    instaveis: number;
    nuncaExecutados: number;
    obsoletos: number;
  };
  historicoFalhas: string[];
  comparacaoVersaoAnterior: string;
  priorizacao: { risco: number; uso: number; historicoDefeitos: number };
  statusRelease: string;
  dataAtualizacao: string;
};

export type ResponsiveExecution = {
  id: number;
  resolucao: string;
  dispositivo: string;
  orientacao: string;
  zoom: number;
  escalaSistema: number;
  data: string;
  resultados: { verificacao: string; status: string }[];
};
export type ResponsivePlan = {
  id: number;
  codigo: string;
  nome: string;
  rota: string;
  resolucoes: string[];
  dispositivosPersonalizados: string[];
  orientacoes: string[];
  zoomNavegador: number[];
  escalaSistema: number[];
  verificacoes: string[];
  execucoes: ResponsiveExecution[];
  capturas: { nome: string; resolucao: string; conteudoBase64?: string }[];
  dataAtualizacao: string;
};



