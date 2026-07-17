import {
  Server,
  Lock,
  Database,
  Network,
  Shield,
  HardDrive,
  FileText,
  Wifi,
  WifiOff,
  CheckCircle2,
  ArrowRight,
  Key,
  Eye,
} from "lucide-react";
import { Hero } from "./Hero";
import { SistemasLocal } from "./SistemasLocal";
import { ControleAcesso } from "./ControleAcesso";

const localTypes = [
  {
    id: "Sistema-Local",

    icon: <HardDrive size={22} color="white" />,
    color: "linear-gradient(135deg, #374151, #1f2937)",
    title: "Sistema Local sem Internet",
    sub: "Totalmente offline",
    desc: "Roda dentro da empresa sem precisar de internet. Os dados ficam no servidor local e só quem está na rede interna acessa. Máxima privacidade.",
    checks: [
      "Sem dependência de internet",
      "Dados ficam dentro da empresa",
      "Acesso somente na rede interna",
      "Sem risco de invasão externa",
    ],
    tag: { label: "Mais seguro", variant: "green" as const },
  },
  {
    id: "Sistema-Rede-Local-Banco",
    icon: <Network size={22} color="white" />,
    color: "linear-gradient(135deg, #059669, #047857)",
    title: "Rede Local com Banco de Dados",
    sub: "Dados centralizados internamente",
    desc: "Vários computadores da empresa acessam o mesmo banco de dados. Estoque, clientes, pedidos — tudo compartilhado em tempo real dentro da rede.",
    checks: [
      "Banco de dados central",
      "Vários PCs conectados",
      "Dados em tempo real",
      "Login por usuário",
    ],
    tag: { label: "Intermediário", variant: "green" as const },
  },
  {
    id: "Sistema-Auth",
    icon: <Database size={22} color="white" />,
    color: "linear-gradient(135deg, #1d4ed8, #1e40af)",
    title: "Sistema com Autenticação",
    sub: "Usuário e senha para tudo",
    desc: "Cada pessoa entra com seu login e vê apenas o que tem permissão. Um vendedor não vê os dados financeiros. Um gerente vê tudo. Simples assim.",
    checks: [
      "Login individual",
      "Permissões por cargo",
      "Registro de ações (log)",
      "Recuperação de senha",
    ],
    tag: { label: "Intermediário", variant: "blue" as const },
  },
  {
    id: "Sistema-Híbrido",
    icon: <Shield size={22} color="white" />,
    color: "linear-gradient(135deg, #7c3aed, #6d28d9)",
    title: "Sistema Híbrido",
    sub: "Local + nuvem quando quiser",
    desc: "Funciona localmente mas também sincroniza com a nuvem — quando há internet, os dados são salvos online. Quando cai a internet, o sistema continua funcionando.",
    checks: [
      "Funciona offline e online",
      "Sincroniza automaticamente",
      "Backup na nuvem",
      "Acesso remoto quando necessário",
    ],
    tag: { label: "Avançado", variant: "purple" as const },
  },
];

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
  return (
    <>
      <Hero.Page id="hero">
        <Hero.PageBadge>
          <Server size={12} /> Sistemas Locais
        </Hero.PageBadge>
        <Hero.PageTitle>
          Sistemas dentro da sua empresa — seguros e sem depender da internet
        </Hero.PageTitle>
        <Hero.PageSubtitle>
          Tudo roda na sua própria rede, com banco de dados, controle de
          usuários e segurança profissional — sem expor nada para a internet.
        </Hero.PageSubtitle>
      </Hero.Page>

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

          <SistemasLocal.TypeGrid>
            {localTypes.map((t) => (
              <SistemasLocal.TypeCard
                key={t.title}
                id={t.id}
                smooth
                to={`/sistemas-locais#${t.id}`}
              >
                <SistemasLocal.CardHeader $color={t.color}>
                  {t.icon}
                  <div>
                    <SistemasLocal.CardHeaderTitle>
                      {t.title}
                    </SistemasLocal.CardHeaderTitle>
                    <SistemasLocal.CardHeaderSub>
                      {t.sub}
                    </SistemasLocal.CardHeaderSub>
                  </div>
                </SistemasLocal.CardHeader>
                <SistemasLocal.CardBody>
                  <SistemasLocal.CardDesc>{t.desc}</SistemasLocal.CardDesc>
                  <SistemasLocal.CheckList>
                    {t.checks.map((c) => (
                      <SistemasLocal.CheckItem key={c}>
                        <CheckCircle2
                          size={15}
                          color="#059669"
                          style={{ flexShrink: 0, marginTop: 2 }}
                        />
                        {c}
                      </SistemasLocal.CheckItem>
                    ))}
                  </SistemasLocal.CheckList>
                  <SistemasLocal.Tag $variant={t.tag.variant}>
                    {t.tag.label}
                  </SistemasLocal.Tag>
                </SistemasLocal.CardBody>
              </SistemasLocal.TypeCard>
            ))}
          </SistemasLocal.TypeGrid>
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
