import styled, { css } from "styled-components";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

const SIZE_MAP: Record<AvatarSize, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
};

export interface AvatarProps {
  initials?: string;
  src?: string;
  size?: AvatarSize | number;
  gradient?: string;
  online?: boolean | "away" | "busy";
  className?: string;
  style?: React.CSSProperties;
}

const STATUS_COLOR: Record<string, string> = {
  "true":  "#22c55e",
  "away":  "#f59e0b",
  "busy":  "#dc2626",
  "false": "#9ca3af",
};

const AvatarEl = styled.div<{ $px: number; $bg: string }>`
  width: ${p => p.$px}px;
  height: ${p => p.$px}px;
  border-radius: 50%;
  background: ${p => p.$bg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  color: white;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  font-size: ${p => Math.round(p.$px * 0.34)}px;
  user-select: none;
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const StatusDot = styled.div<{ $status: string; $size: number }>`
  width: ${p => Math.max(8, Math.round(p.$size * 0.22))}px;
  height: ${p => Math.max(8, Math.round(p.$size * 0.22))}px;
  border-radius: 50%;
  background: ${p => STATUS_COLOR[p.$status] ?? "#9ca3af"};
  border: 2px solid white;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export function Avatar({
  initials,
  src,
  size = "md",
  gradient = "linear-gradient(135deg, #2563eb, #0891b2)",
  online,
  ...rest
}: AvatarProps) {
  const px = typeof size === "number" ? size : SIZE_MAP[size];
  const statusKey = online === undefined ? undefined : String(online);

  return (
    <AvatarEl $px={px} $bg={gradient} {...rest}>
      {src ? <AvatarImg src={src} alt={initials ?? ""} /> : initials}
      {statusKey !== undefined && (
        <StatusDot $status={statusKey} $size={px} />
      )}
    </AvatarEl>
  );
}

/* ── AvatarGroup ── */
export interface AvatarGroupProps {
  avatars: Pick<AvatarProps, "initials" | "src" | "gradient">[];
  size?: AvatarSize | number;
  max?: number;
  className?: string;
}

const GroupWrap = styled.div<{ $offset: number }>`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: ${p => -p.$offset}px;
  }

  & > * {
    outline: 2px solid white;
    border-radius: 50%;
  }
`;

const OverflowBubble = styled(AvatarEl)`
  background: #e2eaff;
  color: #1d4ed8;
  font-size: ${p => Math.round(p.$px * 0.3)}px;
  font-weight: 700;
`;

export function AvatarGroup({ avatars, size = "sm", max = 4, className }: AvatarGroupProps) {
  const px = typeof size === "number" ? size : SIZE_MAP[size];
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;

  return (
    <GroupWrap $offset={Math.round(px * 0.3)} className={className}>
      {visible.map((a, i) => (
        <Avatar key={i} size={size} {...a} />
      ))}
      {overflow > 0 && (
        <OverflowBubble $px={px} $bg="#e2eaff">+{overflow}</OverflowBubble>
      )}
    </GroupWrap>
  );
}
