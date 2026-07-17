import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

export interface ServiceCardItem {
  accentColor: string;
  description: string;
  icon: ReactNode;
  iconBackground: string;
  title: string;
  to: string;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(var(--value-260px), var(--percent-full)), var(--value-1fr)));
  gap: var(--space-6);
`;

const Card = styled(HashLink)<{ $accentColor: string }>`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-8);
  border: var(--value-1px) solid color-mix(in srgb, ${(p) => p.$accentColor} var(--percent-14), transparent);
  border-radius: var(--radius-card);
  background: var(--color-surface);
  text-decoration: none;
  transition: box-shadow var(--value-0-25s), transform var(--value-0-25s), border-color var(--value-0-25s);

  &:hover {
    border-color: color-mix(in srgb, ${(p) => p.$accentColor} var(--percent-45), transparent);
    box-shadow: var(--number-zero) var(--value-8px) var(--value-28px) color-mix(in srgb, ${(p) => p.$accentColor} var(--percent-22), transparent);
    transform: translateY(var(--value-neg-3px));
  }
`;

const Icon = styled.div<{ $background: string }>`
  display: flex;
  width: var(--size-52);
  height: var(--size-52);
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-card-sm);
  background: ${(p) => p.$background};
`;

const Title = styled.h3`
  margin: var(--space-0);
  color: var(--color-navy-950);
  font-family: var(--font-display);
  font-size: var(--font-size-feature-title);
  font-weight: var(--font-weight-bold);
`;

const Description = styled.p`
  flex: var(--number-one);
  margin: var(--space-0);
  color: var(--color-text-muted);
  font-family: var(--font-body);
  font-size: var(--font-size-body-sm);
  line-height: var(--line-height-looser);
`;

const More = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1-4);
  margin-top: var(--space-2);
  color: var(--color-blue-600);
  font-family: var(--font-body);
  font-size: var(--font-size-base-sm);
  font-weight: var(--font-weight-semibold);
  transition: gap var(--value-0-2s);

  ${Card}:hover & { gap: var(--space-2-4); }
`;

export function ServiceCards({ items }: { items: readonly ServiceCardItem[] }) {
  return (
    <Grid>
      {items.map((item) => (
        <Card key={item.to} to={item.to} $accentColor={item.accentColor}>
          <Icon $background={item.iconBackground}>{item.icon}</Icon>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
          <More>Saiba mais <ArrowRight size="var(--size-14)" /></More>
        </Card>
      ))}
    </Grid>
  );
}
