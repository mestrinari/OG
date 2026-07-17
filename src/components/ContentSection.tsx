import type { ReactNode } from "react";
import styled, { css, keyframes } from "styled-components";

interface ContentSectionProps {
  accentColor: string;
  children: ReactNode;
  id: string;
  label: ReactNode;
  title: ReactNode;
  background?: string;
  highlighted?: boolean;
  maxWidth?: string;
  padding?: string;
  subtitle?: ReactNode;
}

const highlight = keyframes`
  0% { box-shadow: var(--number-zero) var(--number-zero) var(--number-zero) transparent; }
  30% { box-shadow: var(--number-zero) var(--number-zero) var(--number-zero) var(--value-4px) color-mix(in srgb, var(--section-accent) var(--percent-15), transparent), var(--number-zero) var(--number-zero) var(--value-30px) color-mix(in srgb, var(--section-accent) var(--percent-45), transparent); }
  100% { box-shadow: var(--number-zero) var(--number-zero) var(--number-zero) transparent; }
`;

const Section = styled.section<{
  $accentColor: string;
  $background: string;
  $highlighted: boolean;
  $padding: string;
}>`
  --section-accent: ${(p) => p.$accentColor};
  position: relative;
  padding: ${(p) => p.$padding};
  scroll-margin-top: var(--size-anchor-offset);
  background: ${(p) => p.$background};
  ${(p) => p.$highlighted && css`animation: ${highlight} var(--value-3s) ease;`}
`;

const Container = styled.div<{ $maxWidth: string }>`
  max-width: ${(p) => p.$maxWidth};
  margin: var(--number-zero) auto;
`;

const Header = styled.header`
  margin-bottom: var(--space-12);
`;

const Label = styled.p<{ $accentColor: string }>`
  margin: var(--number-zero) var(--number-zero) var(--space-3);
  color: ${(p) => p.$accentColor};
  font-family: var(--font-body);
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--value-0-1em);
  text-transform: uppercase;
`;

const Title = styled.h2`
  max-width: var(--size-650);
  margin: var(--space-0);
  color: var(--color-navy-950);
  font-family: var(--font-display);
  font-size: clamp(var(--value-1-6rem), var(--value-3vw), var(--value-2-5rem));
  font-weight: var(--font-weight-extrabold);
  letter-spacing: var(--value-neg-0-02em);
  line-height: var(--line-height-compact);
`;

const Subtitle = styled.p`
  max-width: var(--size-content);
  margin: var(--space-4) var(--number-zero) var(--number-zero);
  color: var(--color-text-muted);
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  line-height: var(--line-height-airy);
`;

export function ContentSection({
  accentColor,
  background = "var(--color-background)",
  children,
  highlighted = false,
  id,
  label,
  maxWidth = "var(--max-width-narrow)",
  padding = "var(--space-20) var(--space-6)",
  subtitle,
  title,
}: ContentSectionProps) {
  return (
    <Section
      id={id}
      $accentColor={accentColor}
      $background={background}
      $highlighted={highlighted}
      $padding={padding}
    >
      <Container $maxWidth={maxWidth}>
        <Header>
          <Label $accentColor={accentColor}>{label}</Label>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Header>
        {children}
      </Container>
    </Section>
  );
}
