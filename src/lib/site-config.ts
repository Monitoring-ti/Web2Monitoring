export const siteConfig = {
  name: "Monitoring Consultora",
  shortName: "Monitoring",
  legalName: "Monitoring Consultora Ltda.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://monitoring.cl",
  locale: "es_CL",
  language: "es",
  email: "contacto@monitoring.cl",
  phone: "+56 2 2345 6789",
  tagline: "Optimizando sus activos desde la primera jugada",
  description:
    "Consultora especializada en gestión de activos, confiabilidad operacional e ingeniería de mantenimiento con SAP PM. Desde proyectos EPCM/EPC hasta la operación en minería, Oil&Gas, celulosa y energía.",
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
    "oil and gas",
    "celulosa",
    "excelencia operacional",
  ],
  ogImage: "/images/hero-faena-mineria.jpg",
  twitterHandle: undefined as string | undefined,
  address: {
    country: "CL",
    region: "Región Metropolitana",
  },
  industries: ["Minería", "Oil & Gas", "Celulosa", "Energía", "Industria"],
} as const;

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
