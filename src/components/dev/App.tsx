import { useState, useEffect, useRef } from "react";
import { RegistrarChamado } from "./RegistrarChamado";
import { ChamadoDetalhes } from "./ChamadoDetalhes";
import {
  LayoutDashboard, Terminal, Wifi, Database, AlertTriangle,
  Zap, Flag, PlayCircle, Shuffle, FlaskConical, Bug,
  Compass, Camera, Grid3X3, BarChart3, Settings,
  ChevronLeft, ChevronRight, Search, Bell, Sun, Moon,
  User, ChevronDown, CheckCircle2,
  AlertCircle, RefreshCw, Repeat, Download, Plus,
  Eye, Trash2,
  Clock, Activity, Code2, X,
  Check, LogOut,
  TrendingUp, TrendingDown
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  AreaChart, Area, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
import { chamadosApi } from "./features/chamados/chamadosApi";
import type { ChamadoResumo } from "./features/chamados/types";
import { testesApi } from "./features/testes/testesApi";
import type { TestCaseSummary } from "./features/testes/types";
import { devToolsApi } from "./features/devtools/devToolsApi";
import type { FeatureFlag } from "./features/devtools/devToolsApi";
import { insightsApi } from "./features/insights/insightsApi";
import type { PerformancePlan, QualityReport } from "./features/insights/types";
import { operacoesApi } from "./features/operacoes/operacoesApi";
import type { Evidence, Exploration, TestDataSet } from "./features/operacoes/types";
import { validacoesApi } from "./features/validacoes/validacoesApi";
import type { EnvironmentMatrix } from "./features/validacoes/types";
import {
  CONSOLE_LEVELS,
  consoleValueToText,
  serializeConsoleValue,
  useConsoleLogger,
  type ConsoleLogEntry,
} from "./consoleLogger";
import { ConsoleValueInspector, isComplexConsoleValue } from "./ConsoleValueInspector";
import { recordDevEvent } from "./devTimeline";
import { buildSafeCurl, formatNetworkValue, sanitizeNetworkUrl, sanitizeNetworkValue } from "./networkEvidence";
import { resolveAutomaticTicketTarget, type AutomaticTicketTarget } from "./networkTicketContext";
import { getTicketMapping } from "./ticketMappingCache";
import { useNetworkLogger, type NetworkLog } from "./useNetworkLogger";
import { useDevErrors } from "./devErrorMonitor";
import { useNetworkSimulator, type SimulationMode } from "./networkSimulator";
import { setNetworkLoggerRoute, stageNetworkReplayApplication } from "./networkLogger";
import { useNavigationCounters, type NavigationCountKey } from "./navigationCounters";
import { usePerformanceMonitor } from "./performanceMonitor";
import { refreshServiceHealth, useServiceHealth, type ServiceHealthStatus } from "./serviceHealth";

// ─── Types ────────────────────────────────────────────────────────────────────

type Env = "DEV" | "HML" | "PROD";
type Role = "DEV" | "QA" | "ADMIN";
type Module =
  | "dashboard" | "logs" | "http" | "state" | "errors"
  | "performance" | "flags" | "simulator" | "generator"
  | "testcases" | "bugs" | "newchamado" | "exploratory" | "evidence"
  | "matrix" | "reports" | "settings";

// ─── Constants ────────────────────────────────────────────────────────────────

const ENV_CONFIG: Record<Env, { label: string; color: string; bg: string; dot: string }> = {
  DEV:  { label: "Development", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30", dot: "bg-emerald-400" },
  HML:  { label: "Homologation", color: "text-amber-400",  bg: "bg-amber-500/10 border-amber-500/30",   dot: "bg-amber-400"  },
  PROD: { label: "Production",   color: "text-red-400",    bg: "bg-red-500/10 border-red-500/30",        dot: "bg-red-400"    },
};

const ROLE_CONFIG: Record<Role, { color: string; icon: string }> = {
  DEV:   { color: "text-blue-400",   icon: "DEV"   },
  QA:    { color: "text-purple-400", icon: "QA"    },
  ADMIN: { color: "text-amber-400",  icon: "ADMIN" },
};

const TICKET_ENVIRONMENT_CODE: Record<Env, string> = {
  DEV: "LOCAL",
  HML: "HOMOLOGACAO",
  PROD: "PRODUCAO",
};

interface NavItem {
  id: Module;
  label: string;
  icon: LucideIcon;
  group: "dev" | "qa" | "admin";
}
const NAV_ITEMS: NavItem[] = [
  { id: "dashboard",   label: "Dashboard",         icon: LayoutDashboard, group: "dev" },
  { id: "logs",        label: "Console de Logs",   icon: Terminal,        group: "dev" },
  { id: "http",        label: "Monitor HTTP",       icon: Wifi,            group: "dev" },
  { id: "state",       label: "Estado / Cache",     icon: Database,        group: "dev" },
  { id: "errors",      label: "Monitor de Erros",  icon: AlertTriangle,   group: "dev" },
  { id: "performance", label: "Performance",        icon: Zap,             group: "dev" },
  { id: "flags",       label: "Feature Flags",      icon: Flag,            group: "dev" },
  { id: "simulator",   label: "Simulador de API",   icon: PlayCircle,      group: "dev" },
  { id: "generator",   label: "Gerador de Dados",   icon: Shuffle,         group: "dev" },
  { id: "testcases",   label: "Casos de Teste",     icon: FlaskConical,    group: "qa"  },
  { id: "bugs",        label: "Registro de Bugs",   icon: Bug,             group: "qa" },
  { id: "newchamado",  label: "Novo Chamado",        icon: Plus,            group: "qa"  },
  { id: "exploratory", label: "Testes Exploratórios",icon: Compass,        group: "qa" },
  { id: "evidence",    label: "Evidências",          icon: Camera,          group: "qa" },
  { id: "matrix",      label: "Matriz de Ambientes", icon: Grid3X3,         group: "qa" },
  { id: "reports",     label: "Relatórios",          icon: BarChart3,       group: "qa" },
  { id: "settings",    label: "Configurações",       icon: Settings,        group: "admin" },
];

// ─── Mock Data ────────────────────────────────────────────────────────────────

// ─── Utility components ───────────────────────────────────────────────────────

function StatusDot({ ok, pulse }: { ok: boolean; pulse?: boolean }) {
  return (
    <span className="relative flex h-2 w-2">
      {ok && pulse && (
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
      )}
      <span className={`relative inline-flex rounded-full h-2 w-2 ${ok ? "bg-emerald-400" : "bg-red-400"}`} />
    </span>
  );
}
function Badge({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "success" | "warn" | "danger" | "info" | "neutral" }) {
  const cls = {
    default: "bg-primary/10 text-primary",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    warn:    "bg-amber-500/10  text-amber-400  border border-amber-500/20",
    danger:  "bg-red-500/10   text-red-400    border border-red-500/20",
    info:    "bg-blue-500/10  text-blue-400   border border-blue-500/20",
    neutral: "bg-muted text-muted-foreground border border-border",
  }[variant];
  return <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-medium ${cls}`}>{children}</span>;
}

function MetricCard({ label, value, sub, trend, icon: Icon, color = "blue" }: {
  label: string; value: string; sub?: string; trend?: number; icon: any; color?: string;
}) {
  const colorMap: Record<string, string> = {
    blue:   "text-blue-400 bg-blue-500/10",
    green:  "text-emerald-400 bg-emerald-500/10",
    amber:  "text-amber-400 bg-amber-500/10",
    red:    "text-red-400 bg-red-500/10",
    purple: "text-purple-400 bg-purple-500/10",
  };
  return (
    <div className="bg-card border border-border rounded-md p-4 flex flex-col gap-3 hover:border-primary/30 transition-colors">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{label}</span>
        <span className={`p-1.5 rounded ${colorMap[color]}`}>
          <Icon size={13} />
        </span>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-semibold tracking-tight font-mono">{value}</span>
        {trend !== undefined && (
          <span className={`flex items-center gap-0.5 text-xs mb-0.5 font-mono ${trend >= 0 ? "text-emerald-400" : "text-red-400"}`}>
            {trend >= 0 ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
            {Math.abs(trend)}%
          </span>
        )}
      </div>
      {sub && <span className="text-xs text-muted-foreground">{sub}</span>}
    </div>
  );
}

function MethodBadge({ method }: { method: string }) {
  const c: Record<string, string> = {
    GET:    "text-emerald-400 bg-emerald-500/10",
    POST:   "text-blue-400 bg-blue-500/10",
    PUT:    "text-amber-400 bg-amber-500/10",
    PATCH:  "text-purple-400 bg-purple-500/10",
    DELETE: "text-red-400 bg-red-500/10",
  };
  return (
    <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${c[method] ?? "text-muted-foreground bg-muted"}`}>
      {method}
    </span>
  );
}

function StatusCode({ code }: { code: number }) {
  const c = code >= 500 ? "text-red-400" : code >= 400 ? "text-amber-400" : "text-emerald-400";
  return <span className={`font-mono text-xs font-bold ${c}`}>{code}</span>;
}

function LogLevel({ level }: { level: string }) {
  const styles: Record<string, string> = {
    ERROR: "text-red-400 bg-red-500/10",
    WARN:  "text-amber-400 bg-amber-500/10",
    INFO:  "text-blue-400 bg-blue-500/10",
    DEBUG: "text-muted-foreground bg-muted",
  };
  return (
    <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-bold w-14 text-center ${styles[level]}`}>
      {level}
    </span>
  );
}

function Modal({ open, onClose, title, children, size = "md" }: {
  open: boolean; onClose: () => void; title: string; children: React.ReactNode; size?: "sm" | "md" | "lg" | "xl";
}) {
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose, open]);
  if (!open) return null;
  const sizeMap = { sm: "max-w-md", md: "max-w-2xl", lg: "max-w-4xl", xl: "max-w-6xl" };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative bg-card border border-border rounded-lg shadow-2xl w-full ${sizeMap[size]} flex flex-col`}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <span className="text-sm font-semibold font-mono text-muted-foreground ">{title}</span>
          <button onClick={onClose} aria-label="Fechar modal" className="text-muted-foreground hover:text-foreground transition-colors p-0.5 rounded hover:bg-muted">
            <X size={15} />
          </button>
        </div>
        <div className="overflow-y-overlay flex-1 text-muted-foreground h-auto">{children}</div>
      </div>
    </div>
  );
}

// ─── JSON Tree ────────────────────────────────────────────────────────────────

function JsonTree({ data, depth = 0 }: { data: unknown; depth?: number }) {
  const [collapsed, setCollapsed] = useState(depth > 1);
  if (data === null) return <span className="text-muted-foreground font-mono text-xs">null</span>;
  if (typeof data === "boolean") return <span className={`font-mono text-xs ${data ? "text-emerald-400" : "text-red-400"}`}>{String(data)}</span>;
  if (typeof data === "number") return <span className="text-amber-400 font-mono text-xs">{data}</span>;
  if (typeof data === "string") return <span className="text-emerald-300 font-mono text-xs">&quot;{data}&quot;</span>;
  if (Array.isArray(data)) {
    if (data.length === 0) return <span className="text-muted-foreground font-mono text-xs">[]</span>;
    return (
      <span>
        <button onClick={() => setCollapsed(!collapsed)} className="text-blue-400 font-mono text-xs hover:underline">
          {collapsed ? `[…${data.length}]` : "["}
        </button>
        {!collapsed && (
          <div className="pl-4 border-l border-border/50 ml-1">
            {data.map((v, i) => (
              <div key={i}><JsonTree data={v} depth={depth + 1} />{i < data.length - 1 && <span className="text-muted-foreground font-mono text-xs">,</span>}</div>
            ))}
            <span className="text-blue-400 font-mono text-xs">]</span>
          </div>
        )}
      </span>
    );
  }
  if (typeof data === "object") {
    const entries = Object.entries(data as Record<string, unknown>);
    if (entries.length === 0) return <span className="text-muted-foreground font-mono text-xs">{"{}"}</span>
    // console.log(entries, "en")
    return (
      <span>
        <button onClick={() => setCollapsed(!collapsed)} className="text-blue-400 font-mono text-xs hover:underline">
          {collapsed ? `{…${entries.length}}` : "{"}
        </button>
        {!collapsed && (
          <div className="pl-4 border-l border-border/50 ml-1">
            {entries.map(([k, v], i) => (
              <div key={k} className="flex gap-1">
                <span className="text-purple-400 font-mono text-xs">&quot;{k}&quot;</span>
                <span className="text-muted-foreground font-mono text-xs">:</span>
                <JsonTree data={v} depth={depth + 1} />
                {i < entries.length - 1 && <span className="text-muted-foreground font-mono text-xs">,</span>}
              </div>
            ))}
            <span className="text-blue-400 font-mono text-xs">{"}"}</span>
          </div>
        )}
      </span>
    );
  }
  return null;
}

function jsonDisplayValue(value: unknown) {
  const sanitized = sanitizeNetworkValue(value);
  if (typeof sanitized !== "string") return sanitized;
  try { return JSON.parse(sanitized) as unknown; }
  catch { return sanitized; }
}

function JsonCodeBlock({ value, emptyLabel }: { value: unknown; emptyLabel: string }) {
  if (value === undefined) return <div className="text-[11px] font-mono text-muted-foreground italic">{emptyLabel}</div>;
  return (
    <div className="bg-[#0d1117] border border-border/70 rounded p-3 max-h-72 overflow-auto select-text leading-5">
      <JsonTree data={jsonDisplayValue(value)} />
    </div>
  );
}

function CollapsibleDetailBlock({ title, value, emptyLabel, defaultOpen = false }: { title: string; value: unknown; emptyLabel: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const copyValue = formatNetworkValue(value, emptyLabel);
  return (
    <section className="border border-border rounded-md overflow-hidden bg-card/40">
      <div className="flex items-center gap-2 px-3 py-2 bg-muted/20">
        <button type="button" onClick={() => setOpen(current => !current)} aria-expanded={open} className="flex flex-1 items-center gap-2 text-left">
          {open ? <ChevronDown size={12} className="text-primary"/> : <ChevronRight size={12} className="text-muted-foreground"/>}
          <span className="text-[10px] uppercase tracking-wider font-mono font-semibold">{title}</span>
        </button>
        <button type="button" onClick={() => void navigator.clipboard.writeText(copyValue)} className="text-[10px] font-mono text-muted-foreground hover:text-foreground px-2 py-1 rounded hover:bg-muted">Copiar</button>
      </div>
      {open && <div className="p-3 border-t border-border"><JsonCodeBlock value={value} emptyLabel={emptyLabel}/></div>}
    </section>
  );
}

function NetworkMetric({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="bg-muted/30 border border-border/50 p-3 rounded"><div className="text-[9px] text-muted-foreground uppercase tracking-wider mb-1">{label}</div><div className="font-mono text-xs font-semibold">{children}</div></div>;
}

// ─── Views ────────────────────────────────────────────────────────────────────

function DashboardView({ env: _env, onOpenHttp }: { env: Env; onOpenHttp: () => void }) {
  const logs = useNetworkLogger(state => state.logs);
  const performanceSamples = usePerformanceMonitor(state => state.samples);
  const currentPerformance = usePerformanceMonitor(state => state.current);
  const services = useServiceHealth(state => state.services);
  const checkingServices = useServiceHealth(state => state.checking);
  const runtimeErrors = useDevErrors(state => state.errors);
  const consoleEntries = useConsoleLogger().entries;
  const [selectedReq, setSelectedReq] = useState<NetworkLog | null>(null);
  const [tickets, setTickets] = useState<ChamadoResumo[]>([]);
  const [ticketTotal, setTicketTotal] = useState<number | null>(null);
  const [report, setReport] = useState<QualityReport | null>(null);
  const [dashboardError, setDashboardError] = useState("");

  useEffect(() => {
    let active = true;
    Promise.allSettled([
      chamadosApi.listar({ pagina: 1, tamanhoPagina: 100, ordenarPor: "dataAtualizacao", direcao: "desc" }),
      insightsApi.relatorio(),
    ]).then(([ticketResult, reportResult]) => {
      if (!active) return;
      const failures: string[] = [];
      if (ticketResult.status === "fulfilled") {
        setTickets(ticketResult.value.items);
        setTicketTotal(ticketResult.value.totalItens);
      } else failures.push("chamados");
      if (reportResult.status === "fulfilled") setReport(reportResult.value);
      else failures.push("relatório de qualidade");
      setDashboardError(failures.length ? `Não foi possível atualizar: ${failures.join(" e ")}.` : "");
    });
    return () => { active = false; };
  }, []);

  const completedLogs = logs.filter(log => log.status !== undefined);
  const lastMinuteLogs = completedLogs.filter(log => log.startTime >= Date.now() - 60_000);
  const averageLatency = lastMinuteLogs.length
    ? Math.round(lastMinuteLogs.reduce((sum, log) => sum + (log.duration ?? 0), 0) / lastMinuteLogs.length)
    : 0;
  const failedLogs = completedLogs.filter(log => log.status === 0 || (log.status ?? 0) >= 400);
  const errorRate = completedLogs.length ? (failedLogs.length / completedLogs.length) * 100 : 0;
  const execution = Object.entries(report?.execucao ?? {}).filter((entry): entry is [string, number] => typeof entry[1] === "number");
  const passedTests = execution.filter(([key]) => /aprov|pass|sucesso/i.test(key)).reduce((sum, [, value]) => sum + value, 0);
  const failedTests = execution.filter(([key]) => /reprov|fail|falh|bloque/i.test(key)).reduce((sum, [, value]) => sum + value, 0);
  const totalTests = passedTests + failedTests || execution.reduce((sum, [, value]) => sum + value, 0);
  const testPassRate = totalTests ? (passedTests / totalTests) * 100 : null;
  const openTickets = tickets.filter(ticket => !ticket.status.ehFinal);
  const criticalTickets = openTickets.filter(ticket => ticket.bloqueante || /P0|CRIT|BLOCK/i.test(ticket.prioridade.codigo));
  const consoleErrorCount = consoleEntries.filter(entry => entry.level === "error").reduce((sum, entry) => sum + entry.count, 0);
  const httpDistribution = [
    { name: "2xx", value: completedLogs.filter(log => (log.status ?? 0) >= 200 && (log.status ?? 0) < 300).length, color: "#3fb950" },
    { name: "4xx", value: completedLogs.filter(log => (log.status ?? 0) >= 400 && (log.status ?? 0) < 500).length, color: "#e3b341" },
    { name: "5xx/rede", value: completedLogs.filter(log => log.status === 0 || (log.status ?? 0) >= 500).length, color: "#f85149" },
  ];
  return (
    <div className="p-5 space-y-5">
      {/* Metrics */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
        <MetricCard label="Req/min" value={String(lastMinuteLogs.length)} icon={Activity} color="blue" sub={`média de ${averageLatency}ms · ${completedLogs.length} capturadas`} />
        <MetricCard label="Taxa de Erros" value={`${errorRate.toFixed(1)}%`} icon={AlertTriangle} color="amber" sub={`${failedLogs.length} HTTP · ${runtimeErrors.length + consoleErrorCount} console/runtime`} />
        <MetricCard label="Testes Aprovados" value={testPassRate === null ? "—" : `${testPassRate.toFixed(1)}%`} icon={CheckCircle2} color="green" sub={totalTests ? `${passedTests}/${totalTests} execuções` : "sem execução no relatório"} />
        <MetricCard label="Bugs Abertos" value={ticketTotal === null ? "—" : String(openTickets.length)} icon={Bug} color="red" sub={`${criticalTickets.length} críticos · ${ticketTotal ?? 0} no total`} />
      </div>
      {dashboardError && <div className="rounded border border-amber-500/30 bg-amber-500/5 px-3 py-2 text-xs font-mono text-amber-300">{dashboardError}</div>}

      {/* Charts row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
        <div className="xl:col-span-2 bg-card border border-border rounded-md p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">Latência & carga da UI — últimos 3 min</span>
            <div className="flex items-center gap-2">
              {currentPerformance && <span className="text-[10px] font-mono text-muted-foreground">{currentPerformance.fps} FPS · {currentPerformance.memory ?? "—"} MB</span>}
              <Badge variant="neutral">ao vivo</Badge>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={performanceSamples}>
              <defs>
                <linearGradient id="cLatency" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f8ef7" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#4f8ef7" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="cCpu" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3fb950" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#3fb950" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="label" tick={{ fill: "#8b949e", fontSize: 10, fontFamily: "JetBrains Mono" }} />
              <YAxis tick={{ fill: "#8b949e", fontSize: 10, fontFamily: "JetBrains Mono" }} />
              <Tooltip contentStyle={{ background: "#1c2128", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4, fontSize: 11, fontFamily: "JetBrains Mono" }} />
              <Area type="monotone" dataKey="latency" stroke="#4f8ef7" fill="url(#cLatency)" strokeWidth={1.5} name="Latência HTTP (ms)" />
              <Area type="monotone" dataKey="cpu" stroke="#3fb950" fill="url(#cCpu)" strokeWidth={1.5} name="Carga da UI (%)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card border border-border rounded-md p-4">
          <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">Distribuição HTTP</span>
          <div className="flex items-center justify-center mt-2">
            <ResponsiveContainer width="100%" height={130}>
              <PieChart>
                <Pie data={httpDistribution} cx="50%" cy="50%" innerRadius={38} outerRadius={55} dataKey="value" strokeWidth={0}>
                  {httpDistribution.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "#1c2128", border: "1px solid rgba(255,255,255,0.1)", fontSize: 11, fontFamily: "JetBrains Mono" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-1.5 mt-1">
            {httpDistribution.map(d => (
              <div key={d.name} className="flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: d.color }} />{d.name}</span>
                <span className="text-muted-foreground">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services + Recent Requests */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
        {/* Services */}
        <div className="bg-card border border-border rounded-md p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">Status dos Serviços</span>
            <button type="button" onClick={() => void refreshServiceHealth()} disabled={checkingServices} title="Validar serviços agora" className="text-muted-foreground hover:text-primary disabled:opacity-40">
              <RefreshCw size={12} className={checkingServices ? "animate-spin" : ""}/>
            </button>
          </div>
          <div className="mt-3 space-y-2">
            {services.map(s => (
              <div key={s.name} className="flex items-center justify-between py-1.5 border-b border-border/50 last:border-0">
                <div className="min-w-0">
                  <div className="text-xs font-mono">{s.name}</div>
                  <div className="text-[9px] font-mono text-muted-foreground">{s.latency === undefined ? "aguardando" : `${s.latency}ms · HTTP ${s.statusCode ?? 0}`}</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <StatusDot ok={s.status === "online"} pulse={s.status === "online"} />
                  <span className={`text-[10px] font-mono ${serviceStatusColor(s.status)}`}>
                    {SERVICE_STATUS_LABEL[s.status]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent requests table */}
        <div className="xl:col-span-2 bg-card border border-border rounded-md">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">Últimas Requisições</span>
            <button type="button" onClick={onOpenHttp} className="text-[10px] font-mono text-primary hover:underline">ver todas →</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs font-mono">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-4 py-2 text-muted-foreground font-normal">Método</th>
                  <th className="text-left px-4 py-2 text-muted-foreground font-normal">Path</th>
                  <th className="text-left px-4 py-2 text-muted-foreground font-normal">Status</th>
                  <th className="text-right px-4 py-2 text-muted-foreground font-normal">Duração</th>
                  <th className="text-right px-4 py-2 text-muted-foreground font-normal">Tamanho</th>
                </tr>
              </thead>
              <tbody>
                {logs.slice(0, 6).map(r => (
                  <tr key={r.id} onClick={() => setSelectedReq(r)}
                    className="border-b border-border/50 hover:bg-muted/30 cursor-pointer transition-colors">
                    <td className="px-4 py-2"><MethodBadge method={r.method} /></td>
                    <td className="px-4 py-2 max-w-[220px] truncate text-foreground/80" title={`${requestPath(r.url)} · ${r.page}`}>{requestPath(r.url)}</td>
                    <td className="px-4 py-2">{r.status === undefined ? <Badge variant="neutral">pendente</Badge> : <StatusCode code={r.status} />}</td>
                    <td className="px-4 py-2 text-right text-muted-foreground">{r.duration === undefined ? "—" : `${r.duration}ms`}</td>
                    <td className="px-4 py-2 text-right text-muted-foreground">{bytesLabel((r.requestSize ?? 0) + (r.responseSize ?? 0) || undefined)}</td>
                  </tr>
                ))}
                {!logs.length && <tr><td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">As próximas chamadas aparecerão aqui.</td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Request detail modal */}
      <Modal open={!!selectedReq} onClose={() => setSelectedReq(null)} title={`Requisição — ${selectedReq ? `${selectedReq.method} ${requestPath(selectedReq.url)}` : ""}`} size="xl">
        {selectedReq && <NetworkDetails log={selectedReq}/>} 
      </Modal>
    </div>
  );
}

function downloadText(filename: string, contents: string, type = "text/plain") {
  const url = URL.createObjectURL(new Blob([contents], { type }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function ConsoleDetailSection({ title, defaultOpen = false, children }: { title: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return <section className="border border-border rounded-md overflow-hidden"><button type="button" onClick={() => setOpen(current => !current)} aria-expanded={open} className="flex w-full items-center gap-2 bg-muted/20 px-3 py-2 text-left"><span className="text-primary">{open ? "▾" : "▸"}</span><span className="text-[10px] font-mono font-semibold uppercase tracking-wider">{title}</span></button>{open && <div className="border-t border-border p-3">{children}</div>}</section>;
}

function ConsoleEntryDetails({ entry, onRemove, onTogglePinned }: { entry: ConsoleLogEntry; onRemove: () => void; onTogglePinned: () => void }) {
  const copyPayload = JSON.stringify({ id: entry.id, level: entry.level, timestamp: new Date(entry.timestamp).toISOString(), source: entry.source, stack: entry.stack, signature: entry.signature, count: entry.count, pinned: entry.pinned, args: entry.args.map(argument => serializeConsoleValue(argument)) }, null, 2);
  return <div className="p-4 space-y-3 font-mono text-xs">
    <div className="flex flex-wrap gap-2"><button onClick={onTogglePinned} className="px-3 py-1.5 border border-border rounded hover:bg-muted">{entry.pinned ? "Desafixar" : "Fixar"}</button><button onClick={() => void navigator.clipboard.writeText(copyPayload)} className="px-3 py-1.5 border border-border rounded hover:bg-muted">Copiar registro completo</button><button onClick={onRemove} className="px-3 py-1.5 border border-red-500/30 text-red-400 rounded hover:bg-red-500/10">Remover</button></div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2"><NetworkMetric label="Nível"><LogLevel level={entry.level.toUpperCase()}/></NetworkMetric><NetworkMetric label="Horário">{new Date(entry.timestamp).toLocaleString("pt-BR", { hour12: false })}</NetworkMetric><NetworkMetric label="Ocorrências">{entry.count}</NetworkMetric><NetworkMetric label="Fixado">{entry.pinned ? "Sim" : "Não"}</NetworkMetric><NetworkMetric label="Argumentos">{entry.args.length}</NetworkMetric><NetworkMetric label="ID"><span className="break-all text-[10px]">{entry.id}</span></NetworkMetric></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2"><NetworkMetric label="Origem"><span className="break-all">{entry.source ?? "Indisponível"}</span></NetworkMetric><NetworkMetric label="Assinatura"><span className="break-all text-[10px]">{entry.signature}</span></NetworkMetric></div>
    <ConsoleDetailSection title="Mensagem consolidada" defaultOpen><div className="rounded border border-border/70 bg-[#0d1117] p-3 text-foreground select-text whitespace-pre-wrap break-all">{entry.searchText || "(sem conteúdo)"}</div></ConsoleDetailSection>
    <ConsoleDetailSection title={`Argumentos (${entry.args.length})`} defaultOpen><div className="rounded border border-border/70 bg-[#0d1117] py-2 overflow-auto select-text">{entry.args.length ? entry.args.map((argument, index) => <ConsoleValueInspector key={index} value={argument} name={`args[${index}]`}/>) : <span className="px-3 text-muted-foreground">Nenhum argumento informado.</span>}</div></ConsoleDetailSection>
    <ConsoleDetailSection title="Stack de captura"><pre className="max-h-72 overflow-auto rounded border border-border/70 bg-[#0d1117] p-3 text-[10px] leading-5 text-muted-foreground whitespace-pre-wrap select-text">{entry.stack ?? "Stack indisponível"}</pre></ConsoleDetailSection>
    {entry.args.some(argument => argument instanceof Error) && <ConsoleDetailSection title="Stack dos erros" defaultOpen><pre className="max-h-72 overflow-auto rounded border border-red-500/20 bg-red-500/5 p-3 text-[10px] leading-5 text-red-300 whitespace-pre-wrap select-text">{entry.args.filter((argument): argument is Error => argument instanceof Error).map(error => error.stack ?? `${error.name}: ${error.message}`).join("\n\n")}</pre></ConsoleDetailSection>}
  </div>;
}

function GlobalConsoleEntry({ entry, onRemove, onTogglePinned }: { entry: ConsoleLogEntry; onRemove: () => void; onTogglePinned: () => void }) {
  const [open, setOpen] = useState(entry.args.some(isComplexConsoleValue));
  return <article className={`border rounded-md overflow-hidden ${entry.level === "error" ? "border-red-500/30" : entry.level === "warn" ? "border-amber-500/30" : "border-border"}`}><button type="button" onClick={() => setOpen(current => !current)} aria-expanded={open} className="flex w-full items-start gap-2 bg-card/70 px-3 py-2.5 text-left hover:bg-muted/30"><span className="mt-0.5 text-primary">{open ? "▾" : "▸"}</span><LogLevel level={entry.level.toUpperCase()}/><span className="w-20 shrink-0 text-[10px] font-mono text-muted-foreground">{new Date(entry.timestamp).toLocaleTimeString("pt-BR", { hour12: false })}</span><span className="flex-1 break-all text-xs font-mono">{entry.args.map(consoleValueToText).join(" ") || "(sem argumentos)"}</span>{entry.count > 1 && <Badge variant="neutral">x{entry.count}</Badge>}{entry.pinned && <Badge variant="warn">fixado</Badge>}</button>{open && <div className="border-t border-border"><ConsoleEntryDetails entry={entry} onTogglePinned={onTogglePinned} onRemove={onRemove}/></div>}</article>;
}

function GlobalConsoleModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const logger = useConsoleLogger();
  const [search, setSearch] = useState("");
  const [onlyComplex, setOnlyComplex] = useState(false);
  const [levels, setLevels] = useState<Set<string>>(() => new Set(CONSOLE_LEVELS));
  const toggleLevel = (level: string) => setLevels(current => { const next = new Set(current); if (next.has(level)) next.delete(level); else next.add(level); return next; });
  const filtered = logger.entries.filter(entry => levels.has(entry.level) && (!onlyComplex || entry.args.some(isComplexConsoleValue)) && (!search || `${entry.level} ${entry.searchText} ${entry.source ?? ""}`.toLowerCase().includes(search.toLowerCase()))).sort((first, second) => first.pinned === second.pinned ? second.timestamp - first.timestamp : first.pinned ? -1 : 1);
  const exportJson = () => downloadText("console-session.json", JSON.stringify(filtered.map(entry => ({ ...entry, timestamp: new Date(entry.timestamp).toISOString(), args: entry.args.map(argument => serializeConsoleValue(argument)) })), null, 2), "application/json");
  return <Modal open={open} onClose={onClose} title={`Console global · ${filtered.length} de ${logger.entries.length}`} size="xl"><div className="flex flex-col h-fit-content"><div className="flex flex-wrap items-center gap-2 border-b border-border bg-card/50 p-3"><div className="flex overflow-hidden rounded border border-border">{CONSOLE_LEVELS.map(level => <button key={level} onClick={() => toggleLevel(level)} className={`px-2 py-1.5 text-[9px] font-mono uppercase ${levels.has(level) ? "bg-primary text-primary-foreground" : "bg-muted/30 text-muted-foreground"}`}>{level}</button>)}</div><div className="flex min-w-48 flex-1 items-center gap-1.5 rounded bg-muted px-2 py-1.5"><Search size={11}/><input aria-label="Filtrar console global" value={search} onChange={event => setSearch(event.target.value)} placeholder="Mensagem, origem ou nível..." className="flex-1 bg-transparent text-xs font-mono outline-none"/></div><label className="flex items-center gap-1.5 text-[10px] font-mono"><input type="checkbox" checked={onlyComplex} onChange={event => setOnlyComplex(event.target.checked)}/>Objetos/funções</label><select aria-label="Limite do console global" value={logger.maxEntries} onChange={event => logger.setMaxEntries(Number(event.target.value))} className="rounded border border-border bg-muted px-2 py-1.5 text-[10px] font-mono">{[100,250,500,1000,2500].map(limit => <option key={limit} value={limit}>{limit} logs</option>)}</select><button onClick={() => logger.setPaused(!logger.paused)} className={`px-2 py-1.5 text-[10px] font-mono border rounded ${logger.paused ? "border-amber-500 text-amber-400" : "border-border text-emerald-400"}`}>{logger.paused ? "Retomar" : "Ao vivo"}</button><button onClick={exportJson} className="px-2 py-1.5 text-[10px] font-mono border border-border rounded">Exportar</button><button onClick={logger.clearUnpinned} className="px-2 py-1.5 text-[10px] font-mono border border-border rounded">Limpar</button></div><div className="flex-1 overflow-y-auto p-3 space-y-2">{filtered.map(entry => <GlobalConsoleEntry key={entry.id} entry={entry} onTogglePinned={() => logger.togglePinned(entry.id)} onRemove={() => logger.removeEntry(entry.id)}/>)}{!filtered.length && <div className="flex flex-col items-center justify-center py-20 text-muted-foreground"><Terminal size={34} className="opacity-20"/><span className="mt-2 text-xs font-mono">Nenhum log encontrado</span></div>}</div></div></Modal>;
}

function ConsoleLogsRuntimeView() {
  const logger = useConsoleLogger();
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<ConsoleLogEntry | null>(null);
  const levels = ["all", "error", "warn", "info", "log", "debug", "table"];
  const filtered = logger.entries.filter(entry =>
    (filter === "all" || entry.level === filter) &&
    (!search || entry.searchText.toLowerCase().includes(search.toLowerCase()) || entry.source?.toLowerCase().includes(search.toLowerCase()))
  ).reverse();
  const exportLogs = (csv = false) => {
    if (csv) {
      const quote = (value: string) => `"${value.replace(/"/g, '""')}"`;
      downloadText("console-logs.csv", ["timestamp,level,message,source,count", ...filtered.map(entry => [new Date(entry.timestamp).toISOString(), entry.level, entry.searchText, entry.source ?? "", String(entry.count)].map(quote).join(","))].join("\n"), "text/csv");
      return;
    }
    downloadText("console-logs.txt", filtered.map(entry => `[${new Date(entry.timestamp).toISOString()}] ${entry.level.toUpperCase()} ${entry.searchText}${entry.count > 1 ? ` (x${entry.count})` : ""}`).join("\n"));
  };
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-card/50 flex-wrap">
        <div className="flex bg-muted rounded overflow-hidden">{levels.map(level => <button key={level} onClick={() => setFilter(level)} className={`px-2.5 py-1 text-[10px] font-mono font-semibold uppercase ${filter === level ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>{level}</button>)}</div>
        <div className="flex items-center gap-1.5 bg-muted rounded px-2 py-1 flex-1 min-w-40"><Search size={11} className="text-muted-foreground" /><input value={search} onChange={event => setSearch(event.target.value)} placeholder="Filtrar logs, origem ou conteúdo..." className="bg-transparent text-xs font-mono outline-none placeholder:text-muted-foreground flex-1" /></div>
        <button onClick={() => { recordDevEvent({ kind: "marker", title: "Marcador manual no console" }); console.info("[QA] Marcador manual", { rota: window.location.pathname, horario: new Date(), validar: function validarMarcador(valor: unknown) { return valor !== null && valor !== undefined; } }); }} className="px-2 py-1 text-[10px] font-mono border border-border rounded">Marcar</button>
        <button onClick={() => exportLogs()} className="flex items-center gap-1 px-2 py-1 text-[10px] font-mono border border-border rounded"><Download size={11}/>TXT</button>
        <button onClick={() => exportLogs(true)} className="flex items-center gap-1 px-2 py-1 text-[10px] font-mono border border-border rounded"><Download size={11}/>CSV</button>
        <button onClick={() => logger.setPaused(!logger.paused)} className={`flex items-center gap-1 px-2 py-1 text-[10px] font-mono border rounded ${logger.paused ? "border-amber-500 text-amber-400" : "border-border text-emerald-400"}`}><RefreshCw size={11}/>{logger.paused ? "Retomar" : "Ao vivo"}</button>
        <button onClick={logger.clearUnpinned} className="flex items-center gap-1 px-2 py-1 text-[10px] font-mono border border-border rounded"><Trash2 size={11}/>Limpar</button>
      </div>
      <div className="px-4 py-1.5 border-b border-border/50 text-[10px] font-mono text-muted-foreground">{logger.entries.length} capturados · limite {logger.maxEntries} · logs repetidos são agrupados · valores complexos e circulares são serializados com segurança</div>
      <div className="flex-1 overflow-y-auto font-mono text-xs">
        {filtered.map(entry => <div key={entry.id} onClick={() => setSelected(entry)} className={`flex items-start gap-3 px-4 py-2 border-b border-border/30 cursor-pointer hover:bg-muted/20 ${entry.level === "error" ? "border-l-2 border-l-red-500/50" : entry.level === "warn" ? "border-l-2 border-l-amber-500/50" : "border-l-2 border-l-transparent"}`}>
          <span className="text-muted-foreground text-[10px] w-24 shrink-0 tabular-nums">{new Date(entry.timestamp).toLocaleTimeString("pt-BR", { hour12: false })}</span><LogLevel level={entry.level.toUpperCase()} />
          <span className="flex-1 break-all text-foreground/80">{entry.args.map(consoleValueToText).join(" ")}</span>{entry.count > 1 && <Badge variant="neutral">x{entry.count}</Badge>}{entry.pinned && <span className="text-amber-400">fixado</span>}
        </div>)}
        {!filtered.length && <div className="flex flex-col items-center justify-center py-20 text-muted-foreground gap-2"><Terminal size={32} className="opacity-20"/><span className="text-xs font-mono">Nenhum log capturado com estes filtros</span></div>}
      </div>
      <Modal open={!!selected} onClose={() => setSelected(null)} title={`Console · ${selected?.level.toUpperCase() ?? ""}`} size="xl">{selected && <ConsoleEntryDetails entry={selected} onTogglePinned={() => logger.togglePinned(selected.id)} onRemove={() => { logger.removeEntry(selected.id); setSelected(null); }}/>}</Modal>
    </div>
  );
}

function bytesLabel(value?: number) {
  if (value === undefined) return "—";
  if (value < 1024) return `${value} B`;
  return `${(value / 1024).toFixed(1)} KB`;
}

function requestPath(url: string) {
  try { return new URL(url, window.location.origin).pathname + new URL(url, window.location.origin).search; }
  catch { return url; }
}

function editableRequestHeaders(log: NetworkLog) {
  return Object.fromEntries(
    Object.entries(log.headers ?? {}).filter(([, value]) => value !== "[REDACTED]"),
  );
}
const SERVICE_STATUS_LABEL: Record<ServiceHealthStatus, string> = {
  checking: "VERIFICANDO",
  online: "ONLINE",
  degraded: "DEGRADADO",
  offline: "OFFLINE",
};

function serviceStatusColor(status: ServiceHealthStatus) {
  if (status === "online") return "text-emerald-400";
  if (status === "degraded" || status === "checking") return "text-amber-400";
  return "text-red-400";
}

const MODULE_COUNTER_KEYS: Partial<Record<Module, NavigationCountKey>> = {
  flags: "flags",
  generator: "generator",
  testcases: "testcases",
  bugs: "bugs",
  exploratory: "exploratory",
  evidence: "evidence",
  matrix: "matrix",
};

function NavigationBadgeValue({ count, active, collapsed }: { count: number; active: boolean; collapsed: boolean }) {
  if (collapsed) return count > 0 ? <span title={`${count} itens`} className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-destructive"/> : null;
  return <span className={`text-[9px] font-mono font-bold px-1 py-0.5 rounded-full min-w-4 text-center ${active ? "bg-primary text-primary-foreground" : "bg-destructive/10 text-destructive"}`}>{count}</span>;
}

function NetworkNavigationBadge(props: { active: boolean; collapsed: boolean }) {
  const count = useNetworkLogger(state => state.logs.length);
  return <NavigationBadgeValue count={count} {...props}/>;
}

function ConsoleNavigationBadge(props: { active: boolean; collapsed: boolean }) {
  const count = useConsoleLogger().entries.length;
  return <NavigationBadgeValue count={count} {...props}/>;
}

function ErrorNavigationBadge(props: { active: boolean; collapsed: boolean }) {
  const count = useDevErrors(state => state.errors.length);
  return <NavigationBadgeValue count={count} {...props}/>;
}

function ResourceNavigationBadge({ counterKey, ...props }: { counterKey: NavigationCountKey; active: boolean; collapsed: boolean }) {
  const count = useNavigationCounters(state => state.counts[counterKey]);
  return count === undefined ? null : <NavigationBadgeValue count={count} {...props}/>;
}

function NavigationBadge({ module, active, collapsed }: { module: Module; active: boolean; collapsed: boolean }) {
  if (module === "http") return <NetworkNavigationBadge active={active} collapsed={collapsed}/>;
  if (module === "logs") return <ConsoleNavigationBadge active={active} collapsed={collapsed}/>;
  if (module === "errors") return <ErrorNavigationBadge active={active} collapsed={collapsed}/>;
  const counterKey = MODULE_COUNTER_KEYS[module];
  return counterKey ? <ResourceNavigationBadge counterKey={counterKey} active={active} collapsed={collapsed}/> : null;
}

function HeaderServiceStatus() {
  const services = useServiceHealth(state => state.services);
  return <div className="flex items-center gap-1 hidden md:flex">
    {services.map(service => (
      <div key={service.id} title={`${service.name}: ${SERVICE_STATUS_LABEL[service.status]}${service.latency === undefined ? "" : ` · ${service.latency}ms`}`}>
        <StatusDot ok={service.status === "online"}/>
      </div>
    ))}
  </div>;
}

function editableRequestPayload(value: unknown) {
  if (value === undefined || value === null) return "";
  if (typeof value !== "string") return JSON.stringify(value, null, 2);
  try { return JSON.stringify(JSON.parse(value), null, 2); }
  catch { return value; }
}

interface NetworkReplayResult {
  url: string;
  status: number;
  statusText: string;
  duration: number;
  requestSize: number;
  responseSize: number;
  responseHeaders: Record<string, string>;
  response: unknown;
}

const NETWORK_REPLAY_SUCCESS_EVENT = "qa:network-replay-success";

function NetworkDetails({ log }: { log: NetworkLog }) {
  const [copied, setCopied] = useState("");
  const [replayOpen, setReplayOpen] = useState(false);
  const [replayUrl, setReplayUrl] = useState(log.url);
  const [replayHeaders, setReplayHeaders] = useState(() => JSON.stringify(editableRequestHeaders(log), null, 2));
  const [replayPayload, setReplayPayload] = useState(() => editableRequestPayload(log.bodyPayload));
  const [replayLoading, setReplayLoading] = useState(false);
  const [replayFeedback, setReplayFeedback] = useState<{ kind: "success" | "error"; message: string } | null>(null);
  const [replayResult, setReplayResult] = useState<NetworkReplayResult | null>(null);
  useEffect(() => {
    setReplayUrl(log.url);
    setReplayHeaders(JSON.stringify(editableRequestHeaders(log), null, 2));
    setReplayPayload(editableRequestPayload(log.bodyPayload));
    setReplayFeedback(null);
    setReplayResult(null);
    setReplayOpen(false);
  }, [log.id, log.url, log.bodyPayload, log.headers]);
  const copy = async (label: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(label);
    window.setTimeout(() => setCopied(""), 1500);
  };
  const fetchSnippet = `fetch(${JSON.stringify(sanitizeNetworkUrl(log.url))}, ${JSON.stringify({ method: log.method, headers: log.headers, ...(log.bodyPayload === undefined ? {} : { body: JSON.stringify(log.bodyPayload) }) }, null, 2)})`;
  const axiosSnippet = `axios(${JSON.stringify({ url: sanitizeNetworkUrl(log.url), method: log.method.toLowerCase(), headers: log.headers, ...(log.bodyPayload === undefined ? {} : { data: log.bodyPayload }) }, null, 2)})`;
  const retry = async () => {
    setReplayFeedback(null);
    setReplayResult(null);
    let headers: Record<string, string>;
    try {
      const parsed = JSON.parse(replayHeaders || "{}");
      if (!parsed || Array.isArray(parsed) || typeof parsed !== "object") throw new Error();
      headers = Object.fromEntries(Object.entries(parsed as Record<string, unknown>).map(([key, value]) => [key, String(value)]));
    } catch {
      setReplayFeedback({ kind: "error", message: "Headers inválidos. Informe um objeto JSON com pares de chave e valor." });
      return;
    }
    const methodHasBody = !["GET", "HEAD"].includes(log.method.toUpperCase());
    let body: string | undefined;
    if (methodHasBody && replayPayload.trim()) {
      try { body = JSON.stringify(JSON.parse(replayPayload)); }
      catch { body = replayPayload; }
    }
    setReplayLoading(true);
    const startedAt = performance.now();
    try {
      const response = await fetch(replayUrl.trim(), {
        method: log.method,
        headers,
        ...(body === undefined ? {} : { body }),
      });
      const responseText = await response.text();
      const duration = Math.round(performance.now() - startedAt);
      const replayResponseHeaders = Object.fromEntries(response.headers.entries());
      let responseBody: unknown = responseText;
      if (responseText) {
        try { responseBody = JSON.parse(responseText); }
        catch { /* Mantém respostas que não são JSON como texto. */ }
      } else {
        responseBody = undefined;
      }
      setReplayResult({
        url: replayUrl.trim(),
        status: response.status,
        statusText: response.statusText,
        duration,
        requestSize: new Blob([body ?? ""]).size,
        responseSize: new Blob([responseText]).size,
        responseHeaders: replayResponseHeaders,
        response: responseBody,
      });
      setReplayFeedback({
        kind: response.ok ? "success" : "error",
        message: response.ok
          ? `Chamada concluída com status ${response.status} em ${duration}ms. Os dados da tela de origem foram atualizados.`
          : `Chamada concluída com status ${response.status} em ${duration}ms.`,
      });
      if (response.ok) {
        stageNetworkReplayApplication({
          originalUrl: log.url,
          method: log.method,
          status: response.status,
          statusText: response.statusText,
          headers: replayResponseHeaders,
          body: responseText,
        });
        window.dispatchEvent(new CustomEvent(NETWORK_REPLAY_SUCCESS_EVENT, {
          detail: { page: log.page, method: log.method, url: replayUrl.trim(), status: response.status },
        }));
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Não foi possível repetir a chamada.";
      const duration = Math.round(performance.now() - startedAt);
      setReplayResult({
        url: replayUrl.trim(),
        status: 0,
        statusText: "Falha de rede",
        duration,
        requestSize: new Blob([body ?? ""]).size,
        responseSize: 0,
        responseHeaders: {},
        response: { error: message },
      });
      setReplayFeedback({ kind: "error", message });
    } finally {
      setReplayLoading(false);
    }
  };
  const totalSize = (log.requestSize ?? 0) + (log.responseSize ?? 0);
  return (
    <div className="p-4 space-y-4 font-mono text-xs">
      <div className="flex flex-wrap gap-2">
        <button onClick={() => void copy("curl", buildSafeCurl(log))} className="px-3 py-1.5 border border-border rounded hover:bg-muted">{copied === "curl" ? "Copiado" : "Copiar cURL"}</button>
        <button onClick={() => void copy("fetch", fetchSnippet)} className="px-3 py-1.5 border border-border rounded hover:bg-muted">{copied === "fetch" ? "Copiado" : "Copiar fetch"}</button>
        <button onClick={() => void copy("axios", axiosSnippet)} className="px-3 py-1.5 border border-border rounded hover:bg-muted">{copied === "axios" ? "Copiado" : "Copiar Axios"}</button>
        <button onClick={() => { setReplayOpen(current => !current); setReplayFeedback(null); }} className="px-3 py-1.5 border border-primary/40 text-primary rounded hover:bg-primary/10">{replayOpen ? "Fechar repetição" : "Editar e repetir chamada"}</button>
      </div>
      {replayOpen && <section className="space-y-3 rounded-md border border-primary/30 bg-primary/5 p-3">
        <div className="flex items-center justify-between gap-3">
          <div><div className="text-[10px] uppercase tracking-wider font-semibold text-primary">Repetir chamada</div><div className="mt-1 text-[10px] text-muted-foreground">Edite os dados antes de enviar. O método será mantido como {log.method}.</div></div>
          <MethodBadge method={log.method}/>
        </div>
        <label className="block space-y-1.5">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">URL</span>
          <input value={replayUrl} onChange={event => setReplayUrl(event.target.value)} spellCheck={false} className="w-full rounded border border-border bg-[#0d1117] px-3 py-2 text-xs font-mono outline-none focus:border-primary"/>
        </label>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <label className="block space-y-1.5">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Headers (JSON)</span>
            <textarea value={replayHeaders} onChange={event => setReplayHeaders(event.target.value)} spellCheck={false} rows={9} className="w-full resize-y rounded border border-border bg-[#0d1117] p-3 text-xs leading-5 font-mono outline-none focus:border-primary"/>
          </label>
          <label className="block space-y-1.5">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Payload {!["GET", "HEAD"].includes(log.method.toUpperCase()) ? "(JSON ou texto)" : "(não enviado para este método)"}</span>
            <textarea value={replayPayload} onChange={event => setReplayPayload(event.target.value)} disabled={["GET", "HEAD"].includes(log.method.toUpperCase())} spellCheck={false} rows={9} placeholder="Sem payload" className="w-full resize-y rounded border border-border bg-[#0d1117] p-3 text-xs leading-5 font-mono outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50"/>
          </label>
        </div>
        {replayFeedback && <div role="status" className={`rounded border px-3 py-2 text-[11px] ${replayFeedback.kind === "success" ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" : "border-red-500/30 bg-red-500/10 text-red-400"}`}>{replayFeedback.message}</div>}
        <div className="flex justify-end">
          <button onClick={() => void retry()} disabled={replayLoading || !replayUrl.trim()} className="flex items-center gap-2 rounded bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50">{replayLoading ? <RefreshCw size={13} className="animate-spin"/> : <Repeat size={13}/>} {replayLoading ? "Enviando..." : "Enviar chamada"}</button>
        </div>
        {replayResult && <div className="space-y-2 border-t border-primary/20 pt-3">
          <div className="flex items-center justify-between gap-2"><span className="text-[10px] uppercase tracking-wider font-semibold text-primary">Resultado da nova chamada</span><span className="text-[10px] text-muted-foreground">{replayResult.statusText}</span></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <NetworkMetric label="Status">{replayResult.status === 0 ? <span className="text-red-400">Falha de rede</span> : <StatusCode code={replayResult.status}/>}</NetworkMetric>
            <NetworkMetric label="Duração">{replayResult.duration}ms</NetworkMetric>
            <NetworkMetric label="Requisição">{bytesLabel(replayResult.requestSize)}</NetworkMetric>
            <NetworkMetric label="Resposta">{bytesLabel(replayResult.responseSize)}</NetworkMetric>
          </div>
          <CollapsibleDetailBlock title="URL executada" value={replayResult.url} emptyLabel="URL indisponível"/>
          <CollapsibleDetailBlock title="Headers da nova resposta" value={replayResult.responseHeaders} emptyLabel="Sem headers na resposta"/>
          <CollapsibleDetailBlock title="Resultado da nova resposta" value={replayResult.response} emptyLabel="Resposta vazia" defaultOpen/>
        </div>}
      </section>}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2">
        <NetworkMetric label="Método"><MethodBadge method={log.method}/></NetworkMetric>
        <NetworkMetric label="Status">{log.status === undefined ? "Pendente" : <StatusCode code={log.status}/>}</NetworkMetric>
        <NetworkMetric label="Duração">{log.duration === undefined ? "—" : `${log.duration}ms`}</NetworkMetric>
        <NetworkMetric label="Requisição">{bytesLabel(log.requestSize)}</NetworkMetric>
        <NetworkMetric label="Resposta">{bytesLabel(log.responseSize)}</NetworkMetric>
        <NetworkMetric label="Tamanho total">{bytesLabel(totalSize || undefined)}</NetworkMetric>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <NetworkMetric label="Origem"><span className="break-all">{log.page}</span></NetworkMetric>
        <NetworkMetric label="Rastreamento"><span className="break-all">{log.traceId ?? log.id}</span></NetworkMetric>
      </div>
      <div className="space-y-2">
        <CollapsibleDetailBlock title="URL completa" value={sanitizeNetworkUrl(log.url)} emptyLabel="URL indisponível" defaultOpen/>
        <CollapsibleDetailBlock title="Headers da requisição" value={log.headers} emptyLabel="Sem headers"/>
        <CollapsibleDetailBlock title="Query / payload enviado" value={log.payload} emptyLabel="Sem payload" defaultOpen/>
        <CollapsibleDetailBlock title="Headers da resposta" value={log.responseHeaders} emptyLabel="Headers indisponíveis"/>
        <CollapsibleDetailBlock title="Resultado / resposta" value={log.response} emptyLabel="Aguardando resposta" defaultOpen/>
        <CollapsibleDetailBlock title="cURL seguro" value={buildSafeCurl(log)} emptyLabel="cURL indisponível"/>
      </div>
    </div>
  );
}

function GlobalNetworkCall({ log }: { log: NetworkLog }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`border rounded-md overflow-hidden ${log.status === 0 || Number(log.status) >= 500 ? "border-red-500/30" : Number(log.status) >= 400 ? "border-amber-500/30" : "border-border"}`}>
      <button type="button" onClick={() => setOpen(current => !current)} aria-expanded={open} className="w-full flex items-center gap-2 px-3 py-2.5 bg-card/70 hover:bg-muted/30 text-left font-mono text-xs">
        {open ? <ChevronDown size={12} className="text-primary shrink-0"/> : <ChevronRight size={12} className="text-muted-foreground shrink-0"/>}
        <MethodBadge method={log.method}/>
        <span className="flex-1 truncate" title={log.url}>{requestPath(log.url)}</span>
        {log.status === undefined ? <Badge variant="neutral">pendente</Badge> : <StatusCode code={log.status}/>}
        <span className="text-muted-foreground w-16 text-right">{log.duration === undefined ? "—" : `${log.duration}ms`}</span>
        <span className="text-muted-foreground w-16 text-right">{bytesLabel((log.requestSize ?? 0) + (log.responseSize ?? 0) || undefined)}</span>
      </button>
      {open && <div className="border-t border-border"><NetworkDetails log={log}/></div>}
    </article>
  );
}

function GlobalNetworkGroup({ path, logs, defaultOpen }: { path: string; logs: NetworkLog[]; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const failures = logs.filter(log => log.status === 0 || Number(log.status) >= 400).length;
  return (
    <section className="border border-border rounded-md overflow-hidden">
      <button type="button" onClick={() => setOpen(current => !current)} aria-expanded={open} className="w-full flex items-center gap-2 px-3 py-2 bg-muted/20 hover:bg-muted/40 text-left font-mono text-xs">
        {open ? <ChevronDown size={12} className="text-primary"/> : <ChevronRight size={12}/>}<span className="flex-1 font-semibold">{path}</span><Badge variant="neutral">{logs.length} req</Badge>{failures > 0 && <Badge variant="danger">{failures} erro{failures > 1 ? "s" : ""}</Badge>}
      </button>
      {open && <div className="p-2 space-y-2 border-t border-border">{logs.map(log => <GlobalNetworkCall key={log.id} log={log}/>)}</div>}
    </section>
  );
}

function GlobalNetworkModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const logs = useNetworkLogger(state => state.logs);
  const navigations = useNetworkLogger(state => state.navigations);
  const clearLogs = useNetworkLogger(state => state.clearLogs);
  const [search, setSearch] = useState("");
  const [method, setMethod] = useState("ALL");
  const [status, setStatus] = useState("ALL");
  const [grouped, setGrouped] = useState(true);
  const filtered = logs.filter(log => {
    const query = search.trim().toLowerCase();
    if (query && !`${log.method} ${log.url} ${log.page}`.toLowerCase().includes(query)) return false;
    if (method !== "ALL" && log.method !== method) return false;
    if (status === "pending") return log.status === undefined;
    if (status === "2xx") return log.status !== undefined && log.status >= 200 && log.status < 300;
    if (status === "4xx") return log.status !== undefined && log.status >= 400 && log.status < 500;
    if (status === "5xx") return log.status !== undefined && log.status >= 500;
    return true;
  });
  const groups = [...navigations].reverse().map(navigation => ({ ...navigation, logs: filtered.filter(log => log.navigationId === navigation.id) })).filter(group => group.logs.length > 0);
  return (
    <Modal open={open} onClose={onClose} title={`Chamadas HTTP · ${filtered.length} de ${logs.length}`} size="xl">
      <div className="flex flex-col min-h-[5vh] max-h-[80vh]">
        <div className="flex flex-wrap items-center gap-2 p-3 border-b border-border bg-card/50">
          <div className="flex rounded border border-border overflow-hidden"><button onClick={() => setGrouped(true)} className={`px-2.5 py-1.5 text-[10px] font-mono ${grouped ? "bg-primary text-primary-foreground" : "bg-muted/30"}`}>Por página</button><button onClick={() => setGrouped(false)} className={`px-2.5 py-1.5 text-[10px] font-mono ${!grouped ? "bg-primary text-primary-foreground" : "bg-muted/30"}`}>Lista</button></div>
          <div className="flex items-center gap-1.5 bg-muted rounded px-2 py-1.5 flex-1 min-w-48"><Search size={11}/><input aria-label="Filtrar chamadas globais" value={search} onChange={event => setSearch(event.target.value)} placeholder="URL, método ou página..." className="bg-transparent outline-none text-xs font-mono flex-1"/></div>
          <select aria-label="Filtrar método global" value={method} onChange={event => setMethod(event.target.value)} className="bg-muted border border-border rounded px-2 py-1.5 text-[10px] font-mono">{["ALL", "GET", "POST", "PUT", "PATCH", "DELETE"].map(item => <option key={item}>{item}</option>)}</select>
          <select aria-label="Filtrar status global" value={status} onChange={event => setStatus(event.target.value)} className="bg-muted border border-border rounded px-2 py-1.5 text-[10px] font-mono">{["ALL", "pending", "2xx", "4xx", "5xx"].map(item => <option key={item}>{item}</option>)}</select>
          <button onClick={clearLogs} className="flex items-center gap-1 px-2 py-1.5 text-[10px] font-mono border border-border rounded hover:bg-muted"><Trash2 size={11}/>Limpar</button>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {!filtered.length && <div className="flex flex-col items-center justify-center py-20 text-muted-foreground"><Wifi size={34} className="opacity-20"/><span className="mt-2 text-xs font-mono">Nenhuma chamada encontrada</span></div>}
          {grouped ? groups.map((group, index) => <GlobalNetworkGroup key={group.id} path={group.path} logs={group.logs} defaultOpen={index === 0}/>) : filtered.map(log => <GlobalNetworkCall key={log.id} log={log}/>) }
        </div>
      </div>
    </Modal>
  );
}

function GlobalDevToolsLaunchers() {
  const [networkOpen, setNetworkOpen] = useState(false);
  const [consoleOpen, setConsoleOpen] = useState(false);
  const networkLogs = useNetworkLogger(state => state.logs);
  const consoleLogger = useConsoleLogger();
  return <>
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      <button type="button" onClick={() => setConsoleOpen(true)} aria-label="Abrir console global" title="Abrir console global" className="relative flex items-center gap-2 rounded-full border border-violet-500/40 bg-card px-3 py-2.5 text-violet-300 shadow-2xl shadow-black/30 hover:bg-violet-500/10 transition-colors">
        <Terminal size={16}/><span className="text-[10px] font-mono font-semibold">CONSOLE</span><span className="min-w-5 rounded-full bg-violet-500 px-1.5 py-0.5 text-center text-[9px] font-mono font-bold text-white">{consoleLogger.entries.length}</span>
        {consoleLogger.entries.some(entry => entry.level === "error") && <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-card bg-destructive"/>}
      </button>
      <button type="button" onClick={() => setNetworkOpen(true)} aria-label="Abrir chamadas HTTP" title="Abrir chamadas HTTP" className="relative flex items-center gap-2 rounded-full border border-primary/40 bg-card px-3 py-2.5 text-primary shadow-2xl shadow-black/30 hover:bg-primary/10 transition-colors">
        <Wifi size={16}/><span className="text-[10px] font-mono font-semibold">HTTP</span><span className="min-w-5 rounded-full bg-primary px-1.5 py-0.5 text-center text-[9px] font-mono font-bold text-primary-foreground">{networkLogs.length}</span>
        {networkLogs.some(log => log.status === 0 || Number(log.status) >= 400) && <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-card bg-destructive"/>}
      </button>
    </div>
    {networkOpen && <GlobalNetworkModal open onClose={() => setNetworkOpen(false)}/>}
    {consoleOpen && <GlobalConsoleModal open onClose={() => setConsoleOpen(false)}/>}
  </>;
}

function NetworkRuntimeView({ env, onCreateTicket, onOpenExisting }: { env: Env; onCreateTicket: (target: AutomaticTicketTarget) => void; onOpenExisting: (id: number) => void }) {
  const logs = useNetworkLogger(state => state.logs);
  const clearLogs = useNetworkLogger(state => state.clearLogs);
  const latestFailure = useNetworkLogger(state => state.latestFailure);
  const failureState = useNetworkLogger(state => state.latestFailureTicketState);
  const existing = useNetworkLogger(state => state.latestFailureExistingTicket);
  const [selected, setSelected] = useState<NetworkLog | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [target, setTarget] = useState<AutomaticTicketTarget | null>(null);
  const filtered = logs.filter(log => {
    const matchesText = !search || `${log.method} ${log.url} ${log.status ?? ""}`.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || (statusFilter === "error" ? (log.status ?? 0) >= 400 || log.status === 0 : statusFilter === "pending" ? log.status === undefined : String(log.status).startsWith(statusFilter));
    return matchesText && matchesStatus;
  });
  useEffect(() => {
    let current = true;
    if (!latestFailure) { setTarget(null); return; }
    getTicketMapping().then(mapping => { if (current) setTarget(resolveAutomaticTicketTarget(latestFailure, mapping, { environmentCode: TICKET_ENVIRONMENT_CODE[env] })); }).catch(() => current && setTarget(null));
    return () => { current = false; };
  }, [env, latestFailure]);
  return <div className="flex flex-col h-full">
    {latestFailure && <div className={`mx-4 mt-3 rounded border px-3 py-2 flex items-center gap-3 text-xs font-mono ${failureState === "existing" ? "border-blue-500/40 bg-blue-500/10 text-blue-200" : "border-amber-500/40 bg-amber-500/10 text-amber-200"}`}><AlertTriangle size={14}/><div className="flex-1"><div className="font-semibold">Falha observada: {latestFailure.method} {requestPath(latestFailure.url)} · {latestFailure.status === 0 ? "rede" : latestFailure.status}</div><div className="text-[10px] opacity-80">{failureState === "checking" ? "Verificando se já existe chamado para este item..." : failureState === "existing" ? `Já existe ${existing?.codigo ?? "um chamado"}: ${existing?.titulo ?? ""}` : failureState === "available" ? "Nenhum chamado aberto para o item. O formulário foi preparado automaticamente." : failureState === "check-failed" ? "Não foi possível validar a disponibilidade; a criação manual continua disponível." : "Aguardando validação."}</div></div>{failureState === "existing" && existing && <button onClick={() => onOpenExisting(existing.id)} className="px-3 py-1.5 border border-blue-500/40 rounded">Abrir {existing.codigo}</button>}{failureState !== "existing" && target && <button onClick={() => onCreateTicket(target)} className="px-3 py-1.5 border border-amber-500/40 rounded">Revisar chamado</button>}</div>}
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-card/50"><div className="flex items-center gap-1.5 bg-muted rounded px-2 py-1 flex-1"><Search size={11} className="text-muted-foreground"/><input value={search} onChange={event => setSearch(event.target.value)} placeholder="Filtrar por URL, método ou status..." className="bg-transparent text-xs font-mono outline-none placeholder:text-muted-foreground flex-1"/></div><select value={statusFilter} onChange={event => setStatusFilter(event.target.value)} className="bg-muted border border-border rounded px-2 py-1 text-[10px] font-mono"><option value="all">Todos</option><option value="2">2xx</option><option value="4">4xx</option><option value="5">5xx</option><option value="error">Erros</option><option value="pending">Pendentes</option></select><button onClick={() => downloadText("http-session.json", JSON.stringify(filtered.map(log => ({ ...log, url: sanitizeNetworkUrl(log.url) })), null, 2), "application/json")} className="flex items-center gap-1 px-2 py-1 text-[10px] font-mono border border-border rounded"><Download size={11}/>Exportar</button><button onClick={clearLogs} className="flex items-center gap-1 px-2 py-1 text-[10px] font-mono border border-border rounded"><Trash2 size={11}/>Limpar</button></div>
    <div className="px-4 py-1.5 border-b border-border/50 text-[10px] font-mono text-muted-foreground">{logs.length} chamadas interceptadas · headers e campos sensíveis são mascarados · duplicidades, abortos e timeouts são sinalizados</div>
    <div className="flex-1 overflow-auto"><table className="w-full text-xs font-mono"><thead className="sticky top-0 bg-card z-10"><tr className="border-b border-border">{["#", "Método", "URL", "Status", "Duração", "Req.", "Resp.", "Origem", "Flags", ""].map(header => <th key={header} className="text-left px-3 py-2.5 text-muted-foreground font-normal text-[10px] uppercase tracking-wider">{header}</th>)}</tr></thead><tbody>{filtered.map((log, index) => <tr key={log.id} onClick={() => setSelected(log)} className="border-b border-border/30 hover:bg-muted/20 cursor-pointer"><td className="px-3 py-2.5 text-muted-foreground">{index + 1}</td><td className="px-3 py-2.5"><MethodBadge method={log.method}/></td><td className="px-3 py-2.5 max-w-[300px] truncate" title={log.url}>{requestPath(log.url)}</td><td className="px-3 py-2.5">{log.status === undefined ? <Badge variant="neutral">pendente</Badge> : <StatusCode code={log.status}/>}</td><td className={`px-3 py-2.5 ${Number(log.duration) > 1000 ? "text-red-400" : "text-emerald-400"}`}>{log.duration === undefined ? "—" : `${log.duration}ms`}</td><td className="px-3 py-2.5 text-muted-foreground">{bytesLabel(log.requestSize)}</td><td className="px-3 py-2.5 text-muted-foreground">{bytesLabel(log.responseSize)}</td><td className="px-3 py-2.5 max-w-32 truncate text-blue-400/80">{log.page}</td><td className="px-3 py-2.5 text-[10px]">{log.duplicate ? "duplicada " : ""}{log.cancelled ? "cancelada " : ""}{log.timeout ? "timeout" : ""}</td><td className="px-3 py-2.5"><Eye size={12}/></td></tr>)}</tbody></table>{!filtered.length && <div className="flex flex-col items-center justify-center py-20 text-muted-foreground"><Wifi size={32} className="opacity-20"/><span className="mt-2 text-xs font-mono">As próximas chamadas fetch aparecerão aqui</span></div>}</div>
    <Modal open={!!selected} onClose={() => setSelected(null)} title={selected ? `${selected.method} ${requestPath(selected.url)}` : "Chamada"} size="xl">{selected && <NetworkDetails log={selected}/>}</Modal>
  </div>;
}

function RuntimeErrorsView() {
  const errors = useDevErrors(state => state.errors);
  const clear = useDevErrors(state => state.clear);
  const markKnown = useDevErrors(state => state.markKnown);
  const silence = useDevErrors(state => state.silence);
  const associate = useDevErrors(state => state.associate);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = errors.find(error => error.id === selectedId) ?? null;
  const activeErrors = errors.filter(error => !error.silencedUntil || error.silencedUntil < Date.now());
  return <div className="flex flex-col h-full"><div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-card/50"><div className="text-xs font-mono text-muted-foreground">{activeErrors.length} assinaturas ativas · erros repetidos são agrupados pela assinatura</div><button onClick={clear} className="flex items-center gap-1 px-2 py-1 text-[10px] font-mono border border-border rounded"><Trash2 size={11}/>Limpar</button></div><div className="flex-1 overflow-auto"><table className="w-full text-xs font-mono"><thead><tr className="border-b border-border">{["Tipo", "Mensagem", "Rota", "Ocorrências", "Primeira", "Última", "Estado", ""].map(header => <th key={header} className="text-left px-4 py-2.5 text-muted-foreground text-[10px] uppercase font-normal">{header}</th>)}</tr></thead><tbody>{errors.map(error => <tr key={error.id} onClick={() => setSelectedId(error.id)} className="border-b border-border/40 hover:bg-muted/20 cursor-pointer"><td className="px-4 py-3 text-red-300">{error.type}</td><td className="px-4 py-3 max-w-[300px] truncate">{error.message}</td><td className="px-4 py-3 text-blue-400">{error.route}</td><td className="px-4 py-3 text-amber-400 font-bold">{error.count}</td><td className="px-4 py-3 text-muted-foreground">{new Date(error.firstAt).toLocaleTimeString("pt-BR")}</td><td className="px-4 py-3 text-muted-foreground">{new Date(error.lastAt).toLocaleTimeString("pt-BR")}</td><td className="px-4 py-3">{error.silencedUntil && error.silencedUntil > Date.now() ? <Badge variant="neutral">silenciado</Badge> : error.known ? <Badge variant="warn">conhecido</Badge> : <Badge variant="danger">novo</Badge>}</td><td className="px-4 py-3"><Eye size={12}/></td></tr>)}</tbody></table>{!errors.length && <div className="flex flex-col items-center py-20 text-muted-foreground"><CheckCircle2 size={32} className="text-emerald-500/40"/><span className="mt-2 text-xs font-mono">Nenhum erro JavaScript, Promise ou React capturado</span></div>}</div><Modal open={!!selected} onClose={() => setSelectedId(null)} title={`Erro · ${selected?.type ?? ""}`} size="lg">{selected && <div className="p-4 space-y-3 font-mono text-xs"><div className="rounded border border-red-500/20 bg-red-500/5 p-3 text-red-300 break-all">{selected.message}</div><pre className="bg-muted/30 rounded p-3 whitespace-pre-wrap overflow-auto max-h-72 text-[10px]">{selected.stack ?? "Stack indisponível"}</pre>{selected.issue && <div className="text-blue-300">Associado a: {selected.issue}</div>}<div className="flex flex-wrap gap-2"><button onClick={() => markKnown(selected.id)} className="px-3 py-1.5 border border-border rounded">{selected.known ? "Marcar como novo" : "Marcar conhecido"}</button><button onClick={() => silence(selected.id, 30)} className="px-3 py-1.5 border border-border rounded">Silenciar 30 min</button><button onClick={() => { const issue = window.prompt("Código ou URL do chamado:", selected.issue ?? ""); if (issue) associate(selected.id, issue); }} className="px-3 py-1.5 border border-border rounded">Associar chamado</button></div></div>}</Modal></div>;
}

function FlagsView() {
  const [flags, setFlags] = useState<FeatureFlag[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const load = () => {
    setLoading(true);
    devToolsApi.flags()
      .then(value => { setFlags(value.items); setError(null); })
      .catch(reason => setError(reason instanceof Error ? reason.message : "Falha ao carregar flags."))
      .finally(() => setLoading(false));
  };
  useEffect(() => { void load(); }, []);

  return (
    <div className="p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-sm">Feature Flags</h2>
          <p className="text-xs text-muted-foreground mt-0.5 font-mono">Gerencie o rollout de funcionalidades por ambiente</p>
        </div>
        <button onClick={() => void devToolsApi.resetarFlags().then(load).catch(reason => setError(reason instanceof Error ? reason.message : "Falha ao resetar flags."))}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-mono rounded hover:bg-primary/90">
          <RefreshCw size={12} />Resetar simulações
        </button>
      </div>
      {loading && <div className="text-xs font-mono text-muted-foreground">Carregando flags...</div>}
      {error && <div className="text-xs font-mono text-red-400">{error}</div>}
      <div className="bg-card border border-border rounded-md overflow-hidden">
        <table className="w-full text-xs font-mono">
          <thead><tr className="border-b border-border bg-muted/20">
            {["Chave", "Descrição", "Ambiente", "Rollout", "Status", "Owner"].map(h => <th key={h} className="text-left px-4 py-2.5 text-muted-foreground font-normal text-[10px] uppercase tracking-wider">{h}</th>)}
          </tr></thead>
          <tbody>{flags.map(flag => (
            <tr key={flag.id} className="border-b border-border/40 hover:bg-muted/10">
              <td className="px-4 py-3 text-primary font-semibold">{flag.chave}</td>
              <td className="px-4 py-3 text-foreground/70">{flag.descricao}</td>
              <td className="px-4 py-3">{flag.ambiente}</td>
              <td className="px-4 py-3">{flag.percentual}%</td>
              <td className="px-4 py-3">
                <button aria-label={"Alternar " + flag.chave} onClick={() => void devToolsApi.alternarFlag(flag.id).then(load).catch(reason => setError(reason instanceof Error ? reason.message : "Falha ao alternar flag."))}
                  className="relative inline-flex h-4 w-7 items-center rounded-full" style={{ backgroundColor: flag.ativa ? "var(--primary)" : "var(--muted)" }}>
                  <span className="inline-block h-3 w-3 rounded-full bg-white shadow transition-transform" style={{ transform: flag.ativa ? "translateX(14px)" : "translateX(2px)" }} />
                </button>
              </td>
              <td className="px-4 py-3 text-muted-foreground">{flag.owner}{flag.abandonada ? " · abandonada" : ""}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}

function TestCasesView() {
  const [cases, setCases] = useState<TestCaseSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    testesApi.listarCasos().then(setCases)
      .catch(reason => setError(reason instanceof Error ? reason.message : "Falha ao carregar casos de teste."))
      .finally(() => setLoading(false));
  }, []);
  const activeCases = cases.filter(item => item.status === "ATIVO").length;
  const parameterizedCases = cases.filter(item => item.parametrizado).length;
  const reusableCases = cases.filter(item => item.reutilizavel).length;

  return (
    <div className="p-5 space-y-4">
      <div className="grid grid-cols-4 gap-3">
        <MetricCard label="Total" value={String(cases.length)} icon={FlaskConical} color="blue" sub={String(activeCases) + " ativos"} />
        <MetricCard label="Parametrizados" value={String(parameterizedCases)} icon={Settings} color="green" sub="com dados variáveis" />
        <MetricCard label="Reutilizáveis" value={String(reusableCases)} icon={RefreshCw} color="purple" sub="compartilháveis" />
        <MetricCard label="Arquivados" value={String(cases.length - activeCases)} icon={AlertCircle} color="amber" sub="fora de uso" />
      </div>
      {loading && <div className="text-xs font-mono text-muted-foreground">Carregando casos de teste...</div>}
      {error && <div className="text-xs font-mono text-red-400">{error}</div>}
      <div className="bg-card border border-border rounded-md overflow-hidden">
        <div className="px-4 py-3 border-b border-border text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">Casos de Teste</div>
        <table className="w-full text-xs font-mono">
          <thead><tr className="border-b border-border bg-muted/20">
            {["Código", "Título", "Módulo", "Tipo", "Status", "Prioridade", "Versão"].map(h => <th key={h} className="text-left px-4 py-2.5 text-muted-foreground font-normal text-[10px] uppercase tracking-wider">{h}</th>)}
          </tr></thead>
          <tbody>{cases.map(item => (
            <tr key={item.id} className="border-b border-border/40 hover:bg-muted/20">
              <td className="px-4 py-3 text-primary">{item.codigo}</td>
              <td className="px-4 py-3 text-foreground/90">{item.titulo}</td>
              <td className="px-4 py-3"><Badge variant="neutral">{item.modulo}</Badge></td>
              <td className="px-4 py-3 text-muted-foreground">{item.tipoTeste}</td>
              <td className="px-4 py-3"><Badge variant={item.status === "ATIVO" ? "success" : "neutral"}>{item.status}</Badge></td>
              <td className="px-4 py-3 text-muted-foreground">{item.prioridade}</td>
              <td className="px-4 py-3 text-muted-foreground">{item.versao}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}

function BugsView({ onNew, onOpen }: { onNew?: () => void; onOpen: (id: number) => void }) {
  const [tickets, setTickets] = useState<ChamadoResumo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const load = () => chamadosApi.listar({ pagina: 1, tamanhoPagina: 100, ordenarPor: "dataAtualizacao", direcao: "desc" })
    .then(value => { setTickets(value.items); setError(null); })
    .catch(reason => setError(reason instanceof Error ? reason.message : "Falha ao carregar chamados."))
    .finally(() => setLoading(false));
  useEffect(() => { void load(); }, []);
  const finalTickets = tickets.filter(item => item.status.ehFinal).length;
  const criticalTickets = tickets.filter(item => ["CRITICA", "CRITICAL", "BLOCKER"].includes(item.prioridade.codigo)).length;
  const assignedTickets = tickets.filter(item => item.atribuidoPara).length;

  return (
    <div className="p-5 space-y-4">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-semibold">Registro de Bugs</span>
        <button onClick={onNew} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-mono rounded hover:bg-primary/90"><Plus size={12} />Novo Chamado</button>
      </div>
      <div className="grid grid-cols-4 gap-3">
        <MetricCard label="Em aberto" value={String(tickets.length - finalTickets)} icon={Bug} color="red" sub={String(criticalTickets) + " críticos"} />
        <MetricCard label="Atribuídos" value={String(assignedTickets)} icon={Activity} color="amber" sub="com responsável" />
        <MetricCard label="Sem responsável" value={String(tickets.length - assignedTickets)} icon={User} color="blue" sub="aguardando triagem" />
        <MetricCard label="Finalizados" value={String(finalTickets)} icon={CheckCircle2} color="green" sub="consulta atual" />
      </div>
      {loading && <div className="text-xs font-mono text-muted-foreground">Carregando chamados...</div>}
      {error && <div className="text-xs font-mono text-red-400">{error}</div>}
      <div className="bg-card border border-border rounded-md overflow-hidden">
        <table className="w-full text-xs font-mono">
          <thead><tr className="border-b border-border bg-muted/20">
            {["Código", "Título", "Prioridade", "Status", "Ambiente", "Responsável", "Atualização"].map(h => <th key={h} className="text-left px-4 py-2.5 text-muted-foreground font-normal text-[10px] uppercase tracking-wider">{h}</th>)}
          </tr></thead>
          <tbody>{tickets.map(item => (
            <tr key={item.id} onClick={() => onOpen(item.id)} className="cursor-pointer border-b border-border/40 hover:bg-muted/20">
              <td className="px-4 py-3 text-primary">{item.codigo}</td>
              <td className="px-4 py-3 text-foreground/90">{item.titulo}</td>
              <td className="px-4 py-3" style={{ color: item.prioridade.corHex ?? undefined }}>{item.prioridade.nome}</td>
              <td className="px-4 py-3"><span className="px-1.5 py-0.5 rounded border border-border" style={{ color: item.status.corHex ?? undefined }}>{item.status.nome}</span></td>
              <td className="px-4 py-3">{item.ambiente.nome}</td>
              <td className="px-4 py-3 text-foreground/70">{item.atribuidoPara?.nome ?? "Não atribuído"}</td>
              <td className="px-4 py-3 text-muted-foreground">{new Date(item.dataAtualizacao).toLocaleString("pt-BR")}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}

function PerformanceView() {
  const [plans, setPlans] = useState<PerformancePlan[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    insightsApi.performance().then(setPlans).catch(reason => setError(reason instanceof Error ? reason.message : "Falha ao carregar performance."));
  }, []);
  const measurements = plans.flatMap(plan => plan.medicoes.map(measurement => ({ ...measurement, plano: plan.nome, rota: plan.rota })));
  const exceeded = measurements.reduce((total, item) => total + item.limitesExcedidos, 0);
  const latest = measurements.slice(-12).map(item => ({
    t: new Date(item.executadaEm).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    latency: item.metricas.latencia ?? item.metricas.lcp ?? item.metricas.tempo ?? 0,
    mem: item.memoriaMb ?? 0,
  }));

  return (
    <div className="p-5 space-y-4">
      <div className="grid grid-cols-4 gap-3">
        <MetricCard label="Planos" value={String(plans.length)} icon={Zap} color="green" sub="rotas monitoradas" />
        <MetricCard label="Medições" value={String(measurements.length)} icon={TrendingUp} color="amber" sub="histórico recebido" />
        <MetricCard label="Limites excedidos" value={String(exceeded)} icon={AlertTriangle} color="red" sub="todas as medições" />
        <MetricCard label="Com evidência" value={String(measurements.filter(item => item.evidenciaAutomatica).length)} icon={Camera} color="purple" sub="captura automática" />
      </div>
      {error && <div className="text-xs font-mono text-red-400">{error}</div>}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-card border border-border rounded-md p-4">
          <div className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-4">Medições por rota</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={plans.map(plan => ({ route: plan.rota, medicoes: plan.medicoes.length, excedidos: plan.medicoes.reduce((sum, item) => sum + item.limitesExcedidos, 0) }))}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" /><XAxis dataKey="route" tick={{ fill: "#8b949e", fontSize: 9 }} /><YAxis tick={{ fill: "#8b949e", fontSize: 10 }} /><Tooltip />
              <Bar dataKey="medicoes" fill="#4f8ef7" name="Medições" /><Bar dataKey="excedidos" fill="#e3b341" name="Limites excedidos" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-card border border-border rounded-md p-4">
          <div className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-4">Últimas medições</div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={latest}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" /><XAxis dataKey="t" tick={{ fill: "#8b949e", fontSize: 10 }} /><YAxis tick={{ fill: "#8b949e", fontSize: 10 }} /><Tooltip />
              <Line type="monotone" dataKey="latency" stroke="#4f8ef7" strokeWidth={2} dot={false} name="Latência" /><Line type="monotone" dataKey="mem" stroke="#a371f7" strokeWidth={2} dot={false} name="Memória MB" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function RuntimeSimulatorView() {
  const simulator = useNetworkSimulator();
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("/api/qa/chamados");
  const [body, setBody] = useState("{}");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [route, setRoute] = useState("/api/qa/chamados");
  const [mode, setMode] = useState<SimulationMode>("status");
  const [status, setStatus] = useState(500);
  const send = async () => {
    setLoading(true);
    const started = performance.now();
    try {
      const result = await fetch(url, { method, headers: { "Content-Type": "application/json" }, ...(["GET", "HEAD"].includes(method) ? {} : { body }) });
      const text = await result.text();
      let parsed: unknown = text;
      try { parsed = JSON.parse(text); } catch { /* resposta textual */ }
      setResponse(JSON.stringify({ status: result.status, durationMs: Math.round(performance.now() - started), headers: Object.fromEntries(result.headers.entries()), body: parsed }, null, 2));
    } catch (error) {
      setResponse(JSON.stringify({ status: 0, durationMs: Math.round(performance.now() - started), error: error instanceof Error ? error.message : String(error) }, null, 2));
    } finally { setLoading(false); }
  };
  const addRule = () => simulator.saveRule({ id: crypto.randomUUID(), name: `${mode} · ${route}`, route: route || "*", mode, status: mode === "status" ? status : undefined, latency: simulator.globalLatency, probability: 100, enabled: true });
  return <div className="p-5 space-y-4 h-full overflow-auto"><div className="grid grid-cols-2 gap-4"><div className="space-y-4"><div className="bg-card border border-border rounded-md p-4 space-y-3"><div className="flex items-center justify-between"><span className="text-xs font-mono font-semibold text-muted-foreground uppercase">Requisição real interceptada</span><Badge variant={simulator.enabled ? "success" : "neutral"}>{simulator.enabled ? "simulação ativa" : "rede normal"}</Badge></div><div className="flex gap-2"><select value={method} onChange={event => setMethod(event.target.value)} className="bg-muted border border-border rounded px-2 py-1.5 text-xs font-mono">{["GET", "POST", "PUT", "PATCH", "DELETE"].map(value => <option key={value}>{value}</option>)}</select><input value={url} onChange={event => setUrl(event.target.value)} className="flex-1 bg-muted border border-border rounded px-2 py-1.5 text-xs font-mono outline-none"/></div>{!["GET", "HEAD"].includes(method) && <textarea value={body} onChange={event => setBody(event.target.value)} rows={6} className="w-full bg-muted/40 border border-border rounded p-2 text-xs font-mono"/>}<button onClick={() => void send()} disabled={loading} className="w-full px-4 py-2 bg-primary text-primary-foreground text-xs font-mono rounded flex items-center justify-center gap-2">{loading ? <RefreshCw size={12} className="animate-spin"/> : <PlayCircle size={12}/>}Enviar requisição</button></div><div className="bg-card border border-border rounded-md p-4 space-y-3"><div className="flex items-center justify-between"><span className="text-xs font-mono font-semibold text-muted-foreground uppercase">Cenários de rede</span><button onClick={() => simulator.setEnabled(!simulator.enabled)} className={`px-3 py-1 rounded border text-[10px] font-mono ${simulator.enabled ? "border-emerald-500 text-emerald-400" : "border-border"}`}>{simulator.enabled ? "Desativar" : "Ativar"}</button></div><div className="grid grid-cols-3 gap-2"><input value={route} onChange={event => setRoute(event.target.value)} placeholder="Rota ou *" className="bg-muted border border-border rounded px-2 py-1.5 text-xs font-mono"/><select value={mode} onChange={event => setMode(event.target.value as SimulationMode)} className="bg-muted border border-border rounded px-2 py-1.5 text-xs font-mono">{["status", "offline", "intermittent", "timeout", "empty", "invalid-json", "incomplete", "large", "pagination", "duplicates", "shuffle", "nulls"].map(value => <option key={value}>{value}</option>)}</select><input type="number" value={status} disabled={mode !== "status"} onChange={event => setStatus(Number(event.target.value))} className="bg-muted border border-border rounded px-2 py-1.5 text-xs font-mono"/></div><div className="flex items-center gap-2"><label className="text-[10px] font-mono text-muted-foreground">Latência global</label><input type="number" min={0} value={simulator.globalLatency} onChange={event => simulator.setGlobalLatency(Number(event.target.value))} className="w-24 bg-muted border border-border rounded px-2 py-1 text-xs font-mono"/><span className="text-[10px] font-mono">ms</span><button onClick={addRule} className="ml-auto px-3 py-1.5 border border-primary/40 text-primary rounded text-[10px] font-mono">Adicionar regra</button></div><div className="space-y-1">{simulator.rules.map(rule => <div key={rule.id} className="flex items-center gap-2 bg-muted/30 rounded px-2 py-2 text-[10px] font-mono"><span className="text-primary">{rule.route}</span><span>{rule.mode}{rule.status ? ` ${rule.status}` : ""}</span><span className="text-muted-foreground">{rule.latency}ms · {rule.probability}%</span><button onClick={() => simulator.saveRule({ ...rule, enabled: !rule.enabled })} className="ml-auto">{rule.enabled ? "ativa" : "pausada"}</button><button onClick={() => simulator.removeRule(rule.id)} className="text-red-400"><Trash2 size={11}/></button></div>)}</div></div></div><div className="bg-card border border-border rounded-md p-4"><span className="text-xs font-mono font-semibold text-muted-foreground uppercase">Resposta</span>{!response && !loading ? <div className="flex flex-col items-center py-20 text-muted-foreground"><PlayCircle size={32} className="opacity-20"/><span className="mt-2 text-xs font-mono">Execute uma requisição para inspecionar a resposta</span></div> : <pre className="mt-3 bg-muted/30 rounded p-3 overflow-auto max-h-[620px] whitespace-pre-wrap break-all text-xs font-mono">{response}</pre>}</div></div></div>;
}

function PlaceholderView({ module: m }: { module: NavItem }) {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 text-center p-8">
      <div className="p-4 rounded-full bg-muted/40">
        <m.icon size={32} className="text-muted-foreground/40" />
      </div>
      <div>
        <h3 className="font-semibold text-sm mb-1">{m.label}</h3>
        <p className="text-xs text-muted-foreground font-mono max-w-sm">
          Módulo disponível — conecte seu backend para visualizar dados em tempo real.
        </p>
      </div>
      <button className="px-4 py-2 bg-primary text-primary-foreground text-xs font-mono rounded hover:bg-primary/90">
        Configurar integração
      </button>
    </div>
  );
}

function ExploratoryView() {
  const [items, setItems] = useState<Exploration[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => { operacoesApi.exploracoes().then(setItems).catch(reason => setError(reason instanceof Error ? reason.message : "Falha ao carregar explorações.")); }, []);
  return <div className="p-5 space-y-4"><h2 className="text-sm font-semibold">Testes Exploratórios</h2>{error && <div className="text-xs font-mono text-red-400">{error}</div>}<div className="bg-card border border-border rounded-md overflow-hidden"><table className="w-full text-xs font-mono"><thead><tr className="border-b border-border bg-muted/20">{["Código", "Título", "Missão", "Status", "Responsável", "Ambiente", "Duração"].map(h => <th key={h} className="text-left px-4 py-2.5 text-muted-foreground font-normal">{h}</th>)}</tr></thead><tbody>{items.map(item => <tr key={item.id} className="border-b border-border/40"><td className="px-4 py-3 text-primary">{item.codigo}</td><td className="px-4 py-3">{item.titulo}</td><td className="px-4 py-3 text-muted-foreground">{item.missao}</td><td className="px-4 py-3">{item.status}</td><td className="px-4 py-3">{item.responsavel}</td><td className="px-4 py-3">{item.ambiente}</td><td className="px-4 py-3">{item.duracaoMinutos} min</td></tr>)}</tbody></table></div></div>;
}

function EvidenceView() {
  const [items, setItems] = useState<Evidence[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => { operacoesApi.evidencias().then(setItems).catch(reason => setError(reason instanceof Error ? reason.message : "Falha ao carregar evidências.")); }, []);
  return <div className="p-5 space-y-4"><h2 className="text-sm font-semibold">Evidências</h2>{error && <div className="text-xs font-mono text-red-400">{error}</div>}<div className="grid grid-cols-3 gap-3">{items.map(item => <div key={item.id} className="bg-card border border-border rounded-md p-4 space-y-2"><div className="text-xs font-mono text-primary">{item.codigo}</div><div className="text-sm font-semibold">{item.titulo}</div><div className="text-[10px] font-mono text-muted-foreground">{item.origem} · {item.rota}</div><div className="text-[10px] font-mono">{item.arquivos.length} arquivo(s) · {item.anonimizado ? "anonimizada" : "não anonimizada"}</div>{item.chamadoCodigo && <Badge variant="info">{item.chamadoCodigo}</Badge>}</div>)}</div></div>;
}

function GeneratorView() {
  const [items, setItems] = useState<TestDataSet[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => { operacoesApi.massas().then(setItems).catch(reason => setError(reason instanceof Error ? reason.message : "Falha ao carregar massas.")); }, []);
  return <div className="p-5 space-y-4"><h2 className="text-sm font-semibold">Gerador de Dados</h2>{error && <div className="text-xs font-mono text-red-400">{error}</div>}<div className="bg-card border border-border rounded-md overflow-hidden"><table className="w-full text-xs font-mono"><thead><tr className="border-b border-border bg-muted/20">{["Código", "Nome", "Tipo", "Perfil", "Quantidade", "Status", "Expira em"].map(h => <th key={h} className="text-left px-4 py-2.5 text-muted-foreground font-normal">{h}</th>)}</tr></thead><tbody>{items.map(item => <tr key={item.id} className="border-b border-border/40"><td className="px-4 py-3 text-primary">{item.codigo}</td><td className="px-4 py-3">{item.nome}</td><td className="px-4 py-3">{item.tipo}</td><td className="px-4 py-3">{item.perfil}</td><td className="px-4 py-3">{item.quantidade}</td><td className="px-4 py-3">{item.status}</td><td className="px-4 py-3 text-muted-foreground">{new Date(item.expiraEm).toLocaleString("pt-BR")}</td></tr>)}</tbody></table></div></div>;
}

function MatrixView() {
  const [items, setItems] = useState<EnvironmentMatrix[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => { validacoesApi.ambientes().then(setItems).catch(reason => setError(reason instanceof Error ? reason.message : "Falha ao carregar matrizes.")); }, []);
  return <div className="p-5 space-y-4"><h2 className="text-sm font-semibold">Matriz de Ambientes</h2>{error && <div className="text-xs font-mono text-red-400">{error}</div>}<div className="grid grid-cols-2 gap-3">{items.map(item => <div key={item.id} className="bg-card border border-border rounded-md p-4"><div className="text-xs font-mono text-primary">{item.codigo}</div><div className="font-semibold mt-1">{item.nome}</div><div className="text-[10px] font-mono text-muted-foreground mt-2">{item.combinacoes.length} combinações · {item.ambientes.length} ambientes · {item.navegadores.length} navegadores</div><div className="flex gap-1 flex-wrap mt-3">{item.ambientes.map(value => <Badge key={value} variant="neutral">{value}</Badge>)}</div></div>)}</div></div>;
}

function ReportsView() {
  const [report, setReport] = useState<QualityReport | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => { insightsApi.relatorio().then(setReport).catch(reason => setError(reason instanceof Error ? reason.message : "Falha ao carregar relatório.")); }, []);
  if (error) return <div className="p-5 text-xs font-mono text-red-400">{error}</div>;
  if (!report) return <div className="p-5 text-xs font-mono text-muted-foreground">Carregando relatório de qualidade...</div>;
  return <div className="p-5 space-y-4"><div className="grid grid-cols-4 gap-3"><MetricCard label="Risco da release" value={String(report.riscoRelease)} icon={AlertTriangle} color="red" sub={report.versao}/><MetricCard label="Reabertos" value={String(report.bugs.reabertos)} icon={RefreshCw} color="amber" sub="bugs"/><MetricCard label="Recorrentes" value={String(report.bugs.recorrentes)} icon={Repeat} color="purple" sub="bugs"/><MetricCard label="Tempo médio correção" value={String(report.tempos.medioCorrecaoHoras) + "h"} icon={Clock} color="blue" sub="histórico"/></div><div className="grid grid-cols-2 gap-3"><div className="bg-card border border-border rounded-md p-4"><h3 className="text-xs font-mono uppercase text-muted-foreground mb-3">Cobertura</h3>{Object.entries(report.cobertura).map(([key, value]) => <div key={key} className="flex justify-between py-1 text-xs font-mono"><span>{key}</span><span className="text-primary">{value}</span></div>)}</div><div className="bg-card border border-border rounded-md p-4"><h3 className="text-xs font-mono uppercase text-muted-foreground mb-3">Execução</h3>{Object.entries(report.execucao).map(([key, value]) => <div key={key} className="flex justify-between py-1 text-xs font-mono"><span>{key}</span><span className="text-primary">{value}</span></div>)}</div></div></div>;
}

// ─── Main App ─────────────────────────────────────────────────────────────────
type positionType ={ position: [
  x: number,
  y: number
] 
}
  
export default function App(position: positionType) {
  const [dark, setDark] = useState(true);
  const [env, setEnv] = useState<Env>("DEV");
  const [role, setRole] = useState<Role>("ADMIN");
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState<Module>("dashboard");
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [envMenuOpen, setEnvMenuOpen] = useState(false);
  const [selectedChamadoId, setSelectedChamadoId] = useState<number | null>(null);
  const [automaticTicketTarget, setAutomaticTicketTarget] = useState<AutomaticTicketTarget | null>(null);
  const [viewRevision, setViewRevision] = useState(0);
  const latestFailure = useNetworkLogger(state => state.latestFailure);
  const failureTicketState = useNetworkLogger(state => state.latestFailureTicketState);
  const notifyNavigation = useNetworkLogger(state => state.notifyNavigation);
  const handledFailureId = useRef<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const currentViewPath = active === "bugs" && selectedChamadoId
    ? `/chamados/${selectedChamadoId}`
    : active === "newchamado"
      ? "/chamados/novo"
      : active === "bugs"
        ? "/chamados"
        : `/devtools/${active}`;
  setNetworkLoggerRoute(currentViewPath);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchRef.current?.focus(), 50);
  }, [searchOpen]);

  useEffect(() => {
    notifyNavigation(currentViewPath);
    recordDevEvent({ kind: "navigation", title: `Navegação para ${currentViewPath}`, route: currentViewPath });
  }, [currentViewPath, notifyNavigation]);

  useEffect(() => {
    const refreshOriginView = (event: Event) => {
      const detail = (event as CustomEvent<{ page?: string }>).detail;
      if (detail?.page === currentViewPath) setViewRevision(current => current + 1);
    };
    window.addEventListener(NETWORK_REPLAY_SUCCESS_EVENT, refreshOriginView);
    return () => window.removeEventListener(NETWORK_REPLAY_SUCCESS_EVENT, refreshOriginView);
  }, [currentViewPath]);

  useEffect(() => {
    if (!latestFailure || failureTicketState !== "available" || handledFailureId.current === latestFailure.id) return;
    let current = true;
    getTicketMapping().then(mapping => {
      if (!current) return;
      const target = resolveAutomaticTicketTarget(latestFailure, mapping, { environmentCode: TICKET_ENVIRONMENT_CODE[env] });
      handledFailureId.current = latestFailure.id;
      if (!target) return;
      setAutomaticTicketTarget(target);
      setSelectedChamadoId(null);
      setActive("newchamado");
    }).catch(() => { handledFailureId.current = latestFailure.id; });
    return () => { current = false; };
  }, [env, failureTicketState, latestFailure]);

  const activeModule = NAV_ITEMS.find(n => n.id === active)!;
  const envCfg = ENV_CONFIG[env];

  const devItems  = NAV_ITEMS.filter(n => n.group === "dev");
  const qaItems   = NAV_ITEMS.filter(n => n.group === "qa");
  const adminItems = NAV_ITEMS.filter(n => n.group === "admin");

  function renderView() {
    if (active === "dashboard")   return <DashboardView env={env} onOpenHttp={() => setActive("http")} />;
    if (active === "logs")        return <ConsoleLogsRuntimeView />;
    if (active === "http")        return <NetworkRuntimeView env={env} onCreateTicket={target => { setAutomaticTicketTarget(target); setActive("newchamado"); }} onOpenExisting={id => { setSelectedChamadoId(id); setActive("bugs"); }} />;
    if (active === "errors")      return <RuntimeErrorsView />;
    if (active === "performance") return <PerformanceView />;
    if (active === "flags")       return <FlagsView />;
    if (active === "simulator")   return <RuntimeSimulatorView />;
    if (active === "testcases")   return <TestCasesView />;
    if (active === "bugs" && selectedChamadoId) return <ChamadoDetalhes chamadoId={selectedChamadoId} onBack={() => setSelectedChamadoId(null)} />;
    if (active === "bugs")        return <BugsView onNew={() => setActive("newchamado")} onOpen={setSelectedChamadoId} />;
    if (active === "newchamado")  return <RegistrarChamado key={automaticTicketTarget?.failureId ?? "manual"} initialTarget={automaticTicketTarget} onCancel={() => { setAutomaticTicketTarget(null); setActive("bugs"); }} onSuccess={() => { setAutomaticTicketTarget(null); setActive("bugs"); }} />;
    if (active === "exploratory") return <ExploratoryView />;
    if (active === "evidence")    return <EvidenceView />;
    if (active === "generator")   return <GeneratorView />;
    if (active === "matrix")      return <MatrixView />;
    if (active === "reports")     return <ReportsView />;
    return <PlaceholderView module={activeModule} />;
  }

  function NavGroup({ label, items }: { label: string; items: NavItem[] }) {
    return (
      <div className="mb-1">
        {!collapsed && (
          <div className="px-3 py-1.5 text-[9px] font-mono font-bold text-muted-foreground/50 uppercase tracking-widest">{label}</div>
        )}
        {items.map(item => {
          const isActive = active === item.id;
          return (
            <button key={item.id} onClick={() => { setSelectedChamadoId(null); if (item.id === "newchamado") setAutomaticTicketTarget(null); setActive(item.id); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded mx-1 transition-all text-left relative group
                ${isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}
              style={{ width: "calc(100% - 8px)" }}>
              <item.icon size={14} className="shrink-0" />
              {!collapsed && (
                <span className="text-xs font-mono flex-1 leading-none">{item.label}</span>
              )}
              <NavigationBadge module={item.id} active={isActive} collapsed={collapsed}/>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`qa-devtools-app flex h-screen w-screen overflow-hidden bg-background font-sans select-none ${dark ? "dark" : ""}`}>
      {/* Sidebar */}
      <aside className={`flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-200 shrink-0 ${collapsed ? "w-11" : "w-52"}`}>
        {/* Logo */}
        <div className={`flex items-center border-b border-sidebar-border px-3 py-3 gap-2 ${collapsed ? "justify-center" : ""}`}>
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center shrink-0">
            <Code2 size={13} className="text-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold font-mono text-foreground leading-none">DevQA</div>
              <div className="text-[9px] font-mono text-muted-foreground mt-0.5">Internal Tools</div>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-2 space-y-0">
          <NavGroup label="Dev Tools" items={devItems} />
          <NavGroup label="QA Tools"  items={qaItems}  />
          <NavGroup label="Admin"     items={adminItems} />
        </nav>

        {/* Collapse button */}
        <div className="border-t border-sidebar-border p-2">
          <button onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center gap-2 py-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-[10px] font-mono">
            {collapsed ? <ChevronRight size={13} /> : <><ChevronLeft size={13} /><span>Recolher</span></>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-10 flex items-center gap-3 px-4 border-b border-border bg-card shrink-0">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs font-mono">
            <span className="text-muted-foreground">DevQA</span>
            <ChevronRight size={11} className="text-muted-foreground" />
            <span className="text-foreground font-medium">{activeModule.label}</span>
          </div>

          <div className="flex-1" />

          {/* Search */}
          <button onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground bg-muted/50 border border-border rounded px-2 py-1 hover:bg-muted transition-colors">
            <Search size={11} />
            <span className="hidden sm:inline">Buscar</span>
            <kbd className="hidden sm:inline text-[9px] bg-border px-1 rounded">⌘K</kbd>
          </button>

          {/* Env selector */}
          <div className="relative">
            <button onClick={() => setEnvMenuOpen(!envMenuOpen)}
              className={`flex items-center gap-1.5 text-[10px] font-mono font-bold px-2 py-1 rounded border ${envCfg.bg} ${envCfg.color}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${envCfg.dot} animate-pulse`} />
              {env}
              <ChevronDown size={10} />
            </button>
            {envMenuOpen && (
              <div className="absolute top-full mt-1 right-0 bg-popover border border-border rounded shadow-xl z-50 overflow-hidden min-w-36">
                {(["DEV","HML","PROD"] as Env[]).map(e => (
                  <button key={e} onClick={() => { setEnv(e); setEnvMenuOpen(false); }}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-[10px] font-mono font-bold hover:bg-muted text-left ${ENV_CONFIG[e].color}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${ENV_CONFIG[e].dot}`} />
                    {ENV_CONFIG[e].label}
                    {env === e && <Check size={10} className="ml-auto" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Version */}
          <span className="text-[10px] font-mono text-muted-foreground hidden md:inline">v2.14.1</span>

          {/* Services status compact */}
          <HeaderServiceStatus/>

          {/* Theme toggle */}
          <button onClick={() => setDark(!dark)}
            className="text-muted-foreground hover:text-foreground p-1 rounded hover:bg-muted transition-colors">
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* Notifications */}
          <button className="relative text-muted-foreground hover:text-foreground p-1 rounded hover:bg-muted transition-colors">
            <Bell size={14} />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-destructive" />
          </button>

          {/* User */}
          <div className="relative">
            <button onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-1.5 hover:bg-muted rounded px-1.5 py-1 transition-colors">
              <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                <span className="text-[8px] font-mono font-bold text-primary">AD</span>
              </div>
              {!collapsed && <span className={`text-[10px] font-mono font-bold ${ROLE_CONFIG[role].color}`}>{role}</span>}
              <ChevronDown size={10} className="text-muted-foreground" />
            </button>
            {userMenuOpen && (
              <div className="absolute top-full mt-1 right-0 bg-popover border border-border rounded shadow-xl z-50 overflow-hidden min-w-40">
                <div className="px-3 py-2 border-b border-border">
                  <div className="text-xs font-mono font-semibold">Admin User</div>
                  <div className="text-[10px] text-muted-foreground font-mono">admin@company.com</div>
                </div>
                <div className="py-1">
                  {(["DEV","QA","ADMIN"] as Role[]).map(r => (
                    <button key={r} onClick={() => { setRole(r); setUserMenuOpen(false); }}
                      className="w-full flex items-center gap-2 px-3 py-1.5 text-[10px] font-mono hover:bg-muted text-left">
                      <span className={ROLE_CONFIG[r].color}>{r}</span>
                      {role === r && <Check size={10} className="ml-auto text-primary" />}
                    </button>
                  ))}
                </div>
                <div className="border-t border-border py-1">
                  <button className="w-full flex items-center gap-2 px-3 py-1.5 text-[10px] font-mono hover:bg-muted text-left text-muted-foreground">
                    <LogOut size={11} />Sair
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-hidden">
          <div key={`${currentViewPath}:${viewRevision}`} className="h-full overflow-y-auto [scrollbar-width:thin] [scrollbar-color:var(--border)_transparent]">
            {renderView()}
          </div>
        </main>
      </div>

      <GlobalDevToolsLaunchers/>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSearchOpen(false)} />
          <div className="relative bg-card border border-border rounded-lg shadow-2xl w-full max-w-lg">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <Search size={14} className="text-muted-foreground" />
              <input ref={searchRef} placeholder="Buscar módulo, log, rota, erro, bug..."
                className="flex-1 bg-transparent text-sm font-mono outline-none placeholder:text-muted-foreground" />
              <kbd className="text-[10px] font-mono bg-muted px-1.5 py-0.5 rounded text-muted-foreground">ESC</kbd>
            </div>
            <div className="p-2 max-h-72 overflow-y-auto">
              <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider px-2 py-1">Módulos</div>
              {NAV_ITEMS.map(item => (
                <button key={item.id} onClick={() => { setSelectedChamadoId(null); setActive(item.id); setSearchOpen(false); }}
                  className="w-full flex items-center gap-2.5 px-2 py-2 rounded hover:bg-muted transition-colors text-left">
                  <item.icon size={13} className="text-muted-foreground" />
                  <span className="text-xs font-mono">{item.label}</span>
                  <span className={`ml-auto text-[9px] font-mono px-1 rounded ${item.group === "dev" ? "text-blue-400 bg-blue-500/10" : item.group === "qa" ? "text-purple-400 bg-purple-500/10" : "text-amber-400 bg-amber-500/10"}`}>
                    {item.group.toUpperCase()}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Click-outside for menus */}
      {(userMenuOpen || envMenuOpen) && (
        <div className="fixed inset-0 z-40" onClick={() => { setUserMenuOpen(false); setEnvMenuOpen(false); }} />
      )}
    </div>
  );
}
