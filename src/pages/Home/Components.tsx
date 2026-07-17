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
    icon: <Globe size="var(--size-24)" color="var(--color-surface)" />,
    accentColor: "var(--color-blue-600)",
    iconBackground: "linear-gradient(var(--value-135deg), var(--color-blue-600), var(--color-blue-700))",
    title: "Sites e Sistemas Web",
    description: "Do site simples para aparecer no Google até sistemas completos com login, banco de dados e integração em tempo real.",
  },
  {
    to: "/mobile",
    icon: <Smartphone size="var(--size-24)" color="var(--color-surface)" />,
    accentColor: "var(--color-cyan-600)",
    iconBackground: "linear-gradient(var(--value-135deg), var(--color-cyan-600), var(--color-cyan-700))",
    title: "Aplicativos Mobile",
    description: "Apps para iPhone e Android — desde o app simples que funciona sem internet até o sistema completo com login e notificações.",
  },
  {
    to: "/software",
    icon: <Monitor size="var(--size-24)" color="var(--color-surface)" />,
    accentColor: "var(--color-purple-600)",
    iconBackground: "linear-gradient(var(--value-135deg), var(--color-purple-600), var(--color-purple-700))",
    title: "Softwares para PC",
    description: "Programas para Windows, Mac ou Linux — para rodar em um computador ou em toda uma rede de empresa.",
  },
  {
    to: "/sistemas-locais",
    icon: <Server size="var(--size-24)" color="var(--color-surface)" />,
    accentColor: "var(--color-green-500)",
    iconBackground: "linear-gradient(var(--value-135deg), var(--color-green-500), var(--color-green-700))",
    title: "Sistemas Locais",
    description: "Sistemas que rodam dentro da sua empresa, com banco de dados, acesso por usuário e senha, sem depender da internet.",
  },
];

export const features: InfoCardItem[] = [
  {
    icon: <Shield size="var(--size-20)" color="var(--color-blue-600)" />,
    title: "Segurança Real",
    description: "Autenticação com AWS Cognito, criptografia de dados e padrões profissionais de segurança.",
  },
  {
    icon: <Zap size="var(--size-20)" color="var(--color-blue-600)" />,
    title: "Tempo Real",
    description: "Atualizações instantâneas entre usuários — sem precisar atualizar a página.",
  },
  {
    icon: <Bell size="var(--size-20)" color="var(--color-blue-600)" />,
    title: "Notificações Push",
    description: "Avise seus clientes via Firebase — no celular, mesmo com o app fechado.",
  },
  {
    icon: <CloudLightning size="var(--size-20)" color="var(--color-blue-600)" />,
    title: "Nuvem AWS",
    description: "Infraestrutura confiável, escalável e com backup automático na Amazon.",
  },
  {
    icon: <Database size="var(--size-20)" color="var(--color-blue-600)" />,
    title: "Banco de Dados",
    description: "Seus dados organizados e seguros — acessíveis de qualquer dispositivo.",
  },
  {
    icon: <Users size="var(--size-20)" color="var(--color-blue-600)" />,
    title: "Multiusuário",
    description: "Perfis de cliente, vendedor, gerente — cada um vê apenas o que precisa.",
  },
];
