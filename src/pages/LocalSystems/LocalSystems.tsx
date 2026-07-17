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
import { SistemasLocal } from "./SistemasLocal";
import { ControleAcesso } from "./ControleAcesso";
import { SolutionTypeCards } from "../../components/SolutionTypeCards";
import { useRef, useState } from "react";

const authFeatures = [
  {
    icon: <Key size={18} color="#059669" />,
    title: "Login por usuário e senha",
    desc: "Cada pessoa tem acesso único e pessoal ao sistema.",
  },
  {
    icon: <Eye size={18} color="#059669" />,
    title: "Controle do que cada um vê",
    desc: "Vendedor, gerente, caixa — cada cargo tem sua visão.",
  },
  {
    icon: <Lock size={18} color="#059669" />,
    title: "Bloqueio de acesso",
    desc: "O administrador pode bloquear um usuário com um clique.",
  },
  {
    icon: <FileText size={18} color="#059669" />,
    title: "Histórico de ações",
    desc: "Registro de quem fez o quê e quando no sistema.",
  },
  {
    icon: <WifiOff size={18} color="#059669" />,
    title: "Funciona sem internet",
    desc: "A autenticação pode ser feita localmente, sem nuvem.",
  },
  {
    icon: <Wifi size={18} color="#059669" />,
    title: "Ou com nuvem segura",
    desc: "AWS Cognito para autenticação profissional na nuvem.",
  },
];

export default function LocalSystems() {
  const [highlighted, setHighlighted] = useState<string>("");
  const highlightTimeoutRef = useRef<number>(0);

  const activateHighlight = (id: string) => {
    setHighlighted(id);

    highlightTimeoutRef.current = window.setTimeout(() => {
      setHighlighted("");
      clearTimeout(highlightTimeoutRef.current);
    }, 5000);
  };

  const navigateAndHighlight = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        activateHighlight(id);
        observer.disconnect();
      }
    });
    observer.observe(element);
  };

  function click(id: string) {
    setHighlighted("");
    clearTimeout(highlightTimeoutRef.current);
    navigateAndHighlight(id);
  }

  return (
    <>
      <Hero
        theme={heroThemes.localSystems}
        badge={<><Server size={12} /> Sistemas Locais</>}
        title="Sistemas dentro da sua empresa — seguros e sem depender da internet"
        subtitle="Tudo roda na sua própria rede, com banco de dados, controle de usuários e segurança profissional — sem expor nada para a internet."
      />

      <SistemasLocal.Section id="Sistemas-Local">
        <SistemasLocal.Container>
          <SistemasLocal.SectionLabel>
            O que é um sistema local?
          </SistemasLocal.SectionLabel>
          <SistemasLocal.SectionTitle>
            Simples de entender
          </SistemasLocal.SectionTitle>

          <SistemasLocal.ConceptGrid>
            <SistemasLocal.ConceptCard>
              <SistemasLocal.ConceptTitle>
                <WifiOff size={18} color="#059669" /> Sistema na rede interna
              </SistemasLocal.ConceptTitle>
              <SistemasLocal.ConceptDesc>
                Imagine os computadores da sua empresa ligados entre si, como
                numa teia. Um sistema local fica no centro dessa teia — todos
                acessam, mas ninguém de fora entra. É como ter um sistema só
                seu, dentro da sua empresa.
              </SistemasLocal.ConceptDesc>
            </SistemasLocal.ConceptCard>
            <SistemasLocal.ConceptCard $highlight>
              <SistemasLocal.ConceptTitle $light>
                <Shield size={18} color="#6ee7b7" /> Por que usar?
              </SistemasLocal.ConceptTitle>
              <SistemasLocal.ConceptDesc $light>
                Empresas que lidam com dados sensíveis — clínicas, escritórios,
                indústrias — preferem que os dados fiquem dentro de casa. Sem
                internet, sem risco de vazamento externo. Controle total sobre
                quem acessa o quê.
              </SistemasLocal.ConceptDesc>
            </SistemasLocal.ConceptCard>
          </SistemasLocal.ConceptGrid>

          <SolutionTypeCards
            items={SistemasLocal.localTypes}
            checkColor="#059669"
            minCardWidth={290}
            highlightedId={highlighted}
            onCardClick={click}
          />
        </SistemasLocal.Container>
      </SistemasLocal.Section>

      <ControleAcesso.Section $bg="#ffffff" id="Controle-Acesso">
        <ControleAcesso.Container>
          <ControleAcesso.SectionLabel>
            Controle de acesso
          </ControleAcesso.SectionLabel>
          <ControleAcesso.SectionTitle>
            Quem pode entrar e o que cada um vê
          </ControleAcesso.SectionTitle>
          <ControleAcesso.SectionSubtitle>
            Em qualquer sistema local, é possível definir permissões detalhadas.
            Cada funcionário tem o seu espaço — sem invadir o do outro.
          </ControleAcesso.SectionSubtitle>

          <ControleAcesso.AuthGrid>
            {authFeatures.map((f) => (
              <ControleAcesso.AuthCard key={f.title}>
                <ControleAcesso.AuthIcon>{f.icon}</ControleAcesso.AuthIcon>
                <div>
                  <ControleAcesso.AuthTitle>{f.title}</ControleAcesso.AuthTitle>
                  <ControleAcesso.AuthDesc>{f.desc}</ControleAcesso.AuthDesc>
                </div>
              </ControleAcesso.AuthCard>
            ))}
          </ControleAcesso.AuthGrid>

          <ControleAcesso.CTABanner>
            <ControleAcesso.CTATitle>
              Quer um sistema dentro da sua empresa?
            </ControleAcesso.CTATitle>
            <ControleAcesso.CTASubtitle>
              A gente instala, configura e treina a equipe. Você fica no
              controle.
            </ControleAcesso.CTASubtitle>
            <ControleAcesso.CTAButton href="https://wa.me/5511999999999" target="_blank">
              Falar pelo WhatsApp <ArrowRight size={16} />
            </ControleAcesso.CTAButton>
          </ControleAcesso.CTABanner>
        </ControleAcesso.Container>
      </ControleAcesso.Section>
    </>
  );
}
