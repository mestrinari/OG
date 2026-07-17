import { ReactNode } from "react";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

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
  font-size: var(--font-size-micro);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--value-0-1em);
  text-transform: uppercase;
  color: ${p => p.$dark ? "var(--color-blue-400)" : "var(--color-blue-600)"};
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-3);
`;

const EyebrowLine = styled.span<{ $dark: boolean }>`
  display: inline-block;
  width: var(--size-20);
  height: var(--size-2);
  background: ${p => p.$dark ? "var(--color-blue-400)" : "var(--color-blue-600)"};
  border-radius: calc(var(--radius-sm) / 3);
  flex-shrink: 0;
`;

const Title = styled.h2<{ $dark: boolean }>`
  font-family: var(--font-display);
  font-size: clamp(var(--value-1-6rem), var(--value-3vw), var(--value-2-25rem));
  font-weight: var(--font-weight-extrabold);
  color: ${p => p.$dark ? "var(--color-surface)" : "var(--color-navy-950)"};
  letter-spacing: var(--value-neg-0-025em);
  margin-bottom: var(--space-3);
  line-height: var(--line-height-tight);
`;

const Subtitle = styled.p<{ $dark: boolean; $align: "left"|"center" }>`
  font-size: var(--font-size-section-subtitle);
  color: ${p => p.$dark ? "var(--alpha-white-60)" : "var(--color-text-muted)"};
  line-height: var(--line-height-reading);
  max-width: ${p => p.$align === "center" ? "var(--value-600px)" : "none"};
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
  padding: ${p => p.$tight ? "var(--value-3rem) var(--value-12rem)" : "var(--value-5rem) var(--value-1-5rem)"};

  @media (max-width: ${breakpoints.desktop}) {
    padding: ${p => p.$tight ? "var(--value-2rem) var(--value-1rem)" : "var(--value-3-5rem) var(--value-1rem)"};
  }
`;

const SectionInner = styled.div`
  // max-width: var(--size-container);
  margin: var(--number-zero) auto;
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
  gap: var(--space-4);
`;

const Line = styled.div<{ $gradient: boolean }>`
  flex: var(--number-one);
  height: var(--size-1);
  background: ${p =>
    p.$gradient
      ? "linear-gradient(var(--value-90deg), transparent, var(--alpha-blue-25), transparent)"
      : "var(--alpha-blue-10)"};
`;

const DividerLabel = styled.span`
  font-size: var(--font-size-micro);
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-400);
  text-transform: uppercase;
  letter-spacing: var(--value-0-08em);
  white-space: nowrap;
`;

const PlainDivider = styled.div<{ $my: string }>`
  height: var(--size-1);
  background: var(--alpha-blue-10);
  margin: ${p => p.$my};
`;

export function Divider({ my = "0", gradient = false, label, className }: DividerProps) {
  if (label) {
    return (
      <DividerWrap className={className} style={{ margin: my ? `${my} var(--number-zero)` : undefined }}>
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
  font-family: var(--font-mono);
  font-size: var(--value-0-78em);
  background: var(--color-surface-muted);
  color: var(--color-blue-700);
  padding: var(--space-0-4) var(--space-1-6);
  border-radius: var(--radius-xs);
  border: var(--value-1px) solid var(--alpha-blue-10);
`;

export const CodeBlock = styled.pre`
  font-family: var(--font-mono);
  font-size: var(--font-size-caption);
  background: var(--color-navy-950);
  color: var(--color-blue-200);
  padding: var(--space-5) var(--space-6);
  border-radius: var(--radius-card-sm);
  overflow-x: auto;
  line-height: var(--line-height-looser);
  margin: var(--space-0);
`;
