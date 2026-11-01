import { en } from "@/i18n/dictionaries/en";
import { es } from "@/i18n/dictionaries/es";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { pagePath } from "@/lib/locale-path";
import { PAGE_SLUGS, type PageSlug } from "@/lib/pages";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

function pageUrl(locale: Locale, slug?: PageSlug): string {
  const path = pagePath(locale, slug);
  return absoluteUrl(path.endsWith("/") ? path : `${path}/`);
}

function pageLines(dict: Dictionary, locale: Locale): string {
  const labels = new Map(
    [...dict.nav.primary, ...dict.nav.more].map((item) => [item.href, item.label]),
  );
  const home = `- [${locale === "es" ? "Inicio" : "Home"}](${pageUrl(locale)}): ${dict.meta.description}`;
  const rest = PAGE_SLUGS.map((slug) => {
    const label = labels.get(`/${slug}`) ?? slug;
    return `- [${label}](${pageUrl(locale, slug)})`;
  });
  return [home, ...rest].join("\n");
}

/** Índice en texto plano para buscadores y asistentes. No se muestra en la página. */
export function buildLlmsTxt(): string {
  const offices = es.contact.offices
    .map((office) => `- ${office.city}: ${office.address.replace(/\.$/, "")}. ${office.phone}`)
    .join("\n");
  const people = es.team.people
    .map((person) => `- ${person.name}, ${person.role}. ${person.email}. ${person.phone}`)
    .join("\n");
  const services = es.services.items.map((item) => `- ${item.title}: ${item.description}`).join("\n");
  const industries = es.industries.items.map((item) => `- ${item.name}: ${item.description}`).join("\n");
  const credentials = es.credibility.credentials.map((item) => `- ${item.name}`).join("\n");
  const figures = es.credibility.kpis.map((kpi) => `${kpi.value}${kpi.suffix} ${kpi.label.toLowerCase()}`).join(". ");

  return `# ${siteConfig.legalName}

> ${es.meta.description}

El sitio canónico es ${siteConfig.url}. monitoring.cl, monitoring.pe y monitoring.com.pe son alias de ese sitio.

## Qué es

${es.meta.description}
${es.team.presence}
${figures}. ${es.credibility.kpis[2]?.description ?? ""}
Correo general: ${siteConfig.email}.

## Certificaciones

El equipo publica estas certificaciones y esta formación:
${credentials}

${es.credibility.credentialsNote}

## Industrias

${es.industries.subtitle}
${industries}

## Servicios

${es.services.subtitle}
${services}

MMi es tecnología de Monitoring. ${es.services.items.find((item) => item.id === "transformacion-digital")?.callout?.description ?? ""} ${es.mmi.hero.subtitle} Demostración: https://mmi.monitoring.lat/demostracion

## Oficinas

${offices}

## Dirección

${people}

## Español

${pageLines(es, "es")}

## English

${en.meta.description}
${en.team.presence}

Certifications published for the consultants:
${en.credibility.credentials.map((item) => `- ${item.name}`).join("\n")}

${en.credibility.credentialsNote}

${pageLines(en, "en")}
`;
}
