import type { ReactNode } from "react";
import styled, { css, keyframes } from "styled-components";

export interface HeroTheme {
  background: string;
  badgeBackground: string;
  badgeBorder: string;
  badgeColor: string;
  titleAccent?: string;
  topGlow?: string;
  bottomGlow?: string;
}

interface HeroProps {
  badge: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
  theme: HeroTheme;
  actions?: ReactNode;
  animated?: boolean;
  fullHeight?: boolean;
  id?: string;
  subtitleMaxWidth?: number;
  titleMaxWidth?: number;
}

export const heroThemes = {
  home: {
    background:
      "linear-gradient(160deg, #0c1445 0%, #0f2050 50%, #0a1930 100%)",
    badgeBackground: "rgba(37, 99, 235, 0.2)",
    badgeBorder: "rgba(37, 99, 235, 0.4)",
    badgeColor: "#93c5fd",
    titleAccent: "linear-gradient(90deg, #60a5fa, #0891b2)",
    topGlow: "rgba(37, 99, 235, 0.15)",
    bottomGlow: "rgba(8, 145, 178, 0.12)",
  },
  web: {
    background: "linear-gradient(160deg, #0c1445 0%, #1e3a8a 100%)",
    badgeBackground: "rgba(37, 99, 235, 0.2)",
    badgeBorder: "rgba(37, 99, 235, 0.4)",
    badgeColor: "#93c5fd",
  },
  mobile: {
    background: "linear-gradient(160deg, #0a1930 0%, #0e7490 100%)",
    badgeBackground: "rgba(8, 145, 178, 0.25)",
    badgeBorder: "rgba(8, 145, 178, 0.45)",
    badgeColor: "#7dd3fc",
  },
  software: {
    background: "linear-gradient(160deg, #1e1040 0%, #5b21b6 100%)",
    badgeBackground: "rgba(124, 58, 237, 0.25)",
    badgeBorder: "rgba(124, 58, 237, 0.45)",
    badgeColor: "#c4b5fd",
  },
  localSystems: {
    background: "linear-gradient(160deg, #042c1e 0%, #059669 100%)",
    badgeBackground: "rgba(5, 150, 105, 0.25)",
    badgeBorder: "rgba(5, 150, 105, 0.5)",
    badgeColor: "#6ee7b7",
  },
} satisfies Record<string, HeroTheme>;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Root = styled.section<{
  $background: string;
  $bottomGlow?: string;
  $fullHeight: boolean;
  $topGlow?: string;
}>`
  position: relative;
  display: flex;
  min-height: ${(p) => (p.$fullHeight ? "100vh" : "auto")};
  padding: 10rem 12rem 10rem;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.$background};
  text-align: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  &::before {
    width: 600px;
    height: 600px;
    top: -150px;
    right: -100px;
    background: radial-gradient(
      circle,
      ${(p) => p.$topGlow ?? "transparent"} 0%,
      transparent 70%
    );
  }

  &::after {
    width: 400px;
    height: 400px;
    bottom: 50px;
    left: -50px;
    background: radial-gradient(
      circle,
      ${(p) => p.$bottomGlow ?? "transparent"} 0%,
      transparent 70%
    );
  }
`;

const animation = (delay: number) => css`
  animation: ${fadeUp} 0.6s ${delay}s ease both;
`;

const Badge = styled.div<{
  $animated: boolean;
  $background: string;
  $border: string;
  $color: string;
  $fullHeight: boolean;
}>`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: ${(p) => (p.$fullHeight ? "2rem" : "1.5rem")};
  padding: 0.375rem 1rem;
  border: 1px solid ${(p) => p.$border};
  border-radius: 100px;
  background: ${(p) => p.$background};
  color: ${(p) => p.$color};
  font-family: "Inter", sans-serif;
  font-size: ${(p) => (p.$fullHeight ? "0.8rem" : "0.75rem")};
  font-weight: ${(p) => (p.$fullHeight ? 600 : 700)};
  letter-spacing: ${(p) => (p.$fullHeight ? "0.04em" : "0.06em")};
  text-transform: uppercase;
  ${(p) => p.$animated && animation(0)}
`;

const Title = styled.h1<{
  $accent?: string;
  $animated: boolean;
  $fullHeight: boolean;
  $maxWidth: number;
}>`
  position: relative;
  z-index: 1;
  max-width: ${(p) => p.$maxWidth}px;
  margin: 0 auto 1.45rem;
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: ${(p) =>
    p.$fullHeight ? "clamp(2.2rem, 6vw, 4rem)" : "clamp(2rem, 5vw, 3.5rem)"};
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.15;
  ${(p) => p.$animated && animation(0.1)}

  span {
    background: ${(p) => p.$accent ?? "currentColor"};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${(p) => (p.$accent ? "transparent" : "currentColor")};
  }
`;

const Subtitle = styled.p<{
  $animated: boolean;
  $fullHeight: boolean;
  $maxWidth: number;
}>`
  position: relative;
  z-index: 1;
  max-width: ${(p) => p.$maxWidth}px;
  margin: ${(p) => (p.$fullHeight ? "0.25rem auto 0" : "0 auto")};
  color: rgba(255, 255, 255, 0.65);
  font-family: "Inter", sans-serif;
  font-size: ${(p) => (p.$fullHeight ? "1.125rem" : "1.1rem")};
  line-height: 1.75;
  ${(p) => p.$animated && animation(0.2)}
`;

const Actions = styled.div<{ $animated: boolean }>`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.6rem;
  ${(p) => p.$animated && animation(0.3)}
`;

export function Hero({
  actions,
  animated = false,
  badge,
  fullHeight = false,
  id = "hero",
  subtitle,
  subtitleMaxWidth = fullHeight ? 580 : 560,
  theme,
  title,
  titleMaxWidth = fullHeight ? 760 : 700,
}: HeroProps) {
  return (
    <Root
      id={id}
      $background={theme.background}
      $bottomGlow={theme.bottomGlow}
      $fullHeight={fullHeight}
      $topGlow={theme.topGlow}
    >
      <Badge
        $animated={animated}
        $background={theme.badgeBackground}
        $border={theme.badgeBorder}
        $color={theme.badgeColor}
        $fullHeight={fullHeight}
      >
        {badge}
      </Badge>
      <Title
        $accent={theme.titleAccent}
        $animated={animated}
        $fullHeight={fullHeight}
        $maxWidth={titleMaxWidth}
      >
        {title}
      </Title>
      <Subtitle
        $animated={animated}
        $fullHeight={fullHeight}
        $maxWidth={subtitleMaxWidth}
      >
        {subtitle}
      </Subtitle>
      {actions && <Actions $animated={animated}>{actions}</Actions>}
    </Root>
  );
}
