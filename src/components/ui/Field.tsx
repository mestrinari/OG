import {
  forwardRef,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode,
} from "react";
import styled, { css } from "styled-components";
import { AlertCircle, CheckCircle2 } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────────

export type FieldState = "default" | "focus" | "error" | "success" | "disabled";

// ─── Field wrapper (label + input + hint) ────────────────────────────────────────

interface FieldProps {
  label?: string;
  hint?: string;
  error?: string;
  success?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1-6);
  width: var(--percent-full);
`;

const FieldLabelEl = styled.label`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-navy-950);
  font-family: var(--font-display);
`;

const Required = styled.span`
  color: var(--color-red-600);
  margin-left: var(--space-0-8);
`;

const FieldHintEl = styled.p<{ $error?: boolean; $success?: boolean }>`
  font-size: var(--font-size-label);
  color: ${p => p.$error ? 'var(--color-red-600)' : p.$success ? 'var(--color-green-600)' : 'var(--color-gray-400)'};
  display: flex;
  align-items: center;
  gap: var(--space-1-2);
  margin: var(--space-0);
`;

export function Field({ label, hint, error, success, required, children, ...rest }: FieldProps) {
  const msg = error || success || hint;
  return (
    <FieldWrap {...rest}>
      {label && (
        <FieldLabelEl>
          {label}
          {required && <Required>*</Required>}
        </FieldLabelEl>
      )}
      {children}
      {msg && (
        <FieldHintEl $error={!!error} $success={!!success && !error}>
          {error  && <AlertCircle   size="var(--size-12)" />}
          {success && !error && <CheckCircle2 size="var(--size-12)" />}
          {msg}
        </FieldHintEl>
      )}
    </FieldWrap>
  );
}

// ─── Input ───────────────────────────────────────────────────────────────────────

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fieldState?: FieldState;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onRightIconClick?: () => void;
}

const InputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const IconLeft = styled.div`
  position: absolute;
  left: var(--value-0-875rem);
  color: var(--color-gray-400);
  display: flex;
  align-items: center;
  pointer-events: none;
`;

const IconRight = styled.div<{ $clickable?: boolean }>`
  position: absolute;
  right: var(--value-0-875rem);
  color: var(--color-gray-400);
  display: flex;
  align-items: center;
  cursor: ${p => p.$clickable ? "pointer" : "default"};
  transition: color var(--value-0-2s);
  &:hover { color: ${p => p.$clickable ? "var(--color-text-muted)" : "var(--color-gray-400)"}; }
`;

const StyledInput = styled.input<{
  $state: FieldState;
  $hasLeft: boolean;
  $hasRight: boolean;
}>`
  width: var(--percent-full);
  padding-top: var(--value-0-625rem);
  padding-bottom: var(--value-0-625rem);
  padding-left: ${p => p.$hasLeft ? "var(--value-2-5rem)" : "var(--value-0-875rem)"};
  padding-right: ${p => p.$hasRight ? "var(--value-2-5rem)" : "var(--value-0-875rem)"};
  border-radius: var(--radius-button);
  font-family: var(--font-body);
  font-size: var(--font-size-base-sm);
  color: var(--color-navy-950);
  outline: none;
  transition: border-color var(--value-0-2s), box-shadow var(--value-0-2s);
  background: var(--color-surface);

  &::placeholder { color: var(--color-gray-400); }

  ${p => (p.$state === "default" || p.$state === "focus") && css`
    border: var(--value-1-5px) solid ${p.$state === "focus" ? "var(--color-blue-600)" : "var(--color-border-input)"};
    box-shadow: ${p.$state === "focus" ? "var(--number-zero) var(--number-zero) var(--number-zero) var(--value-3px) var(--alpha-primary-10)" : "none"};
    &:focus {
      border-color: var(--color-blue-600);
      box-shadow: var(--number-zero) var(--number-zero) var(--number-zero) var(--value-3px) var(--alpha-primary-10);
    }
  `}
  ${p => p.$state === "error" && css`
    border: var(--value-1-5px) solid var(--color-red-600);
    box-shadow: var(--number-zero) var(--number-zero) var(--number-zero) var(--value-3px) var(--alpha-red-08);
    &:focus { border-color: var(--color-red-600); box-shadow: var(--number-zero) var(--number-zero) var(--number-zero) var(--value-3px) var(--alpha-red-10); }
  `}
  ${p => p.$state === "success" && css`
    border: var(--value-1-5px) solid var(--color-green-600);
    box-shadow: var(--number-zero) var(--number-zero) var(--number-zero) var(--value-3px) var(--alpha-green-08);
  `}
  ${p => p.$state === "disabled" && css`
    border: var(--value-1-5px) solid var(--color-gray-200);
    background: var(--color-gray-50);
    color: var(--color-gray-400);
    cursor: not-allowed;
  `}
`;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ fieldState = "default", leftIcon, rightIcon, onRightIconClick, disabled, ...rest }, ref) => (
    <InputWrap>
      {leftIcon && <IconLeft>{leftIcon}</IconLeft>}
      <StyledInput
        ref={ref}
        $state={disabled ? "disabled" : fieldState}
        $hasLeft={!!leftIcon}
        $hasRight={!!rightIcon}
        disabled={disabled}
        {...rest}
      />
      {rightIcon && (
        <IconRight $clickable={!!onRightIconClick} onClick={onRightIconClick}>
          {rightIcon}
        </IconRight>
      )}
    </InputWrap>
  )
);

Input.displayName = "Input";

// ─── Select ──────────────────────────────────────────────────────────────────────

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  fieldState?: FieldState;
}

const StyledSelect = styled.select<{ $state: FieldState }>`
  width: var(--percent-full);
  padding: var(--space-2-5) var(--space-9) var(--space-2-5) var(--space-3-5);
  border-radius: var(--radius-button);
  font-family: var(--font-body);
  font-size: var(--font-size-base-sm);
  color: var(--color-navy-950);
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--value-0-875rem) center;
  background-color: var(--color-surface);
  cursor: pointer;
  transition: border-color var(--value-0-2s), box-shadow var(--value-0-2s);

  ${p => (p.$state === "default" || p.$state === "focus") && css`
    border: var(--value-1-5px) solid ${p.$state === "focus" ? "var(--color-blue-600)" : "var(--color-border-input)"};
    box-shadow: ${p.$state === "focus" ? "var(--number-zero) var(--number-zero) var(--number-zero) var(--value-3px) var(--alpha-primary-10)" : "none"};
    &:focus { border-color: var(--color-blue-600); box-shadow: var(--number-zero) var(--number-zero) var(--number-zero) var(--value-3px) var(--alpha-primary-10); }
  `}
  ${p => p.$state === "error" && css`
    border: var(--value-1-5px) solid var(--color-red-600);
    box-shadow: var(--number-zero) var(--number-zero) var(--number-zero) var(--value-3px) var(--alpha-red-08);
  `}
  ${p => p.$state === "disabled" && css`
    border: var(--value-1-5px) solid var(--color-gray-200);
    background-color: var(--color-gray-50);
    color: var(--color-gray-400);
    cursor: not-allowed;
    opacity: var(--opacity-65);
  `}
`;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ fieldState = "default", disabled, ...rest }, ref) => (
    <StyledSelect
      ref={ref}
      $state={disabled ? "disabled" : fieldState}
      disabled={disabled}
      {...rest}
    />
  )
);

Select.displayName = "Select";

// ─── Textarea ────────────────────────────────────────────────────────────────────

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  fieldState?: FieldState;
}

const StyledTextarea = styled.textarea<{ $state: FieldState }>`
  width: var(--percent-full);
  padding: var(--space-3) var(--space-3-5);
  border-radius: var(--radius-button);
  font-family: var(--font-body);
  font-size: var(--font-size-base-sm);
  color: var(--color-navy-950);
  outline: none;
  resize: vertical;
  min-height: var(--size-96);
  transition: border-color var(--value-0-2s), box-shadow var(--value-0-2s);
  background: var(--color-surface);
  line-height: var(--line-height-loose);

  &::placeholder { color: var(--color-gray-400); }

  ${p => (p.$state === "default" || p.$state === "focus") && css`
    border: var(--value-1-5px) solid ${p.$state === "focus" ? "var(--color-blue-600)" : "var(--color-border-input)"};
    box-shadow: ${p.$state === "focus" ? "var(--number-zero) var(--number-zero) var(--number-zero) var(--value-3px) var(--alpha-primary-10)" : "none"};
    &:focus { border-color: var(--color-blue-600); box-shadow: var(--number-zero) var(--number-zero) var(--number-zero) var(--value-3px) var(--alpha-primary-10); }
  `}
  ${p => p.$state === "error" && css`border: var(--value-1-5px) solid var(--color-red-600); box-shadow: var(--number-zero) var(--number-zero) var(--number-zero) var(--value-3px) var(--alpha-red-08);`}
  ${p => p.$state === "success" && css`border: var(--value-1-5px) solid var(--color-green-600);`}
  ${p => p.$state === "disabled" && css`
    border: var(--value-1-5px) solid var(--color-gray-200);
    background: var(--color-gray-50);
    color: var(--color-gray-400);
    cursor: not-allowed;
  `}
`;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ fieldState = "default", disabled, ...rest }, ref) => (
    <StyledTextarea
      ref={ref}
      $state={disabled ? "disabled" : fieldState}
      disabled={disabled}
      {...rest}
    />
  )
);

Textarea.displayName = "Textarea";
