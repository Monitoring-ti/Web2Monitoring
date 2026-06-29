export type ThemeGroupId = "autoridad" | "ingenieria" | "innovacion";

export type ThemeId =
  | "corporativo"
  | "minimalista"
  | "moderno"
  | "premium"
  | "institucional"
  | "geometrico"
  | "blueprint"
  | "industrial"
  | "organico"
  | "vintage"
  | "tecnologico"
  | "neon-tech"
  | "data-platform"
  | "creativo"
  | "ludico";

export interface WebTheme {
  id: ThemeId;
  groupId: ThemeGroupId;
  groupName: string;
  name: string;
  styleGroup: string;
  description: string;
  audience: string;
  colors: {
    primary: string;
    accent: string;
    bg: string;
    surface: string;
    text: string;
    muted: string;
    border: string;
    heroBg: string;
    heroText: string;
    onPrimary: string;
  };
  fonts: {
    display: string;
    body: string;
    googleUrl: string;
  };
  shape: {
    radius: string;
    buttonRadius: string;
    cardRadius: string;
  };
  flags: {
    darkHero: boolean;
    serifDisplay: boolean;
    angular: boolean;
    blueprint: boolean;
    neonGlow: boolean;
    minimalShadow: boolean;
    vintage?: boolean;
    organic?: boolean;
    creative?: boolean;
  };
  preview: string;
}

export interface ThemeGroup {
  id: ThemeGroupId;
  number: number;
  name: string;
  subtitle: string;
  description: string;
}

export const themeGroups: ThemeGroup[] = [
  {
    id: "autoridad",
    number: 1,
    name: "Autoridad y Confianza",
    subtitle: "Conversión B2B y credibilidad institucional",
    description:
      "Estilos orientados a gerentes de mantenimiento, activos y compras. Priorizan claridad, sobriedad y percepción de estabilidad.",
  },
  {
    id: "ingenieria",
    number: 2,
    name: "Ingeniería y Terreno",
    subtitle: "Precisión técnica y experiencia en faena",
    description:
      "Estilos que refuerzan expertise en gestión de activos, metodología en terreno y conocimiento sectorial minero-industrial.",
  },
  {
    id: "innovacion",
    number: 3,
    name: "Innovación y Diferenciación",
    subtitle: "Transformación digital y posicionamiento disruptivo",
    description:
      "Estilos que proyectan liderazgo tecnológico, datos, plataformas digitales y diferenciación frente a consultoras tradicionales.",
  },
];

export const themes: Record<ThemeId, WebTheme> = {
  // ─── GRUPO 1: Autoridad y Confianza ───────────────────────────────────────
  corporativo: {
    id: "corporativo",
    groupId: "autoridad",
    groupName: "Grupo 1 — Autoridad y Confianza",
    name: "Corporativo Clásico",
    styleGroup: "Estilo Corporativo y Profesional",
    description: "Azul marino institucional con serif. Autoridad y confianza para B2B industrial.",
    audience: "Gerentes de mantenimiento y activos en minería",
    colors: {
      primary: "#0A2540", accent: "#E85D26", bg: "#FFFFFF", surface: "#F4F6F8",
      text: "#0A2540", muted: "#5C6B7A", border: "#D8DEE6",
      heroBg: "linear-gradient(135deg, #061829 0%, #0A2540 50%, #123456 100%)",
      heroText: "#FFFFFF", onPrimary: "#FFFFFF",
    },
    fonts: {
      display: "'Merriweather', Georgia, serif",
      body: "'Inter', system-ui, sans-serif",
      googleUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@700;800&display=swap",
    },
    shape: { radius: "0.5rem", buttonRadius: "0.375rem", cardRadius: "0.75rem" },
    flags: { darkHero: true, serifDisplay: true, angular: false, blueprint: false, neonGlow: false, minimalShadow: false },
    preview: "linear-gradient(135deg, #0A2540, #1a3a5c)",
  },
  minimalista: {
    id: "minimalista",
    groupId: "autoridad",
    groupName: "Grupo 1 — Autoridad y Confianza",
    name: "Minimalista Ejecutivo",
    styleGroup: "Estilo Minimalista",
    description: "Espacio en blanco, monocromático y acento azul acero. Conversión directa sin ruido.",
    audience: "Consultorías que priorizan propuesta de valor clara",
    colors: {
      primary: "#111111", accent: "#4A6FA5", bg: "#FFFFFF", surface: "#FAFAFA",
      text: "#111111", muted: "#6B7280", border: "#E5E7EB",
      heroBg: "#FFFFFF", heroText: "#111111", onPrimary: "#FFFFFF",
    },
    fonts: {
      display: "'Inter', system-ui, sans-serif",
      body: "'Inter', system-ui, sans-serif",
      googleUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    },
    shape: { radius: "0", buttonRadius: "0", cardRadius: "0" },
    flags: { darkHero: false, serifDisplay: false, angular: true, blueprint: false, neonGlow: false, minimalShadow: true },
    preview: "linear-gradient(180deg, #FFFFFF, #F3F4F6)",
  },
  moderno: {
    id: "moderno",
    groupId: "autoridad",
    groupName: "Grupo 1 — Autoridad y Confianza",
    name: "Moderno y Limpio",
    styleGroup: "Estilo Moderno y Limpio",
    description: "Sombras suaves, bordes redondeados y tipografía sans-serif. Estándar de conversión digital.",
    audience: "Plataformas B2B escalables y eficientes",
    colors: {
      primary: "#0A2540", accent: "#E85D26", bg: "#FFFFFF", surface: "#F8FAFC",
      text: "#0F172A", muted: "#64748B", border: "#E2E8F0",
      heroBg: "linear-gradient(160deg, #0A2540 0%, #1e40af 100%)",
      heroText: "#FFFFFF", onPrimary: "#FFFFFF",
    },
    fonts: {
      display: "'Sora', system-ui, sans-serif",
      body: "'Inter', system-ui, sans-serif",
      googleUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap",
    },
    shape: { radius: "1rem", buttonRadius: "0.75rem", cardRadius: "1.25rem" },
    flags: { darkHero: true, serifDisplay: false, angular: false, blueprint: false, neonGlow: false, minimalShadow: false },
    preview: "linear-gradient(160deg, #0A2540, #E85D26)",
  },
  premium: {
    id: "premium",
    groupId: "autoridad",
    groupName: "Grupo 1 — Autoridad y Confianza",
    name: "Lujo y Premium",
    styleGroup: "Estilo Lujo y Premium",
    description: "Negro y dorado, tipografía serif refinada. Exclusividad para clientes de alto ticket.",
    audience: "Cuentas enterprise y contratos de gran escala",
    colors: {
      primary: "#0D0D0D", accent: "#C9A84C", bg: "#FAFAF8", surface: "#F5F3EE",
      text: "#1A1A1A", muted: "#6B6560", border: "#E0DDD6",
      heroBg: "linear-gradient(160deg, #0D0D0D 0%, #1a1a2e 100%)",
      heroText: "#F5F3EE", onPrimary: "#0D0D0D",
    },
    fonts: {
      display: "'Playfair Display', Georgia, serif",
      body: "'Inter', system-ui, sans-serif",
      googleUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@700;800&display=swap",
    },
    shape: { radius: "0.25rem", buttonRadius: "0", cardRadius: "0.5rem" },
    flags: { darkHero: true, serifDisplay: true, angular: false, blueprint: false, neonGlow: false, minimalShadow: true },
    preview: "linear-gradient(160deg, #0D0D0D, #C9A84C)",
  },
  institucional: {
    id: "institucional",
    groupId: "autoridad",
    groupName: "Grupo 1 — Autoridad y Confianza",
    name: "Institucional Sobrio",
    styleGroup: "Estilo Corporativo — Variante Legal/Financiero",
    description: "Azul marino profundo y gris acero. Estabilidad para sectores regulados y contratos formales.",
    audience: "Oil&Gas, energía y clientes con procesos de compliance",
    colors: {
      primary: "#1B2A4A", accent: "#3D5A80", bg: "#FFFFFF", surface: "#EEF1F5",
      text: "#1B2A4A", muted: "#5A6B82", border: "#C8D0DC",
      heroBg: "linear-gradient(180deg, #1B2A4A 0%, #2C3E5A 100%)",
      heroText: "#FFFFFF", onPrimary: "#FFFFFF",
    },
    fonts: {
      display: "'Libre Baskerville', Georgia, serif",
      body: "'Source Sans 3', system-ui, sans-serif",
      googleUrl: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Source+Sans+3:wght@400;600;700&display=swap",
    },
    shape: { radius: "0.25rem", buttonRadius: "0.25rem", cardRadius: "0.5rem" },
    flags: { darkHero: true, serifDisplay: true, angular: false, blueprint: false, neonGlow: false, minimalShadow: false },
    preview: "linear-gradient(180deg, #1B2A4A, #3D5A80)",
  },

  // ─── GRUPO 2: Ingeniería y Terreno ────────────────────────────────────────
  geometrico: {
    id: "geometrico",
    groupId: "ingenieria",
    groupName: "Grupo 2 — Ingeniería y Terreno",
    name: "Geométrico y Preciso",
    styleGroup: "Estilo Geométrico y Preciso",
    description: "Ángulos definidos y cuadrículas técnicas. Precisión analítica de ingeniería.",
    audience: "Ingeniería de mantenimiento y gestión de activos",
    colors: {
      primary: "#0C2D4A", accent: "#00B4D8", bg: "#E8EEF4", surface: "#FFFFFF",
      text: "#0C2D4A", muted: "#4A6278", border: "#B8C9D9",
      heroBg: "linear-gradient(180deg, #0C2D4A 0%, #1B4F72 100%)",
      heroText: "#FFFFFF", onPrimary: "#FFFFFF",
    },
    fonts: {
      display: "'Space Grotesk', system-ui, sans-serif",
      body: "'IBM Plex Sans', system-ui, sans-serif",
      googleUrl: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
    },
    shape: { radius: "0", buttonRadius: "0", cardRadius: "0" },
    flags: { darkHero: true, serifDisplay: false, angular: true, blueprint: true, neonGlow: false, minimalShadow: false },
    preview: "linear-gradient(135deg, #0C2D4A, #00B4D8)",
  },
  blueprint: {
    id: "blueprint",
    groupId: "ingenieria",
    groupName: "Grupo 2 — Ingeniería y Terreno",
    name: "Blueprint Técnico",
    styleGroup: "Estilo Geométrico — Variante Planos",
    description: "Estética de dibujo técnico con líneas de guía visibles. Ideal para EPCM/EPC y proyectos.",
    audience: "Ingenieros de proyecto y líderes técnicos",
    colors: {
      primary: "#0A3D62", accent: "#82CCDD", bg: "#D6EAF8", surface: "#FFFFFF",
      text: "#0A3D62", muted: "#3D6B8A", border: "#A9CCE3",
      heroBg: "linear-gradient(180deg, #0A3D62 0%, #1B4F72 100%)",
      heroText: "#FFFFFF", onPrimary: "#0A3D62",
    },
    fonts: {
      display: "'Roboto Mono', monospace",
      body: "'Roboto', system-ui, sans-serif",
      googleUrl: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500;700&family=Roboto:wght@400;500;700&display=swap",
    },
    shape: { radius: "0", buttonRadius: "0", cardRadius: "0" },
    flags: { darkHero: true, serifDisplay: false, angular: true, blueprint: true, neonGlow: false, minimalShadow: false },
    preview: "linear-gradient(135deg, #0A3D62, #82CCDD)",
  },
  industrial: {
    id: "industrial",
    groupId: "ingenieria",
    groupName: "Grupo 2 — Ingeniería y Terreno",
    name: "Industrial Robusto",
    styleGroup: "Estilo Corporativo — Variante Industrial",
    description: "Grises metálicos y naranja seguridad. Sensación de planta, faena y operación real.",
    audience: "Superintendentes de planta y jefes de turno",
    colors: {
      primary: "#2C3E50", accent: "#E67E22", bg: "#ECF0F1", surface: "#FFFFFF",
      text: "#2C3E50", muted: "#5D6D7E", border: "#BDC3C7",
      heroBg: "linear-gradient(135deg, #1a252f 0%, #2C3E50 60%, #34495E 100%)",
      heroText: "#FFFFFF", onPrimary: "#FFFFFF",
    },
    fonts: {
      display: "'Oswald', system-ui, sans-serif",
      body: "'Open Sans', system-ui, sans-serif",
      googleUrl: "https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Open+Sans:wght@400;600;700&display=swap",
    },
    shape: { radius: "0.125rem", buttonRadius: "0.125rem", cardRadius: "0.25rem" },
    flags: { darkHero: true, serifDisplay: false, angular: true, blueprint: false, neonGlow: false, minimalShadow: false },
    preview: "linear-gradient(135deg, #2C3E50, #E67E22)",
  },
  organico: {
    id: "organico",
    groupId: "ingenieria",
    groupName: "Grupo 2 — Ingeniería y Terreno",
    name: "Orgánico y Sostenible",
    styleGroup: "Estilo Orgánico y Sostenible",
    description: "Tonos tierra y verde bosque. Conciencia ambiental y responsabilidad en operaciones.",
    audience: "Clientes con foco ESG, celulosa y energía renovable",
    colors: {
      primary: "#2D4A3E", accent: "#6B9E78", bg: "#F7F5F0", surface: "#FFFFFF",
      text: "#2D4A3E", muted: "#5C7A6A", border: "#D4E0D8",
      heroBg: "linear-gradient(160deg, #2D4A3E 0%, #4A7C59 100%)",
      heroText: "#F7F5F0", onPrimary: "#FFFFFF",
    },
    fonts: {
      display: "'Nunito', system-ui, sans-serif",
      body: "'Nunito', system-ui, sans-serif",
      googleUrl: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap",
    },
    shape: { radius: "1.5rem", buttonRadius: "2rem", cardRadius: "1.5rem" },
    flags: { darkHero: true, serifDisplay: false, angular: false, blueprint: false, neonGlow: false, minimalShadow: false, organic: true },
    preview: "linear-gradient(160deg, #2D4A3E, #6B9E78)",
  },
  vintage: {
    id: "vintage",
    groupId: "ingenieria",
    groupName: "Grupo 2 — Ingeniería y Terreno",
    name: "Vintage y Retro",
    styleGroup: "Estilo Vintage y Retro",
    description: "Tonos sepia y tipografía con carácter. Trayectoria, tradición y confianza construida en el tiempo.",
    audience: "Marcas con +20 años que valoran legado y cercanía",
    colors: {
      primary: "#3E2723", accent: "#BF8040", bg: "#F5F0E8", surface: "#FAF6EE",
      text: "#3E2723", muted: "#7A6B5D", border: "#DDD0BC",
      heroBg: "linear-gradient(160deg, #3E2723 0%, #5D4037 100%)",
      heroText: "#F5F0E8", onPrimary: "#F5F0E8",
    },
    fonts: {
      display: "'Lora', Georgia, serif",
      body: "'Lora', Georgia, serif",
      googleUrl: "https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&display=swap",
    },
    shape: { radius: "0.25rem", buttonRadius: "0.25rem", cardRadius: "0.5rem" },
    flags: { darkHero: true, serifDisplay: true, angular: false, blueprint: false, neonGlow: false, minimalShadow: true, vintage: true },
    preview: "linear-gradient(160deg, #3E2723, #BF8040)",
  },

  // ─── GRUPO 3: Innovación y Diferenciación ─────────────────────────────────
  tecnologico: {
    id: "tecnologico",
    groupId: "innovacion",
    groupName: "Grupo 3 — Innovación y Diferenciación",
    name: "Tecnológico y Futurista",
    styleGroup: "Estilo Tecnológico y Futurista",
    description: "Dark mode con acentos neón. Liderazgo en transformación digital de activos.",
    audience: "Innovación industrial y plataformas digitales",
    colors: {
      primary: "#0B0F1A", accent: "#00E5FF", bg: "#0B0F1A", surface: "#141B2D",
      text: "#E8EDF5", muted: "#8B9CB8", border: "#243049",
      heroBg: "linear-gradient(135deg, #050810 0%, #0B0F1A 40%, #1a1040 100%)",
      heroText: "#FFFFFF", onPrimary: "#0B0F1A",
    },
    fonts: {
      display: "'Montserrat', system-ui, sans-serif",
      body: "'Montserrat', system-ui, sans-serif",
      googleUrl: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap",
    },
    shape: { radius: "0.75rem", buttonRadius: "0.5rem", cardRadius: "1rem" },
    flags: { darkHero: true, serifDisplay: false, angular: false, blueprint: false, neonGlow: true, minimalShadow: false },
    preview: "linear-gradient(135deg, #050810, #00E5FF)",
  },
  "neon-tech": {
    id: "neon-tech",
    groupId: "innovacion",
    groupName: "Grupo 3 — Innovación y Diferenciación",
    name: "Neón Industrial",
    styleGroup: "Estilo Tecnológico — Variante Ciberseguridad",
    description: "Negro profundo con naranja neón Monitoring. Energía tech con identidad de marca.",
    audience: "SAP PM, IoT, sensórica y analítica predictiva",
    colors: {
      primary: "#080C14", accent: "#FF6B2B", bg: "#080C14", surface: "#111827",
      text: "#E2E8F0", muted: "#94A3B8", border: "#1F2937",
      heroBg: "linear-gradient(135deg, #080C14 0%, #1a0a00 50%, #080C14 100%)",
      heroText: "#FFFFFF", onPrimary: "#080C14",
    },
    fonts: {
      display: "'Rajdhani', system-ui, sans-serif",
      body: "'Rajdhani', system-ui, sans-serif",
      googleUrl: "https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&display=swap",
    },
    shape: { radius: "0.5rem", buttonRadius: "0.375rem", cardRadius: "0.75rem" },
    flags: { darkHero: true, serifDisplay: false, angular: false, blueprint: false, neonGlow: true, minimalShadow: false },
    preview: "linear-gradient(135deg, #080C14, #FF6B2B)",
  },
  "data-platform": {
    id: "data-platform",
    groupId: "innovacion",
    groupName: "Grupo 3 — Innovación y Diferenciación",
    name: "Plataforma de Datos",
    styleGroup: "Estilo Corporativo — Variante Fintech/Dashboard",
    description: "Interfaz tipo dashboard financiero. Datos, KPIs y visualización de inversiones en activos.",
    audience: "Gerentes de activos orientados a métricas y ROI",
    colors: {
      primary: "#0F172A", accent: "#3B82F6", bg: "#F1F5F9", surface: "#FFFFFF",
      text: "#0F172A", muted: "#64748B", border: "#CBD5E1",
      heroBg: "linear-gradient(160deg, #0F172A 0%, #1E3A5F 100%)",
      heroText: "#FFFFFF", onPrimary: "#FFFFFF",
    },
    fonts: {
      display: "'DM Sans', system-ui, sans-serif",
      body: "'DM Sans', system-ui, sans-serif",
      googleUrl: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap",
    },
    shape: { radius: "0.75rem", buttonRadius: "0.5rem", cardRadius: "1rem" },
    flags: { darkHero: true, serifDisplay: false, angular: false, blueprint: false, neonGlow: false, minimalShadow: false },
    preview: "linear-gradient(160deg, #0F172A, #3B82F6)",
  },
  creativo: {
    id: "creativo",
    groupId: "innovacion",
    groupName: "Grupo 3 — Innovación y Diferenciación",
    name: "Creativo y Abstracto",
    styleGroup: "Estilo Creativo y Abstracto",
    description: "Gradientes vibrantes y layout audaz. Diferenciación total frente a consultoras tradicionales.",
    audience: "Marcas que buscan ruptura visual y memorabilidad",
    colors: {
      primary: "#1A0A2E", accent: "#A855F7", bg: "#0F0A1A", surface: "#1A1028",
      text: "#F0E6FF", muted: "#9B8AB8", border: "#2D1F45",
      heroBg: "linear-gradient(135deg, #1A0A2E 0%, #4C1D95 50%, #0E7490 100%)",
      heroText: "#FFFFFF", onPrimary: "#FFFFFF",
    },
    fonts: {
      display: "'Syne', system-ui, sans-serif",
      body: "'Syne', system-ui, sans-serif",
      googleUrl: "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&display=swap",
    },
    shape: { radius: "1.5rem", buttonRadius: "2rem", cardRadius: "1.5rem" },
    flags: { darkHero: true, serifDisplay: false, angular: false, blueprint: false, neonGlow: false, minimalShadow: false, creative: true },
    preview: "linear-gradient(135deg, #1A0A2E, #A855F7, #0E7490)",
  },
  ludico: {
    id: "ludico",
    groupId: "innovacion",
    groupName: "Grupo 3 — Innovación y Diferenciación",
    name: "Lúdico y Accesible",
    styleGroup: "Estilo Lúdico y Divertido",
    description: "Formas redondeadas y colores cálidos. Ideal para cursos, capacitaciones y onboarding.",
    audience: "Programas de formación y comunicación interna",
    colors: {
      primary: "#1E3A5F", accent: "#F59E0B", bg: "#FFFBF5", surface: "#FFFFFF",
      text: "#1E3A5F", muted: "#6B7280", border: "#FDE68A",
      heroBg: "linear-gradient(160deg, #1E3A5F 0%, #2563EB 100%)",
      heroText: "#FFFFFF", onPrimary: "#FFFFFF",
    },
    fonts: {
      display: "'Quicksand', system-ui, sans-serif",
      body: "'Quicksand', system-ui, sans-serif",
      googleUrl: "https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap",
    },
    shape: { radius: "1.5rem", buttonRadius: "2rem", cardRadius: "1.5rem" },
    flags: { darkHero: true, serifDisplay: false, angular: false, blueprint: false, neonGlow: false, minimalShadow: false },
    preview: "linear-gradient(160deg, #1E3A5F, #F59E0B)",
  },
};

export const themeList = Object.values(themes);

export function getThemesByGroup(groupId: ThemeGroupId): WebTheme[] {
  return themeList.filter((t) => t.groupId === groupId);
}

/** Orden de revisión: Grupo 1 → 2 → 3, 5 estilos cada uno */
export const orderedThemeIds: ThemeId[] = themeGroups.flatMap((g) =>
  getThemesByGroup(g.id).map((t) => t.id)
);

export function getTheme(id: string): WebTheme | undefined {
  return themes[id as ThemeId];
}

export function getAdjacentThemes(currentId: ThemeId): {
  prev: WebTheme | null;
  next: WebTheme | null;
  index: number;
  total: number;
} {
  const index = orderedThemeIds.indexOf(currentId);
  const total = orderedThemeIds.length;
  const prevId = index > 0 ? orderedThemeIds[index - 1] : null;
  const nextId = index < total - 1 ? orderedThemeIds[index + 1] : null;
  return {
    prev: prevId ? themes[prevId] : null,
    next: nextId ? themes[nextId] : null,
    index: index + 1,
    total,
  };
}

export const allThemeIds = orderedThemeIds;
