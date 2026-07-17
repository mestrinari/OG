import { ReactNode, TdHTMLAttributes, ThHTMLAttributes } from "react";
import styled from "styled-components";

// ─── Outer scroll wrapper ─────────────────────────────────────────────────────────

const ScrollWrap = styled.div`
  overflow-x: auto;
  border-radius: var(--radius-card-sm);
  border: var(--value-1px) solid var(--alpha-blue-09);

  &::-webkit-scrollbar {
    height: var(--size-4);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--alpha-blue-20);
    border-radius: calc(var(--radius-sm) / 3);
  }
`;

// ─── Table ────────────────────────────────────────────────────────────────────────

const TableEl = styled.table`
  width: var(--percent-full);
  border-collapse: collapse;
  background: var(--color-surface);
  font-family: var(--font-body);
  font-size: var(--font-size-xs-plus);
`;

const ThEl = styled.th`
  text-align: left;
  font-family: var(--font-display);
  font-size: var(--font-size-2xs);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--value-0-07em);
  color: var(--color-gray-500);
  padding: var(--space-3) var(--space-5);
  background: var(--color-background-alt);
  border-bottom: var(--value-1px) solid var(--alpha-blue-08);
  white-space: nowrap;
`;

const TdEl = styled.td<{ $mono?: boolean; $align?: "left"|"center"|"right" }>`
  padding: var(--space-3) var(--space-5);
  border-bottom: var(--value-1px) solid var(--alpha-blue-06);
  color: ${p => p.$mono ? "var(--color-blue-700)" : "var(--color-gray-700)"};
  font-family: ${p => p.$mono ? "'JetBrains Mono','Fira Code',monospace" : "inherit"};
  font-size: ${p => p.$mono ? "var(--value-0-75rem)" : "inherit"};
  vertical-align: middle;
  text-align: ${p => p.$align ?? "left"};
`;

const TrEl = styled.tr<{ $selected?: boolean; $highlighted?: boolean; $muted?: boolean }>`
  background: ${p => p.$selected ? "var(--color-blue-50)" : p.$highlighted ? "var(--color-amber-50)" : "transparent"};
  opacity: ${p => p.$muted ? 0.45 : 1};
  &:last-child td { border-bottom: none; }
  &:hover td { background: var(--alpha-blue-02); }
  cursor: ${p => p.onClick ? "pointer" : "default"};
  transition: background var(--value-0-15s);
`;

// ─── Public API ──────────────────────────────────────────────────────────────────

export interface TableProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Table({ children, ...rest }: TableProps) {
  return (
    <ScrollWrap {...rest}>
      <TableEl>{children}</TableEl>
    </ScrollWrap>
  );
}

export interface ThProps extends ThHTMLAttributes<HTMLTableCellElement> {
  children?: ReactNode;
}

export function Th({ children, ...rest }: ThProps) {
  return <ThEl {...rest}>{children}</ThEl>;
}

export interface TdProps extends TdHTMLAttributes<HTMLTableCellElement> {
  mono?: boolean;
  align?: "left" | "center" | "right";
  children?: ReactNode;
}

export function Td({ mono, align, children, ...rest }: TdProps) {
  return <TdEl $mono={mono} $align={align} {...rest}>{children}</TdEl>;
}

export interface TrProps {
  selected?: boolean;
  highlighted?: boolean;
  muted?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

export function Tr({ selected, highlighted, muted, onClick, children }: TrProps) {
  return (
    <TrEl $selected={selected} $highlighted={highlighted} $muted={muted} onClick={onClick}>
      {children}
    </TrEl>
  );
}

/* ── shorthand thead/tbody/tfoot wrappers (just pass through with semantic tags) ── */
export const Thead = ({ children }: { children: ReactNode }) => <thead>{children}</thead>;
export const Tbody = ({ children }: { children: ReactNode }) => <tbody>{children}</tbody>;
