import { Laptop, Package, Printer, Users, Wifi, WifiOff } from "lucide-react";
import type { InfoCardItem } from "../../components/InfoCardGrid";

export const connOptions: InfoCardItem[] = [
  {
    icon: <WifiOff size={20} color="#7c3aed" />,
    title: "Totalmente offline",
    description: "Funciona sem internet, dados ficam na máquina ou no servidor local.",
  },
  {
    icon: <Wifi size={20} color="#7c3aed" />,
    title: "Com conexão",
    description: "Acessa dados na nuvem — qualquer computador com internet entra no sistema.",
  },
  {
    icon: <Users size={20} color="#7c3aed" />,
    title: "Multiusuário",
    description: "Cada pessoa tem login próprio e permissões diferentes no sistema.",
  },
  {
    icon: <Printer size={20} color="#7c3aed" />,
    title: "Impressão e relatórios",
    description: "Emite relatórios, nota fiscal e integra com impressoras locais.",
  },
  {
    icon: <Package size={20} color="#7c3aed" />,
    title: "Estoque e controle",
    description: "Controle de produtos, entradas, saídas e alertas de estoque mínimo.",
  },
  {
    icon: <Laptop size={20} color="#7c3aed" />,
    title: "Windows, Mac ou Linux",
    description: "Desenvolvemos para qualquer sistema operacional.",
  },
];
