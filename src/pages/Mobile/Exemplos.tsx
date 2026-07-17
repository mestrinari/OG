import styled from "styled-components";
import { Bell, MapPin, Camera, ShoppingBag } from "lucide-react";

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

// ─── Profiles Section ────────────────────────────────────────────────────────────

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const ProfileCard = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(8, 145, 178, 0.1);
  padding: 1.5rem 1.25rem;
  text-align: center;
`;

const ProfileIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #cffafe;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
`;

const ProfileTitle = styled.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.5rem;
`;

const ProfileDesc = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.8rem;
  color: #4b5684;
  line-height: 1.5;
`;

// ─── Use Cases ───────────────────────────────────────────────────────────────────

const UseCaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const UseCaseCard = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(8, 145, 178, 0.09);
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
`;

const UCIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 9px;
  background: #cffafe;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const UCTitle = styled.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.25rem;
`;

const UCDesc = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.78rem;
  color: #4b5684;
  line-height: 1.55;
`;

// ─── CTA ────────────────────────────────────────────────────────────────────────

const CTABanner = styled.div`
  background: linear-gradient(135deg, #0a1930, #0e7490);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 4rem;
`;

const CTATitle = styled.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.75rem;
`;

const CTASubtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 1.75rem;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, #0891b2, #0284c7);
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 10px;
  text-decoration: none;
  transition:
    opacity 0.2s,
    transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

// ─── Data ────────────────────────────────────────────────────────────────────────

const useCases = [
  {
    icon: <ShoppingBag size={18} color="#0891b2" />,
    title: "Delivery / Pedidos",
    desc: "Cliente faz pedido, vendedor recebe em tempo real.",
  },
  {
    icon: <MapPin size={18} color="#0891b2" />,
    title: "Localização",
    desc: "Rastreamento de entregadores ou técnicos em campo.",
  },
  {
    icon: <Camera size={18} color="#0891b2" />,
    title: "Relatório por Foto",
    desc: "Técnico fotografa e registra no app direto da obra.",
  },
  {
    icon: <Bell size={18} color="#0891b2" />,
    title: "Promoções",
    desc: "Avise clientes de ofertas com um clique.",
  },
];

export const Exemplos = {
  Section,
  Container,
  SectionLabel,
  SectionTitle,
  SectionSubtitle,
  PlatformRow,
  PlatformBadge,
  ProfileGrid,
  ProfileCard,
  ProfileIcon,
  ProfileTitle,
  ProfileDesc,
  UseCaseGrid,
  UseCaseCard,
  UCIcon,
  UCTitle,
  UCDesc,
  CTABanner,
  CTATitle,
  CTASubtitle,
  CTAButton,
  useCases,
};
