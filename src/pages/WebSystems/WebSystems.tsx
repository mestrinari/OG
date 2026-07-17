import { Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { Hero } from "./Hero";
import { Web } from "./Web";
import { RecursosExtras } from "./RecursosExtras";

export default function WebSystems() {
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
          <Globe size={12} /> Sites e Sistemas Web
        </Hero.PageBadge>
        <Hero.PageTitle>
          Tudo o que existe no mundo web — explicado de forma simples
        </Hero.PageTitle>
        <Hero.PageSubtitle>
          De um site básico para aparecer no Google até um sistema completo com
          login, banco de dados e inteligência artificial.
        </Hero.PageSubtitle>
      </Hero.Page>

      <Web.Section id="web">
        <Web.Container>
          <Web.SectionLabel>Tipos de sistemas web</Web.SectionLabel>
          <Web.SectionTitle>
            Qual é o certo para o seu momento?
          </Web.SectionTitle>
          <Web.SectionSubtitle>
            Você não precisa começar com tudo. Cada negócio tem uma necessidade
            diferente — veja as opções e escolha o que faz sentido agora.
          </Web.SectionSubtitle>

          <Web.TypeGrid>
            {Web.types.map((t) => (
              <Web.TypeCard
                $color={t.cor}
                onClick={() => click(`${t.id}`)}
                $highlight={highlighted === `${t.id}`}
                id={t.id}
                key={t.title}
              >
                <Web.CardHeader $color={t.color}>
                  {t.icon}
                  <Web.CardHeaderText>
                    <Web.CardHeaderTitle>{t.title}</Web.CardHeaderTitle>
                    <Web.CardHeaderSub>{t.sub}</Web.CardHeaderSub>
                  </Web.CardHeaderText>
                </Web.CardHeader>
                <Web.CardBody>
                  <Web.CardDesc>{t.desc}</Web.CardDesc>
                  <Web.CheckList>
                    {t.checks.map((c) => (
                      <Web.CheckItem key={c}>
                        <CheckCircle2
                          size={15}
                          color="#2563eb"
                          style={{ flexShrink: 0, marginTop: 2 }}
                        />
                        {c}
                      </Web.CheckItem>
                    ))}
                  </Web.CheckList>
                  <Web.Tag $variant={t.tag.variant}>{t.tag.label}</Web.Tag>
                </Web.CardBody>
              </Web.TypeCard>
            ))}
          </Web.TypeGrid>
        </Web.Container>
      </Web.Section>

      <RecursosExtras.Section $bg="#ffffff" id="hero">
        <RecursosExtras.Container>
          <RecursosExtras.SectionLabel>
            Recursos extras
          </RecursosExtras.SectionLabel>
          <RecursosExtras.SectionTitle>
            Funcionalidades que podem ser adicionadas
          </RecursosExtras.SectionTitle>
          <RecursosExtras.SectionSubtitle>
            Qualquer sistema pode ser enriquecido com esses recursos — tudo
            conforme a sua necessidade.
          </RecursosExtras.SectionSubtitle>

          <RecursosExtras.ExtraRow>
            {RecursosExtras.extras.map((e) => (
              <RecursosExtras.ExtraCard key={e.title}>
                <RecursosExtras.ExtraIcon>{e.icon}</RecursosExtras.ExtraIcon>
                <RecursosExtras.ExtraText>
                  <RecursosExtras.ExtraTitle>
                    {e.title}
                  </RecursosExtras.ExtraTitle>
                  <RecursosExtras.ExtraDesc>{e.desc}</RecursosExtras.ExtraDesc>
                </RecursosExtras.ExtraText>
              </RecursosExtras.ExtraCard>
            ))}
          </RecursosExtras.ExtraRow>

          <RecursosExtras.CTABanner>
            <RecursosExtras.CTATitle>
              Não sabe qual escolher?
            </RecursosExtras.CTATitle>
            <RecursosExtras.CTASubtitle>
              Explique o seu negócio e a gente indica a melhor opção — sem
              compromisso.
            </RecursosExtras.CTASubtitle>
            <RecursosExtras.CTAButton href="https://wa.me/5511999999999" target="_blank">
              Falar pelo WhatsApp <ArrowRight size={16} />
            </RecursosExtras.CTAButton>
          </RecursosExtras.CTABanner>
        </RecursosExtras.Container>
      </RecursosExtras.Section>
    </>
  );
}
