import type { ReactNode } from "react";
import styled from "styled-components";

export interface InfoCardItem {
  description: ReactNode;
  icon: ReactNode;
  title: ReactNode;
  background?: string;
  descriptionColor?: string;
  iconBackground?: string;
  titleColor?: string;
}

interface InfoCardGridProps {
  accentColor: string;
  items: readonly InfoCardItem[];
  iconBackground: string;
  marginBottom?: string;
  minCardWidth?: string;
  variant?: "centered" | "horizontal" | "stacked";
}

const Grid = styled.div<{ $marginBottom: string; $minCardWidth: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(${(p) => p.$minCardWidth}, var(--percent-full)), var(--value-1fr)));
  gap: var(--space-4);
  margin-bottom: ${(p) => p.$marginBottom};
`;

const Card = styled.article<{
  $accentColor: string;
  $background: string;
  $variant: "centered" | "horizontal" | "stacked";
}>`
  display: flex;
  flex-direction: ${(p) => (p.$variant === "horizontal" ? "row" : "column")};
  align-items: ${(p) => (p.$variant === "centered" ? "center" : "flex-start")};
  gap: ${(p) => (p.$variant === "horizontal" ? "var(--space-3-5)" : "var(--space-3)")};
  padding: var(--space-5-5) var(--space-6);
  border: var(--value-1px) solid color-mix(in srgb, ${(p) => p.$accentColor} var(--percent-10), transparent);
  border-radius: var(--radius-card-sm);
  background: ${(p) => p.$background};
  text-align: ${(p) => (p.$variant === "centered" ? "center" : "left")};
`;

const Icon = styled.div<{ $background: string; $centered: boolean }>`
  display: flex;
  width: ${(p) => (p.$centered ? "var(--size-52)" : "var(--size-40)")};
  height: ${(p) => (p.$centered ? "var(--size-52)" : "var(--size-40)")};
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: ${(p) => (p.$centered ? "var(--radius-round)" : "var(--radius-button)")};
  background: ${(p) => p.$background};
`;

const Text = styled.div``;

const Title = styled.h3<{ $color: string }>`
  margin: var(--number-zero) var(--number-zero) var(--space-1-2);
  color: ${(p) => p.$color};
  font-family: var(--font-display);
  font-size: var(--font-size-body-sm);
  font-weight: var(--font-weight-bold);
`;

const Description = styled.p<{ $color: string }>`
  margin: var(--space-0);
  color: ${(p) => p.$color};
  font-family: var(--font-body);
  font-size: var(--font-size-xs);
  line-height: var(--line-height-loose);
`;

export function InfoCardGrid({
  accentColor,
  iconBackground,
  items,
  marginBottom = "0",
  minCardWidth = "var(--size-200)",
  variant = "horizontal",
}: InfoCardGridProps) {
  return (
    <Grid $marginBottom={marginBottom} $minCardWidth={minCardWidth}>
      {items.map((item, index) => (
        <Card
          key={`${String(item.title)}-${index}`}
          $accentColor={accentColor}
          $background={item.background ?? "var(--color-surface)"}
          $variant={variant}
        >
          <Icon
            $background={item.iconBackground ?? iconBackground}
            $centered={variant === "centered"}
          >
            {item.icon}
          </Icon>
          <Text>
            <Title $color={item.titleColor ?? "var(--color-navy-950)"}>{item.title}</Title>
            <Description $color={item.descriptionColor ?? "var(--color-text-muted)"}>
              {item.description}
            </Description>
          </Text>
        </Card>
      ))}
    </Grid>
  );
}
