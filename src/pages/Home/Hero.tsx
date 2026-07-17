import styled, { keyframes } from "styled-components";

// ─── Animations ────────────────────────────────────────────────────────────────

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;



// ─── Hero ───────────────────────────────────────────────────────────────────────
const Section = styled.section`
  min-height: 100vh;
  background: linear-gradient(160deg, #0c1445 0%, #0f2050 50%, #0a1930 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 1.5rem 5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(37, 99, 235, 0.15) 0%,
      transparent 70%
    );
    top: -150px;
    right: -100px;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(8, 145, 178, 0.12) 0%,
      transparent 70%
    );
    bottom: 50px;
    left: -50px;
    pointer-events: none;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(37, 99, 235, 0.2);
  border: 1px solid rgba(37, 99, 235, 0.4);
  border-radius: 100px;
  padding: 0.375rem 1rem;
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #93c5fd;
  margin-bottom: 2rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  animation: ${fadeUp} 0.6s ease both;
`;

const Title = styled.h1`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(2.2rem, 6vw, 4rem);
  font-weight: 800;
  color: white;
  line-height: 1.15;
  max-width: 760px;
  letter-spacing: -0.025em;
  animation: ${fadeUp} 0.6s 0.1s ease both;

  span {
    background: linear-gradient(90deg, #60a5fa, #0891b2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Subtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 580px;
  line-height: 1.75;
  margin-top: 1.5rem;
  animation: ${fadeUp} 0.6s 0.2s ease both;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
  animation: ${fadeUp} 0.6s 0.3s ease both;
`;

export const Hero = {
  Section,
  Badge,
  Title,
  Subtitle,
  Actions
};
