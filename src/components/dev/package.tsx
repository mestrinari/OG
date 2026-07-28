/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
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
} from "./qaApiClient";
import {
  getTicketMapping,
  resetTicketMappingCache,
} from "./ticketMappingCache";
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

function useQaDevToolsMount(name: QaDevToolsMount) {
  const [mount, setMount] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setMount(getQaDevToolsMount(name));
  }, [name]);
  return mount;
}

export type QaDevToolsUser = {
  id?: string | number;
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
  const normalizedApiBaseUrl = normalizeQaApiBaseUrl(apiBaseUrl);
  useEffect(() => {
    configureQaApiBaseUrl(normalizedApiBaseUrl);
    installPackageRuntime();
    resetTicketMappingCache();
    void getTicketMapping().catch(() => {
      // A próxima falha tentará carregar o mapeamento novamente.
    });
  }, [normalizedApiBaseUrl]);
  const value = useMemo(
    () => ({ apiBaseUrl: normalizedApiBaseUrl, user, open, setOpen }),
    [normalizedApiBaseUrl, user, open],
  );
  return (
    <QaDevToolsContext.Provider value={value}>
      <ConsoleLoggerProvider>{children}</ConsoleLoggerProvider>
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

export function QaFloatingActions() {
  const { open, setOpen } = useQaDevTools();
  const latestFailure = useNetworkLogger((state) => state.latestFailure);
  const failureTicketState = useNetworkLogger(
    (state) => state.latestFailureTicketState,
  );
  const hasNetworkFailure = latestFailure !== null;
  const hasExistingTicket =
    hasNetworkFailure && failureTicketState === "existing";
  const [position, setPosition] = useState(() => ({
    x:
      typeof window === "undefined"
        ? 124
        : Math.max(24, window.innerWidth - 1120),
    y: 128,
  }));

  const stopActiveDrag = useRef<(() => void) | null>(null);
  const isDragging = useRef(false); // <-- Controla se foi um arrasto ou um clique

  useEffect(() => () => stopActiveDrag.current?.(), []);

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

      setPosition({
        x: Math.max(
          0,
          Math.min(window.innerWidth - 80, pointerEvent.clientX - offsetX),
        ),
        y: Math.max(
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

  const mount = useQaDevToolsMount("launcher");
  if (open || !mount) return null;

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
  const { open, setOpen } = useQaDevTools();
  const [position, setPosition] = useState(() => ({
    x:
      typeof window === "undefined"
        ? 24
        : Math.max(24, window.innerWidth - 1120),
    y: 28,
  }));
  const stopActiveDrag = useRef<(() => void) | null>(null);
  useEffect(() => () => stopActiveDrag.current?.(), []);

  function startDragging(event: ReactPointerEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest("button")) return;
    event.preventDefault();
    stopActiveDrag.current?.();
    const offsetX = event.clientX - position.x;
    const offsetY = event.clientY - position.y;
    const move = (pointerEvent: PointerEvent) =>
      setPosition({
        x: Math.max(
          0,
          Math.min(window.innerWidth - 280, pointerEvent.clientX - offsetX),
        ),
        y: Math.max(
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
  const mount = useQaDevToolsMount("window");
  if (!open || !mount) return null;
  return createPortal(
    <section
      className="qa-package-window"
      style={{ left: position.x, top: position.y }}
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
        <button
          type="button"
          className="qa-package-close"
          onClick={() => setOpen(false)}
          aria-label="Fechar QA DevTools"
        >
          Fechar ×
        </button>
      </header>
      <div className="qa-package-content">
        <DevErrorBoundary>
          <App  position={[6, 2] }/>
        </DevErrorBoundary>
      </div>
    </section>,
    mount,
  );
}

export function QaDevToolsApp() {
  const mount = useQaDevToolsMount("standalone");
  console.log(window.innerHeight, "height")
  if (!mount) return null;
  return createPortal(
    <div className="qa-package-standalone">
      <DevErrorBoundary>
        <App position={[6, 1] }/>
      </DevErrorBoundary>
    </div>,
    mount,
  );
}

export default QaDevToolsApp;
