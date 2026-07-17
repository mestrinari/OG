import styled from "styled-components";
import {
  Monitor,
  Laptop,
  Apple,
  Server,
  Network,
  HardDrive,
  Printer,
  BarChart3,
  Package,
  CheckCircle2,
  ArrowRight,
  Users,
  Wifi,
  WifiOff,
} from "lucide-react";
import { HashLink } from "react-router-hash-link";

// ─── Reused styles ───────────────────────────────────────────────────────────────

const PageHero = styled.section`
  background: linear-gradient(160deg, #1e1040 0%, #5b21b6 100%);
  padding: 8rem 1.5rem 5rem;
  text-align: center;
`;

const PageBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(124, 58, 237, 0.25);
  border: 1px solid rgba(124, 58, 237, 0.45);
  border-radius: 100px;
  padding: 0.375rem 1rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #c4b5fd;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const PageTitle = styled.h1`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: white;
  line-height: 1.15;
  letter-spacing: -0.025em;
  max-width: 700px;
  margin: 0 auto 1.25rem;
`;

const PageSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.75;
`;

const Section = styled.section<{ $bg?: string }>`
  padding: 5rem 1.5rem;
  background: ${(p) => p.$bg || "#f7f9ff"};
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7c3aed;
  margin-bottom: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
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
  font-family: 'Inter', sans-serif;
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

const TypeCard = styled(HashLink)`
  background: white;
  border-radius: 16px;
  border: 1px solid rgba(124, 58, 237, 0.1);
  overflow: hidden;
  transition: box-shadow 0.25s, transform 0.25s;
  scroll-margin-top: 250px;
  &:hover {
    box-shadow: 0 10px 36px rgba(124, 58, 237, 0.1);
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
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: white;
`;

const CardHeaderSub = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.75);
  margin-top: 0.2rem;
`;

const CardBody = styled.div`
  padding: 1.5rem 1.75rem;
`;

const CardDesc = styled.p`
  font-family: 'Inter', sans-serif;
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
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: #374151;
  line-height: 1.5;
`;

const Tag = styled.span<{ $variant?: "blue" | "green" | "orange" | "purple" }>`
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  margin-top: 1rem;
  background: ${(p) =>
    p.$variant === "green" ? "#dcfce7"
    : p.$variant === "orange" ? "#ffedd5"
    : p.$variant === "purple" ? "#ede9fe"
    : "#dbeafe"};
  color: ${(p) =>
    p.$variant === "green" ? "#166534"
    : p.$variant === "orange" ? "#9a3412"
    : p.$variant === "purple" ? "#5b21b6"
    : "#1e40af"};
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
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #0c1445;
`;

const OptionDesc = styled.p`
  font-family: 'Inter', sans-serif;
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
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.75rem;
`;

const CTASubtitle = styled.p`
  font-family: 'Inter', sans-serif;
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
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 10px;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

// ─── Data ────────────────────────────────────────────────────────────────────────

const softwareTypes = [
  {
    id: "Software",

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

const connOptions = [
  { icon: <WifiOff size={20} color="#7c3aed" />, title: "Totalmente offline", desc: "Funciona sem internet, dados ficam na máquina ou no servidor local." },
  { icon: <Wifi size={20} color="#7c3aed" />, title: "Com conexão", desc: "Acessa dados na nuvem — qualquer computador com internet entra no sistema." },
  { icon: <Users size={20} color="#7c3aed" />, title: "Multiusuário", desc: "Cada pessoa tem login próprio e permissões diferentes no sistema." },
  { icon: <Printer size={20} color="#7c3aed" />, title: "Impressão e relatórios", desc: "Emite relatórios, nota fiscal e integra com impressoras locais." },
  { icon: <Package size={20} color="#7c3aed" />, title: "Estoque e controle", desc: "Controle de produtos, entradas, saídas e alertas de estoque mínimo." },
  { icon: <Laptop size={20} color="#7c3aed" />, title: "Windows, Mac ou Linux", desc: "Desenvolvemos para qualquer sistema operacional." },
];

export default function Software() {
  return (
    <>
      <PageHero>
        <PageBadge><Monitor size={12} /> Softwares para PC</PageBadge>
        <PageTitle>Programas para o seu computador — simples ou completos</PageTitle>
        <PageSubtitle>
          De uma ferramenta para uso individual até um sistema de gestão
          para toda a empresa — para Windows, Mac ou Linux.
        </PageSubtitle>
      </PageHero>

      <Section  id="Softwares">
        <Container>
          <SectionLabel>Sistemas operacionais</SectionLabel>
          <SectionTitle>Para qual computador você precisa?</SectionTitle>
          <SectionSubtitle>
            Desenvolvemos para as três principais plataformas de computador.
            Pode ser para um, para todos ou para qualquer um.
          </SectionSubtitle>

          <OSRow>
            <OSBadge $bg="#dbeafe" $color="#1d4ed8">
              <Monitor size={16} /> Windows
            </OSBadge>
            <OSBadge $bg="#f1f0ff" $color="#6d28d9">
              <Apple size={16} /> Mac (macOS)
            </OSBadge>
            <OSBadge $bg="#dcfce7" $color="#166534">
              <Server size={16} /> Linux
            </OSBadge>
          </OSRow>

          <TypeGrid>
            {softwareTypes.map((t) => (
              <TypeCard id={t.id}  smooth to={`/Software#${t.id}`} key={t.title}>
                <CardHeader $color={t.color}>
                  {t.icon}
                  <div>
                    <CardHeaderTitle>{t.title}</CardHeaderTitle>
                    <CardHeaderSub>{t.sub}</CardHeaderSub>
                  </div>
                </CardHeader>
                <CardBody>
                  <CardDesc>{t.desc}</CardDesc>
                  <CheckList>
                    {t.checks.map((c) => (
                      <CheckItem key={c}>
                        <CheckCircle2 size={15} color="#7c3aed" style={{ flexShrink: 0, marginTop: 2 }} />
                        {c}
                      </CheckItem>
                    ))}
                  </CheckList>
                  <Tag $variant={t.tag.variant}>{t.tag.label}</Tag>
                </CardBody>
              </TypeCard>
            ))}
          </TypeGrid>
        </Container>
      </Section>

      <Section $bg="#ffffff">
        <Container>
          <SectionLabel>Opções e recursos</SectionLabel>
          <SectionTitle>O que pode ter no seu software</SectionTitle>
          <SectionSubtitle>
            Cada detalhe é definido conforme a necessidade do seu negócio.
          </SectionSubtitle>

          <OptionRow>
            {connOptions.map((o) => (
              <OptionCard key={o.title}>
                <OptionIcon>{o.icon}</OptionIcon>
                <div>
                  <OptionTitle>{o.title}</OptionTitle>
                  <OptionDesc>{o.desc}</OptionDesc>
                </div>
              </OptionCard>
            ))}
          </OptionRow>

          <CTABanner>
            <CTATitle>Precisa de um software personalizado?</CTATitle>
            <CTASubtitle>
              A gente desenvolve do zero, do jeito que o seu negócio precisa.
            </CTASubtitle>
            <CTAButton href="https://wa.me/5511999999999" target="_blank">
              Falar pelo WhatsApp <ArrowRight size={16} />
            </CTAButton>
          </CTABanner>
        </Container>
      </Section>
    </>
  );
}
