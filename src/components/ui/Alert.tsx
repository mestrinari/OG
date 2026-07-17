import { ReactNode } from "react";
import styled, { css, keyframes } from "styled-components";
import {
  Info, CheckCircle2, AlertTriangle, AlertCircle, X
} from "lucide-react";

export type AlertType = "info" | "success" | "warning" | "error";

// ─── Alert (inline) ──────────────────────────────────────────────────────────────

const ALERT_STYLES = {
  info:    { bg: "#eff6ff", border: "#2563eb", color: "#1e3a8a", icon: Info },
  success: { bg: "#f0fdf4", border: "#16a34a", color: "#14532d", icon: CheckCircle2 },
  warning: { bg: "#fffbeb", border: "#f59e0b", color: "#78350f", icon: AlertTriangle },
  error:   { bg: "#fef2f2", border: "#dc2626", color: "#7f1d1d", icon: AlertCircle },
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
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  border-left: 4px solid;
  background: ${p => ALERT_STYLES[p.$type].bg};
  border-color: ${p => ALERT_STYLES[p.$type].border};
  color: ${p => ALERT_STYLES[p.$type].color};
`;

const AlertTitle = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
`;

const AlertBody = styled.p`
  font-size: 0.82rem;
  line-height: 1.55;
  margin: 0;
  opacity: 0.85;
`;

const AlertContent = styled.div`flex: 1;`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  opacity: 0.5;
  padding: 0;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;
  &:hover { opacity: 1; }
`;

export function Alert({ type = "info", title, children, onClose, className }: AlertProps) {
  const { icon: Icon } = ALERT_STYLES[type];
  return (
    <AlertWrap $type={type} className={className}>
      <Icon size={18} style={{ flexShrink: 0, marginTop: 1 }} />
      <AlertContent>
        {title && <AlertTitle>{title}</AlertTitle>}
        <AlertBody>{children}</AlertBody>
      </AlertContent>
      {onClose && (
        <CloseBtn onClick={onClose} aria-label="Fechar">
          <X size={15} />
        </CloseBtn>
      )}
    </AlertWrap>
  );
}

// ─── Toast ───────────────────────────────────────────────────────────────────────

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(12px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const TOAST_STYLES = {
  info:    { bg: "#0c1445", icon: Info,         iconColor: "#60a5fa" },
  success: { bg: "#0c1445", icon: CheckCircle2, iconColor: "#4ade80" },
  error:   { bg: "#dc2626", icon: AlertCircle,  iconColor: "#fca5a5" },
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
  gap: 0.875rem;
  padding: 0.875rem 1.125rem;
  border-radius: 12px;
  background: ${p => TOAST_STYLES[p.$type].bg};
  box-shadow: 0 8px 32px rgba(12,20,69,0.28);
  min-width: 280px;
  max-width: 400px;
  animation: ${slideIn} 0.3s ease;
`;

const ToastText = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  margin: 0;
  flex: 1;
  font-family: 'Inter', sans-serif;
`;

const ToastClose = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(255,255,255,0.5);
  padding: 0;
  display: flex;
  align-items: center;
  transition: color 0.2s;
  flex-shrink: 0;
  &:hover { color: white; }
`;

export function Toast({ type = "info", children, onClose, className }: ToastProps) {
  const { icon: Icon, iconColor } = TOAST_STYLES[type];
  return (
    <ToastWrap $type={type} className={className}>
      <Icon size={18} color={iconColor} style={{ flexShrink: 0 }} />
      <ToastText>{children}</ToastText>
      {onClose && (
        <ToastClose onClick={onClose} aria-label="Fechar">
          <X size={15} />
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
  padding: 3.5rem 1rem;
`;

const EmptyIconBg = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  color: #2563eb;
`;

const EmptyTitle = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 1.125rem;
  color: #0c1445;
  margin-bottom: 0.5rem;
`;

const EmptyText = styled.p`
  font-size: 0.875rem;
  color: #4b5684;
  margin-bottom: 1.5rem;
  max-width: 320px;
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
