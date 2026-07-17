import { useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { ArrowRightToLine,  X, ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Activity, RotateCcw } from "lucide-react";
import { useAppStore, type QuizAnswers } from "../store";

// ─── Animations ────────────────────────────────────────────────────────────────

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(32px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const stepIn = keyframes`
  from { opacity: 0; transform: translateX(24px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
`;

const Card = styled.div<{ $active: boolean }>`
  ${({ $active }) =>
    $active &&
    css`
      animation: ${pulse} 1s infinite;
    `}
`;
// ─── Overlay & Modal Shell ─────────────────────────────────────────────────────

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 18, 50, 0.72);
  backdrop-filter: blur(6px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: ${fadeIn} 0.2s ease;
`;

const Modal = styled.div`
  background: white;
  border-radius: 24px;
  width: 100%;
  max-width: 580px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 32px 80px rgba(10, 18, 50, 0.35);
  animation: ${slideUp} 0.3s ease;
  position: relative;

  &::-webkit-scrollbar { width: 0; }
`;

// ─── Header ────────────────────────────────────────────────────────────────────

const ModalHeader = styled.div`
  padding: 1.75rem 2rem 1.25rem;
  border-bottom: 1px solid #f0f4ff;
  position: sticky;
  top: 0;
  background: white;
  z-index: 2;
  border-radius: 24px 24px 0 0;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.125rem;
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`;

const HeaderLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #2563eb;
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CounterBadge = styled.div<{ $highlight?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  background: ${(p) => (p.$highlight ? "#fef3c7" : "#f0fdf4")};
  color: ${(p) => (p.$highlight ? "#b45309" : "#16a34a")};
  border: 1px solid ${(p) => (p.$highlight ? "#fcd34d" : "#bbf7d0")};
  padding: 0.35rem 0.75rem;
  border-radius: 100px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.75rem;
${(p) =>
  p.$highlight &&
  css`
    animation: ${pulse} 1.5s ease-in-out infinite;
  `}  
  font-weight: 700;
`;


const ClearBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.75rem;
  border-radius: 8px;
  border: 1px solid #fee2e2;
  background: #fef2f2;
  color: #dc2626;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background: #fecaca;
    border-color: #fca5a5;
    color: #991b1b;
  }

  &:active {
    transform: scale(0.95);
  }
`;
const SkipBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.75rem;
  border-radius: 100px;
  border: 1px solid #e2eaff;
  background: white;
  color: #4b5684;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f0f4ff;
    color: #0c1445;
  }
`;
const CloseBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: #f0f4ff;
  color: #4b5684;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover { background: #e2eaff; }
`;

const ProgressBar = styled.div`
  height: 4px;
  background: #e2eaff;
  border-radius: 2px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ $pct: number }>`
  height: 100%;
  width: ${(p) => p.$pct}%;
  background: linear-gradient(90deg, #2563eb, #0891b2);
  border-radius: 2px;
  transition: width 0.4s ease;
`;

const StepCount = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  color: #717182;
  margin-top: 0.5rem;
`;

// ─── Question Body ─────────────────────────────────────────────────────────────

const QuestionBody = styled.div`
  padding: 2rem 2rem 1.5rem;
  animation: ${stepIn} 0.3s ease;
`;

const QuestionEmoji = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1;
`;

const QuestionText = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
  color: #0c1445;
  line-height: 1.3;
  margin-bottom: 0.5rem;
`;

const QuestionHint = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: #717182;
  line-height: 1.6;
  margin-bottom: 1.75rem;
`;

// ─── Options ───────────────────────────────────────────────────────────────────

const OptionsGrid = styled.div<{ $cols?: number }>`
  display: grid;
  grid-template-columns: ${(p) => p.$cols === 2 ? "1fr 1fr" : "1fr"};
  gap: 0.75rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const OptionCard = styled.button<{ $selected: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 0.875rem;
  padding: 0.9rem 1.1rem;
  border-radius: 12px;
  border: 2px solid ${(p) => (p.$selected ? "#2563eb" : "#e8eef8")};
  background: ${(p) => (p.$selected ? "#eff6ff" : "white")};
  cursor: pointer;
  text-align: left;
  transition: all 0.18s;
  position: relative;

  &:hover {
    border-color: ${(p) => (p.$selected ? "#2563eb" : "#c7d9f5")};
    background: ${(p) => (p.$selected ? "#eff6ff" : "#f8faff")};
    transform: translateY(-1px);
  }

  ${(p) =>
    p.$selected &&
    css`
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
    `}
`;

const OptionEmoji = styled.span`
  font-size: 1.4rem;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 1px;
`;

const OptionContent = styled.div`
  flex: 1;
`;

const OptionTitle = styled.p<{ $selected: boolean }>`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${(p) => (p.$selected ? "#1d4ed8" : "#0c1445")};
  margin-bottom: 0.2rem;
  line-height: 1.3;
`;

const OptionDesc = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  color: #717182;
  line-height: 1.5;
`;

const OptionBadge = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.15rem 0.5rem;
  border-radius: 100px;
  background: #dcfce7;
  color: #166534;
  margin-left: auto;
  flex-shrink: 0;
  align-self: flex-start;
  margin-top: 1px;
`;

const CheckMark = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 0.6rem;
  right: 0.75rem;
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transition: opacity 0.2s;
  color: #2563eb;
`;

// ─── Navigation ────────────────────────────────────────────────────────────────

const NavRow = styled.div`
  padding: 1rem 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const BackBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.625rem 1.125rem;
  border-radius: 10px;
  border: 1.5px solid #e2eaff;
  background: white;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #4b5684;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #c7d9f5;
    color: #0c1445;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const NextBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.625rem 1.375rem;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #2563eb, #0891b2);
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  flex: 1;
  justify-content: center;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

// ─── Result Screen ─────────────────────────────────────────────────────────────

const ResultBody = styled.div`
  padding: 2rem;
  animation: ${stepIn} 0.3s ease;
`;

const ResultEmoji = styled.div`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const ResultTitle = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: #0c1445;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const ResultSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #4b5684;
  text-align: center;
  line-height: 1.65;
  margin-bottom: 1.75rem;
`;

const ResultCard = styled.div`
  background: #f0f4ff;
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1.25rem;
  border: 1px solid rgba(37, 99, 235, 0.12);
`;

const ResultCardTitle = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.75rem;
`;

const ResultList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ResultItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #0c1445;
  line-height: 1.5;
`;

const PriceHint = styled.div`
  background: linear-gradient(135deg, #0c1445, #1e3a8a);
  border-radius: 12px;
  padding: 1.125rem 1.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;

const PriceLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.2rem;
`;

const PriceValue = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: white;
`;

const PriceBadge = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  color: #7dd3fc;
  background: rgba(125, 211, 252, 0.15);
  border: 1px solid rgba(125, 211, 252, 0.3);
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  white-space: nowrap;
`;

const WhatsAppBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #16a34a, #15803d);
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 12px;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
  width: 100%;

  &:hover {
    opacity: 0.92;
    transform: translateY(-2px);
  }
`;

const RestartBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.625rem;
  background: transparent;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: #717182;
  cursor: pointer;
  width: 100%;
  margin-top: 0.75rem;
  transition: color 0.2s;

  &:hover {
    color: #0c1445;
  }
`;

// ─── Quiz Logic ─────────────────────────────────────────────────────────────────

interface Question {
  key: keyof QuizAnswers;
  emoji: string;
  question: string;
  hint: string;
  cols?: number;
  multi?: boolean;
  options: {
    emoji: string;
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
    emoji: "🤔",
    question: "Pra começo de conversa — o que você precisa?",
    hint: "Escolha seu principal objetivo. Você só pode selecionar uma opção.",
    cols: 1,
    multi: false,
    options: [
      {
        emoji: "🌐",
        title: "Um lugar meu na internet",
        prePrice: 1,
        desc: "Só quero que as pessoas me encontrem no Google e saibam o que faço.",
        value: "presence",
        badge: "Mais econômico",
      },
      {
        emoji: "📋",
        title: "Controlar meu negócio",
        prePrice: 4,
        desc: "Quero organizar clientes, pedidos, estoque, vendas — ficou bagunçado.",
        value: "management",
      },
      {
        emoji: "📱",
        title: "Um aplicativo no celular",
        prePrice: 6,
        desc: "Quero que meus clientes ou equipe usem um app nativo.",
        value: "mobile",
      },
      {
        emoji: "🤷",
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

  return encodeURIComponent(lines);
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
                  <Activity size={12} />
                  Até aqui: {currentStepScore}
                </CounterBadge>
              )}
                <CounterBadge $highlight={totalScore > currentStepScore}>
                  <Activity size={12} />
                  Total: {totalScore}
                </CounterBadge>
              </CounterContainer>
            </HeaderInfo>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              {quizStep  < totalSteps && (
                    <SkipBtn onClick={handleEnd}>
                      Pular tudo
                      <ArrowRightToLine size={12} />
                    </SkipBtn>
                  )}
              {totalScore > 0 && (
                <ClearBtn onClick={handleClearAll}>
                  <RotateCcw size={12} />
                  Limpar
                </ClearBtn>
              )}
              <CloseBtn onClick={closeQuiz} aria-label="Fechar">
                <X size={15} />
              </CloseBtn>
            </div>
          </HeaderTop>
          <ProgressBar>
            <ProgressFill $pct={progressPct} />
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
              <QuestionEmoji>{currentQ.emoji}</QuestionEmoji>
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
                      <OptionEmoji>{opt.emoji}</OptionEmoji>
                      <OptionContent>
                        <OptionTitle $selected={selected}>{opt.title}</OptionTitle>
                        <OptionDesc>{opt.desc}</OptionDesc>
                      </OptionContent>
                      {opt.badge && !selected && (
                        <OptionBadge>{opt.badge}</OptionBadge>
                      )}
                      <CheckMark $visible={selected}>
                        <CheckCircle2 size={16} />
                      </CheckMark>
                    </OptionCard>
                  );
                })}
              </OptionsGrid>
            </QuestionBody>

            <NavRow>
              <BackBtn onClick={handleBack} disabled={quizStep === 0}>
                <ArrowLeft size={14} /> Voltar
              </BackBtn>
              <NextBtn onClick={handleNext} disabled={!isAnswered}>
                {quizStep === totalSteps - 1 ? "Ver resultado" : "Próxima"}
                <ArrowRight size={14} />
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
                      size={15}
                      color="#2563eb"
                      style={{ flexShrink: 0, marginTop: 2 }}
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
              href={`https://wa.me/5511999999999?text=${buildWhatsAppMessage(quizAnswers, result.profile)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> Falar com a gente no WhatsApp
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
