import styled, { keyframes } from "styled-components";
import { Zap, CloudLightning, Shield, Bell } from "lucide-react";
import { HashLink } from "react-router-hash-link";

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
  color: #2563eb;
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

const ExtraRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 3rem;
`;

const ExtraCard = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(29, 78, 216, 0.09);
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
`;

const ExtraIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 9px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ExtraText = styled.div``;
const ExtraTitle = styled.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.25rem;
`;
const ExtraDesc = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.78rem;
  color: #4b5684;
  line-height: 1.55;
`;

// ─── CTA ────────────────────────────────────────────────────────────────────────

const CTABanner = styled.div`
  background: linear-gradient(135deg, #0c1445, #1e3a8a);
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
  background: linear-gradient(135deg, #2563eb, #0891b2);
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

const extras = [
  {
    icon: <CloudLightning size={18} color="#2563eb" />,
    title: "Tempo Real",
    desc: "Dados que se atualizam na tela sem precisar recarregar a página.",
  },
  {
    icon: <Shield size={18} color="#2563eb" />,
    title: "AWS Cognito",
    desc: "Login seguro com autenticação profissional da Amazon.",
  },
  {
    icon: <Bell size={18} color="#2563eb" />,
    title: "Notificações",
    desc: "Avise usuários por e-mail ou push quando algo importante acontecer.",
  },
  {
    icon: <Zap size={18} color="#2563eb" />,
    title: "Firebase",
    desc: "Banco de dados em tempo real, notificações push e autenticação rápida.",
  },
];

// ─── Type Cards ──────────────────────────────────────────────────────────────────

const highlight = keyframes`
  from {
       transform: scale(1.03);
       box-shadow: 0 0 26px var(--highlight-color);
       border: 0px none #fff;
      }

  to {
    transform: scale(1);
    border: 1px solid  var(--highlight-color);

   box-shadow: 0 0 0 transparent;
  }
`;

export const RecursosExtras = {
  Section,
  Container,
  SectionLabel,
  SectionTitle,
  SectionSubtitle,
  ExtraDesc,
  ExtraTitle,
  ExtraText,
  ExtraIcon,
  ExtraCard,
  ExtraRow,

  CTABanner,

  CTATitle,
  CTASubtitle,
  CTAButton,
  extras,
  highlight,
};
