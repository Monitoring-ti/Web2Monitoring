export const siteConfig = {
  name: "Monitoring Consultora",
  shortName: "Monitoring",
  legalName: "Monitoring SpA",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://monitoring.lat",
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
  /** Perfiles oficiales que respaldan la identidad de marca ante los buscadores. */
  sameAs: ["https://www.linkedin.com/company/monitoring-spa"],
  /**
   * Fecha de la última revisión del contenido. Va fija a propósito: si el sitemap
   * usa la hora del build, cada despliegue le dice a Google que todo cambió y
   * se gasta el presupuesto de rastreo en páginas que no se movieron.
   */
  contentLastUpdated: "2026-11-01",
} as const;

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

/**
 * URL absoluta con barra final. El sitio usa `trailingSlash: true`, así que la
 * canonical que emite Next la lleva. El sitemap y el índice de texto deben
 * apuntar exactamente a la misma URL que la canonical.
 */
export function absoluteUrlWithSlash(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized.endsWith("/") ? normalized : `${normalized}/`}`;
}
