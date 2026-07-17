import styled from "styled-components";
import { Laptop, Printer, Package, Users, Wifi, WifiOff } from "lucide-react";
import { HashLink } from "react-router-hash-link";

// ─── Reused styles ───────────────────────────────────────────────────────────────

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
  color: #7c3aed;
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

// ─── Connection Options ──────────────────────────────────────────────────────────

const OptionRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const OptionCard = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(124, 58, 237, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

const OptionIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #ede9fe;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OptionTitle = styled.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #0c1445;
`;

const OptionDesc = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.82rem;
  color: #4b5684;
  line-height: 1.6;
`;

// ─── CTA ────────────────────────────────────────────────────────────────────────

const CTABanner = styled.div`
  background: linear-gradient(135deg, #1e1040, #5b21b6);
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
  background: linear-gradient(135deg, #7c3aed, #6d28d9);
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

const connOptions = [
  {
    icon: <WifiOff size={20} color="#7c3aed" />,
    title: "Totalmente offline",
    desc: "Funciona sem internet, dados ficam na máquina ou no servidor local.",
  },
  {
    icon: <Wifi size={20} color="#7c3aed" />,
    title: "Com conexão",
    desc: "Acessa dados na nuvem — qualquer computador com internet entra no sistema.",
  },
  {
    icon: <Users size={20} color="#7c3aed" />,
    title: "Multiusuário",
    desc: "Cada pessoa tem login próprio e permissões diferentes no sistema.",
  },
  {
    icon: <Printer size={20} color="#7c3aed" />,
    title: "Impressão e relatórios",
    desc: "Emite relatórios, nota fiscal e integra com impressoras locais.",
  },
  {
    icon: <Package size={20} color="#7c3aed" />,
    title: "Estoque e controle",
    desc: "Controle de produtos, entradas, saídas e alertas de estoque mínimo.",
  },
  {
    icon: <Laptop size={20} color="#7c3aed" />,
    title: "Windows, Mac ou Linux",
    desc: "Desenvolvemos para qualquer sistema operacional.",
  },
];

export const Recursos = {
  Section,
  Container,
  SectionLabel,
  SectionTitle,
  SectionSubtitle,
  OptionRow,
  OptionCard,
  OptionIcon,
  OptionTitle,
  OptionDesc,
  CTABanner,
  CTATitle,
  CTASubtitle,
  CTAButton,
  connOptions,
};
