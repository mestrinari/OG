import styled, { css } from "styled-components";

export interface ProgressBarProps {
  value: number;          // 0–100
  max?: number;           // default 100
  height?: string;
  gradient?: string;
  showLabel?: boolean;
  labelPosition?: "right" | "inside" | "above";
  animate?: boolean;
  className?: string;
}

const Track = styled.div<{ $h: string }>`
  width: var(--percent-full);
  height: ${p => p.$h};
  background: var(--alpha-blue-10);
  border-radius: var(--radius-pill);
  overflow: hidden;
  position: relative;
`;

const Fill = styled.div<{ $pct: number; $gradient: string; $animate: boolean }>`
  height: var(--percent-full);
  width: ${p => p.$pct}%;
  background: ${p => p.$gradient};
  border-radius: var(--radius-pill);
  ${p => p.$animate && css`transition: width var(--value-0-5s) cubic-bezier(0.4,0,0.2,1);`}
`;

const Wrap = styled.div`
  width: var(--percent-full);
  display: flex;
  flex-direction: column;
  gap: var(--space-1-6);
`;

const AboveRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LabelText = styled.span`
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-bold);
  color: var(--color-blue-600);
  font-family: var(--font-body);
`;

const DEFAULT_GRADIENT = "linear-gradient(var(--value-90deg), var(--color-blue-600), var(--color-cyan-600))";

export function ProgressBar({
  value,
  max = 100,
  height = "var(--size-6)",
  gradient = DEFAULT_GRADIENT,
  showLabel = false,
  labelPosition = "right",
  animate = true,
  className,
}: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  if (showLabel && labelPosition === "above") {
    return (
      <Wrap className={className}>
        <AboveRow>
          <span style={{ fontSize: "var(--value-0-75rem)", color: "var(--color-gray-400)", fontWeight: "var(--font-weight-semibold)" }}>
            {value} / {max}
          </span>
          <LabelText>{Math.round(pct)}%</LabelText>
        </AboveRow>
        <Track $h={height}>
          <Fill $pct={pct} $gradient={gradient} $animate={animate} />
        </Track>
      </Wrap>
    );
  }

  if (showLabel && labelPosition === "right") {
    return (
      <Wrap className={className} style={{ flexDirection: "row", alignItems: "center", gap: "var(--value-0-75rem)" }}>
        <Track $h={height} style={{ flex: "var(--number-one)" }}>
          <Fill $pct={pct} $gradient={gradient} $animate={animate} />
        </Track>
        <LabelText style={{ flexShrink: "var(--number-zero)" }}>{Math.round(pct)}%</LabelText>
      </Wrap>
    );
  }

  return (
    <Track $h={height} className={className}>
      <Fill $pct={pct} $gradient={gradient} $animate={animate} />
    </Track>
  );
}

/* ── Step progress dots (quiz pattern) ── */
export interface StepProgressProps {
  current: number;  // 0-based
  total: number;
  completedColor?: string;
  className?: string;
}

const DotsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-1-5);
`;

const StepDot = styled.div<{ $status: "done"|"active"|"pending"; $color: string }>`
  width: ${p => p.$status === "active" ? "var(--value-24px)" : "var(--value-8px)"};
  height: var(--size-8);
  border-radius: var(--radius-pill);
  background: ${p =>
    p.$status === "done"    ? p.$color :
    p.$status === "active"  ? p.$color :
    "var(--alpha-blue-15)"};
  opacity: ${p => p.$status === "active" ? "var(--number-one)" : p.$status === "done" ? "var(--opacity-60)" : "var(--opacity-40)"};
  transition: all var(--value-0-3s);
`;

export function StepProgress({
  current,
  total,
  completedColor = "linear-gradient(var(--value-90deg),var(--color-blue-600),var(--color-cyan-600))",
  className,
}: StepProgressProps) {
  return (
    <DotsWrap className={className}>
      {Array.from({ length: total }).map((_, i) => (
        <StepDot
          key={i}
          $status={i < current ? "done" : i === current ? "active" : "pending"}
          $color={completedColor}
        />
      ))}
    </DotsWrap>
  );
}
