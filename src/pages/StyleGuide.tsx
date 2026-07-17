import { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import {
  Globe, Smartphone, Monitor, Database, Shield, Zap, Bell,
  MessageSquare, Settings, User, LogOut, Menu, ArrowRight,
  Check, X, Search, Mail, Phone, Upload, Star, Plus, Minus,
  Code2, ChevronDown, ChevronUp,
} from "lucide-react";

// ─── UI library ─────────────────────────────────────────────────────────────────
import {
  Button, PillButton, ButtonGroup,
  Badge, BadgeWeb, BadgeMobile, BadgeSoftware, BadgeLocal, BadgePriceTag,
  Field, Input, Select, Textarea,
  Toggle, Checkbox, RadioGroup,
  ProgressBar, StepProgress,
  Card, CardIcon, CardTitle, CardText,
  ServiceCard, FeatureCard, StepCard,
  QuizOptionGroup,
  Alert, Toast, EmptyState,
  Avatar, AvatarGroup,
  Table, Thead, Tbody, Th, Td, Tr,
  SectionHeader, PageSection, Divider, InlineCode, CodeBlock,
} from "../components/ui";

// ─── Animations ──────────────────────────────────────────────────────────────────

const pulse = keyframes`
  0%,100% { box-shadow: 0 0 0 0 rgba(245,158,11,0.5); }
  50%      { box-shadow: 0 0 0 12px rgba(245,158,11,0); }
`;

// ─── StyleGuide shell ─────────────────────────────────────────────────────────────

const PageWrap = styled.div`
  background: #f0f3fb;
  min-height: 100vh;
  padding-bottom: 8rem;
  font-family: 'Inter', sans-serif;
`;

const Header = styled.div`
  background: linear-gradient(160deg, #0c1445 0%, #1e3a8a 100%);
  padding: 4rem 2rem 0;
`;

const HeaderInner = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

const Eyebrow = styled.p`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #60a5fa;
  margin-bottom: 0.75rem;
`;

const PageTitle = styled.h1`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  letter-spacing: -0.025em;
  margin-bottom: 0.5rem;
`;

const PageSub = styled.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.5);
  margin-bottom: 2rem;
`;

const NavTabs = styled.div`
  background: rgba(0,0,0,0.25);
  border-top: 1px solid rgba(255,255,255,0.07);
  overflow-x: auto;
  &::-webkit-scrollbar { height: 0; }
`;

const NavTabsInner = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  padding: 0 2rem;
  gap: 0.25rem;
`;

const NavTab = styled.a`
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255,255,255,0.45);
  padding: 0.875rem 1rem;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s, border-color 0.2s;
  cursor: pointer;
  &:hover { color: rgba(255,255,255,0.85); border-color: rgba(255,255,255,0.3); }
`;

const Body = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  padding: 3rem 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

// ─── Demo helpers ─────────────────────────────────────────────────────────────────

const DocSection = styled.section``;

const SectionHead = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.75rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(29,78,216,0.12);
`;

const SectionTitle = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.375rem;
  font-weight: 800;
  color: #0c1445;
  letter-spacing: -0.02em;
`;

const TagPill = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: #dbeafe;
  color: #1e40af;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
`;

const Sub = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  color: #4b5684;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin: 2.5rem 0 1.25rem;
`;

const SectionDesc = styled.p`
  font-size: 0.875rem;
  color: #4b5684;
  line-height: 1.7;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
`;

const Canvas = styled.div<{ $dark?: boolean; $pad?: string; $bg?: string }>`
  background: ${p => p.$dark ? '#0c1445' : (p.$bg ?? 'white')};
  border-radius: 16px;
  border: 1px solid ${p => p.$dark ? 'rgba(255,255,255,0.07)' : 'rgba(29,78,216,0.08)'};
  padding: ${p => p.$pad ?? '2rem'};
  margin-bottom: 0.75rem;
`;

const StateRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: flex-end;
`;

const StateCol = styled.div<{ $center?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${p => p.$center ? "center" : "flex-start"};
  gap: 0.5rem;
`;

const StateLabel = styled.span<{ $dark?: boolean }>`
  font-size: 0.66rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${p => p.$dark ? "rgba(255,255,255,0.35)" : "#9ca3af"};
`;

const Row = styled.div<{ $gap?: string; $wrap?: boolean; $align?: string }>`
  display: flex;
  flex-wrap: ${p => p.$wrap !== false ? 'wrap' : 'nowrap'};
  gap: ${p => p.$gap || '1rem'};
  align-items: ${p => p.$align || 'flex-start'};
`;

// ─── Navbar atoms (only used in StyleGuide demo) ──────────────────────────────────

const NavDemo = styled.div<{ $gradient?: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${p => p.$gradient || "linear-gradient(160deg,#0c1445,#0f2050)"};
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  flex-wrap: wrap;
`;

const NavBrand = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 1rem;
  color: white;
  margin-right: auto;
`;

const NavLogoBox = styled.div<{ $dev?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 9px;
  background: ${p => p.$dev
    ? "linear-gradient(135deg,rgba(230,50,200,0.2),rgba(226,105,248,0.5))"
    : "linear-gradient(135deg,#2563eb,#0891b2)"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const NavLinkBtn = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: ${p => p.$active ? "rgba(255,255,255,0.12)" : "transparent"};
  color: ${p => p.$active ? "white" : "rgba(255,255,255,0.6)"};
  border: none;
  border-radius: 7px;
  padding: 0.375rem 0.625rem;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: all 0.18s;
  &:hover { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.9); }
`;

const DropdownBox = styled.div`
  background: #0c1445;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 0.5rem;
  min-width: 200px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.4);
`;

const DropdownItem = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.625rem 0.875rem;
  border-radius: 8px;
  background: ${p => p.$active ? "rgba(255,255,255,0.08)" : "transparent"};
  color: ${p => p.$active ? "white" : "rgba(255,255,255,0.7)"};
  border: none;
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  font-family: 'Inter', sans-serif;
`;

const AccordionBlock = styled.div<{ $gradient: string }>`
  background: linear-gradient(${p => p.$gradient});
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 0.4rem;
`;

const AccordionHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.875rem 1.125rem;
  background: transparent;
  border: none;
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
`;

const AccordionLinks = styled.div<{ $open: boolean }>`
  max-height: ${p => p.$open ? "200px" : "0"};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${p => p.$open ? "0 1.125rem 0.875rem" : "0 1.125rem"};
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const AccordionLink = styled.a`
  color: rgba(255,255,255,0.75);
  font-size: 0.82rem;
  text-decoration: none;
  padding: 0.3rem 0;
  &:hover { color: white; }
`;

const FloatingBtnDemo = styled.button<{ $pulse?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.875rem 1.375rem;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(245,158,11,0.35);
  ${p => p.$pulse && css`animation: ${pulse} 3s ease-in-out infinite;`}
`;

// ─── Color tiles ─────────────────────────────────────────────────────────────────

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.875rem;
`;

const ColorTile = styled.div`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(29,78,216,0.08);
  background: white;
`;

const Swatch = styled.div<{ $c: string; $h?: number }>`
  background: ${p => p.$c};
  height: ${p => (p.$h !== undefined ? p.$h : 68)}px;
`;

const ColorInfo = styled.div`padding: 0.625rem 0.875rem;`;
const ColorName = styled.p`font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.78rem; font-weight: 700; color: #0c1445; margin-bottom: 0.15rem;`;
const ColorHex = styled.p`font-size: 0.68rem; color: #717182;`;
const ColorToken = styled.p`font-size: 0.65rem; color: #2563eb; font-weight: 600; margin-top: 0.2rem; font-family: monospace;`;

// ─── Gradient tiles ───────────────────────────────────────────────────────────────

const GradGrid = styled.div`display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 0.875rem;`;

const GradTile = styled.div`border-radius: 12px; overflow: hidden; border: 1px solid rgba(29,78,216,0.08);`;

const GradSwatch = styled.div<{ $g: string }>`background: ${p => p.$g}; height: 88px;`;

const GradInfo = styled.div`background: white; padding: 0.75rem 1rem;`;
const GradName = styled.p`font-family: 'Plus Jakarta Sans',sans-serif; font-size: 0.78rem; font-weight: 700; color: #0c1445; margin-bottom: 0.25rem;`;
const GradUse = styled.p`font-size: 0.7rem; color: #2563eb; font-weight: 600; margin-bottom: 0.25rem;`;
const GradVal = styled.p`font-size: 0.62rem; color: #9ca3af; word-break: break-all; font-family: monospace;`;

// ─── Type scale ───────────────────────────────────────────────────────────────────

const ScaleTable = styled.div`
  background: white;
  border-radius: 14px;
  border: 1px solid rgba(29,78,216,0.08);
  overflow: hidden;
`;

const ScaleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
  padding: 0.875rem 1.5rem;
  border-bottom: 1px solid #f0f4ff;
  flex-wrap: wrap;
  &:last-child { border-bottom: none; }
  &:hover { background: #f8faff; }
`;

const ScaleToken = styled.span`font-size: 0.68rem; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.07em; width: 76px; flex-shrink: 0;`;
const ScaleSize = styled.span`font-size: 0.68rem; color: #2563eb; font-weight: 600; font-family: monospace; width: 80px; flex-shrink: 0;`;
const ScaleSample = styled.p<{ $font: string; $sz: string; $w: number }>`
  font-family: ${p => p.$font};
  font-size: ${p => p.$sz};
  font-weight: ${p => p.$w};
  color: #0c1445;
  line-height: 1.25;
  margin: 0;
`;

// ─── Icon grid ────────────────────────────────────────────────────────────────────

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  min-width: 62px;
`;

const IconBubble = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1d4ed8;
`;

const IconLabel = styled.span`font-size: 0.6rem; color: #9ca3af; font-weight: 700; text-align: center;`;

// ─── Data ────────────────────────────────────────────────────────────────────────

const COLORS_PRIMARY = [
  { name: "Navy 950",  hex: "#0c1445", token: "--foreground" },
  { name: "Navy 900",  hex: "#0f2050", token: "--sidebar" },
  { name: "Blue 800",  hex: "#1e3a8a", token: "--secondary-foreground" },
  { name: "Blue 700",  hex: "#1d4ed8", token: "--primary" },
  { name: "Blue 600",  hex: "#2563eb", token: "--ring" },
  { name: "Blue 400",  hex: "#60a5fa", token: "--sidebar-primary" },
];

const COLORS_ACCENT = [
  { name: "Cyan 600",   hex: "#0891b2", token: "--accent" },
  { name: "Cyan 500",   hex: "#06b6d4", token: "cyan-500" },
  { name: "Amber 500",  hex: "#f59e0b", token: "quiz-btn-base" },
  { name: "Amber 600",  hex: "#d97706", token: "quiz-btn-dark" },
];

const COLORS_SEMANTIC = [
  { name: "Success",     hex: "#059669", token: "green-600" },
  { name: "Success BG",  hex: "#dcfce7", token: "green-100" },
  { name: "Purple",      hex: "#7c3aed", token: "violet-600" },
  { name: "Purple BG",   hex: "#ede9fe", token: "violet-100" },
  { name: "Error",       hex: "#dc2626", token: "--destructive" },
  { name: "Error BG",    hex: "#fee2e2", token: "red-100" },
  { name: "Warning",     hex: "#d97706", token: "amber-600" },
  { name: "Warning BG",  hex: "#ffedd5", token: "orange-100" },
];

const GRADIENTS = [
  { name: "Hero Home",     g: "linear-gradient(160deg,#0c1445 0%,#0f2050 50%,#0a1930 100%)", use: "Hero da home, Navbar padrão" },
  { name: "Navy Dark",     g: "linear-gradient(160deg,#0c1445 0%,#1e3a8a 100%)", use: "Hero Web, CTAs, AI banner" },
  { name: "Blue Action",   g: "linear-gradient(135deg,#2563eb,#1d4ed8)", use: "Botão Primary, Navbar ativo" },
  { name: "Blue-Cyan",     g: "linear-gradient(90deg,#2563eb,#0891b2)", use: "ProgressBar, gráficos" },
  { name: "Cyan Action",   g: "linear-gradient(135deg,#0891b2,#0e7490)", use: "Botão Mobile, card Mobile" },
  { name: "Amber Quiz",    g: "linear-gradient(135deg,#f59e0b,#d97706)", use: "Botão Orçamento (3 pontos de entrada)" },
  { name: "Green WA",      g: "linear-gradient(135deg,#16a34a,#15803d)", use: "Botão WhatsApp" },
  { name: "Green System",  g: "linear-gradient(135deg,#059669,#047857)", use: "Cards sistemas locais" },
  { name: "Purple",        g: "linear-gradient(135deg,#7c3aed,#6d28d9)", use: "Cards software" },
  { name: "Logo Grad",     g: "linear-gradient(135deg,#2563eb,#0891b2)", use: "LogoIcon + BrandIcon footer" },
];

const TYPE_SCALE = [
  { token: "Display", sz: "clamp(2.2rem,6vw,4rem)", font: "'Plus Jakarta Sans'", w: 800, sample: "Seu negócio no digital" },
  { token: "H1",      sz: "clamp(2rem,5vw,3.5rem)", font: "'Plus Jakarta Sans'", w: 800, sample: "Sites e Sistemas Web" },
  { token: "H2",      sz: "clamp(1.6rem,3vw,2.25rem)", font: "'Plus Jakarta Sans'", w: 800, sample: "Qual é o certo para você?" },
  { token: "H3 Card", sz: "1.05rem", font: "'Plus Jakarta Sans'", w: 700, sample: "Sistema com Login" },
  { token: "Body L",  sz: "1.125rem", font: "'Inter'", w: 400, sample: "Explicamos tudo sem termos técnicos." },
  { token: "Body",    sz: "1rem", font: "'Inter'", w: 400, sample: "Cada negócio é único — oferecemos desde sites simples." },
  { token: "Body S",  sz: "0.9rem", font: "'Inter'", w: 400, sample: "Aparece no Google, funciona no celular." },
  { token: "Caption", sz: "0.78rem", font: "'Inter'", w: 400, sample: "Login individual · Backup automático · Segurança" },
  { token: "Label",   sz: "0.72rem", font: "'Inter'", w: 700, sample: "SOLUÇÕES DIGITAIS · O QUE FAZEMOS" },
];

const ICONS = [
  { icon: <Globe size={20} />,          label: "Globe" },
  { icon: <Smartphone size={20} />,     label: "Smartphone" },
  { icon: <Monitor size={20} />,        label: "Monitor" },
  { icon: <Database size={20} />,       label: "Database" },
  { icon: <Shield size={20} />,         label: "Shield" },
  { icon: <Zap size={20} />,            label: "Zap" },
  { icon: <Bell size={20} />,           label: "Bell" },
  { icon: <MessageSquare size={20} />,  label: "MessageSquare" },
  { icon: <Settings size={20} />,       label: "Settings" },
  { icon: <User size={20} />,           label: "User" },
  { icon: <LogOut size={20} />,         label: "LogOut" },
  { icon: <Menu size={20} />,           label: "Menu" },
  { icon: <ArrowRight size={20} />,     label: "ArrowRight" },
  { icon: <Check size={20} />,          label: "Check" },
  { icon: <X size={20} />,              label: "X" },
  { icon: <Search size={20} />,         label: "Search" },
  { icon: <Upload size={20} />,         label: "Upload" },
  { icon: <Star size={20} />,           label: "Star" },
  { icon: <Code2 size={20} />,          label: "Code2 (Logo)" },
  { icon: <Mail size={20} />,           label: "Mail" },
  { icon: <Phone size={20} />,          label: "Phone" },
];

const NAV_ITEMS = [
  { id: "home",            label: "Início",             gradient: "160deg, #0c1445 0%, #0f2050 50%, #0a1930 100%", links: ["Soluções Digitais","O que fazemos","Recursos","Como funciona"] },
  { id: "web",             label: "Sites & Web",        gradient: "160deg, #0c1445 0%, #1e3a8a 100%",              links: ["Hero","Tipos de site","Recursos extras"] },
  { id: "mobile",          label: "Apps Mobile",        gradient: "160deg, #0a1930 0%, #0e7490 100%",              links: ["Hero","Plataformas","Perfis","Exemplos"] },
  { id: "software",        label: "Softwares",          gradient: "160deg, #1e1040 0%, #5b21b6 100%",              links: ["Hero","Tipos","Recursos"] },
  { id: "sistemas-locais", label: "Sistemas Locais",    gradient: "160deg, #042c1e 0%, #059669 100%",              links: ["Hero","Sistemas","Controle de Acesso"] },
];

// ─── Component ────────────────────────────────────────────────────────────────────

export default function StyleGuide() {
  const [toggleA, setToggleA] = useState(false);
  const [toggleB, setToggleB] = useState(true);
  const [checkA, setCheckA] = useState(false);
  const [checkB, setCheckB] = useState(true);
  const [radioVal, setRadioVal] = useState("web");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [quizVal, setQuizVal] = useState<string | null>("management");
  const [accordions, setAccordions] = useState<Record<string, boolean>>({ home: true });
  const [progress, setProgress] = useState(44);
  const [activeStep, setActiveStep] = useState(1);
  const [serviceCard, setServiceCard] = useState("web");

  const toggleAccordion = (id: string) =>
    setAccordions(a => ({ ...a, [id]: !a[id] }));

  const TABS = [
    ["#botoes",     "Botões"],
    ["#badges",     "Badges"],
    ["#inputs",     "Inputs"],
    ["#cards",      "Cards"],
    ["#selecoes",   "Seleções"],
    ["#navegacao",  "Navegação"],
    ["#feedback",   "Feedback"],
    ["#tabela",     "Tabela"],
    ["#tipografia", "Tipografia"],
    ["#cores",      "Cores"],
    ["#gradientes", "Gradientes"],
    ["#padroes",    "Padrões"],
  ];

  return (
    <PageWrap>
      {/* ── Header ── */}
      <Header>
        <HeaderInner>
          <Eyebrow>OG Labs · Design System · v1.0</Eyebrow>
          <PageTitle>Biblioteca de Componentes</PageTitle>
          <PageSub>Todos os componentes reais e reutilizáveis — com variações e estados interativos.</PageSub>
        </HeaderInner>
        <NavTabs>
          <NavTabsInner>
            {TABS.map(([href, label]) => <NavTab key={href} href={href}>{label}</NavTab>)}
          </NavTabsInner>
        </NavTabs>
      </Header>

      <Body>

        {/* ═══════════════════════════════════════════════════ BOTÕES */}
        <DocSection id="botoes">
          <SectionHead>
            <SectionTitle>Botões</SectionTitle>
            <TagPill>Button · PillButton · ButtonGroup</TagPill>
          </SectionHead>
          <SectionDesc>
            Importar: <InlineCode>{"import { Button, PillButton, ButtonGroup } from '../components/ui'"}</InlineCode>
          </SectionDesc>

          <Sub>Variantes — todas clicáveis</Sub>
          <Canvas>
            <StateRow>
              {(["primary","secondary","ghost","danger","amber","cyan","green","white"] as const).map(v => (
                <StateCol key={v}>
                  <StateLabel>{v}</StateLabel>
                  <Button variant={v}>{v === "primary" ? "Continuar" : v === "white" ? "White" : v.charAt(0).toUpperCase() + v.slice(1)}</Button>
                </StateCol>
              ))}
            </StateRow>
          </Canvas>

          <Canvas $dark>
            <StateRow>
              <StateCol><StateLabel $dark>White em fundo escuro</StateLabel><Button variant="white"><ArrowRight size={14} /> Começar</Button></StateCol>
              <StateCol><StateLabel $dark>Amber em fundo escuro</StateLabel><Button variant="amber">🧮 Orçamento</Button></StateCol>
              <StateCol><StateLabel $dark>Ghost em fundo escuro</StateLabel><Button variant="ghost" style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.2)" }}>Ver mais</Button></StateCol>
            </StateRow>
          </Canvas>

          <Sub>Estados</Sub>
          <Canvas>
            <StateRow>
              <StateCol><StateLabel>Default</StateLabel><Button>Continuar</Button></StateCol>
              <StateCol><StateLabel>Disabled</StateLabel><Button disabled>Continuar</Button></StateCol>
              <StateCol><StateLabel>Loading</StateLabel><Button loading>Continuar</Button></StateCol>
              <StateCol><StateLabel>Com leftIcon</StateLabel><Button leftIcon={<ArrowRight size={14} />}>Próxima</Button></StateCol>
              <StateCol><StateLabel>Com rightIcon</StateLabel><Button rightIcon={<ArrowRight size={14} />}>Próxima</Button></StateCol>
            </StateRow>
          </Canvas>

          <Sub>Tamanhos</Sub>
          <Canvas>
            <StateRow $align="center">
              <StateCol><StateLabel>Large</StateLabel><Button size="lg" leftIcon={<ArrowRight size={16} />}>Começar agora</Button></StateCol>
              <StateCol><StateLabel>Medium (padrão)</StateLabel><Button size="md" leftIcon={<ArrowRight size={14} />}>Continuar</Button></StateCol>
              <StateCol><StateLabel>Small</StateLabel><Button size="sm" leftIcon={<ArrowRight size={12} />}>Ver mais</Button></StateCol>
            </StateRow>
          </Canvas>

          <Sub>PillButton (FloatingQuizBtn) e fullWidth</Sub>
          <Canvas>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", maxWidth: 400 }}>
              <PillButton onClick={() => {}}>🧮 Faça um Orçamento Grátis</PillButton>
              <Button variant="primary" fullWidth leftIcon={<Mail size={15} />}>Enviar mensagem</Button>
              <Button variant="secondary" fullWidth leftIcon={<Phone size={15} />}>Ligar agora</Button>
            </div>
          </Canvas>

          <Sub>ButtonGroup</Sub>
          <Canvas>
            <ButtonGroup>
              <Button leftIcon={<ArrowRight size={14} />}>Quero começar</Button>
              <Button variant="ghost">Ver exemplos</Button>
            </ButtonGroup>
          </Canvas>
        </DocSection>

        {/* ═══════════════════════════════════════════════════ BADGES */}
        <DocSection id="badges">
          <SectionHead>
            <SectionTitle>Badges e Tags</SectionTitle>
            <TagPill>Badge · aliases semânticos</TagPill>
          </SectionHead>
          <SectionDesc>
            Importar: <InlineCode>{"import { Badge, BadgeWeb, BadgeMobile, ... } from '../components/ui'"}</InlineCode>
          </SectionDesc>

          <Sub>Variantes</Sub>
          <Canvas>
            <Row $gap="0.625rem" $wrap $align="center">
              {(["blue","cyan","purple","green","amber","red","gray","outline"] as const).map(v => (
                <Badge key={v} variant={v}>{v}</Badge>
              ))}
            </Row>
          </Canvas>

          <Sub>Com ponto de status</Sub>
          <Canvas>
            <Row $gap="0.75rem" $wrap $align="center">
              <Badge variant="green" dot>Online</Badge>
              <Badge variant="amber" dot>Aguardando</Badge>
              <Badge variant="red" dot>Offline</Badge>
              <Badge variant="gray" dot>Inativo</Badge>
            </Row>
          </Canvas>

          <Sub>Aliases semânticos por página</Sub>
          <Canvas>
            <Row $gap="0.75rem" $wrap $align="center">
              <BadgeWeb>Sites Web</BadgeWeb>
              <BadgeMobile>Apps Mobile</BadgeMobile>
              <BadgeSoftware>Softwares</BadgeSoftware>
              <BadgeLocal>Sistemas Locais</BadgeLocal>
              <BadgePriceTag>Em breve</BadgePriceTag>
            </Row>
          </Canvas>

          <Sub>Tamanhos</Sub>
          <Canvas>
            <Row $gap="1rem" $wrap $align="center">
              <StateCol><StateLabel>Médio (padrão)</StateLabel><Badge>Sites & Sistemas Web</Badge></StateCol>
              <StateCol><StateLabel>Pequeno</StateLabel><Badge size="sm">Sites & Sistemas Web</Badge></StateCol>
            </Row>
          </Canvas>
        </DocSection>

        {/* ═══════════════════════════════════════════════════ INPUTS */}
        <DocSection id="inputs">
          <SectionHead>
            <SectionTitle>Inputs e Formulário</SectionTitle>
            <TagPill>Field · Input · Select · Textarea</TagPill>
          </SectionHead>
          <SectionDesc>
            Importar: <InlineCode>{"import { Field, Input, Select, Textarea } from '../components/ui'"}</InlineCode>
          </SectionDesc>

          <Sub>Input — todos os estados</Sub>
          <Canvas>
            <Row $gap="1.5rem" $wrap>
              <Field label="Padrão" hint="Campo obrigatório" style={{ maxWidth: 260 }}>
                <Input placeholder="Seu nome" />
              </Field>
              <Field label="Em foco" style={{ maxWidth: 260 }}>
                <Input fieldState="focus" defaultValue="João Silva" readOnly />
              </Field>
              <Field label="Sucesso" success="Nome válido ✓" style={{ maxWidth: 260 }}>
                <Input fieldState="success" defaultValue="João Silva" readOnly rightIcon={<Check size={15} color="#16a34a" />} />
              </Field>
              <Field label="Erro" error="Nome deve ter ao menos 2 caracteres" style={{ maxWidth: 260 }}>
                <Input fieldState="error" defaultValue="J" readOnly />
              </Field>
              <Field label="Desabilitado" hint="Não editável" style={{ maxWidth: 260 }}>
                <Input disabled defaultValue="Campo bloqueado" />
              </Field>
            </Row>
          </Canvas>

          <Sub>Input com ícones</Sub>
          <Canvas>
            <Row $gap="1.5rem" $wrap>
              <Field label="Com ícone esquerda" style={{ maxWidth: 280 }}>
                <Input placeholder="contato@empresa.com" leftIcon={<Mail size={15} />} />
              </Field>
              <Field label="Com ícone busca" style={{ maxWidth: 280 }}>
                <Input placeholder="Buscar solução…" leftIcon={<Search size={15} />} />
              </Field>
              <Field label="Senha" style={{ maxWidth: 280 }}>
                <Input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Senha"
                  rightIcon={showPass
                    ? <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    : <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  }
                  onRightIconClick={() => setShowPass(!showPass)}
                />
              </Field>
            </Row>
          </Canvas>

          <Sub>Select</Sub>
          <Canvas>
            <Row $gap="1.5rem" $wrap>
              <Field label="Padrão" style={{ maxWidth: 260 }}>
                <Select>
                  <option value="">Selecione uma opção</option>
                  <option>Sites & Sistemas Web</option>
                  <option>Apps Mobile</option>
                  <option>Softwares</option>
                </Select>
              </Field>
              <Field label="Em foco" style={{ maxWidth: 260 }}>
                <Select fieldState="focus" defaultValue="Sites & Sistemas Web">
                  <option>Sites & Sistemas Web</option>
                  <option>Apps Mobile</option>
                </Select>
              </Field>
              <Field label="Erro" error="Selecione um interesse" style={{ maxWidth: 260 }}>
                <Select fieldState="error"><option value="">Selecione</option></Select>
              </Field>
              <Field label="Desabilitado" style={{ maxWidth: 260 }}>
                <Select disabled><option>Não disponível</option></Select>
              </Field>
            </Row>
          </Canvas>

          <Sub>Textarea</Sub>
          <Canvas>
            <Row $gap="1.5rem" $wrap>
              <Field label="Padrão" hint="Opcional" style={{ maxWidth: 360 }}>
                <Textarea placeholder="Descreva sua necessidade…" />
              </Field>
              <Field label="Erro" error="Mínimo de 10 caracteres" style={{ maxWidth: 360 }}>
                <Textarea fieldState="error" defaultValue="ok" readOnly />
              </Field>
            </Row>
          </Canvas>

          <Sub>Formulário de contato completo</Sub>
          <Canvas $pad="2rem" style={{ maxWidth: 460 }}>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "1.125rem", color: "#0c1445", marginBottom: "1.5rem" }}>Entre em contato</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
              <Field label="Nome completo" required><Input placeholder="João Silva" /></Field>
              <Field label="Telefone / WhatsApp" required><Input placeholder="(11) 99999-9999" leftIcon={<Phone size={15} />} /></Field>
              <Field label="Interesse" required>
                <Select>
                  <option value="">Selecione uma opção</option>
                  <option>Sites & Sistemas Web</option>
                  <option>Apps Mobile</option>
                  <option>Softwares</option>
                  <option>Sistemas Locais</option>
                </Select>
              </Field>
              <Field label="Mensagem">
                <Textarea placeholder="Descreva o que você precisa…" style={{ minHeight: 80 }} />
              </Field>
              <Button size="lg" fullWidth leftIcon={<ArrowRight size={16} />}>Enviar mensagem</Button>
            </div>
          </Canvas>
        </DocSection>

        {/* ═══════════════════════════════════════════════════ CARDS */}
        <DocSection id="cards">
          <SectionHead>
            <SectionTitle>Cards</SectionTitle>
            <TagPill>Card · ServiceCard · FeatureCard · StepCard</TagPill>
          </SectionHead>
          <SectionDesc>
            Importar: <InlineCode>{"import { Card, ServiceCard, FeatureCard, StepCard } from '../components/ui'"}</InlineCode>
          </SectionDesc>

          <Sub>Card genérico</Sub>
          <Canvas>
            <Row $gap="1rem" $wrap>
              <Card style={{ width: 220 }}>
                <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, color: "#0c1445", marginBottom: "0.5rem" }}>Card base</p>
                <p style={{ fontSize: "0.85rem", color: "#4b5684" }}>Sem hover — para painéis e conteúdo estático.</p>
              </Card>
              <Card hover style={{ width: 220 }}>
                <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, color: "#0c1445", marginBottom: "0.5rem" }}>Card com hover</p>
                <p style={{ fontSize: "0.85rem", color: "#4b5684" }}>Passe o mouse para ver o efeito.</p>
              </Card>
            </Row>
          </Canvas>

          <Sub>ServiceCard — 4 estados (clique para selecionar)</Sub>
          <Canvas>
            <StateRow>
              {[
                { id: "web",      gradient: "linear-gradient(135deg,#2563eb,#0891b2)", accent: "#2563eb", icon: <Globe size={22} color="white" />,     title: "Sites Web",     text: "Para quem quer ter presença online." },
                { id: "mobile",   gradient: "linear-gradient(135deg,#0891b2,#0e7490)", accent: "#0891b2", icon: <Smartphone size={22} color="white" />, title: "Apps Mobile",   text: "App nativo iOS e Android." },
                { id: "software", gradient: "linear-gradient(135deg,#7c3aed,#6d28d9)", accent: "#7c3aed", icon: <Monitor size={22} color="white" />,    title: "Softwares",     text: "Programas para Mac e Windows." },
                { id: "local",    gradient: "linear-gradient(135deg,#059669,#047857)", accent: "#059669", icon: <Database size={22} color="white" />,   title: "Sist. Locais",  text: "Bancos de dados locais." },
              ].map(c => (
                <ServiceCard
                  key={c.id}
                  state={serviceCard === c.id ? "selected" : "default"}
                  accentColor={c.accent}
                  icon={c.icon}
                  iconGradient={c.gradient}
                  title={c.title}
                  text={c.text}
                  onClick={() => setServiceCard(c.id)}
                  style={{ width: 210 }}
                />
              ))}
            </StateRow>
          </Canvas>

          <Sub>FeatureCard</Sub>
          <Canvas>
            <Row $gap="1rem" $wrap>
              {[
                { icon: <Zap size={18} color="white" />, title: "Rápido e Seguro", text: "SSL incluso e hospedagem em nuvem com uptime de 99.9%." },
                { icon: <Shield size={18} color="white" />, title: "Protegido", text: "Backup diário automático com recuperação em 1 clique." },
                { icon: <Bell size={18} color="white" />, title: "Notificações", text: "Avise clientes por e-mail ou push no celular." },
              ].map(c => (
                <FeatureCard key={c.title} icon={c.icon} title={c.title} text={c.text} style={{ flex: 1, minWidth: 220 }} />
              ))}
            </Row>
          </Canvas>

          <Sub>StepCard — clique para ativar</Sub>
          <Canvas>
            <Row $gap="0.875rem" $wrap>
              {[
                { n: 0, step: "Passo 01", title: "Conversa inicial", text: "Conta pra gente o que você precisa, sem termos técnicos." },
                { n: 1, step: "Passo 02", title: "Proposta clara",   text: "Preço fixo, prazo definido, sem surpresas no final." },
                { n: 2, step: "Passo 03", title: "Desenvolvimento",  text: "Acompanhe cada etapa — você vai ver o progresso." },
                { n: 3, step: "Passo 04", title: "Entrega e suporte",text: "Recebe pronto e pode contar com a gente depois." },
              ].map(s => (
                <StepCard
                  key={s.n}
                  step={s.step}
                  title={s.title}
                  text={s.text}
                  state={activeStep === s.n ? "active" : "default"}
                  onClick={() => setActiveStep(s.n)}
                  style={{ flex: 1, minWidth: 180 }}
                />
              ))}
            </Row>
          </Canvas>
        </DocSection>

        {/* ═══════════════════════════════════════════════════ SELEÇÕES */}
        <DocSection id="selecoes">
          <SectionHead>
            <SectionTitle>Seleções e Controles</SectionTitle>
            <TagPill>Toggle · Checkbox · RadioGroup · ProgressBar · QuizOptionGroup</TagPill>
          </SectionHead>
          <SectionDesc>
            Importar: <InlineCode>{"import { Toggle, Checkbox, RadioGroup, ProgressBar, QuizOptionGroup } from '../components/ui'"}</InlineCode>
          </SectionDesc>

          <Sub>Toggle</Sub>
          <Canvas>
            <Row $gap="2rem" $wrap $align="center">
              <Toggle checked={toggleA} onChange={setToggleA} label="Notificações" />
              <Toggle checked={toggleB} onChange={setToggleB} label="Atualizações ativas" />
              <Toggle checked={true} onChange={() => {}} label="Bloqueado" disabled />
            </Row>
          </Canvas>

          <Sub>Checkbox</Sub>
          <Canvas>
            <Row $gap="2rem" $wrap $align="center">
              <Checkbox checked={checkA} onChange={setCheckA} label="Aceito os termos" />
              <Checkbox checked={checkB} onChange={setCheckB} label="Receber novidades" />
              <Checkbox checked={false} onChange={() => {}} indeterminate label="Selecionar todos" />
              <Checkbox checked={true} onChange={() => {}} label="Bloqueado" disabled />
            </Row>
          </Canvas>

          <Sub>RadioGroup</Sub>
          <Canvas>
            <RadioGroup
              value={radioVal}
              onChange={setRadioVal}
              options={[
                { value: "web",      label: "Site / Sistema Web" },
                { value: "mobile",   label: "App Mobile" },
                { value: "software", label: "Software" },
                { value: "local",    label: "Sistema Local" },
              ]}
            />
          </Canvas>

          <Sub>ProgressBar — interativa (clique nos botões)</Sub>
          <Canvas>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <ProgressBar value={progress} max={100} height={6} showLabel labelPosition="above" />
                <Row $gap="0.5rem" style={{ marginTop: "0.875rem" }}>
                  <Button size="sm" variant="ghost" leftIcon={<Minus size={12} />} onClick={() => setProgress(Math.max(0, progress - 11))}>Voltar</Button>
                  <Button size="sm" leftIcon={<Plus size={12} />} onClick={() => setProgress(Math.min(100, progress + 11))}>Próxima</Button>
                </Row>
              </div>
              <div><p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", marginBottom: "0.5rem" }}>Fina (2px)</p>
                <ProgressBar value={progress} height={2} />
              </div>
              <div><p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", marginBottom: "0.5rem" }}>Grossa (10px)</p>
                <ProgressBar value={progress} height={10} />
              </div>
            </div>
          </Canvas>

          <Sub>StepProgress (indicador de etapas do Quiz)</Sub>
          <Canvas>
            <Row $gap="1.5rem" $wrap $align="center">
              {[0,1,2,3,4,5,6,7,8,9].map(n => (
                <StateCol $center key={n}>
                  <StateLabel>{n}/9</StateLabel>
                  <StepProgress current={n} total={9} />
                </StateCol>
              ))}
            </Row>
          </Canvas>

          <Sub>QuizOptionGroup — clique para selecionar</Sub>
          <Canvas>
            <div style={{ maxWidth: 400 }}>
              <QuizOptionGroup
                value={quizVal}
                onChange={setQuizVal}
                options={[
                  { id: "presence",   emoji: "🌐", label: "Um lugar meu na internet" },
                  { id: "management", emoji: "📋", label: "Controlar meu negócio" },
                  { id: "mobile",     emoji: "📱", label: "Um aplicativo no celular" },
                  { id: "unsure",     emoji: "🤷", label: "Ainda não sei ao certo" },
                ]}
              />
            </div>
          </Canvas>

          <Sub>QuizOptionGroup — variantes por página</Sub>
          <Canvas>
            <Row $gap="1.5rem" $wrap>
              {[
                { label: "Web (Blue)",     accent: "#2563eb", gradient: "linear-gradient(135deg,#2563eb,#1d4ed8)" },
                { label: "Mobile (Cyan)",  accent: "#0891b2", gradient: "linear-gradient(135deg,#0891b2,#0e7490)" },
                { label: "Software (Purple)", accent: "#7c3aed", gradient: "linear-gradient(135deg,#7c3aed,#6d28d9)" },
                { label: "Local (Green)",  accent: "#059669", gradient: "linear-gradient(135deg,#059669,#047857)" },
              ].map(o => (
                <div key={o.label} style={{ flex: 1, minWidth: 200 }}>
                  <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", marginBottom: "0.75rem" }}>{o.label}</p>
                  <QuizOptionGroup
                    value="opcao1"
                    onChange={() => {}}
                    options={[{ id: "opcao1", emoji: "✓", label: "Opção selecionada" }, { id: "opcao2", emoji: "○", label: "Outra opção" }]}
                    accentColor={o.accent}
                    accentGradient={o.gradient}
                  />
                </div>
              ))}
            </Row>
          </Canvas>
        </DocSection>

        {/* ═══════════════════════════════════════════════════ NAVEGAÇÃO */}
        <DocSection id="navegacao">
          <SectionHead>
            <SectionTitle>Navegação</SectionTitle>
            <TagPill>Navbar atoms · Accordion · FloatingBtn · Avatar</TagPill>
          </SectionHead>

          <Sub>Navbar — modo simples</Sub>
          <NavDemo>
            <NavLogoBox><Code2 size={16} color="white" /></NavLogoBox>
            <NavBrand>OG Labs</NavBrand>
            {["Início","Sites & Web","Mobile","Softwares","Locais"].map((l, i) => (
              <NavLinkBtn key={l} $active={i === 0}>{l}</NavLinkBtn>
            ))}
            <Button size="sm" variant="amber" style={{ borderRadius: 8 }}>🧮 Orçamento</Button>
          </NavDemo>

          <Sub>Navbar — modo dropdown (logo verde)</Sub>
          <NavDemo $gradient="linear-gradient(160deg,#0c1445,#1e3a8a)">
            <NavLogoBox $dev><Code2 size={16} color="#41ff24" /></NavLogoBox>
            <NavBrand>OG Labs</NavBrand>
            {["Início ▾","Sites ▾","Mobile ▾","Software ▾","Locais ▾"].map((l, i) => (
              <NavLinkBtn key={l} $active={i === 2} style={i === 2 ? { color: "#41ff24" } : undefined}>{l}</NavLinkBtn>
            ))}
          </NavDemo>

          <Sub>Dropdown em foco</Sub>
          <Canvas $dark $pad="1.5rem">
            <Row $gap="1.5rem">
              <div>
                <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Mobile</p>
                <DropdownBox>
                  <DropdownItem $active><Smartphone size={13} /> App Nativo (iOS/Android)</DropdownItem>
                  <DropdownItem>Perfis de Usuário</DropdownItem>
                  <DropdownItem>Exemplos de Uso</DropdownItem>
                </DropdownBox>
              </div>
              <div>
                <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "0.5rem" }}>Sites & Web</p>
                <DropdownBox>
                  <DropdownItem $active><Globe size={13} /> Site Institucional</DropdownItem>
                  <DropdownItem><Shield size={13} /> Sistema com Login</DropdownItem>
                  <DropdownItem><Database size={13} /> Recursos Extras</DropdownItem>
                </DropdownBox>
              </div>
            </Row>
          </Canvas>

          <Sub>Menu mobile — accordion (clique para expandir)</Sub>
          <Canvas $dark $pad="1.25rem">
            <div style={{ maxWidth: 360 }}>
              {NAV_ITEMS.map(m => (
                <AccordionBlock key={m.id} $gradient={m.gradient}>
                  <AccordionHeader onClick={() => toggleAccordion(m.id)}>
                    {m.label}
                    {accordions[m.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </AccordionHeader>
                  <AccordionLinks $open={!!accordions[m.id]}>
                    {m.links.map(l => <AccordionLink key={l} href="#">{l}</AccordionLink>)}
                  </AccordionLinks>
                </AccordionBlock>
              ))}
              <PillButton style={{ width: "100%", justifyContent: "center", marginTop: "1rem" }}>
                🧮 Faça um Orçamento
              </PillButton>
            </div>
          </Canvas>

          <Sub>FloatingQuizBtn — animação de pulso</Sub>
          <Canvas $bg="#e8edf7">
            <Row $gap="2rem" $wrap $align="center">
              <StateCol><StateLabel>Com pulso (loop 3s)</StateLabel><FloatingBtnDemo $pulse>🧮 Faça um Orçamento</FloatingBtnDemo></StateCol>
              <StateCol><StateLabel>Sem pulso</StateLabel><FloatingBtnDemo>🧮 Faça um Orçamento</FloatingBtnDemo></StateCol>
            </Row>
          </Canvas>

          <Sub>Avatar — tamanhos e status</Sub>
          <Canvas>
            <Row $gap="1.5rem" $wrap $align="center">
              <Avatar initials="JK" size="xl" gradient="linear-gradient(135deg,#2563eb,#0891b2)" online={true} />
              <Avatar initials="MS" size="lg" gradient="linear-gradient(135deg,#7c3aed,#5b21b6)" online="away" />
              <Avatar initials="RT" size="md" gradient="linear-gradient(135deg,#059669,#047857)" online={false} />
              <Avatar initials="CL" size="sm" gradient="linear-gradient(135deg,#f59e0b,#d97706)" />
              <Avatar initials="OG" size="xs" gradient="linear-gradient(135deg,#dc2626,#b91c1c)" />
            </Row>
          </Canvas>

          <Sub>AvatarGroup</Sub>
          <Canvas>
            <AvatarGroup
              size="md"
              avatars={[
                { initials: "JK", gradient: "linear-gradient(135deg,#2563eb,#0891b2)" },
                { initials: "MS", gradient: "linear-gradient(135deg,#7c3aed,#5b21b6)" },
                { initials: "RT", gradient: "linear-gradient(135deg,#059669,#047857)" },
                { initials: "CL", gradient: "linear-gradient(135deg,#f59e0b,#d97706)" },
                { initials: "AA", gradient: "linear-gradient(135deg,#0891b2,#0e7490)" },
                { initials: "BB", gradient: "linear-gradient(135deg,#dc2626,#b91c1c)" },
              ]}
              max={4}
            />
          </Canvas>
        </DocSection>

        {/* ═══════════════════════════════════════════════════ FEEDBACK */}
        <DocSection id="feedback">
          <SectionHead>
            <SectionTitle>Alertas e Feedback</SectionTitle>
            <TagPill>Alert · Toast · EmptyState</TagPill>
          </SectionHead>
          <SectionDesc>
            Importar: <InlineCode>{"import { Alert, Toast, EmptyState } from '../components/ui'"}</InlineCode>
          </SectionDesc>

          <Sub>Alert inline — 4 tipos</Sub>
          <Canvas>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <Alert type="info" title="Informação">Seu orçamento foi gerado. Entre em contato para confirmar o projeto.</Alert>
              <Alert type="success" title="Mensagem enviada!">Recebemos seu contato e entraremos em até 24 horas no WhatsApp.</Alert>
              <Alert type="warning" title="Atenção">Preencha todos os campos obrigatórios antes de continuar.</Alert>
              <Alert type="error" title="Erro ao enviar" onClose={() => {}}>Não foi possível enviar. Tente novamente ou ligue para (11) 99999-9999.</Alert>
            </div>
          </Canvas>

          <Sub>Toast — notificações flutuantes</Sub>
          <Canvas $bg="#e8edf7" $pad="2rem">
            <Row $gap="1rem" $wrap>
              <Toast type="success" onClose={() => {}}>Orçamento enviado com sucesso!</Toast>
              <Toast type="error" onClose={() => {}}>Erro ao processar. Tente novamente.</Toast>
              <Toast type="info" onClose={() => {}}>Atualizando em segundo plano…</Toast>
            </Row>
          </Canvas>

          <Sub>EmptyState</Sub>
          <Canvas>
            <EmptyState
              icon={<MessageSquare size={30} />}
              title="Nenhuma mensagem ainda"
              text="Quando você enviar um orçamento, ele vai aparecer aqui."
              action={<Button variant="amber">🧮 Faça seu primeiro orçamento</Button>}
            />
          </Canvas>
        </DocSection>

        {/* ═══════════════════════════════════════════════════ TABELA */}
        <DocSection id="tabela">
          <SectionHead>
            <SectionTitle>Tabela de Dados</SectionTitle>
            <TagPill>Table · Thead · Tbody · Th · Td · Tr</TagPill>
          </SectionHead>
          <SectionDesc>
            Importar: <InlineCode>{"import { Table, Thead, Tbody, Th, Td, Tr } from '../components/ui'"}</InlineCode>
          </SectionDesc>

          <Table>
            <Thead>
              <tr><Th>Cliente</Th><Th>Solução</Th><Th>Status</Th><Th>Valor</Th><Th>Ação</Th></tr>
            </Thead>
            <Tbody>
              <Tr selected>
                <Td><Row $align="center" $gap="0.625rem"><Avatar initials="JK" size="sm" /><strong>João K.</strong></Row></Td>
                <Td><BadgeWeb>Sites Web</BadgeWeb></Td>
                <Td><Badge variant="amber" dot>Em Proposta</Badge></Td>
                <Td mono>R$ 3.500</Td>
                <Td><Button size="sm" variant="ghost">Ver</Button></Td>
              </Tr>
              <Tr highlighted>
                <Td><Row $align="center" $gap="0.625rem"><Avatar initials="MS" size="sm" gradient="linear-gradient(135deg,#059669,#047857)" /><strong>Maria S.</strong></Row></Td>
                <Td><BadgeMobile>Mobile</BadgeMobile></Td>
                <Td><Badge variant="blue" dot>Em Progresso</Badge></Td>
                <Td mono>R$ 8.000</Td>
                <Td><Button size="sm" variant="ghost">Ver</Button></Td>
              </Tr>
              <Tr>
                <Td><Row $align="center" $gap="0.625rem"><Avatar initials="RT" size="sm" gradient="linear-gradient(135deg,#7c3aed,#5b21b6)" /><strong>Ricardo T.</strong></Row></Td>
                <Td><BadgeSoftware>Software</BadgeSoftware></Td>
                <Td><Badge variant="green" dot>Concluído</Badge></Td>
                <Td mono>R$ 12.000</Td>
                <Td><Button size="sm">Ver</Button></Td>
              </Tr>
              <Tr muted>
                <Td><Row $align="center" $gap="0.625px"><Avatar initials="CL" size="sm" gradient="linear-gradient(135deg,#f59e0b,#d97706)" /><strong>Carla L.</strong></Row></Td>
                <Td><BadgeLocal>Sistemas Locais</BadgeLocal></Td>
                <Td><Badge variant="red" dot>Cancelado</Badge></Td>
                <Td mono style={{ textDecoration: "line-through", opacity: 0.5 }}>R$ 5.000</Td>
                <Td><Button size="sm" variant="ghost">Ver</Button></Td>
              </Tr>
            </Tbody>
          </Table>
        </DocSection>

        {/* ═══════════════════════════════════════════════════ TIPOGRAFIA */}
        <DocSection id="tipografia">
          <SectionHead>
            <SectionTitle>Tipografia</SectionTitle>
            <TagPill>Plus Jakarta Sans · Inter</TagPill>
          </SectionHead>

          <Sub>Escala tipográfica</Sub>
          <ScaleTable>
            {TYPE_SCALE.map(t => (
              <ScaleRow key={t.token}>
                <ScaleToken>{t.token}</ScaleToken>
                <ScaleSize>{t.sz}</ScaleSize>
                <ScaleSample $font={`${t.font},sans-serif`} $sz={t.sz} $w={t.w}>{t.sample}</ScaleSample>
              </ScaleRow>
            ))}
          </ScaleTable>

          <Sub>SectionHeader — componente de cabeçalho de seção</Sub>
          <Canvas $pad="3rem">
            <SectionHeader
              eyebrow="Soluções Digitais Completas"
              title="O certo para o seu negócio"
              subtitle="Do site mais simples ao sistema mais completo — sempre com linguagem clara, preço justo e suporte de verdade."
            />
          </Canvas>
          <Canvas $dark $pad="3rem">
            <SectionHeader
              eyebrow="OG Labs · Soluções"
              title="Seu negócio no mundo digital"
              subtitle="Criamos sites, sistemas, aplicativos e softwares para quem quer crescer sem complicação."
              dark
            />
          </Canvas>
        </DocSection>

        {/* ═══════════════════════════════════════════════════ CORES */}
        <DocSection id="cores">
          <SectionHead>
            <SectionTitle>Cores</SectionTitle>
            <TagPill>Primárias · Accent · Semânticas</TagPill>
          </SectionHead>

          <Sub>Primárias — Azul Marinho</Sub>
          <ColorGrid>
            {COLORS_PRIMARY.map(c => (
              <ColorTile key={c.hex}><Swatch $c={c.hex} /><ColorInfo><ColorName>{c.name}</ColorName><ColorHex>{c.hex}</ColorHex><ColorToken>{c.token}</ColorToken></ColorInfo></ColorTile>
            ))}
          </ColorGrid>

          <Sub>Accent — Cyan e Amber</Sub>
          <ColorGrid>
            {COLORS_ACCENT.map(c => (
              <ColorTile key={c.hex}><Swatch $c={c.hex} $h={56} /><ColorInfo><ColorName>{c.name}</ColorName><ColorHex>{c.hex}</ColorHex><ColorToken>{c.token}</ColorToken></ColorInfo></ColorTile>
            ))}
          </ColorGrid>

          <Sub>Semânticas</Sub>
          <ColorGrid>
            {COLORS_SEMANTIC.map(c => (
              <ColorTile key={c.name}><Swatch $c={c.hex} $h={52} /><ColorInfo><ColorName>{c.name}</ColorName><ColorHex>{c.hex}</ColorHex><ColorToken>{c.token}</ColorToken></ColorInfo></ColorTile>
            ))}
          </ColorGrid>
        </DocSection>

        {/* ═══════════════════════════════════════════════════ GRADIENTES */}
        <DocSection id="gradientes">
          <SectionHead>
            <SectionTitle>Gradientes</SectionTitle>
            <TagPill>{GRADIENTS.length} em uso no produto</TagPill>
          </SectionHead>
          <GradGrid>
            {GRADIENTS.map(g => (
              <GradTile key={g.name}>
                <GradSwatch $g={g.g} />
                <GradInfo><GradName>{g.name}</GradName><GradUse>{g.use}</GradUse><GradVal>{g.g}</GradVal></GradInfo>
              </GradTile>
            ))}
          </GradGrid>
        </DocSection>

        {/* ═══════════════════════════════════════════════════ PADRÕES */}
        <DocSection id="padroes">
          <SectionHead>
            <SectionTitle>Padrões e Utilitários</SectionTitle>
            <TagPill>Divider · InlineCode · CodeBlock · Ícones</TagPill>
          </SectionHead>

          <Sub>Divider — variantes</Sub>
          <Canvas>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div><p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", marginBottom: "0.625rem" }}>Linha simples</p><Divider /></div>
              <div><p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", marginBottom: "0.625rem" }}>Com gradiente</p><Divider gradient /></div>
              <div><p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", marginBottom: "0.625rem" }}>Com label</p><Divider label="Ou" /></div>
            </div>
          </Canvas>

          <Sub>InlineCode e CodeBlock</Sub>
          <Canvas>
            <p style={{ fontSize: "0.875rem", color: "#4b5684", marginBottom: "1rem" }}>
              Importe com <InlineCode>{"import { Button } from '../components/ui'"}</InlineCode> e use o componente em qualquer página.
            </p>
            <CodeBlock>{`import { Button, Badge, Field, Input } from '../components/ui';

export function Contato() {
  return (
    <Field label="Nome" required>
      <Input placeholder="João Silva" />
    </Field>
    <Button variant="amber" fullWidth>
      🧮 Faça um Orçamento
    </Button>
  );
}`}</CodeBlock>
          </Canvas>

          <Sub>Ícones usados (lucide-react)</Sub>
          <Canvas>
            <Row $gap="0.875rem" $wrap>
              {ICONS.map(i => (
                <IconBox key={i.label}>
                  <IconBubble>{i.icon}</IconBubble>
                  <IconLabel>{i.label}</IconLabel>
                </IconBox>
              ))}
            </Row>
          </Canvas>

          <Sub>PageSection — wrapper de seção</Sub>
          <Canvas>
            <p style={{ fontSize: "0.85rem", color: "#4b5684", marginBottom: "1rem" }}>
              <InlineCode>{"<PageSection id=\"hero\" bg=\"#f7f9ff\">"}</InlineCode> aplica <InlineCode>padding: 5rem 1.5rem</InlineCode> com <InlineCode>max-width: 1366px</InlineCode> automático.
            </p>
            <CodeBlock>{`import { PageSection, SectionHeader } from '../components/ui';

<PageSection id="o-que-fazemos">
  <SectionHeader
    eyebrow="Nossas soluções"
    title="O certo para o seu negócio"
    subtitle="Sempre com linguagem clara."
  />
  {/* conteúdo da seção */}
</PageSection>`}</CodeBlock>
          </Canvas>
        </DocSection>

      </Body>
    </PageWrap>
  );
}
