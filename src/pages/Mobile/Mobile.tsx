import {
  Smartphone,
  Users,
  CheckCircle2,
  ArrowRight,
  Apple,
} from "lucide-react";
import { Hero } from "./Hero";
import { Plataformas } from "./Plataformas";
import { Perfis } from "./Perfis";
import { Exemplos } from "./Exemplos";
import { useRef, useState } from "react";

export default function Mobile() {
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
      <Hero.Page id="hero">
        <Hero.PageBadge>
          <Smartphone size={12} /> Aplicativos Mobile
        </Hero.PageBadge>
        <Hero.PageTitle>
          Apps para iPhone e Android — do simples ao completo
        </Hero.PageTitle>
        <Hero.PageSubtitle>
          Seja para rodar sem internet ou para conectar equipes em tempo real,
          temos o app certo para o seu negócio.
        </Hero.PageSubtitle>
      </Hero.Page>

      <Plataformas.Section id="mobile">
        <Plataformas.Container>
          <Plataformas.SectionLabel>
            Plataformas disponíveis
          </Plataformas.SectionLabel>
          <Plataformas.SectionTitle>
            iOS, Android ou os dois?
          </Plataformas.SectionTitle>
          <Plataformas.SectionSubtitle>
            Desenvolvemos para as duas plataformas mais usadas no Brasil. Você
            pode lançar nos dois ao mesmo tempo ou começar por um.
          </Plataformas.SectionSubtitle>

          <Plataformas.PlatformRow>
            <Plataformas.PlatformBadge $color="#1d4ed8" $bg="#dbeafe">
              <Apple size={16} /> iOS (iPhone / iPad)
            </Plataformas.PlatformBadge>
            <Plataformas.PlatformBadge $color="#059669" $bg="#dcfce7">
              <Smartphone size={16} /> Android
            </Plataformas.PlatformBadge>
            <Plataformas.PlatformBadge $color="#7c3aed" $bg="#ede9fe">
              <Smartphone size={16} /> iOS + Android juntos
            </Plataformas.PlatformBadge>
          </Plataformas.PlatformRow>

          <Plataformas.TypeGrid>
            {Plataformas.appTypes.map((t) => (
              <Plataformas.TypeCard
                $color={t.cor}
                onClick={() => click(`${t.id}`)}
                $highlight={highlighted === `${t.id}`}
                id={t.id}
                key={t.title}
              >
                <Plataformas.CardHeader $color={t.color}>
                  {t.icon}
                  <div>
                    <Plataformas.CardHeaderTitle>
                      {t.title}
                    </Plataformas.CardHeaderTitle>
                    <Plataformas.CardHeaderSub>
                      {t.sub}
                    </Plataformas.CardHeaderSub>
                  </div>
                </Plataformas.CardHeader>
                <Plataformas.CardBody>
                  <Plataformas.CardDesc>{t.desc}</Plataformas.CardDesc>
                  <Plataformas.CheckList>
                    {t.checks.map((c) => (
                      <Plataformas.CheckItem key={c}>
                        <CheckCircle2
                          size={15}
                          color="#0891b2"
                          style={{ flexShrink: 0, marginTop: 2 }}
                        />
                        {c}
                      </Plataformas.CheckItem>
                    ))}
                  </Plataformas.CheckList>
                  <Plataformas.Tag $variant={t.tag.variant}>
                    {t.tag.label}
                  </Plataformas.Tag>
                </Plataformas.CardBody>
              </Plataformas.TypeCard>
            ))}
          </Plataformas.TypeGrid>
        </Plataformas.Container>
      </Plataformas.Section>

      <Perfis.Section $bg="#ffffff" id="perfis">
        <Perfis.Container>
          <Perfis.SectionLabel>Perfis de usuário</Perfis.SectionLabel>
          <Perfis.SectionTitle>Cada pessoa vê o que é seu</Perfis.SectionTitle>
          <Perfis.SectionSubtitle>
            Em sistemas com login, é possível definir quem tem acesso a quê.
          </Perfis.SectionSubtitle>

          <Perfis.ProfileGrid>
            {[
              {
                title: "Cliente",
                desc: "Faz pedidos, acompanha histórico e recebe notificações.",
              },
              {
                title: "Vendedor",
                desc: "Vê e gerencia os pedidos da sua carteira.",
              },
              {
                title: "Gerente",
                desc: "Visualiza relatórios, equipe e todo o sistema.",
              },
              {
                title: "Só um perfil",
                desc: "Pode ser simples também — um único tipo de usuário.",
              },
            ].map((p) => (
              <Perfis.ProfileCard key={p.title}>
                <Perfis.ProfileIcon>
                  <Users size={22} color="#0891b2" />
                </Perfis.ProfileIcon>
                <Perfis.ProfileTitle>{p.title}</Perfis.ProfileTitle>
                <Perfis.ProfileDesc>{p.desc}</Perfis.ProfileDesc>
              </Perfis.ProfileCard>
            ))}
          </Perfis.ProfileGrid>
        </Perfis.Container>
      </Perfis.Section>

      <Exemplos.Section id="exemplos">
        <Exemplos.Container>
          <Exemplos.SectionLabel>Exemplos de uso</Exemplos.SectionLabel>
          <Exemplos.SectionTitle>
            Para que tipo de negócio serve?
          </Exemplos.SectionTitle>

          <Exemplos.UseCaseGrid>
            {Exemplos.useCases.map((u) => (
              <Exemplos.UseCaseCard key={u.title}>
                <Exemplos.UCIcon>{u.icon}</Exemplos.UCIcon>
                <div>
                  <Exemplos.UCTitle>{u.title}</Exemplos.UCTitle>
                  <Exemplos.UCDesc>{u.desc}</Exemplos.UCDesc>
                </div>
              </Exemplos.UseCaseCard>
            ))}
          </Exemplos.UseCaseGrid>

          <Exemplos.CTABanner>
            <Exemplos.CTATitle>Tem uma ideia de app?</Exemplos.CTATitle>
            <Exemplos.CTASubtitle>
              Conta para a gente o que você precisa e a gente indica o tipo
              certo.
            </Exemplos.CTASubtitle>
            <Exemplos.CTAButton href="https://wa.me/5511999999999" target="_blank">
              Falar pelo WhatsApp <ArrowRight size={16} />
            </Exemplos.CTAButton>
          </Exemplos.CTABanner>
        </Exemplos.Container>
      </Exemplos.Section>
    </>
  );
}
