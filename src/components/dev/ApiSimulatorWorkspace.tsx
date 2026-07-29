import { useEffect, useMemo, useState } from "react";
import { Braces, ClipboardPaste, FolderOpen, Loader2, PlayCircle, Plus, Save, ShieldCheck, Trash2 } from "lucide-react";
import { pairsToText, parseBashCurl, textToPairs } from "./apiSimulatorCurl";
import { useNetworkSimulator, type SimulationMode } from "./networkSimulator";
import { savedSimulatorRequestsApi, type SavedSimulatorRequestInput, type SavedSimulatorRequestSummary, type SimulatorUser } from "./features/simulator/savedRequestsApi";

type AuthType = "none" | "bearer" | "basic" | "api-key";
type PayloadType = "none" | "json" | "text" | "form-urlencoded" | "form-data" | "graphql" | "binary";
const inputClass = "w-full rounded border border-border bg-muted/30 px-3 py-2 text-xs font-mono outline-none focus:border-primary";
const buttonClass = "inline-flex items-center justify-center gap-1.5 rounded border border-border px-3 py-2 text-xs font-mono hover:bg-muted disabled:opacity-50";

function sessionToken() {
  try { return (JSON.parse(localStorage.getItem("qa-devtools.auth-session") ?? "null") as { accessToken?: string } | null)?.accessToken ?? ""; }
  catch { return ""; }
}

function formDataFromText(body: string, file: File | null, fileField: string) {
  const form = new FormData();
  for (const { key, value } of textToPairs(body, "=")) form.append(key, value);
  if (file && fileField.trim()) form.append(fileField.trim(), file, file.name);
  return form;
}

function fileToBase64(file: File | null) {
  if (!file) return Promise.resolve<string | null>(null);
  return file.arrayBuffer().then(buffer => {
    const bytes = new Uint8Array(buffer); let binary = "";
    for (let index = 0; index < bytes.length; index += 0x8000) binary += String.fromCharCode(...bytes.subarray(index, index + 0x8000));
    return btoa(binary);
  });
}

function base64ToFile(value: string | null, name: string | null, type: string | null) {
  if (!value || !name) return null;
  const binary = atob(value); const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index);
  return new File([bytes], name, { type: type || "application/octet-stream" });
}

export function ApiSimulatorWorkspace() {
  const simulator = useNetworkSimulator();
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("/api/qa/chamados");
  const [queryText, setQueryText] = useState("");
  const [headersText, setHeadersText] = useState("Accept: application/json");
  const [authType, setAuthType] = useState<AuthType>("none");
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [apiKeyName, setApiKeyName] = useState("X-API-Key");
  const [apiKey, setApiKey] = useState("");
  const [payloadType, setPayloadType] = useState<PayloadType>("none");
  const [body, setBody] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileField, setFileField] = useState("file");
  const [credentials, setCredentials] = useState<RequestCredentials>("same-origin");
  const [modeRequest, setModeRequest] = useState<RequestMode>("cors");
  const [cache, setCache] = useState<RequestCache>("default");
  const [redirect, setRedirect] = useState<RequestRedirect>("follow");
  const [referrerPolicy, setReferrerPolicy] = useState<ReferrerPolicy>("strict-origin-when-cross-origin");
  const [referrer, setReferrer] = useState("");
  const [integrity, setIntegrity] = useState("");
  const [keepalive, setKeepalive] = useState(false);
  const [timeoutMs, setTimeoutMs] = useState(30000);
  const [curl, setCurl] = useState("");
  const [parseError, setParseError] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [route, setRoute] = useState("/api/qa/chamados");
  const [simulationMode, setSimulationMode] = useState<SimulationMode>("status");
  const [simulationStatus, setSimulationStatus] = useState(500);
  const [savedRequests, setSavedRequests] = useState<SavedSimulatorRequestSummary[]>([]);
  const [shareUsers, setShareUsers] = useState<SimulatorUser[]>([]);
  const [selectedSavedId, setSelectedSavedId] = useState<number | null>(null);
  const [selectedSavedEditable, setSelectedSavedEditable] = useState(false);
  const [savedName, setSavedName] = useState("");
  const [savedDescription, setSavedDescription] = useState("");
  const [secondaryUserIds, setSecondaryUserIds] = useState<number[]>([]);
  const [savedBusy, setSavedBusy] = useState(false);
  const [savedFeedback, setSavedFeedback] = useState("");
  const canManageSharing = selectedSavedId === null || selectedSavedEditable;

  const loadSavedList = async () => {
    try {
      const [items, users] = await Promise.all([savedSimulatorRequestsApi.listar(), savedSimulatorRequestsApi.usuarios()]);
      setSavedRequests(items); setShareUsers(users); setSavedFeedback("");
    } catch (reason) { setSavedFeedback(reason instanceof Error ? reason.message : "Falha ao carregar chamadas salvas."); }
  };

  useEffect(() => { void loadSavedList(); }, []);

  const finalUrl = useMemo(() => {
    try {
      const base = typeof window === "undefined" ? "http://localhost" : window.location.origin;
      const parsed = new URL(url, base);
      for (const { key, value } of textToPairs(queryText, "=")) parsed.searchParams.append(key, value);
      return /^https?:\/\//i.test(url) ? parsed.href : `${parsed.pathname}${parsed.search}${parsed.hash}`;
    } catch { return url; }
  }, [queryText, url]);

  const importCurl = () => {
    try {
      const parsed = parseBashCurl(curl);
      setMethod(parsed.method); setUrl(parsed.url); setQueryText(""); setHeadersText(pairsToText(parsed.headers)); setBody(parsed.body); setFile(null);
      setPayloadType(parsed.payloadType); setCredentials(parsed.credentials); setRedirect(parsed.redirect); setTimeoutMs(parsed.timeoutMs);
      const authorization = parsed.headers.find(item => item.key.toLowerCase() === "authorization")?.value ?? "";
      setAuthType("none"); setToken("");
      if (/^bearer\s+/i.test(authorization)) { setAuthType("bearer"); setToken(authorization.replace(/^bearer\s+/i, "")); }
      else if (/^basic\s+/i.test(authorization)) setAuthType("none");
      setParseError("");
    } catch (reason) { setParseError(reason instanceof Error ? reason.message : "Não foi possível interpretar o cURL."); }
  };

  const savedInput = async (): Promise<SavedSimulatorRequestInput> => ({
    nome: savedName.trim(), descricao: savedDescription.trim() || null, usuariosSecundariosIds: secondaryUserIds,
    metodo: method, url, queryParameters: textToPairs(queryText, "="), headers: textToPairs(headersText, ":"),
    authTipo: authType, authToken: authType === "bearer" ? token || null : null,
    authUsuario: authType === "basic" ? username || null : null, authSenha: authType === "basic" ? password || null : null,
    apiKeyNome: authType === "api-key" ? apiKeyName || null : null, apiKeyValor: authType === "api-key" ? apiKey || null : null,
    payloadTipo: payloadType, corpo: body || null, credentials, modoRequest: modeRequest, cacheRequest: cache,
    redirectRequest: redirect, referrer: referrer || null, referrerPolicy, integrity: integrity || null,
    keepAlive: keepalive, timeoutMs, curlOriginal: curl || null, arquivoCampo: file ? fileField || null : null,
    arquivoNome: file?.name ?? null, arquivoContentType: file?.type || null, arquivoBase64: await fileToBase64(file),
  });

  const saveRequest = async (update: boolean) => {
    if (!savedName.trim()) { setSavedFeedback("Informe um nome para salvar a chamada."); return; }
    setSavedBusy(true);
    try {
      const input = await savedInput();
      const saved = update && selectedSavedId
        ? await savedSimulatorRequestsApi.atualizar(selectedSavedId, input)
        : await savedSimulatorRequestsApi.criar(input);
      setSelectedSavedId(saved.id); setSelectedSavedEditable(saved.podeEditar);
      await loadSavedList(); setSavedFeedback(update ? "Chamada atualizada no banco." : "Chamada salva no banco.");
    } catch (reason) { setSavedFeedback(reason instanceof Error ? reason.message : "Falha ao salvar chamada."); }
    finally { setSavedBusy(false); }
  };

  const loadSavedRequest = async (id: number) => {
    setSavedBusy(true);
    try {
      const saved = await savedSimulatorRequestsApi.obter(id);
      setSelectedSavedId(saved.id); setSelectedSavedEditable(saved.podeEditar); setSavedName(saved.nome); setSavedDescription(saved.descricao ?? "");
      setSecondaryUserIds(saved.podeEditar ? saved.usuariosSecundariosIds : []); setMethod(saved.metodo); setUrl(saved.url);
      setQueryText(saved.queryParameters.map(item => `${item.key}=${item.value}`).join("\n")); setHeadersText(pairsToText(saved.headers));
      setAuthType(saved.authTipo as AuthType); setToken(saved.authToken ?? ""); setUsername(saved.authUsuario ?? ""); setPassword(saved.authSenha ?? "");
      setApiKeyName(saved.apiKeyNome ?? "X-API-Key"); setApiKey(saved.apiKeyValor ?? ""); setPayloadType(saved.payloadTipo as PayloadType); setBody(saved.corpo ?? "");
      setCredentials(saved.credentials as RequestCredentials); setModeRequest(saved.modoRequest as RequestMode); setCache(saved.cacheRequest as RequestCache);
      setRedirect(saved.redirectRequest as RequestRedirect); setReferrer(saved.referrer ?? ""); setReferrerPolicy(saved.referrerPolicy as ReferrerPolicy);
      setIntegrity(saved.integrity ?? ""); setKeepalive(saved.keepAlive); setTimeoutMs(saved.timeoutMs); setCurl(saved.curlOriginal ?? "");
      setFileField(saved.arquivoCampo ?? "file"); setFile(base64ToFile(saved.arquivoBase64, saved.arquivoNome, saved.arquivoContentType));
      setSavedFeedback(`Chamada “${saved.nome}” carregada.`);
    } catch (reason) { setSavedFeedback(reason instanceof Error ? reason.message : "Falha ao carregar chamada."); }
    finally { setSavedBusy(false); }
  };

  const deleteSavedRequest = async (id: number) => {
    if (!window.confirm("Excluir esta chamada salva?")) return;
    setSavedBusy(true);
    try { await savedSimulatorRequestsApi.excluir(id); if (selectedSavedId === id) { setSelectedSavedId(null); setSelectedSavedEditable(false); } await loadSavedList(); setSavedFeedback("Chamada excluída."); }
    catch (reason) { setSavedFeedback(reason instanceof Error ? reason.message : "Falha ao excluir chamada."); }
    finally { setSavedBusy(false); }
  };

  const send = async () => {
    setLoading(true); setResponse("");
    const started = performance.now();
    const controller = new AbortController();
    const timeout = timeoutMs > 0 ? window.setTimeout(() => controller.abort("Tempo limite excedido"), timeoutMs) : null;
    try {
      const headers = new Headers();
      for (const item of textToPairs(headersText, ":")) if (item.key) headers.set(item.key, item.value);
      if (authType === "bearer" && token) headers.set("Authorization", `Bearer ${token}`);
      if (authType === "basic") headers.set("Authorization", `Basic ${btoa(unescape(encodeURIComponent(`${username}:${password}`)))}`);
      if (authType === "api-key" && apiKeyName) headers.set(apiKeyName, apiKey);
      let requestBody: BodyInit | undefined;
      if (!["GET", "HEAD"].includes(method) && payloadType !== "none") {
        if (payloadType === "form-data") requestBody = formDataFromText(body, file, fileField);
        else if (payloadType === "form-urlencoded") { headers.set("Content-Type", "application/x-www-form-urlencoded"); requestBody = new URLSearchParams(textToPairs(body, "=").map(item => [item.key, item.value])); }
        else { requestBody = payloadType === "binary" && file ? file : body; if (!headers.has("Content-Type")) headers.set("Content-Type", payloadType === "json" ? "application/json" : payloadType === "graphql" ? "application/graphql" : payloadType === "binary" ? file?.type || "application/octet-stream" : "text/plain;charset=UTF-8"); }
      }
      const result = await fetch(finalUrl, { method, headers, body: requestBody, credentials, mode: modeRequest, cache, redirect, referrer: referrer || undefined, referrerPolicy, integrity: integrity || undefined, keepalive, signal: controller.signal, qaSuppressAutomaticTicket: true });
      const text = await result.text();
      let parsed: unknown = text; try { parsed = JSON.parse(text); } catch { /* textual */ }
      setResponse(JSON.stringify({ manualRequest: true, automaticTicketSuppressed: true, request: { method, url: finalUrl, payloadType }, status: result.status, statusText: result.statusText, ok: result.ok, durationMs: Math.round(performance.now() - started), headers: Object.fromEntries(result.headers.entries()), body: parsed }, null, 2));
    } catch (reason) {
      setResponse(JSON.stringify({ manualRequest: true, automaticTicketSuppressed: true, status: 0, durationMs: Math.round(performance.now() - started), error: reason instanceof Error ? reason.message : String(reason) }, null, 2));
    } finally { if (timeout) window.clearTimeout(timeout); setLoading(false); }
  };

  const addRule = () => simulator.saveRule({ id: crypto.randomUUID(), name: `${simulationMode} · ${route}`, route: route || "*", mode: simulationMode, status: simulationMode === "status" ? simulationStatus : undefined, latency: simulator.globalLatency, probability: 100, enabled: true });

  return <div className="h-full overflow-auto p-5"><div className="qa-resizable-columns grid gap-4 2xl:grid-cols-[minmax(620px,1.2fr)_minmax(420px,.8fr)]"><div className="space-y-4">
    <section className="space-y-3 rounded-md border border-primary/30 bg-card p-4"><div className="flex items-center justify-between"><div><h2 className="text-xs font-mono font-semibold uppercase">Salvar configuração da chamada</h2><p className="mt-1 text-[10px] font-mono text-muted-foreground">O proprietário vem do token. Somente os usuários selecionados poderão visualizar e carregar.</p></div><Save size={16} className="text-primary" /></div><div className="grid gap-2 md:grid-cols-2"><input className={inputClass} value={savedName} onChange={event => setSavedName(event.target.value)} placeholder="Nome da chamada *" /><input className={inputClass} value={savedDescription} onChange={event => setSavedDescription(event.target.value)} placeholder="Descrição" /></div>{canManageSharing && <div><div className="mb-1 flex items-center justify-between gap-2"><span className="text-[10px] font-mono uppercase text-muted-foreground">Compartilhar visualização com usuários</span><div className="flex gap-1"><button type="button" className={`${buttonClass} px-2 py-1 text-[9px]`} disabled={!shareUsers.length || secondaryUserIds.length === shareUsers.length} onClick={() => setSecondaryUserIds(shareUsers.map(user => user.id))}>Selecionar todos</button><button type="button" className={`${buttonClass} px-2 py-1 text-[9px]`} disabled={!secondaryUserIds.length} onClick={() => setSecondaryUserIds([])}>Remover todos</button></div></div><div className="grid max-h-48 gap-2 overflow-auto rounded border border-border bg-muted/10 p-2 sm:grid-cols-2">{shareUsers.map(user => { const selected = secondaryUserIds.includes(user.id); return <button key={user.id} type="button" aria-pressed={selected} className={`flex items-center gap-2 rounded border p-2 text-left text-[10px] font-mono transition-colors ${selected ? "border-primary bg-primary/15 text-primary" : "border-border/70 hover:bg-muted"}`} onClick={() => setSecondaryUserIds(current => current.includes(user.id) ? current.filter(id => id !== user.id) : [...current, user.id])}><span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${selected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground"}`}>{selected ? "✓" : ""}</span><span className="min-w-0"><span className="block truncate">{user.nome}</span><span className="block truncate text-muted-foreground">{user.email ?? `Perfil ${user.perfilId}`}</span></span></button>})}{!shareUsers.length && <span className="p-2 text-[10px] font-mono text-muted-foreground">Nenhum outro usuário disponível.</span>}</div><span className="mt-1 block text-[9px] font-mono text-muted-foreground">Clique para selecionar; clique novamente para remover. Selecionados: {secondaryUserIds.length}.</span></div>}{selectedSavedId && !selectedSavedEditable && <div className="rounded border border-border bg-muted/20 px-3 py-2 text-[10px] font-mono text-muted-foreground">Esta chamada foi compartilhada com você. Somente o criador administra quem possui acesso.</div>}<div className="flex flex-wrap gap-2"><button className={buttonClass} disabled={savedBusy} onClick={() => void saveRequest(false)}><Plus size={13} />Salvar como nova</button>{selectedSavedId && selectedSavedEditable && <button className={`${buttonClass} border-primary/40 text-primary`} disabled={savedBusy} onClick={() => void saveRequest(true)}><Save size={13} />Atualizar #{selectedSavedId}</button>}{savedBusy && <Loader2 size={14} className="animate-spin self-center" />}{savedFeedback && <span className="self-center text-[10px] font-mono text-muted-foreground">{savedFeedback}</span>}</div></section>
    <section className="rounded-md border border-border bg-card p-4"><div className="mb-3 flex items-center justify-between"><div><h2 className="text-xs font-mono font-semibold uppercase">Importar cURL Bash</h2><p className="mt-1 text-[10px] font-mono text-muted-foreground">Método, URL, headers, autenticação e payload serão identificados.</p></div><ClipboardPaste size={16} className="text-primary" /></div><textarea className={inputClass} rows={6} value={curl} onChange={event => setCurl(event.target.value)} placeholder={'curl -X POST "https://api.exemplo.com/items" \\\n  -H "Authorization: Bearer TOKEN" \\\n  -H "Content-Type: application/json" \\\n  --data-raw \'{"nome":"teste"}\''} /><div className="mt-2 flex items-center gap-2"><button className={buttonClass} onClick={importCurl}><Braces size={13} />Montar chamada</button>{parseError && <span className="text-[10px] font-mono text-red-400">{parseError}</span>}</div></section>
    <section className="space-y-4 rounded-md border border-border bg-card p-4"><div className="flex items-center justify-between"><h2 className="text-xs font-mono font-semibold uppercase">Requisição HTTP completa</h2><span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400"><ShieldCheck size={12} />Não gera chamado automático</span></div><div className="grid grid-cols-[130px_1fr] gap-2"><select className={inputClass} value={method} onChange={event => setMethod(event.target.value)}>{["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"].map(item => <option key={item}>{item}</option>)}</select><input className={inputClass} value={url} onChange={event => setUrl(event.target.value)} placeholder="URL absoluta ou /api/..." /></div><label><span className="mb-1 block text-[10px] font-mono uppercase text-muted-foreground">Query parameters — um nome=valor por linha</span><textarea className={inputClass} rows={3} value={queryText} onChange={event => setQueryText(event.target.value)} placeholder="pagina=1&#10;status=ATIVO" /></label><label><span className="mb-1 block text-[10px] font-mono uppercase text-muted-foreground">Headers — um Nome: valor por linha</span><textarea className={inputClass} rows={5} value={headersText} onChange={event => setHeadersText(event.target.value)} /></label>
      <div className="grid gap-3 md:grid-cols-2"><label><span className="mb-1 block text-[10px] font-mono uppercase text-muted-foreground">Autenticação</span><select className={inputClass} value={authType} onChange={event => setAuthType(event.target.value as AuthType)}><option value="none">Sem autenticação</option><option value="bearer">Bearer token</option><option value="basic">Basic auth</option><option value="api-key">API key</option></select></label>{authType === "bearer" && <label><span className="mb-1 block text-[10px] font-mono uppercase text-muted-foreground">Token</span><div className="flex gap-1"><input type="password" className={inputClass} value={token} onChange={event => setToken(event.target.value)} /><button className={buttonClass} title="Usar token do login atual" onClick={() => setToken(sessionToken())}>Sessão</button></div></label>}{authType === "basic" && <div className="grid grid-cols-2 gap-2"><input className={inputClass} placeholder="Usuário" value={username} onChange={event => setUsername(event.target.value)} /><input type="password" className={inputClass} placeholder="Senha" value={password} onChange={event => setPassword(event.target.value)} /></div>}{authType === "api-key" && <div className="grid grid-cols-2 gap-2"><input className={inputClass} value={apiKeyName} onChange={event => setApiKeyName(event.target.value)} /><input type="password" className={inputClass} value={apiKey} onChange={event => setApiKey(event.target.value)} placeholder="Valor" /></div>}</div>
      <label><span className="mb-1 block text-[10px] font-mono uppercase text-muted-foreground">Tipo de payload</span><select className={inputClass} value={payloadType} disabled={["GET", "HEAD"].includes(method)} onChange={event => setPayloadType(event.target.value as PayloadType)}><option value="none">Sem body</option><option value="json">JSON</option><option value="text">Texto</option><option value="form-urlencoded">Form URL encoded</option><option value="form-data">Multipart form-data</option><option value="graphql">GraphQL</option><option value="binary">Arquivo binário / bruto</option></select></label>{!["GET", "HEAD"].includes(method) && payloadType !== "none" && <label><span className="mb-1 block text-[10px] font-mono uppercase text-muted-foreground">Body {payloadType === "form-data" || payloadType === "form-urlencoded" ? "— nome=valor por linha" : ""}</span><textarea className={inputClass} rows={9} value={body} onChange={event => setBody(event.target.value)} /></label>}{(payloadType === "form-data" || payloadType === "binary") && <div className="grid grid-cols-[180px_1fr] gap-2"><input className={inputClass} value={fileField} disabled={payloadType === "binary"} onChange={event => setFileField(event.target.value)} placeholder="Nome do campo" /><input type="file" className={inputClass} onChange={event => setFile(event.target.files?.[0] ?? null)} /></div>}
      <details className="rounded border border-border p-3"><summary className="cursor-pointer text-[10px] font-mono uppercase text-muted-foreground">Opções avançadas do Fetch</summary><div className="mt-3 grid gap-3 md:grid-cols-3">{[["Credentials", credentials, setCredentials, ["omit", "same-origin", "include"]], ["Mode", modeRequest, setModeRequest, ["cors", "same-origin", "no-cors"]], ["Cache", cache, setCache, ["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"]], ["Redirect", redirect, setRedirect, ["follow", "error", "manual"]], ["Referrer policy", referrerPolicy, setReferrerPolicy, ["no-referrer", "origin", "same-origin", "strict-origin", "strict-origin-when-cross-origin", "unsafe-url"]]].map(([label, value, setter, options]) => <label key={String(label)}><span className="mb-1 block text-[9px] font-mono uppercase text-muted-foreground">{String(label)}</span><select className={inputClass} value={String(value)} onChange={event => (setter as (value: never) => void)(event.target.value as never)}>{(options as string[]).map(item => <option key={item}>{item}</option>)}</select></label>)}<label><span className="mb-1 block text-[9px] font-mono uppercase text-muted-foreground">Timeout (ms)</span><input type="number" min={0} className={inputClass} value={timeoutMs} onChange={event => setTimeoutMs(Number(event.target.value))} /></label><label><span className="mb-1 block text-[9px] font-mono uppercase text-muted-foreground">Referrer</span><input className={inputClass} value={referrer} onChange={event => setReferrer(event.target.value)} /></label><label><span className="mb-1 block text-[9px] font-mono uppercase text-muted-foreground">Integrity (SRI)</span><input className={inputClass} value={integrity} onChange={event => setIntegrity(event.target.value)} /></label><label className="flex items-end gap-2 pb-2 text-xs"><input type="checkbox" checked={keepalive} onChange={event => setKeepalive(event.target.checked)} />Keepalive</label></div></details><div className="rounded border border-border bg-muted/20 px-3 py-2 text-[10px] font-mono text-muted-foreground">URL final: {finalUrl}</div><button className="flex w-full items-center justify-center gap-2 rounded bg-primary px-4 py-2.5 text-xs font-mono text-primary-foreground" disabled={loading} onClick={() => void send()}>{loading ? <Loader2 size={13} className="animate-spin" /> : <PlayCircle size={13} />}Enviar requisição manual</button></section>
  </div><div className="space-y-4"><section className="rounded-md border border-border bg-card p-4"><div className="flex items-center justify-between"><div><h2 className="text-xs font-mono font-semibold uppercase">Chamadas salvas e compartilhadas</h2><p className="mt-1 text-[10px] font-mono text-muted-foreground">Somente itens próprios ou compartilhados com seu usuário.</p></div><button className={buttonClass} disabled={savedBusy} onClick={() => void loadSavedList()}><FolderOpen size={13} />Atualizar</button></div><div className="mt-3 max-h-80 space-y-2 overflow-auto">{savedRequests.map(item => <article key={item.id} className={`rounded border p-3 ${selectedSavedId === item.id ? "border-primary bg-primary/5" : "border-border"}`}><div className="flex items-start gap-2"><button className="min-w-0 flex-1 text-left" onClick={() => void loadSavedRequest(item.id)}><div className="truncate text-xs font-semibold">{item.nome}</div><div className="mt-1 truncate text-[10px] font-mono text-primary">{item.metodo} {item.url}</div><div className="mt-1 text-[9px] font-mono text-muted-foreground">{item.criadoPorNome} · {item.payloadTipo} · {new Date(item.atualizadoEm).toLocaleString("pt-BR")}{item.podeEditar ? " · proprietário" : " · compartilhada"}</div></button>{item.podeEditar && <button className="text-red-400" title="Excluir" onClick={() => void deleteSavedRequest(item.id)}><Trash2 size={13} /></button>}</div></article>)}{!savedRequests.length && <div className="py-8 text-center text-[10px] font-mono text-muted-foreground">Nenhuma chamada salva visível.</div>}</div></section><section className="rounded-md border border-border bg-card p-4"><h2 className="text-xs font-mono font-semibold uppercase">Resposta</h2>{response ? <pre className="mt-3 max-h-[720px] overflow-auto whitespace-pre-wrap break-all rounded bg-muted/30 p-3 text-xs font-mono">{response}</pre> : <div className="py-20 text-center text-xs font-mono text-muted-foreground">Execute uma chamada para ver status, tempo, headers e body.</div>}</section><section className="space-y-3 rounded-md border border-border bg-card p-4"><div className="flex items-center justify-between"><h2 className="text-xs font-mono font-semibold uppercase">Cenários de rede</h2><button onClick={() => simulator.setEnabled(!simulator.enabled)} className={buttonClass}>{simulator.enabled ? "Desativar" : "Ativar"}</button></div><div className="grid grid-cols-3 gap-2"><input className={inputClass} value={route} onChange={event => setRoute(event.target.value)} placeholder="Rota ou *" /><select className={inputClass} value={simulationMode} onChange={event => setSimulationMode(event.target.value as SimulationMode)}>{["status", "offline", "intermittent", "timeout", "empty", "invalid-json", "incomplete", "large", "pagination", "duplicates", "shuffle", "nulls"].map(item => <option key={item}>{item}</option>)}</select><input type="number" className={inputClass} value={simulationStatus} disabled={simulationMode !== "status"} onChange={event => setSimulationStatus(Number(event.target.value))} /></div><div className="flex items-center gap-2"><span className="text-[10px] font-mono text-muted-foreground">Latência</span><input type="number" min={0} className={`${inputClass} w-24`} value={simulator.globalLatency} onChange={event => simulator.setGlobalLatency(Number(event.target.value))} /><button className={`${buttonClass} ml-auto`} onClick={addRule}><Plus size={12} />Adicionar</button></div>{simulator.rules.map(rule => <div key={rule.id} className="flex items-center gap-2 rounded bg-muted/30 p-2 text-[10px] font-mono"><span className="text-primary">{rule.route}</span><span>{rule.mode}{rule.status ? ` ${rule.status}` : ""}</span><button className="ml-auto" onClick={() => simulator.saveRule({ ...rule, enabled: !rule.enabled })}>{rule.enabled ? "ativa" : "pausada"}</button><button className="text-red-400" onClick={() => simulator.removeRule(rule.id)}><Trash2 size={11} /></button></div>)}</section></div></div></div>;
}
