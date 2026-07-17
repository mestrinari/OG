import styled, { css, keyframes } from "styled-components";
import { Server, Network, HardDrive, BarChart3 } from "lucide-react";

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

// ─── OS Badges ───────────────────────────────────────────────────────────────────

const OSRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const OSBadge = styled.div<{ $bg: string; $color: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  border-radius: 100px;
  background: ${(p) => p.$bg};
  border: 1px solid ${(p) => p.$color}40;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(p) => p.$color};
`;

// ─── Main Grid ───────────────────────────────────────────────────────────────────

const TypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

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

const TypeCard = styled("div")<{ $color: string; $highlight?: boolean }>`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  scroll-margin-top: 250px;

  ${({ $highlight, $color }) =>
    $highlight
      ? css`
          --highlight-color: rgba(${$color}, 1);
          --highlight-color-soft: rgba(${$color}, 0.6);
          animation: ${highlight} 4s linear;
        `
      : css`
          &:hover {
            box-shadow: 0 1px 16px rgba(${$color}, 0.6);
            transform: scale(1.03);
            border: 0px solid rgba(${$color}, 0.6);
          }
        `}
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

// ─── Data ────────────────────────────────────────────────────────────────────────

const softwareTypes = [
  {
    id: "Software",
    cor: "55, 65, 81",
    icon: <HardDrive size={22} color="white" />,
    color: "linear-gradient(135deg, #374151, #1f2937)",
    title: "Software Local Simples",
    sub: "Roda em um único computador",
    desc: "Um programa instalado no seu computador que funciona sem internet. Ideal para uso individual — controle de tarefas, registros ou ferramentas de apoio.",
    checks: [
      "Roda sem internet",
      "Dados salvos no computador",
      "Rápido e leve",
      "Windows, Mac ou Linux",
    ],
    tag: { label: "Mais simples", variant: "green" as const },
  },
  {
    id: "Software-Rede",
    icon: <Network size={22} color="white" />,
    cor: "124, 58, 237",
    color: "linear-gradient(135deg, #7c3aed, #6d28d9)",
    title: "Software em Rede Local",
    sub: "Vários computadores, um sistema",
    desc: "Instalado em um servidor dentro da empresa, acessível por todos os computadores da rede interna. Perfeito para empresas com equipes compartilhando dados.",
    checks: [
      "Acesso por vários PCs",
      "Dados centralizados na empresa",
      "Sem depender da internet",
      "Login por usuário",
    ],
    tag: { label: "Intermediário", variant: "purple" as const },
  },
  {
    id: "Software-Nuvem",
    icon: <Server size={22} color="white" />,
    cor: "29, 78, 216",
    color: "linear-gradient(135deg, #1d4ed8, #1e40af)",
    title: "Software com Servidor na Nuvem",
    sub: "Acesse de qualquer lugar",
    desc: "O sistema roda na nuvem e pode ser acessado de qualquer computador com internet. Dados seguros, backup automático e sem preocupação com máquina local.",
    checks: [
      "Acesso remoto (home office)",
      "Backup automático",
      "Escalável conforme cresce",
      "Login seguro",
    ],
    tag: { label: "Intermediário", variant: "blue" as const },
  },
  {
    id: "Sistema-Completo",
    icon: <BarChart3 size={22} color="white" />,
    cor: "5, 150, 105",
    color: "linear-gradient(135deg, #059669, #047857)",
    title: "Sistema de Gestão Completo",
    sub: "ERP para o seu negócio",
    desc: "Um sistema robusto que integra vendas, estoque, financeiro, clientes e relatórios — tudo em um só lugar. Feito sob medida para o seu negócio.",
    checks: [
      "Módulos por área",
      "Relatórios e gráficos",
      "Controle de usuários",
      "Integração com outros sistemas",
    ],
    tag: { label: "Avançado", variant: "green" as const },
  },
];

export const Softwares = {
  Section,
  Container,
  SectionLabel,
  SectionTitle,
  SectionSubtitle,
  OSBadge,
  OSRow,
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
  softwareTypes,
};
