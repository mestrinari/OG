import { Database, Network, Shield, HardDrive } from "lucide-react";
import type { SolutionTypeCardItem } from "../../components/SolutionTypeCards";

export const localTypes: SolutionTypeCardItem[] = [
  {
    id: "Sistema-Local",

    icon: <HardDrive size="var(--size-22)" color="var(--color-surface)" />,
    color: "linear-gradient(var(--value-135deg), var(--color-gray-700), var(--color-gray-800))",
    title: "Sistema Local sem Internet",
    sub: "Totalmente offline",
    desc: "Roda dentro da empresa sem precisar de internet. Os dados ficam no servidor local e só quem está na rede interna acessa. Máxima privacidade.",
    checks: [
      "Sem dependência de internet",
      "Dados ficam dentro da empresa",
      "Acesso somente na rede interna",
      "Sem risco de invasão externa",
    ],
    tag: { label: "Mais seguro", variant: "green" as const },
  },
  {
    id: "Sistema-Rede-Local-Banco",
    icon: <Network size="var(--size-22)" color="var(--color-surface)" />,
    color: "linear-gradient(var(--value-135deg), var(--color-green-500), var(--color-green-700))",
    title: "Rede Local com Banco de Dados",
    sub: "Dados centralizados internamente",
    desc: "Vários computadores da empresa acessam o mesmo banco de dados. Estoque, clientes, pedidos — tudo compartilhado em tempo real dentro da rede.",
    checks: [
      "Banco de dados central",
      "Vários PCs conectados",
      "Dados em tempo real",
      "Login por usuário",
    ],
    tag: { label: "Intermediário", variant: "green" as const },
  },
  {
    id: "Sistema-Auth",
    icon: <Database size="var(--size-22)" color="var(--color-surface)" />,
    color: "linear-gradient(var(--value-135deg), var(--color-blue-700), var(--color-blue-800))",
    title: "Sistema com Autenticação",
    sub: "Usuário e senha para tudo",
    desc: "Cada pessoa entra com seu login e vê apenas o que tem permissão. Um vendedor não vê os dados financeiros. Um gerente vê tudo. Simples assim.",
    checks: [
      "Login individual",
      "Permissões por cargo",
      "Registro de ações (log)",
      "Recuperação de senha",
    ],
    tag: { label: "Intermediário", variant: "blue" as const },
  },
  {
    id: "Sistema-Híbrido",
    icon: <Shield size="var(--size-22)" color="var(--color-surface)" />,
    color: "linear-gradient(var(--value-135deg), var(--color-purple-600), var(--color-purple-700))",
    title: "Sistema Híbrido",
    sub: "Local + nuvem quando quiser",
    desc: "Funciona localmente mas também sincroniza com a nuvem — quando há internet, os dados são salvos online. Quando cai a internet, o sistema continua funcionando.",
    checks: [
      "Funciona offline e online",
      "Sincroniza automaticamente",
      "Backup na nuvem",
      "Acesso remoto quando necessário",
    ],
    tag: { label: "Avançado", variant: "purple" as const },
  },
];
