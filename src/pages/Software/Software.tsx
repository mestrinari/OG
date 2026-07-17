import { Monitor, Apple, Server } from "lucide-react";
import { SolutionTypeCards } from "../../components/SolutionTypeCards";
import { softwareTypes } from "./Softwares";
import { connOptions } from "./Recursos";
import { useSectionHighlight } from "../../hooks/useSectionHighlight";
import { Hero, heroThemes } from "../../components/Hero";
import { ContentSection } from "../../components/ContentSection";
import { PillList } from "../../components/PillList";
import { InfoCardGrid } from "../../components/InfoCardGrid";
import { CtaBanner } from "../../components/CtaBanner";
import { WhatsAppAction } from "../../components/ContactActions";

export default function Software() {
  const { highlightedId, highlightSection } = useSectionHighlight();

  return (
    <>
      <Hero
        theme={heroThemes.software}
        badge={<><Monitor size="var(--size-12)" /> Softwares para PC</>}
        title="Programas para o seu computador — simples ou completos"
        subtitle="De uma ferramenta para uso individual até um sistema de gestão para toda a empresa — para Windows, Mac ou Linux."
      />

      <ContentSection
        id="Softwares"
        accentColor="var(--color-purple-600)"
        maxWidth="var(--max-width)"
        label="Sistemas operacionais"
        title="Para qual computador você precisa?"
        subtitle="Desenvolvemos para as três principais plataformas de computador. Pode ser para um, para todos ou para qualquer um."
        padding="var(--space-20) var(--space-16)"
      >
        <PillList items={[
          { color: "var(--color-blue-700)", background: "var(--color-blue-100)", content: <><Monitor size="var(--size-16)" /> Windows</> },
          { color: "var(--color-purple-700)", background: "var(--color-surface-purple)", content: <><Apple size="var(--size-16)" /> Mac (macOS)</> },
          { color: "var(--color-green-900)", background: "var(--color-green-100)", content: <><Server size="var(--size-16)" /> Linux</> },
        ]} />
        <SolutionTypeCards
          items={softwareTypes}
          checkColor="var(--color-purple-600)"
          highlightedId={highlightedId}
          onCardClick={highlightSection}
        />
      </ContentSection>

      <ContentSection
        id="recursos"
        accentColor="var(--color-purple-600)"
        background="var(--color-surface)"
        maxWidth="var(--max-width)"
        label="Opções e recursos"
        title="O que pode ter no seu software"
        subtitle="Cada detalhe é definido conforme a necessidade do seu negócio."
        padding="var(--space-20) var(--space-16)"
      >
        <InfoCardGrid
          items={connOptions}
          accentColor="var(--color-purple-600)"
          iconBackground="var(--color-purple-100)"
          minCardWidth="var(--size-220)"
          variant="stacked"
        />
        <CtaBanner
          background="linear-gradient(var(--value-135deg), var(--color-purple-900), var(--color-purple-800))"
          title="Precisa de um software personalizado?"
          subtitle="A gente desenvolve do zero, do jeito que o seu negócio precisa."
          action={
            <WhatsAppAction background="var(--gradient-purple)" />
          }
        />
      </ContentSection>
    </>
  );
}
