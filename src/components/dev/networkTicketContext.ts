import type {
  MapeamentoPaginasResponse,
  PaginaMapeada,
} from "./features/chamados/types";
import type { NetworkLog } from "./useNetworkLogger";
import {
  buildSafeCurl,
  formatNetworkValue,
  networkRequestSummary,
} from "./networkEvidence";

export type AutomaticTicketTarget = {
  failureId: string;
  paginaId: number;
  itemPaginaId: number;
  paginaCodigo: string;
  paginaNome: string;
  itemCodigo: string;
  itemNome: string;
  itemTipo: string;
  pagePath: string;
  endpointPath: string;
  method: string;
  status: number;
  tipoId?: number;
  tipoCodigo: string;
  prioridadeCodigo: string;
  severidadeCodigo: string;
  ambienteId?: number;
  ambienteCodigo?: string;
  sistemaId?: number;
  sistemaCodigo?: string;
  moduloId?: number;
  etiquetaNomes: string[];
  summary: string;
  curl: string;
  payload: string;
  response: string;
};

export type AutomaticTicketResolutionContext = {
  environmentCode?: string;
};

function numericField(value: unknown, names: string[], depth = 0, visited = new Set<object>()): number | undefined {
  if (!value || typeof value !== "object" || depth > 5 || visited.has(value)) return undefined;
  visited.add(value);
  const record = value as Record<string, unknown>;
  for (const name of names) {
    const candidate = record[name];
    const numeric = typeof candidate === "number" ? candidate : typeof candidate === "string" && candidate.trim() ? Number(candidate) : NaN;
    if (Number.isInteger(numeric) && numeric > 0) return numeric;
  }
  for (const nested of Object.values(record)) {
    const found = numericField(nested, names, depth + 1, visited);
    if (found !== undefined) return found;
  }
  return undefined;
}

function getEndpointPath(url: string): string {
  try {
    return new URL(url, window.location.origin).pathname;
  } catch {
    return url.split("?")[0];
  }
}

function routeMatches(route: string, path: string): boolean {
  const pattern = route
    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    .replace(/\\\{[^}]+\\\}/g, "[^/]+");
  return new RegExp(`^${pattern}/?$`, "i").test(path);
}

function pageFromEndpoint(
  pages: PaginaMapeada[],
  path: string,
  method: string,
): PaginaMapeada | undefined {
  const byCode = (code: string) => pages.find((page) => page.codigo === code);

  if (/\/api\/qa\/devtools\/auth/i.test(path))
    return byCode("AUTENTICACAO_DEV");
  if (/\/api\/qa\/devtools\/flags/i.test(path)) return byCode("FLAGS_DEV");
  if (/\/api\/qa\/devtools\/rede/i.test(path))
    return byCode("SIMULADOR_REDE_DEV");
  if (/\/api\/qa\/devtools\/backend/i.test(path)) return byCode("BACKEND_DEV");
  if (/\/api\/qa\/devtools\/ambiente/i.test(path))
    return byCode("AMBIENTE_DEV");
  if (/\/api\/qa\/insights\/visuais/i.test(path))
    return byCode("TESTES_VISUAIS");
  if (/\/api\/qa\/insights\/acessibilidade/i.test(path))
    return byCode("ACESSIBILIDADE");
  if (/\/api\/qa\/insights\/internacionalizacao/i.test(path))
    return byCode("INTERNACIONALIZACAO");
  if (/\/api\/qa\/insights\/performance/i.test(path))
    return byCode("PERFORMANCE_QA");
  if (/\/api\/qa\/insights\/concorrencia/i.test(path))
    return byCode("CONCORRENCIA");
  if (/\/api\/qa\/insights\/relatorios/i.test(path))
    return byCode("RELATORIOS_QUALIDADE");
  if (/\/api\/qa\/colaboracao\/diagnosticos/i.test(path))
    return byCode("DIAGNOSTICO_SESSAO");
  if (/\/api\/qa\/colaboracao\/anotacoes/i.test(path))
    return byCode("ANOTACOES_VISUAIS");
  if (/\/api\/qa\/colaboracao\/tarefas/i.test(path))
    return byCode("INTEGRACOES_TAREFAS");
  if (/\/api\/qa\/colaboracao\/notificacoes/i.test(path))
    return byCode("NOTIFICACOES_QA");
  if (/\/api\/qa\/chamados\/\d+(?:\/|$)/i.test(path)) {
    return byCode("CHAMADOS_DETALHES");
  }
  if (path === "/api/qa/chamados" && method === "POST") {
    return byCode("CHAMADOS_NOVO");
  }
  return byCode("CHAMADOS_LISTA");
}

function desiredItemCodes(path: string, method: string): string[] {
  if (/\/api\/qa\/devtools\/auth\/renovar/i.test(path))
    return ["RENOVAR_TOKEN_AUTH"];
  if (/\/api\/qa\/devtools\/auth\/simular/i.test(path))
    return ["SIMULAR_PERFIS_AUTH"];
  if (/\/api\/qa\/devtools\/auth\/verificar/i.test(path))
    return ["VERIFICAR_PERMISSAO_AUTH"];
  if (/\/api\/qa\/devtools\/auth\/contexto/i.test(path))
    return ["PERMISSOES_EFETIVAS_AUTH"];
  if (/\/api\/qa\/devtools\/flags\/resetar/i.test(path)) return ["RESET_FLAGS"];
  if (/\/api\/qa\/devtools\/flags\/\d+\/simular/i.test(path))
    return ["SIMULACAO_FLAGS"];
  if (/\/api\/qa\/devtools\/flags\/\d+\/alternar/i.test(path))
    return ["ATIVAR_FLAG", "DESATIVAR_FLAG"];
  if (/\/api\/qa\/devtools\/flags/i.test(path)) return ["HISTORICO_FLAG"];
  if (/\/api\/qa\/devtools\/rede\/cenarios/i.test(path))
    return [
      method === "POST"
        ? "COMPARTILHAR_CENARIO_QA"
        : "SALVAR_CENARIO_SIMULACAO",
    ];
  if (/\/api\/qa\/devtools\/backend\/jobs/i.test(path))
    return ["REPROCESSAR_JOB"];
  if (/\/api\/qa\/devtools\/backend\/diagnostico/i.test(path))
    return ["SAUDE_CONEXAO_BANCO"];
  if (/\/api\/qa\/devtools\/ambiente/i.test(path))
    return ["AMBIENTE_ATUAL_DEV"];
  if (/\/api\/qa\/colaboracao\/diagnosticos\/\d+\/pacote$/i.test(path))
    return ["IDENTIFICADOR_DIAGNOSTICO"];
  if (/\/api\/qa\/colaboracao\/diagnosticos$/i.test(path))
    return [
      method === "POST"
        ? "SCREENSHOTS_DIAGNOSTICO"
        : "IDENTIFICADOR_DIAGNOSTICO",
    ];
  if (/\/api\/qa\/colaboracao\/anotacoes\/\d+\/converter$/i.test(path))
    return ["CONVERTER_NOTA_BUG", "CONVERTER_NOTA_TAREFA"];
  if (/\/api\/qa\/colaboracao\/anotacoes\/\d+\/comentarios$/i.test(path))
    return ["COMENTARIO_COORDENADA", "HISTORICO_COMENTARIOS_NOTA"];
  if (/\/api\/qa\/colaboracao\/anotacoes\/\d+\/status$/i.test(path))
    return ["STATUS_NOTA"];
  if (/\/api\/qa\/colaboracao\/anotacoes$/i.test(path))
    return [method === "POST" ? "DESENHAR_SCREENSHOT" : "NOTA_TELA"];
  if (
    /\/api\/qa\/colaboracao\/tarefas\/\d+\/comentarios\/sincronizar$/i.test(
      path,
    )
  )
    return ["SINCRONIZAR_COMENTARIOS"];
  if (/\/api\/qa\/colaboracao\/tarefas\/\d+\/status$/i.test(path))
    return ["ATUALIZAR_STATUS_TAREFA", "VERSAO_CORRIGIDA"];
  if (/\/api\/qa\/colaboracao\/tarefas$/i.test(path))
    return [
      method === "POST" ? "CRIAR_ISSUE_EXTERNA" : "ASSOCIAR_EVIDENCIAS_TAREFA",
    ];
  if (/\/api\/qa\/colaboracao\/notificacoes/i.test(path))
    return ["NOVO_BUG_CRITICO"];
  if (/\/api\/qa\/insights\/visuais\/\d+\/referencias$/i.test(path))
    return ["APROVAR_REFERENCIA", "HISTORICO_REFERENCIAS"];
  if (/\/api\/qa\/insights\/visuais\/\d+\/comparacoes$/i.test(path))
    return ["COMPARACAO_PIXEL", "REGIOES_DIVERGENTES"];
  if (/\/api\/qa\/insights\/visuais$/i.test(path))
    return [
      method === "POST" ? "SCREENSHOT_REFERENCIA" : "HISTORICO_REFERENCIAS",
    ];
  if (/\/api\/qa\/insights\/acessibilidade\/\d+\/auditorias$/i.test(path))
    return ["VIOLACOES_ACESSIBILIDADE", "RELATORIO_ACESSIBILIDADE"];
  if (/\/api\/qa\/insights\/acessibilidade$/i.test(path))
    return ["CHECKLIST_PAGINA_A11Y"];
  if (/\/api\/qa\/insights\/internacionalizacao\/\d+\/comparar$/i.test(path))
    return ["COMPARACAO_IDIOMAS"];
  if (/\/api\/qa\/insights\/internacionalizacao$/i.test(path))
    return ["IDIOMAS"];
  if (/\/api\/qa\/insights\/performance\/\d+\/medicoes$/i.test(path))
    return ["EVIDENCIA_LIMITE_EXCEDIDO", "TEMPO_ABERTURA_TELA"];
  if (/\/api\/qa\/insights\/performance$/i.test(path))
    return ["LIMITES_FUNCIONALIDADE"];
  if (/\/api\/qa\/insights\/concorrencia\/\d+\/executar$/i.test(path))
    return ["CONFLITO_VERSAO", "ROLLBACK_APOS_FALHA"];
  if (/\/api\/qa\/insights\/concorrencia$/i.test(path))
    return ["ATUALIZACAO_SIMULTANEA"];
  if (/\/api\/qa\/insights\/relatorios\/qualidade$/i.test(path))
    return ["TENDENCIA_QUALIDADE", "RISCO_RELEASE"];
  if (/\/api\/qa\/validacoes\/ambientes\/\d+\/gerar-combinacoes$/i.test(path))
    return ["COMBINACOES_FEATURE_FLAGS"];
  if (
    /\/api\/qa\/validacoes\/ambientes\/\d+\/combinacoes\/\d+\/executar$/i.test(
      path,
    )
  )
    return ["STATUS_COMBINACAO", "HISTORICO_AMBIENTE"];
  if (/\/api\/qa\/validacoes\/ambientes$/i.test(path))
    return [method === "POST" ? "AMBIENTE_HOMOLOGACAO" : "COBERTURA_AMBIENTE"];
  if (/\/api\/qa\/validacoes\/formularios\/\d+\/executar$/i.test(path))
    return ["MENSAGENS_VALIDACAO"];
  if (/\/api\/qa\/validacoes\/formularios$/i.test(path))
    return [method === "POST" ? "CAMPOS_OBRIGATORIOS" : "MENSAGENS_VALIDACAO"];
  if (/\/api\/qa\/validacoes\/apis\/requisicoes\/\d+\/executar$/i.test(path))
    return ["EXECUTAR_ENDPOINT", "VALIDAR_STATUS_HTTP"];
  if (/\/api\/qa\/validacoes\/apis\/requisicoes$/i.test(path))
    return ["SALVAR_REQUISICAO"];
  if (/\/api\/qa\/validacoes\/apis\/colecoes$/i.test(path))
    return ["ORGANIZAR_COLECOES"];
  if (/\/api\/qa\/validacoes\/apis\/ambientes$/i.test(path))
    return ["VARIAVEIS_AMBIENTE_API"];
  if (/\/api\/qa\/validacoes\/apis\/importar-openapi$/i.test(path))
    return ["IMPORTAR_OPENAPI"];
  if (/\/api\/qa\/validacoes\/apis\/exportar-colecao\/\d+$/i.test(path))
    return ["EXPORTAR_COLECAO"];
  if (/\/api\/qa\/validacoes\/apis$/i.test(path)) return ["EXECUTAR_ENDPOINT"];
  if (/\/api\/qa\/validacoes\/permissoes\/\d+\/executar$/i.test(path))
    return ["HISTORICO_PERMISSOES"];
  if (/\/api\/qa\/validacoes\/permissoes$/i.test(path))
    return [
      method === "POST"
        ? "MATRIZ_PERFIL_FUNCIONALIDADE"
        : "HISTORICO_PERMISSOES",
    ];
  if (/\/api\/qa\/validacoes\/regressoes\/\d+\/avaliar$/i.test(path))
    return ["RELATORIO_PRONTIDAO", "BLOQUEIO_RELEASE"];
  if (/\/api\/qa\/validacoes\/regressoes$/i.test(path))
    return [
      method === "POST" ? "SUITE_REGRESSAO_GERAL" : "RELATORIO_PRONTIDAO",
    ];
  if (/\/api\/qa\/validacoes\/responsivos\/\d+\/executar$/i.test(path))
    return ["CAPTURA_COMPARATIVA"];
  if (/\/api\/qa\/validacoes\/responsivos\/\d+\/relatorio$/i.test(path))
    return ["RELATORIO_DIVERGENCIAS_VISUAIS"];
  if (/\/api\/qa\/validacoes\/responsivos$/i.test(path))
    return [
      method === "POST"
        ? "RESOLUCOES_PRE_CONFIGURADAS"
        : "RELATORIO_DIVERGENCIAS_VISUAIS",
    ];
  if (
    /\/api\/qa\/operacoes\/exploracoes\/\d+\/anotacoes\/\d+\/converter$/i.test(
      path,
    )
  )
    return ["CONVERTER_ANOTACAO_BUG", "CONVERTER_ANOTACAO_MELHORIA"];
  if (/\/api\/qa\/operacoes\/exploracoes\/\d+\/anotacoes$/i.test(path))
    return ["ANOTACOES_RAPIDAS"];
  if (/\/api\/qa\/operacoes\/exploracoes\/comparar$/i.test(path))
    return ["COMPARAR_EXPLORACOES"];
  if (/\/api\/qa\/operacoes\/exploracoes\/\d+$/i.test(path))
    return ["LINHA_TEMPO_EXPLORACAO"];
  if (/\/api\/qa\/operacoes\/exploracoes$/i.test(path))
    return [method === "POST" ? "CRIAR_EXPLORACAO" : "RESUMO_EXPLORACAO"];
  if (/\/api\/qa\/operacoes\/defeitos\/\d+\/status$/i.test(path))
    return ["HISTORICO_STATUS_DEFEITO"];
  if (/\/api\/qa\/operacoes\/defeitos\/\d+\/comentarios$/i.test(path))
    return ["COMENTARIOS_DEFEITO"];
  if (/\/api\/qa\/operacoes\/defeitos\/\d+$/i.test(path))
    return ["DESCRICAO_DETALHADA"];
  if (/\/api\/qa\/operacoes\/defeitos$/i.test(path))
    return [method === "POST" ? "TITULO_PADRONIZADO" : "DESCRICAO_DETALHADA"];
  if (/\/api\/qa\/operacoes\/evidencias\/\d+\/vincular$/i.test(path))
    return ["UPLOAD_EVIDENCIA_CHAMADO"];
  if (/\/api\/qa\/operacoes\/evidencias\/\d+\/pacote$/i.test(path))
    return ["GERAR_ZIP_EVIDENCIAS"];
  if (/\/api\/qa\/operacoes\/evidencias$/i.test(path))
    return [
      method === "POST" ? "GERAR_ZIP_EVIDENCIAS" : "IDENTIFICADOR_EVIDENCIA",
    ];
  if (/\/api\/qa\/operacoes\/roteiros\/\d+\/reproduzir$/i.test(path))
    return ["REPRODUZIR_SEQUENCIA", "PONTO_DIVERGENCIA"];
  if (/\/api\/qa\/operacoes\/roteiros\/\d+$/i.test(path))
    return ["EDITAR_PASSOS_GERADOS"];
  if (/\/api\/qa\/operacoes\/roteiros$/i.test(path))
    return [method === "POST" ? "CRIAR_ROTEIRO" : "REGISTRAR_ACOES"];
  if (/\/api\/qa\/operacoes\/massas\/limpar-expiradas$/i.test(path))
    return ["LIMPEZA_SEGURA_MASSA"];
  if (/\/api\/qa\/operacoes\/massas\/gerar$/i.test(path))
    return ["GERAR_MASSA_AUTOMATICA"];
  if (/\/api\/qa\/operacoes\/massas\/\d+\/acao$/i.test(path))
    return [
      "RESETAR_MASSA",
      "CLONAR_MASSA",
      "COMPARTILHAR_MASSA",
      "LIMPEZA_SEGURA_MASSA",
    ];
  if (/\/api\/qa\/operacoes\/massas$/i.test(path))
    return [method === "POST" ? "CRIAR_MASSA_MANUAL" : "CRIADOR_MASSA"];
  if (/\/api\/qa\/testes\/casos\/exportar$/i.test(path))
    return ["EXPORTAR_CASOS"];
  if (/\/api\/qa\/testes\/casos\/importar$/i.test(path))
    return ["IMPORTAR_CASOS"];
  if (/\/api\/qa\/testes\/casos\/\d+\/duplicar$/i.test(path))
    return ["DUPLICAR_CASO"];
  if (/\/api\/qa\/testes\/casos\/\d+\/arquivar$/i.test(path))
    return ["ARQUIVAR_CASO"];
  if (/\/api\/qa\/testes\/casos\/\d+\/anexos$/i.test(path)) return ["ANEXOS"];
  if (/\/api\/qa\/testes\/casos\/\d+$/i.test(path))
    return [method === "PUT" ? "EDITAR_CASO" : "CARREGAR_CASOS"];
  if (/\/api\/qa\/testes\/casos$/i.test(path))
    return [method === "POST" ? "CRIAR_CASO" : "CARREGAR_CASOS"];
  if (/\/api\/qa\/testes\/planos$/i.test(path))
    return [method === "POST" ? "CRIAR_PLANO" : "CARREGAR_CICLOS"];
  if (/\/api\/qa\/testes\/ciclos\/\d+\/execucoes\/\d+$/i.test(path))
    return ["MARCAR_APROVADO"];
  if (/\/api\/qa\/testes\/ciclos\/\d+\/reexecutar$/i.test(path))
    return ["REEXECUTAR_FALHOS", "REEXECUTAR_AFETADOS"];
  if (/\/api\/qa\/testes\/ciclos\/\d+\/clonar$/i.test(path))
    return ["CLONAR_CICLO"];
  if (/\/api\/qa\/testes\/ciclos\/\d+\/relatorio$/i.test(path))
    return ["RELATORIO_FINAL"];
  if (/\/api\/qa\/testes\/ciclos\/\d+\/estado$/i.test(path))
    return ["PAUSAR_EXECUCAO", "RETOMAR_EXECUCAO"];
  if (/\/api\/qa\/testes\/ciclos$/i.test(path))
    return [method === "POST" ? "CRIAR_CICLO" : "CARREGAR_CICLOS"];
  if (/\/api\/qa\/testes\/ciclos\/\d+$/i.test(path)) return ["CARREGAR_CICLOS"];
  if (/\/catalogos$|\/mapeamento-paginas$/i.test(path))
    return ["CARREGAR_DADOS_INICIAIS"];
  if (/\/mapeamento-paginas\/itens\/\d+\/disponibilidade$/i.test(path))
    return ["CHAMADO_RAPIDO"];
  if (/\/sistemas\/\d+\/modulos$/i.test(path)) return ["CARREGAR_MODULOS"];
  if (path === "/api/qa/chamados" && method === "POST") return ["CRIAR"];
  if (path === "/api/qa/chamados") return ["CARREGAR_LISTAGEM", "FILTRAR"];
  if (/\/status$/i.test(path)) return ["ALTERAR_STATUS"];
  if (/\/responsavel$/i.test(path)) return ["ATRIBUIR_RESPONSAVEL", "ATRIBUIR"];
  if (/\/comentarios$/i.test(path))
    return ["PUBLICAR_COMENTARIO", "COMENTARIOS"];
  if (/\/ocorrencias$/i.test(path))
    return ["REGISTRAR_OCORRENCIA", "LISTA_OCORRENCIAS"];
  if (/\/anexos$/i.test(path)) return ["ANEXAR_EVIDENCIA", "ENVIAR_ANEXO"];
  if (/\/checklist(?:\/\d+)?$/i.test(path))
    return ["CONCLUIR_ITEM", "ITENS_CHECKLIST"];
  if (/\/etiquetas\/\d+$/i.test(path)) return ["ETIQUETAS"];
  if (/\/participantes(?:\/|$)/i.test(path)) return ["PARTICIPANTES"];
  if (/\/relacionamentos(?:\/|$)/i.test(path)) return ["RELACIONAMENTOS"];
  if (/\/vinculos-externos(?:\/|$)/i.test(path)) return ["VINCULOS_EXTERNOS"];
  if (/\/api\/qa\/chamados\/\d+$/i.test(path) && method === "PUT")
    return ["EDITAR"];
  if (/\/api\/qa\/chamados\/\d+$/i.test(path))
    return ["CARREGAR_DETALHES", "DESCRICAO"];
  return ["CARREGAR_DADOS_INICIAIS", "CARREGAR_LISTAGEM", "CARREGAR_DETALHES"];
}

export function resolveAutomaticTicketTarget(
  log: NetworkLog,
  mapping: MapeamentoPaginasResponse,
  context: AutomaticTicketResolutionContext = {},
): AutomaticTicketTarget | null {
  const endpointPath = getEndpointPath(log.url);
  const page =
    mapping.paginas
      .filter((candidate) => candidate.ativo)
      .find((candidate) => routeMatches(candidate.rota, log.page)) ??
    pageFromEndpoint(mapping.paginas, endpointPath, log.method);

  if (!page) return null;

  const desiredCodes = desiredItemCodes(endpointPath, log.method);
  const candidates = mapping.itens.filter(
    (item) => item.paginaId === page.id && item.ativo && item.selecionavel,
  );
  const item =
    desiredCodes
      .map((code) => candidates.find((candidate) => candidate.codigo === code))
      .find((candidate) => candidate !== undefined) ?? candidates[0];

  if (!item || log.status === undefined) return null;

  return {
    failureId: log.id,
    paginaId: page.id,
    itemPaginaId: item.id,
    paginaCodigo: page.codigo,
    paginaNome: page.nome,
    itemCodigo: item.codigo,
    itemNome: item.nome,
    itemTipo: item.tipo,
    pagePath: log.page,
    endpointPath,
    method: log.method,
    status: log.status,
    tipoId: numericField(log.payload, ["tipoId", "tipoChamadoId"]),
    tipoCodigo: "BUG",
    prioridadeCodigo: log.status === 0 || log.status >= 500 ? "P1" : "P2",
    severidadeCodigo: log.status === 0 || log.status >= 500 ? "ALTA" : "MEDIA",
    ambienteId: numericField(log.payload, ["ambienteId"]),
    ambienteCodigo: context.environmentCode,
    sistemaId: numericField(log.payload, ["sistemaId"]),
    sistemaCodigo: "PORTAL",
    moduloId: numericField(log.payload, ["moduloId"]),
    etiquetaNomes: ["api"],
    summary: networkRequestSummary(log, endpointPath),
    curl: buildSafeCurl(log),
    payload: formatNetworkValue(log.payload, "{}"),
    response: formatNetworkValue(log.response, "(response indisponível)"),
  };
}

export function mappedItemPath(
  mapping: MapeamentoPaginasResponse,
  itemId: number,
): number[] {
  const result: number[] = [];
  let current = mapping.itens.find((item) => item.id === itemId);
  const visited = new Set<number>();

  while (current && !visited.has(current.id)) {
    visited.add(current.id);
    result.unshift(current.id);
    const parentId = current.parentId;
    current =
      parentId === null
        ? undefined
        : mapping.itens.find((item) => item.id === parentId);
  }

  return result;
}


