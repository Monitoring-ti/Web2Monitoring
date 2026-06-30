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

export const PAGE_SLUGS = [
  "credibilidad",
  "diferenciadores",
  "servicios",
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
  const brand = "Monitoring";

  const meta: Record<PageSlug, { title: string; description: string }> = {
    credibilidad: {
      title: `${dict.credibility.title} | ${brand}`,
      description: dict.credibility.kpis[0]?.description ?? dict.meta.description,
    },
    diferenciadores: {
      title: `${dict.differentiators.title} | ${brand}`,
      description: dict.differentiators.subtitle,
    },
    servicios: {
      title: `${dict.services.title} | ${brand}`,
      description: dict.services.subtitle,
    },
    industrias: {
      title: `${dict.industries.title} | ${brand}`,
      description: dict.industries.subtitle,
    },
    casos: {
      title: `${dict.cases.title} | ${brand}`,
      description: dict.cases.subtitle,
    },
    equipo: {
      title: `${dict.team.title} | ${brand}`,
      description: dict.team.subtitle,
    },
    actualidad: {
      title: `${dict.news.title} | ${brand}`,
      description: dict.news.subtitle,
    },
    biblioteca: {
      title: `${dict.library.title} | ${brand}`,
      description: dict.library.subtitle,
    },
    contacto: {
      title: `${dict.contact.title} | ${brand}`,
      description: dict.contact.subtitle,
    },
  };

  return meta[slug];
}
