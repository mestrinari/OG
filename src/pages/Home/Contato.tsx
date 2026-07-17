import styled, { css, keyframes } from "styled-components";

const highlight = keyframes`
 from {
    transform: scale(1);
    box-shadow:  0px 4px 30px rgba(76, 127, 239, 0.5);
  }
  100% {
    transform: scale(1);
    box-shadow: 0px 0px 0px  rgba(12, 20, 69, 0);
  }
`;

const highlightPageOverlay = keyframes`
  0% {
  background: rgba(15, 1, 86, 0.1);
  }
  100% {
  background: rgba(15, 1, 86, 0);
  }
`;



const PageOverlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 10;

  ${({ $visible }) =>
    $visible &&
    css`
      z-index: 201;
      animation: ${highlightPageOverlay} 2s linear;
    `}

  transition: opacity 300ms ease;
`;
const Container = styled.div<{ $highlight?: boolean }>`
  // max-width: 1366px;
  margin: 0 auto;
`;
const Section = styled.section<{ $highlight?: boolean }>`
  position: relative;
  background: linear-gradient(160deg, #0c1445 0%, #1e3a8a 100%);
  padding: 5rem 12rem;
  text-align: center;


  ${({ $highlight }) =>
    $highlight &&
    css`
      z-index: 20;
      animation: ${highlight} 3s linear;
    `}
`;

const Title = styled.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 480px;
  margin: 0 auto 2.5rem;
  line-height: 1.75;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Contato = {
  highlight,
  Section,
  Container,
  Title,
  Subtitle,
  Actions,
  PageOverlay,
};
