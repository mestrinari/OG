import { Smartphone, WifiOff, Wifi, Users, Bell } from "lucide-react";
import type { SolutionTypeCardItem } from "../../components/SolutionTypeCards";

export const appTypes: SolutionTypeCardItem[] = [
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
