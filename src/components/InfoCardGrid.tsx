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
  minCardWidth?: number;
  variant?: "centered" | "horizontal" | "stacked";
}

const Grid = styled.div<{ $marginBottom: string; $minCardWidth: number }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(${(p) => p.$minCardWidth}px, 100%), 1fr));
  gap: 1rem;
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
  gap: ${(p) => (p.$variant === "horizontal" ? "0.875rem" : "0.75rem")};
  padding: 1.375rem 1.5rem;
  border: 1px solid color-mix(in srgb, ${(p) => p.$accentColor} 10%, transparent);
  border-radius: 12px;
  background: ${(p) => p.$background};
  text-align: ${(p) => (p.$variant === "centered" ? "center" : "left")};
`;

const Icon = styled.div<{ $background: string; $centered: boolean }>`
  display: flex;
  width: ${(p) => (p.$centered ? 52 : 40)}px;
  height: ${(p) => (p.$centered ? 52 : 40)}px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: ${(p) => (p.$centered ? "50%" : "10px")};
  background: ${(p) => p.$background};
`;

const Text = styled.div``;

const Title = styled.h3<{ $color: string }>`
  margin: 0 0 0.3rem;
  color: ${(p) => p.$color};
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
`;

const Description = styled.p<{ $color: string }>`
  margin: 0;
  color: ${(p) => p.$color};
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  line-height: 1.6;
`;

export function InfoCardGrid({
  accentColor,
  iconBackground,
  items,
  marginBottom = "0",
  minCardWidth = 200,
  variant = "horizontal",
}: InfoCardGridProps) {
  return (
    <Grid $marginBottom={marginBottom} $minCardWidth={minCardWidth}>
      {items.map((item, index) => (
        <Card
          key={`${String(item.title)}-${index}`}
          $accentColor={accentColor}
          $background={item.background ?? "white"}
          $variant={variant}
        >
          <Icon
            $background={item.iconBackground ?? iconBackground}
            $centered={variant === "centered"}
          >
            {item.icon}
          </Icon>
          <Text>
            <Title $color={item.titleColor ?? "#0c1445"}>{item.title}</Title>
            <Description $color={item.descriptionColor ?? "#4b5684"}>
              {item.description}
            </Description>
          </Text>
        </Card>
      ))}
    </Grid>
  );
}
