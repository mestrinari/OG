import { Bell, Camera, MapPin, ShoppingBag } from "lucide-react";
import type { InfoCardItem } from "../../components/InfoCardGrid";

export const useCases: InfoCardItem[] = [
  {
    icon: <ShoppingBag size={18} color="#0891b2" />,
    title: "Delivery / Pedidos",
    description: "Cliente faz pedido, vendedor recebe em tempo real.",
  },
  {
    icon: <MapPin size={18} color="#0891b2" />,
    title: "Localização",
    description: "Rastreamento de entregadores ou técnicos em campo.",
  },
  {
    icon: <Camera size={18} color="#0891b2" />,
    title: "Relatório por Foto",
    description: "Técnico fotografa e registra no app direto da obra.",
  },
  {
    icon: <Bell size={18} color="#0891b2" />,
    title: "Promoções",
    description: "Avise clientes de ofertas com um clique.",
  },
];
