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
  maxWidth?: number;
  padding?: string;
  subtitle?: ReactNode;
}

const highlight = keyframes`
  0% { box-shadow: 0 0 0 transparent; }
  30% { box-shadow: 0 0 0 4px color-mix(in srgb, var(--section-accent) 15%, transparent), 0 0 30px color-mix(in srgb, var(--section-accent) 45%, transparent); }
  100% { box-shadow: 0 0 0 transparent; }
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
  scroll-margin-top: 84px;
  background: ${(p) => p.$background};
  ${(p) => p.$highlighted && css`animation: ${highlight} 3s ease;`}
`;

const Container = styled.div<{ $maxWidth: number }>`
  max-width: ${(p) => p.$maxWidth}px;
  margin: 0 auto;
`;

const Header = styled.header`
  margin-bottom: 3rem;
`;

const Label = styled.p<{ $accentColor: string }>`
  margin: 0 0 0.75rem;
  color: ${(p) => p.$accentColor};
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  max-width: 650px;
  margin: 0;
  color: #0c1445;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  max-width: 560px;
  margin: 1rem 0 0;
  color: #4b5684;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  line-height: 1.75;
`;

export function ContentSection({
  accentColor,
  background = "#f7f9ff",
  children,
  highlighted = false,
  id,
  label,
  maxWidth = 1100,
  padding = "5rem 1.5rem",
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
