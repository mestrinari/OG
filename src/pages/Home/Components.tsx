import {
  Bell,
  CloudLightning,
  Database,
  Globe,
  Monitor,
  Server,
  Shield,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import type { InfoCardItem } from "../../components/InfoCardGrid";
import type { ServiceCardItem } from "../../components/ServiceCards";

export const services: ServiceCardItem[] = [
  {
    to: "/web",
    icon: <Globe size={24} color="white" />,
    accentColor: "#2563eb",
    iconBackground: "linear-gradient(135deg, rgb(37, 99, 235), #1d4ed8)",
    title: "Sites e Sistemas Web",
    description: "Do site simples para aparecer no Google até sistemas completos com login, banco de dados e integração em tempo real.",
  },
  {
    to: "/mobile",
    icon: <Smartphone size={24} color="white" />,
    accentColor: "#0891b2",
    iconBackground: "linear-gradient(135deg, rgb(8, 145, 178), #0e7490)",
    title: "Aplicativos Mobile",
    description: "Apps para iPhone e Android — desde o app simples que funciona sem internet até o sistema completo com login e notificações.",
  },
  {
    to: "/software",
    icon: <Monitor size={24} color="white" />,
    accentColor: "#7c3aed",
    iconBackground: "linear-gradient(135deg, rgb(124, 58, 237), #6d28d9)",
    title: "Softwares para PC",
    description: "Programas para Windows, Mac ou Linux — para rodar em um computador ou em toda uma rede de empresa.",
  },
  {
    to: "/sistemas-locais",
    icon: <Server size={24} color="white" />,
    accentColor: "#059669",
    iconBackground: "linear-gradient(135deg, rgb(5, 150, 105), #047857)",
    title: "Sistemas Locais",
    description: "Sistemas que rodam dentro da sua empresa, com banco de dados, acesso por usuário e senha, sem depender da internet.",
  },
];

export const features: InfoCardItem[] = [
  {
    icon: <Shield size={20} color="#2563eb" />,
    title: "Segurança Real",
    description: "Autenticação com AWS Cognito, criptografia de dados e padrões profissionais de segurança.",
  },
  {
    icon: <Zap size={20} color="#2563eb" />,
    title: "Tempo Real",
    description: "Atualizações instantâneas entre usuários — sem precisar atualizar a página.",
  },
  {
    icon: <Bell size={20} color="#2563eb" />,
    title: "Notificações Push",
    description: "Avise seus clientes via Firebase — no celular, mesmo com o app fechado.",
  },
  {
    icon: <CloudLightning size={20} color="#2563eb" />,
    title: "Nuvem AWS",
    description: "Infraestrutura confiável, escalável e com backup automático na Amazon.",
  },
  {
    icon: <Database size={20} color="#2563eb" />,
    title: "Banco de Dados",
    description: "Seus dados organizados e seguros — acessíveis de qualquer dispositivo.",
  },
  {
    icon: <Users size={20} color="#2563eb" />,
    title: "Multiusuário",
    description: "Perfis de cliente, vendedor, gerente — cada um vê apenas o que precisa.",
  },
];
