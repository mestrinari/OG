import { useCallback, useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { ArrowLeft, Check, Download, Eye, Image as ImageIcon, Link2, Loader2, MousePointer2, Paperclip, Pencil, Plus, RefreshCw, Save, Trash2, UserPlus } from "lucide-react";
import { ApiError, chamadosApi, createAnexoFormData } from "./features/chamados/chamadosApi";
import { ImageEditorModal, type CanvasItem, type TrackingStep } from "./ImageEditorModal";
import { TicketImageMarkerPreview } from "./TicketImageMarkerPreview";
import type { TicketImageEvidence, TicketImageStep } from "./ticketImageEvidence";
import type {
  AtualizarChamadoRequest,
  ChamadoCatalogosResponse,
  ChamadoDetalhesResponse,
  ChamadoVinculoExterno,
  ModuloSistema,
  UsuarioResumo,
} from "./features/chamados/types";

type Tab = "geral" | "atividade" | "ocorrencias" | "anexos" | "checklist" | "vinculos" | "historico";

type EditState = Omit<AtualizarChamadoRequest, "versao"> & {
  passosTexto: string;
  criteriosTexto: string;
};

const inputClass = "w-full rounded border border-border bg-muted/30 px-3 py-2 text-xs font-mono text-foreground outline-none focus:border-primary";
const labelClass = "mb-1 block text-[10px] font-mono font-semibold uppercase tracking-wider text-muted-foreground";
const buttonClass = "inline-flex items-center gap-1.5 rounded border border-border px-3 py-2 text-xs font-mono hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50";

const toLines = (value: string) => value.split("\n").map(item => item.trim()).filter(Boolean);

function toEditState(data: ChamadoDetalhesResponse): EditState {
  const chamado = data.chamado;
  return {
    titulo: chamado.titulo,
    descricao: chamado.descricao,
    passosReproducao: chamado.passosReproducao,
    passosTexto: chamado.passosReproducao.join("\n"),
    resultadoEsperado: chamado.resultadoEsperado,
    resultadoObtido: chamado.resultadoObtido,
    impactoNegocio: chamado.impactoNegocio,
    criterioAceite: chamado.criterioAceite,
    criteriosTexto: chamado.criterioAceite.join("\n"),
    tipoId: chamado.tipo.id,
    prioridadeId: chamado.prioridade.id,
    severidadeId: chamado.severidade?.id ?? null,
    ambienteId: chamado.ambiente.id,
    sistemaId: chamado.sistema.id,
    moduloId: chamado.modulo?.id ?? null,
    dataOcorrencia: chamado.dataOcorrencia,
    reproducaoPercentual: chamado.reproducaoPercentual,
    bloqueante: chamado.bloqueante,
    regressao: chamado.regressao,
    recorrente: chamado.recorrente,
    exigeReteste: chamado.exigeReteste,
    estimativaMinutos: chamado.estimativaMinutos,
  };
}

function Section({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return <section className="rounded-md border border-border bg-card p-4"><div className="mb-4"><h3 className="text-xs font-semibold">{title}</h3>{description && <p className="mt-1 text-[10px] font-mono text-muted-foreground">{description}</p>}</div>{children}</section>;
}

function TextField({ label, value, onChange, type = "text", min, max }: { label: string; value: string | number | null; onChange: (value: string) => void; type?: string; min?: number; max?: number }) {
  return <label><span className={labelClass}>{label}</span><input className={inputClass} type={type} min={min} max={max} value={value ?? ""} onChange={event => onChange(event.target.value)} /></label>;
}

function SelectField({ label, value, options, onChange, nullable = false }: { label: string; value: number | null; options: Array<{ id: number; nome: string }>; onChange: (value: number | null) => void; nullable?: boolean }) {
  return <label><span className={labelClass}>{label}</span><select className={inputClass} value={value ?? ""} onChange={event => onChange(event.target.value ? Number(event.target.value) : null)}>{nullable && <option value="">Nao informado</option>}{options.map(option => <option key={option.id} value={option.id}>{option.nome}</option>)}</select></label>;
}

export function ChamadoDetalhes({ chamadoId, onBack }: { chamadoId: number; onBack: () => void }) {
  const [data, setData] = useState<ChamadoDetalhesResponse | null>(null);
  const [catalogos, setCatalogos] = useState<ChamadoCatalogosResponse | null>(null);
  const [modules, setModules] = useState<ModuloSistema[]>([]);
  const [assignmentUsers, setAssignmentUsers] = useState<UsuarioResumo[]>([]);
  const [edit, setEdit] = useState<EditState | null>(null);
  const [tab, setTab] = useState<Tab>("geral");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const load = useCallback(async (message?: string) => {
    setLoading(true);
    try {
      const [details, nextCatalogs, users] = await Promise.all([
        chamadosApi.obter(chamadoId),
        chamadosApi.catalogos(),
        chamadosApi.usuariosAtribuicao(),
      ]);
      setData(details);
      setCatalogos(nextCatalogs);
      setAssignmentUsers(users);
      setEdit(toEditState(details));
      setModules(await chamadosApi.modulos(details.chamado.sistema.id));
      setError(null);
      if (message) setSuccess(message);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Nao foi possivel carregar o chamado.");
    } finally {
      setLoading(false);
    }
  }, [chamadoId]);

  useEffect(() => { void load(); }, [load]);
 
  const run = async (operation: () => Promise<unknown>, message: string) => {
    setSaving(true);
    setError(null);
    setSuccess(null);


    try {
      await operation();
      await load(message);
    } catch (reason) {
      if (reason instanceof ApiError && reason.code === "CONFLITO_VERSAO") {
        setError("O chamado foi atualizado por outra pessoa. Os dados foram recarregados; revise antes de salvar novamente.");
        await load();
      } else {
        setError(reason instanceof Error ? reason.message : "Nao foi possivel concluir a operacao.");
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading && !data) return <div className="flex h-full items-center justify-center gap-2 text-xs font-mono text-muted-foreground"><Loader2 size={16} className="animate-spin" />Carregando chamado...</div>;
  if (!data || !edit || !catalogos) return <div className="p-5"><button className={buttonClass} onClick={onBack}><ArrowLeft size={13} />Voltar</button><div className="mt-4 text-xs font-mono text-red-400">{error ?? "Chamado nao encontrado."}</div></div>;

  const chamado = data.chamado;
  const canEdit = data.permissoes.podeEditar !== false;
  const set = <K extends keyof EditState>(key: K, value: EditState[K]) => setEdit(current => current ? { ...current, [key]: value } : current);
  const save = () => {
    const payload: AtualizarChamadoRequest = {
      titulo: edit.titulo.trim(),
      descricao: edit.descricao.trim(),
      passosReproducao: toLines(edit.passosTexto),
      resultadoEsperado: edit.resultadoEsperado?.trim() || null,
      resultadoObtido: edit.resultadoObtido?.trim() || null,
      impactoNegocio: edit.impactoNegocio?.trim() || null,
      criterioAceite: toLines(edit.criteriosTexto),
      tipoId: edit.tipoId,
      prioridadeId: edit.prioridadeId,
      severidadeId: edit.severidadeId,
      ambienteId: edit.ambienteId,
      sistemaId: edit.sistemaId,
      moduloId: edit.moduloId,
      dataOcorrencia: edit.dataOcorrencia || null,
      reproducaoPercentual: edit.reproducaoPercentual,
      bloqueante: edit.bloqueante,
      regressao: edit.regressao,
      recorrente: edit.recorrente,
      exigeReteste: edit.exigeReteste,
      estimativaMinutos: edit.estimativaMinutos,
      versao: chamado.versao,
    };
    if (!payload.titulo || !payload.descricao) { setError("Titulo e descricao sao obrigatorios."); return; }
    void run(() => chamadosApi.atualizar(chamado.id, payload), "Chamado atualizado com sucesso.");
  };

  const tabs: Array<[Tab, string]> = [
    ["geral", "Dados gerais"], ["atividade", `Comentarios (${data.comentarios.length})`], ["ocorrencias", `Ocorrencias (${data.ocorrencias.length})`],
    ["anexos", `Anexos (${data.anexos.length})`], ["checklist", `Checklist (${data.checklist.length})`], ["vinculos", "Vinculos e pessoas"], ["historico", "Historico"],
  ];


  return <div className="flex h-full flex-col bg-background">
    <header className="shrink-0 border-b border-border bg-card px-5 py-3">
      <div className="flex items-start justify-between gap-4">
        <div><button className="mb-2 inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-foreground" onClick={onBack}><ArrowLeft size={12} />Todos os chamados</button><div className="flex items-center gap-2"><span className="text-xs font-mono text-primary">{chamado.codigo}</span><span className="inline-flex items-center gap-1.5 rounded border border-border bg-muted/30 px-2 py-0.5 text-[10px] font-mono"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: chamado.status.corHex ?? "var(--muted-foreground)" }} />{chamado.status.nome}</span></div><h2 className="mt-1 text-base font-semibold">{chamado.titulo}</h2><p className="mt-1 text-[10px] font-mono text-muted-foreground">Criado por {chamado.criadoPor.nome} em {new Date(chamado.dataCriacao).toLocaleString("pt-BR")} · versao {chamado.versao}</p></div>
        <div className="flex gap-2"><button className={buttonClass} disabled={saving} onClick={() => void load()}><RefreshCw size={13} />Recarregar</button>{tab === "geral" && <button className="inline-flex items-center gap-1.5 rounded bg-primary px-3 py-2 text-xs font-mono text-primary-foreground disabled:opacity-50" disabled={saving || !canEdit} onClick={save}>{saving ? <Loader2 size={13} className="animate-spin" /> : <Save size={13} />}Salvar alteracoes</button>}</div>
      </div>
      <nav className="mt-4 flex gap-1 overflow-x-auto">{tabs.map(([id, label]) => <button key={id} onClick={() => setTab(id)} className={tab === id ? "rounded bg-primary/15 px-3 py-1.5 text-[10px] font-mono text-primary" : "rounded px-3 py-1.5 text-[10px] font-mono text-muted-foreground hover:bg-muted"}>{label}</button>)}</nav>
    </header>
    <main className="flex-1 overflow-y-auto p-5">
      {error && <div className="mb-4 rounded border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs font-mono text-red-400">{error}</div>}
      {success && <div className="mb-4 flex items-center gap-2 rounded border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs font-mono text-emerald-400"><Check size={13} />{success}</div>}
      {!canEdit && <div className="mb-4 rounded border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs font-mono text-amber-400">Somente leitura: DEV só pode editar chamados que criou ou pelos quais é responsável.</div>}
      <fieldset disabled={!canEdit && tab !== "anexos"} className="min-w-0 border-0 p-0">
        {tab === "geral" && <GeneralTab data={data} catalogos={catalogos} modules={modules} assignmentUsers={assignmentUsers} edit={edit} set={set} setModules={setModules} run={run} saving={saving} />}
        {tab === "atividade" && <CommentsTab data={data} run={run} saving={saving} />}
        {tab === "ocorrencias" && <OccurrencesTab data={data} run={run} saving={saving} />}
        {tab === "anexos" && <AttachmentsTab data={data} run={run} saving={saving} canEdit={canEdit} />}
        {tab === "checklist" && <ChecklistTab data={data} run={run} saving={saving} />}
        {tab === "vinculos" && <LinksTab data={data} catalogos={catalogos} run={run} saving={saving} />}
        {tab === "historico" && <HistoryTab data={data} />}
      </fieldset>
    </main>
  </div>;
}

function GeneralTab({ data, catalogos, modules, assignmentUsers, edit, set, setModules, run, saving }: { data: ChamadoDetalhesResponse; catalogos: ChamadoCatalogosResponse; modules: ModuloSistema[]; assignmentUsers: UsuarioResumo[]; edit: EditState; set: <K extends keyof EditState>(key: K, value: EditState[K]) => void; setModules: (items: ModuloSistema[]) => void; run: (operation: () => Promise<unknown>, message: string) => Promise<void>; saving: boolean }) {
  const chamado = data.chamado;
  const [statusComment, setStatusComment] = useState("");
  const [responsibleId, setResponsibleId] = useState(chamado.atribuidoPara?.id ? String(chamado.atribuidoPara.id) : "");
  useEffect(() => {
    setResponsibleId(chamado.atribuidoPara?.id ? String(chamado.atribuidoPara.id) : "");
  }, [chamado.atribuidoPara?.id]);
  
  return <div className="grid grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] gap-4">
    <div className="space-y-4">
      <Section title="Identificacao e descricao"><div className="space-y-3"><TextField label="Titulo" value={edit.titulo} onChange={value => set("titulo", value)} /><label><span className={labelClass}>Descricao</span><textarea className={inputClass} rows={8} value={edit.descricao} onChange={event => set("descricao", event.target.value)} /></label></div></Section>
      <Section title="Reproducao e resultados" description="Use uma linha para cada passo ou criterio."><div className="grid grid-cols-2 gap-3"><label><span className={labelClass}>Passos para reproducao</span><textarea className={inputClass} rows={8} value={edit.passosTexto} onChange={event => set("passosTexto", event.target.value)} /></label><label><span className={labelClass}>Criterios de aceite</span><textarea className={inputClass} rows={8} value={edit.criteriosTexto} onChange={event => set("criteriosTexto", event.target.value)} /></label><label><span className={labelClass}>Resultado esperado</span><textarea className={inputClass} rows={5} value={edit.resultadoEsperado ?? ""} onChange={event => set("resultadoEsperado", event.target.value)} /></label><label><span className={labelClass}>Resultado obtido</span><textarea className={inputClass} rows={5} value={edit.resultadoObtido ?? ""} onChange={event => set("resultadoObtido", event.target.value)} /></label><label className="col-span-2"><span className={labelClass}>Impacto no negocio</span><textarea className={inputClass} rows={4} value={edit.impactoNegocio ?? ""} onChange={event => set("impactoNegocio", event.target.value)} /></label></div></Section>
      <Section title="Alvo mapeado" description="A API de referencia trata pagina e item como imutaveis depois da criacao."><div className="grid grid-cols-2 gap-3 text-xs font-mono"><div><span className={labelClass}>Pagina</span>{chamado.alvoMapeado.pagina.codigo} · {chamado.alvoMapeado.pagina.nome}</div><div><span className={labelClass}>Item</span>{chamado.alvoMapeado.item.tipo} · {chamado.alvoMapeado.item.nome}</div><div className="col-span-2"><span className={labelClass}>Caminho</span>{chamado.alvoMapeado.caminho.map(item => item.nome).join(" > ")}</div></div></Section>
    </div>
    <div className="space-y-4">
      <Section title="Classificacao"><div className="space-y-3"><SelectField label="Tipo" value={edit.tipoId} options={catalogos.tipos} onChange={value => value && set("tipoId", value)} /><SelectField label="Prioridade" value={edit.prioridadeId} options={catalogos.prioridades} onChange={value => value && set("prioridadeId", value)} /><SelectField label="Severidade" value={edit.severidadeId} nullable options={catalogos.severidades} onChange={value => set("severidadeId", value)} /><SelectField label="Ambiente" value={edit.ambienteId} options={catalogos.ambientes} onChange={value => value && set("ambienteId", value)} /><SelectField label="Sistema" value={edit.sistemaId} options={catalogos.sistemas} onChange={value => { if (!value) return; set("sistemaId", value); set("moduloId", null); void chamadosApi.modulos(value).then(setModules); }} /><SelectField label="Modulo" value={edit.moduloId} nullable options={modules} onChange={value => set("moduloId", value)} /></div></Section>
      <Section title="Planejamento"><div className="space-y-3"><TextField label="Data da ocorrencia" type="datetime-local" value={edit.dataOcorrencia?.slice(0, 16) ?? ""} onChange={value => set("dataOcorrencia", value || null)} /><TextField label="Taxa de reproducao (%)" type="number" min={0} max={100} value={edit.reproducaoPercentual} onChange={value => set("reproducaoPercentual", value ? Number(value) : null)} /><TextField label="Estimativa (minutos)" type="number" min={0} value={edit.estimativaMinutos} onChange={value => set("estimativaMinutos", value ? Number(value) : null)} />{(["bloqueante", "regressao", "recorrente", "exigeReteste"] as const).map(key => <label key={key} className="flex items-center justify-between rounded border border-border px-3 py-2 text-xs font-mono"><span>{key}</span><input type="checkbox" checked={edit[key]} onChange={event => set(key, event.target.checked)} /></label>)}</div></Section>
      <Section title="Status e responsavel"><div className="space-y-3"><label><span className={labelClass}>Transicao</span><select className={inputClass} defaultValue="" disabled={saving} onChange={event => { const transition = data.transicoesDisponiveis.find(item => item.statusDestino.id === Number(event.target.value)); if (!transition) return; if (transition.exigeComentario && !statusComment.trim()) return; void run(() => chamadosApi.alterarStatus(chamado.id, { novoStatusId: transition.statusDestino.id, comentario: statusComment.trim() || null, versao: chamado.versao }), "Status atualizado."); }}><option value="">Selecione uma acao</option>{data.transicoesDisponiveis.map(item => <option key={item.id} value={item.statusDestino.id}>{item.nomeAcao}{item.exigeComentario ? " *" : ""}</option>)}</select></label><TextField label="Comentario da transicao" value={statusComment} onChange={setStatusComment} /><label><span className={labelClass}>Atribuir para</span><select className={inputClass} value={responsibleId} disabled={saving} onChange={event => setResponsibleId(event.target.value)}><option value="">Sem responsável</option>{assignmentUsers.map(user => <option key={user.id} value={user.id}>{user.nome}{user.email ? ` · ${user.email}` : ""}</option>)}</select></label><button className={buttonClass} disabled={saving} onClick={() => void run(() => chamadosApi.atribuirResponsavel(chamado.id, { usuarioId: responsibleId ? Number(responsibleId) : null, versao: chamado.versao }), "Responsavel atualizado.")}><UserPlus size={13} />Aplicar responsavel</button></div></Section>
      <Section title="Etiquetas"><div className="flex flex-wrap gap-2">{chamado.etiquetas.map(item => <button key={item.id} disabled={saving} onClick={() => void run(() => chamadosApi.removerEtiqueta(chamado.id, item.id), "Etiqueta removida.")} className="inline-flex items-center gap-1.5 rounded border border-border bg-muted/30 px-2 py-1 text-[10px] font-mono"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.corHex ?? "var(--muted-foreground)" }} />{item.nome} ×</button>)}<select className="rounded border border-border bg-muted px-2 py-1 text-[10px] font-mono" defaultValue="" onChange={event => { if (event.target.value) void run(() => chamadosApi.adicionarEtiqueta(chamado.id, Number(event.target.value)), "Etiqueta adicionada."); }}><option value="">+ Adicionar</option>{catalogos.etiquetas.filter(item => !chamado.etiquetas.some(current => current.id === item.id)).map(item => <option key={item.id} value={item.id}>{item.nome}</option>)}</select></div></Section>
    </div>
  </div>;
}

function CommentsTab({ data, run, saving }: TabProps) {
  const [text, setText] = useState(""); const [type, setType] = useState("COMENTARIO"); const [internal, setInternal] = useState(false);
  const submit = (event: FormEvent) => { event.preventDefault(); if (!text.trim()) return; void run(() => chamadosApi.criarComentario(data.chamado.id, { texto: text.trim(), tipoComentario: type, comentarioPaiId: null, interno: internal }), "Comentario publicado.").then(() => setText("")); };
  return <Section title="Atividade e comentarios"><form className="mb-4 grid gap-3" onSubmit={submit}><textarea className={inputClass} rows={4} value={text} onChange={event => setText(event.target.value)} placeholder="Escreva um comentario" /><div className="flex gap-3"><select className={inputClass} value={type} onChange={event => setType(event.target.value)}><option>COMENTARIO</option><option>NOTA_TECNICA</option><option>RETESTE</option></select><label className="flex items-center gap-2 text-xs font-mono"><input type="checkbox" checked={internal} onChange={event => setInternal(event.target.checked)} />Interno</label><button className={buttonClass} disabled={saving}>Publicar</button></div></form><div className="space-y-2">{data.comentarios.map(item => <article key={item.id} className="rounded border border-border p-3"><div className="flex justify-between text-[10px] font-mono text-muted-foreground"><span>{item.usuario.nome} · {item.tipoComentario}{item.interno ? " · interno" : ""}</span><time>{new Date(item.criadoEm).toLocaleString("pt-BR")}</time></div><p className="mt-2 whitespace-pre-wrap text-xs">{item.texto}</p></article>)}</div></Section>;
}

type TabProps = { data: ChamadoDetalhesResponse; run: (operation: () => Promise<unknown>, message: string) => Promise<void>; saving: boolean };

function OccurrencesTab({ data, run, saving }: TabProps) {
  const [notes, setNotes] = useState(""); const [type, setType] = useState("REPRODUCAO");
  return <Section title="Ocorrencias tecnicas"><div className="mb-4 grid grid-cols-[180px_1fr_auto] gap-2"><select className={inputClass} value={type} onChange={event => setType(event.target.value)}><option>REPRODUCAO</option><option>ERRO</option><option>RETESTE</option><option>OBSERVACAO</option></select><input className={inputClass} value={notes} onChange={event => setNotes(event.target.value)} placeholder="Observacoes" /><button className={buttonClass} disabled={saving} onClick={() => void run(() => chamadosApi.criarOcorrencia(data.chamado.id, { ambienteId: data.chamado.ambiente.id, tipoOcorrencia: type, reproduzido: type === "REPRODUCAO", dataExecucao: new Date().toISOString(), urlCompleta: window.location.href, rotaFrontend: window.location.pathname, navegador: navigator.userAgent, sistemaOperacional: navigator.platform, tipoDispositivo: window.innerWidth < 768 ? "Mobile" : "Desktop", larguraTela: window.screen.width, alturaTela: window.screen.height, devicePixelRatio: window.devicePixelRatio, observacoes: notes || null }), "Ocorrencia registrada.")}><Plus size={13} />Registrar</button></div><div className="grid grid-cols-2 gap-3">{data.ocorrencias.map(item => <article key={item.id} className="rounded border border-border p-3 text-xs"><div className="font-mono text-primary">{item.tipoOcorrencia}</div><div className="mt-1 text-[10px] text-muted-foreground">{new Date(item.dataExecucao).toLocaleString("pt-BR")} · {item.executadoPor.nome}</div><p className="mt-2">{item.observacoes ?? "Sem observacoes"}</p></article>)}</div></Section>;
}

function AttachmentsTab({ data, run, saving, canEdit }: TabProps & { canEdit: boolean }) {
  const [sensitive, setSensitive] = useState(false); const [inline, setInline] = useState(true);
  const [newImageEditorOpen, setNewImageEditorOpen] = useState(false);

  const attachEditedImage = (evidence: TicketImageEvidence) => {
    const file = dataUrlToFile(evidence.imageDataUrl, `evidencia-${data.chamado.codigo}-${Date.now()}.png`);
    setNewImageEditorOpen(false);
    void run(() => chamadosApi.uploadAnexo(data.chamado.id, createAnexoFormData({
      file,
      tipoAnexo: "IMAGEM",
      legenda: `Evidência visual com ${evidence.steps.length} passo(s) rastreado(s)`,
      descricao: serializeImageEvidence(evidence),
      larguraImagem: evidence.width,
      alturaImagem: evidence.height,
      exibirInline: inline,
      sensivel: sensitive,
    })), "Imagem adicionada ao chamado aberto.");
  };

  return <Section title="Anexos e evidencias" description="Imagens são armazenadas no banco e carregadas somente quando o chamado é aberto.">
    <div className="mb-4 flex flex-wrap items-center gap-3">
      <button type="button" className={buttonClass} disabled={saving || !canEdit} title={canEdit ? "Abrir o editor e adicionar uma imagem ao chamado aberto" : "Você não possui permissão para editar este chamado"} onClick={() => setNewImageEditorOpen(true)}><ImageIcon size={13} />Adicionar imagem</button>
      <label className={buttonClass} title={canEdit ? "Enviar imagem ou arquivo sem abrir o editor" : "Você não possui permissão para editar este chamado"}><Paperclip size={13} />Selecionar arquivo<input className="hidden" type="file" disabled={saving || !canEdit} onChange={event => { const file = event.target.files?.[0]; if (!file) return; const tipoAnexo = file.type.startsWith("image/") ? "IMAGEM" : file.type.startsWith("video/") ? "VIDEO" : "ARQUIVO"; void run(() => chamadosApi.uploadAnexo(data.chamado.id, createAnexoFormData({ file, tipoAnexo, exibirInline: inline, sensivel: sensitive })), "Anexo enviado."); }} /></label>
      <label className="flex items-center gap-2 text-xs font-mono"><input type="checkbox" disabled={!canEdit} checked={inline} onChange={event => setInline(event.target.checked)} />Exibir inline</label>
      <label className="flex items-center gap-2 text-xs font-mono"><input type="checkbox" disabled={!canEdit} checked={sensitive} onChange={event => setSensitive(event.target.checked)} />Sensivel</label>
    </div>
    <div className="space-y-4">{data.anexos.map(item => <AttachmentCard key={item.id} chamadoId={data.chamado.id} item={item} canEdit={canEdit} run={run} />)}</div>
    <ImageEditorModal open={newImageEditorOpen} onOpenChange={setNewImageEditorOpen} onSendToTicket={attachEditedImage} sendToTicketLabel={`Adicionar ao ${data.chamado.codigo}`} hideExport />
  </Section>;
}

function dataUrlToFile(dataUrl: string, fileName: string) {
  const [header, encoded] = dataUrl.split(",", 2);
  const mimeType = /data:([^;]+)/.exec(header)?.[1] ?? "image/png";
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return new File([bytes], fileName, { type: mimeType });
}

function serializeImageEvidence(evidence: TicketImageEvidence) {
  return JSON.stringify({
    schema: "qa-ticket-image-evidence/v2",
    width: evidence.width,
    height: evidence.height,
    steps: evidence.steps,
    editorItems: evidence.editorItems,
    trackingSteps: evidence.trackingSteps,
  });
}

function attachmentEvidence(item: ChamadoDetalhesResponse["anexos"][number]) {
  if (item.descricao) {
    try {
      const parsed = JSON.parse(item.descricao) as {
        schema?: string;
        width?: number;
        height?: number;
        steps?: TicketImageStep[];
        editorItems?: CanvasItem[];
        trackingSteps?: TrackingStep[];
      };
      if (["qa-ticket-image-evidence/v1", "qa-ticket-image-evidence/v2"].includes(parsed.schema ?? "") && Array.isArray(parsed.steps)) {
        return {
          width: parsed.width ?? item.larguraImagem,
          height: parsed.height ?? item.alturaImagem,
          steps: parsed.steps.filter(step => Array.isArray(step.markers)),
          editorItems: Array.isArray(parsed.editorItems) ? parsed.editorItems : [],
          trackingSteps: Array.isArray(parsed.trackingSteps) ? parsed.trackingSteps : [],
        };
      }
    } catch {
      // Anexos antigos usavam uma descrição textual, tratada abaixo.
    }
  }

  const steps: TicketImageStep[] = (item.descricao ?? "")
    .split("\n")
    .map<TicketImageStep | null>((line, index) => {
      const match = /^\d+\.\s+\[([^\]]+)\]\s+(.+?)(?:\s+—\s+(.*))?$/.exec(line.trim());
      return match ? {
        id: `legacy-step-${item.id}-${index}`,
        code: match[1],
        name: match[2],
        description: match[3] ?? "",
        color: ["#ef4444", "#3b82f6", "#22c55e", "#eab308", "#a855f7"][index % 5],
        markers: [],
      } : null;
    })
    .filter((step): step is TicketImageStep => step !== null);

  return {
    width: item.larguraImagem,
    height: item.alturaImagem,
    steps,
    editorItems: [] as CanvasItem[],
    trackingSteps: [] as TrackingStep[],
  };
}

function AttachmentCard({ chamadoId, item, canEdit, run }: { chamadoId: number; item: ChamadoDetalhesResponse["anexos"][number]; canEdit: boolean; run: TabProps["run"] }) {
  const isImage = item.mimeType?.startsWith("image/") === true || item.tipoAnexo === "IMAGEM";
  const evidence = useMemo(() => attachmentEvidence(item), [item]);
  const [blob, setBlob] = useState<Blob | null>(null);
  const [objectUrl, setObjectUrl] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [editorOpen, setEditorOpen] = useState(false);

  useEffect(() => {
    if (!isImage) return;
    let active = true;
    let url: string | null = null;
    void chamadosApi.conteudoAnexo(chamadoId, item.id)
      .then(nextBlob => {
        if (!active) return;
        url = URL.createObjectURL(nextBlob);
        setBlob(nextBlob);
        setObjectUrl(url);
      })
      .catch(reason => active && setLoadError(reason instanceof Error ? reason.message : "Falha ao carregar imagem."));
    return () => {
      active = false;
      if (url) URL.revokeObjectURL(url);
    };
  }, [chamadoId, isImage, item.id, item.tamanhoBytes]);

  const download = async () => {
    const content = blob ?? await chamadosApi.conteudoAnexo(chamadoId, item.id);
    const url = URL.createObjectURL(content);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = item.nomeArquivo;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return <article className="overflow-visible rounded-md border border-border bg-muted/10 text-xs">
    <header className="flex items-center justify-between gap-3 border-b border-border px-3 py-2.5">
      <div className="flex min-w-0 items-center gap-2.5">
        {isImage ? <ImageIcon size={15} className="shrink-0 text-primary" /> : <Paperclip size={15} className="shrink-0 text-primary" />}
        <div className="min-w-0">
          <div className="truncate font-mono font-semibold" title={item.nomeArquivo}>{item.nomeArquivo}</div>
          <div className="mt-0.5 text-[10px] font-mono text-muted-foreground">
            {item.mimeType ?? "tipo desconhecido"} · {item.tamanhoBytes ?? 0} bytes
            {evidence.width && evidence.height ? ` · ${evidence.width}×${evidence.height}px` : ""}
            {item.sensivel ? " · sensível" : ""}
          </div>
        </div>
      </div>
      <div className="flex shrink-0 gap-1">
        {isImage && objectUrl && <button type="button" className={buttonClass} title="Abrir imagem em uma nova aba" onClick={() => window.open(objectUrl, "_blank", "noopener,noreferrer")}><Eye size={13} /></button>}
        {isImage && objectUrl && <button type="button" className={buttonClass} title={canEdit ? "Editar imagem" : "Somente o criador ou responsável pode editar"} disabled={!canEdit} onClick={() => setEditorOpen(true)}><Pencil size={13} /></button>}
        <button type="button" className={buttonClass} title="Baixar anexo" onClick={() => void download()}><Download size={13} /></button>
      </div>
    </header>

    {isImage ? <div className="grid gap-4 p-3 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,.75fr)]">
      <div className="min-w-0">
        {objectUrl ? <TicketImageMarkerPreview
          evidenceId={`attachment-${item.id}`}
          src={objectUrl}
          alt={item.nomeArquivo}
          steps={evidence.steps}
          editorItems={evidence.editorItems}
          width={evidence.width}
          height={evidence.height}
          onImageClick={canEdit ? () => setEditorOpen(true) : undefined}
        /> : <div className="flex min-h-64 items-center justify-center rounded-md border border-border bg-black/20 px-3 py-12 text-[10px] font-mono text-muted-foreground">{loadError ?? "Carregando imagem..."}</div>}
        {evidence.steps.some(step => step.markers.length > 0) && <p className="mt-2 flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground"><MousePointer2 size={12} />Passe o mouse ou use Tab nos marcadores para visualizar os detalhes.</p>}
      </div>
      <div className="min-w-0 space-y-2">
        {evidence.steps.length > 0 ? evidence.steps.map((step, index) => <article key={step.id} className="rounded-md border border-border bg-card p-3" style={{ borderLeftWidth: 3, borderLeftColor: step.color }}>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-muted-foreground">Passo {index + 1}</span>
            <span className="text-[9px] font-mono text-muted-foreground">{step.markers.length} {step.markers.length === 1 ? "marcador" : "marcadores"}</span>
          </div>
          <div className="mt-1.5 flex items-start gap-2">
            <span className="rounded px-1.5 py-0.5 text-[9px] font-mono font-bold text-white" style={{ backgroundColor: step.color }}>{step.code}</span>
            <div className="min-w-0">
              <div className="font-mono text-[11px] font-semibold">{step.name}</div>
              {step.description && <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">{step.description}</p>}
            </div>
          </div>
        </article>) : <div className="rounded-md border border-dashed border-border p-4 text-center text-[10px] font-mono text-muted-foreground">Esta imagem não possui passos ou marcadores registrados.</div>}
      </div>
    </div> : <div className="p-3 text-[10px] font-mono text-muted-foreground">{item.descricao || item.legenda || "Arquivo anexado ao chamado."}</div>}

    {isImage && objectUrl && <ImageEditorModal
      open={editorOpen}
      onOpenChange={setEditorOpen}
      initialImage={objectUrl}
      initialItems={evidence.editorItems}
      initialTrackingSteps={evidence.trackingSteps}
      onConfirmDocument={editedEvidence => {
      const baseName = item.nomeArquivo.replace(/\.[^.]+$/, "") || "imagem";
      const file = dataUrlToFile(editedEvidence.imageDataUrl, `${baseName}-editada.png`);
      const descricao = serializeImageEvidence(editedEvidence);
      setEditorOpen(false);
      void run(() => chamadosApi.atualizarImagemAnexo(chamadoId, item.id, file, descricao, editedEvidence.width, editedEvidence.height), "Camadas da imagem atualizadas no chamado.");
    }} />}
  </article>;
}

function ChecklistTab({ data, run, saving }: TabProps) {
  const [title, setTitle] = useState(""); const [description, setDescription] = useState(""); const [required, setRequired] = useState(true);
  return <Section title="Checklist"><form className="mb-4 grid grid-cols-[1fr_1fr_auto_auto] gap-2" onSubmit={event => { event.preventDefault(); if (!title.trim()) return; void run(() => chamadosApi.criarChecklist(data.chamado.id, { titulo: title.trim(), descricao: description.trim() || null, ordem: data.checklist.length + 1, obrigatorio: required }), "Item adicionado.").then(() => { setTitle(""); setDescription(""); }); }}><input className={inputClass} value={title} onChange={event => setTitle(event.target.value)} placeholder="Titulo" /><input className={inputClass} value={description} onChange={event => setDescription(event.target.value)} placeholder="Descricao" /><label className="flex items-center gap-2 text-xs font-mono"><input type="checkbox" checked={required} onChange={event => setRequired(event.target.checked)} />Obrigatorio</label><button className={buttonClass} disabled={saving}><Plus size={13} />Adicionar</button></form><div className="space-y-2">{data.checklist.map(item => <div key={item.id} className="flex items-center gap-3 rounded border border-border p-3"><input type="checkbox" checked={item.concluido} onChange={event => void run(() => chamadosApi.atualizarChecklist(data.chamado.id, item.id, event.target.checked), "Checklist atualizado.")} /><div className="flex-1"><div className="text-xs">{item.titulo}{item.obrigatorio ? " *" : ""}</div><div className="text-[10px] text-muted-foreground">{item.descricao}</div></div><button disabled={saving} onClick={() => void run(() => chamadosApi.excluirChecklist(data.chamado.id, item.id), "Item excluido.")}><Trash2 size={13} /></button></div>)}</div></Section>;
}

function LinksTab({ data, run, saving }: TabProps & { catalogos: ChamadoCatalogosResponse }) {
  const [userId, setUserId] = useState(""); const [participation, setParticipation] = useState("OBSERVADOR"); const [relatedId, setRelatedId] = useState(""); const [relationType, setRelationType] = useState("RELACIONADO");
  const [link, setLink] = useState<Omit<ChamadoVinculoExterno, "id">>({ provedor: "INTERNO", tipoVinculo: "REFERENCIA", titulo: null, url: "", statusExterno: null });
  return <div className="space-y-4"><Section title="Participantes"><div className="mb-3 flex gap-2"><input className={inputClass} value={userId} onChange={event => setUserId(event.target.value)} placeholder="ID do usuario" /><input className={inputClass} value={participation} onChange={event => setParticipation(event.target.value)} placeholder="Tipo de participacao" /><button className={buttonClass} disabled={saving || !userId} onClick={() => void run(() => chamadosApi.adicionarParticipante(data.chamado.id, { usuarioId: Number(userId), tipoParticipacao: participation, recebeNotificacao: true }), "Participante adicionado.")}><UserPlus size={13} />Adicionar</button></div>{data.participantes.map(item => <div key={item.usuario.id + item.tipoParticipacao} className="flex items-center justify-between border-t border-border py-2 text-xs"><span>{item.usuario.nome} · {item.tipoParticipacao} · {item.recebeNotificacao ? "notificado" : "sem notificacao"}</span><button onClick={() => void run(() => chamadosApi.removerParticipante(data.chamado.id, item.usuario.id, item.tipoParticipacao), "Participante removido.")}><Trash2 size={13} /></button></div>)}</Section><Section title="Relacionamentos"><div className="mb-3 flex gap-2"><input className={inputClass} value={relatedId} onChange={event => setRelatedId(event.target.value)} placeholder="ID do chamado destino" /><input className={inputClass} value={relationType} onChange={event => setRelationType(event.target.value)} placeholder="Tipo" /><button className={buttonClass} disabled={saving || !relatedId} onClick={() => void run(() => chamadosApi.adicionarRelacionamento(data.chamado.id, { chamadoDestinoId: Number(relatedId), tipoRelacionamento: relationType, observacao: null }), "Relacionamento adicionado.")}><Link2 size={13} />Relacionar</button></div>{data.relacionamentos.map(item => <div key={item.id} className="flex items-center justify-between border-t border-border py-2 text-xs"><span>{item.tipoRelacionamento} · {item.chamadoDestino.codigo} · {item.chamadoDestino.titulo}</span><button onClick={() => void run(() => chamadosApi.removerRelacionamento(data.chamado.id, item.id), "Relacionamento removido.")}><Trash2 size={13} /></button></div>)}</Section><Section title="Vinculos externos"><div className="mb-3 grid grid-cols-5 gap-2"><input className={inputClass} value={link.provedor} onChange={event => setLink(current => ({ ...current, provedor: event.target.value }))} placeholder="Provedor" /><input className={inputClass} value={link.tipoVinculo} onChange={event => setLink(current => ({ ...current, tipoVinculo: event.target.value }))} placeholder="Tipo" /><input className={inputClass} value={link.titulo ?? ""} onChange={event => setLink(current => ({ ...current, titulo: event.target.value || null }))} placeholder="Titulo" /><input className={inputClass} value={link.url} onChange={event => setLink(current => ({ ...current, url: event.target.value }))} placeholder="URL" /><button className={buttonClass} disabled={saving || !link.url} onClick={() => void run(() => chamadosApi.criarVinculo(data.chamado.id, link), "Vinculo criado.")}><Plus size={13} />Adicionar</button></div>{data.vinculosExternos.map(item => <EditableLink key={item.id} chamadoId={data.chamado.id} value={item} run={run} />)}</Section></div>;
}

function EditableLink({ chamadoId, value, run }: { chamadoId: number; value: ChamadoVinculoExterno; run: TabProps["run"] }) {
  const [draft, setDraft] = useState(value);
  return <div className="grid grid-cols-[120px_140px_1fr_2fr_140px_auto_auto] gap-2 border-t border-border py-2"><input className={inputClass} value={draft.provedor} onChange={event => setDraft(current => ({ ...current, provedor: event.target.value }))} /><input className={inputClass} value={draft.tipoVinculo} onChange={event => setDraft(current => ({ ...current, tipoVinculo: event.target.value }))} /><input className={inputClass} value={draft.titulo ?? ""} onChange={event => setDraft(current => ({ ...current, titulo: event.target.value || null }))} /><input className={inputClass} value={draft.url} onChange={event => setDraft(current => ({ ...current, url: event.target.value }))} /><input className={inputClass} value={draft.statusExterno ?? ""} onChange={event => setDraft(current => ({ ...current, statusExterno: event.target.value || null }))} /><button className={buttonClass} onClick={() => void run(() => chamadosApi.atualizarVinculo(chamadoId, value.id, draft), "Vinculo atualizado.")}><Save size={13} /></button><button onClick={() => void run(() => chamadosApi.removerVinculo(chamadoId, value.id), "Vinculo removido.")}><Trash2 size={13} /></button></div>;
}

function HistoryTab({ data }: { data: ChamadoDetalhesResponse }) {
  return <Section title="Historico completo" description="Historico e auditoria sao somente leitura."><div className="space-y-2">{data.historico.map(item => <article key={item.id} className="rounded border border-border p-3"><div className="flex justify-between text-xs font-mono"><span className="text-primary">{item.tipoEvento}</span><time className="text-muted-foreground">{new Date(item.criadoEm).toLocaleString("pt-BR")}</time></div><div className="mt-1 text-xs">{item.campoAlterado ?? "Alteracao geral"} · {item.usuario?.nome ?? "Sistema"}</div></article>)}</div></Section>;
}
