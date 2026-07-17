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
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${p => p.$c};
  flex-shrink: 0;
`;

const StyledBadge = styled.span<{
  $variant: BadgeVariant;
  $size: BadgeSize;
}>`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 100px;
  border: none;

  ${p => p.$size === "md" && css`font-size: 0.7rem; padding: 0.22rem 0.65rem;`}
  ${p => p.$size === "sm" && css`font-size: 0.62rem; padding: 0.15rem 0.5rem;`}

  ${p => p.$variant === "blue"    && css`background: #dbeafe; color: #1e40af;`}
  ${p => p.$variant === "green"   && css`background: #dcfce7; color: #166534;`}
  ${p => p.$variant === "amber"   && css`background: #fef3c7; color: #92400e;`}
  ${p => p.$variant === "red"     && css`background: #fee2e2; color: #991b1b;`}
  ${p => p.$variant === "purple"  && css`background: #ede9fe; color: #5b21b6;`}
  ${p => p.$variant === "cyan"    && css`background: #cffafe; color: #155e75;`}
  ${p => p.$variant === "gray"    && css`background: #f3f4f6; color: #4b5563;`}
  ${p => p.$variant === "outline" && css`
    background: transparent;
    color: #1d4ed8;
    border: 1.5px solid #bfdbfe;
  `}
`;

/* Dot colors per variant */
const DOT_COLORS: Record<BadgeVariant, string> = {
  blue:    "#2563eb",
  green:   "#16a34a",
  amber:   "#f59e0b",
  red:     "#dc2626",
  purple:  "#7c3aed",
  cyan:    "#0891b2",
  gray:    "#9ca3af",
  outline: "#2563eb",
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
