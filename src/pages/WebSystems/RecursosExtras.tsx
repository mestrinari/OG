import { Bell, CloudLightning, Shield, Zap } from "lucide-react";
import type { InfoCardItem } from "../../components/InfoCardGrid";

export const extras: InfoCardItem[] = [
  {
    icon: <CloudLightning size={18} color="#2563eb" />,
    title: "Tempo Real",
    description: "Dados que se atualizam na tela sem precisar recarregar a página.",
  },
  {
    icon: <Shield size={18} color="#2563eb" />,
    title: "AWS Cognito",
    description: "Login seguro com autenticação profissional da Amazon.",
  },
  {
    icon: <Bell size={18} color="#2563eb" />,
    title: "Notificações",
    description: "Avise usuários por e-mail ou push quando algo importante acontecer.",
  },
  {
    icon: <Zap size={18} color="#2563eb" />,
    title: "Firebase",
    description: "Banco de dados em tempo real, notificações push e autenticação rápida.",
  },
];
