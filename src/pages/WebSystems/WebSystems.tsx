import { Globe, ArrowRight } from "lucide-react";
import { SolutionTypeCards } from "../../components/SolutionTypeCards";
import { Hero, heroThemes } from "../../components/Hero";
import { useSectionHighlight } from "../../hooks/useSectionHighlight";
import { ContentSection } from "../../components/ContentSection";
import { InfoCardGrid } from "../../components/InfoCardGrid";
import { CtaBanner } from "../../components/CtaBanner";
import { ActionAnchor } from "../../components/ActionButton";
import { types } from "./Web";
import { extras } from "./RecursosExtras";

export default function WebSystems() {
  const { highlightedId, highlightSection } = useSectionHighlight();

  return (
    <>
      <Hero
        theme={heroThemes.web}
        badge={<><Globe size={12} /> Sites e Sistemas Web</>}
        title="Tudo o que existe no mundo web — explicado de forma simples"
        subtitle="De um site básico para aparecer no Google até um sistema completo com login, banco de dados e inteligência artificial."
      />

      <ContentSection
        id="web"
        accentColor="#2563eb"
        label="Tipos de sistemas web"
        title="Qual é o certo para o seu momento?"
        subtitle="Você não precisa começar com tudo. Cada negócio tem uma necessidade diferente — veja as opções e escolha o que faz sentido agora."
      >
        <SolutionTypeCards
          items={types}
          checkColor="#2563eb"
          highlightedId={highlightedId}
          onCardClick={highlightSection}
        />
      </ContentSection>

      <ContentSection
        id="recursos"
        accentColor="#2563eb"
        background="#ffffff"
        label="Recursos extras"
        title="Funcionalidades que podem ser adicionadas"
        subtitle="Qualquer sistema pode ser enriquecido com esses recursos — tudo conforme a sua necessidade."
      >
        <InfoCardGrid
          items={extras}
          accentColor="#2563eb"
          iconBackground="#eff6ff"
        />
        <CtaBanner
          background="linear-gradient(135deg, #0c1445, #1e3a8a)"
          title="Não sabe qual escolher?"
          subtitle="Explique o seu negócio e a gente indica a melhor opção — sem compromisso."
          action={
            <ActionAnchor href="https://wa.me/5511999999999" target="_blank">
              Falar pelo WhatsApp <ArrowRight size={16} />
            </ActionAnchor>
          }
        />
      </ContentSection>
    </>
  );
}
