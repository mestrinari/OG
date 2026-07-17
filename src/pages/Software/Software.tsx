import { Monitor, Apple, Server, ArrowRight } from "lucide-react";
import { SolutionTypeCards } from "../../components/SolutionTypeCards";
import { softwareTypes } from "./Softwares";
import { connOptions } from "./Recursos";
import { useSectionHighlight } from "../../hooks/useSectionHighlight";
import { Hero, heroThemes } from "../../components/Hero";
import { ContentSection } from "../../components/ContentSection";
import { PillList } from "../../components/PillList";
import { InfoCardGrid } from "../../components/InfoCardGrid";
import { CtaBanner } from "../../components/CtaBanner";
import { ActionAnchor } from "../../components/ActionButton";

export default function Software() {
  const { highlightedId, highlightSection } = useSectionHighlight();

  return (
    <>
      <Hero
        theme={heroThemes.software}
        badge={<><Monitor size={12} /> Softwares para PC</>}
        title="Programas para o seu computador — simples ou completos"
        subtitle="De uma ferramenta para uso individual até um sistema de gestão para toda a empresa — para Windows, Mac ou Linux."
      />

      <ContentSection
        id="Softwares"
        accentColor="#7c3aed"
        label="Sistemas operacionais"
        title="Para qual computador você precisa?"
        subtitle="Desenvolvemos para as três principais plataformas de computador. Pode ser para um, para todos ou para qualquer um."
      >
        <PillList items={[
          { color: "#1d4ed8", background: "#dbeafe", content: <><Monitor size={16} /> Windows</> },
          { color: "#6d28d9", background: "#f1f0ff", content: <><Apple size={16} /> Mac (macOS)</> },
          { color: "#166534", background: "#dcfce7", content: <><Server size={16} /> Linux</> },
        ]} />
        <SolutionTypeCards
          items={softwareTypes}
          checkColor="#7c3aed"
          highlightedId={highlightedId}
          onCardClick={highlightSection}
        />
      </ContentSection>

      <ContentSection
        id="recursos"
        accentColor="#7c3aed"
        background="#ffffff"
        label="Opções e recursos"
        title="O que pode ter no seu software"
        subtitle="Cada detalhe é definido conforme a necessidade do seu negócio."
      >
        <InfoCardGrid
          items={connOptions}
          accentColor="#7c3aed"
          iconBackground="#ede9fe"
          minCardWidth={220}
          variant="stacked"
        />
        <CtaBanner
          background="linear-gradient(135deg, #1e1040, #5b21b6)"
          title="Precisa de um software personalizado?"
          subtitle="A gente desenvolve do zero, do jeito que o seu negócio precisa."
          action={
            <ActionAnchor href="https://wa.me/5511999999999" target="_blank" $background="linear-gradient(135deg, #7c3aed, #6d28d9)">
              Falar pelo WhatsApp <ArrowRight size={16} />
            </ActionAnchor>
          }
        />
      </ContentSection>
    </>
  );
}
