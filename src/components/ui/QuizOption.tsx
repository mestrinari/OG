import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { Check } from "lucide-react";

export type QuizOptionState = "default" | "hover" | "selected";

export interface QuizOptionProps {
  id: string;
  emoji?: string;
  label: ReactNode;
  selected?: boolean;
  accentColor?: string;
  accentGradient?: string;
  onChange: (id: string) => void;
  className?: string;
}

const OptionWrap = styled.button<{
  $selected: boolean;
  $color: string;
  $gradient: string;
}>`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3-5) var(--space-5);
  border-radius: var(--radius-card-sm);
  background: ${p => p.$selected ? p.$gradient : "var(--color-surface)"};
  border: var(--value-2px) solid ${p => p.$selected ? "transparent" : "var(--alpha-blue-12)"};
  cursor: pointer;
  font-family: var(--font-body);
  font-size: var(--font-size-base-sm);
  font-weight: ${p => p.$selected ? "var(--font-weight-bold)" : "var(--font-weight-medium)"};
  color: ${p => p.$selected ? "var(--color-surface)" : "var(--color-navy-950)"};
  transition: all var(--value-0-18s);
  text-align: left;
  width: var(--percent-full);
  outline: none;

  /* when not selected, use solid bg highlight */
  ${p => !p.$selected && css`
    &:hover {
      border-color: var(--alpha-blue-30);
      background: var(--color-background-alt);
      transform: translateX(var(--value-3px));
    }
    &:focus-visible {
      border-color: var(--color-blue-600);
      box-shadow: var(--number-zero) var(--number-zero) var(--number-zero) var(--value-3px) var(--alpha-primary-12);
    }
  `}
  ${p => p.$selected && css`
    box-shadow: var(--number-zero) var(--value-4px) var(--value-16px) color-mix(in srgb, ${p.$color} var(--percent-22), transparent);
  `}
`;

const Dot = styled.div<{ $selected: boolean; $color: string }>`
  width: var(--size-20);
  height: var(--size-20);
  border-radius: var(--radius-round);
  border: var(--value-2px) solid ${p => p.$selected ? "var(--alpha-white-60)" : "var(--color-gray-300)"};
  background: ${p => p.$selected ? "var(--alpha-white-25)" : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all var(--value-0-18s);
`;

const Emoji = styled.span`
  font-size: var(--font-size-body-lg);
  line-height: var(--line-height-flat);
  flex-shrink: 0;
`;

export function QuizOption({
  id,
  emoji,
  label,
  selected = false,
  accentColor = "var(--color-blue-600)",
  accentGradient = "linear-gradient(var(--value-135deg),var(--color-blue-600),var(--color-blue-700))",
  onChange,
  className,
}: QuizOptionProps) {
  return (
    <OptionWrap
      type="button"
      $selected={selected}
      $color={accentColor}
      $gradient={accentGradient}
      onClick={() => onChange(id)}
      aria-pressed={selected}
      className={className}
    >
      <Dot $selected={selected} $color={accentColor}>
        {selected && <Check size="var(--size-11)" color="var(--color-surface)" strokeWidth="var(--outline-focus)" />}
      </Dot>
      {emoji && <Emoji>{emoji}</Emoji>}
      <span style={{ flex: "var(--number-one)" }}>{label}</span>
    </OptionWrap>
  );
}

/* ── QuizOptionGroup: renders a list and manages its own state propagation ── */
export interface QuizOptionGroupProps {
  value: string | null;
  onChange: (id: string) => void;
  options: Array<{
    id: string;
    emoji?: string;
    label: ReactNode;
  }>;
  accentColor?: string;
  accentGradient?: string;
  gap?: string;
  className?: string;
}

const GroupWrap = styled.div<{ $gap: string }>`
  display: flex;
  flex-direction: column;
  gap: ${p => p.$gap};
  width: var(--percent-full);
`;

export function QuizOptionGroup({
  value,
  onChange,
  options,
  accentColor,
  accentGradient,
  gap = "var(--value-0-625rem)",
  className,
}: QuizOptionGroupProps) {
  return (
    <GroupWrap $gap={gap} className={className}>
      {options.map(opt => (
        <QuizOption
          key={opt.id}
          {...opt}
          selected={value === opt.id}
          accentColor={accentColor}
          accentGradient={accentGradient}
          onChange={onChange}
        />
      ))}
    </GroupWrap>
  );
}
