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
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

export const services = [
  {
    to: "/web",
    icon: <Globe size={24} color="white" />,
    cor: "37, 99, 235",
    color: "linear-gradient(135deg, rgb(37, 99, 235), #1d4ed8)",
    title: "Sites e Sistemas Web",
    desc: "Do site simples para aparecer no Google até sistemas completos com login, banco de dados e integração em tempo real.",
  },
  {
    to: "/mobile",
    icon: <Smartphone size={24} color="white" />,
    cor: "8, 145, 178",
    color: "linear-gradient(135deg, rgb(8, 145, 178), #0e7490)",
    title: "Aplicativos Mobile",
    desc: "Apps para iPhone e Android — desde o app simples que funciona sem internet até o sistema completo com login e notificações.",
  },
  {
    to: "/software",
    icon: <Monitor size={24} color="white" />,
    cor: "124, 58, 237",
    color: "linear-gradient(135deg, rgb(124, 58, 237), #6d28d9)",
    title: "Softwares para PC",
    desc: "Programas para Windows, Mac ou Linux — para rodar em um computador ou em toda uma rede de empresa.",
  },
  {
    to: "/sistemas-locais",
    icon: <Server size={24} color="white" />,
    cor: "5, 150, 105",
    color: "linear-gradient(135deg, rgb(5, 150, 105), #047857)",
    title: "Sistemas Locais",
    desc: "Sistemas que rodam dentro da sua empresa, com banco de dados, acesso por usuário e senha, sem depender da internet.",
  },
];

export const features = [
  {
    icon: <Shield size={20} color="#2563eb" />,
    title: "Segurança Real",
    desc: "Autenticação com AWS Cognito, criptografia de dados e padrões profissionais de segurança.",
  },
  {
    icon: <Zap size={20} color="#2563eb" />,
    title: "Tempo Real",
    desc: "Atualizações instantâneas entre usuários — sem precisar atualizar a página.",
  },
  {
    icon: <Bell size={20} color="#2563eb" />,
    title: "Notificações Push",
    desc: "Avise seus clientes via Firebase — no celular, mesmo com o app fechado.",
  },
  {
    icon: <CloudLightning size={20} color="#2563eb" />,
    title: "Nuvem AWS",
    desc: "Infraestrutura confiável, escalável e com backup automático na Amazon.",
  },
  {
    icon: <Database size={20} color="#2563eb" />,
    title: "Banco de Dados",
    desc: "Seus dados organizados e seguros — acessíveis de qualquer dispositivo.",
  },
  {
    icon: <Users size={20} color="#2563eb" />,
    title: "Multiusuário",
    desc: "Perfis de cliente, vendedor, gerente — cada um vê apenas o que precisa.",
  },
];

export const Btn = styled(HashLink)`
  display: inline-flex;

  transition:
    opacity 0.2s,
    transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

export const PrimaryBtn = styled("button")`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, #2563eb, #0891b2);
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 10px;
  text-decoration: none;
  transition:
    opacity 0.2s,
    transform 0.2s;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const SecondaryBtn = styled("div")`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }
`;

export const Component = {
  Btn,
  PrimaryBtn,
  SecondaryBtn,
};
