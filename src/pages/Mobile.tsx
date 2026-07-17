import styled from "styled-components";
import {
  Smartphone,
  WifiOff,
  Wifi,
  Users,
  Bell,
  MapPin,
  Camera,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  Apple,
} from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { Btn, PrimaryBtn } from "./Home";

// ─── Reused base styles ──────────────────────────────────────────────────────────

const PageHero = styled.section`
  background: linear-gradient(160deg, #0a1930 0%, #0e7490 100%);
  padding: 8rem 1.5rem 5rem;
  text-align: center;
`;

const PageBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(8, 145, 178, 0.25);
  border: 1px solid rgba(8, 145, 178, 0.45);
  border-radius: 100px;
  padding: 0.375rem 1rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #7dd3fc;
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
  color: #0891b2;
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
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(p) => p.$color};
`;

// ─── Type Cards ──────────────────────────────────────────────────────────────────

const TypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const TypeCard = styled(HashLink)`
  background: white;
  border-radius: 16px;
  border: 1px solid rgba(8, 145, 178, 0.1);
  overflow: hidden;
  transition: box-shadow 0.25s, transform 0.25s;
  scroll-margin-top: 250px;

  &:hover {
    box-shadow: 0 10px 36px rgba(8, 145, 178, 0.12);
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

const Tag = styled.span<{ $variant?: "blue" | "green" | "orange" | "purple" | "cyan" }>`
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
    : p.$variant === "cyan" ? "#cffafe"
    : "#dbeafe"};
  color: ${(p) =>
    p.$variant === "green" ? "#166534"
    : p.$variant === "orange" ? "#9a3412"
    : p.$variant === "purple" ? "#5b21b6"
    : p.$variant === "cyan" ? "#155e75"
    : "#1e40af"};
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
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.5rem;
`;

const ProfileDesc = styled.p`
  font-family: 'Inter', sans-serif;
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
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #0c1445;
  margin-bottom: 0.25rem;
`;

const UCDesc = styled.p`
  font-family: 'Inter', sans-serif;
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
  background: linear-gradient(135deg, #0891b2, #0284c7);
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

const appTypes = [
  {
    id: "App-Simples",

    icon: <WifiOff size={22} color="white" />,
    color: "linear-gradient(135deg, #374151, #1f2937)",
    title: "App Simples (offline)",
    sub: "Funciona sem internet",
    desc: "O app funciona completamente sem conexão. Ideal para ferramentas de consulta, calculadoras, catálogos ou qualquer uso que não precise de dados externos.",
    checks: [
      "Funciona sem internet",
      "Dados salvos no celular",
      "Leve e rápido",
      "Sem mensalidade de servidor",
    ],
    tag: { label: "Mais simples", variant: "green" as const },
  },
  {
    id: "App-Conectado",

    icon: <Wifi size={22} color="white" />,
    color: "linear-gradient(135deg, #0891b2, #0e7490)",
    title: "App Conectado ao Servidor",
    sub: "Dados sempre atualizados",
    desc: "O app se comunica com um servidor na internet. Seus dados ficam na nuvem e são acessíveis de qualquer celular — perfeito para equipes ou múltiplos usuários.",
    checks: [
      "Dados na nuvem",
      "Sincronização automática",
      "Backup seguro",
      "Múltiplos dispositivos",
    ],
    tag: { label: "Intermediário", variant: "cyan" as const },
  },
  {
    id: "App-Login",

    icon: <Users size={22} color="white" />,
    color: "linear-gradient(135deg, #7c3aed, #6d28d9)",
    title: "App com Login e Perfis",
    sub: "Cada usuário tem o seu espaço",
    desc: "Sistema completo com cadastro, login, perfil de usuário e controle de acesso. Clientes, vendedores e gerentes veem informações diferentes no mesmo app.",
    checks: [
      "Login por usuário e senha",
      "Perfis de cliente, gerente, vendas",
      "Histórico por usuário",
      "Segurança profissional",
    ],
    tag: { label: "Intermediário", variant: "purple" as const },
  },
  {
    id: "App-Push",

    icon: <Bell size={22} color="white" />,
    color: "linear-gradient(135deg, #d97706, #b45309)",
    title: "App com Notificações Push",
    sub: "Mensagens mesmo com app fechado",
    desc: "O app avisa o usuário com notificações no celular — mesmo que esteja fechado. Ideal para pedidos, alertas, promoções ou mensagens importantes.",
    checks: [
      "Notificações automáticas",
      "Funciona com app fechado",
      "Firebase integrado",
      "Mensagens segmentadas por perfil",
    ],
    tag: { label: "Popular", variant: "orange" as const },
  },
  {
       id: "App-Completo",


    icon: <Smartphone size={22} color="white" />,
    color: "linear-gradient(135deg, #059669, #047857)",
    title: "App Completo com Tempo Real",
    sub: "Tudo atualizado na hora",
    desc: "O app mais robusto: login, banco de dados, notificações push e atualizações em tempo real. O que um usuário faz, o outro vê instantaneamente — sem recarregar.",
    checks: [
      "Tempo real (sem recarregar)",
      "Login e banco de dados",
      "Notificações push",
      "Histórico completo",
    ],
    tag: { label: "Avançado", variant: "green" as const },
  },
];

const useCases = [
  { icon: <ShoppingBag size={18} color="#0891b2" />, title: "Delivery / Pedidos", desc: "Cliente faz pedido, vendedor recebe em tempo real." },
  { icon: <MapPin size={18} color="#0891b2" />, title: "Localização", desc: "Rastreamento de entregadores ou técnicos em campo." },
  { icon: <Camera size={18} color="#0891b2" />, title: "Relatório por Foto", desc: "Técnico fotografa e registra no app direto da obra." },
  { icon: <Bell size={18} color="#0891b2" />, title: "Promoções", desc: "Avise clientes de ofertas com um clique." },
];

export default function Mobile() {
  return (
    <>
      <PageHero>
        <PageBadge><Smartphone size={12} /> Aplicativos Mobile</PageBadge>
        <PageTitle>Apps para iPhone e Android — do simples ao completo</PageTitle>
        <PageSubtitle>
          Seja para rodar sem internet ou para conectar equipes em tempo real,
          temos o app certo para o seu negócio.
        </PageSubtitle> 
      </PageHero>

      <Section  id="mobile">
        <Container>
          <SectionLabel>Plataformas disponíveis</SectionLabel>
          <SectionTitle>iOS, Android ou os dois?</SectionTitle>
          <SectionSubtitle>
            Desenvolvemos para as duas plataformas mais usadas no Brasil.
            Você pode lançar nos dois ao mesmo tempo ou começar por um.
          </SectionSubtitle>

          <PlatformRow >
            <PlatformBadge $color="#1d4ed8" $bg="#dbeafe">
              <Apple size={16} /> iOS (iPhone / iPad)
            </PlatformBadge>
            <PlatformBadge $color="#059669" $bg="#dcfce7">
              <Smartphone size={16} /> Android
            </PlatformBadge>
            <PlatformBadge $color="#7c3aed" $bg="#ede9fe">
              <Smartphone size={16} /> iOS + Android juntos
            </PlatformBadge>
          </PlatformRow>

          <TypeGrid>
            {appTypes.map((t) => (

<TypeCard id={t.id}  smooth to={`/mobile#${t.id}`}  key={t.title}>
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
                        <CheckCircle2 size={15} color="#0891b2" style={{ flexShrink: 0, marginTop: 2 }} />
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
          <SectionLabel>Perfis de usuário</SectionLabel>
          <SectionTitle>Cada pessoa vê o que é seu</SectionTitle>
          <SectionSubtitle>
            Em sistemas com login, é possível definir quem tem acesso a quê.
          </SectionSubtitle>

          <ProfileGrid>
            {[
              { title: "Cliente", desc: "Faz pedidos, acompanha histórico e recebe notificações." },
              { title: "Vendedor", desc: "Vê e gerencia os pedidos da sua carteira." },
              { title: "Gerente", desc: "Visualiza relatórios, equipe e todo o sistema." },
              { title: "Só um perfil", desc: "Pode ser simples também — um único tipo de usuário." },
            ].map((p) => (
              <ProfileCard key={p.title}>
                <ProfileIcon>
                  <Users size={22} color="#0891b2" />
                </ProfileIcon>
                <ProfileTitle>{p.title}</ProfileTitle>
                <ProfileDesc>{p.desc}</ProfileDesc>
              </ProfileCard>
            ))}
          </ProfileGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionLabel>Exemplos de uso</SectionLabel>
          <SectionTitle>Para que tipo de negócio serve?</SectionTitle>

          <UseCaseGrid>
            {useCases.map((u) => (
              <UseCaseCard key={u.title}>
                <UCIcon>{u.icon}</UCIcon>
                <div>
                  <UCTitle>{u.title}</UCTitle>
                  <UCDesc>{u.desc}</UCDesc>
                </div>
              </UseCaseCard>
            ))}
          </UseCaseGrid>

          <CTABanner>
            <CTATitle>Tem uma ideia de app?</CTATitle>
            <CTASubtitle>
              Conta para a gente o que você precisa e a gente indica o tipo certo.
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
