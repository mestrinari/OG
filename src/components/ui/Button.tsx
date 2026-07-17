import { forwardRef, ButtonHTMLAttributes } from "react";
import styled, { css, keyframes } from "styled-components";
import { Loader2 } from "lucide-react";

export type ButtonVariant =
  | "primary" | "secondary" | "ghost" | "danger"
  | "amber" | "cyan" | "green" | "white";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const spin = keyframes`from{transform:rotate(var(--value-0deg))}to{transform:rotate(var(--value-360deg))}`;

const Spinner = styled(Loader2)`
  animation: ${spin} var(--value-0-75s) linear infinite;
  flex-shrink: 0;
`;

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1-6);
  border: none;
  font-family: var(--font-body);
  font-weight: var(--font-weight-semibold);
  border-radius: var(--radius-button);
  cursor: pointer;
  transition: opacity var(--value-0-18s), transform var(--value-0-18s), box-shadow var(--value-0-18s);
  width: ${p => p.$fullWidth ? "var(--percent-full)" : "auto"};
  outline: none;
  position: relative;
  white-space: nowrap;
  text-decoration: none;

  /* sizes */
  ${p => p.$size === "sm" && css`padding: var(--space-1-5) var(--space-3-5); font-size: var(--font-size-caption);`}
  ${p => p.$size === "md" && css`padding: var(--space-2-5) var(--space-5); font-size: var(--font-size-base-sm);`}
  ${p => p.$size === "lg" && css`padding: var(--space-3-5) var(--space-7); font-size: var(--font-size-body);`}

  /* variants */
  ${p => p.$variant === "primary" && css`
    background: linear-gradient(var(--value-135deg), var(--color-blue-600), var(--color-blue-700));
    color: var(--color-surface);
    box-shadow: var(--number-zero) var(--value-2px) var(--value-8px) var(--alpha-primary-25);
  `}
  ${p => p.$variant === "secondary" && css`
    background: var(--color-blue-50);
    color: var(--color-blue-800);
    border: var(--value-1-5px) solid var(--color-blue-200);
  `}
  ${p => p.$variant === "ghost" && css`
    background: transparent;
    color: var(--color-text-muted);
    border: var(--value-1-5px) solid var(--alpha-blue-15);
  `}
  ${p => p.$variant === "danger" && css`
    background: linear-gradient(var(--value-135deg), var(--color-red-600), var(--color-red-700));
    color: var(--color-surface);
    box-shadow: var(--number-zero) var(--value-2px) var(--value-8px) var(--alpha-red-25);
  `}
  ${p => p.$variant === "amber" && css`
    background: linear-gradient(var(--value-135deg), var(--color-amber-500), var(--color-amber-600));
    color: var(--color-surface);
    box-shadow: var(--number-zero) var(--value-2px) var(--value-8px) var(--alpha-amber-30);
  `}
  ${p => p.$variant === "cyan" && css`
    background: linear-gradient(var(--value-135deg), var(--color-cyan-600), var(--color-cyan-700));
    color: var(--color-surface);
    box-shadow: var(--number-zero) var(--value-2px) var(--value-8px) var(--alpha-cyan-25);
  `}
  ${p => p.$variant === "green" && css`
    background: linear-gradient(var(--value-135deg), var(--color-green-600), var(--color-green-800));
    color: var(--color-surface);
    box-shadow: var(--number-zero) var(--value-2px) var(--value-8px) var(--alpha-green-25);
  `}
  ${p => p.$variant === "white" && css`
    background: var(--color-surface);
    color: var(--color-navy-950);
    box-shadow: var(--number-zero) var(--value-2px) var(--value-8px) var(--alpha-black-10);
  `}

  &:hover:not(:disabled) {
    opacity: var(--opacity-88);
    transform: translateY(var(--value-neg-1px));
  }
  &:active:not(:disabled) {
    transform: scale(var(--scale-pressed));
    opacity: var(--opacity-95);
  }
  &:focus-visible {
    outline: var(--value-2px) solid var(--color-blue-600);
    outline-offset: var(--value-2px);
  }
  &:disabled {
    opacity: var(--opacity-40);
    cursor: not-allowed;
    transform: none;
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...rest
    },
    ref
  ) => (
    <StyledButton
      ref={ref}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <Spinner size={size === "sm" ? 13 : size === "lg" ? 17 : 14} /> : leftIcon}
      {loading ? (children ?? "Carregando…") : children}
      {!loading && rightIcon}
    </StyledButton>
  )
);

Button.displayName = "Button";

/* ── Pill variant (FloatingQuizBtn pattern) ── */
export const PillButton = styled(StyledButton).attrs({ $variant: "amber", $size: "md", $fullWidth: false })`
  border-radius: var(--radius-pill);
  padding: var(--space-3-5) var(--space-5-5);
  font-family: var(--font-display);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-body-sm);
`;

/* ── Button group ── */
export const ButtonGroup = styled.div<{ $gap?: string }>`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${p => p.$gap || "var(--value-0-75rem)"};
  align-items: center;
`;
