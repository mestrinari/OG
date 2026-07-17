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
  subtitleMaxWidth?: string;
  titleMaxWidth?: string;
}

export const heroThemes = {
  home: {
    background:
      "linear-gradient(var(--value-160deg), var(--color-navy-950) var(--percent-0), var(--color-navy-900) var(--percent-half), var(--color-navy-850) var(--percent-full))",
    badgeBackground: "var(--alpha-primary-20)",
    badgeBorder: "var(--alpha-primary-40)",
    badgeColor: "var(--color-blue-200)",
    titleAccent: "linear-gradient(var(--value-90deg), var(--color-blue-400), var(--color-cyan-600))",
    topGlow: "var(--alpha-blue-15)",
    bottomGlow: "var(--alpha-cyan-12)",
  },
  web: {
    background: "linear-gradient(var(--value-160deg), var(--color-navy-950) var(--percent-0), var(--color-blue-900) var(--percent-full))",
    badgeBackground: "var(--alpha-primary-20)",
    badgeBorder: "var(--alpha-primary-40)",
    badgeColor: "var(--color-blue-200)",
  },
  mobile: {
    background: "linear-gradient(var(--value-160deg), var(--color-navy-850) var(--percent-0), var(--color-cyan-700) var(--percent-full))",
    badgeBackground: "var(--alpha-cyan-25)",
    badgeBorder: "var(--alpha-cyan-45)",
    badgeColor: "var(--color-cyan-300)",
  },
  software: {
    background: "linear-gradient(var(--value-160deg), var(--color-purple-900) var(--percent-0), var(--color-purple-800) var(--percent-full))",
    badgeBackground: "var(--alpha-purple-25)",
    badgeBorder: "var(--alpha-purple-45)",
    badgeColor: "var(--color-purple-200)",
  },
  localSystems: {
    background: "linear-gradient(var(--value-160deg), var(--color-navy-local) var(--percent-0), var(--color-green-500) var(--percent-full))",
    badgeBackground: "var(--alpha-emerald-25)",
    badgeBorder: "var(--alpha-green-50)",
    badgeColor: "var(--color-green-200)",
  },
} satisfies Record<string, HeroTheme>;

const fadeUp = keyframes`
  from { opacity: var(--number-zero); transform: translateY(var(--value-24px)); }
  to { opacity: var(--number-one); transform: translateY(var(--number-zero)); }
`;

const Root = styled.section<{
  $background: string;
  $bottomGlow?: string;
  $fullHeight: boolean;
  $topGlow?: string;
}>`
  position: relative;
  display: flex;
  min-height: ${(p) => (p.$fullHeight ? "var(--value-100vh)" : "auto")};
  padding: var(--space-40) var(--space-48);
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
    border-radius: var(--radius-round);
    pointer-events: none;
  }

  &::before {
    width: var(--size-glow-large);
    height: var(--size-glow-large);
    top: var(--value-neg-150px);
    right: var(--value-neg-100px);
    background: radial-gradient(
      circle,
      ${(p) => p.$topGlow ?? "transparent"} var(--percent-0),
      transparent var(--percent-70)
    );
  }

  &::after {
    width: var(--size-glow-small);
    height: var(--size-glow-small);
    bottom: var(--value-50px);
    left: var(--value-neg-50px);
    background: radial-gradient(
      circle,
      ${(p) => p.$bottomGlow ?? "transparent"} var(--percent-0),
      transparent var(--percent-70)
    );
  }
`;

const animation = (delay: number) => css`
  animation: ${fadeUp} var(--value-0-6s) ${delay}s ease both;
`;

const Badge = styled.div<{
  $animated: boolean;
  $background: string;
  $border: string;
  $color: string;
  $fullHeight: boolean;
}>`
  position: relative;
  z-index: var(--z-content);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: ${(p) => (p.$fullHeight ? "var(--value-2rem)" : "var(--value-1-5rem)")};
  padding: var(--space-1-5) var(--space-4);
  border: var(--value-1px) solid ${(p) => p.$border};
  border-radius: var(--radius-pill);
  background: ${(p) => p.$background};
  color: ${(p) => p.$color};
  font-family: var(--font-body);
  font-size: ${(p) => (p.$fullHeight ? "var(--value-0-8rem)" : "var(--value-0-75rem)")};
  font-weight: ${(p) => (p.$fullHeight ? "var(--font-weight-semibold)" : "var(--font-weight-bold)")};
  letter-spacing: ${(p) => (p.$fullHeight ? "var(--value-0-04em)" : "var(--value-0-06em)")};
  text-transform: uppercase;
  ${(p) => p.$animated && animation(0)}
`;

const Title = styled.h1<{
  $accent?: string;
  $animated: boolean;
  $fullHeight: boolean;
  $maxWidth: string;
}>`
  position: relative;
  z-index: var(--z-content);
  max-width: ${(p) => p.$maxWidth};
  margin: var(--number-zero) auto var(--value-1-45rem);
  color: var(--color-surface);
  font-family: var(--font-display);
  font-size: ${(p) =>
    p.$fullHeight ? "clamp(var(--value-2-2rem), var(--value-6vw), var(--value-4rem))" : "clamp(var(--value-2rem), var(--value-5vw), var(--value-3-5rem))"};
  font-weight: var(--font-weight-extrabold);
  letter-spacing: var(--value-neg-0-025em);
  line-height: var(--line-height-tight);
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
  $maxWidth: string;
}>`
  position: relative;
  z-index: var(--z-content);
  max-width: ${(p) => p.$maxWidth};
  margin: ${(p) => (p.$fullHeight ? "var(--value-0-25rem) auto var(--number-zero)" : "var(--number-zero) auto")};
  color: var(--alpha-white-65);
  font-family: var(--font-body);
  font-size: ${(p) => (p.$fullHeight ? "var(--value-1-125rem)" : "var(--value-1-1rem)")};
  line-height: var(--line-height-airy);
  ${(p) => p.$animated && animation(0.2)}
`;

const Actions = styled.div<{ $animated: boolean }>`
  position: relative;
  z-index: var(--z-content);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-4);
  margin-top: var(--space-6-4);
  ${(p) => p.$animated && animation(0.3)}
`;

export function Hero({
  actions,
  animated = false,
  badge,
  fullHeight = false,
  id = "hero",
  subtitle,
  subtitleMaxWidth = fullHeight ? "var(--size-580)" : "var(--max-width-content)",
  theme,
  title,
  titleMaxWidth = fullHeight ? "var(--size-title-wide)" : "var(--size-content-wide)",
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
