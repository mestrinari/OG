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
  width: var(--size-44);
  height: var(--size-26);
  border-radius: var(--radius-pill);
  background: ${p => p.$on ? "linear-gradient(var(--value-135deg),var(--color-blue-600),var(--color-blue-700))" : "var(--color-gray-300)"};
  position: relative;
  cursor: ${p => p.$disabled ? "not-allowed" : "pointer"};
  opacity: ${p => p.$disabled ? "var(--opacity-45)" : "var(--number-one)"};
  transition: background var(--value-0-2s);
  flex-shrink: 0;
`;

const ToggleThumb = styled.div<{ $on: boolean }>`
  position: absolute;
  top: var(--value-3px);
  left: ${p => p.$on ? "var(--value-21px)" : "var(--value-3px)"};
  width: var(--size-20);
  height: var(--size-20);
  border-radius: var(--radius-round);
  background: var(--color-surface);
  box-shadow: var(--number-zero) var(--value-1px) var(--value-4px) var(--alpha-black-20);
  transition: left var(--value-0-2s);
`;

const ToggleLabel = styled.span`
  font-size: var(--font-size-base-sm);
  color: var(--color-navy-950);
`;

const ToggleWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
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
  width: var(--size-18);
  height: var(--size-18);
  border-radius: var(--radius-xs);
  border: var(--value-2px) solid ${p => (p.$checked || p.$indeterminate) ? "var(--color-blue-600)" : "var(--color-gray-300)"};
  background: ${p => (p.$checked || p.$indeterminate)
    ? "linear-gradient(var(--value-135deg),var(--color-blue-600),var(--color-blue-700))"
    : "var(--color-surface)"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${p => p.$disabled ? "not-allowed" : "pointer"};
  opacity: ${p => p.$disabled ? "var(--opacity-45)" : "var(--number-one)"};
  transition: all var(--value-0-18s);
  flex-shrink: 0;
`;

const CheckboxWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  cursor: pointer;
  user-select: none;
`;

const CheckboxLabelEl = styled.span`
  font-size: var(--font-size-base-sm);
  color: var(--color-navy-950);
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
        {indeterminate && !checked && <Minus size="var(--size-11)" color="var(--color-surface)" strokeWidth="var(--outline-focus)" />}
        {checked && <Check size="var(--size-11)" color="var(--color-surface)" strokeWidth="var(--outline-focus)" />}
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
  width: var(--size-18);
  height: var(--size-18);
  border-radius: var(--radius-round);
  border: var(--value-2px) solid ${p => p.$checked ? "var(--color-blue-600)" : "var(--color-gray-300)"};
  background: var(--color-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${p => p.$disabled ? "not-allowed" : "pointer"};
  opacity: ${p => p.$disabled ? "var(--opacity-45)" : "var(--number-one)"};
  transition: all var(--value-0-18s);
  flex-shrink: 0;
`;

const RadioDot = styled.div`
  width: var(--size-8);
  height: var(--size-8);
  border-radius: var(--radius-round);
  background: var(--color-blue-600);
`;

const RadioWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2-5);
  cursor: pointer;
  user-select: none;
`;

const RadioLabelEl = styled.span<{ $checked: boolean }>`
  font-size: var(--font-size-base-sm);
  color: ${p => p.$checked ? "var(--color-navy-950)" : "var(--color-text-muted)"};
  font-weight: ${p => p.$checked ? "var(--font-weight-semibold)" : "var(--font-weight-regular)"};
  transition: all var(--value-0-15s);
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
  gap = "var(--value-1-25rem)",
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
