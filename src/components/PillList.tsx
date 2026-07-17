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
  gap: 0.75rem;
  margin-bottom: 2.5rem;
`;

const Pill = styled.span<{ $background: string; $color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.125rem;
  border: 1px solid color-mix(in srgb, ${(p) => p.$color} 24%, transparent);
  border-radius: 100px;
  background: ${(p) => p.$background};
  color: ${(p) => p.$color};
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
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
