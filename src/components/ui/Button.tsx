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

const spin = keyframes`from{transform:rotate(0deg)}to{transform:rotate(360deg)}`;

const Spinner = styled(Loader2)`
  animation: ${spin} 0.75s linear infinite;
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
  gap: 0.4rem;
  border: none;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: opacity 0.18s, transform 0.18s, box-shadow 0.18s;
  width: ${p => p.$fullWidth ? "100%" : "auto"};
  outline: none;
  position: relative;
  white-space: nowrap;
  text-decoration: none;

  /* sizes */
  ${p => p.$size === "sm" && css`padding: 0.375rem 0.875rem; font-size: 0.78rem;`}
  ${p => p.$size === "md" && css`padding: 0.625rem 1.25rem; font-size: 0.875rem;`}
  ${p => p.$size === "lg" && css`padding: 0.875rem 1.75rem; font-size: 1rem;`}

  /* variants */
  ${p => p.$variant === "primary" && css`
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    color: white;
    box-shadow: 0 2px 8px rgba(37,99,235,0.25);
  `}
  ${p => p.$variant === "secondary" && css`
    background: #eff6ff;
    color: #1e40af;
    border: 1.5px solid #bfdbfe;
  `}
  ${p => p.$variant === "ghost" && css`
    background: transparent;
    color: #4b5684;
    border: 1.5px solid rgba(29,78,216,0.15);
  `}
  ${p => p.$variant === "danger" && css`
    background: linear-gradient(135deg, #dc2626, #b91c1c);
    color: white;
    box-shadow: 0 2px 8px rgba(220,38,38,0.25);
  `}
  ${p => p.$variant === "amber" && css`
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
    box-shadow: 0 2px 8px rgba(245,158,11,0.3);
  `}
  ${p => p.$variant === "cyan" && css`
    background: linear-gradient(135deg, #0891b2, #0e7490);
    color: white;
    box-shadow: 0 2px 8px rgba(8,145,178,0.25);
  `}
  ${p => p.$variant === "green" && css`
    background: linear-gradient(135deg, #16a34a, #15803d);
    color: white;
    box-shadow: 0 2px 8px rgba(22,163,74,0.25);
  `}
  ${p => p.$variant === "white" && css`
    background: white;
    color: #0c1445;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  `}

  &:hover:not(:disabled) {
    opacity: 0.88;
    transform: translateY(-1px);
  }
  &:active:not(:disabled) {
    transform: scale(0.98);
    opacity: 0.95;
  }
  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.4;
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
  border-radius: 100px;
  padding: 0.875rem 1.375rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
`;

/* ── Button group ── */
export const ButtonGroup = styled.div<{ $gap?: string }>`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${p => p.$gap || "0.75rem"};
  align-items: center;
`;
