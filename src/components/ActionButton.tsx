import styled, { css } from "styled-components";
import { HashLink } from "react-router-hash-link";

const actionStyles = css<{ $background?: string; $subtle?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3-5) var(--space-7);
  border: ${(p) => (p.$subtle ? "var(--value-1px) solid var(--alpha-white-15)" : "none")};
  border-radius: var(--radius-button);
  background: ${(p) =>
    p.$subtle ? "var(--alpha-white-08)" : (p.$background ?? "linear-gradient(var(--value-135deg), var(--color-blue-600), var(--color-cyan-600))")};
  color: var(--color-surface);
  font-family: var(--font-body);
  font-size: var(--font-size-button);
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  cursor: pointer;
  transition: opacity var(--value-0-2s), transform var(--value-0-2s), background var(--value-0-2s);

  &:hover {
    opacity: var(--opacity-90);
    transform: translateY(var(--value-neg-2px));
    background: ${(p) => p.$subtle ? "var(--alpha-white-14)" : undefined};
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
