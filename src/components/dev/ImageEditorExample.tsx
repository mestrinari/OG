import { useCallback, useRef, useState } from "react";
import { ImageIcon } from "lucide-react";
import { StyleSheetManager } from "styled-components";
import { ImageEditorModal } from "./ImageEditorModal";
import {
  FloatingWindow,
  type FloatingWindowHandle,
} from "./PictureInPictureOptions";
import { stageTicketImageEvidence, type TicketImageEvidence } from "./ticketImageEvidence";

export function ImageEditorExample({ dark = false, colorTheme = "classic" }: { dark?: boolean; colorTheme?: string }) {
  const [editorOpen, setEditorOpen] = useState(false);
  const editorWindowRef = useRef<FloatingWindowHandle>(null);

  const openEditor = useCallback(() => {
    editorWindowRef.current?.open();
    setEditorOpen(true);
  }, []);

  const exportImage = useCallback((dataUrl: string) => {
    const link = document.createElement("a");
    link.download = `editada_${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
  }, []);

  const closeEditor = useCallback(() => {
    setEditorOpen(false);
    editorWindowRef.current?.close();
  }, []);

  const sendToTicket = useCallback((evidence: TicketImageEvidence) => {
    stageTicketImageEvidence(evidence);
    // closeEditor();
  }, [closeEditor]);

  return (
    <FloatingWindow
      ref={editorWindowRef}
      windowId="image-editor"
      title="Editor de Imagem"
      width={1440}
      height={960}
      dark={dark}
      colorTheme={colorTheme}
      onClose={() => setEditorOpen(false)}
      renderTrigger={(_, state) => (
        <button
          type="button"
          onClick={openEditor}
          disabled={state.isOpening}
          aria-label="Abrir editor de imagem"
          title="Abrir editor de imagem em Picture-in-Picture"
          className="relative flex items-center gap-2 rounded-full border border-emerald-500/40 bg-card px-3 py-2.5 text-emerald-400 shadow-2xl shadow-black/30 transition-colors hover:bg-emerald-500/10 disabled:opacity-60"
        >
          <ImageIcon size={16} />
          <span className="text-[10px] font-mono font-semibold">IMAGEM</span>
        </button>
      )}
    >
      {(_, targetDocument) => (
        <StyleSheetManager target={targetDocument.head}>
          <ImageEditorModal
            open={editorOpen}
            portalContainer={targetDocument.body}
            onOpenChange={isOpen => {
              if (isOpen) setEditorOpen(true);
              else closeEditor();
            }}
            initialImage={null}
            onExport={exportImage}
            onConfirm={closeEditor}
            onSendToTicket={sendToTicket}
          />
        </StyleSheetManager>
      )}
    </FloatingWindow>
  );
}
