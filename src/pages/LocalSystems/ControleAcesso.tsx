import styled from "styled-components";
import { Lock, FileText, Wifi, WifiOff, Key, Eye } from "lucide-react";
import { HashLink } from "react-router-hash-link";

// ─── Styles ──────────────────────────────────────────────────────────────────────

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
  color: #059669;
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

// ─── Auth Section ────────────────────────────────────────────────────────────────

const AuthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const AuthCard = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(5, 150, 105, 0.1);
  padding: 1.375rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
`;

const AuthIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 9px;
  background: #dcfce7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const AuthTitle = styled.h4`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.25rem;
`;

const AuthDesc = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.78rem;
  color: #4b5684;
  line-height: 1.55;
`;

// ─── CTA ────────────────────────────────────────────────────────────────────────

const CTABanner = styled.div`
  background: linear-gradient(135deg, #042c1e, #059669);
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

const CTAButton = styled(HashLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, #059669, #047857);
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

const authFeatures = [
  {
    icon: <Key size={18} color="#059669" />,
    title: "Login por usuário e senha",
    desc: "Cada pessoa tem acesso único e pessoal ao sistema.",
  },
  {
    icon: <Eye size={18} color="#059669" />,
    title: "Controle do que cada um vê",
    desc: "Vendedor, gerente, caixa — cada cargo tem sua visão.",
  },
  {
    icon: <Lock size={18} color="#059669" />,
    title: "Bloqueio de acesso",
    desc: "O administrador pode bloquear um usuário com um clique.",
  },
  {
    icon: <FileText size={18} color="#059669" />,
    title: "Histórico de ações",
    desc: "Registro de quem fez o quê e quando no sistema.",
  },
  {
    icon: <WifiOff size={18} color="#059669" />,
    title: "Funciona sem internet",
    desc: "A autenticação pode ser feita localmente, sem nuvem.",
  },
  {
    icon: <Wifi size={18} color="#059669" />,
    title: "Ou com nuvem segura",
    desc: "AWS Cognito para autenticação profissional na nuvem.",
  },
];

export const ControleAcesso = {
  Section,
  Container,
  SectionLabel,
  SectionTitle,
  SectionSubtitle,
  AuthGrid,
  AuthCard,
  AuthIcon,
  AuthTitle,
  AuthDesc,
  CTABanner,
  CTATitle,
  CTASubtitle,
  CTAButton,
  authFeatures,
};
