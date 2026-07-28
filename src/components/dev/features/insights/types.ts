export type InsightSection =
  | "visuais"
  | "acessibilidade"
  | "internacionalizacao"
  | "performance-qa"
  | "concorrencia"
  | "relatorios-qualidade";

export type VisualPlan = {
  id: number;
  codigo: string;
  nome: string;
  rota: string;
  pagina: string;
  componente: string;
  tema: string;
  tolerancia: number;
  ignorarRegioes: string[];
  referencias: VisualReference[];
  comparacoes: VisualComparison[];
};
export type VisualReference = {
  id: number;
  versao: number;
  nome: string;
  imagemBase64: string;
  largura: number;
  altura: number;
  navegador: string;
  resolucao: string;
  tema: string;
  aprovada: boolean;
  aprovadaPor: string;
  aprovadaEm: string;
};
export type VisualComparison = {
  id: number;
  percentualDivergencia: number;
  pixelsDivergentes: number;
  totalPixels: number;
  status: string;
  diffBase64?: string;
  navegador: string;
  resolucao: string;
  tema: string;
  componente: string;
  executadaEm: string;
  alteracoes: string[];
};
export type AccessibilityPlan = {
  id: number;
  codigo: string;
  nome: string;
  rota: string;
  checklist: ChecklistItem[];
  auditorias: AccessibilityAudit[];
};
export type ChecklistItem = {
  codigo: string;
  nome: string;
  status: string;
  observacao?: string;
};
export type AccessibilityAudit = {
  id: number;
  totalViolacoes: number;
  totalNos: number;
  status: string;
  executadaEm: string;
  rota: string;
  navegador: string;
  violacoes: {
    id: string;
    impacto: string | null;
    descricao: string;
    ajuda: string;
    alvos: string[];
  }[];
  checklist: ChecklistItem[];
};
export type I18nPlan = {
  id: number;
  codigo: string;
  nome: string;
  locales: string[];
  fuso: string;
  moeda: string;
  comparacoes: I18nComparison[];
};
export type I18nComparison = {
  id: number;
  executadaEm: string;
  status: string;
  totalProblemas: number;
  resultados: {
    locale: string;
    direcao: string;
    data: string;
    horario: string;
    moeda: string;
    decimal: string;
    plural: string;
    ordenacao: string;
  }[];
  problemas: string[];
};
export type PerformancePlan = {
  id: number;
  codigo: string;
  nome: string;
  rota: string;
  limites: Record<string, number>;
  medicoes: PerformanceMeasurement[];
};
export type PerformanceMeasurement = {
  id: number;
  executadaEm: string;
  status: string;
  perfil: string;
  versao: string;
  limitesExcedidos: number;
  evidenciaAutomatica: boolean;
  metricas: Record<string, number>;
  longTasks: number;
  memoriaMb: number | null;
  volume: number;
};
export type ConcurrencyPlan = {
  id: number;
  codigo: string;
  nome: string;
  recurso: string;
  versaoInicial: number;
  execucoes: ConcurrencyExecution[];
};
export type ConcurrencyExecution = {
  id: number;
  executadaEm: string;
  aprovados: number;
  reprovados: number;
  resultados: {
    cenario: string;
    status: string;
    versaoAntes: number;
    versaoDepois: number;
    conflitoDetectado: boolean;
    rollbackExecutado: boolean;
    mensagem: string;
  }[];
};
export type QualityReport = {
  geradoEm: string;
  versao: string;
  riscoRelease: number;
  cobertura: Record<string, number>;
  execucao: Record<string, number>;
  bugs: {
    porSeveridade: Record<string, number>;
    porModulo: Record<string, number>;
    porVersao: Record<string, number>;
    reabertos: number;
    recorrentes: number;
  };
  tempos: { medioCorrecaoHoras: number; medioRetesteHoras: number };
  tendencia: { versao: string; qualidade: number }[];
  fontes: Record<string, number>;
};



