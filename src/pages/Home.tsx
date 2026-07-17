import styled, { keyframes } from "styled-components";
import {
  Globe,
  Smartphone,
  Monitor,
  Server,
  ArrowRight,
  Shield,
  Zap,
  Users,
  Bot,
  Bell,
  Database,
  CloudLightning,
  CheckCircle2,
} from "lucide-react";
import { HashLink } from "react-router-hash-link";
// ─── Animations ────────────────────────────────────────────────────────────────

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ─── Hero ───────────────────────────────────────────────────────────────────────

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(160deg, #0c1445 0%, #0f2050 50%, #0a1930 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 1.5rem 5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%);
    top: -150px;
    right: -100px;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(8, 145, 178, 0.12) 0%, transparent 70%);
    bottom: 50px;
    left: -50px;
    pointer-events: none;
  }
`;

const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(37, 99, 235, 0.2);
  border: 1px solid rgba(37, 99, 235, 0.4);
  border-radius: 100px;
  padding: 0.375rem 1rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #93c5fd;
  margin-bottom: 2rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  animation: ${fadeUp} 0.6s ease both;
`;

const HeroTitle = styled.h1`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2.2rem, 6vw, 4rem);
  font-weight: 800;
  color: white;
  line-height: 1.15;
  max-width: 760px;
  letter-spacing: -0.025em;
  animation: ${fadeUp} 0.6s 0.1s ease both;

  span {
    background: linear-gradient(90deg, #60a5fa, #0891b2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 580px;
  line-height: 1.75;
  margin-top: 1.5rem;
  animation: ${fadeUp} 0.6s 0.2s ease both;
`;

const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
  animation: ${fadeUp} 0.6s 0.3s ease both;
`;
export const Btn = styled(HashLink)`
  display: inline-flex;

  transition: opacity 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;


export const PrimaryBtn = styled(HashLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, #2563eb, #0891b2);
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 10px;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const SecondaryBtn = styled(HashLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }
`;

// ─── Section Shared ─────────────────────────────────────────────────────────────

const Section = styled.section<{ $bg?: string }>`
  padding: 5rem 1.5rem;
  background: ${(p) => p.$bg || "#f7f9ff"};
`;

const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
`;

const SectionLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  max-width: 600px;
`;

const SectionSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-top: 1rem;
`;

// ─── Service Cards Grid ─────────────────────────────────────────────────────────

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const ServiceCard = styled(HashLink)`
  background: white;
  border-radius: 16px;
  border: 1px solid rgba(29, 78, 216, 0.1);
  padding: 2rem;
  text-decoration: none;
  transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    box-shadow: 0 12px 40px rgba(29, 78, 216, 0.12);
    transform: translateY(-4px);
    border-color: rgba(37, 99, 235, 0.3);
  }
`;

const CardIcon = styled.div<{ $color: string }>`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: ${(p) => p.$color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.175rem;
  font-weight: 700;
  color: #0c1445;
`;

const CardDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #4b5684;
  line-height: 1.65;
  flex: 1;
`;

const CardLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #2563eb;
  margin-top: 0.5rem;
  transition: gap 0.2s;

  ${ServiceCard}:hover & {
    gap: 0.6rem;
  }
`;

// ─── Feature Pills ──────────────────────────────────────────────────────────────

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  margin-top: 3rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: white;
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(29, 78, 216, 0.08);
`;

const FeatureIconWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const FeatureText = styled.div``;

const FeatureTitle = styled.h4`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.25rem;
`;

const FeatureDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: #4b5684;
  line-height: 1.6;
`;

// ─── AI Banner ──────────────────────────────────────────────────────────────────

const AIBanner = styled.div`
  background: linear-gradient(135deg, #0c1445, #1e3a8a);
  border-radius: 20px;
  padding: 3rem 2.5rem;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const AIText = styled.div``;

const AIBadge = styled.span`
  display: inline-block;
  background: rgba(8, 145, 178, 0.2);
  border: 1px solid rgba(8, 145, 178, 0.4);
  color: #7dd3fc;
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  margin-bottom: 1rem;
`;

const AITitle = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: white;
  line-height: 1.25;
  margin-bottom: 0.875rem;
`;

const AIDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.75;
  max-width: 520px;
`;

const AIButton = styled(HashLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: linear-gradient(135deg, #0891b2, #2563eb);
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 10px;
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

// ─── How it works ───────────────────────────────────────────────────────────────

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  position: relative;
`;

const Step = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StepNumber = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb, #0891b2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  color: white;
`;

const StepTitle = styled.h4`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #0c1445;
`;

const StepDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #4b5684;
  line-height: 1.65;
`;

// ─── CTA Contact ────────────────────────────────────────────────────────────────

const CTASection = styled.section`
  background: linear-gradient(160deg, #0c1445 0%, #1e3a8a 100%);
  padding: 5rem 1.5rem;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
`;

const CTASubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 480px;
  margin: 0 auto 2.5rem;
  line-height: 1.75;
`;

const CTAActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

// ─── Component ──────────────────────────────────────────────────────────────────

const services = [
  {
    to: "/web",
    icon: <Globe size={24} color="white" />,
    color: "linear-gradient(135deg, #2563eb, #1d4ed8)",
    title: "Sites e Sistemas Web",
    desc: "Do site simples para aparecer no Google até sistemas completos com login, banco de dados e integração em tempo real.",
  },
  {
    to: "/mobile",
    icon: <Smartphone size={24} color="white" />,
    color: "linear-gradient(135deg, #0891b2, #0e7490)",
    title: "Aplicativos Mobile",
    desc: "Apps para iPhone e Android — desde o app simples que funciona sem internet até o sistema completo com login e notificações.",
  },
  {
    to: "/software",
    icon: <Monitor size={24} color="white" />,
    color: "linear-gradient(135deg, #7c3aed, #6d28d9)",
    title: "Softwares para PC",
    desc: "Programas para Windows, Mac ou Linux — para rodar em um computador ou em toda uma rede de empresa.",
  },
  {
    to: "/sistemas-locais",
    icon: <Server size={24} color="white" />,
    color: "linear-gradient(135deg, #059669, #047857)",
    title: "Sistemas Locais",
    desc: "Sistemas que rodam dentro da sua empresa, com banco de dados, acesso por usuário e senha, sem depender da internet.",
  },
];

const features = [
  {
    icon: <Shield size={20} color="#2563eb" />,
    title: "Segurança Real",
    desc: "Autenticação com AWS Cognito, criptografia de dados e padrões profissionais de segurança.",
  },
  {
    icon: <Zap size={20} color="#2563eb" />,
    title: "Tempo Real",
    desc: "Atualizações instantâneas entre usuários — sem precisar atualizar a página.",
  },
  {
    icon: <Bell size={20} color="#2563eb" />,
    title: "Notificações Push",
    desc: "Avise seus clientes via Firebase — no celular, mesmo com o app fechado.",
  },
  {
    icon: <CloudLightning size={20} color="#2563eb" />,
    title: "Nuvem AWS",
    desc: "Infraestrutura confiável, escalável e com backup automático na Amazon.",
  },
  {
    icon: <Database size={20} color="#2563eb" />,
    title: "Banco de Dados",
    desc: "Seus dados organizados e seguros — acessíveis de qualquer dispositivo.",
  },
  {
    icon: <Users size={20} color="#2563eb" />,
    title: "Multiusuário",
    desc: "Perfis de cliente, vendedor, gerente — cada um vê apenas o que precisa.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <HeroSection>
        <HeroBadge>
          <Zap size={12} /> Soluções Digitais Completas
        </HeroBadge>
        <HeroTitle>
          Seu negócio no digital —<br />
          <span>do simples ao completo</span>
        </HeroTitle>
        <HeroSubtitle>
          Site, aplicativo ou sistema — explicamos tudo de forma clara, sem termos técnicos,
          e entregamos a solução certa para o seu negócio.
        </HeroSubtitle>
        <HeroActions>
<PrimaryBtn smooth to="/#o-que-fazemos">
  Ver o que fazemos <ArrowRight size={16} />
</PrimaryBtn>


          <SecondaryBtn to="/#contato">Falar com a gente</SecondaryBtn>
        </HeroActions>
      </HeroSection>

      {/* ── Services ── */}
<Section id="o-que-fazemos">
        <Container>
          <SectionLabel>O que fazemos</SectionLabel>
          <SectionTitle>Temos a solução certa para cada necessidade</SectionTitle>
          <SectionSubtitle>
            Cada negócio é único. Por isso oferecemos desde sites simples até sistemas
            sofisticados — você escolhe o que faz sentido para você agora.
          </SectionSubtitle>
          <CardsGrid>
            {services.map((s) => (
              <ServiceCard key={s.to} to={s.to}>
                <CardIcon $color={s.color}>{s.icon}</CardIcon>
                <CardTitle>{s.title}</CardTitle>
                <CardDesc>{s.desc}</CardDesc>
                <CardLink>
                  Saiba mais <ArrowRight size={14} />
                </CardLink>
              </ServiceCard>
            ))}
          </CardsGrid>
        </Container>
      </Section>

      {/* ── Resources ── */}
      <Section $bg="#ffffff" id="recursos">
        <Container>
          <SectionLabel>Recursos disponíveis</SectionLabel>
          <SectionTitle>Tecnologias que podem fazer parte do seu sistema</SectionTitle>
          <SectionSubtitle>
            Não precisa entender de tecnologia. A gente explica o que cada recurso faz
            e você decide o que quer no seu projeto.
          </SectionSubtitle>
          <FeaturesGrid>
            {features.map((f) => (
              <FeatureItem key={f.title}>
                <FeatureIconWrap>{f.icon}</FeatureIconWrap>
                <FeatureText>
                  <FeatureTitle>{f.title}</FeatureTitle>
                  <FeatureDesc>{f.desc}</FeatureDesc>
                </FeatureText>
              </FeatureItem>
            ))}
          </FeaturesGrid>

          {/* AI Banner */}
          <AIBanner id="ia">
            <AIText>
              <AIBadge>Novidade</AIBadge>
              <AITitle>Inteligência Artificial no seu sistema</AITitle>
              <AIDesc>
                Criamos chatbots personalizados, automações com IA e integrações com modelos de linguagem — tudo otimizado por um desenvolvedor para gastar menos e funcionar melhor. Um dev que faz os prompts certos custa menos do que aumentar o plano de IA todo mês.
              </AIDesc>
            </AIText>
            <AIButton smooth to="/web#IA">
              <Bot size={16} /> Ver opções de IA
            </AIButton>
          </AIBanner>
        </Container>
      </Section>

      {/* ── How it works ── */}
      <Section id="como-funciona">
        <Container>
          <SectionLabel>Como funciona</SectionLabel>
          <SectionTitle>Simples do início ao fim</SectionTitle>
          <StepsGrid>
            {[
              { n: "1", title: "Conversa inicial", desc: "Você conta o que precisa, a gente escuta e sugere a solução ideal — sem jargão técnico." },
              { n: "2", title: "Proposta clara", desc: "Enviamos uma proposta simples com o que vai ser feito, prazo e valor. Sem surpresas." },
              { n: "3", title: "Desenvolvimento", desc: "A equipe constrói o sistema com atualizações regulares para você acompanhar." },
              { n: "4", title: "Entrega e suporte", desc: "Entregamos, explicamos como usar e ficamos à disposição para o que precisar." },
            ].map((step) => (
              <Step key={step.n}>
                <StepNumber>{step.n}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDesc>{step.desc}</StepDesc>
              </Step>
            ))}
          </StepsGrid>
        </Container>
      </Section>

      {/* ── CTA ── */}
<CTASection id="contato">
        <Container>
          <CTATitle>Pronto para começar?</CTATitle>
          <CTASubtitle>
            Não precisa saber nada de tecnologia. Basta nos contar o que você precisa
            e a gente cuida do resto.
          </CTASubtitle>
          <CTAActions>
            <PrimaryBtn
              to="https://wa.me/5511999999999"
              style={{ background: "linear-gradient(135deg, #16a34a, #15803d)" }}
            >
              Falar pelo WhatsApp <ArrowRight size={16} />
            </PrimaryBtn>
            <SecondaryBtn to="mailto:contato@oglabs.com.br">
              Enviar e-mail
            </SecondaryBtn>
          </CTAActions>
        </Container>
      </CTASection>
    </>
  );
}
