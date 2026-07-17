import styled, { css } from "styled-components";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

const SIZE_MAP: Record<AvatarSize, string> = {
  xs: "var(--size-24)",
  sm: "var(--size-32)",
  md: "var(--size-40)",
  lg: "var(--size-48)",
  xl: "var(--space-16)",
};

export interface AvatarProps {
  initials?: string;
  src?: string;
  size?: AvatarSize | string;
  gradient?: string;
  online?: boolean | "away" | "busy";
  className?: string;
  style?: React.CSSProperties;
}

const STATUS_COLOR: Record<string, string> = {
  "true":  "var(--color-green-600)",
  "away":  "var(--color-amber-500)",
  "busy":  "var(--color-red-600)",
  "false": "var(--color-gray-400)",
};

const AvatarEl = styled.div<{ $px: string; $bg: string }>`
  --avatar-size: ${p => p.$px};
  width: var(--avatar-size);
  height: var(--avatar-size);
  border-radius: var(--radius-round);
  background: ${p => p.$bg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: var(--font-weight-extrabold);
  color: var(--color-surface);
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  font-size: calc(var(--avatar-size) * var(--avatar-font-ratio));
  user-select: none;
`;

const AvatarImg = styled.img`
  width: var(--percent-full);
  height: var(--percent-full);
  object-fit: cover;
  border-radius: var(--radius-round);
`;

const StatusDot = styled.div<{ $status: string; $size: string }>`
  --avatar-size: ${p => p.$size};
  width: max(var(--size-8), calc(var(--avatar-size) * var(--avatar-status-ratio)));
  height: max(var(--size-8), calc(var(--avatar-size) * var(--avatar-status-ratio)));
  border-radius: var(--radius-round);
  background: ${p => STATUS_COLOR[p.$status] ?? "var(--color-gray-400)"};
  border: var(--value-2px) solid var(--color-surface);
  position: absolute;
  bottom: var(--space-0);
  right: var(--space-0);
`;

export function Avatar({
  initials,
  src,
  size = "md",
  gradient = "linear-gradient(var(--value-135deg), var(--color-blue-600), var(--color-cyan-600))",
  online,
  ...rest
}: AvatarProps) {
  const px = size in SIZE_MAP ? SIZE_MAP[size as AvatarSize] : size;
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
  size?: AvatarSize | string;
  max?: number;
  className?: string;
}

const GroupWrap = styled.div<{ $size: string }>`
  display: flex;
  align-items: center;

  & > * + * {
    margin-left: calc(${p => p.$size} * var(--avatar-overlap-ratio) * var(--number-negative-one));
  }

  & > * {
    outline: var(--value-2px) solid var(--color-surface);
    border-radius: var(--radius-round);
  }
`;

const OverflowBubble = styled(AvatarEl)`
  background: var(--color-border-input);
  color: var(--color-blue-700);
  font-size: calc(var(--avatar-size) * var(--avatar-overlap-ratio));
  font-weight: var(--font-weight-bold);
`;

export function AvatarGroup({ avatars, size = "sm", max = 4, className }: AvatarGroupProps) {
  const px = size in SIZE_MAP ? SIZE_MAP[size as AvatarSize] : size;
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;

  return (
    <GroupWrap $size={px} className={className}>
      {visible.map((a, i) => (
        <Avatar key={i} size={size} {...a} />
      ))}
      {overflow > 0 && (
        <OverflowBubble $px={px} $bg="var(--color-border-input)">+{overflow}</OverflowBubble>
      )}
    </GroupWrap>
  );
}
