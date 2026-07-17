import {
  Smartphone,
  Users,
  ArrowRight,
  Apple,
} from "lucide-react";
import { SolutionTypeCards } from "../../components/SolutionTypeCards";
import { Hero, heroThemes } from "../../components/Hero";
import { appTypes } from "./Plataformas";
import { useCases } from "./Exemplos";
import { useSectionHighlight } from "../../hooks/useSectionHighlight";
import { ContentSection } from "../../components/ContentSection";
import { PillList } from "../../components/PillList";
import { InfoCardGrid } from "../../components/InfoCardGrid";
import { CtaBanner } from "../../components/CtaBanner";
import { ActionAnchor } from "../../components/ActionButton";

export default function Mobile() {
  const { highlightedId, highlightSection } = useSectionHighlight();

  return (
    <>
      <Hero
        theme={heroThemes.mobile}
        badge={<><Smartphone size={12} /> Aplicativos Mobile</>}
        title="Apps para iPhone e Android — do simples ao completo"
        subtitle="Seja para rodar sem internet ou para conectar equipes em tempo real, temos o app certo para o seu negócio."
      />

      <ContentSection
        id="mobile"
        accentColor="#0891b2"
        label="Plataformas disponíveis"
        title="iOS, Android ou os dois?"
        subtitle="Desenvolvemos para as duas plataformas mais usadas no Brasil. Você pode lançar nos dois ao mesmo tempo ou começar por um."
      >
        <PillList items={[
          { color: "#1d4ed8", background: "#dbeafe", content: <><Apple size={16} /> iOS (iPhone / iPad)</> },
          { color: "#059669", background: "#dcfce7", content: <><Smartphone size={16} /> Android</> },
          { color: "#7c3aed", background: "#ede9fe", content: <><Smartphone size={16} /> iOS + Android juntos</> },
        ]} />
        <SolutionTypeCards
          items={appTypes}
          checkColor="#0891b2"
          highlightedId={highlightedId}
          minCardWidth={280}
          onCardClick={highlightSection}
        />
      </ContentSection>

      <ContentSection
        id="perfis"
        accentColor="#0891b2"
        background="#ffffff"
        label="Perfis de usuário"
        title="Cada pessoa vê o que é seu"
        subtitle="Em sistemas com login, é possível definir quem tem acesso a quê."
      >
        <InfoCardGrid
          accentColor="#0891b2"
          iconBackground="#cffafe"
          minCardWidth={180}
          variant="centered"
          items={[
            { title: "Cliente", description: "Faz pedidos, acompanha histórico e recebe notificações." },
            { title: "Vendedor", description: "Vê e gerencia os pedidos da sua carteira." },
            { title: "Gerente", description: "Visualiza relatórios, equipe e todo o sistema." },
            { title: "Só um perfil", description: "Pode ser simples também — um único tipo de usuário." },
          ].map((item) => ({ ...item, icon: <Users size={22} color="#0891b2" /> }))}
        />
      </ContentSection>

      <ContentSection
        id="exemplos"
        accentColor="#0891b2"
        label="Exemplos de uso"
        title="Para que tipo de negócio serve?"
      >
        <InfoCardGrid
          items={useCases}
          accentColor="#0891b2"
          iconBackground="#cffafe"
          minCardWidth={220}
        />
        <CtaBanner
          background="linear-gradient(135deg, #0a1930, #0e7490)"
          title="Tem uma ideia de app?"
          subtitle="Conta para a gente o que você precisa e a gente indica o tipo certo."
          action={
            <ActionAnchor href="https://wa.me/5511999999999" target="_blank" $background="linear-gradient(135deg, #0891b2, #0284c7)">
              Falar pelo WhatsApp <ArrowRight size={16} />
            </ActionAnchor>
          }
        />
      </ContentSection>
    </>
  );
}
