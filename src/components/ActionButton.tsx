import styled, { css } from "styled-components";
import { HashLink } from "react-router-hash-link";

const actionStyles = css<{ $background?: string; $subtle?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border: ${(p) => (p.$subtle ? "1px solid rgba(255,255,255,0.15)" : "none")};
  border-radius: 10px;
  background: ${(p) =>
    p.$subtle ? "rgba(255,255,255,0.08)" : (p.$background ?? "linear-gradient(135deg, #2563eb, #0891b2)")};
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s, background 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    background: ${(p) => p.$subtle ? "rgba(255,255,255,0.14)" : undefined};
  }
`;

export const ActionAnchor = styled.a<{ $background?: string; $subtle?: boolean }>`
  ${actionStyles}
`;

export const ActionHashLink = styled(HashLink)<{
  $background?: string;
  $subtle?: boolean;
}>`
  ${actionStyles}
`;

export const ActionButton = styled.button<{
  $background?: string;
  $subtle?: boolean;
}>`
  ${actionStyles}
`;
