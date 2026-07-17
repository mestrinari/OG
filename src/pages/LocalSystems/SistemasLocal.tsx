import styled from "styled-components";
import { Database, Network, Shield, HardDrive } from "lucide-react";
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

// ─── Concept Block ───────────────────────────────────────────────────────────────

const ConceptGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ConceptCard = styled.div<{ $highlight?: boolean }>`
  background: ${(p) =>
    p.$highlight ? "linear-gradient(135deg, #042c1e, #059669)" : "white"};
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid
    ${(p) => (p.$highlight ? "transparent" : "rgba(5, 150, 105, 0.12)")};
`;

const ConceptTitle = styled.h3<{ $light?: boolean }>`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${(p) => (p.$light ? "white" : "#0c1445")};
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ConceptDesc = styled.p<{ $light?: boolean }>`
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  color: ${(p) => (p.$light ? "rgba(255,255,255,0.7)" : "#4b5684")};
  line-height: 1.75;
`;

// ─── Type Cards ──────────────────────────────────────────────────────────────────

const TypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 1.5rem;
`;

const TypeCard = styled(HashLink)`
  background: white;
  border-radius: 16px;
  border: 1px solid rgba(5, 150, 105, 0.12);
  overflow: hidden;
  transition:
    box-shadow 0.25s,
    transform 0.25s;
  scroll-margin-top: 250px;

  &:hover {
    box-shadow: 0 10px 36px rgba(5, 150, 105, 0.1);
    transform: translateY(-3px);
  }
`;

const CardHeader = styled.div<{ $color: string }>`
  background: ${(p) => p.$color};
  padding: 1.5rem 1.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CardHeaderTitle = styled.h3`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: white;
`;

const CardHeaderSub = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.75);
  margin-top: 0.2rem;
`;

const CardBody = styled.div`
  padding: 1.5rem 1.75rem;
`;

const CardDesc = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: #4b5684;
  line-height: 1.7;
  margin-bottom: 1.25rem;
`;

const CheckList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CheckItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  color: #374151;
  line-height: 1.5;
`;

const Tag = styled.span<{ $variant?: "blue" | "green" | "orange" | "purple" }>`
  display: inline-block;
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  margin-top: 1rem;
  background: ${(p) =>
    p.$variant === "green"
      ? "#dcfce7"
      : p.$variant === "orange"
        ? "#ffedd5"
        : p.$variant === "purple"
          ? "#ede9fe"
          : "#dbeafe"};
  color: ${(p) =>
    p.$variant === "green"
      ? "#166534"
      : p.$variant === "orange"
        ? "#9a3412"
        : p.$variant === "purple"
          ? "#5b21b6"
          : "#1e40af"};
`;

const localTypes = [
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

export const SistemasLocal = {
  Section,
  Container,
  SectionLabel,
  SectionTitle,
  ConceptGrid,
  ConceptCard,
  ConceptTitle,
  ConceptDesc,
  TypeGrid,
  TypeCard,
  CardHeader,
  CardHeaderTitle,
  CardHeaderSub,
  CardBody,
  CardDesc,
  CheckList,
  CheckItem,
  Tag,
  localTypes,
};
