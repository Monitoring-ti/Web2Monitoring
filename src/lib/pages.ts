import type { ComponentType } from "react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import Credibility from "@/components/sections/Credibility";
import Differentiators from "@/components/sections/Differentiators";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import CaseStudies from "@/components/sections/CaseStudies";
import TeamField from "@/components/sections/TeamField";
import News from "@/components/sections/News";
import Library from "@/components/sections/Library";
import Contact from "@/components/sections/Contact";
import Mmi from "@/components/sections/MmiSection";

export const PAGE_SLUGS = [
  "credibilidad",
  "diferenciadores",
  "servicios",
  "mmi",
  "industrias",
  "casos",
  "equipo",
  "actualidad",
  "biblioteca",
  "contacto",
] as const;

export type PageSlug = (typeof PAGE_SLUGS)[number];

export const PAGE_COMPONENTS: Record<PageSlug, ComponentType> = {
  credibilidad: Credibility,
  diferenciadores: Differentiators,
  servicios: Services,
  mmi: Mmi,
  industrias: Industries,
  casos: CaseStudies,
  equipo: TeamField,
  actualidad: News,
  biblioteca: Library,
  contacto: Contact,
};

export function isValidPageSlug(slug: string): slug is PageSlug {
  return (PAGE_SLUGS as readonly string[]).includes(slug);
}

export function getPageMeta(locale: Locale, slug: PageSlug) {
  const dict = getDictionary(locale);

  const meta: Record<PageSlug, { title: string; description: string }> = {
    credibilidad: {
      title: dict.credibility.title,
      description: dict.credibility.kpis[0]?.description ?? dict.meta.description,
    },
    diferenciadores: {
      title: dict.differentiators.title,
      description: dict.differentiators.subtitle,
    },
    servicios: {
      title: locale === "es"
        ? "Gestión de activos, confiabilidad y SAP PM"
        : "Asset management, reliability and SAP PM",
      description: locale === "es"
        ? "Servicios de gestión de activos físicos, confiabilidad operacional, ingeniería de mantenimiento y SAP PM, supply chain, excelencia operacional y transformación digital. Minería, energía, celulosa, puertos e industria."
        : "Services in physical asset management, operational reliability, maintenance engineering and SAP PM, supply chain, operational excellence and digital transformation. Mining, energy, pulp, ports and industry.",
    },
    mmi: {
      title: dict.mmi.hero.title,
      description: dict.mmi.hero.subtitle,
    },
    industrias: {
      title: dict.industries.title,
      description: dict.industries.subtitle,
    },
    casos: {
      title: dict.cases.title,
      description: dict.cases.subtitle,
    },
    equipo: {
      title: dict.team.title,
      description: dict.team.subtitle,
    },
    actualidad: {
      title: dict.news.title,
      description: dict.news.subtitle,
    },
    biblioteca: {
      title: dict.library.title,
      description: dict.library.subtitle,
    },
    contacto: {
      title: locale === "es" ? "Contacto" : "Contact",
      description: locale === "es"
        ? "Oficinas en Santiago, Calama y Lima. Antonio Varas 303, of. 410, Providencia. Bartolomé Vivar 1580, of. 501, Calama. Av. José Pardo 601, of. 1002, Miraflores. +56 2 2235 3090. soporte@monitoring.cl."
        : "Offices in Santiago, Calama and Lima. Antonio Varas 303, office 410, Providencia. Bartolomé Vivar 1580, office 501, Calama. Av. José Pardo 601, office 1002, Miraflores. +56 2 2235 3090. soporte@monitoring.cl.",
    },
  };

  return meta[slug];
}
