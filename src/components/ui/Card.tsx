import { type CSSProperties, ReactNode } from "react";
import styled, { css } from "styled-components";
import { Check } from "lucide-react";

// ─── Base card ────────────────────────────────────────────────────────────────────

const BaseCard = styled.div<{
  $hover?: boolean;
  $pad?: string;
  $radius?: string;
}>`
  background: var(--color-surface);
  border-radius: ${p => p.$radius ?? "var(--radius-card)"};
  border: var(--value-1px) solid var(--alpha-blue-08);
  padding: ${p => p.$pad ?? "var(--value-1-5rem)"};
  transition: all var(--value-0-22s);

  ${p => p.$hover && css`
    cursor: pointer;
    &:hover {
      border-color: var(--alpha-blue-22);
      box-shadow: var(--number-zero) var(--value-10px) var(--value-36px) var(--alpha-blue-10);
      transform: translateY(var(--value-neg-2px));
    }
  `}
`;

export interface CardProps {
  children: ReactNode;
  hover?: boolean;
  padding?: string;
  radius?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function Card({ hover, padding, radius, children, ...rest }: CardProps) {
  return (
    <BaseCard $hover={hover} $pad={padding} $radius={radius} {...rest}>
      {children}
    </BaseCard>
  );
}

// ─── Card.Icon ────────────────────────────────────────────────────────────────────

const CardIconEl = styled.div<{ $bg: string; $size: string; $radius: string }>`
  width: ${p => p.$size};
  height: ${p => p.$size};
  border-radius: ${p => p.$radius};
  background: ${p => p.$bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export function CardIcon({
  gradient,
  size = "var(--size-48)",
  radius = "var(--radius-card-sm)",
  children,
}: {
  gradient: string;
  size?: string;
  radius?: string;
  children: ReactNode;
}) {
  return <CardIconEl $bg={gradient} $size={size} $radius={radius}>{children}</CardIconEl>;
}

// ─── Card.Title / Text ───────────────────────────────────────────────────────────

export const CardTitle = styled.h3<{ $size?: string }>`
  font-family: var(--font-display);
  font-size: ${p => p.$size ?? "var(--value-1rem)"};
  font-weight: var(--font-weight-bold);
  color: var(--color-navy-950);
  margin-bottom: var(--space-1-6);
  line-height: var(--line-height-card);
`;

export const CardText = styled.p<{ $size?: string }>`
  font-size: ${p => p.$size ?? "var(--value-0-82rem)"};
  color: var(--color-text-muted);
  line-height: var(--line-height-loose);
  margin: var(--space-0);
`;

// ─── ServiceCard ─────────────────────────────────────────────────────────────────

export type ServiceCardState = "default" | "hover" | "selected" | "disabled";

interface ServiceCardProps {
  state?: ServiceCardState;
  accentColor?: string;
  icon: ReactNode;
  iconGradient: string;
  title: string;
  text: string;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
}

const ServiceCardEl = styled.div<{
  $state: ServiceCardState;
  $accent: string;
}>`
  background: var(--color-surface);
  border-radius: var(--radius-card);
  border: var(--value-2px) solid ${p => p.$state === "selected" ? p.$accent : "var(--alpha-blue-08)"};
  padding: var(--space-6);
  cursor: ${p => p.$state === "disabled" ? "not-allowed" : "pointer"};
  transition: all var(--value-0-22s);
  position: relative;
  overflow: hidden;

  ${p => p.$state === "selected" && css`
    box-shadow: var(--number-zero) var(--number-zero) var(--number-zero) var(--value-4px) color-mix(in srgb, ${p.$accent} var(--percent-12), transparent), var(--number-zero) var(--value-12px) var(--value-40px) var(--alpha-blue-12);
  `}
  ${p => p.$state === "disabled" && css`opacity: var(--opacity-45); pointer-events: none;`}

  &:hover:not([data-disabled="true"]) {
    border-color: var(--alpha-blue-25);
    transform: translateY(var(--value-neg-3px));
    box-shadow: var(--number-zero) var(--value-12px) var(--value-40px) var(--alpha-blue-10);
  }
`;

const SelectCheck = styled.div<{ $color: string }>`
  position: absolute;
  top: var(--value-0-875rem);
  right: var(--value-0-875rem);
  width: var(--size-20);
  height: var(--size-20);
  border-radius: var(--radius-round);
  background: ${p => p.$color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function ServiceCard({
  state = "default",
  accentColor = "var(--color-blue-600)",
  icon,
  iconGradient,
  title,
  text,
  onClick,
  className,
  style,
}: ServiceCardProps) {
  return (
    <ServiceCardEl
      $state={state}
      $accent={accentColor}
      onClick={state !== "disabled" ? onClick : undefined}
      data-disabled={state === "disabled"}
      className={className}
      style={style}
    >
      {state === "selected" && (
        <SelectCheck $color={accentColor}>
          <Check size="var(--size-11)" color="var(--color-surface)" />
        </SelectCheck>
      )}
      <CardIconEl $bg={iconGradient} $size="var(--size-48)" $radius="var(--radius-card-sm)" style={{ marginBottom: "var(--value-1rem)" }}>
        {icon}
      </CardIconEl>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </ServiceCardEl>
  );
}

// ─── FeatureCard ─────────────────────────────────────────────────────────────────

interface FeatureCardProps {
  icon: ReactNode;
  iconGradient?: string;
  iconSize?: string;
  title: string;
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCardEl = styled.div`
  background: var(--color-surface);
  border-radius: var(--radius-card-sm);
  border: var(--value-1px) solid var(--alpha-blue-08);
  padding: var(--space-5-5) var(--space-6);
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
  transition: all var(--value-0-22s);

  &:hover {
    border-color: var(--alpha-blue-20);
    box-shadow: var(--number-zero) var(--value-8px) var(--value-24px) var(--alpha-blue-08);
    transform: translateY(var(--value-neg-2px));
  }
`;

const FeatureIconWrap = styled.div<{ $bg: string; $size: string }>`
  width: ${p => p.$size};
  height: ${p => p.$size};
  border-radius: var(--radius-button);
  background: ${p => p.$bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export function FeatureCard({
  icon,
  iconGradient = "linear-gradient(var(--value-135deg),var(--color-blue-600),var(--color-cyan-600))",
  iconSize = "var(--size-36)",
  title,
  text,
  ...rest
}: FeatureCardProps) {
  return (
    <FeatureCardEl {...rest}>
      <FeatureIconWrap $bg={iconGradient} $size={iconSize}>
        {icon}
      </FeatureIconWrap>
      <div>
        <CardTitle style={{ fontSize: "var(--value-0-95rem)", marginBottom: "var(--value-0-35rem)" }}>{title}</CardTitle>
        <CardText>{text}</CardText>
      </div>
    </FeatureCardEl>
  );
}

// ─── StepCard ────────────────────────────────────────────────────────────────────

export type StepCardState = "default" | "hover" | "active";

interface StepCardProps {
  step: string;
  title: string;
  text: string;
  state?: StepCardState;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const StepCardEl = styled.div<{ $active: boolean }>`
  background: ${p => p.$active ? "linear-gradient(var(--value-135deg),var(--color-blue-600),var(--color-blue-700))" : "var(--color-surface)"};
  border-radius: var(--radius-card);
  border: ${p => p.$active ? "none" : "var(--value-1px) solid var(--alpha-blue-08)"};
  padding: var(--space-6);
  transition: all var(--value-0-22s);
  cursor: pointer;

  &:hover {
    box-shadow: ${p => p.$active ? "var(--number-zero) var(--value-12px) var(--value-40px) var(--alpha-primary-30)" : "var(--number-zero) var(--value-8px) var(--value-24px) var(--alpha-blue-10)"};
    transform: translateY(var(--value-neg-2px));
  }
`;

const StepNum = styled.p<{ $active: boolean }>`
  font-family: var(--font-display);
  font-size: var(--font-size-micro);
  font-weight: var(--font-weight-extrabold);
  text-transform: uppercase;
  letter-spacing: var(--value-0-1em);
  color: ${p => p.$active ? "var(--alpha-white-60)" : "var(--color-blue-600)"};
  margin-bottom: var(--space-2);
`;

const StepTitle = styled.p<{ $active: boolean }>`
  font-family: var(--font-display);
  font-size: var(--font-size-button);
  font-weight: var(--font-weight-bold);
  color: ${p => p.$active ? "var(--color-surface)" : "var(--color-navy-950)"};
  margin-bottom: var(--space-1-2);
`;

const StepText = styled.p<{ $active: boolean }>`
  font-size: var(--font-size-xs);
  color: ${p => p.$active ? "var(--alpha-white-70)" : "var(--color-text-muted)"};
  line-height: var(--line-height-relaxed);
  margin: var(--space-0);
`;

export function StepCard({
  step,
  title,
  text,
  state = "default",
  onClick,
  ...rest
}: StepCardProps) {
  const active = state === "active";
  return (
    <StepCardEl $active={active} onClick={onClick} {...rest}>
      <StepNum $active={active}>{step}</StepNum>
      <StepTitle $active={active}>{title}</StepTitle>
      <StepText $active={active}>{text}</StepText>
    </StepCardEl>
  );
}
