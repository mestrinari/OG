import {
  Server,
  Lock,
  Shield,
  FileText,
  Wifi,
  WifiOff,
  Key,
  Eye,
} from "lucide-react";
import { Hero, heroThemes } from "../../components/Hero";
import { localTypes } from "./SistemasLocal";
import { SolutionTypeCards } from "../../components/SolutionTypeCards";
import { useSectionHighlight } from "../../hooks/useSectionHighlight";
import { ContentSection } from "../../components/ContentSection";
import { InfoCardGrid, type InfoCardItem } from "../../components/InfoCardGrid";
import { CtaBanner } from "../../components/CtaBanner";
import { WhatsAppAction } from "../../components/ContactActions";

const authFeatures: InfoCardItem[] = [
  {
    icon: <Key size="var(--size-18)" color="var(--color-green-500)" />,
    title: "Login por usuário e senha",
    description: "Cada pessoa tem acesso único e pessoal ao sistema.",
  },
  {
    icon: <Eye size="var(--size-18)" color="var(--color-green-500)" />,
    title: "Controle do que cada um vê",
    description: "Vendedor, gerente, caixa — cada cargo tem sua visão.",
  },
  {
    icon: <Lock size="var(--size-18)" color="var(--color-green-500)" />,
    title: "Bloqueio de acesso",
    description: "O administrador pode bloquear um usuário com um clique.",
  },
  {
    icon: <FileText size="var(--size-18)" color="var(--color-green-500)" />,
    title: "Histórico de ações",
    description: "Registro de quem fez o quê e quando no sistema.",
  },
  {
    icon: <WifiOff size="var(--size-18)" color="var(--color-green-500)" />,
    title: "Funciona sem internet",
    description: "A autenticação pode ser feita localmente, sem nuvem.",
  },
  {
    icon: <Wifi size="var(--size-18)" color="var(--color-green-500)" />,
    title: "Ou com nuvem segura",
    description: "AWS Cognito para autenticação profissional na nuvem.",
  },
];

export default function LocalSystems() {
  const { highlightedId, highlightSection } = useSectionHighlight();

  return (
    <>
      <Hero
        theme={heroThemes.localSystems}
        badge={<><Server size="var(--size-12)" /> Sistemas Locais</>}
        title="Sistemas dentro da sua empresa — seguros e sem depender da internet"
        subtitle="Tudo roda na sua própria rede, com banco de dados, controle de usuários e segurança profissional — sem expor nada para a internet."
      />

      <ContentSection
        id="Sistemas-Local"
        accentColor="var(--color-green-500)"
        label="O que é um sistema local?"
        title="Simples de entender"
        padding="var(--space-20) var(--space-16)"
        maxWidth="var(--max-width)"

      >
        <InfoCardGrid
          accentColor="var(--color-green-500)"
          iconBackground="var(--color-green-100)"
          marginBottom="var(--space-12)"
          minCardWidth="var(--size-300)"
          variant="stacked"
          items={[
            {
              icon: <WifiOff size="var(--size-18)" color="var(--color-green-500)" />,
              title: "Sistema na rede interna",
              description: "Imagine os computadores da sua empresa ligados entre si, como numa teia. Um sistema local fica no centro dessa teia — todos acessam, mas ninguém de fora entra. É como ter um sistema só seu, dentro da sua empresa.",
            },
            {
              icon: <Shield size="var(--size-18)" color="var(--color-green-200)" />,
              title: "Por que usar?",
              description: "Empresas que lidam com dados sensíveis — clínicas, escritórios, indústrias — preferem que os dados fiquem dentro de casa. Sem internet, sem risco de vazamento externo. Controle total sobre quem acessa o quê.",
              background: "linear-gradient(var(--value-135deg), var(--color-navy-local), var(--color-green-500))",
              iconBackground: "var(--alpha-white-10)",
              titleColor: "var(--color-surface)",
              descriptionColor: "var(--alpha-white-70)",
            },
          ]}
        />
        <SolutionTypeCards
          items={localTypes}
          checkColor="var(--color-green-500)"
          minCardWidth="var(--size-290)"
          highlightedId={highlightedId}
          onCardClick={highlightSection}
        />
      </ContentSection>

      <ContentSection
        id="Controle-Acesso"
        maxWidth="var(--max-width)"
        padding="var(--space-20) var(--space-16)"
        accentColor="var(--color-green-500)"
        background="var(--color-surface)"
        label="Controle de acesso"
        title="Quem pode entrar e o que cada um vê"
        subtitle="Em qualquer sistema local, é possível definir permissões detalhadas. Cada funcionário tem o seu espaço — sem invadir o do outro."
      >
        <InfoCardGrid
          items={authFeatures}
          accentColor="var(--color-green-500)"
          iconBackground="var(--color-green-100)"
        />
        <CtaBanner
          background="linear-gradient(var(--value-135deg), var(--color-navy-local), var(--color-green-500))"
          title="Quer um sistema dentro da sua empresa?"
          subtitle="A gente instala, configura e treina a equipe. Você fica no controle."
          action={
            <WhatsAppAction background="var(--gradient-green)" />
          }
        />
      </ContentSection>
    </>
  );
}
