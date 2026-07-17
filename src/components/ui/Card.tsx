import { type CSSProperties, ReactNode } from "react";
import styled, { css } from "styled-components";
import { Check } from "lucide-react";

// ─── Base card ────────────────────────────────────────────────────────────────────

const BaseCard = styled.div<{
  $hover?: boolean;
  $pad?: string;
  $radius?: number;
}>`
  background: white;
  border-radius: ${p => p.$radius ?? 16}px;
  border: 1px solid rgba(29,78,216,0.08);
  padding: ${p => p.$pad ?? "1.5rem"};
  transition: all 0.22s;

  ${p => p.$hover && css`
    cursor: pointer;
    &:hover {
      border-color: rgba(29,78,216,0.22);
      box-shadow: 0 10px 36px rgba(29,78,216,0.1);
      transform: translateY(-2px);
    }
  `}
`;

export interface CardProps {
  children: ReactNode;
  hover?: boolean;
  padding?: string;
  radius?: number;
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

const CardIconEl = styled.div<{ $bg: string; $size: number; $radius: number }>`
  width: ${p => p.$size}px;
  height: ${p => p.$size}px;
  border-radius: ${p => p.$radius}px;
  background: ${p => p.$bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export function CardIcon({
  gradient,
  size = 48,
  radius = 14,
  children,
}: {
  gradient: string;
  size?: number;
  radius?: number;
  children: ReactNode;
}) {
  return <CardIconEl $bg={gradient} $size={size} $radius={radius}>{children}</CardIconEl>;
}

// ─── Card.Title / Text ───────────────────────────────────────────────────────────

export const CardTitle = styled.h3<{ $size?: string }>`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: ${p => p.$size ?? "1rem"};
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.4rem;
  line-height: 1.3;
`;

export const CardText = styled.p<{ $size?: string }>`
  font-size: ${p => p.$size ?? "0.82rem"};
  color: #4b5684;
  line-height: 1.6;
  margin: 0;
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
  background: white;
  border-radius: 16px;
  border: 2px solid ${p => p.$state === "selected" ? p.$accent : "rgba(29,78,216,0.08)"};
  padding: 1.5rem;
  cursor: ${p => p.$state === "disabled" ? "not-allowed" : "pointer"};
  transition: all 0.22s;
  position: relative;
  overflow: hidden;

  ${p => p.$state === "selected" && css`
    box-shadow: 0 0 0 4px ${p.$accent}20, 0 12px 40px rgba(29,78,216,0.12);
  `}
  ${p => p.$state === "disabled" && css`opacity: 0.45; pointer-events: none;`}

  &:hover:not([data-disabled="true"]) {
    border-color: rgba(29,78,216,0.25);
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(29,78,216,0.1);
  }
`;

const SelectCheck = styled.div<{ $color: string }>`
  position: absolute;
  top: 0.875rem;
  right: 0.875rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${p => p.$color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function ServiceCard({
  state = "default",
  accentColor = "#2563eb",
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
          <Check size={11} color="white" />
        </SelectCheck>
      )}
      <CardIconEl $bg={iconGradient} $size={48} $radius={14} style={{ marginBottom: "1rem" }}>
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
  iconSize?: number;
  title: string;
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCardEl = styled.div`
  background: white;
  border-radius: 14px;
  border: 1px solid rgba(29,78,216,0.08);
  padding: 1.375rem 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: all 0.22s;

  &:hover {
    border-color: rgba(29,78,216,0.2);
    box-shadow: 0 8px 24px rgba(29,78,216,0.08);
    transform: translateY(-2px);
  }
`;

const FeatureIconWrap = styled.div<{ $bg: string; $size: number }>`
  width: ${p => p.$size}px;
  height: ${p => p.$size}px;
  border-radius: 10px;
  background: ${p => p.$bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export function FeatureCard({
  icon,
  iconGradient = "linear-gradient(135deg,#2563eb,#0891b2)",
  iconSize = 36,
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
        <CardTitle style={{ fontSize: "0.95rem", marginBottom: "0.35rem" }}>{title}</CardTitle>
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
  background: ${p => p.$active ? "linear-gradient(135deg,#2563eb,#1d4ed8)" : "white"};
  border-radius: 16px;
  border: ${p => p.$active ? "none" : "1px solid rgba(29,78,216,0.08)"};
  padding: 1.5rem;
  transition: all 0.22s;
  cursor: pointer;

  &:hover {
    box-shadow: ${p => p.$active ? "0 12px 40px rgba(37,99,235,0.3)" : "0 8px 24px rgba(29,78,216,0.1)"};
    transform: translateY(-2px);
  }
`;

const StepNum = styled.p<{ $active: boolean }>`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${p => p.$active ? "rgba(255,255,255,0.6)" : "#2563eb"};
  margin-bottom: 0.5rem;
`;

const StepTitle = styled.p<{ $active: boolean }>`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: ${p => p.$active ? "white" : "#0c1445"};
  margin-bottom: 0.3rem;
`;

const StepText = styled.p<{ $active: boolean }>`
  font-size: 0.8rem;
  color: ${p => p.$active ? "rgba(255,255,255,0.7)" : "#4b5684"};
  line-height: 1.55;
  margin: 0;
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
