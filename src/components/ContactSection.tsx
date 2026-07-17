import type { ReactNode } from "react";
import styled, { css, keyframes } from "styled-components";

interface ContactSectionProps {
  actions: ReactNode;
  highlighted: boolean;
  subtitle: ReactNode;
  title: ReactNode;
  id?: string;
}

const pulse = keyframes`
  from { box-shadow: var(--number-zero) var(--value-4px) var(--value-30px) var(--alpha-contact-glow); }
  to { box-shadow: var(--number-zero) var(--number-zero) var(--number-zero) transparent; }
`;
const overlayFade = keyframes`
  from { background: var(--alpha-contact-highlight); }
  to { background: transparent; }
`;
const Overlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  z-index: ${(p) => (p.$visible ? "var(--z-page-overlay)" : "var(--z-dormant)")};
  inset: 0;
  pointer-events: none;
  ${(p) => p.$visible && css`animation: ${overlayFade} var(--value-2s) linear;`}
`;
const Section = styled.section<{ $highlighted: boolean }>`
  position: relative;
  padding: var(--space-20) var(--space-6);
  scroll-margin-top: var(--size-anchor-offset);
  background: linear-gradient(var(--value-160deg), var(--color-navy-950) var(--percent-0), var(--color-blue-900) var(--percent-full));
  text-align: center;
  ${(p) => p.$highlighted && css`z-index: var(--z-highlighted); animation: ${pulse} var(--value-3s) linear;`}
`;
const Title = styled.h2`
  margin: var(--number-zero) var(--number-zero) var(--space-4);
  color: var(--color-surface);
  font-family: var(--font-display);
  font-size: clamp(var(--value-1-75rem), var(--value-3-5vw), var(--value-2-5rem));
  font-weight: var(--font-weight-extrabold);
`;
const Subtitle = styled.p`
  max-width: var(--size-content-small);
  margin: var(--number-zero) auto var(--space-10);
  color: var(--alpha-white-65);
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  line-height: var(--line-height-airy);
`;
const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-4);
`;

export function ContactSection({
  actions,
  highlighted,
  id = "contato",
  subtitle,
  title,
}: ContactSectionProps) {
  return (
    <>
      <Overlay $visible={highlighted} />
      <Section id={id} $highlighted={highlighted}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Actions>{actions}</Actions>
      </Section>
    </>
  );
}
