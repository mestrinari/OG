import styled, { css } from "styled-components";

export type BadgeVariant =
  | "blue" | "green" | "amber" | "red" | "purple" | "cyan" | "gray" | "outline";
export type BadgeSize = "sm" | "md";

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  dotColor?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const DotEl = styled.span<{ $c: string }>`
  width: var(--size-6);
  height: var(--size-6);
  border-radius: var(--radius-round);
  background: ${p => p.$c};
  flex-shrink: 0;
`;

const StyledBadge = styled.span<{
  $variant: BadgeVariant;
  $size: BadgeSize;
}>`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1-2);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--value-0-05em);
  text-transform: uppercase;
  border-radius: var(--radius-pill);
  border: none;

  ${p => p.$size === "md" && css`font-size: var(--font-size-2xs); padding: var(--space-0-9) var(--space-2-6);`}
  ${p => p.$size === "sm" && css`font-size: var(--font-size-badge-sm); padding: var(--space-0-6) var(--space-2);`}

  ${p => p.$variant === "blue"    && css`background: var(--color-blue-100); color: var(--color-blue-800);`}
  ${p => p.$variant === "green"   && css`background: var(--color-green-100); color: var(--color-green-900);`}
  ${p => p.$variant === "amber"   && css`background: var(--color-amber-100); color: var(--color-amber-800);`}
  ${p => p.$variant === "red"     && css`background: var(--color-red-100); color: var(--color-red-800);`}
  ${p => p.$variant === "purple"  && css`background: var(--color-purple-100); color: var(--color-purple-800);`}
  ${p => p.$variant === "cyan"    && css`background: var(--color-cyan-100); color: var(--color-cyan-800);`}
  ${p => p.$variant === "gray"    && css`background: var(--color-gray-100); color: var(--color-gray-600);`}
  ${p => p.$variant === "outline" && css`
    background: transparent;
    color: var(--color-blue-700);
    border: var(--value-1-5px) solid var(--color-blue-200);
  `}
`;

/* Dot colors per variant */
const DOT_COLORS: Record<BadgeVariant, string> = {
  blue:    "var(--color-blue-600)",
  green:   "var(--color-green-600)",
  amber:   "var(--color-amber-500)",
  red:     "var(--color-red-600)",
  purple:  "var(--color-purple-600)",
  cyan:    "var(--color-cyan-600)",
  gray:    "var(--color-gray-400)",
  outline: "var(--color-blue-600)",
};

export function Badge({
  variant = "blue",
  size = "md",
  dot,
  dotColor,
  children,
  ...rest
}: BadgeProps) {
  return (
    <StyledBadge $variant={variant} $size={size} {...rest}>
      {dot && <DotEl $c={dotColor ?? DOT_COLORS[variant]} />}
      {children}
    </StyledBadge>
  );
}

/* Page-specific semantic aliases */
export const BadgeWeb      = (p: Omit<BadgeProps, "variant">) => <Badge variant="blue"   {...p} />;
export const BadgeMobile   = (p: Omit<BadgeProps, "variant">) => <Badge variant="cyan"   {...p} />;
export const BadgeSoftware = (p: Omit<BadgeProps, "variant">) => <Badge variant="purple" {...p} />;
export const BadgeLocal    = (p: Omit<BadgeProps, "variant">) => <Badge variant="green"  {...p} />;
export const BadgePriceTag = (p: Omit<BadgeProps, "variant">) => <Badge variant="amber"  {...p} />;
