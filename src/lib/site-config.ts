export const siteConfig = {
  name: "Monitoring Consultora",
  shortName: "Monitoring",
  legalName: "Monitoring SpA",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://monitoring.cl",
  locale: "es_CL",
  language: "es",
  email: "soporte@monitoring.cl",
  supportEmail: "ti.soporte@monitoring.cl",
  phone: "+56 2 2235 3090",
  tagline: "Optimizando sus activos desde la primera jugada",
  description:
    "Consultora de ingeniería en gestión de activos físicos, mantenimiento y confiabilidad. Minería, energía, celulosa, puertos e industria.",
  keywords: [
    "gestión de activos",
    "confiabilidad operacional",
    "ingeniería de mantenimiento",
    "SAP PM",
    "EPCM",
    "EPC",
    "consultora minería Chile",
    "asset management",
    "mantenimiento industrial",
    "celulosa",
    "puertos",
    "excelencia operacional",
  ],
  ogImage: "/images/hero-ajedrez-mineria.jpg",
  twitterHandle: undefined as string | undefined,
  address: {
    country: "CL",
    region: "Región Metropolitana",
  },
  industries: ["Minería", "Energía", "Celulosa", "Puertos", "Industria"],
} as const;

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
