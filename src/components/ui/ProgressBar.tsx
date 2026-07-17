import styled, { css } from "styled-components";

export interface ProgressBarProps {
  value: number;          // 0–100
  max?: number;           // default 100
  height?: number;        // px, default 6
  gradient?: string;
  showLabel?: boolean;
  labelPosition?: "right" | "inside" | "above";
  animate?: boolean;
  className?: string;
}

const Track = styled.div<{ $h: number }>`
  width: 100%;
  height: ${p => p.$h}px;
  background: rgba(29,78,216,0.1);
  border-radius: 100px;
  overflow: hidden;
  position: relative;
`;

const Fill = styled.div<{ $pct: number; $gradient: string; $animate: boolean }>`
  height: 100%;
  width: ${p => p.$pct}%;
  background: ${p => p.$gradient};
  border-radius: 100px;
  ${p => p.$animate && css`transition: width 0.5s cubic-bezier(0.4,0,0.2,1);`}
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const AboveRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LabelText = styled.span`
  font-size: 0.78rem;
  font-weight: 700;
  color: #2563eb;
  font-family: 'Inter', sans-serif;
`;

const DEFAULT_GRADIENT = "linear-gradient(90deg, #2563eb, #0891b2)";

export function ProgressBar({
  value,
  max = 100,
  height = 6,
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
          <span style={{ fontSize: "0.75rem", color: "#9ca3af", fontWeight: 600 }}>
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
      <Wrap className={className} style={{ flexDirection: "row", alignItems: "center", gap: "0.75rem" }}>
        <Track $h={height} style={{ flex: 1 }}>
          <Fill $pct={pct} $gradient={gradient} $animate={animate} />
        </Track>
        <LabelText style={{ flexShrink: 0 }}>{Math.round(pct)}%</LabelText>
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
  gap: 0.375rem;
`;

const StepDot = styled.div<{ $status: "done"|"active"|"pending"; $color: string }>`
  width: ${p => p.$status === "active" ? "24px" : "8px"};
  height: 8px;
  border-radius: 100px;
  background: ${p =>
    p.$status === "done"    ? p.$color :
    p.$status === "active"  ? p.$color :
    "rgba(29,78,216,0.15)"};
  opacity: ${p => p.$status === "active" ? 1 : p.$status === "done" ? 0.6 : 0.4};
  transition: all 0.3s;
`;

export function StepProgress({
  current,
  total,
  completedColor = "linear-gradient(90deg,#2563eb,#0891b2)",
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
