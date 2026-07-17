import type { ReactNode } from "react";
import styled from "styled-components";

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
  grid-template-columns: ${(p) => (p.$layout === "split" ? "1fr auto" : "1fr")};
  gap: 2rem;
  align-items: center;
  margin-top: ${(p) => p.$marginTop};
  padding: 3rem 2rem;
  border-radius: 20px;
  background: ${(p) => p.$background};
  text-align: ${(p) => (p.$layout === "centered" ? "center" : "left")};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Text = styled.div``;
const Badge = styled.div`margin-bottom: 1rem;`;
const Title = styled.h3`
  margin: 0 0 0.75rem;
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 1.25;
`;
const Subtitle = styled.p<{ $split: boolean }>`
  max-width: ${(p) => (p.$split ? "520px" : "none")};
  margin: 0;
  color: rgba(255, 255, 255, 0.65);
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  line-height: 1.75;
`;
const Action = styled.div<{ $split: boolean }>`
  display: flex;
  justify-content: ${(p) => (p.$split ? "flex-end" : "center")};
  margin-top: ${(p) => (p.$split ? "0" : "1.75rem")};
`;

export const BannerBadge = styled.span<{
  $background?: string;
  $border?: string;
  $color?: string;
}>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border: 1px solid ${(p) => p.$border ?? "rgba(8,145,178,0.4)"};
  border-radius: 100px;
  background: ${(p) => p.$background ?? "rgba(8,145,178,0.2)"};
  color: ${(p) => p.$color ?? "#7dd3fc"};
  font-family: "Inter", sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export function CtaBanner({
  action,
  background,
  badge,
  id,
  layout = "centered",
  marginTop = "4rem",
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
