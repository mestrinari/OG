import { ArrowRight, Zap, Bot } from "lucide-react";
import { Component, features } from "./Components";
import { services } from "./Components";
import { Feature } from "./Features";
import { AI } from "./AI";
import { Steps } from "./Steps";
import { Contato } from "./Contato";
import { Hero } from "./Hero";
import { Section } from "./Section";
import { Card } from "./Card";
import { useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import styled, { keyframes } from "styled-components";
import { Services } from "./Services";
const CTAButtonW = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: linear-gradient(135deg, #16a34a, #15803d);
  color: white;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 10px;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;
const CTAButtonE = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
  }
`;
export default function Home() {
  const [highlighted, setHighlighted] = useState<string>("");
  const highlightTimeoutRef = useRef<number>(0);
  const activateHighlight = (id: string) => {
    setHighlighted(id);

    highlightTimeoutRef.current = window.setTimeout(() => {
      setHighlighted("");
      clearTimeout(highlightTimeoutRef.current);
    }, 2000);
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
      <Contato.PageOverlay $visible={highlighted !== ""} />
      {/* ── Hero ── */}
      
      <Hero.Section  id="hero">
        <Hero.Badge>
          <Zap size={12} /> Soluções Digitais Completas
        </Hero.Badge>
        <Hero.Title>
          Seu negócio no digital —<br />
          <span>do simples ao completo</span>
        </Hero.Title>
        <Hero.Subtitle>
          Site, aplicativo ou sistema — explicamos tudo de forma clara, sem
          termos técnicos, e entregamos a solução certa para o seu negócio.
        </Hero.Subtitle>
        <Hero.Actions>
          <Component.PrimaryBtn
            onClick={() => click("como-funciona")}
            //  smooth to="/#o-que-fazemos"
          >
            Ver o que fazemos <ArrowRight size={16} />
          </Component.PrimaryBtn>
          <Component.PrimaryBtn
            onClick={() => click("contato")}
            // to="/#contato"
          >
            Falar com a gente
          </Component.PrimaryBtn>
        </Hero.Actions>
      </Hero.Section>
  

      {/* ── Services ── */}
      <Section.View id="o-que-fazemos">
        <Section.Container>
          <Section.Label>O que fazemos</Section.Label>
          <Section.Title>
            Temos a solução certa para cada necessidade
          </Section.Title>
          <Section.Subtitle>
            Cada negócio é único. Por isso oferecemos desde sites simples até
            sistemas sofisticados — você escolhe o que faz sentido para você
            agora.
          </Section.Subtitle>
          <Card.Grid>
            {services.map((s) => (
              <Card.View $color={s.cor} key={s.to} to={s.to}>
                <Card.Icon $color={s.color}>{s.icon}</Card.Icon>
                <Card.Title>{s.title}</Card.Title>
                <Card.Desc>{s.desc}</Card.Desc>
                <Card.Link>
                  Saiba mais <ArrowRight size={14} />
                </Card.Link>
              </Card.View>
            ))}
          </Card.Grid>
        </Section.Container>
      </Section.View>

      {/* ── Resources ── */}
      <Section.View  $bg="#ffffff" id="recursos">
        <Section.Container>
          <Section.Label>Recursos disponíveis</Section.Label>
          <Section.Title>
            Tecnologias que podem fazer parte do seu sistema
          </Section.Title>
          <Section.Subtitle>
            Não precisa entender de tecnologia. A gente explica o que cada
            recurso faz e você decide o que quer no seu projeto.
          </Section.Subtitle>
          <Feature.Grid>
            {features.map((f) => (
              <Feature.Item key={f.title}>
                <Feature.IconWrap>{f.icon}</Feature.IconWrap>
                <Feature.Text>
                  <Feature.Title>{f.title}</Feature.Title>
                  <Feature.Desc>{f.desc}</Feature.Desc>
                </Feature.Text>
              </Feature.Item>
            ))}
          </Feature.Grid>

          {/* AI Banner */}
          <AI.Banner id="ia">
            <AI.Text>
              <AI.Badge>Novidade</AI.Badge>
              <AI.Title>Inteligência Artificial no seu sistema</AI.Title>
              <AI.Desc>
                Criamos chatbots personalizados, automações com IA e integrações
                com modelos de linguagem — tudo otimizado por um desenvolvedor
                para gastar menos e funcionar melhor. Um dev que faz os prompts
                certos custa menos do que aumentar o plano de IA todo mês.
              </AI.Desc>
            </AI.Text>
            <AI.Button smooth to="/web#IA">
              <Bot size={16} /> Ver opções de IA
            </AI.Button>
          </AI.Banner>
        </Section.Container>
      </Section.View>

      {/* ── How it works ── */}
      <Services.View
        id="como-funciona"
        $highlight={highlighted === "como-funciona"}
      >
        <Services.Container>
          <Section.Label>Como funciona</Section.Label>
          <Section.Title>Simples do início ao fim</Section.Title>
          <Steps.Grid>
            {[
              {
                n: "1",
                title: "Conversa inicial",
                desc: "Você conta o que precisa, a gente escuta e sugere a solução ideal — sem jargão técnico.",
              },
              {
                n: "2",
                title: "Proposta clara",
                desc: "Enviamos uma proposta simples com o que vai ser feito, prazo e valor. Sem surpresas.",
              },
              {
                n: "3",
                title: "Desenvolvimento",
                desc: "A equipe constrói o sistema com atualizações regulares para você acompanhar.",
              },
              {
                n: "4",
                title: "Entrega e suporte",
                desc: "Entregamos, explicamos como usar e ficamos à disposição para o que precisar.",
              },
            ].map((step) => (
              <Steps.Step key={step.n}>
                <Steps.Number>{step.n}</Steps.Number>
                <Steps.Title>{step.title}</Steps.Title>
                <Steps.Desc>{step.desc}</Steps.Desc>
              </Steps.Step>
            ))}
          </Steps.Grid>
        </Services.Container>
      </Services.View>

      {/* ── Contato ── */}
      <Contato.Section $highlight={highlighted === "contato"} id="contato">
        <Contato.Container>
          <Contato.Title>Pronto para começar?</Contato.Title>
          <Contato.Subtitle>
            Não precisa saber nada de tecnologia. Basta nos contar o que você
            precisa e a gente cuida do resto.
          </Contato.Subtitle>
          <Contato.Actions>
            <CTAButtonW href="https://wa.me/5511999999999">
                                    Falar pelo WhatsApp<ArrowRight size={16} />
                                  </CTAButtonW>
                      <CTAButtonE href="mailto:contato@oglabs.com.br">
                        Enviar e-mail
                      </CTAButtonE>
                    
          </Contato.Actions>
        </Contato.Container>
      </Contato.Section>
    </>
  );
}
