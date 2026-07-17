import { Bell, CloudLightning, Shield, Zap } from "lucide-react";
import type { InfoCardItem } from "../../components/InfoCardGrid";

export const extras: InfoCardItem[] = [
  {
    icon: <CloudLightning size="var(--size-18)" color="var(--color-blue-600)" />,
    title: "Tempo Real",
    description: "Dados que se atualizam na tela sem precisar recarregar a página.",
  },
  {
    icon: <Shield size="var(--size-18)" color="var(--color-blue-600)" />,
    title: "AWS Cognito",
    description: "Login seguro com autenticação profissional da Amazon.",
  },
  {
    icon: <Bell size="var(--size-18)" color="var(--color-blue-600)" />,
    title: "Notificações",
    description: "Avise usuários por e-mail ou push quando algo importante acontecer.",
  },
  {
    icon: <Zap size="var(--size-18)" color="var(--color-blue-600)" />,
    title: "Firebase",
    description: "Banco de dados em tempo real, notificações push e autenticação rápida.",
  },
];
