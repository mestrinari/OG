import { ReactNode } from "react";
import styled, { css, keyframes } from "styled-components";
import {
  Info, CheckCircle2, AlertTriangle, AlertCircle, X
} from "lucide-react";

export type AlertType = "info" | "success" | "warning" | "error";

// ─── Alert (inline) ──────────────────────────────────────────────────────────────

const ALERT_STYLES = {
  info:    { bg: "var(--color-blue-50)", border: "var(--color-blue-600)", color: "var(--color-blue-900)", icon: Info },
  success: { bg: "var(--color-green-50)", border: "var(--color-green-600)", color: "var(--color-green-800-alt)", icon: CheckCircle2 },
  warning: { bg: "var(--color-amber-50)", border: "var(--color-amber-500)", color: "var(--color-amber-900)", icon: AlertTriangle },
  error:   { bg: "var(--color-red-50)", border: "var(--color-red-600)", color: "var(--color-red-900)", icon: AlertCircle },
};

export interface AlertProps {
  type?: AlertType;
  title?: string;
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}

const AlertWrap = styled.div<{ $type: AlertType }>`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5);
  border-radius: var(--radius-card-sm);
  border-left: var(--value-4px) solid;
  background: ${p => ALERT_STYLES[p.$type].bg};
  border-color: ${p => ALERT_STYLES[p.$type].border};
  color: ${p => ALERT_STYLES[p.$type].color};
`;

const AlertTitle = styled.p`
  font-family: var(--font-display);
  font-size: var(--font-size-base-sm);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-0-8);
`;

const AlertBody = styled.p`
  font-size: var(--font-size-xs-plus);
  line-height: var(--line-height-relaxed);
  margin: var(--space-0);
  opacity: var(--opacity-85);
`;

const AlertContent = styled.div`flex: var(--number-one);`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  opacity: var(--opacity-50);
  padding: var(--space-0);
  display: flex;
  align-items: center;
  transition: opacity var(--value-0-2s);
  &:hover { opacity: var(--number-one); }
`;

export function Alert({ type = "info", title, children, onClose, className }: AlertProps) {
  const { icon: Icon } = ALERT_STYLES[type];
  return (
    <AlertWrap $type={type} className={className}>
      <Icon size="var(--size-18)" style={{ flexShrink: "var(--number-zero)", marginTop: "var(--size-1)" }} />
      <AlertContent>
        {title && <AlertTitle>{title}</AlertTitle>}
        <AlertBody>{children}</AlertBody>
      </AlertContent>
      {onClose && (
        <CloseBtn onClick={onClose} aria-label="Fechar">
          <X size="var(--size-15)" />
        </CloseBtn>
      )}
    </AlertWrap>
  );
}

// ─── Toast ───────────────────────────────────────────────────────────────────────

const slideIn = keyframes`
  from { opacity: var(--number-zero); transform: translateY(var(--value-12px)) scale(var(--scale-enter)); }
  to   { opacity: var(--number-one); transform: translateY(var(--number-zero)) scale(var(--number-one)); }
`;

const TOAST_STYLES = {
  info:    { bg: "var(--color-navy-950)", icon: Info,         iconColor: "var(--color-blue-400)" },
  success: { bg: "var(--color-navy-950)", icon: CheckCircle2, iconColor: "var(--color-green-300)" },
  error:   { bg: "var(--color-red-600)", icon: AlertCircle,  iconColor: "var(--color-red-300)" },
};

export interface ToastProps {
  type?: "info" | "success" | "error";
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}

const ToastWrap = styled.div<{ $type: "info"|"success"|"error" }>`
  display: flex;
  align-items: center;
  gap: var(--space-3-5);
  padding: var(--space-3-5) var(--space-4-5);
  border-radius: var(--radius-card-sm);
  background: ${p => TOAST_STYLES[p.$type].bg};
  box-shadow: var(--number-zero) var(--value-8px) var(--value-32px) var(--alpha-navy-28);
  min-width: var(--size-280);
  max-width: var(--size-glow-small);
  animation: ${slideIn} var(--value-0-3s) ease;
`;

const ToastText = styled.p`
  font-size: var(--font-size-base-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-surface);
  margin: var(--space-0);
  flex: var(--number-one);
  font-family: var(--font-body);
`;

const ToastClose = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--alpha-white-50);
  padding: var(--space-0);
  display: flex;
  align-items: center;
  transition: color var(--value-0-2s);
  flex-shrink: 0;
  &:hover { color: var(--color-surface); }
`;

export function Toast({ type = "info", children, onClose, className }: ToastProps) {
  const { icon: Icon, iconColor } = TOAST_STYLES[type];
  return (
    <ToastWrap $type={type} className={className}>
      <Icon size="var(--size-18)" color={iconColor} style={{ flexShrink: "var(--number-zero)" }} />
      <ToastText>{children}</ToastText>
      {onClose && (
        <ToastClose onClick={onClose} aria-label="Fechar">
          <X size="var(--size-15)" />
        </ToastClose>
      )}
    </ToastWrap>
  );
}

// ─── EmptyState ──────────────────────────────────────────────────────────────────

export interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  text?: string;
  action?: ReactNode;
  className?: string;
}

const EmptyWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-14) var(--space-4);
`;

const EmptyIconBg = styled.div`
  width: var(--size-72);
  height: var(--size-72);
  border-radius: var(--radius-round);
  background: var(--color-blue-50);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-5);
  color: var(--color-blue-600);
`;

const EmptyTitle = styled.p`
  font-family: var(--font-display);
  font-weight: var(--font-weight-extrabold);
  font-size: var(--font-size-body-lg);
  color: var(--color-navy-950);
  margin-bottom: var(--space-2);
`;

const EmptyText = styled.p`
  font-size: var(--font-size-base-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-6);
  max-width: var(--size-320);
`;

export function EmptyState({ icon, title, text, action, className }: EmptyStateProps) {
  return (
    <EmptyWrap className={className}>
      <EmptyIconBg>{icon}</EmptyIconBg>
      <EmptyTitle>{title}</EmptyTitle>
      {text && <EmptyText>{text}</EmptyText>}
      {action}
    </EmptyWrap>
  );
}
