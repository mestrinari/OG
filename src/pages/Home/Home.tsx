import { ArrowRight, Zap, Bot } from "lucide-react";
import { features, services } from "./Components";
import { Hero, heroThemes } from "../../components/Hero";
import { useSectionHighlight } from "../../hooks/useSectionHighlight";
import { ContentSection } from "../../components/ContentSection";
import { ServiceCards } from "../../components/ServiceCards";
import { InfoCardGrid } from "../../components/InfoCardGrid";
import { BannerBadge, CtaBanner } from "../../components/CtaBanner";
import { ActionButton, ActionHashLink } from "../../components/ActionButton";
import { EmailAction, WhatsAppAction } from "../../components/ContactActions";
import { ProcessSteps } from "../../components/ProcessSteps";
import { ContactSection } from "../../components/ContactSection";
export default function Home() {
  const { highlightedId, highlightSection } = useSectionHighlight(2000);
  return (
    <>
      <Hero
        animated
        theme={heroThemes.home}
        badge={<><Zap size="var(--size-12)" /> Soluções Digitais Completas</>}
        title={<>Seu negócio no digital -<br /><span>do simples ao completo</span></>}
        subtitle="Site, aplicativo ou sistema — explicamos tudo de forma clara, sem termos técnicos, e entregamos a solução certa para o seu negócio."
        actions={
          <>
            <ActionButton onClick={() => highlightSection("como-funciona")}>
              Ver o que fazemos <ArrowRight size="var(--size-16)" />
            </ActionButton>
            <ActionButton onClick={() => highlightSection("contato")}>
              Falar com a gente
            </ActionButton>
          </>
        }
      />
  

      <ContentSection
        id="o-que-fazemos"
        accentColor="var(--color-blue-600)"
        label="O que fazemos"
        title="Temos a solução certa para cada necessidade"
        subtitle="Cada negócio é único. Por isso oferecemos desde sites simples até sistemas sofisticados — você escolhe o que faz sentido para você agora."
        maxWidth="var(--max-width)"
        padding="var(--space-20) var(--space-16)"
      >
        <ServiceCards items={services} />
      </ContentSection>

      <ContentSection
        id="recursos"
        accentColor="var(--color-blue-600)"
        background="var(--color-surface)"
        label="Recursos disponíveis"
        title="Tecnologias que podem fazer parte do seu sistema"
        subtitle="Não precisa entender de tecnologia. A gente explica o que cada recurso faz e você decide o que quer no seu projeto."
        maxWidth="var(--max-width)"
        padding="var(--space-20) var(--space-16)"
      >
        <InfoCardGrid
          items={features}
          accentColor="var(--color-blue-600)"
          iconBackground="var(--color-blue-50)"
          minCardWidth="var(--size-220)"
        />
        <CtaBanner
          id="ia"
          layout="split"
          background="linear-gradient(var(--value-135deg), var(--color-navy-950), var(--color-blue-900))"
          badge={<BannerBadge>Novidade</BannerBadge>}
          title="Inteligência Artificial no seu sistema"
          subtitle="Criamos chatbots personalizados, automações com IA e integrações com modelos de linguagem — tudo otimizado por um desenvolvedor para gastar menos e funcionar melhor. Um dev que faz os prompts certos custa menos do que aumentar o plano de IA todo mês."
          action={
            <ActionHashLink smooth to="/web#IA">
              <Bot size="var(--size-16)" /> Ver opções de IA
            </ActionHashLink>
          }
        />
      </ContentSection>

      <ContentSection
        id="como-funciona"
        accentColor="var(--color-blue-600)"
        label="Como funciona"
        title="Simples do início ao fim"
        highlighted={highlightedId === "como-funciona"}
        maxWidth="var(--max-width)"
        padding="var(--space-20) var(--space-16)"
      >
        <ProcessSteps items={[
          { number: "1", title: "Conversa inicial", description: "Você conta o que precisa, a gente escuta e sugere a solução ideal — sem jargão técnico." },
          { number: "2", title: "Proposta clara", description: "Enviamos uma proposta simples com o que vai ser feito, prazo e valor. Sem surpresas." },
          { number: "3", title: "Desenvolvimento", description: "A equipe constrói o sistema com atualizações regulares para você acompanhar." },
          { number: "4", title: "Entrega e suporte", description: "Entregamos, explicamos como usar e ficamos à disposição para o que precisar." },
        ]} />
      </ContentSection>

      <ContactSection
        highlighted={highlightedId === "contato"}
        title="Pronto para começar?"
        subtitle="Não precisa saber nada de tecnologia. Basta nos contar o que você precisa e a gente cuida do resto."
        actions={
          <>
            <WhatsAppAction background="var(--gradient-whatsapp)" />
            <EmailAction />
          </>
        }
      />
    </>
  );
}
