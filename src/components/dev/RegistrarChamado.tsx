import { useState, useCallback, useEffect } from "react";
import {
  Plus, Trash2, AlertTriangle, X, Check,
  Percent, Save, Send, Tag,
  AlertCircle, ShieldAlert,
  FileText, Repeat, RotateCcw,
  ChevronRight, ArrowUp, ArrowDown,
  Image as ImageIcon, MousePointer2,
} from "lucide-react";
import type {
  ChamadoCatalogosResponse,
  Entity,
  Etiqueta,
  ModuloSistema,
  PaginaMapeada,
  ItemPaginaMapeado,
  CriarChamadoRequest,
  ChamadoExistenteResumo,
} from "./imports/pasted_text/chamado-types";
import { ApiError, chamadosApi, createAnexoFormData } from "./features/chamados/chamadosApi";
import type { AutomaticTicketTarget } from "./networkTicketContext";
import { Styled } from "styled-components";
import { useTicketImageEvidence, type TicketImageStep } from "./ticketImageEvidence";
import { TicketImageMarkerPreview } from "./TicketImageMarkerPreview";

// ─── Mock Catalogos ────────────────────────────────────────────────────────────

type FormState = {
  paginaId: string;
  itemPaginaId: string;
  titulo: string;
  descricao: string;
  passosReproducao: string[];
  resultadoEsperado: string;
  resultadoObtido: string;
  impactoNegocio: string;
  criterioAceite: string[];
  tipoId: number;
  prioridadeId: number;
  severidadeId: string;
  ambienteId: number;
  sistemaId: string;
  moduloId: string;
  dataOcorrencia: string;
  reproducaoPercentual: string;
  bloqueante: boolean;
  regressao: boolean;
  recorrente: boolean;
  exigeReteste: boolean;
  salvarComoRascunho: boolean;
  etiquetaIds: number[];
};

function createInitialForm(initialTarget: AutomaticTicketTarget | null = null): FormState {
  return {
    paginaId: initialTarget ? String(initialTarget.paginaId) : "",
    itemPaginaId: initialTarget ? String(initialTarget.itemPaginaId) : "",
    titulo: initialTarget
      ? `${initialTarget.status === 0 ? "Falha de rede" : `HTTP ${initialTarget.status}`} · ${initialTarget.method} ${initialTarget.endpointPath}`.slice(0, 200)
      : "",
    descricao: initialTarget
      ? `Falha detectada automaticamente pelo Monitor HTTP.\n\n${initialTarget.summary}`
      : "",
    passosReproducao: [initialTarget ? `Reproduzir a chamada com o cURL seguro:\n\n${initialTarget.curl}` : ""],
    resultadoEsperado: initialTarget ? "A chamada deve ser concluída com sucesso e retornar uma resposta válida." : "",
    resultadoObtido: initialTarget ? `Payload sanitizado:\n${initialTarget.payload}\n\nResposta:\n${initialTarget.response}` : "",
    impactoNegocio: "",
    criterioAceite: [""],
    tipoId: initialTarget?.tipoId ?? 0,
    prioridadeId: 0,
    severidadeId: "",
    ambienteId: initialTarget?.ambienteId ?? 0,
    sistemaId: initialTarget?.sistemaId ? String(initialTarget.sistemaId) : "",
    moduloId: initialTarget?.moduloId ? String(initialTarget.moduloId) : "",
    dataOcorrencia: initialTarget ? new Date().toISOString().slice(0, 16) : "",
    reproducaoPercentual: "100",
    bloqueante: false,
    regressao: false,
    recorrente: false,
    exigeReteste: true,
    salvarComoRascunho: false,
    etiquetaIds: [],
  };
}

function trackedStepText(step: TicketImageStep, index: number) {
  const description = step.description.trim();
  return `${index + 1}. [${step.code.trim() || "SEM-ID"}] ${step.name.trim() || "Passo sem nome"}${description ? ` — ${description}` : ""}`;
}

function dataUrlToFile(dataUrl: string, fileName: string) {
  const [header, encoded] = dataUrl.split(",", 2);
  if (!header || !encoded) throw new Error("A evidência de imagem está inválida.");
  const mimeType = header.match(/^data:([^;]+)/)?.[1] ?? "image/png";
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index);
  return new File([bytes], fileName, { type: mimeType });
}
// ─── Validation ────────────────────────────────────────────────────────────────

type ValidationErrors = Partial<Record<keyof FormState, string>>;

function validate(form: FormState): ValidationErrors {
  const errors: ValidationErrors = {};
  if (!form.titulo.trim())        errors.titulo = "Título é obrigatório";
  if (form.titulo.length > 200)   errors.titulo = "Máximo 200 caracteres";
  if (!form.descricao.trim())     errors.descricao = "Descrição é obrigatória";
  if (!form.paginaId)             errors.paginaId = "Página é obrigatória";
  if (!form.itemPaginaId)         errors.itemPaginaId = "Item é obrigatório";
  if (!form.sistemaId)            errors.sistemaId = "Sistema é obrigatório";
  return errors;
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-[11px] font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
      {children}{required && <span className="text-destructive ml-0.5">*</span>}
    </label>
  );
}
function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <div className="flex items-center gap-1 mt-1 text-[10px] font-mono text-destructive">
      <AlertCircle size={10} />{msg}
    </div>
  );
}

function SectionHeader({ icon: Icon, title, description }: { icon: any; title: string; description?: string }) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div className="mt-0.5 p-1.5 rounded bg-primary/10 text-primary shrink-0">
        <Icon size={13} />
      </div>
      <div>
        <h3 className="text-sm font-semibold">{title}</h3>
        {description && <p className="text-xs text-muted-foreground font-mono mt-0.5">{description}</p>}
      </div>
    </div>
  );
}

function FormCard({ children }: { children: React.ReactNode }) {
  return <div className="bg-card border border-border rounded-md p-5 space-y-4">{children}</div>;
}

function Textarea({ value, onChange, placeholder, rows = 4, maxLength, error }: {
  value: string; onChange: (v: string) => void; placeholder?: string; rows?: number; maxLength?: number; error?: string;
}) {
  return (
    <div>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        className={`w-full bg-muted/40 border rounded px-3 py-2 text-xs font-mono outline-none resize-y transition-colors placeholder:text-muted-foreground/50
          ${error ? "border-destructive/60 focus:border-destructive" : "border-border focus:border-primary"}`}
      />
      <div className="flex items-center justify-between mt-1">
        <FieldError msg={error} />
        {maxLength && (
          <span className={`text-[10px] font-mono ml-auto ${value.length > maxLength * 0.9 ? "text-amber-400" : "text-muted-foreground"}`}>
            {value.length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
}

function Input({ value, onChange, placeholder, maxLength, error, type = "text", style }: {
  value: string; onChange: (v: string) => void; placeholder?: string; maxLength?: number; error?: string; type?: string; style?: string
}) {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`w-full bg-muted/40 border rounded px-3 py-2 text-xs font-mono outline-none transition-colors placeholder:text-muted-foreground/50
          ${error ? "border-destructive/60 focus:border-destructive" : "border-border focus:border-primary"}`}
      />
      <div className="flex items-center justify-between mt-1">
        <FieldError msg={error} />
        {maxLength && (
          <span className={`text-[10px] font-mono ml-auto ${value.length > maxLength * 0.9 ? "text-amber-400" : "text-muted-foreground"}`}>
            {value.length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
}

function Select({ value, onChange, options, placeholder, error }: {
  value: string | number; onChange: (v: string) => void;
  options: { value: string | number; label: string; color?: string | null }[];
  placeholder?: string; error?: string;
}) {
  return (
    <div>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className={`w-full bg-muted/40 border rounded px-3 py-2 text-xs font-mono outline-none transition-colors appearance-none cursor-pointer
          ${!value ? "text-muted-foreground/60" : "text-foreground"}
          ${error ? "border-destructive/60 focus:border-destructive" : "border-border focus:border-primary"}`}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <FieldError msg={error} />
    </div>
  );
}

function Toggle({ value, onChange, label, description, color = "primary" }: {
  value: boolean; onChange: (v: boolean) => void; label: string; description?: string; color?: string;
}) {
  const colorMap: Record<string, string> = {
    primary: "bg-primary",
    red:    "bg-red-500",
    amber:  "bg-amber-500",
    blue:   "bg-blue-500",
    green:  "bg-emerald-500",
  };
  return (
    <div className="flex items-start gap-3">
      <button
        type="button"
        onClick={() => onChange(!value)}
        className={`relative mt-0.5 inline-flex h-4 w-7 shrink-0 items-center rounded-full transition-colors ${value ? colorMap[color] : "bg-muted"}`}
      >
        <span className={`inline-block h-3 w-3 rounded-full bg-white shadow transition-transform ${value ? "translate-x-3.5" : "translate-x-0.5"}`} />
      </button>
      <div>
        <div className="text-xs font-mono font-medium leading-none">{label}</div>
        {description && <div className="text-[10px] text-muted-foreground font-mono mt-0.5">{description}</div>}
      </div>
    </div>
  );
}

function DynamicList({ items, onChange, placeholder, addLabel }: {
  items: string[]; onChange: (items: string[]) => void; placeholder?: string; addLabel?: string;
}) {
  const update = (i: number, val: string) => {
    const next = [...items];
    next[i] = val;
    onChange(next);
  };
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const add = () => onChange([...items, ""]);
  const move = (i: number, dir: -1 | 1) => {
    const next = [...items];
    const j = i + dir;
    if (j < 0 || j >= next.length) return;
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-2 group">
          <div className="flex flex-col gap-0.5 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button type="button" onClick={() => move(i, -1)} className="text-muted-foreground hover:text-foreground disabled:opacity-20" disabled={i === 0}><ArrowUp size={10} /></button>
            <button type="button" onClick={() => move(i, 1)} className="text-muted-foreground hover:text-foreground disabled:opacity-20" disabled={i === items.length - 1}><ArrowDown size={10} /></button>
          </div>
          <span className="shrink-0 w-5 h-5 mt-1.5 rounded-full bg-muted text-[9px] font-mono font-bold text-muted-foreground flex items-center justify-center">{i + 1}</span>
          <textarea
            value={item}
            onChange={e => update(i, e.target.value)}
            placeholder={placeholder ?? `Passo ${i + 1}...`}
            rows={2}
            className="flex-1 bg-muted/40 border border-border rounded px-3 py-2 text-xs font-mono outline-none focus:border-primary resize-none placeholder:text-muted-foreground/50"
          />
          <button type="button" onClick={() => remove(i)} disabled={items.length === 1}
            className="mt-1.5 text-muted-foreground hover:text-destructive disabled:opacity-30 transition-colors">
            <Trash2 size={13} />
          </button>
        </div>
      ))}
      <button type="button" onClick={add}
        className="flex items-center gap-1.5 text-[10px] font-mono text-primary hover:text-primary/80 transition-colors">
        <Plus size={11} />{addLabel ?? "Adicionar item"}
      </button>
    </div>
  );
}

// ─── Tipo Selector (pill style) ───────────────────────────────────────────────

function readableTextColor(background: string | null | undefined) {
  const match = /^#([\da-f]{6})$/i.exec(background ?? "");
  if (!match) return "var(--primary-foreground)";
  const value = Number.parseInt(match[1], 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;
  const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;
  return luminance > 0.56 ? "#111827" : "#ffffff";
}

function TipoSelector({ value, onChange, tipos }: {
  value: number; onChange: (v: number) => void; tipos: Entity[];
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tipos.map(t => {
        const active = value === t.id;
        return (
          <button key={t.id} type="button" onClick={() => onChange(t.id)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold border transition-all
              ${active ? "border-transparent text-white shadow-sm" : "border-border text-muted-foreground hover:text-foreground hover:border-border/80"}`}
            style={active ? { background: t.corHex ?? "var(--primary)", color: readableTextColor(t.corHex) } : {}}>
            {active && <Check size={10} />}
            {t.nome}
          </button>
        );
      })}
    </div>
  );
}

// ─── Prioridade Selector ──────────────────────────────────────────────────────

function PrioridadeSelector({ value, onChange, prioridades }: {
  value: number; onChange: (v: number) => void; prioridades: { id: number; nome: string; corHex: string | null }[];
}) {
  return (
    <div className="grid grid-cols-5 gap-1">
      {prioridades.map(p => {
        const active = value === p.id;
        return (
          <button key={p.id} type="button" onClick={() => onChange(p.id)}
            className={`flex flex-col items-center gap-1 py-2 rounded border text-center transition-all
              ${active ? "border-current/40 shadow-sm" : "border-border text-muted-foreground hover:text-foreground"}`}
            style={active ? { borderColor: p.corHex ?? "var(--primary)", background: `color-mix(in srgb, ${p.corHex ?? "var(--primary)"} 12%, transparent)`, color: "var(--foreground)" } : {}}>
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: p.corHex ?? "#8b949e" }} />
            <span className="text-[9px] font-mono font-bold leading-none">{p.nome}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── Etiqueta Multi-select ────────────────────────────────────────────────────

function EtiquetaSelector({ value, onChange, etiquetas }: {
  value: number[]; onChange: (v: number[]) => void; etiquetas: Etiqueta[];
}) {
  const toggle = (id: number) =>
    onChange(value.includes(id) ? value.filter(v => v !== id) : [...value, id]);
  return (
    <div className="flex flex-wrap gap-1.5">
      {etiquetas.map(e => {
        const active = value.includes(e.id);
        return (
          <button key={e.id} type="button" onClick={() => toggle(e.id)}
            className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono border transition-all
              ${active ? "border-transparent text-white" : "border-border text-muted-foreground hover:text-foreground"}`}
            style={active ? { background: e.corHex ?? "var(--primary)", color: readableTextColor(e.corHex) } : {}}>
            <Tag size={9} />{e.nome}
            {active && <X size={9} className="ml-0.5" />}
          </button>
        );
      })}
    </div>
  );
}

// ─── Ambiente Badge ───────────────────────────────────────────────────────────

function FormProgress({ form, errors: _errors }: { form: FormState; errors: ValidationErrors }) {
  const required = ["titulo", "descricao", "paginaId", "itemPaginaId", "sistemaId"] as (keyof FormState)[];
  const filled = required.filter(k => form[k] && String(form[k]).trim() !== "").length;
  const pct = Math.round((filled / required.length) * 100);
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 bg-muted rounded-full h-1.5 overflow-hidden">
        <div className="h-full rounded-full transition-all duration-500 bg-primary" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-[10px] font-mono text-muted-foreground whitespace-nowrap">{filled}/{required.length} obrigatórios</span>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

interface RegistrarChamadoProps {
  onSuccess?: () => void;
  onCancel?: () => void;
  initialTarget?: AutomaticTicketTarget | null;
}

export function RegistrarChamado({ onSuccess, onCancel, initialTarget = null }: RegistrarChamadoProps) {
  const [catalogos, setCatalogos] = useState<ChamadoCatalogosResponse>({
    tipos: [], status: [], prioridades: [], severidades: [], ambientes: [], sistemas: [], etiquetas: [], modulos: [],
  });
  const [paginas, setPaginas] = useState<PaginaMapeada[]>([]);
  const [itens, setItens] = useState<ItemPaginaMapeado[]>([]);
  const [modulos, setModulos] = useState<ModuloSistema[]>([]);
  const [form, setForm] = useState<FormState>(() => createInitialForm(initialTarget));
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState<string | null>(null);
  const [existingTicket, setExistingTicket] = useState<ChamadoExistenteResumo | null>(null);
  const [activeTab, setActiveTab] = useState<"descricao" | "passos" | "imagens" | "resultados" | "impacto" | "criterios">("descricao");
  const imageEvidences = useTicketImageEvidence(state => state.evidences);
  const updateImageStep = useTicketImageEvidence(state => state.updateStep);
  const removeImageEvidence = useTicketImageEvidence(state => state.removeEvidence);
  const clearImageEvidences = useTicketImageEvidence(state => state.clear);

  useEffect(() => {
    if (imageEvidences.length) setActiveTab("imagens");
  }, [imageEvidences.length]);

  const set = useCallback(<K extends keyof FormState>(key: K, val: FormState[K]) => {
    setForm(f => ({ ...f, [key]: val }));
    if (errors[key]) setErrors(e => ({ ...e, [key]: undefined }));
  }, [errors]);

  useEffect(() => {
    let current = true;
    setLoading(true);
    Promise.all([chamadosApi.catalogos(), chamadosApi.mapeamentoPaginas()])
      .then(([nextCatalogos, mapping]) => {
        if (!current) return;
        const activePages = mapping.paginas.filter(p => p.ativo);
        const selectableItems = mapping.itens.filter(i => i.ativo && i.selecionavel);
        const byCode = <T extends { codigo?: string }>(values: T[], code?: string) =>
          code ? values.find(value => value.codigo?.toUpperCase() === code.toUpperCase()) : undefined;
        const targetPage = initialTarget
          ? activePages.find(page => page.id === initialTarget.paginaId) ?? byCode(activePages, initialTarget.paginaCodigo)
          : undefined;
        const targetItem = initialTarget
          ? selectableItems.find(item => item.id === initialTarget.itemPaginaId && (!targetPage || item.paginaId === targetPage.id))
            ?? selectableItems.find(item => item.codigo === initialTarget.itemCodigo && (!targetPage || item.paginaId === targetPage.id))
          : undefined;
        const targetType = initialTarget
          ? nextCatalogos.tipos.find(type => type.id === initialTarget.tipoId) ?? byCode(nextCatalogos.tipos, initialTarget.tipoCodigo)
          : undefined;
        const targetPriority = initialTarget ? byCode(nextCatalogos.prioridades, initialTarget.prioridadeCodigo) : undefined;
        const targetSeverity = initialTarget ? byCode(nextCatalogos.severidades, initialTarget.severidadeCodigo) : undefined;
        const targetEnvironment = initialTarget
          ? nextCatalogos.ambientes.find(environment => environment.id === initialTarget.ambienteId) ?? byCode(nextCatalogos.ambientes, initialTarget.ambienteCodigo)
          : undefined;
        const targetSystem = initialTarget
          ? nextCatalogos.sistemas.find(system => system.id === initialTarget.sistemaId) ?? byCode(nextCatalogos.sistemas, initialTarget.sistemaCodigo)
          : undefined;
        const targetTagIds = initialTarget
          ? nextCatalogos.etiquetas.filter(tag => initialTarget.etiquetaNomes.some(name => name.toLocaleLowerCase("pt-BR") === tag.nome.toLocaleLowerCase("pt-BR"))).map(tag => tag.id)
          : [];
        setCatalogos(nextCatalogos);
        setPaginas(activePages);
        setItens(selectableItems);
        setForm(value => ({
          ...value,
          paginaId: targetPage ? String(targetPage.id) : value.paginaId,
          itemPaginaId: targetItem ? String(targetItem.id) : value.itemPaginaId,
          tipoId: targetType?.id ?? nextCatalogos.tipos[0]?.id ?? 0,
          prioridadeId: targetPriority?.id ?? nextCatalogos.prioridades[0]?.id ?? 0,
          severidadeId: targetSeverity ? String(targetSeverity.id) : value.severidadeId,
          ambienteId: targetEnvironment?.id ?? nextCatalogos.ambientes[0]?.id ?? 0,
          sistemaId: targetSystem ? String(targetSystem.id) : value.sistemaId || String(nextCatalogos.sistemas[0]?.id ?? ""),
          moduloId: initialTarget?.moduloId ? String(initialTarget.moduloId) : value.moduloId,
          etiquetaIds: targetTagIds.length ? targetTagIds : value.etiquetaIds,
        }));
        setApiError(null);
      })
      .catch(error => current && setApiError(error instanceof Error ? error.message : "Falha ao carregar catálogos."))
      .finally(() => current && setLoading(false));
    return () => { current = false; };
  }, [initialTarget]);

  useEffect(() => {
    if (!form.sistemaId) { setModulos([]); return; }
    let current = true;
    chamadosApi.modulos(Number(form.sistemaId))
      .then(value => current && setModulos(value))
      .catch(error => current && setApiError(error instanceof Error ? error.message : "Falha ao carregar módulos."));
    return () => { current = false; };
  }, [form.sistemaId]);

  useEffect(() => {
    if (!form.itemPaginaId) { setExistingTicket(null); return; }
    let current = true;
    chamadosApi.disponibilidadeItem(Number(form.itemPaginaId))
      .then(value => {
        if (!current) return;
        setExistingTicket(value.disponivel ? null : value.existingTicket);
        if (!value.disponivel) setApiError(`Este item já possui o chamado ${value.existingTicket?.codigo ?? "registrado"}. Finalize-o antes de abrir outro para o mesmo item.`);
      })
      .catch(error => current && setApiError(error instanceof Error ? error.message : "Falha ao verificar disponibilidade."));
    return () => { current = false; };
  }, [form.itemPaginaId]);

  const filteredModulos = modulos.filter(
    m => !form.sistemaId || m.sistemaId === Number(form.sistemaId),
  );
  const filteredItens = itens.filter(
    i => !form.paginaId || i.paginaId === Number(form.paginaId),
  );

  async function handleSubmit(rascunho = false) {
    const newErrors = validate(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0 || existingTicket) return;
    setSubmitted(true);
    setApiError(null);
    const imageStepTexts = imageEvidences.flatMap(evidence =>
      evidence.steps.map((step, index) => trackedStepText(step, index)),
    );
    const payload: CriarChamadoRequest = {
      paginaId: Number(form.paginaId),
      itemPaginaId: Number(form.itemPaginaId),
      titulo: form.titulo.trim(),
      descricao: form.descricao.trim(),
      passosReproducao: Array.from(new Set([
        ...form.passosReproducao.map(x => x.trim()).filter(Boolean),
        ...imageStepTexts,
      ])),
      resultadoEsperado: form.resultadoEsperado.trim() || null,
      resultadoObtido: form.resultadoObtido.trim() || null,
      impactoNegocio: form.impactoNegocio.trim() || null,
      criterioAceite: form.criterioAceite.map(x => x.trim()).filter(Boolean),
      tipoId: form.tipoId,
      prioridadeId: form.prioridadeId,
      severidadeId: form.severidadeId ? Number(form.severidadeId) : null,
      ambienteId: form.ambienteId,
      sistemaId: Number(form.sistemaId),
      moduloId: form.moduloId ? Number(form.moduloId) : null,
      dataOcorrencia: form.dataOcorrencia || null,
      reproducaoPercentual: form.reproducaoPercentual ? Number(form.reproducaoPercentual) : null,
      bloqueante: form.bloqueante,
      regressao: form.regressao,
      recorrente: form.recorrente,
      exigeReteste: form.exigeReteste,
      salvarComoRascunho: rascunho,
      ocorrenciaInicial: null,
      etiquetaIds: form.etiquetaIds,
    };
    try {
      const availability = await chamadosApi.disponibilidadeItem(payload.itemPaginaId);
      if (!availability.disponivel) {
        setExistingTicket(availability.existingTicket);
        setApiError(`Este item já possui o chamado ${availability.existingTicket?.codigo ?? "registrado"}. Finalize-o antes de abrir outro para o mesmo item.`);
        setSubmitted(false);
        return;
      }
      const createdTicket = await chamadosApi.criar(payload);
      try {
        for (let index = 0; index < imageEvidences.length; index++) {
          const evidence = imageEvidences[index];
          const file = dataUrlToFile(
            evidence.imageDataUrl,
            `evidencia-editor-${index + 1}-${Date.now()}.png`,
          );
          await chamadosApi.uploadAnexo(createdTicket.chamado.id, createAnexoFormData({
            file,
            tipoAnexo: "IMAGEM",
            legenda: `Evidência visual com ${evidence.steps.length} passo(s) rastreado(s)`,
            descricao: JSON.stringify({
              schema: "qa-ticket-image-evidence/v2",
              width: evidence.width,
              height: evidence.height,
              steps: evidence.steps,
              editorItems: evidence.editorItems,
              trackingSteps: evidence.trackingSteps,
            }),
            larguraImagem: evidence.width,
            alturaImagem: evidence.height,
            exibirInline: true,
            sensivel: false,
          }));
        }
        clearImageEvidences();
      } catch (attachmentError) {
        setSubmitted(false);
        setApiError(`O chamado ${createdTicket.chamado.codigo} foi criado, mas a imagem não pôde ser anexada: ${attachmentError instanceof Error ? attachmentError.message : "erro desconhecido"}`);
        return;
      }
      setSubmitted(false);
      onSuccess?.();
    } catch (error) {
      if (error instanceof ApiError && error.existingTicket) setExistingTicket(error.existingTicket);
      setApiError(error instanceof Error ? error.message : "Não foi possível registrar o chamado.");
      setSubmitted(false);
    }
  }

  const ITEM_TIPO_ICON: Record<string, string> = {
    AREA: "◻", TAB: "⊟", SECAO: "§", TABELA: "⊞", COLUNA: "│",
    SELECT: "▾", CAMPO: "✎", CHECKBOX: "☑", BOTAO: "⬡", MODAL: "⧉",
    FLUXO: "⬡", LISTA: "☰", UPLOAD: "↑",
  };

  const selectedPagina = paginas.find(p => p.id === Number(form.paginaId));
  const selectedItem = filteredItens.find(i => i.id === Number(form.itemPaginaId));
  const selectedSistema = catalogos.sistemas.find(s => s.id === Number(form.sistemaId));

  const CONTENT_TABS = [
    { id: "descricao",  label: "Descrição",          required: true  },
    { id: "passos",     label: "Passos de Reprodução", required: false },
    { id: "imagens",    label: "Imagens e Passos",      required: false },
    { id: "resultados", label: "Resultados",          required: false },
    { id: "impacto",    label: "Impacto",             required: false },
    { id: "criterios",  label: "Critérios de Aceite", required: false },
  ] as const;

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Page Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-card shrink-0">
        <div className="flex items-center gap-2 text-xs font-mono">
          <button onClick={onCancel} className="text-muted-foreground hover:text-foreground transition-colors">Registro de Bugs</button>
          <ChevronRight size={12} className="text-muted-foreground" />
          <span className="text-foreground font-semibold">Novo Chamado</span>
        </div>
        <div className="flex items-center gap-2">
          <FormProgress form={form} errors={errors} />
          <div className="w-px h-5 bg-border mx-1" />
          <button type="button" onClick={onCancel}
            className="px-3 py-1.5 text-xs font-mono text-muted-foreground border border-border rounded hover:bg-muted transition-colors">
            Cancelar
          </button>
          <button type="button" onClick={() => handleSubmit(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-foreground border border-border rounded hover:bg-muted transition-colors">
            <Save size={12} />Rascunho
          </button>
          <button type="button" onClick={() => handleSubmit(false)} disabled={submitted}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-60 transition-colors">
            {submitted ? (
              <><div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />Registrando...</>
            ) : (
              <><Send size={12} />Registrar Chamado</>
            )}
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-hidden flex">
        {/* Main form */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 [scrollbar-width:thin] [scrollbar-color:var(--border)_transparent]">
          {loading && <div className="text-xs font-mono text-muted-foreground">Carregando catálogos e mapeamento...</div>}
          {initialTarget && (
            <div className="rounded border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-xs font-mono text-amber-200 space-y-1">
              <div>Chamado preparado automaticamente a partir da falha {initialTarget.method} {initialTarget.endpointPath}. Revise os dados antes de registrar.</div>
              <div className="text-[10px] text-amber-100/80">Origem: {initialTarget.paginaNome} ({initialTarget.pagePath}) · Item: {initialTarget.itemNome} · Tipo do item: {initialTarget.itemTipo}</div>
            </div>
          )}
          {apiError && <div  className="rounded border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs font-mono text-destructive">{apiError}</div>}

          {/* Título e Tipo */}
          <FormCard>
            <SectionHeader icon={FileText} title="Identificação" description="Título claro e tipo do chamado" />
            <div className="space-y-4">
              <div>
                <FieldLabel required>Título</FieldLabel>
                <Input
                  value={form.titulo}
                  onChange={v => set("titulo", v)}
                  placeholder="Ex: Falha ao finalizar pedido com cupom expirado aplicado"
                  maxLength={200}
                  error={errors.titulo}
                />
              </div>
              <div>
                <FieldLabel required>Tipo de Chamado</FieldLabel>
                <TipoSelector value={form.tipoId} onChange={v => set("tipoId", v)} tipos={catalogos.tipos} />
              </div>
            </div>
          </FormCard>

          {/* Content tabs */}
          <FormCard>
            <div className="flex gap-0 border-b border-border -mx-5 px-5 mb-4 -mt-1">
              {CONTENT_TABS.map(tab => (
                <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 text-[11px] font-mono font-medium border-b-2 transition-colors whitespace-nowrap -mb-px
                    ${activeTab === tab.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
                  {tab.label}
                  {tab.required && <span className="text-destructive ml-0.5">*</span>}
                  {tab.id === "imagens" && imageEvidences.length > 0 && (
                    <span className="ml-1.5 rounded-full bg-primary px-1.5 py-0.5 text-[9px] text-primary-foreground">
                      {imageEvidences.length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {activeTab === "descricao" && (
              <div>
                <FieldLabel required>Descrição detalhada do problema</FieldLabel>
                <Textarea
                  value={form.descricao}
                  onChange={v => set("descricao", v)}
                  placeholder={"Descreva o problema com clareza: o que acontece, quando acontece, qual o contexto. Inclua dados relevantes como IDs, versões, configurações..."}
                  rows={8}
                  error={errors.descricao}
                />
              </div>
            )}

            {activeTab === "passos" && (
              <div>
                <FieldLabel>Passos para Reprodução</FieldLabel>
                <p className="text-[10px] text-muted-foreground font-mono mb-3">
                  Liste os passos exatos para reproduzir o problema. Seja específico — inclua URLs, dados de entrada, estados necessários.
                </p>
                <DynamicList
                  items={form.passosReproducao}
                  onChange={v => set("passosReproducao", v)}
                  placeholder="Ex: Acessar /checkout com produto no carrinho..."
                  addLabel="Adicionar passo"
                />
              </div>
            )}

            {activeTab === "imagens" && (
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <FieldLabel>Imagens e passos do editor</FieldLabel>
                    <p className="text-[10px] text-muted-foreground font-mono">
                      Os textos abaixo entram automaticamente nos passos de reprodução. Passe o mouse ou use Tab nos marcadores da imagem para visualizar cada descrição.
                    </p>
                  </div>
                  <div className="shrink-0 rounded border border-primary/30 bg-primary/10 px-2.5 py-1.5 text-[10px] font-mono text-primary">
                    {imageEvidences.length} imagem(ns)
                  </div>
                </div>

                {!imageEvidences.length && (
                  <div className="flex flex-col items-center justify-center gap-2 rounded border border-dashed border-border py-12 text-muted-foreground">
                    <ImageIcon size={28} className="opacity-40" />
                    <span className="text-xs font-mono">Envie uma imagem pelo botão “Enviar para chamado” do editor.</span>
                  </div>
                )}

                {imageEvidences.map((evidence, evidenceIndex) => (
                  <article key={evidence.id} className="overflow-visible rounded-md border border-border bg-muted/10">
                    <div className="flex items-center justify-between border-b border-border px-3 py-2">
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <ImageIcon size={13} className="text-primary" />
                        <span className="font-semibold">Evidência {evidenceIndex + 1}</span>
                        <span className="text-[10px] text-muted-foreground">{evidence.width} × {evidence.height}px</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeImageEvidence(evidence.id)}
                        className="flex items-center gap-1 rounded border border-destructive/30 px-2 py-1 text-[10px] font-mono text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 size={10} />Remover
                      </button>
                    </div>

                    <div className="grid grid-cols-[minmax(0,1.25fr)_minmax(280px,.75fr)] gap-4 p-3">
                      <div>
                        <TicketImageMarkerPreview
                          evidenceId={evidence.id}
                          src={evidence.imageDataUrl}
                          alt={`Evidência ${evidenceIndex + 1} do editor`}
                          steps={evidence.steps}
                          editorItems={evidence.editorItems}
                          width={evidence.width}
                          height={evidence.height}
                        />
                        <div className="mt-2 flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground">
                          <MousePointer2 size={10} />Passe o mouse sobre um marcador para abrir o overlay do passo.
                        </div>
                      </div>

                      <div className="space-y-3">
                        {evidence.steps.length ? evidence.steps.map((step, stepIndex) => (
                          <div key={step.id} className="space-y-2 rounded border border-border bg-card p-3" style={{ borderLeftColor: step.color, borderLeftWidth: 4 }}>
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[10px] font-mono font-bold" style={{ color: step.color }}>PASSO {stepIndex + 1}</span>
                              <span className="text-[9px] font-mono text-muted-foreground">{step.markers.length} marcador(es)</span>
                            </div>
                            <input
                              value={step.code}
                              onChange={event => updateImageStep(evidence.id, step.id, { code: event.target.value })}
                              placeholder="ID do passo"
                              className="w-full rounded border border-border bg-muted/40 px-2.5 py-1.5 text-xs font-mono outline-none focus:border-primary"
                            />
                            <input
                              value={step.name}
                              onChange={event => updateImageStep(evidence.id, step.id, { name: event.target.value })}
                              placeholder="Nome do passo"
                              className="w-full rounded border border-border bg-muted/40 px-2.5 py-1.5 text-xs font-mono outline-none focus:border-primary"
                            />
                            <textarea
                              value={step.description}
                              onChange={event => updateImageStep(evidence.id, step.id, { description: event.target.value })}
                              placeholder="Descrição do passo"
                              rows={3}
                              className="w-full resize-y rounded border border-border bg-muted/40 px-2.5 py-1.5 text-xs font-mono outline-none focus:border-primary"
                            />
                            <div className="rounded bg-muted/30 px-2 py-1.5 text-[10px] font-mono text-muted-foreground">
                              {trackedStepText(step, stepIndex)}
                            </div>
                          </div>
                        )) : (
                          <div className="rounded border border-dashed border-border p-4 text-center text-[10px] font-mono text-muted-foreground">
                            A imagem foi recebida sem passos rastreados.
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {activeTab === "resultados" && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <FieldLabel>Resultado Esperado</FieldLabel>
                  <Textarea
                    value={form.resultadoEsperado}
                    onChange={v => set("resultadoEsperado", v)}
                    placeholder="O que deveria acontecer após executar os passos acima..."
                    rows={7}
                  />
                </div>
                <div>
                  <FieldLabel>Resultado Obtido</FieldLabel>
                  <Textarea
                    value={form.resultadoObtido}
                    onChange={v => set("resultadoObtido", v)}
                    placeholder="O que realmente aconteceu. Inclua mensagens de erro, payloads, screenshots..."
                    rows={7}
                  />
                </div>
              </div>
            )}

            {activeTab === "impacto" && (
              <div>
                <FieldLabel>Impacto no Negócio</FieldLabel>
                <p className="text-[10px] text-muted-foreground font-mono mb-3">
                  Quantifique o impacto: usuários afetados, transações bloqueadas, receita em risco, SLA comprometido...
                </p>
                <Textarea
                  value={form.impactoNegocio}
                  onChange={v => set("impactoNegocio", v)}
                  placeholder="Ex: Todos os usuários no ambiente de produção com cupom ativo não conseguem finalizar compras. Estimativa de 200+ pedidos bloqueados por hora..."
                  rows={6}
                />
              </div>
            )}

            {activeTab === "criterios" && (
              <div>
                <FieldLabel>Critérios de Aceite</FieldLabel>
                <p className="text-[10px] text-muted-foreground font-mono mb-3">
                  Defina as condições que devem ser satisfeitas para considerar este chamado resolvido.
                </p>
                <DynamicList
                  items={form.criterioAceite}
                  onChange={v => set("criterioAceite", v)}
                  placeholder="Ex: O checkout deve ser concluído com sucesso quando cupom válido está aplicado..."
                  addLabel="Adicionar critério"
                />
              </div>
            )}
          </FormCard>

          {/* Flags */}
          <FormCard>
            <SectionHeader icon={ShieldAlert} title="Características do Chamado" />
            <div className="grid grid-cols-2 gap-4">
              <Toggle value={form.bloqueante}   onChange={v => set("bloqueante", v)}   color="red"   label="Bloqueante"       description="Impede o avanço de outras tarefas" />
              <Toggle value={form.regressao}    onChange={v => set("regressao", v)}    color="amber" label="Regressão"        description="Funcionalidade que parou de funcionar" />
              <Toggle value={form.recorrente}   onChange={v => set("recorrente", v)}   color="blue"  label="Recorrente"       description="Problema que já ocorreu anteriormente" />
              <Toggle value={form.exigeReteste} onChange={v => set("exigeReteste", v)} color="green" label="Exige Reteste"    description="Requer validação formal após correção" />
            </div>
          </FormCard>

          {/* Etiquetas */}
          <FormCard>
            <SectionHeader icon={Tag} title="Etiquetas" description="Categorize para facilitar buscas e filtros" />
            <EtiquetaSelector value={form.etiquetaIds} onChange={v => set("etiquetaIds", v)} etiquetas={catalogos.etiquetas} />
            {form.etiquetaIds.length > 0 && (
              <div className="flex items-center gap-1 mt-2">
                <span className="text-[10px] font-mono text-muted-foreground">{form.etiquetaIds.length} selecionada{form.etiquetaIds.length > 1 ? "s" : ""}</span>
                <button type="button" onClick={() => set("etiquetaIds", [])} className="text-[10px] font-mono text-muted-foreground hover:text-foreground ml-2">limpar</button>
              </div>
            )}
          </FormCard>
        </div>

        {/* Right Sidebar */}
        <div className="w-72 shrink-0 border-l border-border overflow-y-auto [scrollbar-width:thin] [scrollbar-color:var(--border)_transparent] bg-card/30">
          <div className="p-4 space-y-5">

            {/* Prioridade */}
            <div>
              <FieldLabel required>Prioridade</FieldLabel>
              <PrioridadeSelector
                value={form.prioridadeId}
                onChange={v => set("prioridadeId", v)}
                prioridades={catalogos.prioridades}
              />
            </div>

            {/* Severidade */}
            <div>
              <FieldLabel>Severidade</FieldLabel>
              <Select
                value={form.severidadeId}
                onChange={v => set("severidadeId", v)}
                placeholder="— Selecionar —"
                options={catalogos.severidades.map(s => ({
                  value: s.id,
                  label: s.nome,
                  color: s.corHex,
                }))}
              />
              {form.severidadeId && (() => {
                const sev = catalogos.severidades.find(s => s.id === Number(form.severidadeId));
                return sev ? (
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ background: sev.corHex ?? "#8b949e" }} />
                    <span className="text-[10px] font-mono text-foreground">{sev.nome}</span>
                  </div>
                ) : null;
              })()}
            </div>

            <div className="h-px bg-border" />

            {/* Ambiente */}
            <div>
              <FieldLabel required>Ambiente</FieldLabel>
              <div className="grid grid-cols-2 gap-1.5">
                {catalogos.ambientes.map(a => (
                  <button  key={a.id} type="button" onClick={() => set("ambienteId", a.id)}
                    className={`flex items-center justify-center gap-1.5 py-1.5 rounded border text-[10px] font-mono font-bold transition-all
                      ${form.ambienteId === a.id
                        ? `text-white border-transparent`
                        : "border-border text-muted-foreground hover:text-foreground"
                      }`}
                    style={form.ambienteId === a.id ? { background: a.corHex ?? "var(--primary)", borderColor: a.corHex ?? "var(--primary)", color: readableTextColor(a.corHex) } : {}}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: form.ambienteId === a.id ? "rgba(255,255,255,0.7)" : (a.corHex ?? "#8b949e") }} />
                    {a.codigo ?? a.nome}
                  </button>
                ))}
              </div>
            </div>

            {/* Sistema + Módulo */}
            <div>
              <FieldLabel required>Sistema</FieldLabel>
              <Select
                value={form.sistemaId}
                onChange={v => { set("sistemaId", v); set("moduloId", ""); }}
                placeholder="— Selecionar sistema —"
                error={errors.sistemaId}
                options={catalogos.sistemas.map(s => ({ value: s.id, label: s.nome }))}
              />
            </div>

            {form.sistemaId && (
              <div>
                <FieldLabel>Módulo</FieldLabel>
                <Select
                  value={form.moduloId}
                  onChange={v => set("moduloId", v)}
                  placeholder="— Selecionar módulo —"
                  options={filteredModulos.map(m => ({ value: m.id, label: m.nome }))}
                />
                {filteredModulos.length === 0 && (
                  <p className="text-[10px] font-mono text-muted-foreground mt-1">Nenhum módulo para este sistema.</p>
                )}
              </div>
            )}

            <div className="h-px bg-border" />

            {/* Mapeamento de Página */}
            <div>
              <FieldLabel required>Página Mapeada</FieldLabel>
              <Select
                value={form.paginaId}
                onChange={v => { set("paginaId", v); set("itemPaginaId", ""); }}
                placeholder="— Selecionar página —"
                error={errors.paginaId}
                options={paginas.map(p => ({ value: p.id, label: `${p.codigo} · ${p.nome}` }))}
              />
              {selectedPagina && (
                <div className="mt-1.5 text-[10px] font-mono text-muted-foreground">
                  rota: <span className="text-primary">{selectedPagina.rota}</span>
                </div>
              )}
            </div>

            {form.paginaId && (
              <div>
                <FieldLabel required>Item / Componente</FieldLabel>
                <Select
                  value={form.itemPaginaId}
                  onChange={v => set("itemPaginaId", v)}
                  placeholder="— Selecionar item —"
                  error={errors.itemPaginaId}
                  options={filteredItens.map(i => ({
                    value: i.id,
                    label: `${ITEM_TIPO_ICON[i.tipo] ?? "·"} ${i.nome}`,
                  }))}
                />
                {selectedItem && (
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <span className="text-[9px] font-mono px-1 py-0.5 bg-muted text-muted-foreground rounded">{selectedItem.tipo}</span>
                    <span className="text-[10px] font-mono text-muted-foreground">{selectedItem.codigo}</span>
                  </div>
                )}
              </div>
            )}

            <div className="h-px bg-border" />

            {/* Reprodução e Data */}
            <div>
              <FieldLabel>Taxa de Reprodução</FieldLabel>
              <div className="flex items-center gap-2">
                <input
                  type="range" min={0} max={100} step={10}
                  value={form.reproducaoPercentual}
                  onChange={e => set("reproducaoPercentual", e.target.value)}
                  className="flex-1 accent-primary"
                />
                <div className="flex items-center gap-0.5 bg-muted rounded px-2 py-1 min-w-14 justify-center">
                  <span className="text-xs font-mono font-bold">{form.reproducaoPercentual}</span>
                  <Percent size={10} className="text-muted-foreground" />
                </div>
              </div>
              <div className="flex justify-between text-[9px] font-mono text-muted-foreground mt-0.5">
                <span>Nunca</span><span>Sempre</span>
              </div>
            </div>

            <div>
              <FieldLabel>Data de Ocorrência</FieldLabel>
              <input
                type="datetime-local"
                value={form.dataOcorrencia}
                onChange={e => set("dataOcorrencia", e.target.value)}
                className="w-full bg-muted/40 border border-border rounded px-3 py-2 text-xs font-mono outline-none focus:border-primary text-foreground"
              />
            </div>

            <div className="h-px bg-border" />

            {/* Resumo final */}
            <div className="bg-muted/30 rounded-md p-3 space-y-2 text-[10px] font-mono">
              <div className="font-semibold text-muted-foreground uppercase tracking-wider mb-2">Resumo</div>
              {[
                ["Tipo",      catalogos.tipos.find(t => t.id === form.tipoId)?.nome ?? "—"],
                ["Prioridade",catalogos.prioridades.find(p => p.id === form.prioridadeId)?.nome ?? "—"],
                ["Ambiente",  catalogos.ambientes.find(a => a.id === form.ambienteId)?.nome ?? "—"],
                ["Sistema",   selectedSistema?.nome ?? "—"],
                ["Etiquetas", form.etiquetaIds.length > 0 ? `${form.etiquetaIds.length} selecionada${form.etiquetaIds.length > 1 ? "s" : ""}` : "—"],
                ["Reprodução",`${form.reproducaoPercentual}%`],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-2">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="text-foreground text-right truncate max-w-28">{v}</span>
                </div>
              ))}
              {form.bloqueante && <div className="text-red-400 flex items-center gap-1"><AlertTriangle size={9} />Bloqueante</div>}
              {form.regressao  && <div className="text-amber-400 flex items-center gap-1"><RotateCcw size={9} />Regressão</div>}
              {form.recorrente && <div className="text-blue-400 flex items-center gap-1"><Repeat size={9} />Recorrente</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
