import styled, { keyframes } from "styled-components";
import { Calculator } from "lucide-react";
import { useAppStore } from "../store";

const pulse = keyframes`
  0%, 100% { box-shadow: 0 4px 24px rgba(245, 158, 11, 0.4), 0 0 0 0 rgba(245, 158, 11, 0.4); }
  50%       { box-shadow: 0 4px 24px rgba(245, 158, 11, 0.4), 0 0 0 8px rgba(245, 158, 11, 0); }
`;

const Btn = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 150;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.875rem 1.375rem;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  animation: ${pulse} 3s ease-in-out infinite;
  transition: transform 0.2s, opacity 0.2s;
  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.35);

  &:hover {
    transform: translateY(-3px) scale(1.03);
    opacity: 0.95;
  }

  &:focus-visible {
    outline: 2px solid #f59e0b;
    outline-offset: 3px;
  }

  @media (max-width: 480px) {
    bottom: 1.25rem;
    right: 1.25rem;
    padding: 0.75rem 1.125rem;
    font-size: 0.825rem;
  }
`;

export default function FloatingQuizBtn() {
  const { openQuiz } = useAppStore();
  return (
    <Btn onClick={openQuiz} aria-label="Faça um orçamento">
      <Calculator size={17} />
      Faça um Orçamento
    </Btn>
  );
}
