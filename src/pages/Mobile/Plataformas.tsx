import { Smartphone, WifiOff, Wifi, Users, Bell } from "lucide-react";
import type { SolutionTypeCardItem } from "../../components/SolutionTypeCards";

export const appTypes: SolutionTypeCardItem[] = [
  {
    id: "App-Simples",

    icon: <WifiOff size="var(--size-22)" color="var(--color-surface)" />,
    color: "linear-gradient(var(--value-135deg), var(--color-gray-700), var(--color-gray-800))",
    accentColor: "var(--color-gray-700)",

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
    accentColor: "var(--color-cyan-600)",

    icon: <Wifi size="var(--size-22)" color="var(--color-surface)" />,
    color: "linear-gradient(var(--value-135deg), var(--color-cyan-600), var(--color-cyan-700))",
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
    accentColor: "var(--color-purple-600)",

    icon: <Users size="var(--size-22)" color="var(--color-surface)" />,
    color: "linear-gradient(var(--value-135deg), var(--color-purple-600), var(--color-purple-700))",
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
    accentColor: "var(--color-amber-600)",

    icon: <Bell size="var(--size-22)" color="var(--color-surface)" />,
    color: "linear-gradient(var(--value-135deg), var(--color-amber-600), var(--color-amber-700))",
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
    accentColor: "var(--color-green-500)",

    icon: <Smartphone size="var(--size-22)" color="var(--color-surface)" />,
    color: "linear-gradient(var(--value-135deg), var(--color-green-500), var(--color-green-700))",
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
