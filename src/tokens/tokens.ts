// OG Labs Design Tokens — TypeScript constants
// Mirrors tokens.json (W3C DTCG) for use in styled-components and utility code.
// Source of truth: tokens.json — update both files in sync.

// ─── Colors ──────────────────────────────────────────────────────────────────

export const color = {
  navy: {
    950: "#0c1445",
    900: "#0f2050",
    850: "#0a1930",
  },
  blue: {
    800: "#1e3a8a",
    700: "#1d4ed8",
    600: "#2563eb",
    400: "#60a5fa",
    100: "#dbeafe",
    50:  "#eff6ff",
  },
  cyan: {
    700: "#0e7490",
    600: "#0891b2",
    500: "#06b6d4",
    100: "#cffafe",
  },
  amber: {
    600: "#d97706",
    500: "#f59e0b",
    200: "#fde68a",
    100: "#fef3c7",
    50:  "#fffbeb",
  },
  green: {
    800: "#15803d",
    700: "#047857",
    600: "#16a34a",
    500: "#059669",
    100: "#dcfce7",
    50:  "#f0fdf4",
  },
  purple: {
    800: "#1e1040",
    700: "#6d28d9",
    600: "#7c3aed",
    100: "#ede9fe",
  },
  red: {
    700: "#b91c1c",
    600: "#dc2626",
    100: "#fee2e2",
    50:  "#fef2f2",
  },
  gray: {
    500: "#717182",
    400: "#9ca3af",
    300: "#d1d5db",
    200: "#e5e7eb",
    100: "#f3f4f6",
  },
  semantic: {
    background:          "#f7f9ff",
    foreground:          "#0c1445",
    card:                "#ffffff",
    cardForeground:      "#0c1445",
    primary:             "#1d4ed8",
    primaryForeground:   "#ffffff",
    secondary:           "#e2eaff",
    secondaryForeground: "#0c1445",
    muted:               "#e2eaff",
    mutedForeground:     "#4b5684",
    accent:              "#0891b2",
    accentForeground:    "#ffffff",
    border:              "rgba(29,78,216,0.12)",
    ring:                "#2563eb",
    destructive:         "#dc2626",
  },
  page: {
    home:     "#0c1445",
    web:      "#1e3a8a",
    mobile:   "#0e7490",
    software: "#5b21b6",
    local:    "#059669",
  },
  status: {
    online:  "#22c55e",
    away:    "#f59e0b",
    busy:    "#dc2626",
    offline: "#9ca3af",
  },
} as const;

// ─── Gradients ────────────────────────────────────────────────────────────────

export const gradient = {
  heroHome:     "linear-gradient(160deg, #0c1445 0%, #0f2050 50%, #0a1930 100%)",
  heroWeb:      "linear-gradient(160deg, #0c1445 0%, #1e3a8a 100%)",
  heroMobile:   "linear-gradient(160deg, #0a1930 0%, #0e7490 100%)",
  heroSoftware: "linear-gradient(160deg, #1e1040 0%, #5b21b6 100%)",
  heroLocal:    "linear-gradient(160deg, #042c1e 0%, #059669 100%)",

  btnPrimary:   "linear-gradient(135deg, #2563eb, #1d4ed8)",
  btnCyan:      "linear-gradient(135deg, #0891b2, #0e7490)",
  btnAmber:     "linear-gradient(135deg, #f59e0b, #d97706)",
  btnGreen:     "linear-gradient(135deg, #16a34a, #15803d)",
  btnDanger:    "linear-gradient(135deg, #dc2626, #b91c1c)",

  progress:     "linear-gradient(90deg, #2563eb, #0891b2)",
  logo:         "linear-gradient(135deg, #2563eb, #0891b2)",
  logoDev:      "linear-gradient(135deg, rgba(230,50,200,0.14), rgba(226,105,248,0.5))",
  ctaDark:      "linear-gradient(135deg, #0c1445, #1e3a8a)",

  cardSoftware: "linear-gradient(135deg, #7c3aed, #6d28d9)",
  cardLocal:    "linear-gradient(135deg, #059669, #047857)",
} as const;

// ─── Typography ───────────────────────────────────────────────────────────────

export const fontFamily = {
  display: "'Plus Jakarta Sans', sans-serif",
  body:    "'Inter', sans-serif",
  mono:    "'JetBrains Mono', 'Fira Code', monospace",
} as const;

export const fontWeight = {
  regular:   400,
  medium:    500,
  semibold:  600,
  bold:      700,
  extrabold: 800,
} as const;

export const fontSize = {
  micro:   "10.88px",
  label:   "11.52px",
  caption: "12.48px",
  xs:      "12.8px",
  sm:      "13.6px",
  "body-s":"14.4px",
  body:    "16px",
  "body-l":"18px",
  md:      "20px",
  lg:      "24px",
  xl:      "28px",
  "2xl":   "36px",
  "3xl":   "40px",
  "4xl":   "56px",
  display: "64px",
} as const;

export const lineHeight = {
  tight:   1.15,
  snug:    1.25,
  normal:  1.4,
  relaxed: 1.55,
  loose:   1.7,
} as const;

export const letterSpacing = {
  tight:   "-0.025em",
  snug:    "-0.02em",
  normal:  "0",
  wide:    "0.05em",
  wider:   "0.07em",
  widest:  "0.12em",
} as const;

// ─── Spacing ─────────────────────────────────────────────────────────────────

export const spacing = {
  0:    "0",
  0.5:  "2px",
  1:    "4px",
  1.5:  "6px",
  2:    "8px",
  2.5:  "10px",
  3:    "12px",
  4:    "16px",
  5:    "20px",
  6:    "24px",
  7:    "28px",
  8:    "32px",
  10:   "40px",
  12:   "48px",
  14:   "56px",
  16:   "64px",
  18:   "72px",
  20:   "80px",
  24:   "96px",
  28:   "112px",
  32:   "128px",
} as const;

// ─── Border Radius ────────────────────────────────────────────────────────────

export const borderRadius = {
  none:    "0",
  xs:      "5px",
  sm:      "6px",
  md:      "8px",
  btn:     "10px",
  cardSm:  "12px",
  card:    "14px",
  cardLg:  "16px",
  xl:      "20px",
  modal:   "24px",
  pill:    "100px",
  full:    "9999px",
} as const;

// ─── Shadows ──────────────────────────────────────────────────────────────────

export const shadow = {
  xs:             "0 1px 4px rgba(29,78,216,0.08)",
  sm:             "0 2px 8px rgba(29,78,216,0.10)",
  card:           "0 4px 16px rgba(29,78,216,0.08)",
  cardHover:      "0 10px 36px rgba(29,78,216,0.12)",
  xl:             "0 12px 40px rgba(29,78,216,0.14)",
  modal:          "0 32px 80px rgba(10,18,50,0.35)",
  floating:       "0 4px 16px rgba(245,158,11,0.35)",
  floatingHover:  "0 6px 24px rgba(245,158,11,0.45)",
  amberPulse:     "0 4px 24px rgba(245,158,11,0.4), 0 0 0 8px rgba(245,158,11,0)",
  blueFocus:      "0 0 0 3px rgba(37,99,235,0.12)",
  blueGlow:       "0 0 0 4px rgba(37,99,235,0.12), 0 12px 40px rgba(29,78,216,0.12)",
  selectedCyan:   "0 0 0 4px rgba(8,145,178,0.12), 0 12px 40px rgba(8,145,178,0.12)",
  selectedPurple: "0 0 0 4px rgba(124,58,237,0.12), 0 12px 40px rgba(124,58,237,0.12)",
  selectedGreen:  "0 0 0 4px rgba(5,150,105,0.12), 0 12px 40px rgba(5,150,105,0.12)",
} as const;

// ─── Border ───────────────────────────────────────────────────────────────────

export const border = {
  width: {
    hairline: "1px",
    default:  "1.5px",
    thick:    "2px",
    focus:    "2px",
  },
  color: {
    default:  "rgba(29,78,216,0.08)",
    muted:    "rgba(29,78,216,0.12)",
    strong:   "rgba(29,78,216,0.22)",
    input:    "#e2eaff",
    white10:  "rgba(255,255,255,0.10)",
    white07:  "rgba(255,255,255,0.07)",
  },
} as const;

// ─── Z-Index ──────────────────────────────────────────────────────────────────

export const zIndex = {
  base:        0,
  highlighted: 20,
  navbar:      100,
  floating:    150,
  overlay:     200,
  pageOverlay: 201,
} as const;

// ─── Motion ───────────────────────────────────────────────────────────────────

export const duration = {
  instant:  "100ms",
  fast:     "180ms",
  base:     "220ms",
  moderate: "300ms",
  slow:     "400ms",
  xslow:    "500ms",
} as const;

export const easing = {
  linear:    "linear",
  ease:      "ease",
  easeInOut: "ease-in-out",
  spring:    "cubic-bezier(0.4, 0, 0.2, 1)",
  bounce:    "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const size = {
  navbarHeight:      "68px",
  modalMaxWidth:     "580px",
  modalMaxHeight:    "90vh",
  containerMaxWidth: "1366px",

  avatar: {
    xs: "24px",
    sm: "32px",
    md: "40px",
    lg: "48px",
    xl: "64px",
  },

  icon: {
    sm:  "13px",
    md:  "15px",
    lg:  "18px",
    xl:  "22px",
    "2xl": "30px",
  },

  cardIcon: {
    sm: "36px",
    md: "48px",
  },
} as const;

// ─── Barrel ───────────────────────────────────────────────────────────────────

export const tokens = {
  color,
  gradient,
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  spacing,
  borderRadius,
  shadow,
  border,
  zIndex,
  duration,
  easing,
  size,
} as const;

export type Tokens = typeof tokens;
