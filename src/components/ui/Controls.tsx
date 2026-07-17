import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { Check, Minus } from "lucide-react";

// ─── Toggle ───────────────────────────────────────────────────────────────────────

export interface ToggleProps {
  checked: boolean;
  onChange: (next: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

const ToggleTrack = styled.div<{ $on: boolean; $disabled: boolean }>`
  width: 44px;
  height: 26px;
  border-radius: 100px;
  background: ${p => p.$on ? "linear-gradient(135deg,#2563eb,#1d4ed8)" : "#d1d5db"};
  position: relative;
  cursor: ${p => p.$disabled ? "not-allowed" : "pointer"};
  opacity: ${p => p.$disabled ? 0.45 : 1};
  transition: background 0.2s;
  flex-shrink: 0;
`;

const ToggleThumb = styled.div<{ $on: boolean }>`
  position: absolute;
  top: 3px;
  left: ${p => p.$on ? "21px" : "3px"};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  transition: left 0.2s;
`;

const ToggleLabel = styled.span`
  font-size: 0.875rem;
  color: #0c1445;
`;

const ToggleWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  user-select: none;
`;

export function Toggle({ checked, onChange, disabled = false, label }: ToggleProps) {
  return (
    <ToggleWrap>
      <ToggleTrack
        $on={checked}
        $disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        role="switch"
        aria-checked={checked}
      >
        <ToggleThumb $on={checked} />
      </ToggleTrack>
      {label && <ToggleLabel>{label}</ToggleLabel>}
    </ToggleWrap>
  );
}

// ─── Checkbox ─────────────────────────────────────────────────────────────────────

export interface CheckboxProps {
  checked: boolean;
  onChange: (next: boolean) => void;
  indeterminate?: boolean;
  disabled?: boolean;
  label?: ReactNode;
  className?: string;
}

const CheckboxBox = styled.div<{
  $checked: boolean;
  $indeterminate: boolean;
  $disabled: boolean;
}>`
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border: 2px solid ${p => (p.$checked || p.$indeterminate) ? "#2563eb" : "#d1d5db"};
  background: ${p => (p.$checked || p.$indeterminate)
    ? "linear-gradient(135deg,#2563eb,#1d4ed8)"
    : "white"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${p => p.$disabled ? "not-allowed" : "pointer"};
  opacity: ${p => p.$disabled ? 0.45 : 1};
  transition: all 0.18s;
  flex-shrink: 0;
`;

const CheckboxWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
`;

const CheckboxLabelEl = styled.span`
  font-size: 0.875rem;
  color: #0c1445;
`;

export function Checkbox({
  checked,
  onChange,
  indeterminate = false,
  disabled = false,
  label,
}: CheckboxProps) {
  return (
    <CheckboxWrap
      onClick={() => !disabled && onChange(!checked)}
      role="checkbox"
      aria-checked={indeterminate ? "mixed" : checked}
    >
      <CheckboxBox $checked={checked} $indeterminate={indeterminate} $disabled={disabled}>
        {indeterminate && !checked && <Minus size={11} color="white" strokeWidth={3} />}
        {checked && <Check size={11} color="white" strokeWidth={3} />}
      </CheckboxBox>
      {label && <CheckboxLabelEl>{label}</CheckboxLabelEl>}
    </CheckboxWrap>
  );
}

// ─── Radio ────────────────────────────────────────────────────────────────────────

export interface RadioOption<T extends string = string> {
  value: T;
  label: ReactNode;
  disabled?: boolean;
}

export interface RadioGroupProps<T extends string = string> {
  value: T;
  onChange: (next: T) => void;
  options: RadioOption<T>[];
  direction?: "row" | "column";
  gap?: string;
}

const RadioBubble = styled.div<{ $checked: boolean; $disabled: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid ${p => p.$checked ? "#2563eb" : "#d1d5db"};
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${p => p.$disabled ? "not-allowed" : "pointer"};
  opacity: ${p => p.$disabled ? 0.45 : 1};
  transition: all 0.18s;
  flex-shrink: 0;
`;

const RadioDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2563eb;
`;

const RadioWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
  user-select: none;
`;

const RadioLabelEl = styled.span<{ $checked: boolean }>`
  font-size: 0.875rem;
  color: ${p => p.$checked ? "#0c1445" : "#4b5684"};
  font-weight: ${p => p.$checked ? 600 : 400};
  transition: all 0.15s;
`;

const GroupWrap = styled.div<{ $direction: "row" | "column"; $gap: string }>`
  display: flex;
  flex-direction: ${p => p.$direction};
  flex-wrap: ${p => p.$direction === "row" ? "wrap" : "nowrap"};
  gap: ${p => p.$gap};
`;

export function RadioGroup<T extends string>({
  value,
  onChange,
  options,
  direction = "row",
  gap = "1.25rem",
}: RadioGroupProps<T>) {
  return (
    <GroupWrap $direction={direction} $gap={gap}>
      {options.map(opt => (
        <RadioWrap
          key={opt.value}
          onClick={() => !opt.disabled && onChange(opt.value)}
          role="radio"
          aria-checked={value === opt.value}
        >
          <RadioBubble $checked={value === opt.value} $disabled={!!opt.disabled}>
            {value === opt.value && <RadioDot />}
          </RadioBubble>
          <RadioLabelEl $checked={value === opt.value}>{opt.label}</RadioLabelEl>
        </RadioWrap>
      ))}
    </GroupWrap>
  );
}

/* ── Single radio item (used inside custom layouts) ── */
export function RadioItem({
  checked,
  onChange,
  disabled = false,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  label?: ReactNode;
}) {
  return (
    <RadioWrap onClick={() => !disabled && onChange()} role="radio" aria-checked={checked}>
      <RadioBubble $checked={checked} $disabled={disabled}>
        {checked && <RadioDot />}
      </RadioBubble>
      {label && <RadioLabelEl $checked={checked}>{label}</RadioLabelEl>}
    </RadioWrap>
  );
}
