import type { ReactNode } from "react";
import styled from "styled-components";

export interface PillItem {
  background: string;
  color: string;
  content: ReactNode;
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-bottom: var(--space-10);
`;

const Pill = styled.span<{ $background: string; $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2-5) var(--space-4-5);
  border: var(--value-1px) solid color-mix(in srgb, ${(p) => p.$color} var(--percent-24), transparent);
  border-radius: var(--radius-pill);
  background: ${(p) => p.$background};
  color: ${(p) => p.$color};
  font-family: var(--font-body);
  font-size: var(--font-size-base-sm);
  font-weight: var(--font-weight-semibold);
`;

export function PillList({ items }: { items: readonly PillItem[] }) {
  return (
    <List>
      {items.map((item, index) => (
        <Pill key={index} $background={item.background} $color={item.color}>
          {item.content}
        </Pill>
      ))}
    </List>
  );
}
