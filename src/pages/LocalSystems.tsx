import styled from "styled-components";
import {
  Server,
  Lock,
  Database,
  Network,
  Users,
  Shield,
  HardDrive,
  FileText,
  Wifi,
  WifiOff,
  CheckCircle2,
  ArrowRight,
  Key,
  Eye,
} from "lucide-react";
import { HashLink } from "react-router-hash-link";

// ─── Styles ──────────────────────────────────────────────────────────────────────

const PageHero = styled.section`
  background: linear-gradient(160deg, #042c1e 0%, #059669 100%);
  padding: 8rem 1.5rem 5rem;
  text-align: center;
`;

const PageBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(5, 150, 105, 0.25);
  border: 1px solid rgba(5, 150, 105, 0.5);
  border-radius: 100px;
  padding: 0.375rem 1rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #6ee7b7;
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
  color: #059669;
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
  background: ${(p) => (p.$highlight ? "linear-gradient(135deg, #042c1e, #059669)" : "white")};
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid ${(p) => (p.$highlight ? "transparent" : "rgba(5, 150, 105, 0.12)")};
`;

const ConceptTitle = styled.h3<{ $light?: boolean }>`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${(p) => (p.$light ? "white" : "#0c1445")};
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ConceptDesc = styled.p<{ $light?: boolean }>`
  font-family: 'Inter', sans-serif;
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
  transition: box-shadow 0.25s, transform 0.25s;
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
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.25rem;
`;

const AuthDesc = styled.p`
  font-family: 'Inter', sans-serif;
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

const CTAButton = styled(HashLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, #059669, #047857);
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

const authFeatures = [
  { icon: <Key size={18} color="#059669" />, title: "Login por usuário e senha", desc: "Cada pessoa tem acesso único e pessoal ao sistema." },
  { icon: <Eye size={18} color="#059669" />, title: "Controle do que cada um vê", desc: "Vendedor, gerente, caixa — cada cargo tem sua visão." },
  { icon: <Lock size={18} color="#059669" />, title: "Bloqueio de acesso", desc: "O administrador pode bloquear um usuário com um clique." },
  { icon: <FileText size={18} color="#059669" />, title: "Histórico de ações", desc: "Registro de quem fez o quê e quando no sistema." },
  { icon: <WifiOff size={18} color="#059669" />, title: "Funciona sem internet", desc: "A autenticação pode ser feita localmente, sem nuvem." },
  { icon: <Wifi size={18} color="#059669" />, title: "Ou com nuvem segura", desc: "AWS Cognito para autenticação profissional na nuvem." },
];

export default function LocalSystems() {
  return (
    <>
      <PageHero>
        <PageBadge><Server size={12} /> Sistemas Locais</PageBadge>
        <PageTitle>Sistemas dentro da sua empresa — seguros e sem depender da internet</PageTitle>
        <PageSubtitle>
          Tudo roda na sua própria rede, com banco de dados, controle de usuários
          e segurança profissional — sem expor nada para a internet.
        </PageSubtitle>
      </PageHero>


      <Section id="Sistemas-Local">
        <Container>
          <SectionLabel>O que é um sistema local?</SectionLabel>
          <SectionTitle>Simples de entender</SectionTitle>

          <ConceptGrid>
            <ConceptCard>
              <ConceptTitle><WifiOff size={18} color="#059669" /> Sistema na rede interna</ConceptTitle>
              <ConceptDesc>
                Imagine os computadores da sua empresa ligados entre si, como numa teia. Um sistema local fica no centro dessa teia — todos acessam, mas ninguém de fora entra. É como ter um sistema só seu, dentro da sua empresa.
              </ConceptDesc>
            </ConceptCard>
            <ConceptCard $highlight>
              <ConceptTitle $light><Shield size={18} color="#6ee7b7" /> Por que usar?</ConceptTitle>
              <ConceptDesc $light>
                Empresas que lidam com dados sensíveis — clínicas, escritórios, indústrias — preferem que os dados fiquem dentro de casa. Sem internet, sem risco de vazamento externo. Controle total sobre quem acessa o quê.
              </ConceptDesc>
            </ConceptCard>
          </ConceptGrid>

          <TypeGrid>
            {localTypes.map((t) => (
              <TypeCard key={t.title}
               id={t.id}  smooth to={`/sistemas-locais#${t.id}`}
              >
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
                        <CheckCircle2 size={15} color="#059669" style={{ flexShrink: 0, marginTop: 2 }} />
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
          <SectionLabel>Controle de acesso</SectionLabel>
          <SectionTitle>Quem pode entrar e o que cada um vê</SectionTitle>
          <SectionSubtitle>
            Em qualquer sistema local, é possível definir permissões detalhadas.
            Cada funcionário tem o seu espaço — sem invadir o do outro.
          </SectionSubtitle>

          <AuthGrid>
            {authFeatures.map((f) => (
              <AuthCard key={f.title}>
                <AuthIcon>{f.icon}</AuthIcon>
                <div>
                  <AuthTitle>{f.title}</AuthTitle>
                  <AuthDesc>{f.desc}</AuthDesc>
                </div>
              </AuthCard>
            ))}
          </AuthGrid>

          <CTABanner>
            <CTATitle>Quer um sistema dentro da sua empresa?</CTATitle>
            <CTASubtitle>
              A gente instala, configura e treina a equipe. Você fica no controle.
            </CTASubtitle>
            <CTAButton to="https://wa.me/5511999999999">
              Falar pelo WhatsApp <ArrowRight size={16} />
            </CTAButton>
          </CTABanner>
        </Container>
      </Section>
    </>
  );
}
