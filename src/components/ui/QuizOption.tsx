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
  gap: 0.75rem;
  padding: 0.875rem 1.25rem;
  border-radius: 12px;
  background: ${p => p.$selected ? p.$gradient : "white"};
  border: 2px solid ${p => p.$selected ? "transparent" : "rgba(29,78,216,0.12)"};
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: ${p => p.$selected ? 700 : 500};
  color: ${p => p.$selected ? "white" : "#0c1445"};
  transition: all 0.18s;
  text-align: left;
  width: 100%;
  outline: none;

  /* when not selected, use solid bg highlight */
  ${p => !p.$selected && css`
    &:hover {
      border-color: rgba(29,78,216,0.3);
      background: #f5f8ff;
      transform: translateX(3px);
    }
    &:focus-visible {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37,99,235,0.12);
    }
  `}
  ${p => p.$selected && css`
    box-shadow: 0 4px 16px ${p.$color}35;
  `}
`;

const Dot = styled.div<{ $selected: boolean; $color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${p => p.$selected ? "rgba(255,255,255,0.6)" : "#d1d5db"};
  background: ${p => p.$selected ? "rgba(255,255,255,0.25)" : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.18s;
`;

const Emoji = styled.span`
  font-size: 1.125rem;
  line-height: 1;
  flex-shrink: 0;
`;

export function QuizOption({
  id,
  emoji,
  label,
  selected = false,
  accentColor = "#2563eb",
  accentGradient = "linear-gradient(135deg,#2563eb,#1d4ed8)",
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
        {selected && <Check size={11} color="white" strokeWidth={3} />}
      </Dot>
      {emoji && <Emoji>{emoji}</Emoji>}
      <span style={{ flex: 1 }}>{label}</span>
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
  width: 100%;
`;

export function QuizOptionGroup({
  value,
  onChange,
  options,
  accentColor,
  accentGradient,
  gap = "0.625rem",
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
