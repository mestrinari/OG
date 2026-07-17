import { ReactNode } from "react";
import styled from "styled-components";

// ─── SectionHeader ───────────────────────────────────────────────────────────────
// Padrão: eyebrow + title + subtitle usado em todas as páginas do site

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

const Wrap = styled.div<{ $align: "left"|"center" }>`
  text-align: ${p => p.$align};
  ${p => p.$align === "center" && "display: flex; flex-direction: column; align-items: center;"}
`;

const Eyebrow = styled.p<{ $dark: boolean }>`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${p => p.$dark ? "#60a5fa" : "#2563eb"};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

const EyebrowLine = styled.span<{ $dark: boolean }>`
  display: inline-block;
  width: 20px;
  height: 2px;
  background: ${p => p.$dark ? "#60a5fa" : "#2563eb"};
  border-radius: 2px;
  flex-shrink: 0;
`;

const Title = styled.h2<{ $dark: boolean }>`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: ${p => p.$dark ? "white" : "#0c1445"};
  letter-spacing: -0.025em;
  margin-bottom: 0.75rem;
  line-height: 1.15;
`;

const Subtitle = styled.p<{ $dark: boolean; $align: "left"|"center" }>`
  font-size: 1.0625rem;
  color: ${p => p.$dark ? "rgba(255,255,255,0.6)" : "#4b5684"};
  line-height: 1.7;
  max-width: ${p => p.$align === "center" ? "600px" : "none"};
`;

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <Wrap $align={align} className={className}>
      {eyebrow && (
        <Eyebrow $dark={dark}>
          <EyebrowLine $dark={dark} />
          {eyebrow}
        </Eyebrow>
      )}
      <Title $dark={dark}>{title}</Title>
      {subtitle && <Subtitle $dark={dark} $align={align}>{subtitle}</Subtitle>}
    </Wrap>
  );
}

// ─── PageSection ─────────────────────────────────────────────────────────────────
// Container de seção com padding consistente

export interface PageSectionProps {
  children: ReactNode;
  id?: string;
  bg?: string;
  tight?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const SectionEl = styled.section<{ $bg?: string; $tight: boolean }>`
  background: ${p => p.$bg ?? "transparent"};
  padding: ${p => p.$tight ? "3rem 1.5rem" : "5rem 1.5rem"};

  @media (max-width: 768px) {
    padding: ${p => p.$tight ? "2rem 1rem" : "3.5rem 1rem"};
  }
`;

const SectionInner = styled.div`
  max-width: 1366px;
  margin: 0 auto;
`;

export function PageSection({ children, id, bg, tight = false, ...rest }: PageSectionProps) {
  return (
    <SectionEl id={id} $bg={bg} $tight={tight} {...rest}>
      <SectionInner>{children}</SectionInner>
    </SectionEl>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────────────

export interface DividerProps {
  my?: string;
  gradient?: boolean;
  label?: string;
  className?: string;
}

const DividerWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Line = styled.div<{ $gradient: boolean }>`
  flex: 1;
  height: 1px;
  background: ${p =>
    p.$gradient
      ? "linear-gradient(90deg, transparent, rgba(29,78,216,0.25), transparent)"
      : "rgba(29,78,216,0.1)"};
`;

const DividerLabel = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
`;

const PlainDivider = styled.div<{ $my: string }>`
  height: 1px;
  background: rgba(29,78,216,0.1);
  margin: ${p => p.$my};
`;

export function Divider({ my = "0", gradient = false, label, className }: DividerProps) {
  if (label) {
    return (
      <DividerWrap className={className} style={{ margin: my ? `${my} 0` : undefined }}>
        <Line $gradient={gradient} />
        <DividerLabel>{label}</DividerLabel>
        <Line $gradient={gradient} />
      </DividerWrap>
    );
  }
  return <PlainDivider $my={my} className={className} />;
}

// ─── Code + CodeBlock ─────────────────────────────────────────────────────────────

export const InlineCode = styled.code`
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.78em;
  background: #f0f4ff;
  color: #1d4ed8;
  padding: 0.1rem 0.4rem;
  border-radius: 5px;
  border: 1px solid rgba(29,78,216,0.1);
`;

export const CodeBlock = styled.pre`
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.78rem;
  background: #0c1445;
  color: #93c5fd;
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  overflow-x: auto;
  line-height: 1.65;
  margin: 0;
`;
