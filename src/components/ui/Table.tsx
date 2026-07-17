import { ReactNode, TdHTMLAttributes, ThHTMLAttributes } from "react";
import styled from "styled-components";

// ─── Outer scroll wrapper ─────────────────────────────────────────────────────────

const ScrollWrap = styled.div`
  overflow-x: auto;
  border-radius: 14px;
  border: 1px solid rgba(29,78,216,0.09);

  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(29,78,216,0.2);
    border-radius: 2px;
  }
`;

// ─── Table ────────────────────────────────────────────────────────────────────────

const TableEl = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
`;

const ThEl = styled.th`
  text-align: left;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: #717182;
  padding: 0.75rem 1.25rem;
  background: #f8faff;
  border-bottom: 1px solid rgba(29,78,216,0.08);
  white-space: nowrap;
`;

const TdEl = styled.td<{ $mono?: boolean; $align?: "left"|"center"|"right" }>`
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid rgba(29,78,216,0.06);
  color: ${p => p.$mono ? "#1d4ed8" : "#374151"};
  font-family: ${p => p.$mono ? "'JetBrains Mono','Fira Code',monospace" : "inherit"};
  font-size: ${p => p.$mono ? "0.75rem" : "inherit"};
  vertical-align: middle;
  text-align: ${p => p.$align ?? "left"};
`;

const TrEl = styled.tr<{ $selected?: boolean; $highlighted?: boolean; $muted?: boolean }>`
  background: ${p => p.$selected ? "#eff6ff" : p.$highlighted ? "#fefce8" : "transparent"};
  opacity: ${p => p.$muted ? 0.45 : 1};
  &:last-child td { border-bottom: none; }
  &:hover td { background: rgba(29,78,216,0.02); }
  cursor: ${p => p.onClick ? "pointer" : "default"};
  transition: background 0.15s;
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
