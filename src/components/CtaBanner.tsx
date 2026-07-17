import type { ReactNode } from "react";
import styled from "styled-components";

import { breakpoints } from "../styles/breakpoints";
interface CtaBannerProps {
  action: ReactNode;
  background: string;
  subtitle: ReactNode;
  title: ReactNode;
  badge?: ReactNode;
  id?: string;
  layout?: "centered" | "split";
  marginTop?: string;
}

const Banner = styled.aside<{
  $background: string;
  $layout: "centered" | "split";
  $marginTop: string;
}>`
  display: grid;
  grid-template-columns: ${(p) => (p.$layout === "split" ? "var(--value-1fr) auto" : "var(--value-1fr)")};
  gap: var(--space-8);
  align-items: center;
  margin-top: ${(p) => p.$marginTop};
  padding: var(--space-12) var(--space-8);
  border-radius: var(--radius-banner);
  background: ${(p) => p.$background};
  text-align: ${(p) => (p.$layout === "centered" ? "center" : "left")};

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: var(--value-1fr);
    text-align: center;
  }
`;

const Text = styled.div``;
const Badge = styled.div`margin-bottom: var(--space-4);`;
const Title = styled.h3`
  margin: var(--number-zero) var(--number-zero) var(--space-3);
  color: var(--color-surface);
  font-family: var(--font-display);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-extrabold);
  line-height: var(--line-height-snug);
`;
const Subtitle = styled.p<{ $split: boolean }>`
  max-width: ${(p) => (p.$split ? "var(--value-520px)" : "none")};
  margin: var(--space-0);
  color: var(--alpha-white-65);
  font-family: var(--font-body);
  font-size: var(--font-size-body-sm);
  line-height: var(--line-height-airy);
`;
const Action = styled.div<{ $split: boolean }>`
  display: flex;
  justify-content: ${(p) => (p.$split ? "flex-end" : "center")};
  margin-top: ${(p) => (p.$split ? "0" : "var(--space-7)")};
`;

export const BannerBadge = styled.span<{
  $background?: string;
  $border?: string;
  $color?: string;
}>`
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  border: var(--value-1px) solid ${(p) => p.$border ?? "var(--alpha-cyan-40)"};
  border-radius: var(--radius-pill);
  background: ${(p) => p.$background ?? "var(--alpha-cyan-20)"};
  color: ${(p) => p.$color ?? "var(--color-cyan-300)"};
  font-family: var(--font-body);
  font-size: var(--font-size-micro);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--value-0-08em);
  text-transform: uppercase;
`;

export function CtaBanner({
  action,
  background,
  badge,
  id,
  layout = "centered",
  marginTop = "var(--value-4rem)",
  subtitle,
  title,
}: CtaBannerProps) {
  const split = layout === "split";
  return (
    <Banner id={id} $background={background} $layout={layout} $marginTop={marginTop}>
      <Text>
        {badge && <Badge>{badge}</Badge>}
        <Title>{title}</Title>
        <Subtitle $split={split}>{subtitle}</Subtitle>
      </Text>
      <Action $split={split}>{action}</Action>
    </Banner>
  );
}
