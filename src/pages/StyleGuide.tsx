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
import { siteContact } from "../content/site";

// ─── Animations ──────────────────────────────────────────────────────────────────

const pulse = keyframes`
  0%,100% { box-shadow: var(--number-zero) var(--number-zero) var(--number-zero) var(--number-zero) var(--alpha-amber-50); }
  50%      { box-shadow: var(--number-zero) var(--number-zero) var(--number-zero) var(--value-12px) transparent; }
`;

// ─── StyleGuide shell ─────────────────────────────────────────────────────────────

const PageWrap = styled.div`
  background: var(--color-background-guide);
  min-height: var(--value-100vh);
  padding-bottom: var(--value-8rem);
  font-family: var(--font-body);
`;

const Header = styled.div`
  background: linear-gradient(var(--value-160deg), var(--color-navy-950) var(--percent-0), var(--color-blue-900) var(--percent-full));
  padding: var(--value-4rem) var(--value-2rem) var(--number-zero);
`;

const HeaderInner = styled.div`
  // max-width: var(--value-1366px);
  margin: var(--number-zero) auto;
  padding-bottom: var(--value-2rem);
`;

const Eyebrow = styled.p`
  font-size: var(--value-0-72rem);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--value-0-12em);
  text-transform: uppercase;
  color: var(--color-blue-400);
  margin-bottom: var(--value-0-75rem);
`;

const PageTitle = styled.h1`
  font-family: var(--font-display);
  font-size: var(--value-2-5rem);
  font-weight: var(--font-weight-extrabold);
  color: var(--color-surface);
  letter-spacing: var(--value-neg-0-025em);
  margin-bottom: var(--value-0-5rem);
`;

const PageSub = styled.p`
  font-size: var(--value-1rem);
  color: var(--alpha-white-50);
  margin-bottom: var(--value-2rem);
`;

const NavTabs = styled.div`
  background: var(--alpha-black-25);
  border-top: var(--value-1px) solid var(--alpha-white-07);
  overflow-x: auto;
  &::-webkit-scrollbar { height: var(--space-0); }
`;

const NavTabsInner = styled.div`
  // max-width: var(--value-1366px);
  margin: var(--number-zero) auto;
  display: flex;
  padding: var(--space-0) var(--value-2rem);
  gap: var(--value-0-25rem);
`;

const NavTab = styled.a`
  font-size: var(--value-0-8rem);
  font-weight: var(--font-weight-semibold);
  color: var(--alpha-white-45);
  padding: var(--value-0-875rem) var(--value-1rem);
  border-bottom: var(--value-2px) solid transparent;
  text-decoration: none;
  white-space: nowrap;
  transition: color var(--value-0-2s), border-color var(--value-0-2s);
  cursor: pointer;
  &:hover { color: var(--alpha-white-85); border-color: var(--alpha-white-30); }
`;

const Body = styled.div`
  // max-width: var(--value-1366px);
  margin: var(--number-zero) auto;
  padding: var(--value-3rem) var(--value-2rem) var(--number-zero);
  display: flex;
  flex-direction: column;
  gap: var(--value-5rem);
`;

// ─── Demo helpers ─────────────────────────────────────────────────────────────────

const DocSection = styled.section``;

const SectionHead = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--value-1rem);
  margin-bottom: var(--value-0-75rem);
  padding-bottom: var(--value-1rem);
  border-bottom: var(--value-2px) solid var(--alpha-blue-12);
`;

const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-size: var(--value-1-375rem);
  font-weight: var(--font-weight-extrabold);
  color: var(--color-navy-950);
  letter-spacing: var(--value-neg-0-02em);
`;

const TagPill = styled.span`
  font-size: var(--value-0-68rem);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--value-0-06em);
  text-transform: uppercase;
  background: var(--color-blue-100);
  color: var(--color-blue-800);
  padding: var(--value-0-2rem) var(--value-0-6rem);
  border-radius: var(--value-100px);
`;

const Sub = styled.h3`
  font-family: var(--font-display);
  font-size: var(--value-0-82rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--value-0-07em);
  margin: var(--value-2-5rem) var(--number-zero) var(--value-1-25rem);
`;

const SectionDesc = styled.p`
  font-size: var(--value-0-875rem);
  color: var(--color-text-muted);
  line-height: var(--line-height-reading);
  margin-bottom: var(--value-2rem);
  margin-top: var(--value-0-5rem);
`;

const Canvas = styled.div<{ $dark?: boolean; $pad?: string; $bg?: string }>`
  background: ${p => p.$dark ? 'var(--color-navy-950)' : (p.$bg ?? 'var(--color-surface)')};
  border-radius: var(--value-16px);
  border: var(--value-1px) solid ${p => p.$dark ? 'var(--alpha-white-07)' : 'var(--alpha-blue-08)'};
  padding: ${p => p.$pad ?? 'var(--value-2rem)'};
  margin-bottom: var(--value-0-75rem);
`;

const StateRow = styled.div<{ $align?: string }>`
  display: flex;
  flex-wrap: wrap;
  gap: var(--value-1-5rem);
  align-items: ${p => p.$align ?? "flex-end"};
`;

const StateCol = styled.div<{ $center?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${p => p.$center ? "center" : "flex-start"};
  gap: var(--value-0-5rem);
`;

const StateLabel = styled.span<{ $dark?: boolean }>`
  font-size: var(--value-0-66rem);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--value-0-07em);
  color: ${p => p.$dark ? "var(--alpha-white-35)" : "var(--color-gray-400)"};
`;

const Row = styled.div<{ $gap?: string; $wrap?: boolean; $align?: string }>`
  display: flex;
  flex-wrap: ${p => p.$wrap !== false ? 'wrap' : 'nowrap'};
  gap: ${p => p.$gap || 'var(--value-1rem)'};
  align-items: ${p => p.$align || 'flex-start'};
`;

// ─── Navbar atoms (only used in StyleGuide demo) ──────────────────────────────────

const NavDemo = styled.div<{ $gradient?: string }>`
  display: flex;
  align-items: center;
  gap: var(--value-0-5rem);
  background: ${p => p.$gradient || "linear-gradient(var(--value-160deg),var(--color-navy-950),var(--color-navy-900))"};
  padding: var(--value-0-75rem) var(--value-1-25rem);
  border-radius: var(--value-12px);
  flex-wrap: wrap;
`;

const NavBrand = styled.p`
  font-family: var(--font-display);
  font-weight: var(--font-weight-extrabold);
  font-size: var(--value-1rem);
  color: var(--color-surface);
  margin-right: auto;
`;

const NavLogoBox = styled.div<{ $dev?: boolean }>`
  width: var(--value-32px);
  height: var(--value-32px);
  border-radius: var(--value-9px);
  background: ${p => p.$dev
    ? "linear-gradient(var(--value-135deg),var(--alpha-dev-primary),var(--alpha-dev-secondary))"
    : "linear-gradient(var(--value-135deg),var(--color-blue-600),var(--color-cyan-600))"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const NavLinkBtn = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: var(--value-0-3rem);
  background: ${p => p.$active ? "var(--alpha-white-12)" : "transparent"};
  color: ${p => p.$active ? "var(--color-surface)" : "var(--alpha-white-60)"};
  border: none;
  border-radius: var(--value-7px);
  padding: var(--value-0-375rem) var(--value-0-625rem);
  font-size: var(--value-0-82rem);
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  font-family: var(--font-body);
  transition: all var(--value-0-18s);
  &:hover { background: var(--alpha-white-08); color: var(--alpha-white-90); }
`;

const DropdownBox = styled.div`
  background: var(--color-navy-950);
  border: var(--value-1px) solid var(--alpha-white-10);
  border-radius: var(--value-12px);
  padding: var(--value-0-5rem);
  min-width: var(--value-200px);
  box-shadow: var(--number-zero) var(--value-16px) var(--value-48px) var(--alpha-black-40);
`;

const DropdownItem = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: var(--value-0-5rem);
  width: var(--percent-full);
  padding: var(--value-0-625rem) var(--value-0-875rem);
  border-radius: var(--value-8px);
  background: ${p => p.$active ? "var(--alpha-white-08)" : "transparent"};
  color: ${p => p.$active ? "var(--color-surface)" : "var(--alpha-white-70)"};
  border: none;
  font-size: var(--value-0-82rem);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  text-align: left;
  font-family: var(--font-body);
`;

const AccordionBlock = styled.div<{ $gradient: string }>`
  background: linear-gradient(${p => p.$gradient});
  border-radius: var(--value-12px);
  overflow: hidden;
  margin-bottom: var(--value-0-4rem);
`;

const AccordionHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: var(--percent-full);
  padding: var(--value-0-875rem) var(--value-1-125rem);
  background: transparent;
  border: none;
  color: var(--color-surface);
  font-family: var(--font-display);
  font-size: var(--value-0-9rem);
  font-weight: var(--font-weight-bold);
  cursor: pointer;
`;

const AccordionLinks = styled.div<{ $open: boolean }>`
  max-height: ${p => p.$open ? "var(--value-200px)" : "var(--space-0)"};
  overflow: hidden;
  transition: max-height var(--value-0-3s) ease;
  padding: ${p => p.$open ? "var(--number-zero) var(--value-1-125rem) var(--value-0-875rem)" : "var(--number-zero) var(--value-1-125rem)"};
  display: flex;
  flex-direction: column;
  gap: var(--value-0-25rem);
`;

const AccordionLink = styled.a`
  color: var(--alpha-white-75);
  font-size: var(--value-0-82rem);
  text-decoration: none;
  padding: var(--value-0-3rem) var(--number-zero);
  &:hover { color: var(--color-surface); }
`;

const FloatingBtnDemo = styled.button<{ $pulse?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: var(--value-0-6rem);
  padding: var(--value-0-875rem) var(--value-1-375rem);
  background: linear-gradient(var(--value-135deg), var(--color-amber-500), var(--color-amber-600));
  color: var(--color-surface);
  font-family: var(--font-display);
  font-weight: var(--font-weight-bold);
  font-size: var(--value-0-9rem);
  border: none;
  border-radius: var(--value-100px);
  cursor: pointer;
  box-shadow: var(--number-zero) var(--value-4px) var(--value-16px) var(--alpha-amber-35);
  ${p => p.$pulse && css`animation: ${pulse} var(--value-3s) ease-in-out infinite;`}
`;

// ─── Color tiles ─────────────────────────────────────────────────────────────────

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--value-150px), var(--value-1fr)));
  gap: var(--value-0-875rem);
`;

const ColorTile = styled.div`
  border-radius: var(--value-12px);
  overflow: hidden;
  border: var(--value-1px) solid var(--alpha-blue-08);
  background: var(--color-surface);
`;

const Swatch = styled.div<{ $c: string; $h?: string }>`
  background: ${p => p.$c};
  height: ${p => p.$h ?? "var(--size-navbar)"};
`;

const ColorInfo = styled.div`padding: var(--value-0-625rem) var(--value-0-875rem);`;
const ColorName = styled.p`font-family: var(--font-display); font-size: var(--value-0-78rem); font-weight: var(--font-weight-bold); color: var(--color-navy-950); margin-bottom: var(--value-0-15rem);`;
const ColorHex = styled.p`font-size: var(--value-0-68rem); color: var(--color-gray-500);`;
const ColorToken = styled.p`font-size: var(--value-0-65rem); color: var(--color-blue-600); font-weight: var(--font-weight-semibold); margin-top: var(--value-0-2rem); font-family: var(--font-mono);`;

// ─── Gradient tiles ───────────────────────────────────────────────────────────────

const GradGrid = styled.div`display: grid; grid-template-columns: repeat(auto-fill, minmax(var(--value-190px), var(--value-1fr))); gap: var(--value-0-875rem);`;

const GradTile = styled.div`border-radius: var(--value-12px); overflow: hidden; border: var(--value-1px) solid var(--alpha-blue-08);`;

const GradSwatch = styled.div<{ $g: string }>`background: ${p => p.$g}; height: var(--value-88px);`;

const GradInfo = styled.div`background: var(--color-surface); padding: var(--value-0-75rem) var(--value-1rem);`;
const GradName = styled.p`font-family: var(--font-display); font-size: var(--value-0-78rem); font-weight: var(--font-weight-bold); color: var(--color-navy-950); margin-bottom: var(--value-0-25rem);`;
const GradUse = styled.p`font-size: var(--value-0-7rem); color: var(--color-blue-600); font-weight: var(--font-weight-semibold); margin-bottom: var(--value-0-25rem);`;
const GradVal = styled.p`font-size: var(--value-0-62rem); color: var(--color-gray-400); word-break: break-all; font-family: var(--font-mono);`;

// ─── Type scale ───────────────────────────────────────────────────────────────────

const ScaleTable = styled.div`
  background: var(--color-surface);
  border-radius: var(--value-14px);
  border: var(--value-1px) solid var(--alpha-blue-08);
  overflow: hidden;
`;

const ScaleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--value-1-25rem);
  padding: var(--value-0-875rem) var(--value-1-5rem);
  border-bottom: var(--value-1px) solid var(--color-surface-muted);
  flex-wrap: wrap;
  &:last-child { border-bottom: none; }
  &:hover { background: var(--color-background-alt); }
`;

const ScaleToken = styled.span`font-size: var(--value-0-68rem); font-weight: var(--font-weight-bold); color: var(--color-gray-400); text-transform: uppercase; letter-spacing: var(--value-0-07em); width: var(--value-76px); flex-shrink: var(--number-zero);`;
const ScaleSize = styled.span`font-size: var(--value-0-68rem); color: var(--color-blue-600); font-weight: var(--font-weight-semibold); font-family: var(--font-mono); width: var(--value-80px); flex-shrink: var(--number-zero);`;
const ScaleSample = styled.p<{ $font: string; $sz: string; $w: number }>`
  font-family: ${p => p.$font};
  font-size: ${p => p.$sz};
  font-weight: ${p => p.$w};
  color: var(--color-navy-950);
  line-height: var(--line-height-snug);
  margin: var(--space-0);
`;

// ─── Icon grid ────────────────────────────────────────────────────────────────────

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--value-0-4rem);
  min-width: var(--value-62px);
`;

const IconBubble = styled.div`
  width: var(--value-44px);
  height: var(--value-44px);
  border-radius: var(--value-12px);
  background: var(--color-blue-50);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-blue-700);
`;

const IconLabel = styled.span`font-size: var(--value-0-6rem); color: var(--color-gray-400); font-weight: var(--font-weight-bold); text-align: center;`;

// ─── Data ────────────────────────────────────────────────────────────────────────

const COLORS_PRIMARY = [
  { name: "Navy 950",  hex: "var(--color-navy-950)", token: "--foreground" },
  { name: "Navy 900",  hex: "var(--color-navy-900)", token: "--sidebar" },
  { name: "Blue 800",  hex: "var(--color-blue-900)", token: "--secondary-foreground" },
  { name: "Blue 700",  hex: "var(--color-blue-700)", token: "--primary" },
  { name: "Blue 600",  hex: "var(--color-blue-600)", token: "--ring" },
  { name: "Blue 400",  hex: "var(--color-blue-400)", token: "--sidebar-primary" },
];

const COLORS_ACCENT = [
  { name: "Cyan 600",   hex: "var(--color-cyan-600)", token: "--accent" },
  { name: "Cyan 500",   hex: "var(--color-cyan-500)", token: "cyan-500" },
  { name: "Amber 500",  hex: "var(--color-amber-500)", token: "quiz-btn-base" },
  { name: "Amber 600",  hex: "var(--color-amber-600)", token: "quiz-btn-dark" },
];

const COLORS_SEMANTIC = [
  { name: "Success",     hex: "var(--color-green-500)", token: "green-600" },
  { name: "Success BG",  hex: "var(--color-green-100)", token: "green-100" },
  { name: "Purple",      hex: "var(--color-purple-600)", token: "violet-600" },
  { name: "Purple BG",   hex: "var(--color-purple-100)", token: "violet-100" },
  { name: "Error",       hex: "var(--color-red-600)", token: "--destructive" },
  { name: "Error BG",    hex: "var(--color-red-100)", token: "red-100" },
  { name: "Warning",     hex: "var(--color-amber-600)", token: "amber-600" },
  { name: "Warning BG",  hex: "var(--color-orange-100)", token: "orange-100" },
];

const GRADIENTS = [
  { name: "Hero Home",     g: "linear-gradient(var(--value-160deg),var(--color-navy-950) var(--percent-0),var(--color-navy-900) var(--percent-half),var(--color-navy-850) var(--percent-full))", use: "Hero da home, Navbar padrão" },
  { name: "Navy Dark",     g: "linear-gradient(var(--value-160deg),var(--color-navy-950) var(--percent-0),var(--color-blue-900) var(--percent-full))", use: "Hero Web, CTAs, AI banner" },
  { name: "Blue Action",   g: "linear-gradient(var(--value-135deg),var(--color-blue-600),var(--color-blue-700))", use: "Botão Primary, Navbar ativo" },
  { name: "Blue-Cyan",     g: "linear-gradient(var(--value-90deg),var(--color-blue-600),var(--color-cyan-600))", use: "ProgressBar, gráficos" },
  { name: "Cyan Action",   g: "linear-gradient(var(--value-135deg),var(--color-cyan-600),var(--color-cyan-700))", use: "Botão Mobile, card Mobile" },
  { name: "Amber Quiz",    g: "linear-gradient(var(--value-135deg),var(--color-amber-500),var(--color-amber-600))", use: "Botão Orçamento (3 pontos de entrada)" },
  { name: "Green WA",      g: "linear-gradient(var(--value-135deg),var(--color-green-600),var(--color-green-800))", use: "Botão WhatsApp" },
  { name: "Green System",  g: "linear-gradient(var(--value-135deg),var(--color-green-500),var(--color-green-700))", use: "Cards sistemas locais" },
  { name: "Purple",        g: "linear-gradient(var(--value-135deg),var(--color-purple-600),var(--color-purple-700))", use: "Cards software" },
  { name: "Logo Grad",     g: "linear-gradient(var(--value-135deg),var(--color-blue-600),var(--color-cyan-600))", use: "LogoIcon + BrandIcon footer" },
];

const TYPE_SCALE = [
  { token: "Display", sz: "clamp(var(--value-2-2rem),var(--value-6vw),var(--value-4rem))", font: "'Plus Jakarta Sans'", w: 800, sample: "Seu negócio no digital" },
  { token: "H1",      sz: "clamp(var(--value-2rem),var(--value-5vw),var(--value-3-5rem))", font: "'Plus Jakarta Sans'", w: 800, sample: "Sites e Sistemas Web" },
  { token: "H2",      sz: "clamp(var(--value-1-6rem),var(--value-3vw),var(--value-2-25rem))", font: "'Plus Jakarta Sans'", w: 800, sample: "Qual é o certo para você?" },
  { token: "H3 Card", sz: "var(--value-1-05rem)", font: "'Plus Jakarta Sans'", w: 700, sample: "Sistema com Login" },
  { token: "Body L",  sz: "var(--value-1-125rem)", font: "'Inter'", w: 400, sample: "Explicamos tudo sem termos técnicos." },
  { token: "Body",    sz: "var(--value-1rem)", font: "'Inter'", w: 400, sample: "Cada negócio é único — oferecemos desde sites simples." },
  { token: "Body S",  sz: "var(--value-0-9rem)", font: "'Inter'", w: 400, sample: "Aparece no Google, funciona no celular." },
  { token: "Caption", sz: "var(--value-0-78rem)", font: "'Inter'", w: 400, sample: "Login individual · Backup automático · Segurança" },
  { token: "Label",   sz: "var(--value-0-72rem)", font: "'Inter'", w: 700, sample: "SOLUÇÕES DIGITAIS · O QUE FAZEMOS" },
];

const ICONS = [
  { icon: <Globe size="var(--size-20)" />,          label: "Globe" },
  { icon: <Smartphone size="var(--size-20)" />,     label: "Smartphone" },
  { icon: <Monitor size="var(--size-20)" />,        label: "Monitor" },
  { icon: <Database size="var(--size-20)" />,       label: "Database" },
  { icon: <Shield size="var(--size-20)" />,         label: "Shield" },
  { icon: <Zap size="var(--size-20)" />,            label: "Zap" },
  { icon: <Bell size="var(--size-20)" />,           label: "Bell" },
  { icon: <MessageSquare size="var(--size-20)" />,  label: "MessageSquare" },
  { icon: <Settings size="var(--size-20)" />,       label: "Settings" },
  { icon: <User size="var(--size-20)" />,           label: "User" },
  { icon: <LogOut size="var(--size-20)" />,         label: "LogOut" },
  { icon: <Menu size="var(--size-20)" />,           label: "Menu" },
  { icon: <ArrowRight size="var(--size-20)" />,     label: "ArrowRight" },
  { icon: <Check size="var(--size-20)" />,          label: "Check" },
  { icon: <X size="var(--size-20)" />,              label: "X" },
  { icon: <Search size="var(--size-20)" />,         label: "Search" },
  { icon: <Upload size="var(--size-20)" />,         label: "Upload" },
  { icon: <Star size="var(--size-20)" />,           label: "Star" },
  { icon: <Code2 size="var(--size-20)" />,          label: "Code2 (Logo)" },
  { icon: <Mail size="var(--size-20)" />,           label: "Mail" },
  { icon: <Phone size="var(--size-20)" />,          label: "Phone" },
];

const NAV_ITEMS = [
  { id: "home",            label: "Início",             gradient: "var(--value-160deg), var(--color-navy-950) var(--percent-0), var(--color-navy-900) var(--percent-half), var(--color-navy-850) var(--percent-full)", links: ["Soluções Digitais","O que fazemos","Recursos","Como funciona"] },
  { id: "web",             label: "Sites & Web",        gradient: "var(--value-160deg), var(--color-navy-950) var(--percent-0), var(--color-blue-900) var(--percent-full)",              links: ["Hero","Tipos de site","Recursos extras"] },
  { id: "mobile",          label: "Apps Mobile",        gradient: "var(--value-160deg), var(--color-navy-850) var(--percent-0), var(--color-cyan-700) var(--percent-full)",              links: ["Hero","Plataformas","Perfis","Exemplos"] },
  { id: "software",        label: "Softwares",          gradient: "var(--value-160deg), var(--color-purple-900) var(--percent-0), var(--color-purple-800) var(--percent-full)",              links: ["Hero","Tipos","Recursos"] },
  { id: "sistemas-locais", label: "Sistemas Locais",    gradient: "var(--value-160deg), var(--color-navy-local) var(--percent-0), var(--color-green-500) var(--percent-full)",              links: ["Hero","Sistemas","Controle de Acesso"] },
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
              <StateCol><StateLabel $dark>White em fundo escuro</StateLabel><Button variant="white"><ArrowRight size="var(--size-14)" /> Começar</Button></StateCol>
              <StateCol><StateLabel $dark>Amber em fundo escuro</StateLabel><Button variant="amber">🧮 Orçamento</Button></StateCol>
              <StateCol><StateLabel $dark>Ghost em fundo escuro</StateLabel><Button variant="ghost" style={{ color: "var(--alpha-white-70)", borderColor: "var(--alpha-white-20)" }}>Ver mais</Button></StateCol>
            </StateRow>
          </Canvas>

          <Sub>Estados</Sub>
          <Canvas>
            <StateRow>
              <StateCol><StateLabel>Default</StateLabel><Button>Continuar</Button></StateCol>
              <StateCol><StateLabel>Disabled</StateLabel><Button disabled>Continuar</Button></StateCol>
              <StateCol><StateLabel>Loading</StateLabel><Button loading>Continuar</Button></StateCol>
              <StateCol><StateLabel>Com leftIcon</StateLabel><Button leftIcon={<ArrowRight size="var(--size-14)" />}>Próxima</Button></StateCol>
              <StateCol><StateLabel>Com rightIcon</StateLabel><Button rightIcon={<ArrowRight size="var(--size-14)" />}>Próxima</Button></StateCol>
            </StateRow>
          </Canvas>

          <Sub>Tamanhos</Sub>
          <Canvas>
            <StateRow $align="center">
              <StateCol><StateLabel>Large</StateLabel><Button size="lg" leftIcon={<ArrowRight size="var(--size-16)" />}>Começar agora</Button></StateCol>
              <StateCol><StateLabel>Medium (padrão)</StateLabel><Button size="md" leftIcon={<ArrowRight size="var(--size-14)" />}>Continuar</Button></StateCol>
              <StateCol><StateLabel>Small</StateLabel><Button size="sm" leftIcon={<ArrowRight size="var(--size-12)" />}>Ver mais</Button></StateCol>
            </StateRow>
          </Canvas>

          <Sub>PillButton (FloatingQuizBtn) e fullWidth</Sub>
          <Canvas>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--value-0-875rem)", maxWidth: "var(--size-glow-small)" }}>
              <PillButton onClick={() => {}}>🧮 Faça um Orçamento Grátis</PillButton>
              <Button variant="primary" fullWidth leftIcon={<Mail size="var(--size-15)" />}>Enviar mensagem</Button>
              <Button variant="secondary" fullWidth leftIcon={<Phone size="var(--size-15)" />}>Ligar agora</Button>
            </div>
          </Canvas>

          <Sub>ButtonGroup</Sub>
          <Canvas>
            <ButtonGroup>
              <Button leftIcon={<ArrowRight size="var(--size-14)" />}>Quero começar</Button>
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
            <Row $gap="var(--value-0-625rem)" $wrap $align="center">
              {(["blue","cyan","purple","green","amber","red","gray","outline"] as const).map(v => (
                <Badge key={v} variant={v}>{v}</Badge>
              ))}
            </Row>
          </Canvas>

          <Sub>Com ponto de status</Sub>
          <Canvas>
            <Row $gap="var(--value-0-75rem)" $wrap $align="center">
              <Badge variant="green" dot>Online</Badge>
              <Badge variant="amber" dot>Aguardando</Badge>
              <Badge variant="red" dot>Offline</Badge>
              <Badge variant="gray" dot>Inativo</Badge>
            </Row>
          </Canvas>

          <Sub>Aliases semânticos por página</Sub>
          <Canvas>
            <Row $gap="var(--value-0-75rem)" $wrap $align="center">
              <BadgeWeb>Sites Web</BadgeWeb>
              <BadgeMobile>Apps Mobile</BadgeMobile>
              <BadgeSoftware>Softwares</BadgeSoftware>
              <BadgeLocal>Sistemas Locais</BadgeLocal>
              <BadgePriceTag>Em breve</BadgePriceTag>
            </Row>
          </Canvas>

          <Sub>Tamanhos</Sub>
          <Canvas>
            <Row $gap="var(--value-1rem)" $wrap $align="center">
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
            <Row $gap="var(--value-1-5rem)" $wrap>
              <Field label="Padrão" hint="Campo obrigatório" style={{ maxWidth: "var(--size-260)" }}>
                <Input placeholder="Seu nome" />
              </Field>
              <Field label="Em foco" style={{ maxWidth: "var(--size-260)" }}>
                <Input fieldState="focus" defaultValue="João Silva" readOnly />
              </Field>
              <Field label="Sucesso" success="Nome válido ✓" style={{ maxWidth: "var(--size-260)" }}>
                <Input fieldState="success" defaultValue="João Silva" readOnly rightIcon={<Check size="var(--size-15)" color="var(--color-green-600)" />} />
              </Field>
              <Field label="Erro" error="Nome deve ter ao menos 2 caracteres" style={{ maxWidth: "var(--size-260)" }}>
                <Input fieldState="error" defaultValue="J" readOnly />
              </Field>
              <Field label="Desabilitado" hint="Não editável" style={{ maxWidth: "var(--size-260)" }}>
                <Input disabled defaultValue="Campo bloqueado" />
              </Field>
            </Row>
          </Canvas>

          <Sub>Input com ícones</Sub>
          <Canvas>
            <Row $gap="var(--value-1-5rem)" $wrap>
              <Field label="Com ícone esquerda" style={{ maxWidth: "var(--size-280)" }}>
                <Input placeholder="contato@empresa.com" leftIcon={<Mail size="var(--size-15)" />} />
              </Field>
              <Field label="Com ícone busca" style={{ maxWidth: "var(--size-280)" }}>
                <Input placeholder="Buscar solução…" leftIcon={<Search size="var(--size-15)" />} />
              </Field>
              <Field label="Senha" style={{ maxWidth: "var(--size-280)" }}>
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
            <Row $gap="var(--value-1-5rem)" $wrap>
              <Field label="Padrão" style={{ maxWidth: "var(--size-260)" }}>
                <Select>
                  <option value="">Selecione uma opção</option>
                  <option>Sites & Sistemas Web</option>
                  <option>Apps Mobile</option>
                  <option>Softwares</option>
                </Select>
              </Field>
              <Field label="Em foco" style={{ maxWidth: "var(--size-260)" }}>
                <Select fieldState="focus" defaultValue="Sites & Sistemas Web">
                  <option>Sites & Sistemas Web</option>
                  <option>Apps Mobile</option>
                </Select>
              </Field>
              <Field label="Erro" error="Selecione um interesse" style={{ maxWidth: "var(--size-260)" }}>
                <Select fieldState="error"><option value="">Selecione</option></Select>
              </Field>
              <Field label="Desabilitado" style={{ maxWidth: "var(--size-260)" }}>
                <Select disabled><option>Não disponível</option></Select>
              </Field>
            </Row>
          </Canvas>

          <Sub>Textarea</Sub>
          <Canvas>
            <Row $gap="var(--value-1-5rem)" $wrap>
              <Field label="Padrão" hint="Opcional" style={{ maxWidth: "var(--size-360)" }}>
                <Textarea placeholder="Descreva sua necessidade…" />
              </Field>
              <Field label="Erro" error="Mínimo de 10 caracteres" style={{ maxWidth: "var(--size-360)" }}>
                <Textarea fieldState="error" defaultValue="ok" readOnly />
              </Field>
            </Row>
          </Canvas>

          <Sub>Formulário de contato completo</Sub>
          <Canvas $pad="var(--value-2rem)" style={{ maxWidth: "var(--size-460)" }}>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: "var(--font-weight-extrabold)", fontSize: "var(--value-1-125rem)", color: "var(--color-navy-950)", marginBottom: "var(--value-1-5rem)" }}>Entre em contato</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--value-1-125rem)" }}>
              <Field label="Nome completo" required><Input placeholder="João Silva" /></Field>
              <Field label="Telefone / WhatsApp" required><Input placeholder={siteContact.phoneDisplay} leftIcon={<Phone size="var(--size-15)" />} /></Field>
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
                <Textarea placeholder="Descreva o que você precisa…" style={{ minHeight: "var(--size-80)" }} />
              </Field>
              <Button size="lg" fullWidth leftIcon={<ArrowRight size="var(--size-16)" />}>Enviar mensagem</Button>
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
            <Row $gap="var(--value-1rem)" $wrap>
              <Card style={{ width: "var(--size-220)" }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: "var(--font-weight-bold)", color: "var(--color-navy-950)", marginBottom: "var(--value-0-5rem)" }}>Card base</p>
                <p style={{ fontSize: "var(--value-0-85rem)", color: "var(--color-text-muted)" }}>Sem hover — para painéis e conteúdo estático.</p>
              </Card>
              <Card hover style={{ width: "var(--size-220)" }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: "var(--font-weight-bold)", color: "var(--color-navy-950)", marginBottom: "var(--value-0-5rem)" }}>Card com hover</p>
                <p style={{ fontSize: "var(--value-0-85rem)", color: "var(--color-text-muted)" }}>Passe o mouse para ver o efeito.</p>
              </Card>
            </Row>
          </Canvas>

          <Sub>ServiceCard — 4 estados (clique para selecionar)</Sub>
          <Canvas>
            <StateRow>
              {[
                { id: "web",      gradient: "linear-gradient(var(--value-135deg),var(--color-blue-600),var(--color-cyan-600))", accent: "var(--color-blue-600)", icon: <Globe size="var(--size-22)" color="var(--color-surface)" />,     title: "Sites Web",     text: "Para quem quer ter presença online." },
                { id: "mobile",   gradient: "linear-gradient(var(--value-135deg),var(--color-cyan-600),var(--color-cyan-700))", accent: "var(--color-cyan-600)", icon: <Smartphone size="var(--size-22)" color="var(--color-surface)" />, title: "Apps Mobile",   text: "App nativo iOS e Android." },
                { id: "software", gradient: "linear-gradient(var(--value-135deg),var(--color-purple-600),var(--color-purple-700))", accent: "var(--color-purple-600)", icon: <Monitor size="var(--size-22)" color="var(--color-surface)" />,    title: "Softwares",     text: "Programas para Mac e Windows." },
                { id: "local",    gradient: "linear-gradient(var(--value-135deg),var(--color-green-500),var(--color-green-700))", accent: "var(--color-green-500)", icon: <Database size="var(--size-22)" color="var(--color-surface)" />,   title: "Sist. Locais",  text: "Bancos de dados locais." },
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
                  style={{ width: "var(--size-210)" }}
                />
              ))}
            </StateRow>
          </Canvas>

          <Sub>FeatureCard</Sub>
          <Canvas>
            <Row $gap="var(--value-1rem)" $wrap>
              {[
                { icon: <Zap size="var(--size-18)" color="var(--color-surface)" />, title: "Rápido e Seguro", text: "SSL incluso e hospedagem em nuvem com uptime de 99.9%." },
                { icon: <Shield size="var(--size-18)" color="var(--color-surface)" />, title: "Protegido", text: "Backup diário automático com recuperação em 1 clique." },
                { icon: <Bell size="var(--size-18)" color="var(--color-surface)" />, title: "Notificações", text: "Avise clientes por e-mail ou push no celular." },
              ].map(c => (
                <FeatureCard key={c.title} icon={c.icon} title={c.title} text={c.text} style={{ flex: "var(--number-one)", minWidth: "var(--size-220)" }} />
              ))}
            </Row>
          </Canvas>

          <Sub>StepCard — clique para ativar</Sub>
          <Canvas>
            <Row $gap="var(--value-0-875rem)" $wrap>
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
                  style={{ flex: "var(--number-one)", minWidth: "var(--size-180)" }}
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
            <Row $gap="var(--value-2rem)" $wrap $align="center">
              <Toggle checked={toggleA} onChange={setToggleA} label="Notificações" />
              <Toggle checked={toggleB} onChange={setToggleB} label="Atualizações ativas" />
              <Toggle checked={true} onChange={() => {}} label="Bloqueado" disabled />
            </Row>
          </Canvas>

          <Sub>Checkbox</Sub>
          <Canvas>
            <Row $gap="var(--value-2rem)" $wrap $align="center">
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
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--value-1-5rem)" }}>
              <div>
                <ProgressBar value={progress} max={100} height="var(--size-6)" showLabel labelPosition="above" />
                <Row $gap="var(--value-0-5rem)" style={{ marginTop: "var(--value-0-875rem)" }}>
                  <Button size="sm" variant="ghost" leftIcon={<Minus size="var(--size-12)" />} onClick={() => setProgress(Math.max(0, progress - 11))}>Voltar</Button>
                  <Button size="sm" leftIcon={<Plus size="var(--size-12)" />} onClick={() => setProgress(Math.min(100, progress + 11))}>Próxima</Button>
                </Row>
              </div>
              <div><p style={{ fontSize: "var(--value-0-72rem)", fontWeight: "var(--font-weight-bold)", color: "var(--color-gray-400)", textTransform: "uppercase", marginBottom: "var(--value-0-5rem)" }}>Fina (var(--value-2px))</p>
                <ProgressBar value={progress} height="var(--size-2)" />
              </div>
              <div><p style={{ fontSize: "var(--value-0-72rem)", fontWeight: "var(--font-weight-bold)", color: "var(--color-gray-400)", textTransform: "uppercase", marginBottom: "var(--value-0-5rem)" }}>Grossa (var(--value-10px))</p>
                <ProgressBar value={progress} height="var(--radius-button)" />
              </div>
            </div>
          </Canvas>

          <Sub>StepProgress (indicador de etapas do Quiz)</Sub>
          <Canvas>
            <Row $gap="var(--value-1-5rem)" $wrap $align="center">
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
            <div style={{ maxWidth: "var(--size-glow-small)" }}>
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
            <Row $gap="var(--value-1-5rem)" $wrap>
              {[
                { label: "Web (Blue)",     accent: "var(--color-blue-600)", gradient: "linear-gradient(var(--value-135deg),var(--color-blue-600),var(--color-blue-700))" },
                { label: "Mobile (Cyan)",  accent: "var(--color-cyan-600)", gradient: "linear-gradient(var(--value-135deg),var(--color-cyan-600),var(--color-cyan-700))" },
                { label: "Software (Purple)", accent: "var(--color-purple-600)", gradient: "linear-gradient(var(--value-135deg),var(--color-purple-600),var(--color-purple-700))" },
                { label: "Local (Green)",  accent: "var(--color-green-500)", gradient: "linear-gradient(var(--value-135deg),var(--color-green-500),var(--color-green-700))" },
              ].map(o => (
                <div key={o.label} style={{ flex: "var(--number-one)", minWidth: "var(--size-200)" }}>
                  <p style={{ fontSize: "var(--value-0-72rem)", fontWeight: "var(--font-weight-bold)", color: "var(--color-gray-400)", textTransform: "uppercase", marginBottom: "var(--value-0-75rem)" }}>{o.label}</p>
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
            <NavLogoBox><Code2 size="var(--size-16)" color="var(--color-surface)" /></NavLogoBox>
            <NavBrand>OG Labs</NavBrand>
            {["Início","Sites & Web","Mobile","Softwares","Locais"].map((l, i) => (
              <NavLinkBtn key={l} $active={i === 0}>{l}</NavLinkBtn>
            ))}
            <Button size="sm" variant="amber" style={{ borderRadius: "var(--radius-md)" }}>🧮 Orçamento</Button>
          </NavDemo>

          <Sub>Navbar — modo dropdown (logo verde)</Sub>
          <NavDemo $gradient="linear-gradient(var(--value-160deg),var(--color-navy-950),var(--color-blue-900))">
            <NavLogoBox $dev><Code2 size="var(--size-16)" color="var(--color-dev)" /></NavLogoBox>
            <NavBrand>OG Labs</NavBrand>
            {["Início ▾","Sites ▾","Mobile ▾","Software ▾","Locais ▾"].map((l, i) => (
              <NavLinkBtn key={l} $active={i === 2} style={i === 2 ? { color: "var(--color-dev)" } : undefined}>{l}</NavLinkBtn>
            ))}
          </NavDemo>

          <Sub>Dropdown em foco</Sub>
          <Canvas $dark $pad="var(--value-1-5rem)">
            <Row $gap="var(--value-1-5rem)">
              <div>
                <p style={{ fontSize: "var(--value-0-7rem)", fontWeight: "var(--font-weight-bold)", color: "var(--alpha-white-30)", textTransform: "uppercase", marginBottom: "var(--value-0-5rem)" }}>Mobile</p>
                <DropdownBox>
                  <DropdownItem $active><Smartphone size="var(--size-13)" /> App Nativo (iOS/Android)</DropdownItem>
                  <DropdownItem>Perfis de Usuário</DropdownItem>
                  <DropdownItem>Exemplos de Uso</DropdownItem>
                </DropdownBox>
              </div>
              <div>
                <p style={{ fontSize: "var(--value-0-7rem)", fontWeight: "var(--font-weight-bold)", color: "var(--alpha-white-30)", textTransform: "uppercase", marginBottom: "var(--value-0-5rem)" }}>Sites & Web</p>
                <DropdownBox>
                  <DropdownItem $active><Globe size="var(--size-13)" /> Site Institucional</DropdownItem>
                  <DropdownItem><Shield size="var(--size-13)" /> Sistema com Login</DropdownItem>
                  <DropdownItem><Database size="var(--size-13)" /> Recursos Extras</DropdownItem>
                </DropdownBox>
              </div>
            </Row>
          </Canvas>

          <Sub>Menu mobile — accordion (clique para expandir)</Sub>
          <Canvas $dark $pad="var(--value-1-25rem)">
            <div style={{ maxWidth: "var(--size-360)" }}>
              {NAV_ITEMS.map(m => (
                <AccordionBlock key={m.id} $gradient={m.gradient}>
                  <AccordionHeader onClick={() => toggleAccordion(m.id)}>
                    {m.label}
                    {accordions[m.id] ? <ChevronUp size="var(--size-16)" /> : <ChevronDown size="var(--size-16)" />}
                  </AccordionHeader>
                  <AccordionLinks $open={!!accordions[m.id]}>
                    {m.links.map(l => <AccordionLink key={l} href="#">{l}</AccordionLink>)}
                  </AccordionLinks>
                </AccordionBlock>
              ))}
              <PillButton style={{ width: "var(--percent-full)", justifyContent: "center", marginTop: "var(--value-1rem)" }}>
                🧮 Faça um Orçamento
              </PillButton>
            </div>
          </Canvas>

          <Sub>FloatingQuizBtn — animação de pulso</Sub>
          <Canvas $bg="var(--color-surface-subtle)">
            <Row $gap="var(--value-2rem)" $wrap $align="center">
              <StateCol><StateLabel>Com pulso (loop var(--value-3s))</StateLabel><FloatingBtnDemo $pulse>🧮 Faça um Orçamento</FloatingBtnDemo></StateCol>
              <StateCol><StateLabel>Sem pulso</StateLabel><FloatingBtnDemo>🧮 Faça um Orçamento</FloatingBtnDemo></StateCol>
            </Row>
          </Canvas>

          <Sub>Avatar — tamanhos e status</Sub>
          <Canvas>
            <Row $gap="var(--value-1-5rem)" $wrap $align="center">
              <Avatar initials="JK" size="xl" gradient="linear-gradient(var(--value-135deg),var(--color-blue-600),var(--color-cyan-600))" online={true} />
              <Avatar initials="MS" size="lg" gradient="linear-gradient(var(--value-135deg),var(--color-purple-600),var(--color-purple-800))" online="away" />
              <Avatar initials="RT" size="md" gradient="linear-gradient(var(--value-135deg),var(--color-green-500),var(--color-green-700))" online={false} />
              <Avatar initials="CL" size="sm" gradient="linear-gradient(var(--value-135deg),var(--color-amber-500),var(--color-amber-600))" />
              <Avatar initials="OG" size="xs" gradient="linear-gradient(var(--value-135deg),var(--color-red-600),var(--color-red-700))" />
            </Row>
          </Canvas>

          <Sub>AvatarGroup</Sub>
          <Canvas>
            <AvatarGroup
              size="md"
              avatars={[
                { initials: "JK", gradient: "linear-gradient(var(--value-135deg),var(--color-blue-600),var(--color-cyan-600))" },
                { initials: "MS", gradient: "linear-gradient(var(--value-135deg),var(--color-purple-600),var(--color-purple-800))" },
                { initials: "RT", gradient: "linear-gradient(var(--value-135deg),var(--color-green-500),var(--color-green-700))" },
                { initials: "CL", gradient: "linear-gradient(var(--value-135deg),var(--color-amber-500),var(--color-amber-600))" },
                { initials: "AA", gradient: "linear-gradient(var(--value-135deg),var(--color-cyan-600),var(--color-cyan-700))" },
                { initials: "BB", gradient: "linear-gradient(var(--value-135deg),var(--color-red-600),var(--color-red-700))" },
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
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--value-0-625rem)" }}>
              <Alert type="info" title="Informação">Seu orçamento foi gerado. Entre em contato para confirmar o projeto.</Alert>
              <Alert type="success" title="Mensagem enviada!">Recebemos seu contato e entraremos em até 24 horas no WhatsApp.</Alert>
              <Alert type="warning" title="Atenção">Preencha todos os campos obrigatórios antes de continuar.</Alert>
              <Alert type="error" title="Erro ao enviar" onClose={() => {}}>Não foi possível enviar. Tente novamente ou ligue para {siteContact.phoneDisplay}.</Alert>
            </div>
          </Canvas>

          <Sub>Toast — notificações flutuantes</Sub>
          <Canvas $bg="var(--color-surface-subtle)" $pad="var(--value-2rem)">
            <Row $gap="var(--value-1rem)" $wrap>
              <Toast type="success" onClose={() => {}}>Orçamento enviado com sucesso!</Toast>
              <Toast type="error" onClose={() => {}}>Erro ao processar. Tente novamente.</Toast>
              <Toast type="info" onClose={() => {}}>Atualizando em segundo plano…</Toast>
            </Row>
          </Canvas>

          <Sub>EmptyState</Sub>
          <Canvas>
            <EmptyState
              icon={<MessageSquare size="var(--size-30)" />}
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
                <Td><Row $align="center" $gap="var(--value-0-625rem)"><Avatar initials="JK" size="sm" /><strong>João K.</strong></Row></Td>
                <Td><BadgeWeb>Sites Web</BadgeWeb></Td>
                <Td><Badge variant="amber" dot>Em Proposta</Badge></Td>
                <Td mono>R$ 3.500</Td>
                <Td><Button size="sm" variant="ghost">Ver</Button></Td>
              </Tr>
              <Tr highlighted>
                <Td><Row $align="center" $gap="var(--value-0-625rem)"><Avatar initials="MS" size="sm" gradient="linear-gradient(var(--value-135deg),var(--color-green-500),var(--color-green-700))" /><strong>Maria S.</strong></Row></Td>
                <Td><BadgeMobile>Mobile</BadgeMobile></Td>
                <Td><Badge variant="blue" dot>Em Progresso</Badge></Td>
                <Td mono>R$ 8.000</Td>
                <Td><Button size="sm" variant="ghost">Ver</Button></Td>
              </Tr>
              <Tr>
                <Td><Row $align="center" $gap="var(--value-0-625rem)"><Avatar initials="RT" size="sm" gradient="linear-gradient(var(--value-135deg),var(--color-purple-600),var(--color-purple-800))" /><strong>Ricardo T.</strong></Row></Td>
                <Td><BadgeSoftware>Software</BadgeSoftware></Td>
                <Td><Badge variant="green" dot>Concluído</Badge></Td>
                <Td mono>R$ 12.000</Td>
                <Td><Button size="sm">Ver</Button></Td>
              </Tr>
              <Tr muted>
                <Td><Row $align="center" $gap="var(--value-0-625px)"><Avatar initials="CL" size="sm" gradient="linear-gradient(var(--value-135deg),var(--color-amber-500),var(--color-amber-600))" /><strong>Carla L.</strong></Row></Td>
                <Td><BadgeLocal>Sistemas Locais</BadgeLocal></Td>
                <Td><Badge variant="red" dot>Cancelado</Badge></Td>
                <Td mono style={{ textDecoration: "line-through", opacity: "var(--opacity-50)" }}>R$ 5.000</Td>
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
          <Canvas $pad="var(--value-3rem)">
            <SectionHeader
              eyebrow="Soluções Digitais Completas"
              title="O certo para o seu negócio"
              subtitle="Do site mais simples ao sistema mais completo — sempre com linguagem clara, preço justo e suporte de verdade."
            />
          </Canvas>
          <Canvas $dark $pad="var(--value-3rem)">
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
              <ColorTile key={c.hex}><Swatch $c={c.hex} $h="var(--size-56)" /><ColorInfo><ColorName>{c.name}</ColorName><ColorHex>{c.hex}</ColorHex><ColorToken>{c.token}</ColorToken></ColorInfo></ColorTile>
            ))}
          </ColorGrid>

          <Sub>Semânticas</Sub>
          <ColorGrid>
            {COLORS_SEMANTIC.map(c => (
              <ColorTile key={c.name}><Swatch $c={c.hex} $h="var(--size-52)" /><ColorInfo><ColorName>{c.name}</ColorName><ColorHex>{c.hex}</ColorHex><ColorToken>{c.token}</ColorToken></ColorInfo></ColorTile>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--value-1-5rem)" }}>
              <div><p style={{ fontSize: "var(--value-0-72rem)", fontWeight: "var(--font-weight-bold)", color: "var(--color-gray-400)", textTransform: "uppercase", marginBottom: "var(--value-0-625rem)" }}>Linha simples</p><Divider /></div>
              <div><p style={{ fontSize: "var(--value-0-72rem)", fontWeight: "var(--font-weight-bold)", color: "var(--color-gray-400)", textTransform: "uppercase", marginBottom: "var(--value-0-625rem)" }}>Com gradiente</p><Divider gradient /></div>
              <div><p style={{ fontSize: "var(--value-0-72rem)", fontWeight: "var(--font-weight-bold)", color: "var(--color-gray-400)", textTransform: "uppercase", marginBottom: "var(--value-0-625rem)" }}>Com label</p><Divider label="Ou" /></div>
            </div>
          </Canvas>

          <Sub>InlineCode e CodeBlock</Sub>
          <Canvas>
            <p style={{ fontSize: "var(--value-0-875rem)", color: "var(--color-text-muted)", marginBottom: "var(--value-1rem)" }}>
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
            <Row $gap="var(--value-0-875rem)" $wrap>
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
            <p style={{ fontSize: "var(--value-0-85rem)", color: "var(--color-text-muted)", marginBottom: "var(--value-1rem)" }}>
              <InlineCode>{"<PageSection id=\"hero\" bg=\"var(--color-background)\">"}</InlineCode> aplica <InlineCode>padding: var(--value-5rem) var(--value-1-5rem)</InlineCode> com <InlineCode>max-width: var(--value-1366px)</InlineCode> automático.
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
