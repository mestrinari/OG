import styled, { css, keyframes } from "styled-components";

const highlight = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(37,99,235,0);
  }

  30% {
    transform: scale(1.01);
    box-shadow:
      0 0 0 4px rgba(37,99,235,0.15),
      0 0 30px rgba(37,99,235,0.45);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(37,99,235,0);
  }
`;

// ─── Animations ────────────────────────────────────────────────────────────────

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ─── Section Shared ─────────────────────────────────────────────────────────────

const View = styled.section<{ $highlight?: boolean; $bg?: string }>`
  position: relative;
  padding: 5rem 1.5rem;
  background: ${(p) => p.$bg || "#f7f9ff"};

  ${({ $highlight }) =>
    $highlight &&
    css`
      animation: ${highlight} 20s ease;
    `}
`;

export const Container = styled.div<{ $highlight?: boolean }>`
  max-width: 1366px;
  margin: 0 auto;
  transition: box-shadow 0.3s ease;

  ${({ $highlight }) =>
    $highlight &&
    css`
      animation: ${highlight} 2s ease;
    `}
`;

export const Label = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.75rem;
`;

export const Title = styled.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  max-width: 600px;
`;

export const Subtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-top: 1rem;
`;

export const Section = {
  View,
  Container,
  Label,
  Title,
  Subtitle,
};
