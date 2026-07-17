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
  gap: 0.4rem;
  width: 100%;
`;

const FieldLabelEl = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: #0c1445;
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

const Required = styled.span`
  color: #dc2626;
  margin-left: 0.2rem;
`;

const FieldHintEl = styled.p<{ $error?: boolean; $success?: boolean }>`
  font-size: 0.75rem;
  color: ${p => p.$error ? '#dc2626' : p.$success ? '#16a34a' : '#9ca3af'};
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin: 0;
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
          {error  && <AlertCircle   size={12} />}
          {success && !error && <CheckCircle2 size={12} />}
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
  left: 0.875rem;
  color: #9ca3af;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

const IconRight = styled.div<{ $clickable?: boolean }>`
  position: absolute;
  right: 0.875rem;
  color: #9ca3af;
  display: flex;
  align-items: center;
  cursor: ${p => p.$clickable ? "pointer" : "default"};
  transition: color 0.2s;
  &:hover { color: ${p => p.$clickable ? "#4b5684" : "#9ca3af"}; }
`;

const StyledInput = styled.input<{
  $state: FieldState;
  $hasLeft: boolean;
  $hasRight: boolean;
}>`
  width: 100%;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: ${p => p.$hasLeft ? "2.5rem" : "0.875rem"};
  padding-right: ${p => p.$hasRight ? "2.5rem" : "0.875rem"};
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #0c1445;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  background: white;

  &::placeholder { color: #9ca3af; }

  ${p => (p.$state === "default" || p.$state === "focus") && css`
    border: 1.5px solid ${p.$state === "focus" ? "#2563eb" : "#e2eaff"};
    box-shadow: ${p.$state === "focus" ? "0 0 0 3px rgba(37,99,235,0.1)" : "none"};
    &:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
    }
  `}
  ${p => p.$state === "error" && css`
    border: 1.5px solid #dc2626;
    box-shadow: 0 0 0 3px rgba(220,38,38,0.08);
    &:focus { border-color: #dc2626; box-shadow: 0 0 0 3px rgba(220,38,38,0.1); }
  `}
  ${p => p.$state === "success" && css`
    border: 1.5px solid #16a34a;
    box-shadow: 0 0 0 3px rgba(22,163,74,0.08);
  `}
  ${p => p.$state === "disabled" && css`
    border: 1.5px solid #e5e7eb;
    background: #f9fafb;
    color: #9ca3af;
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
  width: 100%;
  padding: 0.625rem 2.25rem 0.625rem 0.875rem;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #0c1445;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.875rem center;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;

  ${p => (p.$state === "default" || p.$state === "focus") && css`
    border: 1.5px solid ${p.$state === "focus" ? "#2563eb" : "#e2eaff"};
    box-shadow: ${p.$state === "focus" ? "0 0 0 3px rgba(37,99,235,0.1)" : "none"};
    &:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
  `}
  ${p => p.$state === "error" && css`
    border: 1.5px solid #dc2626;
    box-shadow: 0 0 0 3px rgba(220,38,38,0.08);
  `}
  ${p => p.$state === "disabled" && css`
    border: 1.5px solid #e5e7eb;
    background-color: #f9fafb;
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.65;
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
  width: 100%;
  padding: 0.75rem 0.875rem;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #0c1445;
  outline: none;
  resize: vertical;
  min-height: 96px;
  transition: border-color 0.2s, box-shadow 0.2s;
  background: white;
  line-height: 1.6;

  &::placeholder { color: #9ca3af; }

  ${p => (p.$state === "default" || p.$state === "focus") && css`
    border: 1.5px solid ${p.$state === "focus" ? "#2563eb" : "#e2eaff"};
    box-shadow: ${p.$state === "focus" ? "0 0 0 3px rgba(37,99,235,0.1)" : "none"};
    &:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }
  `}
  ${p => p.$state === "error" && css`border: 1.5px solid #dc2626; box-shadow: 0 0 0 3px rgba(220,38,38,0.08);`}
  ${p => p.$state === "success" && css`border: 1.5px solid #16a34a;`}
  ${p => p.$state === "disabled" && css`
    border: 1.5px solid #e5e7eb;
    background: #f9fafb;
    color: #9ca3af;
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
