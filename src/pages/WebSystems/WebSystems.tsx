import { Globe } from "lucide-react";
import { SolutionTypeCards } from "../../components/SolutionTypeCards";
import { Hero, heroThemes } from "../../components/Hero";
import { useSectionHighlight } from "../../hooks/useSectionHighlight";
import { ContentSection } from "../../components/ContentSection";
import { InfoCardGrid } from "../../components/InfoCardGrid";
import { CtaBanner } from "../../components/CtaBanner";
import { WhatsAppAction } from "../../components/ContactActions";
import { types } from "./Web";
import { extras } from "./RecursosExtras";

export default function WebSystems() {
  const { highlightedId, highlightSection } = useSectionHighlight();

  return (
    <>
      <Hero
        theme={heroThemes.web}
        badge={<><Globe size="var(--size-12)" /> Sites e Sistemas Web</>}
        title="Tudo o que existe no mundo web — explicado de forma simples"
        subtitle="De um site básico para aparecer no Google até um sistema completo com login, banco de dados e inteligência artificial."
      />

      <ContentSection
        id="web"
        accentColor="var(--color-blue-600)"
        label="Tipos de sistemas web"
        title="Qual é o certo para o seu momento?"
        maxWidth="var(--max-width)"
        padding="var(--space-20) var(--space-16)"

        subtitle="Você não precisa começar com tudo. Cada negócio tem uma necessidade diferente — veja as opções e escolha o que faz sentido agora."
      >
        <SolutionTypeCards
          items={types}
          checkColor="var(--color-blue-600)"
          highlightedId={highlightedId}
          onCardClick={highlightSection}
        />
      </ContentSection>

      <ContentSection
        id="recursos"
        accentColor="var(--color-blue-600)"
        background="var(--color-surface)"
        maxWidth="var(--max-width)"
        label="Recursos extras"
        title="Funcionalidades que podem ser adicionadas"
        subtitle="Qualquer sistema pode ser enriquecido com esses recursos — tudo conforme a sua necessidade."
        padding="var(--space-20) var(--space-16)"
      >
        <InfoCardGrid
          items={extras}
          accentColor="var(--color-blue-600)"
          iconBackground="var(--color-blue-50)"
        />
        <CtaBanner
          background="linear-gradient(var(--value-135deg), var(--color-navy-950), var(--color-blue-900))"
          title="Não sabe qual escolher?"
          subtitle="Explique o seu negócio e a gente indica a melhor opção — sem compromisso."
          action={
            <WhatsAppAction />
          }
        />
      </ContentSection>
    </>
  );
}
