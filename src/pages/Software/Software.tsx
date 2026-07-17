import { Monitor, Apple, Server, ArrowRight } from "lucide-react";
import { SolutionTypeCards } from "../../components/SolutionTypeCards";
import { Softwares } from "./Softwares";
import { Recursos } from "./Recursos";
import { useRef, useState } from "react";
import { Hero, heroThemes } from "../../components/Hero";

export default function Software() {
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
        theme={heroThemes.software}
        badge={<><Monitor size={12} /> Softwares para PC</>}
        title="Programas para o seu computador — simples ou completos"
        subtitle="De uma ferramenta para uso individual até um sistema de gestão para toda a empresa — para Windows, Mac ou Linux."
      />

      <Softwares.Section id="Softwares">
        <Softwares.Container>
          <Softwares.SectionLabel>Sistemas operacionais</Softwares.SectionLabel>
          <Softwares.SectionTitle>
            Para qual computador você precisa?
          </Softwares.SectionTitle>
          <Softwares.SectionSubtitle>
            Desenvolvemos para as três principais plataformas de computador.
            Pode ser para um, para todos ou para qualquer um.
          </Softwares.SectionSubtitle>

          <Softwares.OSRow>
            <Softwares.OSBadge $bg="#dbeafe" $color="#1d4ed8">
              <Monitor size={16} /> Windows
            </Softwares.OSBadge>
            <Softwares.OSBadge $bg="#f1f0ff" $color="#6d28d9">
              <Apple size={16} /> Mac (macOS)
            </Softwares.OSBadge>
            <Softwares.OSBadge $bg="#dcfce7" $color="#166534">
              <Server size={16} /> Linux
            </Softwares.OSBadge>
          </Softwares.OSRow>

          <SolutionTypeCards
            items={Softwares.softwareTypes}
            checkColor="#7c3aed"
            highlightedId={highlighted}
            onCardClick={click}
          />
        </Softwares.Container>
      </Softwares.Section>

      <Recursos.Section $bg="#ffffff" id="recursos">
        <Recursos.Container>
          <Recursos.SectionLabel>Opções e recursos</Recursos.SectionLabel>
          <Recursos.SectionTitle>
            O que pode ter no seu software
          </Recursos.SectionTitle>
          <Recursos.SectionSubtitle>
            Cada detalhe é definido conforme a necessidade do seu negócio.
          </Recursos.SectionSubtitle>

          <Recursos.OptionRow>
            {Recursos.connOptions.map((o) => (
              <Recursos.OptionCard key={o.title}>
                <Recursos.OptionIcon>{o.icon}</Recursos.OptionIcon>
                <div>
                  <Recursos.OptionTitle>{o.title}</Recursos.OptionTitle>
                  <Recursos.OptionDesc>{o.desc}</Recursos.OptionDesc>
                </div>
              </Recursos.OptionCard>
            ))}
          </Recursos.OptionRow>

          <Recursos.CTABanner>
            <Recursos.CTATitle>
              Precisa de um software personalizado?
            </Recursos.CTATitle>
            <Recursos.CTASubtitle>
              A gente desenvolve do zero, do jeito que o seu negócio precisa.
            </Recursos.CTASubtitle>
            <Recursos.CTAButton href="https://wa.me/5511999999999" target="_blank">
              Falar pelo WhatsApp <ArrowRight size={16} />
            </Recursos.CTAButton>
          </Recursos.CTABanner>
        </Recursos.Container>
      </Recursos.Section>
    </>
  );
}
