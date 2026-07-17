import { Database, Network, Shield, HardDrive } from "lucide-react";
import type { SolutionTypeCardItem } from "../../components/SolutionTypeCards";

export const localTypes: SolutionTypeCardItem[] = [
  {
    id: "Sistema-Local",

    icon: <HardDrive size={22} color="white" />,
    color: "linear-gradient(135deg, #374151, #1f2937)",
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
    icon: <Network size={22} color="white" />,
    color: "linear-gradient(135deg, #059669, #047857)",
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
    icon: <Database size={22} color="white" />,
    color: "linear-gradient(135deg, #1d4ed8, #1e40af)",
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
    icon: <Shield size={22} color="white" />,
    color: "linear-gradient(135deg, #7c3aed, #6d28d9)",
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
