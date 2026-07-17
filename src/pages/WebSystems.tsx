import styled from "styled-components";
import {
  Globe,
  LayoutTemplate,
  LogIn,
  ShoppingCart,
  Database,
  Bot,
  Zap,
  CheckCircle2,
  ArrowRight,
  CloudLightning,
  Shield,
  Bell,
} from "lucide-react";
import { HashLink } from "react-router-hash-link";

// ─── Page Hero ──────────────────────────────────────────────────────────────────

const PageHero = styled.section`
  background: linear-gradient(160deg, #0c1445 0%, #1e3a8a 100%);
  padding: 8rem 1.5rem 5rem;
  text-align: center;
`;

const PageBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(37, 99, 235, 0.2);
  border: 1px solid rgba(37, 99, 235, 0.4);
  border-radius: 100px;
  padding: 0.375rem 1rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #93c5fd;
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

// ─── Shared ──────────────────────────────────────────────────────────────────────

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
  color: #2563eb;
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

// ─── Type Cards ──────────────────────────────────────────────────────────────────

const TypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const TypeCard = styled(HashLink)`
  background: white;
  border-radius: 16px;
  border: 1px solid rgba(29, 78, 216, 0.1);
  overflow: hidden;
  transition: box-shadow 0.25s, transform 0.25s;
  scroll-margin-top: 250px;

  &:hover {
    box-shadow: 0 10px 36px rgba(29, 78, 216, 0.1);
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

const CardHeaderText = styled.div``;

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

// ─── Extras Row ──────────────────────────────────────────────────────────────────

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
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.25rem;
`;
const ExtraDesc = styled.p`
  font-family: 'Inter', sans-serif;
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
  background: linear-gradient(135deg, #2563eb, #0891b2);
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

const types = [
  {
    id: "One-Page",
    icon: <Globe size={22} color="white" />,
    color: "linear-gradient(135deg, #2563eb, #1d4ed8)",
    title: "Site de Uma Página (One Page)",
    sub: "Ideal para começar",
    desc: "Um único endereço na internet com tudo o que você faz: seus serviços, contato, redes sociais. Perfeito para quem quer aparecer no Google sem complicação.",
    checks: [
      "Aparece no Google (SEO)",
      "Sem banco de dados",
      "Funciona no celular e computador",
      "Formulário de contato simples",
    ],
    tag: { label: "Mais simples", variant: "green" as const },
  },
  {
    id: "Site",

    icon: <LayoutTemplate size={22} color="white" />,
    color: "linear-gradient(135deg, #0891b2, #0e7490)",
    title: "Site com Várias Páginas",
    sub: "Sobre nós, serviços, portfólio...",
    desc: "Quando você tem mais conteúdo para mostrar: um menu com páginas separadas para cada assunto — empresa, produtos, blog, contato.",
    checks: [
      "Páginas organizadas com menu",
      "Blog ou notícias (opcional)",
      "Galeria de fotos ou portfólio",
      "Otimizado para Google",
    ],
    tag: { label: "Popular", variant: "blue" as const },
  },
  {
    id: "Login",

    icon: <LogIn size={22} color="white" />,
    color: "linear-gradient(135deg, #7c3aed, #6d28d9)",
    title: "Sistema com Login",
    sub: "Cada usuário vê o que é seu",
    desc: "Quando você precisa que clientes ou funcionários entrem com usuário e senha para acessar uma área privada com seus dados.",
    checks: [
      "Cadastro e login de usuários",
      "Área privada por perfil",
      "Banco de dados seguro",
      "Recuperação de senha",
    ],
    tag: { label: "Intermediário", variant: "purple" as const },
  },
  {
    id: "Loja",

    icon: <ShoppingCart size={22} color="white" />,
    color: "linear-gradient(135deg, #d97706, #b45309)",
    title: "Loja Virtual",
    sub: "Venda pela internet",
    desc: "Uma loja online completa onde seus clientes podem navegar pelos produtos, colocar no carrinho e pagar — tudo pelo computador ou celular.",
    checks: [
      "Catálogo de produtos",
      "Carrinho e checkout",
      "Pagamento online (Pix, cartão)",
      "Painel de pedidos para você",
    ],
    tag: { label: "Intermediário", variant: "orange" as const },
  },
  {
    id: "Banco",

    icon: <Database size={22} color="white" />,
    color: "linear-gradient(135deg, #059669, #047857)",
    title: "Sistema Completo com Banco",
    sub: "Profissional e escalável",
    desc: "Para negócios que precisam de algo mais robusto: controle de clientes, pedidos, estoque, relatórios — tudo centralizado e acessível de qualquer lugar.",
    checks: [
      "Banco de dados na nuvem (AWS)",
      "Login com perfis diferentes",
      "Atualizações em tempo real",
      "Relatórios e dashboards",
    ],
    tag: { label: "Avançado", variant: "green" as const },
  },
  {
    icon: <Bot size={22} color="white" />,
    id: "IA",
    color: "linear-gradient(135deg, #0891b2, #2563eb)",
    title: "IA e Chatbot Personalizado",
    sub: "Atendimento automático inteligente",
    desc: "Um assistente virtual no seu site que responde perguntas dos clientes, qualifica leads e automatiza atendimentos — treinado para o seu negócio.",
    checks: [
      "Chatbot com IA treinada",
      "Responde dúvidas 24h",
      "Integra com WhatsApp",
      "Otimizado para gastar menos em tokens",
    ],
    tag: { label: "Premium", variant: "blue" as const },
  },
];

const extras = [
  { icon: <CloudLightning size={18} color="#2563eb" />, title: "Tempo Real", desc: "Dados que se atualizam na tela sem precisar recarregar a página." },
  { icon: <Shield size={18} color="#2563eb" />, title: "AWS Cognito", desc: "Login seguro com autenticação profissional da Amazon." },
  { icon: <Bell size={18} color="#2563eb" />, title: "Notificações", desc: "Avise usuários por e-mail ou push quando algo importante acontecer." },
  { icon: <Zap size={18} color="#2563eb" />, title: "Firebase", desc: "Banco de dados em tempo real, notificações push e autenticação rápida." },
];

export default function WebSystems() {
  return (
    <>
      <PageHero>
        <PageBadge><Globe size={12} /> Sites e Sistemas Web</PageBadge>
        <PageTitle>Tudo o que existe no mundo web — explicado de forma simples</PageTitle>
        <PageSubtitle>
          De um site básico para aparecer no Google até um sistema completo com login,
          banco de dados e inteligência artificial.
        </PageSubtitle>
      </PageHero>

      <Section id="web">
        <Container>
          <SectionLabel>Tipos de sistemas web</SectionLabel>
          <SectionTitle>Qual é o certo para o seu momento?</SectionTitle>
          <SectionSubtitle>
            Você não precisa começar com tudo. Cada negócio tem uma necessidade diferente
            — veja as opções e escolha o que faz sentido agora.
          </SectionSubtitle>

                  <TypeGrid>
                  
            {types.map((t) => (
              <TypeCard id={t.id}  smooth to={`/web#${t.id}`}  key={t.title}>
                <CardHeader $color={t.color}>
                  {t.icon}
                  <CardHeaderText>
                    <CardHeaderTitle>{t.title}</CardHeaderTitle>
                    <CardHeaderSub>{t.sub}</CardHeaderSub>
                  </CardHeaderText>
                </CardHeader>
                <CardBody>
                  <CardDesc>{t.desc}</CardDesc>
                  <CheckList>
                    {t.checks.map((c) => (
                      <CheckItem key={c}>
                        <CheckCircle2 size={15} color="#2563eb" style={{ flexShrink: 0, marginTop: 2 }} />
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
          <SectionLabel>Recursos extras</SectionLabel>
          <SectionTitle>Funcionalidades que podem ser adicionadas</SectionTitle>
          <SectionSubtitle>
            Qualquer sistema pode ser enriquecido com esses recursos — tudo conforme a sua necessidade.
          </SectionSubtitle>

          <ExtraRow>
            {extras.map((e) => (
              <ExtraCard key={e.title}>
                <ExtraIcon>{e.icon}</ExtraIcon>
                <ExtraText>
                  <ExtraTitle>{e.title}</ExtraTitle>
                  <ExtraDesc>{e.desc}</ExtraDesc>
                </ExtraText>
              </ExtraCard>
            ))}
          </ExtraRow>

          <CTABanner>
            <CTATitle>Não sabe qual escolher?</CTATitle>
            <CTASubtitle>
              Explique o seu negócio e a gente indica a melhor opção — sem compromisso.
            </CTASubtitle>
            <CTAButton href="https://wa.me/5511999999999">
              Falar pelo WhatsApp <ArrowRight size={16} />
            </CTAButton>
          </CTABanner>
        </Container>
      </Section>
    </>
  );
}
