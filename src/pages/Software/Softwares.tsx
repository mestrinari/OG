import { Server, Network, HardDrive, BarChart3 } from "lucide-react";
import type { SolutionTypeCardItem } from "../../components/SolutionTypeCards";

export const softwareTypes: SolutionTypeCardItem[] = [
  {
    id: "Software",
    accentColor: "var(--color-gray-700)",
    icon: <HardDrive size="var(--size-22)" color="var(--color-surface)" />,
    color: "linear-gradient(var(--value-135deg), var(--color-gray-700), var(--color-gray-800))",
    title: "Software Local Simples",
    sub: "Roda em um único computador",
    desc: "Um programa instalado no seu computador que funciona sem internet. Ideal para uso individual — controle de tarefas, registros ou ferramentas de apoio.",
    checks: [
      "Roda sem internet",
      "Dados salvos no computador",
      "Rápido e leve",
      "Windows, Mac ou Linux",
    ],
    tag: { label: "Mais simples", variant: "green" as const },
  },
  {
    id: "Software-Rede",
    icon: <Network size="var(--size-22)" color="var(--color-surface)" />,
    accentColor: "var(--color-purple-600)",
    color: "linear-gradient(var(--value-135deg), var(--color-purple-600), var(--color-purple-700))",
    title: "Software em Rede Local",
    sub: "Vários computadores, um sistema",
    desc: "Instalado em um servidor dentro da empresa, acessível por todos os computadores da rede interna. Perfeito para empresas com equipes compartilhando dados.",
    checks: [
      "Acesso por vários PCs",
      "Dados centralizados na empresa",
      "Sem depender da internet",
      "Login por usuário",
    ],
    tag: { label: "Intermediário", variant: "purple" as const },
  },
  {
    id: "Software-Nuvem",
    icon: <Server size="var(--size-22)" color="var(--color-surface)" />,
    accentColor: "var(--color-blue-700)",
    color: "linear-gradient(var(--value-135deg), var(--color-blue-700), var(--color-blue-800))",
    title: "Software com Servidor na Nuvem",
    sub: "Acesse de qualquer lugar",
    desc: "O sistema roda na nuvem e pode ser acessado de qualquer computador com internet. Dados seguros, backup automático e sem preocupação com máquina local.",
    checks: [
      "Acesso remoto (home office)",
      "Backup automático",
      "Escalável conforme cresce",
      "Login seguro",
    ],
    tag: { label: "Intermediário", variant: "blue" as const },
  },
  {
    id: "Sistema-Completo",
    icon: <BarChart3 size="var(--size-22)" color="var(--color-surface)" />,
    accentColor: "var(--color-green-500)",
    color: "linear-gradient(var(--value-135deg), var(--color-green-500), var(--color-green-700))",
    title: "Sistema de Gestão Completo",
    sub: "ERP para o seu negócio",
    desc: "Um sistema robusto que integra vendas, estoque, financeiro, clientes e relatórios — tudo em um só lugar. Feito sob medida para o seu negócio.",
    checks: [
      "Módulos por área",
      "Relatórios e gráficos",
      "Controle de usuários",
      "Integração com outros sistemas",
    ],
    tag: { label: "Avançado", variant: "green" as const },
  },
];
