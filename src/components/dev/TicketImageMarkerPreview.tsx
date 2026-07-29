import { useState } from "react";
import type { CanvasItem } from "./ImageEditorModal";
import type { TicketImageStep } from "./ticketImageEvidence";

export function TicketImageMarkerPreview({
  evidenceId,
  src,
  alt,
  steps,
  editorItems = [],
  width,
  height,
  onImageClick,
}: {
  evidenceId: string;
  src: string;
  alt: string;
  steps: TicketImageStep[];
  editorItems?: CanvasItem[];
  width?: number | null;
  height?: number | null;
  onImageClick?: () => void;
}) {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const maskId = `editor-mask-${evidenceId.replace(/[^a-zA-Z0-9_-]/g, "-")}`;

  return <div className="relative overflow-visible rounded border border-border bg-black/40">
    <img
      src={src}
      alt={alt}
      className={onImageClick ? "block h-auto w-full cursor-zoom-in rounded" : "block h-auto w-full rounded"}
      onClick={onImageClick}
    />
    {width && height && editorItems.length > 0 && <svg
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <mask id={maskId}>
          <rect width={width} height={height} fill="white" />
          {editorItems.map(item => item.tool === "eraser" ? <polyline key={item.id} points={item.points.map(point => `${point.x},${point.y}`).join(" ")} fill="none" stroke="black" strokeWidth={item.width} strokeLinecap="round" strokeLinejoin="round" /> : null)}
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        {editorItems.map(item => {
          if (item.tool === "pen") return <polyline key={item.id} points={item.points.map(point => `${point.x},${point.y}`).join(" ")} fill="none" stroke={item.color} strokeWidth={item.width} strokeLinecap="round" strokeLinejoin="round" />;
          if (item.tool === "rectangle") return <rect key={item.id} x={item.x} y={item.y} width={item.width} height={item.height} fill={item.fillColor} fillOpacity={item.fillOpacity} stroke={item.strokeColor} strokeWidth={item.strokeWidth} transform={`rotate(${item.rotation} ${item.x + item.width / 2} ${item.y + item.height / 2})`} />;
          if (item.tool === "text") return <text key={item.id} x={item.x} y={item.y} fill={item.color} fontSize={item.fontSize} fontWeight={item.fontWeight} transform={`rotate(${item.rotation} ${item.x} ${item.y})`}>{item.text}</text>;
          return null;
        })}
      </g>
    </svg>}
    {steps.flatMap((step, stepIndex) =>
      step.markers.map(marker => {
        const hoverId = `${evidenceId}:${step.id}:${marker.id}`;
        return <button
          type="button"
          key={marker.id}
          aria-label={`${step.code}: ${step.name}`}
          onMouseEnter={() => setHoveredMarker(hoverId)}
          onMouseLeave={() => setHoveredMarker(null)}
          onFocus={() => setHoveredMarker(hoverId)}
          onBlur={() => setHoveredMarker(null)}
          className="absolute z-10 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white shadow-lg transition-transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
          style={{ left: `${marker.xPercent}%`, top: `${marker.yPercent}%`, background: step.color }}
        >
          {stepIndex + 1}
          {hoveredMarker === hoverId && <span
            className="pointer-events-none absolute min-w-56 max-w-none whitespace-pre-wrap rounded border border-white/20 bg-slate-950/95 p-3 text-left text-[10px] font-normal leading-relaxed text-white shadow-2xl"
            style={{
              zIndex: 2147483647,
              width: "max-content",
              ...(marker.yPercent > 55
                ? { bottom: "calc(100% + 8px)", top: "auto" }
                : { top: "calc(100% + 8px)", bottom: "auto" }),
              ...(marker.xPercent > 65
                ? { right: 0, left: "auto", transform: "none" }
                : marker.xPercent < 35
                  ? { left: 0, right: "auto", transform: "none" }
                  : { left: "50%", right: "auto", transform: "translateX(-50%)" }),
            }}
          >
            <strong className="block" style={{ color: step.color }}>{step.code} · {step.name}</strong>
            <span className="mt-1 block whitespace-pre-wrap break-words text-slate-300">{step.description || "Sem descrição."}</span>
          </span>}
        </button>;
      }),
    )}
  </div>;
}
