import {
  Server,
  Lock,
  Shield,
  FileText,
  Wifi,
  WifiOff,
  ArrowRight,
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
import { ActionAnchor } from "../../components/ActionButton";

const authFeatures: InfoCardItem[] = [
  {
    icon: <Key size={18} color="#059669" />,
    title: "Login por usuário e senha",
    description: "Cada pessoa tem acesso único e pessoal ao sistema.",
  },
  {
    icon: <Eye size={18} color="#059669" />,
    title: "Controle do que cada um vê",
    description: "Vendedor, gerente, caixa — cada cargo tem sua visão.",
  },
  {
    icon: <Lock size={18} color="#059669" />,
    title: "Bloqueio de acesso",
    description: "O administrador pode bloquear um usuário com um clique.",
  },
  {
    icon: <FileText size={18} color="#059669" />,
    title: "Histórico de ações",
    description: "Registro de quem fez o quê e quando no sistema.",
  },
  {
    icon: <WifiOff size={18} color="#059669" />,
    title: "Funciona sem internet",
    description: "A autenticação pode ser feita localmente, sem nuvem.",
  },
  {
    icon: <Wifi size={18} color="#059669" />,
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
        badge={<><Server size={12} /> Sistemas Locais</>}
        title="Sistemas dentro da sua empresa — seguros e sem depender da internet"
        subtitle="Tudo roda na sua própria rede, com banco de dados, controle de usuários e segurança profissional — sem expor nada para a internet."
      />

      <ContentSection
        id="Sistemas-Local"
        accentColor="#059669"
        label="O que é um sistema local?"
        title="Simples de entender"
        maxWidth={1366}

      >
        <InfoCardGrid
          accentColor="#059669"
          iconBackground="#dcfce7"
          marginBottom="3rem"
          minCardWidth={300}
          variant="stacked"
          items={[
            {
              icon: <WifiOff size={18} color="#059669" />,
              title: "Sistema na rede interna",
              description: "Imagine os computadores da sua empresa ligados entre si, como numa teia. Um sistema local fica no centro dessa teia — todos acessam, mas ninguém de fora entra. É como ter um sistema só seu, dentro da sua empresa.",
            },
            {
              icon: <Shield size={18} color="#6ee7b7" />,
              title: "Por que usar?",
              description: "Empresas que lidam com dados sensíveis — clínicas, escritórios, indústrias — preferem que os dados fiquem dentro de casa. Sem internet, sem risco de vazamento externo. Controle total sobre quem acessa o quê.",
              background: "linear-gradient(135deg, #042c1e, #059669)",
              iconBackground: "rgba(255,255,255,0.1)",
              titleColor: "white",
              descriptionColor: "rgba(255,255,255,0.7)",
            },
          ]}
        />
        <SolutionTypeCards
          items={localTypes}
          checkColor="#059669"
          minCardWidth={290}
          highlightedId={highlightedId}
          onCardClick={highlightSection}
        />
      </ContentSection>

      <ContentSection
        id="Controle-Acesso"
        maxWidth={1366}

        accentColor="#059669"
        background="#ffffff"
        label="Controle de acesso"
        title="Quem pode entrar e o que cada um vê"
        subtitle="Em qualquer sistema local, é possível definir permissões detalhadas. Cada funcionário tem o seu espaço — sem invadir o do outro."
      >
        <InfoCardGrid
          items={authFeatures}
          accentColor="#059669"
          iconBackground="#dcfce7"
        />
        <CtaBanner
          background="linear-gradient(135deg, #042c1e, #059669)"
          title="Quer um sistema dentro da sua empresa?"
          subtitle="A gente instala, configura e treina a equipe. Você fica no controle."
          action={
            <ActionAnchor href="https://wa.me/5511999999999" target="_blank" $background="linear-gradient(135deg, #059669, #047857)">
              Falar pelo WhatsApp <ArrowRight size={16} />
            </ActionAnchor>
          }
        />
      </ContentSection>
    </>
  );
}
