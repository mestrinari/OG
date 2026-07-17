import styled from "styled-components";
import { Smartphone, WifiOff, Wifi, Users, Bell } from "lucide-react";
import type { SolutionTypeCardItem } from "../../components/SolutionTypeCards";

const Section = styled.section<{ $bg?: string }>`
  padding: 5rem 1.5rem;
  background: ${(p) => p.$bg || "#f7f9ff"};
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionLabel = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0891b2;
  margin-bottom: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`;

// ─── Platform Tabs ───────────────────────────────────────────────────────────────

const PlatformRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const PlatformBadge = styled.div<{ $color: string; $bg: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.125rem;
  border-radius: 100px;
  background: ${(p) => p.$bg};
  border: 1px solid ${(p) => p.$color}33;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(p) => p.$color};
`;

// ─── Data ────────────────────────────────────────────────────────────────────────

const appTypes: SolutionTypeCardItem[] = [
  {
    id: "App-Simples",

    icon: <WifiOff size={22} color="white" />,
    color: "linear-gradient(135deg, rgb(55, 65, 81), #1f2937)",
    accentColor: "#374151",

    title: "App Simples (offline)",
    sub: "Funciona sem internet",
    desc: "O app funciona completamente sem conexão. Ideal para ferramentas de consulta, calculadoras, catálogos ou qualquer uso que não precise de dados externos.",
    checks: [
      "Funciona sem internet",
      "Dados salvos no celular",
      "Leve e rápido",
      "Sem mensalidade de servidor",
    ],
    tag: { label: "Mais simples", variant: "green" as const },
  },
  {
    id: "App-Conectado",
    accentColor: "#0891b2",

    icon: <Wifi size={22} color="white" />,
    color: "linear-gradient(135deg, rgb(8, 145, 178), #0e7490)",
    title: "App Conectado ao Servidor",
    sub: "Dados sempre atualizados",
    desc: "O app se comunica com um servidor na internet. Seus dados ficam na nuvem e são acessíveis de qualquer celular — perfeito para equipes ou múltiplos usuários.",
    checks: [
      "Dados na nuvem",
      "Sincronização automática",
      "Backup seguro",
      "Múltiplos dispositivos",
    ],
    tag: { label: "Intermediário", variant: "cyan" as const },
  },
  {
    id: "App-Login",
    accentColor: "#7c3aed",

    icon: <Users size={22} color="white" />,
    color: "linear-gradient(135deg, rgb(124, 58, 237), #6d28d9)",
    title: "App com Login e Perfis",
    sub: "Cada usuário tem o seu espaço",
    desc: "Sistema completo com cadastro, login, perfil de usuário e controle de acesso. Clientes, vendedores e gerentes veem informações diferentes no mesmo app.",
    checks: [
      "Login por usuário e senha",
      "Perfis de cliente, gerente, vendas",
      "Histórico por usuário",
      "Segurança profissional",
    ],
    tag: { label: "Intermediário", variant: "purple" as const },
  },
  {
    id: "App-Push",
    accentColor: "#d97706",

    icon: <Bell size={22} color="white" />,
    color: "linear-gradient(135deg, rgb(217, 119, 6), #b45309)",
    title: "App com Notificações Push",
    sub: "Mensagens mesmo com app fechado",
    desc: "O app avisa o usuário com notificações no celular — mesmo que esteja fechado. Ideal para pedidos, alertas, promoções ou mensagens importantes.",
    checks: [
      "Notificações automáticas",
      "Funciona com app fechado",
      "Firebase integrado",
      "Mensagens segmentadas por perfil",
    ],
    tag: { label: "Popular", variant: "orange" as const },
  },
  {
    id: "App-Completo",
    accentColor: "#059669",

    icon: <Smartphone size={22} color="white" />,
    color: "linear-gradient(135deg, rgb(5, 150, 105), #047857)",
    title: "App Completo com Tempo Real",
    sub: "Tudo atualizado na hora",
    desc: "O app mais robusto: login, banco de dados, notificações push e atualizações em tempo real. O que um usuário faz, o outro vê instantaneamente — sem recarregar.",
    checks: [
      "Tempo real (sem recarregar)",
      "Login e banco de dados",
      "Notificações push",
      "Histórico completo",
    ],
    tag: { label: "Avançado", variant: "green" as const },
  },
];

export const Plataformas = {
  Section,
  Container,
  SectionLabel,
  SectionTitle,
  SectionSubtitle,
  PlatformBadge,
  PlatformRow,
  appTypes,
};
