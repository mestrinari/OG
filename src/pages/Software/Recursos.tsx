import { Laptop, Package, Printer, Users, Wifi, WifiOff } from "lucide-react";
import type { InfoCardItem } from "../../components/InfoCardGrid";

export const connOptions: InfoCardItem[] = [
  {
    icon: <WifiOff size="var(--size-20)" color="var(--color-purple-600)" />,
    title: "Totalmente offline",
    description: "Funciona sem internet, dados ficam na máquina ou no servidor local.",
  },
  {
    icon: <Wifi size="var(--size-20)" color="var(--color-purple-600)" />,
    title: "Com conexão",
    description: "Acessa dados na nuvem — qualquer computador com internet entra no sistema.",
  },
  {
    icon: <Users size="var(--size-20)" color="var(--color-purple-600)" />,
    title: "Multiusuário",
    description: "Cada pessoa tem login próprio e permissões diferentes no sistema.",
  },
  {
    icon: <Printer size="var(--size-20)" color="var(--color-purple-600)" />,
    title: "Impressão e relatórios",
    description: "Emite relatórios, nota fiscal e integra com impressoras locais.",
  },
  {
    icon: <Package size="var(--size-20)" color="var(--color-purple-600)" />,
    title: "Estoque e controle",
    description: "Controle de produtos, entradas, saídas e alertas de estoque mínimo.",
  },
  {
    icon: <Laptop size="var(--size-20)" color="var(--color-purple-600)" />,
    title: "Windows, Mac ou Linux",
    description: "Desenvolvemos para qualquer sistema operacional.",
  },
];
