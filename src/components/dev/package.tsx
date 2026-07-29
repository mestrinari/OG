/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import App from "./App";
import { ConsoleLoggerProvider } from "./consoleLogger";
import { setupFetchInterceptor } from "./networkLogger";
import { setupDevTimeline } from "./devTimeline";
import { DevErrorBoundary, setupDevErrorMonitor } from "./devErrorMonitor";
import { useNetworkLogger } from "./useNetworkLogger";
import { installFailureAvailabilityMonitor } from "./failureAvailabilityMonitor";
import { setupNavigationCounters } from "./navigationCounters";
import { setupPerformanceMonitor } from "./performanceMonitor";
import { setupServiceHealthMonitor } from "./serviceHealth";
import {
  configureQaApiBaseUrl,
  normalizeQaApiBaseUrl,
  QA_AUTH_UNAUTHORIZED_EVENT,
} from "./qaApiClient";
import {
  getTicketMapping,
  resetTicketMappingCache,
} from "./ticketMappingCache";
import {
  authenticateQaDevToolsUser,
  clearQaAuthSession,
  loginQaDevTools,
  refreshQaAuthSession,
  restoreQaAuthSession,
  saveQaAuthSession,
  updateQaDevToolsUserConfig,
  type QaDevToolsAuthStatus,
  type UsuarioConfigAuth,
  type UsuarioConfigPreferences,
} from "./auth/usuarioConfigAuth";
import devToolsStyles from "./styles/index.css?inline";
import packageStyles from "./package.css?inline";

const QA_DEVTOOLS_HOST_ID = "qa-devtools-package-root";
const QA_DEVTOOLS_STYLE_ID = "qa-devtools-package-styles";

type QaDevToolsMount = "launcher" | "window" | "standalone";

function getQaDevToolsMount(name: QaDevToolsMount): HTMLElement | null {
  if (typeof document === "undefined") return null;

  let host = document.getElementById(QA_DEVTOOLS_HOST_ID);
  if (!host) {
    host = document.createElement("div");
    host.id = QA_DEVTOOLS_HOST_ID;
    document.body.appendChild(host);
  }

  const shadowRoot = host.shadowRoot ?? host.attachShadow({ mode: "open" });
  let style = shadowRoot.getElementById(QA_DEVTOOLS_STYLE_ID) as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement("style");
    style.id = QA_DEVTOOLS_STYLE_ID;
    shadowRoot.prepend(style);
  }
  style.textContent = `${devToolsStyles}\n${packageStyles}`;

  let mount = shadowRoot.querySelector<HTMLElement>(`[data-qa-mount="${name}"]`);
  if (!mount) {
    mount = document.createElement("div");
    mount.dataset.qaMount = name;
    mount.className = `qa-package-${name}-mount`;
    shadowRoot.appendChild(mount);
  }
  return mount;
}

function useQaDevToolsMount(name: QaDevToolsMount, enabled = true) {
  const [mount, setMount] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (!enabled) {
      setMount(null);
      return;
    }
    setMount(getQaDevToolsMount(name));
  }, [enabled, name]);
  return mount;
}

export type QaDevToolsUser = {
  id?: string | number;
  usuarioId?: string | number;
  name?: string;
  email?: string;
  profile?: string;
  [key: string]: unknown;
};

export type QaDevToolsProviderProps = {
  apiBaseUrl?: string;
  user?: QaDevToolsUser | null;
  children: ReactNode;
  initiallyOpen?: boolean;
};

type QaDevToolsContextValue = {
  apiBaseUrl: string;
  user: QaDevToolsUser | null;
  authStatus: QaDevToolsAuthStatus;
  authError: string | null;
  usuarioConfig: UsuarioConfigAuth | null;
  preferences: UsuarioConfigPreferences | null;
  updatePreferences: (patch: Partial<UsuarioConfigPreferences>) => void;
  savePreferences: () => Promise<boolean>;
  saveStatus: "idle" | "saving" | "saved" | "error";
  saveError: string | null;
  loginWithCredentials: (email: string, senha: string) => Promise<boolean>;
  logout: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const QaDevToolsContext = createContext<QaDevToolsContextValue | null>(null);
let runtimeInstalled = false;

function installPackageRuntime() {
  if (runtimeInstalled || typeof window === "undefined") return;
  runtimeInstalled = true;

  setupFetchInterceptor();
  setupPerformanceMonitor();
  setupServiceHealthMonitor();
  setupNavigationCounters();
  installFailureAvailabilityMonitor();
  setupDevTimeline();
  setupDevErrorMonitor();
}

export function QaDevToolsProvider({
  apiBaseUrl,
  user = null,
  children,
  initiallyOpen = false,
}: QaDevToolsProviderProps) {
  const [open, setOpen] = useState(initiallyOpen);
  const [authStatus, setAuthStatus] =
    useState<QaDevToolsAuthStatus>("validating");
  const [authError, setAuthError] = useState<string | null>(null);
  const [usuarioConfig, setUsuarioConfig] =
    useState<UsuarioConfigAuth | null>(null);
  const [preferences, setPreferences] =
    useState<UsuarioConfigPreferences | null>(null);
  const [saveStatus, setSaveStatus] = useState<
    "idle" | "saving" | "saved" | "error"
  >("idle");
  const [saveError, setSaveError] = useState<string | null>(null);
  const normalizedApiBaseUrl = normalizeQaApiBaseUrl(apiBaseUrl);
  const [sessionUserId, setSessionUserId] = useState<number | null>(
    () => restoreQaAuthSession()?.usuario.usuarioId ?? null,
  );
  const [sessionRevision, setSessionRevision] = useState(0);

  useEffect(() => {
    const unauthorized = () => {
      clearQaAuthSession();
      setSessionUserId(null);
      setUsuarioConfig(null);
      setPreferences(null);
      setAuthError("Sua sessão expirou. Entre novamente.");
      setAuthStatus("unauthenticated");
      setOpen(true);
    };
    window.addEventListener(QA_AUTH_UNAUTHORIZED_EVENT, unauthorized);
    return () => window.removeEventListener(QA_AUTH_UNAUTHORIZED_EVENT, unauthorized);
  }, []);

  useEffect(() => {
    configureQaApiBaseUrl(normalizedApiBaseUrl);
    setUsuarioConfig(null);
    setPreferences(null);
    setSaveStatus("idle");
    setSaveError(null);

    if (sessionUserId === null) {
      setAuthStatus("unauthenticated");
      return;
    }

    const controller = new AbortController();
    setAuthStatus("validating");
    void authenticateQaDevToolsUser(sessionUserId, controller.signal)
      .then((config) => {
        if (controller.signal.aborted) return;
        if (!config) {
          setAuthError("Usuário não encontrado.");
          setAuthStatus("unauthenticated");
          return;
        }
        setUsuarioConfig(config);
        setPreferences({
          buttonX: config.buttonX,
          buttonY: config.buttonY,
          modalX: config.modalX,
          modalY: config.modalY,
          modalW: config.modalW,
          modalH: config.modalH,
          isDark: config.isDark,
          perfilId: config.perfilId,
        });
        setAuthStatus("authenticated");
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        setAuthError(
          error instanceof Error
            ? error.message
            : "Não foi possível validar o acesso ao QA DevTools.",
        );
        setAuthStatus("error");
      });

    return () => controller.abort();
  }, [normalizedApiBaseUrl, sessionRevision, sessionUserId]);

  useEffect(() => {
    if (authStatus !== "authenticated") return;
    installPackageRuntime();
    resetTicketMappingCache();
    void getTicketMapping().catch(() => {
      // A próxima falha tentará carregar o mapeamento novamente.
    });
  }, [authStatus]);

  const authenticatedUser = useMemo<QaDevToolsUser | null>(() => {
    if (!usuarioConfig) return null;
    return {
      ...user,
      id: usuarioConfig.usuarioId,
      usuarioId: usuarioConfig.usuarioId,
      name: usuarioConfig.nome,
      email: usuarioConfig.email ?? undefined,
      profile: String(usuarioConfig.perfilId),
      perfilId: usuarioConfig.perfilId,
    };
  }, [user, usuarioConfig]);

  const loginWithCredentials = useCallback(async (email: string, senha: string) => {
    setAuthError(null);
    setAuthStatus("validating");
    try {
      const session = await loginQaDevTools(email, senha);
      saveQaAuthSession(session);
      setSessionUserId(session.usuario.usuarioId);
      setSessionRevision((current) => current + 1);
      return true;
    } catch (error) {
      clearQaAuthSession();
      setSessionUserId(null);
      setAuthError(
        error instanceof Error ? error.message : "Não foi possível entrar.",
      );
      setAuthStatus("unauthenticated");
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    clearQaAuthSession();
    setSessionUserId(null);
    setUsuarioConfig(null);
    setPreferences(null);
    setSaveStatus("idle");
    setSaveError(null);
    setAuthError(null);
    setAuthStatus("unauthenticated");
    setOpen(true);
  }, []);

  const updatePreferences = useCallback(
    (patch: Partial<UsuarioConfigPreferences>) => {
      setPreferences((current) => (current ? { ...current, ...patch } : current));
      setSaveStatus("idle");
      setSaveError(null);
    },
    [],
  );

  const savePreferences = useCallback(async () => {
    if (!usuarioConfig || !preferences) return false;
    setSaveStatus("saving");
    setSaveError(null);
    try {
      const updated = await updateQaDevToolsUserConfig(usuarioConfig.usuarioId, {
        nome: usuarioConfig.nome,
        email: usuarioConfig.email,
        perfilId: preferences.perfilId,
        buttonX: preferences.buttonX,
        buttonY: preferences.buttonY,
        modalX: preferences.modalX,
        modalY: preferences.modalY,
        modalW: preferences.modalW,
        modalH: preferences.modalH,
        isDark: preferences.isDark,
      });
      // O PerfilId também existe no JWT. Renove-o antes da próxima chamada
      // para que a policy compare o token com o perfil recém-salvo no banco.
      const renewedSession = await refreshQaAuthSession();
      saveQaAuthSession(renewedSession);
      setUsuarioConfig(updated);
      setPreferences({
        buttonX: updated.buttonX,
        buttonY: updated.buttonY,
        modalX: updated.modalX,
        modalY: updated.modalY,
        modalW: updated.modalW,
        modalH: updated.modalH,
        isDark: updated.isDark,
        perfilId: updated.perfilId,
      });
      setSaveStatus("saved");
      return true;
    } catch (error) {
      setSaveError(
        error instanceof Error
          ? error.message
          : "Não foi possível salvar as preferências.",
      );
      setSaveStatus("error");
      return false;
    }
  }, [preferences, usuarioConfig]);

  const value = useMemo(
    () => ({
      apiBaseUrl: normalizedApiBaseUrl,
      user: authenticatedUser,
      authStatus,
      authError,
      usuarioConfig,
      preferences,
      updatePreferences,
      savePreferences,
      saveStatus,
      saveError,
      loginWithCredentials,
      logout,
      open,
      setOpen,
    }),
    [
      normalizedApiBaseUrl,
      authenticatedUser,
      authStatus,
      authError,
      usuarioConfig,
      preferences,
      updatePreferences,
      savePreferences,
      saveStatus,
      saveError,
      loginWithCredentials,
      logout,
      open,
    ],
  );
  return (
    <QaDevToolsContext.Provider value={value}>
      <ConsoleLoggerProvider enabled={authStatus === "authenticated"}>
        {children}
      </ConsoleLoggerProvider>
    </QaDevToolsContext.Provider>
  );
}

export function useQaDevTools() {
  const context = useContext(QaDevToolsContext);
  if (!context)
    throw new Error(
      "useQaDevTools deve ser usado dentro de QaDevToolsProvider.",
    );
  return context;
}

function QaDevToolsLogin() {
  const { authStatus, authError, loginWithCredentials } = useQaDevTools();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await loginWithCredentials(email, senha);
  }

  return (
    <div className="flex h-full items-center justify-center bg-background p-6 text-foreground">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-lg border border-border bg-card p-6 shadow-2xl"
      >
        <div className="mb-5">
          <div className="text-sm font-mono font-bold">Acessar QA DevTools</div>
          <p className="mt-1 text-xs text-muted-foreground">
            Entre com o e-mail e a senha cadastrados.
          </p>
        </div>
        <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
          E-mail
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            inputMode="email"
            autoComplete="username"
            autoFocus
            placeholder="nome@empresa.com"
            disabled={authStatus === "validating"}
            className="mt-2 w-full rounded border border-border bg-input-background px-3 py-2 text-sm font-mono text-foreground outline-none focus:border-primary disabled:opacity-60"
          />
        </label>
        <label className="mt-4 block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
          Senha
          <input
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            type="password"
            autoComplete="current-password"
            placeholder="Sua senha"
            disabled={authStatus === "validating"}
            className="mt-2 w-full rounded border border-border bg-input-background px-3 py-2 text-sm font-mono text-foreground outline-none focus:border-primary disabled:opacity-60"
          />
        </label>
        {authError && (
          <div role="alert" className="mt-3 text-xs text-red-400">
            {authError}
          </div>
        )}
        <button
          type="submit"
          disabled={
            authStatus === "validating" || !email.trim() || !senha
          }
          className="mt-5 w-full rounded bg-primary px-3 py-2 text-xs font-mono font-bold text-primary-foreground transition-opacity disabled:opacity-50"
        >
          {authStatus === "validating" ? "Validando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}

export function QaFloatingActions() {
  const { open, setOpen, authStatus, preferences, updatePreferences } =
    useQaDevTools();
  const latestFailure = useNetworkLogger((state) => state.latestFailure);
  const failureTicketState = useNetworkLogger(
    (state) => state.latestFailureTicketState,
  );
  const hasNetworkFailure = latestFailure !== null;
  const hasExistingTicket =
    hasNetworkFailure && failureTicketState === "existing";
  const configuredButtonX =
    preferences?.buttonX ??
    (typeof window === "undefined"
      ? 124
      : Math.max(24, window.innerWidth - 1120));
  const configuredButtonY = preferences?.buttonY ?? 128;
  const position = {
    x:
      typeof window === "undefined"
        ? configuredButtonX
        : Math.max(0, Math.min(window.innerWidth - 80, configuredButtonX)),
    y:
      typeof window === "undefined"
        ? configuredButtonY
        : Math.max(0, Math.min(window.innerHeight - 48, configuredButtonY)),
  };

  const stopActiveDrag = useRef<(() => void) | null>(null);
  const isDragging = useRef(false); // <-- Controla se foi um arrasto ou um clique

  useEffect(() => () => stopActiveDrag.current?.(), []);

  useEffect(() => {
    if (!preferences) return;
    if (preferences.buttonX !== position.x || preferences.buttonY !== position.y) {
      updatePreferences({ buttonX: position.x, buttonY: position.y });
    }
  }, [position.x, position.y, preferences, updatePreferences]);

  function startDragging(event: ReactPointerEvent<HTMLElement>) {
    event.preventDefault();
    stopActiveDrag.current?.();
    isDragging.current = false; // Reseta o estado ao iniciar o clique

    const startX = event.clientX;
    const startY = event.clientY;
    const offsetX = startX - position.x;
    const offsetY = startY - position.y;

    const move = (pointerEvent: PointerEvent) => {
      // Se o mouse se moveu mais de 3px, consideramos um arrasto
      if (
        Math.abs(pointerEvent.clientX - startX) > 3 ||
        Math.abs(pointerEvent.clientY - startY) > 3
      ) {
        isDragging.current = true;
      }

      updatePreferences({
        buttonX: Math.max(
          0,
          Math.min(window.innerWidth - 80, pointerEvent.clientX - offsetX),
        ),
        buttonY: Math.max(
          0,
          Math.min(window.innerHeight - 148, pointerEvent.clientY - offsetY),
        ),
      });
    };

    const stop = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", stop);
      window.removeEventListener("pointercancel", stop);
      stopActiveDrag.current = null;
    };

    stopActiveDrag.current = stop;
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop);
    window.addEventListener("pointercancel", stop);
  }

  function handleClick() {
    // Só abre o DevTools se não foi um movimento de arrastar
    if (isDragging.current) return;
    setOpen(true);
  }

  const mount = useQaDevToolsMount(
    "launcher",
    authStatus !== "validating",
  );
  if (authStatus === "validating" || open || !mount) return null;

  return createPortal(
    <button
      type="button"
      style={{ left: position.x, top: position.y }}
      className={`qa-package-launcher ${hasExistingTicket ? "has-existing-ticket" : hasNetworkFailure ? "has-error" : ""}`}
      onPointerDown={startDragging}
      onClick={handleClick} // <-- Substituído pela função com a checagem
      aria-label={
        hasExistingTicket
          ? "Abrir QA DevTools - já existe chamado aberto para este erro"
          : hasNetworkFailure
          ? "Abrir QA DevTools - erro de rede detectado"
          : "Abrir QA DevTools"
      }
    >
      <span>DEV</span>
      <strong>DevTools</strong>
    </button>,
    mount,
  );
}

export function QaDevToolsRoutes() {
  const {
    open,
    setOpen,
    authStatus,
    user,
    logout,
    preferences,
    updatePreferences,
    savePreferences,
    saveStatus,
    saveError,
  } = useQaDevTools();
  const [minimized, setMinimized] = useState(false);
  const configuredWidth = preferences?.modalW ?? 1080;
  const configuredHeight = preferences?.modalH ?? 760;
  const renderedWidth =
    typeof window === "undefined"
      ? configuredWidth
      : Math.min(configuredWidth, window.innerWidth - 8);
  const renderedHeight =
    typeof window === "undefined"
      ? configuredHeight
      : Math.min(configuredHeight, window.innerHeight - 8);
  const configuredX =
    preferences?.modalX ??
    (typeof window === "undefined"
      ? 24
      : Math.max(24, window.innerWidth - 1120));
  const configuredY = preferences?.modalY ?? 28;
  const position = {
    x:
      typeof window === "undefined"
        ? configuredX
        : Math.max(0, Math.min(window.innerWidth - renderedWidth, configuredX)),
    y:
      typeof window === "undefined"
        ? configuredY
        : Math.max(0, Math.min(window.innerHeight - renderedHeight, configuredY)),
  };
  const windowRef = useRef<HTMLElement>(null);
  const stopActiveDrag = useRef<(() => void) | null>(null);
  useEffect(() => () => stopActiveDrag.current?.(), []);

  useEffect(() => {
    if (!preferences) return;
    if (preferences.modalX !== position.x || preferences.modalY !== position.y) {
      updatePreferences({ modalX: position.x, modalY: position.y });
    }
  }, [position.x, position.y, preferences, updatePreferences]);

  useEffect(() => {
    if (!open || minimized) return;
    const element = windowRef.current;
    if (!element || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      const bounds = entry.target.getBoundingClientRect();
      updatePreferences({
        modalW: Math.round(bounds.width),
        modalH: Math.round(bounds.height),
      });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [minimized, open, updatePreferences]);

  function startDragging(event: ReactPointerEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest("button")) return;
    event.preventDefault();
    stopActiveDrag.current?.();
    const offsetX = event.clientX - position.x;
    const offsetY = event.clientY - position.y;
    const move = (pointerEvent: PointerEvent) =>
      updatePreferences({
        modalX: Math.max(
          0,
          Math.min(window.innerWidth - 280, pointerEvent.clientX - offsetX),
        ),
        modalY: Math.max(
          0,
          Math.min(window.innerHeight - 48, pointerEvent.clientY - offsetY),
        ),
      });
    const stop = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", stop);
      window.removeEventListener("pointercancel", stop);
      stopActiveDrag.current = null;
    };
    stopActiveDrag.current = stop;
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop);
    window.addEventListener("pointercancel", stop);
  }
  const mount = useQaDevToolsMount(
    "window",
    open || authStatus === "authenticated",
  );
  if (!mount) return null;
  return createPortal(
    <section
      ref={windowRef}
      className={`qa-package-window${minimized ? " is-minimized" : ""}`}
      style={{
        display: open ? undefined : "none",
        left: position.x,
        top: position.y,
        width: preferences?.modalW ?? undefined,
        height: preferences?.modalH ?? undefined,
      }}
      role="dialog"
      aria-modal="false"
      aria-label="QA DevTools"
    >
      <header className="qa-package-titlebar" onPointerDown={startDragging}>
        <div>
          <span>DEV</span>
          <strong>QA DevTools</strong>
          <small>Arraste para mover · redimensione pelas bordas</small>
        </div>
        <div className="qa-package-titlebar-actions">
          <button
            type="button"
            className="qa-package-minimize"
            onClick={() => setMinimized(value => !value)}
            aria-label={minimized ? "Restaurar QA DevTools" : "Minimizar QA DevTools"}
          >
            {minimized ? "Restaurar □" : "Minimizar —"}
          </button>
          <button
            type="button"
            className="qa-package-close"
            onClick={() => {
              setMinimized(false);
              setOpen(false);
            }}
            aria-label="Fechar QA DevTools"
          >
            Fechar ×
          </button>
        </div>
      </header>
      <div className="qa-package-content">
        {authStatus === "authenticated" && user ? (
          <DevErrorBoundary>
            <App
              position={[6, 2]}
              user={user}
              onLogout={logout}
              preferences={preferences}
              onPreferencesChange={updatePreferences}
              onSavePreferences={savePreferences}
              saveStatus={saveStatus}
              saveError={saveError}
            />
          </DevErrorBoundary>
        ) : (
          <QaDevToolsLogin />
        )}
      </div>
    </section>,
    mount,
  );
}

export function QaDevToolsApp() {
  const {
    authStatus,
    user,
    logout,
    preferences,
    updatePreferences,
    savePreferences,
    saveStatus,
    saveError,
  } = useQaDevTools();
  const mount = useQaDevToolsMount("standalone");
  if (!mount) return null;
  return createPortal(
    <div className="qa-package-standalone">
      {authStatus === "authenticated" && user ? (
        <DevErrorBoundary>
          <App
            position={[6, 1]}
            user={user}
            onLogout={logout}
            preferences={preferences}
            onPreferencesChange={updatePreferences}
            onSavePreferences={savePreferences}
            saveStatus={saveStatus}
            saveError={saveError}
          />
        </DevErrorBoundary>
      ) : (
        <QaDevToolsLogin />
      )}
    </div>,
    mount,
  );
}

export default QaDevToolsApp;
