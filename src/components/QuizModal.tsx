import { useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { breakpoints } from "../styles/breakpoints";
import { ArrowRightToLine,  X, ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Activity, RotateCcw, Image } from "lucide-react";
import { useAppStore, type QuizAnswers } from "../store";
import { createWhatsAppHref, siteText } from "../content/site";
import man from "../assets/man.png"
import pc from "../assets/pc.png"
import cell from "../assets/cell.png"
import web from "../assets/web.png"
import paste from "../assets/paste.png"


// ─── Animations ────────────────────────────────────────────────────────────────

const fadeIn = keyframes`
  from { opacity: var(--number-zero); }
  to   { opacity: var(--number-one); }
`;

const slideUp = keyframes`
  from { opacity: var(--number-zero); transform: translateY(var(--value-32px)) scale(var(--scale-enter)); }
  to   { opacity: var(--number-one); transform: translateY(var(--number-zero)) scale(var(--number-one)); }
`;

const stepIn = keyframes`
  from { opacity: var(--number-zero); transform: translateX(var(--value-24px)); }
  to   { opacity: var(--number-one); transform: translateX(var(--number-zero)); }
`;

const pulse = keyframes`
  0% { transform: scale(var(--number-one)); }
  100% { transform: scale(var(--scale-pulse)); }
`;

const Card = styled.div<{ $active: boolean }>`
  ${({ $active }) =>
    $active &&
    css`
      animation: ${pulse} var(--value-1s) infinite;
    `}
`;
// ─── Overlay & Modal Shell ─────────────────────────────────────────────────────

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: var(--alpha-overlay);
  backdrop-filter: blur(var(--value-6px));
  z-index: var(--z-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
  animation: ${fadeIn} var(--value-0-2s) ease;
`;

const Modal = styled.div`
  background: var(--color-surface);
  border-radius: var(--radius-modal);
  width: var(--percent-full);
  max-width: var(--size-580);
  max-height: var(--value-90vh);
  overflow-y: auto;
  box-shadow: var(--shadow-modal);
  animation: ${slideUp} var(--value-0-3s) ease;
  position: relative;

  &::-webkit-scrollbar { width: var(--space-0); }
`;

// ─── Header ────────────────────────────────────────────────────────────────────

const ModalHeader = styled.div`
  padding: var(--space-7) var(--space-8) var(--space-5);
  border-bottom: var(--value-1px) solid var(--color-surface-muted);
  position: sticky;
  top: var(--space-0);
  background: var(--color-surface);
  z-index: var(--z-controls);
  border-radius: var(--radius-modal) var(--radius-modal) 0 0;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-4-5);
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex: var(--number-one);
`;

const HeaderLabel = styled.p`
  font-family: var(--font-body);
  font-size: var(--font-size-micro);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--value-0-08em);
  text-transform: uppercase;
  color: var(--color-blue-600);
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;

const CounterBadge = styled.div<{ $highlight?: boolean }>`
  display: flex;
  align-items: center;
  gap: var(--space-1-4);
  background: ${(p) => (p.$highlight ? "var(--color-amber-100)" : "var(--color-green-50)")};
  color: ${(p) => (p.$highlight ? "var(--color-amber-700)" : "var(--color-green-600)")};
  border: var(--value-1px) solid ${(p) => (p.$highlight ? "var(--color-amber-300)" : "var(--color-green-200-alt)")};
  padding: var(--space-1-4) var(--space-3);
  border-radius: var(--radius-pill);
  font-family: var(--font-display);
  font-size: var(--font-size-label);
${(p) =>
  p.$highlight &&
  css`
    animation: ${pulse} var(--value-1-5s) ease-in-out infinite;
  `}  
  font-weight: var(--font-weight-bold);
`;


const ClearBtn = styled.button`
  display: flex;
  align-items: center;
  gap: var(--space-1-4);
  padding: var(--space-1-4) var(--space-3);
  border-radius: var(--radius-md);
  border: var(--value-1px) solid var(--color-red-100);
  background: var(--color-red-50);
  color: var(--color-red-600);
  cursor: pointer;
  font-family: var(--font-body);
  font-size: var(--font-size-2xs);
  font-weight: var(--font-weight-semibold);
  transition: all var(--value-0-2s);

  &:hover {
    background: var(--color-red-200);
    border-color: var(--color-red-300);
    color: var(--color-red-800);
  }

  &:active {
    transform: scale(var(--scale-selected));
  }
`;
const SkipBtn = styled.button`
  display: flex;
  align-items: center;
  gap: var(--space-1-4);
  padding: var(--space-1-4) var(--space-3);
  border-radius: var(--radius-pill);
  border: var(--value-1px) solid var(--color-border-input);
  background: var(--color-surface);
  color: var(--color-text-muted);
  font-family: var(--font-body);
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition: all var(--value-0-2s);

  &:hover {
    background: var(--color-surface-muted);
    color: var(--color-navy-950);
  }
`;
const CloseBtn = styled.button`
  width: var(--size-32);
  height: var(--size-32);
  border-radius: var(--radius-round);
  border: none;
  background: var(--color-surface-muted);
  color: var(--color-text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--value-0-2s);

  &:hover { background: var(--color-border-input); }
`;

const ProgressBar = styled.div`
  height: var(--size-4);
  background: var(--color-border-input);
  border-radius: calc(var(--radius-sm) / 3);
  overflow: hidden;
`;

const ProgressFill = styled.div<{ $pct: number }>`
  height: var(--percent-full);
  width: ${(p) => p.$pct}%;
  background: linear-gradient(var(--value-90deg), var(--color-blue-600), var(--color-cyan-600));
  border-radius: calc(var(--radius-sm) / 3);
  transition: width var(--value-0-4s) ease;
`;

const StepCount = styled.p`
  font-family: var(--font-body);
  font-size: var(--font-size-caption);
  color: var(--color-gray-500);
  margin-top: var(--space-2);
`;

// ─── Question Body ─────────────────────────────────────────────────────────────

const QuestionBody = styled.div`
  padding: var(--space-2) var(--space-8) var(--space-6);
  animation: ${stepIn} var(--value-0-3s) ease;
`;

const QuestionEmoji = styled.div`
  font-size: var(--font-size-heading);
  margin-bottom: var(--space-4);
  line-height: var(--line-height-flat);
`;

const QuestionText = styled.h2`
  font-family: var(--font-display);
  font-size: var(--font-size-title-sm);
  font-weight: var(--font-weight-extrabold);
  color: var(--color-navy-950);
  line-height: var(--line-height-card);
  margin-bottom: var(--space-2);
`;

const QuestionHint = styled.p`
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  line-height: var(--line-height-loose);
  margin-bottom: var(--space-7);
`;

// ─── Options ───────────────────────────────────────────────────────────────────

const OptionsGrid = styled.div<{ $cols?: number }>`
  display: grid;
  grid-template-columns: ${(p) => p.$cols === 2 ? "var(--value-1fr) var(--value-1fr)" : "var(--value-1fr)"};
  gap: var(--space-3);

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: var(--value-1fr);
  }
`;

const OptionCard = styled.button<{ $selected: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3-5);
  // padding: var(--space-3-6) var(--space-4-4);
  border-radius: var(--radius-card-sm);
  border: var(--value-2px) solid ${(p) => (p.$selected ? "var(--color-blue-600)" : "var(--color-border-soft)")};
  background: ${(p) => (p.$selected ? "var(--color-blue-50)" : "var(--color-surface)")};
  cursor: pointer;
  text-align: left;
  transition: all var(--value-0-18s);
  position: relative;

  &:hover {
    border-color: ${(p) => (p.$selected ? "var(--color-blue-600)" : "var(--color-border-active)")};
    background: ${(p) => (p.$selected ? "var(--color-blue-50)" : "var(--color-background-alt)")};
    transform: translateY(var(--value-neg-1px));
  }

  ${(p) =>
    p.$selected &&
    css`
      box-shadow: var(--number-zero) var(--number-zero) var(--number-zero) var(--value-3px) var(--alpha-primary-12);
    `}
`;

const OptionEmoji = styled.span`
  font-size: var(--font-size-icon-lg);
  line-height: var(--line-height-flat);
  flex-shrink: 0;
  margin-top: var(--size-1);
  padding: 18px;

`;

const OptionContent = styled.div`
  flex: var(--number-one);
  padding: 8px 0;

`;

const OptionTitle = styled.p<{ $selected: boolean }>`
  font-family: var(--font-display);
  font-size: var(--font-size-body-sm);
  font-weight: var(--font-weight-bold);
  color: ${(p) => (p.$selected ? "var(--color-blue-700)" : "var(--color-navy-950)")};
  margin-bottom: var(--space-0-8);
  line-height: var(--line-height-card);
`;

const OptionDesc = styled.p`
  font-family: var(--font-body);
  font-size: var(--font-size-caption);
  color: var(--color-gray-500);
  line-height: var(--line-height-normal);
`;

const OptionBadge = styled.span`
  font-family: var(--font-body);
  font-size: var(--font-size-compact);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--value-0-05em);
  text-transform: uppercase;
  padding: var(--space-0-6) var(--space-2);
  border-radius: var(--radius-pill);
  background: var(--color-green-100);
  color: var(--color-green-900);
  margin-left: auto;
  flex-shrink: 0;
  align-self: flex-start;
  margin-top: var(--size-8);
`;

const CheckMark = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: var(--value-0-6rem);
  right: var(--value-0-75rem);
  opacity: ${(p) => (p.$visible ? "var(--number-one)" : "var(--number-zero)")};
  transition: opacity var(--value-0-2s);
  color: var(--color-blue-600);
`;

// ─── Navigation ────────────────────────────────────────────────────────────────

const NavRow = styled.div`
  padding: var(--space-4) var(--space-8) var(--space-8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
`;

const BackBtn = styled.button`
  display: flex;
  align-items: center;
  gap: var(--space-1-6);
  padding: var(--space-2-5) var(--space-4-5);
  border-radius: var(--radius-button);
  border: var(--value-1-5px) solid var(--color-border-input);
  background: var(--color-surface);
  font-family: var(--font-body);
  font-size: var(--font-size-base-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all var(--value-0-2s);

  &:hover {
    border-color: var(--color-border-active);
    color: var(--color-navy-950);
  }

  &:disabled {
    opacity: var(--opacity-30);
    cursor: not-allowed;
  }
`;

const NextBtn = styled.button`
  display: flex;
  align-items: center;
  gap: var(--space-1-6);
  padding: var(--space-2-5) var(--space-5-5);
  border-radius: var(--radius-button);
  border: none;
  background: linear-gradient(var(--value-135deg), var(--color-blue-600), var(--color-cyan-600));
  font-family: var(--font-body);
  font-size: var(--font-size-base-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-surface);
  cursor: pointer;
  transition: opacity var(--value-0-2s), transform var(--value-0-2s);
  flex: var(--number-one);
  justify-content: center;

  &:hover:not(:disabled) {
    opacity: var(--opacity-90);
    transform: translateY(var(--value-neg-1px));
  }

  &:disabled {
    opacity: var(--opacity-40);
    cursor: not-allowed;
  }
`;

// ─── Result Screen ─────────────────────────────────────────────────────────────

const ResultBody = styled.div`
  padding: var(--space-8);
  animation: ${stepIn} var(--value-0-3s) ease;
`;

const ResultEmoji = styled.div`
  font-size: var(--font-size-display);
  text-align: center;
  margin-bottom: var(--space-4);
`;

const ResultTitle = styled.h2`
  font-family: var(--font-display);
  font-size: var(--font-size-title);
  font-weight: var(--font-weight-extrabold);
  color: var(--color-navy-950);
  text-align: center;
  margin-bottom: var(--space-2);
`;

const ResultSubtitle = styled.p`
  font-family: var(--font-body);
  font-size: var(--font-size-body-sm);
  color: var(--color-text-muted);
  text-align: center;
  line-height: var(--line-height-looser);
  margin-bottom: var(--space-7);
`;

const ResultCard = styled.div`
  background: var(--color-surface-muted);
  border-radius: var(--radius-card);
  padding: var(--space-6);
  margin-bottom: var(--space-5);
  border: var(--value-1px) solid var(--alpha-primary-12);
`;

const ResultCardTitle = styled.p`
  font-family: var(--font-display);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--value-0-06em);
  text-transform: uppercase;
  color: var(--color-blue-600);
  margin-bottom: var(--space-3);
`;

const ResultList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const ResultItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-size: var(--font-size-base-sm);
  color: var(--color-navy-950);
  line-height: var(--line-height-normal);
`;

const PriceHint = styled.div`
  background: linear-gradient(var(--value-135deg), var(--color-navy-950), var(--color-blue-900));
  border-radius: var(--radius-card-sm);
  padding: var(--space-4-5) var(--space-5-5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-6);

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: var(--space-2);
    text-align: center;
  }
`;

const PriceLabel = styled.p`
  font-family: var(--font-body);
  font-size: var(--font-size-xs);
  color: var(--alpha-white-60);
  margin-bottom: var(--space-0-8);
`;

const PriceValue = styled.p`
  font-family: var(--font-display);
  font-size: var(--font-size-subtitle);
  font-weight: var(--font-weight-extrabold);
  color: var(--color-surface);
`;

const PriceBadge = styled.span`
  font-family: var(--font-body);
  font-size: var(--font-size-micro);
  font-weight: var(--font-weight-bold);
  color: var(--color-cyan-300);
  background: var(--alpha-sky-15);
  border: var(--value-1px) solid var(--alpha-sky-30);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-pill);
  white-space: nowrap;
`;

const WhatsAppBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-6);
  background: linear-gradient(var(--value-135deg), var(--color-green-600), var(--color-green-800));
  color: var(--color-surface);
  font-family: var(--font-display);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-body);
  border-radius: var(--radius-card-sm);
  text-decoration: none;
  transition: opacity var(--value-0-2s), transform var(--value-0-2s);
  width: var(--percent-full);

  &:hover {
    opacity: var(--opacity-92);
    transform: translateY(var(--value-neg-2px));
  }
`;

const RestartBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1-6);
  padding: var(--space-2-5);
  background: transparent;
  border: none;
  font-family: var(--font-body);
  font-size: var(--font-size-xs);
  color: var(--color-gray-500);
  cursor: pointer;
  width: var(--percent-full);
  margin-top: var(--space-3);
  transition: color var(--value-0-2s);

  &:hover {
    color: var(--color-navy-950);
  }
`;

// ─── Quiz Logic ─────────────────────────────────────────────────────────────────

interface Question {
  key: keyof QuizAnswers;
  emoji?: string | any;
  question: string;
  hint: string;
  icon?: any; // <--- Ícone principal da pergunta
  cols?: number;
  multi?: boolean;
  options: {
    emoji?: string | any;
    icon?: any; // <--- Ícone específico de cada opção
    prePrice: number;
    title: string;
    desc: string;
    value: string;
    badge?: string;
  }[];
}

const questions: Question[] = [
 {
    key: "goal",
    question: "Vamos do começo — o que você precisa?",
    hint: "Escolha seu principal objetivo. Você só pode selecionar uma opção.",
    cols: 1,
    // icon: manQuestion, /// Ícone da pergunta (importado no topo)
    multi: false,
    options: [
      {
        icon: web, // Ícone da opção 1
        title: "Um lugar meu na internet",
        prePrice: 1,
        desc: "Só quero que as pessoas me encontrem no Google e saibam o que faço.",
        value: "presence",
        badge: "Mais econômico",
      },
      {
        icon: paste, // Ícone da opção 2
        title: "Controlar meu negócio",
        prePrice: 4,
        desc: "Quero organizar clientes, pedidos, estoque, vendas — ficou bagunçado.",
        value: "management",
      },
      {
        icon: cell,
        title: "Um aplicativo no celular",
        prePrice: 6,
        desc: "Quero que meus clientes ou equipe usem um app nativo.",
        value: "mobile",
      },
      {
        icon:  man,
        title: "Ainda não sei ao certo",
        prePrice: 0,
        desc: "Tenho uma ideia mas preciso de ajuda para entender o que preciso.",
        value: "unsure",
      },
    ],
  },
  {
    key: "content",
    emoji: "🎯",
    question: "O que você quer fazer com isso?",
    hint: "Você pode selecionar mais de uma opção — escolha tudo que se aplica.",
    cols: 1,
    multi: true,
    options: [
      {
        emoji: "📣",
        title: "Só mostrar o que faço e meu contato",
        prePrice: 1,
        desc: "Uma página bonitinha para as pessoas verem e me chamarem.",
        value: "showcase",
        badge: "Super simples",
      },
      {
        emoji: "🛒",
        title: "Vender coisas pela internet",
        prePrice: 4,
        desc: "Produtos ou serviços — o cliente escolhe e paga online.",
        value: "sell",
      },
      {
        emoji: "👥",
        title: "Organizar clientes e pedidos",
        prePrice: 5,
        desc: "Quero saber quem comprou o quê, acompanhar pedidos, histórico.",
        value: "crm",
      },
      {
        emoji: "📊",
        title: "Controlar estoque e equipe",
        prePrice: 7,
        desc: "Quantidade de produto, quem vendeu, relatório do dia — esse tipo de coisa.",
        value: "erp",
      },
    ],
  },
  {
    key: "login",
    emoji: "🔐",
    question: "Vai ter alguém fazendo login no sistema?",
    hint: "Login = entrar com usuário e senha pra ver a própria área. Você só pode selecionar uma opção.",
    cols: 1,
    multi: false,
    options: [
      {
        emoji: "🚫",
        title: "Não, é só vitrine",
        prePrice: 0,
        desc: "As pessoas só olham — não precisam criar conta nem entrar com senha.",
        value: "none",
        badge: "Mais simples",
      },
      {
        emoji: "👤",
        title: "Só minha equipe entra",
        prePrice: 3,
        desc: "É um sistema interno — só eu e minha equipe vamos usar.",
        value: "team",
      },
      {
        emoji: "🏪",
        title: "Clientes entram também",
        prePrice: 5,
        desc: "Meu cliente vai ter uma conta para acompanhar pedidos, histórico etc.",
        value: "clients",
      },
      {
        emoji: "🏢",
        title: "Clientes E equipe, com telas diferentes",
        prePrice: 8,
        desc: "O cliente vê os pedidos dele. O vendedor vê tudo. O gerente vê mais ainda.",
        value: "roles",
      },
    ],
  },
  {
    key: "platform",
    emoji: "📲",
    question: "Onde você quer que isso funcione?",
    hint: "Você só pode selecionar uma opção — escolha a plataforma principal.",
    cols: 2,
    multi: false,
    options: [
      {
        emoji: "💻",
        title: "No computador",
        prePrice: 3,
        desc: "Site ou sistema acessado pelo navegador.",
        value: "web",
      },
      {
        emoji: "📱",
        title: "No celular",
        prePrice: 6,
        desc: "App para iPhone e/ou Android.",
        value: "mobile",
      },
      {
        emoji: "🔄",
        title: "Nos dois, juntos",
        prePrice: 8,
        desc: "Site e app sincronizados em tempo real.",
        value: "both",
      },
      {
        emoji: "🖥️",
        title: "Programa instalado no PC",
        prePrice: 4,
        desc: "Software que fica no computador da empresa.",
        value: "desktop",
      },
    ],
  },
  {
    key: "database",
    emoji: "🗃️",
    question: "Precisa guardar informações?",
    hint: "Informações = cadastro de clientes, histórico de pedidos, estoque... Você só pode selecionar uma opção.",
    cols: 1,
    multi: false,
    options: [
      {
        emoji: "🙅",
        title: "Não, só quero mostrar o que faço",
        prePrice: 0,
        desc: "Sem banco de dados — só conteúdo visual mesmo.",
        value: "none",
        badge: "Mais barato",
      },
      {
        emoji: "📝",
        title: "Sim, coisas simples",
        prePrice: 2,
        desc: "Guardar alguns cadastros, formulários de contato, dados básicos.",
        value: "basic",
      },
      {
        emoji: "📦",
        title: "Sim, bastante coisa",
        prePrice: 6,
        desc: "Clientes, pedidos, produtos, histórico, relatórios — tudo isso.",
        value: "full",
      },
    ],
  },
  {
    key: "notifications",
    emoji: "🔔",
    question: "Quer avisar as pessoas automaticamente?",
    hint: "Você pode selecionar mais de uma opção — escolha os canais que faz sentido.",
    cols: 1,
    multi: true,
    options: [
      {
        emoji: "🚫",
        title: "Não preciso disso",
        prePrice: 0,
        desc: "Sem notificações por enquanto.",
        value: "none",
      },
      {
        emoji: "📧",
        title: "Por e-mail está bom",
        prePrice: 2,
        desc: "Recebem um e-mail quando algo importante acontece.",
        value: "email",
      },
      {
        emoji: "📲",
        title: "No celular mesmo",
        prePrice: 5,
        desc: "Aquela notificação que aparece na tela do celular (push).",
        value: "push",
      },
    ],
  },
  {
    key: "chatbot",
    emoji: "🤖",
    question: "Quer um robozinho que responda seus clientes?",
    hint: "Ele responde perguntas comuns, 24 horas por dia. Você só pode selecionar uma opção.",
    cols: 1,
    multi: false,
    options: [
      {
        emoji: "🙅",
        title: "Não preciso disso agora",
        prePrice: 0,
        desc: "Prefiro responder pessoalmente.",
        value: "no",
      },
      {
        emoji: "🤔",
        title: "Seria interessante no futuro",
        prePrice: 0,
        desc: "Não agora, mas pode ser que eu queira depois.",
        value: "maybe",
      },
      {
        emoji: "⚡",
        title: "Sim! Quero atendimento automático 24h",
        prePrice: 6,
        desc: "Chatbot com IA que responde clientes mesmo quando estou dormindo.",
        value: "yes",
      },
    ],
  },
  {
    key: "timeline",
    emoji: "📅",
    question: "Quando você precisa disso pronto?",
    hint: "Saber o prazo ajuda a gente a planejar melhor. Você só pode selecionar uma opção.",
    cols: 2,
    multi: false,
    options: [
      {
        emoji: "🐢",
        title: "Sem pressa",
        prePrice: 0,
        desc: "Posso esperar, quero fazer certo.",
        value: "no-rush",
      },
      {
        emoji: "📅",
        title: "Nos próximos meses",
        prePrice: 1,
        desc: "Em 2 a 4 meses está ótimo.",
        value: "months",
      },
      {
        emoji: "⚡",
        title: "Rápido!",
        prePrice: 3,
        desc: "Preciso em menos de 1 mês.",
        value: "fast",
      },
      {
        emoji: "🔥",
        title: "Urgente!",
        prePrice: 5,
        desc: "Para ontem — é prioritário.",
        value: "urgent",
      },
    ],
  },
  {
    key: "budget",
    emoji: "💰",
    question: "Qual é sua ideia de investimento?",
    hint: "Sem compromisso — é só pra gente te dar a proposta mais adequada. Você só pode selecionar uma opção.",
    cols: 1,
    multi: false,
    options: [
      {
        emoji: "💚",
        title: "Quero o mais econômico possível",
        prePrice: 1,
        desc: "Meu orçamento é limitado — só o essencial.",
        value: "low",
      },
      {
        emoji: "💛",
        title: "Consigo investir no que precisa",
        prePrice: 3,
        desc: "Quero fazer certo, estou disposto a investir.",
        value: "mid",
      },
      {
        emoji: "💎",
        title: "Custo não é o problema principal",
        prePrice: 6,
        desc: "Quero qualidade — o mais completo possível.",
        value: "high",
      },
    ],
  },
];

// ─── Result Calculator ──────────────────────────────────────────────────────────

function calcResult(answers: QuizAnswers) {
  const { goal, content, login, platform, database, notifications, chatbot, timeline, budget } =
    answers;

  const hasContent = (val: string) =>
    Array.isArray(content) ? content.includes(val) : content === val;
  const hasNotif = (val: string) =>
    Array.isArray(notifications) ? notifications.includes(val) : notifications === val;

  const isSimple =
    (goal === "presence" || hasContent("showcase")) &&
    login === "none" &&
    database === "none";
  const isMobile = platform === "mobile" || platform === "both" || goal === "mobile";
  const hasPush = hasNotif("push");
  const hasEmail = hasNotif("email");
  const hasBot = chatbot === "yes";
  const hasRoles = login === "roles";
  const hasFullDb = database === "full";
  const isUrgent = timeline === "urgent" || timeline === "fast";

  if (isSimple) {
    return {
      emoji: "🌐",
      profile: "Site Simples — One Page",
      description:
        "Perfeito! Você precisa de uma página bonita, rápida e otimizada para aparecer no Google.",
      features: [
        "Uma página completa com seu contato e serviços",
        "Otimizado para SEO — aparece no Google",
        "Funciona perfeitamente no celular e no computador",
        "Formulário de contato direto",
        "Carregamento ultrarrápido",
      ],
      price: "A partir de R$ 800",
      tag: "Mais econômico",
    };
  }

  if (hasRoles && isMobile && hasPush && hasBot) {
    return {
      emoji: "🚀",
      profile: "Sistema Completo — Plano Premium",
      description:
        "Você quer o sistema mais robusto: site, app, login por perfil, notificações e IA integrada.",
      features: [
        "Site responsivo + App para iOS e Android",
        "Login com perfis diferentes (cliente, vendedor, gerente)",
        "Banco de dados completo na nuvem com segurança",
        "Notificações push no celular em tempo real",
        "Chatbot com IA para atendimento 24h",
        "Sincronização em tempo real entre plataformas",
        "Relatórios e dashboards avançados",
      ],
      price: "Sob consulta",
      tag: "Plano Premium",
    };
  }

  if (isMobile && (hasRoles || hasFullDb)) {
    return {
      emoji: "📱",
      profile: "App + Sistema Integrado",
      description:
        "Você quer um app profissional conectado a um sistema com banco de dados robusto.",
      features: [
        "App nativo para iOS e/ou Android",
        "Sistema web integrado em tempo real",
        "Banco de dados na nuvem com backup automático",
        hasRoles ? "Login com perfis diferentes" : "Login de usuário",
        hasPush ? "Notificações push no celular" : "",
        hasBot ? "Chatbot com IA para atendimento" : "",
        "Sincronização automática entre dispositivos",
      ].filter(Boolean) as string[],
      price: "A partir de R$ 8.000",
      tag: "Intermediário a avançado",
    };
  }

  if (hasFullDb || hasRoles || hasContent("erp") || hasContent("crm")) {
    return {
      emoji: "🏢",
      profile: "Sistema de Gestão Web",
      description:
        "Você precisa de um sistema completo para gerenciar seu negócio com eficiência.",
      features: [
        "Sistema web completo e intuitivo",
        "Banco de dados na nuvem com segurança enterprise",
        hasRoles ? "Perfis: cliente, vendedor, gerente com permissões específicas" : "Login de usuário",
        "Relatórios e dashboards customizáveis",
        hasPush ? "Notificações automáticas" : "",
        hasBot ? "Chatbot com IA para atendimento" : "",
        "Backup automático diário",
      ].filter(Boolean) as string[],
      price: "A partir de R$ 5.000",
      tag: "Intermediário",
    };
  }

  if (goal === "mobile" || platform === "mobile") {
    return {
      emoji: "📱",
      profile: "Aplicativo Mobile",
      description:
        "Um app para iPhone e/ou Android — pode ser simples ou com banco de dados integrado.",
      features: [
        "App nativo para iOS e/ou Android",
        database !== "none"
          ? "Banco de dados integrado com sincronização"
          : "Funciona offline com sincronização quando conectado",
        login !== "none" ? "Sistema de login seguro" : "Sem necessidade de login",
        hasPush ? "Notificações no celular" : "",
        "Interface otimizada para mobile",
      ].filter(Boolean) as string[],
      price: "A partir de R$ 4.000",
      tag: "Varia conforme recursos",
    };
  }

  return {
    emoji: "💼",
    profile: "Sistema Web com Login",
    description:
      "Um sistema profissional com login, banco de dados e controle de usuários.",
    features: [
      "Sistema web completo e responsivo",
      "Login e cadastro de usuários com segurança",
      "Banco de dados seguro na nuvem",
      "Acessível em qualquer computador ou navegador",
      hasPush ? "Notificações automáticas" : "",
      "Suporte técnico incluído",
    ].filter(Boolean) as string[],
    price: "A partir de R$ 3.500",
    tag: "Intermediário",
  };
}

function buildWhatsAppMessage(answers: QuizAnswers, profile: string): string {
  const lines = [
    "Olá! Fiz o questionário no site e gostaria de saber mais.",
    `Perfil identificado: *${profile}*`,
    answers.goal ? `Objetivo: ${answers.goal}` : "",
    answers.platform ? `Plataforma: ${answers.platform}` : "",
    answers.timeline ? `Prazo: ${answers.timeline}` : "",
    answers.budget ? `Orçamento: ${answers.budget}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return lines;
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function QuizModal() {
  const {
    quizOpen,
    closeQuiz,
    quizStep,
    setQuizStep,
    quizAnswers,
    setQuizAnswer,
    resetQuiz,
  } = useAppStore();

  const totalSteps = questions.length;
  const isResult = quizStep >= totalSteps;
  const currentQ = questions[quizStep];
  const currentAnswer = currentQ ? quizAnswers[currentQ.key] : undefined;
  const result = isResult ? calcResult(quizAnswers) : null;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeQuiz();
    };
    if (quizOpen) {
      document.addEventListener("keydown", handler);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [quizOpen, closeQuiz]);

  if (!quizOpen) return null;

  // ─── Lógica de seleção ───
  const handleSelect = (value: string) => {
    if (currentQ.multi) {
      const currentArr:  string[]  = Array.isArray(currentAnswer) ? currentAnswer : [];

      if (value === "none" || value === "no") {
        setQuizAnswer(currentQ.key, [value]);
      } else {
        const filtered = currentArr.filter((v) => v !== "none" && v !== "no");

        if (currentArr.includes(value)) {
          setQuizAnswer(currentQ.key, filtered.filter((v) => v !== value));
        } else {
          setQuizAnswer(currentQ.key, [...filtered, value]);
        }
      }
    } else {
      setQuizAnswer(currentQ.key, [value]);
    }
  };

  const handleNext = () => {
    if (!currentAnswer || (Array.isArray(currentAnswer) && currentAnswer.length === 0))
      return;
    setQuizStep(quizStep + 1);
  };

  const handleEnd = () => {
    
    setQuizStep(totalSteps );
  };
  const handleBack = () => {
    if (quizStep > 0) setQuizStep(quizStep - 1);
  };

  const handleRestart = () => {
    resetQuiz();
  };

  const handleClearAll = () => {
    if (window.confirm("Tem certeza que quer limpar todas as respostas e recomeçar?")) {
      resetQuiz();
      setQuizStep(0);
    }
  };

 // ─── Calcula o total acumulado até o step atual ───
  const calculateScoreUpToStep = (stepIndex: number) => {
    let total = 0;
    for (let i = 0; i <= stepIndex && i < questions.length; i++) {
      const q = questions[i];
      const answer = quizAnswers[q.key];
      if (!answer) continue;

      if (Array.isArray(answer)) {
        answer.forEach((val) => {
          const opt = q.options.find((o) => o.value === val);
          if (opt) total += opt.prePrice;
        });
      } else {
        const opt = q.options.find((o) => o.value === answer);
        if (opt) total += opt.prePrice;
      }
    }
    return total;
  };

  // ─── Calcula o total geral (todas as respostas) ───
  const calculateTotalScore = () => {
    return calculateScoreUpToStep(questions.length - 1);
  };

  const currentStepScore = calculateScoreUpToStep(quizStep);
  const totalScore = calculateTotalScore();

  const hasFutureAnswers = questions.some((q, idx) => {
    if (idx <= quizStep) return false;
    return !!quizAnswers[q.key];
  });

  const progressPct = isResult ? 100 : (quizStep / totalSteps) * 100;

  const isAnswered = currentQ?.multi
    ? Array.isArray(currentAnswer) && currentAnswer.length > 0
    : !!currentAnswer;

  return (
    <Overlay onClick={(e) => { if (e.target === e.currentTarget) closeQuiz(); }}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <HeaderTop>
            <HeaderInfo>
              <HeaderLabel>Faça seu orçamento</HeaderLabel>
              <CounterContainer>
              {hasFutureAnswers && (
                <CounterBadge>
                  <Activity size="var(--size-12)" />
                  Até aqui: {currentStepScore}
                </CounterBadge>
              )}
                <CounterBadge $highlight={totalScore > currentStepScore}>
                  <Activity size="var(--size-12)" />
                  Total: {totalScore}
                </CounterBadge>
              </CounterContainer>
            </HeaderInfo>
            <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
              {quizStep  < totalSteps && (
                    <SkipBtn onClick={handleEnd}>
                      Pular tudo
                      <ArrowRightToLine size="var(--size-12)" />
                    </SkipBtn>
                  )}
              {totalScore > 0 && (
                <ClearBtn onClick={handleClearAll}>
                  <RotateCcw size="var(--size-12)" />
                  Limpar
                </ClearBtn>
              )}
              <CloseBtn onClick={closeQuiz} aria-label="Fechar">
                <X size="var(--size-15)" />
              </CloseBtn>
            </div>
          </HeaderTop>
          <ProgressBar>
            <ProgressFill $pct={progressPct} />/
          </ProgressBar>
          <StepCount>
            {isResult
              ? "✅ Pronto! Veja o seu perfil abaixo"
              : `Pergunta ${quizStep + 1} de ${totalSteps}`}
          </StepCount>
        </ModalHeader>

        {!isResult && currentQ && (
          <>
            <QuestionBody  >
              {/* <QuestionEmoji>{currentQ.emoji}</QuestionEmoji> */}
              <QuestionText>{currentQ.question}</QuestionText>
              <QuestionHint>{currentQ.hint}</QuestionHint>

              <OptionsGrid $cols={currentQ.cols}>
                {currentQ.options.map((opt) => {
                  const selected = Array.isArray(currentAnswer)
                    ? currentAnswer.includes(opt.value)
                    : currentAnswer === opt.value;

                  return (
                    <OptionCard
                      key={opt.value}
                      $selected={selected}
                      onClick={() => handleSelect(opt.value)}
                    >
                        {opt.emoji && (

                      <OptionEmoji style={{color: "#0C1445" 
                      }}>{opt.emoji}</OptionEmoji>
                   )}

                        {opt.icon && (
                   <img style={{width: 24, margin: "14px 0 0 16px" }} src={opt.icon} alt={opt.title}   />
                   )}
                      <OptionContent>
                        <OptionTitle style={{margin: "4px 0 4px 0"}} $selected={selected}>{opt.title}</OptionTitle>
                        <OptionDesc style={{margin: 0}} >{opt.desc}</OptionDesc>
                      </OptionContent>
                      {opt.badge && !selected && (
                        <OptionBadge>{opt.badge}</OptionBadge>
                      )}
                      <CheckMark $visible={selected}>
                        <CheckCircle2 size="var(--size-16)" />
                      </CheckMark>
                    </OptionCard>
                  );
                })}
              </OptionsGrid>
            </QuestionBody>

            <NavRow>
              <BackBtn onClick={handleBack} disabled={quizStep === 0}>
                <ArrowLeft size="var(--size-14)" /> Voltar
              </BackBtn>
              <NextBtn onClick={handleNext} disabled={!isAnswered}>
                {quizStep === totalSteps - 1 ? "Ver resultado" : "Próxima"}
                <ArrowRight size="var(--size-14)" />
              </NextBtn>
            </NavRow>
          </>
        )}

        {isResult && result && (
          <ResultBody>
            <ResultEmoji>{result.emoji}</ResultEmoji>
            <ResultTitle>{result.profile}</ResultTitle>
            <ResultSubtitle>{result.description}</ResultSubtitle>

            <ResultCard>
              <ResultCardTitle>O que estaria incluído</ResultCardTitle>
              <ResultList>
                {result.features.map((f) => (
                  <ResultItem key={f}>
                    <CheckCircle2
                      size="var(--size-15)"
                      color="var(--color-blue-600)"
                      style={{ flexShrink: "var(--number-zero)", marginTop: "var(--size-2)" }}
                    />
                    {f}
                  </ResultItem>
                ))}
              </ResultList>
            </ResultCard>

            <PriceHint>
              <div>
                <PriceLabel>Estimativa de investimento</PriceLabel>
                <PriceValue>{result.price}</PriceValue>
              </div>
              <PriceBadge>{result.tag}</PriceBadge>
            </PriceHint>

            <WhatsAppBtn
              href={createWhatsAppHref(buildWhatsAppMessage(quizAnswers, result.profile))}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size="var(--size-18)" /> {siteText.whatsappChatAction}
            </WhatsAppBtn>

            <RestartBtn onClick={handleRestart}>
              Recomeçar o questionário
            </RestartBtn>
          </ResultBody>
        )}
      </Modal>
    </Overlay>
  );
}
