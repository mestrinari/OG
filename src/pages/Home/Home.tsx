import { ArrowRight, Zap, Bot } from "lucide-react";
import { features, services } from "./Components";
import { Hero, heroThemes } from "../../components/Hero";
import { useSectionHighlight } from "../../hooks/useSectionHighlight";
import { ContentSection } from "../../components/ContentSection";
import { ServiceCards } from "../../components/ServiceCards";
import { InfoCardGrid } from "../../components/InfoCardGrid";
import { BannerBadge, CtaBanner } from "../../components/CtaBanner";
import { ActionAnchor, ActionButton, ActionHashLink } from "../../components/ActionButton";
import { ProcessSteps } from "../../components/ProcessSteps";
import { ContactSection } from "../../components/ContactSection";
export default function Home() {
  const { highlightedId, highlightSection } = useSectionHighlight(2000);
  return (
    <>
      <Hero
        animated
        theme={heroThemes.home}
        badge={<><Zap size={12} /> Soluções Digitais Completas</>}
        title={<>Seu negócio no digital -<br /><span>do simples ao completo</span></>}
        subtitle="Site, aplicativo ou sistema — explicamos tudo de forma clara, sem termos técnicos, e entregamos a solução certa para o seu negócio."
        actions={
          <>
            <ActionButton onClick={() => highlightSection("como-funciona")}>
              Ver o que fazemos <ArrowRight size={16} />
            </ActionButton>
            <ActionButton onClick={() => highlightSection("contato")}>
              Falar com a gente
            </ActionButton>
          </>
        }
      />
  

      <ContentSection
        id="o-que-fazemos"
        accentColor="#2563eb"
        label="O que fazemos"
        title="Temos a solução certa para cada necessidade"
        subtitle="Cada negócio é único. Por isso oferecemos desde sites simples até sistemas sofisticados — você escolhe o que faz sentido para você agora."
        maxWidth={1366}
        padding="5rem 4rem"
      >
        <ServiceCards items={services} />
      </ContentSection>

      <ContentSection
        id="recursos"
        accentColor="#2563eb"
        background="#ffffff"
        label="Recursos disponíveis"
        title="Tecnologias que podem fazer parte do seu sistema"
        subtitle="Não precisa entender de tecnologia. A gente explica o que cada recurso faz e você decide o que quer no seu projeto."
        maxWidth={1366}
        padding="5rem 4rem"
      >
        <InfoCardGrid
          items={features}
          accentColor="#2563eb"
          iconBackground="#eff6ff"
          minCardWidth={220}
        />
        <CtaBanner
          id="ia"
          layout="split"
          background="linear-gradient(135deg, #0c1445, #1e3a8a)"
          badge={<BannerBadge>Novidade</BannerBadge>}
          title="Inteligência Artificial no seu sistema"
          subtitle="Criamos chatbots personalizados, automações com IA e integrações com modelos de linguagem — tudo otimizado por um desenvolvedor para gastar menos e funcionar melhor. Um dev que faz os prompts certos custa menos do que aumentar o plano de IA todo mês."
          action={
            <ActionHashLink smooth to="/web#IA">
              <Bot size={16} /> Ver opções de IA
            </ActionHashLink>
          }
        />
      </ContentSection>

      <ContentSection
        id="como-funciona"
        accentColor="#2563eb"
        label="Como funciona"
        title="Simples do início ao fim"
        highlighted={highlightedId === "como-funciona"}
        maxWidth={1366}
        padding="5rem 4rem"
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
            <ActionAnchor href="https://wa.me/5511999999999" target="_blank" $background="linear-gradient(135deg, #16a34a, #15803d)">
              Falar pelo WhatsApp <ArrowRight size={16} />
            </ActionAnchor>
            <ActionAnchor href="mailto:contato@oglabs.com.br" $subtle>
              Enviar e-mail
            </ActionAnchor>
          </>
        }
      />
    </>
  );
}
