import {
  Smartphone,
  Users,
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
import { WhatsAppAction } from "../../components/ContactActions";
import { useEffect } from "react";

export default function Mobile() {
  const { highlightedId, highlightSection } = useSectionHighlight();

  useEffect(() => {
  const executarTesteApi = async () => {
    const url = "https://teste-api.invalid/api/teste-api";

    const payload = {
      id: 999,
      nome: "Teste API",
      email: "teste-api@exemplo.com",
      ativo: true,
      origem: "componente-teste",
      dataEnvio: new Date().toISOString(),
      configuracao: {
        registrarRequest: true,
        registrarResponse: true,
        provocarErro: true,
      },
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer TOKEN_MOCK_TESTE_API_123456789",
          "X-Api-Key": "API_KEY_MOCK_TESTE_API",
          "X-Test-Request": "true",
        },
        body: JSON.stringify(payload),
      });

      const contentType = response.headers.get("content-type");

      const data = contentType?.includes("application/json")
        ? await response.json()
        : await response.text();

      if (!response.ok) {
        throw new Error(
          `Erro HTTP ${response.status}: ${response.statusText}`,
        );
      }

      console.log("Teste de API concluído com sucesso:", data);
    } catch (error) {
      console.error("Erro na chamada de teste:", error);
    }
  };

  void executarTesteApi();
}, []);
  return (
    <>
      <Hero
        theme={heroThemes.mobile}
        badge={<><Smartphone size="var(--size-12)" /> Aplicativos Mobile</>}
        title="Apps para iPhone e Android — do simples ao completo"
        subtitle="Seja para rodar sem internet ou para conectar equipes em tempo real, temos o app certo para o seu negócio."
      />

      <ContentSection
        id="mobile"
        accentColor="var(--color-cyan-600)"
        maxWidth="var(--max-width)"
        label="Plataformas disponíveis"
        title="iOS, Android ou os dois?"
        subtitle="Desenvolvemos para as duas plataformas mais usadas no Brasil. Você pode lançar nos dois ao mesmo tempo ou começar por um."
        padding="var(--space-20) var(--space-16)"
      >
        <PillList items={[
          { color: "var(--color-blue-700)", background: "var(--color-blue-100)", content: <><Apple size="var(--size-16)" /> iOS (iPhone / iPad)</> },
          { color: "var(--color-green-500)", background: "var(--color-green-100)", content: <><Smartphone size="var(--size-16)" /> Android</> },
          { color: "var(--color-purple-600)", background: "var(--color-purple-100)", content: <><Smartphone size="var(--size-16)" /> iOS + Android juntos</> },
        ]} />
        <SolutionTypeCards
          items={appTypes}
          checkColor="var(--color-cyan-600)"
          highlightedId={highlightedId}
          minCardWidth="var(--size-280)"
          onCardClick={highlightSection}
        />
      </ContentSection>

      <ContentSection
        id="perfis"
        accentColor="var(--color-cyan-600)"
        background="var(--color-surface)"
        maxWidth="var(--max-width)"
        label="Perfis de usuário"
        title="Cada pessoa vê o que é seu"
        subtitle="Em sistemas com login, é possível definir quem tem acesso a quê."
        padding="var(--space-20) var(--space-16)"
      >
        <InfoCardGrid
          accentColor="var(--color-cyan-600)"
          iconBackground="var(--color-cyan-100)"
          minCardWidth="var(--size-180)"
          variant="centered"
          items={[
            { title: "Cliente", description: "Faz pedidos, acompanha histórico e recebe notificações." },
            { title: "Vendedor", description: "Vê e gerencia os pedidos da sua carteira." },
            { title: "Gerente", description: "Visualiza relatórios, equipe e todo o sistema." },
            { title: "Só um perfil", description: "Pode ser simples também — um único tipo de usuário." },
          ].map((item) => ({ ...item, icon: <Users size="var(--size-22)" color="var(--color-cyan-600)" /> }))}
        />
      </ContentSection>

      <ContentSection
        id="exemplos"
        accentColor="var(--color-cyan-600)"
        label="Exemplos de uso"
        maxWidth="var(--max-width)"
        title="Para que tipo de negócio serve?"
        padding="var(--space-20) var(--space-16)"
      >
        <InfoCardGrid
          items={useCases}
          accentColor="var(--color-cyan-600)"
          iconBackground="var(--color-cyan-100)"
          minCardWidth="var(--size-220)"
        />
        <CtaBanner
          background="linear-gradient(var(--value-135deg), var(--color-navy-850), var(--color-cyan-700))"
          title="Tem uma ideia de app?"
          subtitle="Conta para a gente o que você precisa e a gente indica o tipo certo."
          action={
            <WhatsAppAction background="var(--gradient-cyan-sky)" />
          }
        />
      </ContentSection>
    </>
  );
}
