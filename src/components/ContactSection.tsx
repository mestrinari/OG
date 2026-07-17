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
  from { box-shadow: 0 4px 30px rgba(76,127,239,0.5); }
  to { box-shadow: 0 0 0 rgba(12,20,69,0); }
`;
const overlayFade = keyframes`
  from { background: rgba(15,1,86,0.1); }
  to { background: rgba(15,1,86,0); }
`;
const Overlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  z-index: ${(p) => (p.$visible ? 201 : 10)};
  inset: 0;
  pointer-events: none;
  ${(p) => p.$visible && css`animation: ${overlayFade} 2s linear;`}
`;
const Section = styled.section<{ $highlighted: boolean }>`
  position: relative;
  padding: 5rem 1.5rem;
  scroll-margin-top: 84px;
  background: linear-gradient(160deg, #0c1445 0%, #1e3a8a 100%);
  text-align: center;
  ${(p) => p.$highlighted && css`z-index: 20; animation: ${pulse} 3s linear;`}
`;
const Title = styled.h2`
  margin: 0 0 1rem;
  color: white;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
`;
const Subtitle = styled.p`
  max-width: 480px;
  margin: 0 auto 2.5rem;
  color: rgba(255,255,255,0.65);
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  line-height: 1.75;
`;
const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
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
