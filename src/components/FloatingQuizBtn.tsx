import styled, { keyframes } from "styled-components";
import { Calculator } from "lucide-react";
import { useAppStore } from "../store";
import { breakpoints } from "../styles/breakpoints";

const pulse = keyframes`
  0%, 100% { box-shadow: var(--number-zero) var(--value-4px) var(--value-24px) var(--alpha-amber-40), var(--number-zero) var(--number-zero) var(--number-zero) var(--number-zero) var(--alpha-amber-40); }
  50%       { box-shadow: var(--number-zero) var(--value-4px) var(--value-24px) var(--alpha-amber-40), var(--number-zero) var(--number-zero) var(--number-zero) var(--value-8px) transparent; }
`;

const Btn = styled.button`
  position: fixed;
  bottom: var(--value-2rem);
  right: var(--value-2rem);
  z-index: var(--z-floating);
  display: flex;
  align-items: center;
  gap: var(--space-2-4);
  padding: var(--space-3-5) var(--space-5-5);
  background: linear-gradient(var(--value-135deg), var(--color-amber-500), var(--color-amber-600));
  color: var(--color-surface);
  font-family: var(--font-display);
  font-size: var(--font-size-body-sm);
  font-weight: var(--font-weight-bold);
  border: none;
  border-radius: var(--radius-pill);
  cursor: pointer;
  animation: ${pulse} var(--value-3s) ease-in-out infinite;
  transition: transform var(--value-0-2s), opacity var(--value-0-2s);
  box-shadow: var(--number-zero) var(--value-4px) var(--value-16px) var(--alpha-amber-35);

  &:hover {
    transform: translateY(var(--value-neg-3px)) scale(1.03);
    opacity: var(--opacity-95);
  }

  &:focus-visible {
    outline: var(--value-2px) solid var(--color-amber-500);
    outline-offset: var(--value-3px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    bottom: var(--value-1-25rem);
    right: var(--value-1-25rem);
    padding: var(--space-3) var(--space-4-5);
    font-size: var(--font-size-button-sm);
  }
`;

export default function FloatingQuizBtn() {
  const { openQuiz } = useAppStore();
  return (
    <Btn onClick={openQuiz} aria-label="Faça um orçamento">
      <Calculator size="var(--size-17)" />
      Faça um Orçamento
    </Btn>
  );
}
