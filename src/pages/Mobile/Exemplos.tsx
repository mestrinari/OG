import { Bell, Camera, MapPin, ShoppingBag } from "lucide-react";
import type { InfoCardItem } from "../../components/InfoCardGrid";

export const useCases: InfoCardItem[] = [
  {
    icon: <ShoppingBag size="var(--size-18)" color="var(--color-cyan-600)" />,
    title: "Delivery / Pedidos",
    description: "Cliente faz pedido, vendedor recebe em tempo real.",
  },
  {
    icon: <MapPin size="var(--size-18)" color="var(--color-cyan-600)" />,
    title: "Localização",
    description: "Rastreamento de entregadores ou técnicos em campo.",
  },
  {
    icon: <Camera size="var(--size-18)" color="var(--color-cyan-600)" />,
    title: "Relatório por Foto",
    description: "Técnico fotografa e registra no app direto da obra.",
  },
  {
    icon: <Bell size="var(--size-18)" color="var(--color-cyan-600)" />,
    title: "Promoções",
    description: "Avise clientes de ofertas com um clique.",
  },
];
