import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

type PictureInPictureOptions = {
  width?: number;
  height?: number;
  disallowReturnToOpener?: boolean;
  preferInitialWindowPlacement?: boolean;
};

type DocumentPictureInPictureApi = {
  requestWindow: (options?: PictureInPictureOptions) => Promise<Window>;
  window: Window | null;
};

declare global {
  interface Window {
    documentPictureInPicture?: DocumentPictureInPictureApi;
  }
}

export type FloatingWindowHandle = {
  open: () => void;
  close: () => void;
};

type FloatingWindowProps = {
  windowId?: string;
  title: string;
  children: (close: () => void, targetDocument: Document) => ReactNode;
  renderTrigger?: (
    open: () => void,
    state: { isOpen: boolean; isOpening: boolean; isSupported: boolean },
  ) => ReactNode;
  width?: number;
  height?: number;
  dark?: boolean;
  colorTheme?: string;
  onClose?: () => void;
};

const externalWindows = new Map<string, Window>();
const openingWindowIds = new Set<string>();
let nativePictureInPictureOpening = false;

function getOpenExternalWindow(windowId: string) {
  const existing = externalWindows.get(windowId);
  if (existing?.closed) {
    externalWindows.delete(windowId);
    return null;
  }
  return existing ?? null;
}

function openPopupWindow(windowId: string, width: number, height: number) {
  const safeName = `qa_devtools_${windowId.replace(/[^a-z0-9_-]/gi, "_")}`;
  return window.open(
    "",
    safeName,
    `popup=yes,width=${Math.round(width)},height=${Math.round(height)},resizable=yes,scrollbars=no`,
  );
}

function installDevToolsStyles(targetWindow: Window) {
  const host = document.getElementById("qa-devtools-package-root");
  const shadowStyles = host?.shadowRoot?.querySelectorAll("style");

  shadowStyles?.forEach((source) => {
    const style = targetWindow.document.createElement("style");
    style.textContent = source.textContent;
    targetWindow.document.head.appendChild(style);
  });

  for (const styleSheet of Array.from(document.styleSheets)) {
    try {
      const css = Array.from(styleSheet.cssRules)
        .map((rule) => rule.cssText)
        .join("\n");
      const style = targetWindow.document.createElement("style");
      style.textContent = css;
      targetWindow.document.head.appendChild(style);
    } catch {
      if (!styleSheet.href) continue;
      const link = targetWindow.document.createElement("link");
      link.rel = "stylesheet";
      link.href = styleSheet.href;
      targetWindow.document.head.appendChild(link);
    }
  }
}

export const FloatingWindow = forwardRef<FloatingWindowHandle, FloatingWindowProps>(
function FloatingWindow({
    windowId: configuredWindowId,
    title,
    children,
    renderTrigger,
    width = 1080,
    height = 760,
    dark = false,
    colorTheme = "classic",
    onClose,
  }, ref) {
  const [floatingWindow, setFloatingWindow] = useState<Window | null>(null);
  const [fallbackOpen, setFallbackOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const floatingWindowRef = useRef<Window | null>(null);
  const windowId = configuredWindowId ?? title;
  const isSupported = typeof window !== "undefined" && Boolean(window.documentPictureInPicture);

  const close = useCallback(() => {
    setFallbackOpen(false);
    setFloatingWindow((current) => {
      if (current) {
        if (externalWindows.get(windowId) === current) {
          externalWindows.delete(windowId);
        }
        if (!current.closed) current.close();
      }
      floatingWindowRef.current = null;
      return null;
    });
    onClose?.();
  }, [onClose, windowId]);

  const open = useCallback(() => {
    if (openingWindowIds.has(windowId)) return;
    const registeredWindow = getOpenExternalWindow(windowId);
    if (registeredWindow) {
      floatingWindowRef.current = registeredWindow;
      setFloatingWindow(registeredWindow);
      registeredWindow.focus();
      return;
    }

    if (floatingWindow && !floatingWindow.closed) {
      floatingWindow.focus();
      return;
    }

    const api = window.documentPictureInPicture;
    setIsOpening(true);
    openingWindowIds.add(windowId);
    const nativeWindowAvailable = Boolean(api && !api.window && !nativePictureInPictureOpening);
    const windowPromise = nativeWindowAvailable
      ? (() => {
          nativePictureInPictureOpening = true;
          return api!.requestWindow({
        width,
        height,
        disallowReturnToOpener: false,
        preferInitialWindowPlacement: false,
          });
        })()
      : Promise.resolve(openPopupWindow(windowId, width, height));

    void windowPromise
      .then((pipWindow) => {
        if (!pipWindow) {
          setFallbackOpen(true);
          return;
        }
        pipWindow.document.title = title;
        installDevToolsStyles(pipWindow);
        Object.assign(pipWindow.document.body.style, {
          margin: "0",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        });
        pipWindow.addEventListener(
          "pagehide",
          () => {
            if (externalWindows.get(windowId) === pipWindow) {
              externalWindows.delete(windowId);
            }
            floatingWindowRef.current = null;
            setFloatingWindow(null);
            onClose?.();
          },
          { once: true },
        );
        externalWindows.set(windowId, pipWindow);
        floatingWindowRef.current = pipWindow;
        setFloatingWindow(pipWindow);
      })
      .catch(() => setFallbackOpen(true))
      .finally(() => {
        openingWindowIds.delete(windowId);
        if (nativeWindowAvailable) nativePictureInPictureOpening = false;
        setIsOpening(false);
      });
  }, [floatingWindow, height, onClose, title, width, windowId]);

  useImperativeHandle(ref, () => ({ open, close }), [close, open]);

  useEffect(
    () => () => {
      const current = floatingWindowRef.current;
      if (current && !current.closed) current.close();
      floatingWindowRef.current = null;
    },
    [],
  );

  useEffect(() => {
    if (!floatingWindow) return;
    const body = floatingWindow.document.body;
    body.classList.add("qa-devtools-pip-body");
    body.classList.toggle("dark", dark);
    body.dataset.colorTheme = colorTheme;
    const root = body.querySelector<HTMLElement>(".qa-devtools-pip-root");
    if (!root) return;
    const computed = floatingWindow.getComputedStyle(root);
    [
      "--background", "--foreground", "--card", "--card-foreground",
      "--popover", "--popover-foreground", "--primary", "--primary-foreground",
      "--secondary", "--secondary-foreground", "--muted", "--muted-foreground",
      "--accent", "--accent-foreground", "--destructive", "--destructive-foreground",
      "--success", "--success-foreground", "--warning", "--warning-foreground",
      "--info", "--info-foreground", "--special", "--special-foreground",
      "--border", "--input", "--input-background", "--switch-background",
      "--overlay", "--shadow-color", "--ring",
    ].forEach(name => body.style.setProperty(name, computed.getPropertyValue(name)));
  }, [colorTheme, dark, floatingWindow]);

  const content = (
    <div data-color-theme={colorTheme} className={`qa-devtools-pip-root${dark ? " dark" : ""}`}>
      {children(close, floatingWindow?.document ?? document)}
    </div>
  );

  return (
    <>
      <span
        className="contents"
        data-floating-open={Boolean(floatingWindow) || fallbackOpen}
        data-floating-opening={isOpening}
        data-floating-supported={isSupported}
      >
        {renderTrigger?.(open, {
          isOpen: Boolean(floatingWindow) || fallbackOpen,
          isOpening,
          isSupported,
        })}
      </span>
      {floatingWindow && createPortal(content, floatingWindow.document.body)}
      {fallbackOpen && content}
    </>
  );
});
