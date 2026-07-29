import { useEffect } from "react";

const EDGE_SIZE = 12;
const MIN_COLUMN_WIDTH = 220;

function directGridChild(target: EventTarget | null, grid: HTMLElement) {
  let element = target instanceof HTMLElement ? target : null;
  while (element && element.parentElement !== grid) element = element.parentElement;
  return element;
}

/** Ajuste temporário entre colunas; recarregar restaura o layout original. */
export function useResizableColumns() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".qa-devtools-app");
    if (!root) return;

    const decorateCardGrids = () => {
      root.querySelectorAll<HTMLElement>(".grid").forEach(grid => {
        const children = Array.from(grid.children);
        const isCard = (child: Element) => child.classList.contains("qa-resizable-card")
          || (child.className.includes("bg-card") && child.className.includes("border"));
        if (children.length > 1 && children.slice(0, 2).every(isCard)) {
          grid.classList.add("qa-resizable-columns");
        }
      });
    };
    decorateCardGrids();
    const observer = new MutationObserver(decorateCardGrids);
    observer.observe(root, { childList: true, subtree: true });

    const reset = (event: MouseEvent) => {
      const target = event.target instanceof HTMLElement ? event.target : null;
      const grid = target?.closest<HTMLElement>(".qa-resizable-columns");
      if (!grid) return;
      const item = directGridChild(target, grid);
      if (!item || Math.abs(event.clientX - item.getBoundingClientRect().right) > EDGE_SIZE) return;
      grid.style.removeProperty("grid-template-columns");
    };

    const start = (event: PointerEvent) => {
      if (event.button !== 0) return;
      const target = event.target instanceof HTMLElement ? event.target : null;
      const grid = target?.closest<HTMLElement>(".qa-resizable-columns");
      if (!grid) return;
      const item = directGridChild(target, grid);
      if (!item) return;
      const items = Array.from(grid.children).filter((child): child is HTMLElement => child instanceof HTMLElement);
      const index = items.indexOf(item);
      const next = items[index + 1];
      const itemRect = item.getBoundingClientRect();
      const nextRect = next?.getBoundingClientRect();
      if (!next || !nextRect || Math.abs(itemRect.top - nextRect.top) > 8 || Math.abs(event.clientX - itemRect.right) > EDGE_SIZE) return;

      event.preventDefault();
      const initialX = event.clientX;
      const initialWidths = items.map(column => column.getBoundingClientRect().width);
      const leftWidth = initialWidths[index];
      const rightWidth = initialWidths[index + 1];
      grid.style.gridTemplateColumns = initialWidths.map(width => `${width}px`).join(" ");
      root.classList.add("qa-columns-resizing");

      const move = (moveEvent: PointerEvent) => {
        const delta = moveEvent.clientX - initialX;
        const bounded = Math.max(MIN_COLUMN_WIDTH - leftWidth, Math.min(rightWidth - MIN_COLUMN_WIDTH, delta));
        const widths = [...initialWidths];
        widths[index] = leftWidth + bounded;
        widths[index + 1] = rightWidth - bounded;
        grid.style.gridTemplateColumns = widths.map(width => `${width}px`).join(" ");
      };
      const finish = () => {
        root.classList.remove("qa-columns-resizing");
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", finish);
        window.removeEventListener("pointercancel", finish);
      };
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", finish);
      window.addEventListener("pointercancel", finish);
    };

    root.addEventListener("pointerdown", start);
    root.addEventListener("dblclick", reset);
    return () => {
      observer.disconnect();
      root.removeEventListener("pointerdown", start);
      root.removeEventListener("dblclick", reset);
    };
  }, []);
}
