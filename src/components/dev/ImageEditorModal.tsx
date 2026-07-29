import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  type PointerEvent as ReactPointerEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { Button } from "./ui/Button";
import styled from "styled-components";
import {
  Pencil,
  Square,
  Type,
  Scissors,
  Undo2,
  Redo2,
  Download,
  Upload,
  Trash2,
  X,
  MousePointer2,
  Eraser,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Send,
} from "lucide-react";
import type { TicketImageEvidence } from "./ticketImageEvidence";

/* ════════════════════════════════════════════════
   TYPES
   ════════════════════════════════════════════════ */

export type Tool =
  | "select"
  | "pen"
  | "rectangle"
  | "text"
  | "crop"
  | "eraser";

export interface DrawPoint {
  x: number;
  y: number;
  color: string;
  width: number;
}

export interface Stroke {
  id: string;
  trackingStepId?: string;
  tool: "pen" | "eraser";
  points: DrawPoint[];
  color: string;
  width: number;
}

export interface RectShape {
  id: string;
  trackingStepId?: string;
  tool: "rectangle";
  x: number;
  y: number;
  width: number;
  height: number;
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  fillOpacity: number;
  rotation: number;
}

export interface TextShape {
  id: string;
  trackingStepId?: string;
  tool: "text";
  x: number;
  y: number;
  text: string;
  color: string;
  fontSize: number;
  fontWeight: "normal" | "bold";
  rotation: number;
}

export type CanvasItem = Stroke | RectShape | TextShape;

export interface TrackingStep {
  id: string;
  code: string;
  name: string;
  description: string;
  color: string;
}

export interface ImageEditorProps {
  /** Whether the dialog is open */
  open: boolean;
  /** Callback to close */
  onOpenChange: (open: boolean) => void;
  /** Initial image URL / dataURL to edit */
  initialImage?: string | null;
  /** Existing non-destructive objects restored over the base image. */
  initialItems?: CanvasItem[];
  /** Existing tracking labels restored with the editable objects. */
  initialTrackingSteps?: TrackingStep[];
  /** Called when user clicks "Export" with the final dataURL */
  onExport?: (dataUrl: string) => void;
  /** Called when user clicks "Confirmar" (e.g. for a ticket attachment) */
  onConfirm?: (dataUrl: string) => void;
  /** Returns the base image and its editable vector layer separately. */
  onConfirmDocument?: (evidence: TicketImageEvidence) => void;
  /** Sends the edited image and its tracked steps to the new-ticket flow. */
  onSendToTicket?: (evidence: TicketImageEvidence) => void;
  /** Contextual label for the action that persists the editor document. */
  sendToTicketLabel?: string;
  /** Hides the standalone PNG download when the editor is bound to an open ticket. */
  hideExport?: boolean;
  /** Element that receives the Radix portal (used by Picture-in-Picture). */
  portalContainer?: HTMLElement | null;
}

/* ════════════════════════════════════════════════
   RESIZE HANDLE TYPES
   ════════════════════════════════════════════════ */

export type ResizeHandle =
  | "nw"
  | "n"
  | "ne"
  | "e"
  | "se"
  | "s"
  | "sw"
  | "w";

interface ResizeState {
  handle: ResizeHandle;
  startMouse: { x: number; y: number };
  startBounds: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

interface RotateState {
  startMouse: { x: number; y: number };
  startRotation: number;
  centerX: number;
  centerY: number;
}

/* ════════════════════════════════════════════════
   CONSTANTS
   ════════════════════════════════════════════════ */

const PALETTE_COLORS = [
  "#FF0000",
  "#00BFFF",
  "#00FF00",
  "#FFD700",
  "#FF00FF",
];

const DEFAULT_STROKE_WIDTH = 3;
const DEFAULT_FONT_SIZE = 24;
const MIN_CROP_DIM = 50;
const MIN_ZOOM = 0.1;
const MAX_ZOOM = 3;
const MAX_IMAGE_BYTES = 20 * 1024 * 1024;
const HANDLE_SIZE = 10;
const HANDLE_HIT = 8;
const ROTATE_HANDLE_OFFSET = 28;

/* ════════════════════════════════════════════════
   UTILS
   ════════════════════════════════════════════════ */

let _id = 0;
const uid = () => `item_${++_id}_${Date.now()}`;

const toRad = (deg: number) => (deg * Math.PI) / 180;
const toDeg = (rad: number) => (rad * 180) / Math.PI;

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

function pointInTransformedRect(
  px: number,
  py: number,
  rx: number,
  ry: number,
  rw: number,
  rh: number,
  rotation: number,
  tolerance = 4
): boolean {
  const cx = rx + rw / 2;
  const cy = ry + rh / 2;
  const rad = toRad(-rotation);
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const lx = (px - cx) * cos - (py - cy) * sin + cx;
  const ly = (px - cx) * sin + (py - cy) * cos + cy;
  return (
    lx >= rx - tolerance &&
    lx <= rx + rw + tolerance &&
    ly >= ry - tolerance &&
    ly <= ry + rh + tolerance
  );
}

function pointInStroke(
  px: number,
  py: number,
  stroke: Stroke,
  tolerance = 8
): boolean {
  for (const p of stroke.points) {
    if (Math.abs(px - p.x) <= tolerance && Math.abs(py - p.y) <= tolerance)
      return true;
  }
  return false;
}

function pointInText(
  px: number,
  py: number,
  text: TextShape,
  ctx: CanvasRenderingContext2D,
  tolerance = 4
): boolean {
  ctx.save();
  ctx.font = `${text.fontWeight === "bold" ? "bold" : "normal"} ${text.fontSize}px sans-serif`;
  const metrics = ctx.measureText(text.text);
  const tw = metrics.width;
  const th = text.fontSize;
  ctx.restore();
  return pointInTransformedRect(px, py, text.x, text.y - th, tw, th, text.rotation, tolerance);
}

function getTextDimensions(
  text: TextShape,
  ctx: CanvasRenderingContext2D
): { w: number; h: number } {
  ctx.save();
  ctx.font = `${text.fontWeight === "bold" ? "bold" : "normal"} ${text.fontSize}px sans-serif`;
  const metrics = ctx.measureText(text.text);
  ctx.restore();
  return { w: metrics.width, h: text.fontSize };
}

function getSelectableBounds(
  item: RectShape | TextShape,
  ctx: CanvasRenderingContext2D
) {
  if (item.tool === "rectangle") {
    return {
      x: item.x,
      y: item.y,
      width: item.width,
      height: item.height,
      rotation: item.rotation,
    };
  }

  const dimensions = getTextDimensions(item, ctx);
  return {
    x: item.x,
    y: item.y - dimensions.h,
    width: dimensions.w,
    height: dimensions.h,
    rotation: item.rotation,
  };
}

function hitTestResizeHandle(
  px: number,
  py: number,
  x: number,
  y: number,
  w: number,
  h: number,
  rotation: number,
  tolerance = HANDLE_HIT
): ResizeHandle | null {
  const cx = x + w / 2;
  const cy = y + h / 2;
  const cos = Math.cos(toRad(rotation));
  const sin = Math.sin(toRad(rotation));

  const handles: { key: ResizeHandle; localX: number; localY: number }[] = [
    { key: "nw", localX: x, localY: y },
    { key: "n", localX: x + w / 2, localY: y },
    { key: "ne", localX: x + w, localY: y },
    { key: "e", localX: x + w, localY: y + h / 2 },
    { key: "se", localX: x + w, localY: y + h },
    { key: "s", localX: x + w / 2, localY: y + h },
    { key: "sw", localX: x, localY: y + h },
    { key: "w", localX: x, localY: y + h / 2 },
  ];

  for (const handle of handles) {
    const hx = (handle.localX - cx) * cos - (handle.localY - cy) * sin + cx;
    const hy = (handle.localX - cx) * sin + (handle.localY - cy) * cos + cy;
    if (Math.abs(px - hx) <= tolerance && Math.abs(py - hy) <= tolerance) {
      return handle.key;
    }
  }
  return null;
}

function hitTestRotateHandle(
  px: number,
  py: number,
  x: number,
  y: number,
  w: number,
  h: number,
  rotation: number,
  tolerance = 10
): boolean {
  const cx = x + w / 2;
  const cy = y + h / 2;
  const cos = Math.cos(toRad(rotation));
  const sin = Math.sin(toRad(rotation));
  const handleLocalX = cx;
  const handleLocalY = y - ROTATE_HANDLE_OFFSET;
  const hx = (handleLocalX - cx) * cos - (handleLocalY - cy) * sin + cx;
  const hy = (handleLocalX - cx) * sin + (handleLocalY - cy) * cos + cy;
  return (
    Math.abs(px - hx) <= tolerance && Math.abs(py - hy) <= tolerance
  );
}

function applyResize(
  bounds: { x: number; y: number; width: number; height: number },
  handle: ResizeHandle,
  dx: number,
  dy: number,
  rotation: number
): { x: number; y: number; width: number; height: number } {
  const rad = toRad(-rotation);
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);

  const localDx = dx * cos - dy * sin;
  const localDy = dx * sin + dy * cos;

  let { x, y, width, height } = bounds;

  switch (handle) {
    case "nw":
      x += localDx; y += localDy; width -= localDx; height -= localDy; break;
    case "n":
      y += localDy; height -= localDy; break;
    case "ne":
      width += localDx; y += localDy; height -= localDy; break;
    case "e":
      width += localDx; break;
    case "se":
      width += localDx; height += localDy; break;
    case "s":
      height += localDy; break;
    case "sw":
      x += localDx; width -= localDx; height += localDy; break;
    case "w":
      x += localDx; width -= localDx; break;
  }

  if (width < 5) {
    if (handle === "nw" || handle === "sw" || handle === "w") x += width - 5;
    width = 5;
  }
  if (height < 5) {
    if (handle === "nw" || handle === "n" || handle === "ne") y += height - 5;
    height = 5;
  }

  return { x, y, width, height };
}

function wrapCanvasText(
  ctx: CanvasRenderingContext2D,
  value: string,
  maxWidth: number,
  maxLines = 3,
) {
  const words = value.trim().split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (ctx.measureText(candidate).width <= maxWidth || !current) {
      current = candidate;
      continue;
    }
    lines.push(current);
    current = word;
    if (lines.length === maxLines - 1) break;
  }
  if (current && lines.length < maxLines) lines.push(current);
  if (lines.length === maxLines && words.join(" ") !== lines.join(" ")) {
    let last = lines[maxLines - 1];
    while (last.length > 1 && ctx.measureText(`${last}…`).width > maxWidth) {
      last = last.slice(0, -1);
    }
    lines[maxLines - 1] = `${last}…`;
  }
  return lines;
}

function getTrackingAnchor(item: CanvasItem, ctx: CanvasRenderingContext2D) {
  if (item.tool === "rectangle") return { x: item.x, y: item.y };
  if (item.tool === "text") {
    const dimensions = getTextDimensions(item, ctx);
    return { x: item.x, y: item.y - dimensions.h };
  }
  const points = item.points;
  return {
    x: Math.min(...points.map(point => point.x)),
    y: Math.min(...points.map(point => point.y)),
  };
}

function applyTrackingColorToItem(item: CanvasItem, color: string): CanvasItem {
  if (item.tool === "eraser") return item;
  if (item.tool === "pen") {
    return {
      ...item,
      color,
      points: item.points.map(point => ({ ...point, color })),
    };
  }
  if (item.tool === "rectangle") {
    return {
      ...item,
      strokeColor: color,
      fillColor: item.fillColor === "transparent" ? "transparent" : color,
    };
  }
  return { ...item, color };
}

function getCanvasItemLabel(item: CanvasItem, index: number) {
  if (item.tool === "pen") return `Traço ${index + 1}`;
  if (item.tool === "eraser") return `Borracha ${index + 1}`;
  if (item.tool === "rectangle") return `Retângulo ${index + 1}`;
  if (item.tool === "text") return item.text.trim() || `Texto ${index + 1}`;
  return `Item ${index + 1}`;
}

function getCanvasItemColor(item: CanvasItem) {
  if (item.tool === "rectangle") return item.strokeColor;
  if (item.tool === "eraser") return "#64748b";
  return item.color;
}

function drawTrackingExportOverlay(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  steps: TrackingStep[],
  items: CanvasItem[],
) {
  const trackedSteps = steps
    .map(step => ({
      step,
      items: items.filter(item => item.tool !== "eraser" && item.trackingStepId === step.id),
    }))
    .filter(entry => entry.items.length > 0);
  if (!trackedSteps.length) return;

  const fontSize = clamp(Math.round(width / 85), 11, 20);
  const padding = Math.max(8, fontSize);
  const badgeRadius = Math.max(9, Math.round(fontSize * 0.9));

  trackedSteps.forEach((entry, index) => {
    entry.items.forEach(item => {
      const anchor = getTrackingAnchor(item, ctx);
      const x = clamp(anchor.x, badgeRadius + 2, width - badgeRadius - 2);
      const y = clamp(anchor.y, badgeRadius + 2, height - badgeRadius - 2);
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, badgeRadius, 0, Math.PI * 2);
      ctx.fillStyle = entry.step.color;
      ctx.fill();
      ctx.lineWidth = Math.max(2, fontSize / 7);
      ctx.strokeStyle = "#ffffff";
      ctx.stroke();
      ctx.fillStyle = "#ffffff";
      ctx.font = `bold ${fontSize}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(String(index + 1), x, y + 0.5);
      ctx.restore();
    });
  });

  const panelWidth = Math.max(
    1,
    Math.min(width - padding * 2, Math.max(240, Math.round(width * 0.4))),
  );
  const lineHeight = Math.round(fontSize * 1.35);
  const contentWidth = Math.max(1, panelWidth - padding * 3 - badgeRadius * 2);
  const rows = trackedSteps.map(entry => {
    ctx.save();
    ctx.font = `${fontSize}px sans-serif`;
    const descriptionLines = entry.step.description
      ? wrapCanvasText(ctx, entry.step.description, contentWidth, 3)
      : [];
    ctx.restore();
    return {
      ...entry,
      descriptionLines,
      height: lineHeight + descriptionLines.length * lineHeight + padding,
    };
  });
  const titleHeight = lineHeight + padding;
  const requestedHeight = titleHeight + rows.reduce((sum, row) => sum + row.height, 0) + padding;
  const panelHeight = Math.min(height - padding * 2, requestedHeight);
  const panelX = width - panelWidth - padding;
  const panelY = padding;

  ctx.save();
  ctx.fillStyle = "rgba(10, 15, 30, 0.86)";
  ctx.fillRect(panelX, panelY, panelWidth, panelHeight);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
  ctx.lineWidth = 1;
  ctx.strokeRect(panelX, panelY, panelWidth, panelHeight);
  ctx.beginPath();
  ctx.rect(panelX, panelY, panelWidth, panelHeight);
  ctx.clip();

  let cursorY = panelY + padding;
  ctx.fillStyle = "#ffffff";
  ctx.font = `bold ${fontSize}px sans-serif`;
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("RASTREAMENTO DA EDIÇÃO", panelX + padding, cursorY);
  cursorY += titleHeight;

  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    if (cursorY + lineHeight > panelY + panelHeight - padding) break;
    const markerX = panelX + padding + badgeRadius;
    const markerY = cursorY + badgeRadius;
    ctx.beginPath();
    ctx.arc(markerX, markerY, badgeRadius, 0, Math.PI * 2);
    ctx.fillStyle = row.step.color;
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(String(index + 1), markerX, markerY + 0.5);

    const textX = panelX + padding * 2 + badgeRadius * 2;
    ctx.fillStyle = "#ffffff";
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(`${row.step.code} · ${row.step.name}`, textX, cursorY);
    let descriptionY = cursorY + lineHeight;
    ctx.fillStyle = "rgba(255, 255, 255, 0.78)";
    ctx.font = `${fontSize}px sans-serif`;
    row.descriptionLines.forEach(line => {
      if (descriptionY + lineHeight <= panelY + panelHeight - padding) {
        ctx.fillText(line, textX, descriptionY);
      }
      descriptionY += lineHeight;
    });
    cursorY += row.height;
  }
  ctx.restore();
}

/* ════════════════════════════════════════════════
   STYLED COMPONENTS
   ════════════════════════════════════════════════ */

const Overlay = styled(DialogContent)`
  max-width: none !important;
  width: 96vw;
  height: 94vh;
  padding: 0 !important;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: var(--background);
  color: var(--foreground);
`;

const HeaderBar = styled(DialogHeader)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: var(--card);
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
`;

const HeaderTitle = styled(DialogTitle)`
  font-size: 16px;
  font-weight: 600;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TrackingWorkspaceBar = styled.section`
  flex-shrink: 0;
  display: grid;
  grid-template-columns: minmax(420px, 1.1fr) minmax(360px, 1fr);
  gap: 12px;
  padding: 10px 14px;
  background: var(--secondary);
  border-bottom: 1px solid var(--border);
  max-height: 220px;
  overflow-y: auto;
`;

const TrackingCreator = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, 0.5fr) minmax(150px, 0.8fr) minmax(180px, 1fr) auto auto;
  gap: 7px;
  align-items: center;
`;

const TrackingWorkspaceColumn = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const TrackingStepsRail = styled.div`
  display: flex;
  gap: 7px;
  overflow-x: auto;
  padding-bottom: 3px;
`;

const MainArea = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  position: relative;
`;

const Toolbar = styled.div`
  width: 56px;
  background: var(--secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  gap: 4px;
  flex-shrink: 0;
  overflow-y: auto;
`;

const ToolBtn = styled.button<{ $active?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${({ $active }) => ($active ? "var(--primary)" : "transparent")};
  color: ${({ $active }) => ($active ? "var(--primary-foreground)" : "var(--muted-foreground)")};
  transition: all 0.15s ease;
  &:hover {
    background: ${({ $active }) => ($active ? "var(--primary)" : "var(--muted)")};
    color: ${({ $active }) => ($active ? "var(--primary-foreground)" : "var(--foreground)")};
  }
`;

const Divider = styled.div`
  width: 32px;
  height: 1px;
  background: var(--border);
  margin: 4px 0;
`;

const CanvasArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--muted);
  position: relative;
  overflow: hidden;
  padding: 20px;
`;

const CanvasWrapper = styled.div`
  position: relative;
  box-shadow: 0 4px 40px var(--shadow-color);
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
`;

const RightPanel = styled.div`
  width: 280px;
  background: var(--secondary);
  border-left: 1px solid var(--border);
  padding: 12px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
`;

const PanelSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PanelLabel = styled.span`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--muted-foreground);
`;

const ColorSwatch = styled.button<{ $color: string; $active?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 2px solid ${({ $active }) => ($active ? "var(--foreground)" : "var(--border)")};
  background: ${({ $color }) => $color};
  cursor: pointer;
  transition: transform 0.1s;
  &:hover {
    transform: scale(1.1);
  }
`;

const ColorRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const SliderInput = styled.input`
  width: 100%;
  accent-color: var(--primary);
  cursor: pointer;
`;

const TextareaInput = styled.textarea`
  width: 100%;
  background: var(--input-background);
  color: var(--foreground);
  border: 1px solid var(--input);
  border-radius: 6px;
  padding: 8px;
  font-size: 13px;
  resize: vertical;
  min-height: 60px;
  font-family: sans-serif;
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const TextInput = styled.input`
  width: 100%;
  background: var(--input-background);
  color: var(--foreground);
  border: 1px solid var(--input);
  border-radius: 6px;
  padding: 7px 8px;
  font-size: 12px;
  font-family: sans-serif;
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const TrackingStepCard = styled.button<{ $active: boolean; $color: string }>`
  min-width: 170px;
  max-width: 240px;
  border: 1px solid ${({ $active, $color }) => ($active ? $color : "var(--border)")};
  border-left: 4px solid ${({ $color }) => $color};
  border-radius: 7px;
  padding: 8px;
  background: ${({ $active }) => ($active ? "var(--accent)" : "var(--card)")};
  color: var(--foreground);
  text-align: left;
  cursor: pointer;
`;

const CanvasItemCard = styled.button<{ $active: boolean; $color: string }>`
  width: 100%;
  display: grid;
  grid-template-columns: 10px minmax(0, 1fr) auto;
  gap: 7px;
  align-items: center;
  padding: 7px 8px;
  border: 1px solid ${({ $active }) => ($active ? "var(--primary)" : "var(--border)")};
  border-radius: 6px;
  background: ${({ $active }) => ($active ? "var(--accent)" : "var(--card)")};
  color: var(--foreground);
  text-align: left;
  cursor: pointer;
  &::before {
    content: "";
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ $color }) => $color};
  }
`;

const SelectInput = styled.select`
  width: 100%;
  background: var(--input-background);
  color: var(--foreground);
  border: 1px solid var(--input);
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 13px;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const BottomBar = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, 1fr) auto minmax(300px, 1fr);
  align-items: center;
  padding: 9px 14px;
  background: var(--card);
  border-top: 1px solid var(--border);
  flex-shrink: 0;
  gap: 12px;
`;

const FooterStatus = styled.div`
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--foreground);
  font-size: 11px;
`;

const FooterHint = styled.span`
  color: var(--muted-foreground);
  font-size: 10px;
  white-space: nowrap;
`;

const BottomActions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const DropZone = styled.div<{ $isOver: boolean }>`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, var(--primary) 10%, transparent);
  border: 2px dashed ${({ $isOver }) => ($isOver ? "var(--primary)" : "transparent")};
  border-radius: 8px;
  z-index: 10;
  transition: border-color 0.2s, background 0.2s;
`;

const DropLabel = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: var(--primary);
  text-align: center;
  line-height: 1.4;
`;

const ZoomBadge = styled.span`
  font-size: 12px;
  color: var(--muted-foreground);
  padding: 2px 8px;
  background: var(--muted);
  border-radius: 4px;
`;

const HiddenInput = styled.input`
  display: none;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  height: 100%;
  color: var(--muted-foreground);
`;

/* ════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════ */

export function ImageEditorModal({
  open,
  onOpenChange,
  initialImage = null,
  initialItems,
  initialTrackingSteps,
  onExport,
  onConfirm,
  onConfirmDocument,
  onSendToTicket,
  sendToTicketLabel = "Enviar para chamado",
  hideExport = false,
  portalContainer,
}: ImageEditorProps) {
  /* ── image ── */
  const [imageSrc, setImageSrc] = useState<string | null>(initialImage ?? null);
  const [imageDimensions, setImageDimensions] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  });

  /* ── tool ── */
  const [tool, setTool] = useState<Tool>("select");
  const [currentColor, setCurrentColor] = useState<string>(PALETTE_COLORS[0]);
  const [strokeWidth, setStrokeWidth] = useState<number>(DEFAULT_STROKE_WIDTH);
  const [fontSize, setFontSize] = useState<number>(DEFAULT_FONT_SIZE);
  const [fontWeight, setFontWeight] = useState<"normal" | "bold">("bold");
  const [rectFillColor, setRectFillColor] = useState<string>("transparent");
  const [rectStrokeColor, setRectStrokeColor] = useState<string>(PALETTE_COLORS[1]);
  const [rectFillOpacity, setRectFillOpacity] = useState<number>(0.15);

  /* ── items ── */
  const [items, setItems] = useState<CanvasItem[]>([]);
  const [history, setHistory] = useState<CanvasItem[][]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  /* ── tracked editing steps ── */
  const [trackingSteps, setTrackingSteps] = useState<TrackingStep[]>([]);
  const [activeTrackingStepId, setActiveTrackingStepId] = useState<string | null>(null);
  const [trackingCode, setTrackingCode] = useState("");
  const [trackingName, setTrackingName] = useState("");
  const [trackingDescription, setTrackingDescription] = useState("");
  const [trackingDraftColor, setTrackingDraftColor] = useState(PALETTE_COLORS[0]);
  const [trackingError, setTrackingError] = useState<string | null>(null);
  const [includeTrackingOverlay, setIncludeTrackingOverlay] = useState(true);

  /* ── drawing state ── */
  const [isDrawing, setIsDrawing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [currentStroke, setCurrentStroke] = useState<DrawPoint[]>([]);
  const [currentRect, setCurrentRect] = useState<RectShape | null>(null);

  /* ── resize / rotate ── */
  const [isResizing, setIsResizing] = useState(false);
  const [resizeState, setResizeState] = useState<ResizeState | null>(null);
  const [isRotating, setIsRotating] = useState(false);
  const [rotateState, setRotateState] = useState<RotateState | null>(null);

  /* ── crop ── */
  const [cropArea, setCropArea] = useState<{
    x: number; y: number; w: number; h: number;
  } | null>(null);
  const [isCropDragging, setIsCropDragging] = useState(false);
  const [cropDragStart, setCropDragStart] = useState<{ x: number; y: number } | null>(null);

  /* ── text input ── */
  const [textInput, setTextInput] = useState("");

  /* ── ui ── */
  const [isDragOver, setIsDragOver] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [imageError, setImageError] = useState<string | null>(null);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasAreaRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const sourceImageRef = useRef<HTMLImageElement>(null);

  const applyTrackingColor = useCallback((color: string) => {
    setCurrentColor(color);
    setRectStrokeColor(color);
    if (activeTrackingStepId) {
      setTrackingSteps(previous => previous.map(step =>
        step.id === activeTrackingStepId ? { ...step, color } : step,
      ));
      setItems(previous => previous.map(item =>
        item.trackingStepId === activeTrackingStepId
          ? applyTrackingColorToItem(item, color)
          : item,
      ));
      setHistory(previous => previous.map(snapshot => snapshot.map(item =>
        item.trackingStepId === activeTrackingStepId
          ? applyTrackingColorToItem(item, color)
          : item,
      )));
      setCurrentRect(previous =>
        previous?.trackingStepId === activeTrackingStepId
          ? applyTrackingColorToItem(previous, color) as RectShape
          : previous,
      );
    }
  }, [activeTrackingStepId]);

  const activateTrackingStep = useCallback((step: TrackingStep) => {
    setActiveTrackingStepId(step.id);
    setCurrentColor(step.color);
    setRectStrokeColor(step.color);
    setTrackingError(null);
  }, []);

  const createTrackingStep = useCallback(() => {
    const code = trackingCode.trim();
    const name = trackingName.trim();
    if (!code || !name) {
      setTrackingError("Informe um ID e um nome para o passo.");
      return;
    }
    if (trackingSteps.some(step => step.code.toLocaleLowerCase("pt-BR") === code.toLocaleLowerCase("pt-BR"))) {
      setTrackingError("Já existe um passo com esse ID.");
      return;
    }
    const step: TrackingStep = {
      id: `tracking_${uid()}`,
      code,
      name,
      description: trackingDescription.trim(),
      color: trackingDraftColor,
    };
    setTrackingSteps(previous => [...previous, step]);
    setActiveTrackingStepId(step.id);
    setCurrentColor(step.color);
    setRectStrokeColor(step.color);
    setTrackingCode("");
    setTrackingName("");
    setTrackingDescription("");
    setTrackingError(null);
  }, [trackingCode, trackingDescription, trackingDraftColor, trackingName, trackingSteps]);

  /* ── history helper ── */
  const pushHistory = useCallback(
    (newItems: CanvasItem[]) => {
      setHistory((prev) => {
        const sliced = prev.slice(0, historyIndex + 1);
        sliced.push(newItems);
        return sliced.slice(-50);
      });
      setHistoryIndex((prev) => Math.min(prev + 1, 49));
      setItems(newItems);
    },
    [historyIndex]
  );

  const undo = useCallback(() => {
    if (historyIndex <= 0) return;
    const prevIndex = historyIndex - 1;
    setHistoryIndex(prevIndex);
    setItems(history[prevIndex]);
    setSelectedId(null);
  }, [historyIndex, history]);

  const redo = useCallback(() => {
    if (historyIndex >= history.length - 1) return;
    const nextIndex = historyIndex + 1;
    setHistoryIndex(nextIndex);
    setItems(history[nextIndex]);
    setSelectedId(null);
  }, [historyIndex, history]);

  /* ── load initial image ── */
  const loadImage = useCallback((src: string, nextItems: CanvasItem[] = [], nextTrackingSteps: TrackingStep[] = []) => {
    const img = new Image();
    setIsLoadingImage(true);
    setImageError(null);
    if (!src.startsWith("data:") && !src.startsWith("blob:")) {
      img.crossOrigin = "anonymous";
    }
    img.onload = () => {
      sourceImageRef.current = img;
      setImageDimensions({ w: img.naturalWidth, h: img.naturalHeight });
      setImageSrc(src);
      setItems(nextItems);
      setHistory([nextItems]);
      setHistoryIndex(0);
      setSelectedId(null);
      setTrackingSteps(nextTrackingSteps);
      setActiveTrackingStepId(null);
      setTrackingCode("");
      setTrackingName("");
      setTrackingDescription("");
      setTrackingDraftColor(PALETTE_COLORS[0]);
      setTrackingError(null);
      setCropArea(null);
      setIsLoadingImage(false);
    };
    img.onerror = () => {
      setIsLoadingImage(false);
      setImageError(
        "Não foi possível abrir a imagem. Verifique o arquivo ou a permissão CORS da URL.",
      );
    };
    img.src = src;
  }, []);

  const resetEditor = useCallback(() => {
    setImageSrc(null);
    sourceImageRef.current = null;
    setImageDimensions({ w: 0, h: 0 });
    setItems([]);
    setHistory([[]]);
    setHistoryIndex(0);
    setSelectedId(null);
    setTrackingSteps([]);
    setActiveTrackingStepId(null);
    setTrackingCode("");
    setTrackingName("");
    setTrackingDescription("");
    setTrackingDraftColor(PALETTE_COLORS[0]);
    setTrackingError(null);
    setCropArea(null);
    setCurrentStroke([]);
    setCurrentRect(null);
    setTool("select");
    setZoom(1);
    setImageError(null);
    setIsLoadingImage(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    if (initialImage) loadImage(initialImage, initialItems ?? [], initialTrackingSteps ?? []);
    else resetEditor();
  }, [initialImage, initialItems, initialTrackingSteps, loadImage, open, resetEditor]);

  const fitImageToArea = useCallback(() => {
    const area = canvasAreaRef.current;
    if (!area || !imageDimensions.w || !imageDimensions.h) return;
    const availableWidth = Math.max(1, area.clientWidth - 40);
    const availableHeight = Math.max(1, area.clientHeight - 40);
    setZoom(
      clamp(
        Math.min(
          1,
          availableWidth / imageDimensions.w,
          availableHeight / imageDimensions.h,
        ),
        MIN_ZOOM,
        MAX_ZOOM,
      ),
    );
  }, [imageDimensions.h, imageDimensions.w]);

  useEffect(() => {
    if (!open || !imageSrc) return;
    const frame = window.requestAnimationFrame(fitImageToArea);
    const area = canvasAreaRef.current;
    const observer =
      area && typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(fitImageToArea)
        : null;
    if (area && observer) observer.observe(area);
    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [fitImageToArea, imageSrc, open]);

  /* ── file handling ── */
  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) {
        setImageError("Selecione um arquivo de imagem válido.");
        return;
      }
      if (file.size > MAX_IMAGE_BYTES) {
        setImageError("A imagem deve ter no máximo 20 MB.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        loadImage(result);
      };
      reader.onerror = () =>
        setImageError("Não foi possível ler o arquivo selecionado.");
      reader.readAsDataURL(file);
    },
    [loadImage]
  );

  /* ── clipboard paste ── */
  const handlePaste = useCallback(
    (e: ClipboardEvent) => {
      const items = e.clipboardData!.items;
      for (const item of items) {
        if (item.type.startsWith("image/")) {
          const file = item.getAsFile();
          if (file) handleFile(file);
          break;
        }
      }
    },
    [handleFile]
  );

  useEffect(() => {
    if (open) {
      const targetDocument = portalContainer?.ownerDocument ?? document;
      targetDocument.addEventListener("paste", handlePaste);
      return () => targetDocument.removeEventListener("paste", handlePaste);
    }
  }, [open, handlePaste, portalContainer]);

  /* ── keyboard shortcuts ── */
  const handleKeyDown = useCallback(
    (e: ReactKeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isFormControl = target.matches("input, textarea, select, [contenteditable='true']");
      if (isFormControl && e.key !== "Escape") return;
      if ((e.metaKey || e.ctrlKey) && e.key === "z") {
        e.preventDefault();
        if (e.shiftKey) redo();
        else undo();
      }
      if (e.key === "Delete" && selectedId) {
        const newItems = items.filter((it) => it.id !== selectedId);
        pushHistory(newItems);
        setSelectedId(null);
      }
      if (e.key === "Escape") {
        setSelectedId(null);
        setCurrentRect(null);
        setCropArea(null);
      }
      if (e.key === "r" && selectedId && !e.ctrlKey && !e.metaKey) {
        const newItems = items.map((item) => {
          if (item.id !== selectedId) return item;
          if (item.tool === "rectangle" || item.tool === "text") {
            return { ...item, rotation: (item.rotation + 15) % 360 };
          }
          return item;
        });
        pushHistory(newItems);
      }
    },
    [undo, redo, selectedId, items, pushHistory]
  );

  /* ── canvas coordinate helpers ── */
  const getCanvasCoords = useCallback(
    (e: { clientX: number; clientY: number }): { x: number; y: number } => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return { x: 0, y: 0 };
      const rect = wrapper.getBoundingClientRect();
      return {
        x: clamp((e.clientX - rect.left) / zoom, 0, imageDimensions.w),
        y: clamp((e.clientY - rect.top) / zoom, 0, imageDimensions.h),
      };
    },
    [imageDimensions.h, imageDimensions.w, zoom]
  );

  /* ── draw helpers ── */
  function drawStroke(ctx: CanvasRenderingContext2D, stroke: Stroke) {
    if (stroke.points.length < 2) return;
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = stroke.width;
    if (stroke.tool === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.strokeStyle = "rgba(0,0,0,1)";
    } else {
      ctx.strokeStyle = stroke.color;
    }
    ctx.beginPath();
    ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
    for (let i = 1; i < stroke.points.length; i++) {
      ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
    }
    ctx.stroke();
    ctx.restore();
  }

  function drawRect(ctx: CanvasRenderingContext2D, rect: RectShape) {
    ctx.save();
    const cx = rect.x + rect.width / 2;
    const cy = rect.y + rect.height / 2;
    ctx.translate(cx, cy);
    ctx.rotate(toRad(rect.rotation));
    ctx.lineWidth = rect.strokeWidth;
    ctx.strokeStyle = rect.strokeColor;
    if (rect.fillColor !== "transparent") {
      ctx.globalAlpha = rect.fillOpacity;
      ctx.fillStyle = rect.fillColor;
      ctx.fillRect(-rect.width / 2, -rect.height / 2, rect.width, rect.height);
      ctx.globalAlpha = 1;
    }
    ctx.strokeRect(-rect.width / 2, -rect.height / 2, rect.width, rect.height);
    ctx.restore();
  }

  function drawText(ctx: CanvasRenderingContext2D, text: TextShape) {
    ctx.save();
    const dims = getTextDimensions(text, ctx);
    const cx = text.x + dims.w / 2;
    const cy = text.y - dims.h / 2;
    ctx.translate(cx, cy);
    ctx.rotate(toRad(text.rotation));
    ctx.font = `${text.fontWeight === "bold" ? "bold" : "normal"} ${text.fontSize}px sans-serif`;
    ctx.fillStyle = text.color;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(text.text, 0, 0);
    ctx.restore();
  }

  function drawSelectionHandles(
    ctx: CanvasRenderingContext2D,
    item: RectShape | TextShape
  ) {
    const { x, y, width, height, rotation } = getSelectableBounds(item, ctx);
    const cx = x + width / 2;
    const cy = y + height / 2;
    const cos = Math.cos(toRad(rotation));
    const sin = Math.sin(toRad(rotation));

    ctx.save();
    ctx.strokeStyle = "#e94560";
    ctx.lineWidth = 1.5 / zoom;
    ctx.setLineDash([6 / zoom, 4 / zoom]);

    const corners = [
      { x, y },
      { x: x + width, y },
      { x: x + width, y: y + height },
      { x, y: y + height },
    ];
    ctx.beginPath();
    for (let i = 0; i < 4; i++) {
      const p = corners[i];
      const rx = (p.x - cx) * cos - (p.y - cy) * sin + cx;
      const ry = (p.x - cx) * sin + (p.y - cy) * cos + cy;
      if (i === 0) ctx.moveTo(rx, ry);
      else ctx.lineTo(rx, ry);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.setLineDash([]);

    const handles: { lx: number; ly: number }[] = [
      { lx: x, ly: y },
      { lx: x + width / 2, ly: y },
      { lx: x + width, ly: y },
      { lx: x + width, ly: y + height / 2 },
      { lx: x + width, ly: y + height },
      { lx: x + width / 2, ly: y + height },
      { lx: x, ly: y + height },
      { lx: x, ly: y + height / 2 },
    ];

    const hs = HANDLE_SIZE / zoom;
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#e94560";
    ctx.lineWidth = 2 / zoom;

    for (const h of handles) {
      const rx = (h.lx - cx) * cos - (h.ly - cy) * sin + cx;
      const ry = (h.lx - cx) * sin + (h.ly - cy) * cos + cy;
      ctx.beginPath();
      ctx.arc(rx, ry, hs / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    const rotLx = cx;
    const rotLy = y - ROTATE_HANDLE_OFFSET;
    const rotRx = (rotLx - cx) * cos - (rotLy - cy) * sin + cx;
    const rotRy = (rotLx - cx) * sin + (rotLy - cy) * cos + cy;
    const topRx = (cx - cx) * cos - (y - cy) * sin + cx;
    const topRy = (cx - cx) * sin + (y - cy) * cos + cy;
    ctx.beginPath();
    ctx.moveTo(topRx, topRy);
    ctx.lineTo(rotRx, rotRy);
    ctx.strokeStyle = "#e94560";
    ctx.lineWidth = 1.5 / zoom;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(rotRx, rotRy, (hs + 4) / 2, 0, Math.PI * 2);
    ctx.fillStyle = "#e94560";
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(rotRx, rotRy, hs / 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  /* ── full redraw ── */
  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = imageDimensions.w;
    const h = imageDimensions.h;

    const pixelWidth = Math.round(w * dpr);
    const pixelHeight = Math.round(h * dpr);
    const cssWidth = `${w * zoom}px`;
    const cssHeight = `${h * zoom}px`;
    if (canvas.width !== pixelWidth) canvas.width = pixelWidth;
    if (canvas.height !== pixelHeight) canvas.height = pixelHeight;
    if (canvas.style.width !== cssWidth) canvas.style.width = cssWidth;
    if (canvas.style.height !== cssHeight) canvas.style.height = cssHeight;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    if (sourceImageRef.current) {
      ctx.drawImage(sourceImageRef.current, 0, 0, w, h);
    }
    drawAllItems(ctx);
  }, [imageSrc, imageDimensions, zoom, items, currentStroke, currentRect, selectedId]);

  const drawAllItems = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      for (const item of items) {
        if (item.tool === "pen" || item.tool === "eraser") drawStroke(ctx, item as Stroke);
        else if (item.tool === "rectangle") drawRect(ctx, item as RectShape);
        else if (item.tool === "text") drawText(ctx, item as TextShape);
      }

      if (currentStroke.length > 0) {
        drawStroke(ctx, {
          id: "temp",
          tool: tool as "pen" | "eraser",
          points: currentStroke,
          color: currentColor,
          width: strokeWidth,
        });
      }

      if (currentRect) drawRect(ctx, currentRect);

      if (selectedId && tool === "select") {
        const sel = items.find((i) => i.id === selectedId);
        if (sel && (sel.tool === "rectangle" || sel.tool === "text")) {
          drawSelectionHandles(ctx, sel as RectShape | TextShape);
        }
      }
    },
    [items, currentStroke, currentRect, currentColor, strokeWidth, tool, selectedId, zoom]
  );

  useEffect(() => {
    if (imageSrc || items.length > 0 || currentStroke.length > 0 || currentRect) {
      redrawCanvas();
    }
  }, [redrawCanvas]);

  /* ── mouse handlers ── */
  const handleMouseDown = useCallback(
    (e: ReactPointerEvent<HTMLCanvasElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      const { x, y } = getCanvasCoords(e);

      if (tool === "select" && selectedId) {
        const sel = items.find((i) => i.id === selectedId);
        if (sel && (sel.tool === "rectangle" || sel.tool === "text")) {
          const context = canvasRef.current?.getContext("2d");
          if (!context) return;
          const {
            width: w,
            height: h,
            rotation,
            x: rx,
            y: ry,
          } = getSelectableBounds(sel, context);

          if (hitTestRotateHandle(x, y, rx, ry, w, h, rotation)) {
            setIsRotating(true);
            setRotateState({
              startMouse: { x, y },
              startRotation: rotation,
              centerX: rx + w / 2,
              centerY: ry + h / 2,
            });
            return;
          }

          const hitHandle = hitTestResizeHandle(x, y, rx, ry, w, h, rotation);
          if (hitHandle) {
            setIsResizing(true);
            setResizeState({
              handle: hitHandle,
              startMouse: { x, y },
              startBounds: { x: rx, y: ry, width: w, height: h },
            });
            return;
          }

          const hit =
            sel.tool === "rectangle"
              ? pointInTransformedRect(x, y, rx, ry, w, h, rotation)
              : pointInText(x, y, sel as TextShape, context);
          if (hit) {
            setIsDragging(true);
            if (sel.tool === "rectangle") {
              setDragOffset({ x: x - rx, y: y - ry });
            } else {
              const dims = getTextDimensions(sel as TextShape, context);
              setDragOffset({ x: x - (sel as TextShape).x, y: y - ((sel as TextShape).y - dims.h) });
            }
            return;
          }

          setSelectedId(null);
          return;
        }
      }

      if (tool === "select") {
        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) return;
        let foundId: string | null = null;
        for (let i = items.length - 1; i >= 0; i--) {
          const item = items[i];
          if (item.tool === "rectangle") {
            if (pointInTransformedRect(x, y, item.x, item.y, item.width, item.height, item.rotation || 0)) {
              foundId = item.id;
              setDragOffset({ x: x - item.x, y: y - item.y });
              break;
            }
          } else if (item.tool === "text") {
            if (pointInText(x, y, item, ctx)) {
              foundId = item.id;
              break;
            }
          } else if (item.tool === "pen" || item.tool === "eraser") {
            if (pointInStroke(x, y, item)) {
              foundId = item.id;
              const pts = item.points;
              const minX = Math.min(...pts.map((p) => p.x));
              const minY = Math.min(...pts.map((p) => p.y));
              setDragOffset({ x: x - minX, y: y - minY });
              break;
            }
          }
        }
        setSelectedId(foundId);
        setIsDragging(!!foundId);
        return;
      }

      if (tool === "pen" || tool === "eraser") {
        setIsDrawing(true);
        setCurrentStroke([{ x, y, color: currentColor, width: strokeWidth }]);
        return;
      }

      if (tool === "rectangle") {
        setIsDragging(true);
        setDragStart({ x, y });
        setCurrentRect({
          id: uid(),
          trackingStepId: activeTrackingStepId ?? undefined,
          tool: "rectangle",
          x, y, width: 0, height: 0,
          fillColor: rectFillColor,
          strokeColor: rectStrokeColor,
          strokeWidth,
          fillOpacity: rectFillOpacity,
          rotation: 0,
        });
        return;
      }

      if (tool === "text") {
        if (textInput.trim()) {
          const newText: TextShape = {
            id: uid(),
            trackingStepId: activeTrackingStepId ?? undefined,
            tool: "text",
            x, y,
            text: textInput,
            color: currentColor,
            fontSize,
            fontWeight,
            rotation: 0,
          };
          pushHistory([...items, newText]);
          setSelectedId(newText.id);
        }
        return;
      }

      if (tool === "crop") {
        setIsCropDragging(true);
        setCropDragStart({ x, y });
        setCropArea({ x, y, w: 0, h: 0 });
        return;
      }
    },
    [tool, items, currentColor, strokeWidth, textInput, rectFillColor, rectStrokeColor, rectFillOpacity, fontSize, fontWeight, pushHistory, getCanvasCoords, selectedId, activeTrackingStepId]
  );

  const handleMouseMove = useCallback(
    (e: ReactPointerEvent<HTMLCanvasElement>) => {
      const { x, y } = getCanvasCoords(e);

      if (isRotating && rotateState && selectedId) {
        const newAngle = toDeg(
          Math.atan2(y - rotateState.centerY, x - rotateState.centerX) -
            Math.atan2(rotateState.startMouse.y - rotateState.centerY, rotateState.startMouse.x - rotateState.centerX) +
            toRad(rotateState.startRotation)
        );
        const snappedAngle = e.shiftKey ? Math.round(newAngle / 5) * 5 : newAngle;
        const newItems = items.map((item) => {
          if (item.id !== selectedId) return item;
          return { ...item, rotation: snappedAngle % 360 };
        });
        setItems(newItems);
        return;
      }

      if (isResizing && resizeState && selectedId) {
        const dx = x - resizeState.startMouse.x;
        const dy = y - resizeState.startMouse.y;
        const sel = items.find((i) => i.id === selectedId);
        if (sel && (sel.tool === "rectangle" || sel.tool === "text")) {
          const rotation = (sel as RectShape | TextShape).rotation || 0;
          const correctedBounds = applyResize(resizeState.startBounds, resizeState.handle, dx, dy, rotation);
          const newItems = items.map((item) => {
            if (item.id !== selectedId) return item;
            if (item.tool === "rectangle") {
              return { ...item, x: correctedBounds.x, y: correctedBounds.y, width: correctedBounds.width, height: correctedBounds.height } as RectShape;
            }
            if (item.tool === "text") {
              const heightRatio = correctedBounds.height / resizeState.startBounds.height;
              const newFontSize = Math.max(10, Math.min(200, Math.round((sel as TextShape).fontSize * heightRatio)));
              return { ...item, fontSize: newFontSize, x: correctedBounds.x, y: correctedBounds.y + correctedBounds.height } as TextShape;
            }
            return item;
          });
          setItems(newItems);
        }
        return;
      }

      if ((tool === "pen" || tool === "eraser") && isDrawing) {
        setCurrentStroke((prev) => [...prev, { x, y, color: currentColor, width: strokeWidth }]);
        return;
      }

      if (tool === "rectangle") {
        if (isDragging && dragStart && currentRect) {
          const w = x - dragStart.x;
          const h = y - dragStart.y;
          setCurrentRect({ ...currentRect, x: w < 0 ? x : dragStart.x, y: h < 0 ? y : dragStart.y, width: Math.abs(w), height: Math.abs(h) });
        }
        return;
      }

      if (tool === "select" && isDragging && selectedId) {
        const newItems = items.map((item) => {
          if (item.id !== selectedId) return item;
          if (item.tool === "rectangle") return { ...item, x: x - dragOffset.x, y: y - dragOffset.y } as RectShape;
          if (item.tool === "text") {
            const dims = getTextDimensions(item as TextShape, canvasRef.current!.getContext("2d")!);
            return { ...item, x: x - dragOffset.x, y: y - dragOffset.y + dims.h } as TextShape;
          }
          if (item.tool === "pen" || item.tool === "eraser") {
            const dx = x - dragOffset.x - Math.min(...item.points.map((p) => p.x));
            const dy = y - dragOffset.y - Math.min(...item.points.map((p) => p.y));
            return { ...item, points: item.points.map((p) => ({ ...p, x: p.x + dx, y: p.y + dy })) };
          }
          return item;
        });
        setItems(newItems);
        return;
      }

      if (tool === "crop") {
        if (isCropDragging && cropDragStart) {
          const w = x - cropDragStart.x;
          const h = y - cropDragStart.y;
          setCropArea({ x: w < 0 ? x : cropDragStart.x, y: h < 0 ? y : cropDragStart.y, w: Math.abs(w), h: Math.abs(h) });
        }
        return;
      }
    },
    [tool, isDrawing, isDragging, isCropDragging, isResizing, isRotating, currentColor, strokeWidth, dragStart, dragOffset, currentRect, selectedId, items, cropDragStart, resizeState, rotateState, getCanvasCoords]
  );

  const handleMouseUp = useCallback(() => {
    if ((tool === "pen" || tool === "eraser") && isDrawing) {
      if (currentStroke.length > 1) {
        const stroke: Stroke = { id: uid(), trackingStepId: activeTrackingStepId ?? undefined, tool: tool as "pen" | "eraser", points: currentStroke, color: currentColor, width: strokeWidth };
        pushHistory([...items, stroke]);
      }
      setCurrentStroke([]);
      setIsDrawing(false);
      return;
    }

    if (tool === "rectangle") {
      if (currentRect && currentRect.width > 2 && currentRect.height > 2) {
        pushHistory([...items, currentRect]);
        setSelectedId(currentRect.id);
      }
      setCurrentRect(null);
      setIsDragging(false);
      setDragStart(null);
      return;
    }

    if (tool === "select" && isDragging) {
      pushHistory(items);
      setIsDragging(false);
      return;
    }

    if (isResizing) {
      pushHistory(items);
      setIsResizing(false);
      setResizeState(null);
      return;
    }

    if (isRotating) {
      pushHistory(items);
      setIsRotating(false);
      setRotateState(null);
      return;
    }

    if (tool === "crop") {
      if (!cropArea || cropArea.w < MIN_CROP_DIM || cropArea.h < MIN_CROP_DIM) setCropArea(null);
      setIsCropDragging(false);
      setCropDragStart(null);
      return;
    }
  }, [tool, isDrawing, isDragging, isResizing, isRotating, isCropDragging, currentStroke, currentRect, currentColor, strokeWidth, items, cropArea, pushHistory, activeTrackingStepId]);

  const handlePointerUp = useCallback((event: ReactPointerEvent<HTMLCanvasElement>) => {
    handleMouseUp();
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }, [handleMouseUp]);

  /* ── drag & drop from OS ── */
  const handleDragOver = useCallback((e: React.DragEvent) => { e.preventDefault(); e.stopPropagation(); setIsDragOver(true); }, []);
  const handleDragLeave = useCallback((e: React.DragEvent) => { e.preventDefault(); e.stopPropagation(); setIsDragOver(false); }, []);
  const handleDrop = useCallback((e: React.DragEvent) => { e.preventDefault(); e.stopPropagation(); setIsDragOver(false); const files = e.dataTransfer.files; if (files.length > 0) handleFile(files[0]); }, [handleFile]);

  /* ── export / confirm ── */
  const createFinalDataUrl = useCallback((withTrackingOverlay = includeTrackingOverlay) => {
    if (!imageDimensions.w || !imageDimensions.h || !sourceImageRef.current) {
      throw new Error("Carregue uma imagem antes de exportar.");
    }
    const output = document.createElement("canvas");
    output.width = imageDimensions.w;
    output.height = imageDimensions.h;
    const context = output.getContext("2d");
    if (!context) throw new Error("O navegador não disponibilizou o canvas.");
    context.drawImage(sourceImageRef.current, 0, 0, output.width, output.height);
    for (const item of items) {
      if (item.tool === "pen" || item.tool === "eraser") drawStroke(context, item);
      else if (item.tool === "rectangle") drawRect(context, item);
      else if (item.tool === "text") drawText(context, item);
    }
    if (withTrackingOverlay) {
      drawTrackingExportOverlay(
        context,
        output.width,
        output.height,
        trackingSteps,
        items,
      );
    }
    return output.toDataURL("image/png");
  }, [imageDimensions.h, imageDimensions.w, includeTrackingOverlay, items, trackingSteps]);

  const createBaseDataUrl = useCallback(() => {
    if (!imageDimensions.w || !imageDimensions.h || !sourceImageRef.current) {
      throw new Error("Carregue uma imagem antes de salvar.");
    }
    const output = document.createElement("canvas");
    output.width = imageDimensions.w;
    output.height = imageDimensions.h;
    const context = output.getContext("2d");
    if (!context) throw new Error("O navegador não disponibilizou o canvas.");
    context.drawImage(sourceImageRef.current, 0, 0, output.width, output.height);
    return output.toDataURL("image/png");
  }, [imageDimensions.h, imageDimensions.w]);

  const createEvidence = useCallback((): TicketImageEvidence => {
    const context = canvasRef.current?.getContext("2d");
    if (!context) throw new Error("O navegador não disponibilizou o canvas.");
    const evidenceId = `image_evidence_${Date.now()}`;
    return {
      id: evidenceId,
      imageDataUrl: createBaseDataUrl(),
      attachmentDataUrl: createFinalDataUrl(includeTrackingOverlay),
      width: imageDimensions.w,
      height: imageDimensions.h,
      createdAt: new Date().toISOString(),
      editorItems: items,
      trackingSteps,
      steps: trackingSteps.map(step => ({
        ...step,
        markers: items
          .filter(item => item.tool !== "eraser" && item.trackingStepId === step.id)
          .map(item => {
            const anchor = getTrackingAnchor(item, context);
            return {
              id: `${evidenceId}_${item.id}`,
              xPercent: imageDimensions.w ? clamp((anchor.x / imageDimensions.w) * 100, 0, 100) : 0,
              yPercent: imageDimensions.h ? clamp((anchor.y / imageDimensions.h) * 100, 0, 100) : 0,
            };
          }),
      })),
    };
  }, [createBaseDataUrl, createFinalDataUrl, imageDimensions.h, imageDimensions.w, includeTrackingOverlay, items, trackingSteps]);

  const handleSendToTicket = useCallback(() => {
    try {
      if (!onSendToTicket) return;
      onSendToTicket(createEvidence());
      setImageError(null);
    } catch (error) {
      setImageError(error instanceof Error ? error.message : "Falha ao enviar a imagem para o chamado.");
    }
  }, [createEvidence, onSendToTicket]);

  const handleExport = useCallback(() => {
    try {
      const dataUrl = createFinalDataUrl();
      if (onExport) onExport(dataUrl);
      else {
        const link = document.createElement("a");
        link.download = `imagem-editada-${Date.now()}.png`;
        link.href = dataUrl;
        link.click();
      }
      setImageError(null);
    } catch (error) {
      setImageError(error instanceof Error ? error.message : "Falha ao exportar a imagem.");
    }
  }, [createFinalDataUrl, onExport]);

  const handleConfirm = useCallback(() => {
    try {
      if (onConfirmDocument) onConfirmDocument(createEvidence());
      else onConfirm?.(createFinalDataUrl());
      setImageError(null);
    } catch (error) {
      setImageError(error instanceof Error ? error.message : "Falha ao confirmar a imagem.");
    }
  }, [createEvidence, createFinalDataUrl, onConfirm, onConfirmDocument]);

  /* ── apply crop ── */
  const applyCrop = useCallback(() => {
    if (!cropArea || cropArea.w < MIN_CROP_DIM || cropArea.h < MIN_CROP_DIM) return;
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d"); if (!tempCtx) return;
    tempCanvas.width = cropArea.w;
    tempCanvas.height = cropArea.h;
    if (!sourceImageRef.current) return;
    tempCtx.drawImage(sourceImageRef.current, cropArea.x, cropArea.y, cropArea.w, cropArea.h, 0, 0, cropArea.w, cropArea.h);
    const croppedDataUrl = tempCanvas.toDataURL("image/png");
    const croppedItems = items.map(item => item.tool === "rectangle"
      ? { ...item, x: item.x - cropArea.x, y: item.y - cropArea.y }
      : item.tool === "text"
        ? { ...item, x: item.x - cropArea.x, y: item.y - cropArea.y }
        : { ...item, points: item.points.map(point => ({ ...point, x: point.x - cropArea.x, y: point.y - cropArea.y })) });
    loadImage(croppedDataUrl, croppedItems, trackingSteps);
    setCropArea(null);
    setTool("select");
  }, [cropArea, items, loadImage, trackingSteps]);

  /* ── reset rotation ── */
  const resetRotation = useCallback(() => {
    if (!selectedId) return;
    const newItems = items.map((item) => {
      if (item.id !== selectedId) return item;
      if (item.tool === "rectangle" || item.tool === "text") return { ...item, rotation: 0 } as RectShape | TextShape;
      return item;
    });
    pushHistory(newItems);
  }, [selectedId, items, pushHistory]);

  /* ── clear all ── */
  const clearAll = useCallback(() => { pushHistory([]); setSelectedId(null); setCropArea(null); }, [pushHistory]);

  /* ── upload ── */
  const handleUploadClick = () => fileInputRef.current?.click();
  const handleUploadChange = (e: React.ChangeEvent<HTMLInputElement>) => { const file = e.target.files?.[0]; if (file) handleFile(file); e.target.value = ""; };

  /* ── selected item helpers ── */
  const selectedItem = selectedId ? items.find((i) => i.id === selectedId) : null;
  const activeTrackingStep = activeTrackingStepId
    ? trackingSteps.find(step => step.id === activeTrackingStepId) ?? null
    : null;

  const assignSelectedItemToTrackingStep = (trackingStepId: string | null) => {
    if (!selectedId) return;
    const trackingStep = trackingSteps.find(step => step.id === trackingStepId);
    const newItems = items.map(item =>
      item.id === selectedId
        ? applyTrackingColorToItem(
            { ...item, trackingStepId: trackingStepId ?? undefined },
            trackingStep?.color ?? (item.tool === "rectangle" ? item.strokeColor : item.tool === "text" || item.tool === "pen" ? item.color : currentColor),
          )
        : item,
    );
    pushHistory(newItems);
  };

  const handleRotationChange = (deg: number) => {
    if (!selectedId) return;
    const newItems = items.map((item) => {
      if (item.id !== selectedId) return item;
      if (item.tool === "rectangle" || item.tool === "text") return { ...item, rotation: clamp(deg, 0, 359) } as RectShape | TextShape;
      return item;
    });
    setItems(newItems);
  };

  const commitRotationChange = () => { if (!selectedId) return; pushHistory(items); };

  /* ════════════════════════════════════════════════
     RENDER
     ════════════════════════════════════════════════ */
  return (
    <Dialog open={open} onOpenChange={onOpenChange} container={portalContainer} modal={false}>
      <Overlay onKeyDown={handleKeyDown}>
        {/* ── Header ── */}
        <HeaderBar>
          <HeaderTitle>
            <Scissors size={18} />
            Editor de Imagem
          </HeaderTitle>
          <BottomActions>
            <Button variant="ghost" size="sm" leftIcon={<Upload size={14} />} onClick={handleUploadClick}>
              Upload
            </Button>
            {!hideExport && <Button variant="ghost" size="sm" leftIcon={<Download size={14} />} onClick={handleExport} disabled={!imageSrc || isLoadingImage}>
              Exportar
            </Button>}
            {onSendToTicket && (
              <Button variant="amber" size="sm" leftIcon={<Send size={14} />} onClick={handleSendToTicket} disabled={!imageSrc || isLoadingImage}>
                {sendToTicketLabel}
              </Button>
            )}
            {(onConfirm || onConfirmDocument) && <Button variant="danger" size="sm" leftIcon={<Scissors size={14} />} onClick={handleConfirm} disabled={!imageSrc || isLoadingImage}>
              Confirmar
            </Button>}
          </BottomActions>
        </HeaderBar>

        {imageError && (
          <div role="alert" style={{ padding: "8px 16px", background: "var(--destructive-solid)", color: "#fff", fontSize: 12 }}>
            {imageError}
          </div>
        )}

        <TrackingWorkspaceBar>
          <TrackingWorkspaceColumn>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
              <PanelLabel>Passos e tarefas por cor</PanelLabel>
              <span style={{ color: "var(--muted-foreground)", fontSize: 10 }}>Crie, ative e desenhe</span>
            </div>
            <TrackingCreator>
              <TextInput
                value={trackingCode}
                onChange={event => setTrackingCode(event.target.value)}
                placeholder="ID: PASSO-01"
                maxLength={32}
              />
              <TextInput
                value={trackingName}
                onChange={event => setTrackingName(event.target.value)}
                placeholder="Nome da tarefa"
                maxLength={80}
              />
              <TextInput
                value={trackingDescription}
                onChange={event => setTrackingDescription(event.target.value)}
                placeholder="Descrição do overlay"
                maxLength={240}
              />
              <input
                type="color"
                value={trackingDraftColor}
                onChange={event => setTrackingDraftColor(event.target.value)}
                aria-label="Cor do novo passo"
                style={{ width: 38, height: 32, border: "none", borderRadius: 6, cursor: "pointer", background: "transparent" }}
              />
              <Button variant="danger" size="sm" onClick={createTrackingStep}>
                Criar
              </Button>
            </TrackingCreator>
            <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap" }}>
              {PALETTE_COLORS.map(color => (
                <ColorSwatch
                  key={`tracking-top-${color}`}
                  $color={color}
                  $active={trackingDraftColor === color}
                  onClick={() => setTrackingDraftColor(color)}
                  title={`Nova tarefa em ${color}`}
                  style={{ width: 24, height: 24 }}
                />
              ))}
              {trackingError && <span role="alert" style={{ color: "var(--destructive)", fontSize: 10 }}>{trackingError}</span>}
            </div>
          </TrackingWorkspaceColumn>

          <TrackingWorkspaceColumn>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
              <PanelLabel>{trackingSteps.length} agrupamento(s)</PanelLabel>
              <label style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--muted-foreground)", fontSize: 10, cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={includeTrackingOverlay}
                  onChange={event => setIncludeTrackingOverlay(event.target.checked)}
                />
                Overlay na exportação
              </label>
            </div>
            {trackingSteps.length ? (
              <TrackingStepsRail>
                {trackingSteps.map((step, index) => {
                  const itemCount = items.filter(item => item.trackingStepId === step.id && item.tool !== "eraser").length;
                  return (
                    <TrackingStepCard
                      type="button"
                      key={step.id}
                      $active={activeTrackingStepId === step.id}
                      $color={step.color}
                      onClick={() => activateTrackingStep(step)}
                    >
                      <strong style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: 11 }}>
                        {index + 1}. {step.code} · {step.name}
                      </strong>
                      <span style={{ display: "block", marginTop: 3, color: "var(--muted-foreground)", fontSize: 10 }}>
                        {itemCount} elemento(s)
                      </span>
                    </TrackingStepCard>
                  );
                })}
              </TrackingStepsRail>
            ) : (
              <span style={{ color: "var(--muted-foreground)", fontSize: 11 }}>Nenhum passo criado. Os desenhos continuam disponíveis sem vínculo.</span>
            )}
            {activeTrackingStep && (
              <div style={{ display: "grid", gridTemplateColumns: "minmax(130px, .7fr) minmax(180px, 1fr) 38px auto", gap: 7, alignItems: "center" }}>
                <TextInput
                  value={activeTrackingStep.name}
                  onChange={event => setTrackingSteps(previous => previous.map(step =>
                    step.id === activeTrackingStep.id ? { ...step, name: event.target.value } : step,
                  ))}
                  aria-label="Nome da tarefa ativa"
                />
                <TextInput
                  value={activeTrackingStep.description}
                  onChange={event => setTrackingSteps(previous => previous.map(step =>
                    step.id === activeTrackingStep.id ? { ...step, description: event.target.value } : step,
                  ))}
                  placeholder="Descrição da tarefa ativa"
                  aria-label="Descrição da tarefa ativa"
                  maxLength={240}
                />
                <input
                  type="color"
                  value={activeTrackingStep.color}
                  onChange={event => applyTrackingColor(event.target.value)}
                  aria-label="Cor da tarefa ativa"
                  style={{ width: 38, height: 32, border: "none", borderRadius: 6, cursor: "pointer", background: "transparent" }}
                />
                <Button variant="ghost" size="sm" onClick={() => setActiveTrackingStepId(null)}>
                  Desativar
                </Button>
              </div>
            )}
          </TrackingWorkspaceColumn>
        </TrackingWorkspaceBar>

        <MainArea>
          {/* ── Left Toolbar ── */}
          <Toolbar>
            <ToolBtn $active={tool === "select"} onClick={() => setTool("select")} title="Selecionar">
              <MousePointer2 size={18} />
            </ToolBtn>
            <ToolBtn $active={tool === "pen"} onClick={() => setTool("pen")} title="Lápis">
              <Pencil size={18} />
            </ToolBtn>
            <ToolBtn $active={tool === "eraser"} onClick={() => setTool("eraser")} title="Borracha">
              <Eraser size={18} />
            </ToolBtn>
            <ToolBtn $active={tool === "rectangle"} onClick={() => setTool("rectangle")} title="Retângulo">
              <Square size={18} />
            </ToolBtn>
            <ToolBtn $active={tool === "text"} onClick={() => setTool("text")} title="Texto">
              <Type size={18} />
            </ToolBtn>
            <ToolBtn $active={tool === "crop"} onClick={() => setTool("crop")} title="Recortar">
              <Scissors size={18} />
            </ToolBtn>
            <Divider />
            <ToolBtn onClick={undo} title="Desfazer (Ctrl+Z)">
              <Undo2 size={18} />
            </ToolBtn>
            <ToolBtn onClick={redo} title="Refazer (Ctrl+Shift+Z)">
              <Redo2 size={18} />
            </ToolBtn>
            <Divider />
            <ToolBtn onClick={handleUploadClick} title="Upload imagem">
              <Upload size={18} />
            </ToolBtn>
            <ToolBtn onClick={clearAll} title="Limpar tudo">
              <Trash2 size={18} />
            </ToolBtn>
            <Divider />
            <ToolBtn onClick={() => setZoom((z) => Math.max(MIN_ZOOM, z - 0.1))} title="Diminuir zoom">
              <ZoomOut size={18} />
            </ToolBtn>
            <ToolBtn onClick={() => setZoom((z) => Math.min(MAX_ZOOM, z + 0.1))} title="Aumentar zoom">
              <ZoomIn size={18} />
            </ToolBtn>
            <ToolBtn onClick={fitImageToArea} title="Ajustar imagem à tela">
              <X size={18} />
            </ToolBtn>
          </Toolbar>

          {/* ── Canvas Area ── */}
          <CanvasArea ref={canvasAreaRef} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
            <AnimatePresence>
              {isDragOver && (
                <motion.div style={{
  position: "absolute", inset: 0, display: "flex",
  alignItems: "center", justifyContent: "center",
  background: "color-mix(in srgb, var(--primary) 10%, transparent)",
  border: `2px dashed ${isDragOver ? "var(--primary)" : "transparent"}`,
  borderRadius: 8, zIndex: 10
}}>
                  <DropLabel>Solte a imagem aqui</DropLabel>
                </motion.div>
              )}
            </AnimatePresence>

            {isLoadingImage ? (
              <EmptyState>
                <span style={{ fontSize: 15 }}>Carregando imagem...</span>
              </EmptyState>
            ) : !imageSrc ? (
              <EmptyState>
                <Upload size={48} color="currentColor" />
                <span style={{ fontSize: 15 }}>Cole (Ctrl+V), arraste ou faça upload de uma imagem</span>
                <Button variant="danger" size="sm" onClick={handleUploadClick}>Escolher Imagem</Button>
              </EmptyState>
            ) : (
              <CanvasWrapper ref={wrapperRef} style={{ width: imageDimensions.w * zoom, height: imageDimensions.h * zoom }}>
                <canvas
                  ref={canvasRef}
                  onPointerDown={handleMouseDown}
                  onPointerMove={handleMouseMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                  style={{
                    cursor: tool === "select" ? (isDragging ? "grabbing" : "default") : "crosshair",
                    display: "block",
                    touchAction: "none",
                  }}
                />

                {/* Crop overlay */}
                {tool === "crop" && cropArea && cropArea.w > 2 && cropArea.h > 2 && (
                  <div style={{ position: "absolute", top: 0, left: 0, width: imageDimensions.w * zoom, height: imageDimensions.h * zoom, pointerEvents: "none" }}>
                    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
                    <div style={{ position: "absolute", left: cropArea.x * zoom, top: cropArea.y * zoom, width: cropArea.w * zoom, height: cropArea.h * zoom, background: "transparent", border: "2px dashed var(--primary)" }} />
                  </div>
                )}

                {/* Crop action buttons */}
                {tool === "crop" && cropArea && cropArea.w > MIN_CROP_DIM && cropArea.h > MIN_CROP_DIM && (
                  <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 20 }}>
                    <Button variant="danger" size="sm" onClick={applyCrop}>Aplicar Crop</Button>
                    <Button variant="ghost" size="sm" onClick={() => setCropArea(null)}>Cancelar</Button>
                  </div>
                )}
              </CanvasWrapper>
            )}
          </CanvasArea>

          {/* ── Right Panel ── */}
          <RightPanel>
            <PanelSection>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                <PanelLabel>Itens da edição</PanelLabel>
                <span style={{ color: "var(--muted-foreground)", fontSize: 10 }}>{items.length}</span>
              </div>
              {items.length ? items.map((item, index) => {
                const trackingStep = trackingSteps.find(step => step.id === item.trackingStepId);
                return (
                  <CanvasItemCard
                    type="button"
                    key={item.id}
                    $active={selectedId === item.id}
                    $color={trackingStep?.color ?? getCanvasItemColor(item)}
                    onClick={() => {
                      setSelectedId(item.id);
                      setTool("select");
                    }}
                    title={`Selecionar ${getCanvasItemLabel(item, index)}`}
                  >
                    <span style={{ minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: 11 }}>
                      {getCanvasItemLabel(item, index)}
                    </span>
                    <span style={{ color: trackingStep?.color ?? "#64748b", fontSize: 9 }}>
                      {trackingStep?.code ?? "livre"}
                    </span>
                  </CanvasItemCard>
                );
              }) : (
                <span style={{ color: "var(--muted-foreground)", fontSize: 11 }}>Os elementos desenhados aparecerão aqui.</span>
              )}
            </PanelSection>

            <PanelSection>
              <PanelLabel>Cor da ferramenta{activeTrackingStep ? ` · ${activeTrackingStep.code}` : ""}</PanelLabel>
              <ColorRow>
                {PALETTE_COLORS.map((c) => (
                  <ColorSwatch key={c} $color={c} $active={currentColor === c} onClick={() => applyTrackingColor(c)} />
                ))}
              </ColorRow>
              <input type="color" value={currentColor} onChange={(e) => applyTrackingColor(e.target.value)} style={{ width: "100%", height: 32, border: "none", borderRadius: 6, cursor: "pointer", background: "transparent" }} />
            </PanelSection>

            {selectedItem && (
              <PanelSection>
                <PanelLabel>Vínculo do elemento selecionado</PanelLabel>
                <SelectInput
                  value={selectedItem.trackingStepId ?? ""}
                  onChange={event => assignSelectedItemToTrackingStep(event.target.value || null)}
                >
                  <option value="">Sem rastreamento</option>
                  {trackingSteps.map(step => (
                    <option key={step.id} value={step.id}>{step.code} · {step.name}</option>
                  ))}
                </SelectInput>
              </PanelSection>
            )}

            <PanelSection>
              <PanelLabel>Espessura: {strokeWidth}px</PanelLabel>
              <SliderInput type="range" min={1} max={20} value={strokeWidth} onChange={(e) => setStrokeWidth(Number(e.target.value))} />
            </PanelSection>

            {(tool === "rectangle" || (selectedId && items.find((i) => i.id === selectedId)?.tool === "rectangle")) && (
              <PanelSection>
                <PanelLabel>Retângulo</PanelLabel>
                <PanelLabel style={{ marginTop: 4 }}>Cor da borda</PanelLabel>
                <ColorRow>
                  {PALETTE_COLORS.map((c) => (
                    <ColorSwatch key={`rect-stroke-${c}`} $color={c} $active={rectStrokeColor === c} onClick={() => activeTrackingStep ? applyTrackingColor(c) : setRectStrokeColor(c)} />
                  ))}
                </ColorRow>
                <PanelLabel style={{ marginTop: 4 }}>Cor de preenchimento</PanelLabel>
                <ColorRow>
                  <ColorSwatch $color="transparent" $active={rectFillColor === "transparent"} onClick={() => setRectFillColor("transparent")} style={{ background: "repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 50% / 16px 16px" }} />
                  {PALETTE_COLORS.map((c) => (
                    <ColorSwatch key={`rect-fill-${c}`} $color={c} $active={rectFillColor === c} onClick={() => setRectFillColor(c)} />
                  ))}
                </ColorRow>
                <PanelLabel style={{ marginTop: 4 }}>Opacidade preenchimento: {Math.round(rectFillOpacity * 100)}%</PanelLabel>
                <SliderInput type="range" min={0} max={1} step={0.05} value={rectFillOpacity} onChange={(e) => setRectFillOpacity(Number(e.target.value))} />
              </PanelSection>
            )}

            {(tool === "text" || (selectedId && items.find((i) => i.id === selectedId)?.tool === "text")) && (
              <PanelSection>
                <PanelLabel>Texto</PanelLabel>
                <TextareaInput placeholder="Digite o texto..." value={textInput} onChange={(e) => setTextInput(e.target.value)} />
                <PanelLabel>Tamanho: {fontSize}px</PanelLabel>
                <SliderInput type="range" min={10} max={72} value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} />
                <SelectInput value={fontWeight} onChange={(e) => setFontWeight(e.target.value as "normal" | "bold")}>
                  <option value="normal">Normal</option>
                  <option value="bold">Negrito</option>
                </SelectInput>
              </PanelSection>
            )}

            {selectedItem && (selectedItem.tool === "rectangle" || selectedItem.tool === "text") && (
              <PanelSection>
                <PanelLabel>{selectedItem.tool === "rectangle" ? "Retângulo" : "Texto"} Selecionado</PanelLabel>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <RotateCcw size={14} color="currentColor" />
                  <PanelLabel style={{ flex: 1, textTransform: "none" }}>Rotação: {(selectedItem as RectShape | TextShape).rotation || 0}°</PanelLabel>
                  <Button variant="ghost" size="sm" onClick={resetRotation}>Reset</Button>
                </div>
                <SliderInput type="range" min={0} max={359} value={(selectedItem as RectShape | TextShape).rotation || 0} onChange={(e) => handleRotationChange(Number(e.target.value))} onMouseUp={commitRotationChange} onTouchEnd={commitRotationChange} />
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                  {[0, 45, 90, 180, 270, 315].map((deg) => (
                    <Button
                      key={deg}
                      variant="ghost"
                      size="sm"
                      onClick={() => { handleRotationChange(deg); commitRotationChange(); }}
                    >
                      {deg}°
                    </Button>
                  ))}
                </div>
                <Button variant="danger" size="sm" leftIcon={<Trash2 size={14} />} onClick={() => { const newItems = items.filter((it) => it.id !== selectedId); pushHistory(newItems); setSelectedId(null); }}>
                  Remover
                </Button>
              </PanelSection>
            )}

            {tool === "crop" && cropArea && (
              <PanelSection>
                <PanelLabel>Crop</PanelLabel>
                <span style={{ fontSize: 12, color: "var(--foreground)" }}>{Math.round(cropArea.w)} × {Math.round(cropArea.h)}px</span>
                <span style={{ fontSize: 11, color: "var(--muted-foreground)" }}>Arraste no canvas para definir a área</span>
              </PanelSection>
            )}

            <PanelSection>
              <PanelLabel>Zoom: {Math.round(zoom * 100)}%</PanelLabel>
              <SliderInput type="range" min={MIN_ZOOM} max={MAX_ZOOM} step={0.1} value={zoom} onChange={(e) => setZoom(Number(e.target.value))} />
            </PanelSection>
          </RightPanel>
        </MainArea>

        {/* ── Bottom Bar ── */}
        <BottomBar>
          <FooterStatus>
            <span style={{ width: 10, height: 10, flex: "none", borderRadius: "50%", background: activeTrackingStep?.color ?? "#64748b", boxShadow: activeTrackingStep ? `0 0 0 3px ${activeTrackingStep.color}25` : "none" }} />
            <div style={{ minWidth: 0 }}>
              <strong style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {activeTrackingStep ? `${activeTrackingStep.code} · ${activeTrackingStep.name}` : "Edição livre, sem passo ativo"}
              </strong>
              <span style={{ color: "var(--muted-foreground)", fontSize: 10 }}>
                {items.length} item(ns) · {imageDimensions.w} × {imageDimensions.h}px · overlay {includeTrackingOverlay ? "ativo" : "inativo"}
              </span>
            </div>
          </FooterStatus>

          <FooterHint>
            Ctrl+Z desfaz · Delete remove · R gira · Ctrl+V cola imagem
          </FooterHint>

          <BottomActions style={{ justifySelf: "end" }}>
            <Button variant="ghost" size="sm" leftIcon={<Undo2 size={13} />} onClick={undo} disabled={historyIndex <= 0}>
              Desfazer
            </Button>
            <Button variant="ghost" size="sm" leftIcon={<Redo2 size={13} />} onClick={redo} disabled={historyIndex >= history.length - 1}>
              Refazer
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setZoom(value => Math.max(MIN_ZOOM, value - 0.1))} aria-label="Diminuir zoom">
              <ZoomOut size={13} />
            </Button>
            <ZoomBadge>{Math.round(zoom * 100)}%</ZoomBadge>
            <Button variant="ghost" size="sm" onClick={() => setZoom(value => Math.min(MAX_ZOOM, value + 0.1))} aria-label="Aumentar zoom">
              <ZoomIn size={13} />
            </Button>
            <Button variant="ghost" size="sm" onClick={fitImageToArea}>Ajustar</Button>
          </BottomActions>
        </BottomBar>

        <HiddenInput ref={fileInputRef} type="file" accept="image/*" onChange={handleUploadChange} />
      </Overlay>
    </Dialog>
  );
}
