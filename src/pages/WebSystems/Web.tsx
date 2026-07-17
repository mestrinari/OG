import styled from "styled-components";
import {
  Globe,
  LayoutTemplate,
  LogIn,
  ShoppingCart,
  Database,
  Bot,
} from "lucide-react";
import type { SolutionTypeCardItem } from "../../components/SolutionTypeCards";

// ─── Shared ──────────────────────────────────────────────────────────────────────

const Section = styled.section<{ $bg?: string }>`
  padding: 5rem 1.5rem;
  background: ${(p) => p.$bg || "#f7f9ff"};
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionLabel = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0c1445;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #4b5684;
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 3rem;
`;

// ─── Data ────────────────────────────────────────────────────────────────────────

const types: SolutionTypeCardItem[] = [
  {
    id: "One-Page",
    icon: <Globe size={22} color="white" />,
    accentColor: "#2563eb",
    color: "linear-gradient(135deg, rgb(37, 99, 235), rgb(29, 78, 216))",
    title: "Site de Uma Página (One Page)",
    sub: "Ideal para começar",
    desc: "Um único endereço na internet com tudo o que você faz: seus serviços, contato, redes sociais. Perfeito para quem quer aparecer no Google sem complicação.",
    checks: [
      "Aparece no Google (SEO)",
      "Sem banco de dados",
      "Funciona no celular e computador",
      "Formulário de contato simples",
    ],
    tag: { label: "Mais simples", variant: "green" as const },
  },
  {
    id: "Site",

    icon: <LayoutTemplate size={22} color="white" />,
    accentColor: "#0891b2",
    color: "linear-gradient(135deg, rgb(8, 145, 178), rgb(14, 116, 144))",
    title: "Site com Várias Páginas",
    sub: "Sobre nós, serviços, portfólio...",
    desc: "Quando você tem mais conteúdo para mostrar: um menu com páginas separadas para cada assunto — empresa, produtos, blog, contato.",
    checks: [
      "Páginas organizadas com menu",
      "Blog ou notícias (opcional)",
      "Galeria de fotos ou portfólio",
      "Otimizado para Google",
    ],
    tag: { label: "Popular", variant: "blue" as const },
  },
  {
    id: "Login",
    icon: <LogIn size={22} color="white" />,
    accentColor: "#7c3aed",
    color: "linear-gradient(135deg, rgb(124, 58, 237), rgb(109, 40, 217))",
    title: "Sistema com Login",
    sub: "Cada usuário vê o que é seu",
    desc: "Quando você precisa que clientes ou funcionários entrem com usuário e senha para acessar uma área privada com seus dados.",
    checks: [
      "Cadastro e login de usuários",
      "Área privada por perfil",
      "Banco de dados seguro",
      "Recuperação de senha",
    ],
    tag: { label: "Intermediário", variant: "purple" as const },
  },
  {
    id: "Loja",
    icon: <ShoppingCart size={22} color="white" />,
    accentColor: "#d97706",
    color: "linear-gradient(135deg, rgb(217, 119, 6), rgb(180, 83, 9))",
    title: "Loja Virtual",
    sub: "Venda pela internet",
    desc: "Uma loja online completa onde seus clientes podem navegar pelos produtos, colocar no carrinho e pagar — tudo pelo computador ou celular.",
    checks: [
      "Catálogo de produtos",
      "Carrinho e checkout",
      "Pagamento online (Pix, cartão)",
      "Painel de pedidos para você",
    ],
    tag: { label: "Intermediário", variant: "orange" as const },
  },
  {
    id: "Banco",
    icon: <Database size={22} color="white" />,
    accentColor: "#059669",
    color: "linear-gradient(135deg, rgb(5, 150, 105), rgb(4, 120, 87))",
    title: "Sistema Completo com Banco",
    sub: "Profissional e escalável",
    desc: "Para negócios que precisam de algo mais robusto: controle de clientes, pedidos, estoque, relatórios — tudo centralizado e acessível de qualquer lugar.",
    checks: [
      "Banco de dados na nuvem (AWS)",
      "Login com perfis diferentes",
      "Atualizações em tempo real",
      "Relatórios e dashboards",
    ],
    tag: { label: "Avançado", variant: "green" as const },
  },
  {
    icon: <Bot size={22} color="white" />,
    id: "IA",
    accentColor: "#0891b2",
    color: "linear-gradient(135deg, rgb(8, 145, 178), rgb(37, 99, 235))",
    title: "IA e Chatbot Personalizado",
    sub: "Atendimento automático inteligente",
    desc: "Um assistente virtual no seu site que responde perguntas dos clientes, qualifica leads e automatiza atendimentos — treinado para o seu negócio.",
    checks: [
      "Chatbot com IA treinada",
      "Responde dúvidas 24h",
      "Integra com WhatsApp",
      "Otimizado para gastar menos em tokens",
    ],
    tag: { label: "Premium", variant: "blue" as const },
  },
];

export const Web = {
  Section,
  Container,
  SectionLabel,
  SectionTitle,
  SectionSubtitle,
  types,
};
