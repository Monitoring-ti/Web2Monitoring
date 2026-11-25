import { en } from "@/i18n/dictionaries/en";
import { es } from "@/i18n/dictionaries/es";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { pagePath } from "@/lib/locale-path";
import { PAGE_SLUGS, type PageSlug } from "@/lib/pages";
import { absoluteUrlWithSlash, siteConfig } from "@/lib/site-config";

function pageUrl(locale: Locale, slug?: PageSlug): string {
  return absoluteUrlWithSlash(pagePath(locale, slug));
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

function formatOffices(dict: Dictionary): string {
  return dict.contact.offices
    .map((office) => `- ${office.city}: ${office.address.replace(/\.$/, "")}. ${office.phone}`)
    .join("\n");
}

function formatPeople(dict: Dictionary): string {
  return dict.team.people
    .map((person) => `- ${person.name}, ${person.role}. ${person.email}. ${person.phone}`)
    .join("\n");
}

function formatServices(dict: Dictionary): string {
  return dict.services.items.map((item) => `- ${item.title}: ${item.description}`).join("\n");
}

function formatIndustries(dict: Dictionary): string {
  return dict.industries.items.map((item) => `- ${item.name}: ${item.description}`).join("\n");
}

function formatCredentials(dict: Dictionary): string {
  return dict.credibility.credentials.map((item) => `- ${item.name}`).join("\n");
}

function formatCases(dict: Dictionary): string {
  return dict.cases.items
    .map((item) => `- **${item.tag} — ${item.title}**: ${item.body}`)
    .join("\n");
}

function formatFaqs(dict: Dictionary): string {
  return dict.faq.items.map((item) => `### ${item.question}\n${item.answer}`).join("\n\n");
}

/** Índice en texto plano para buscadores y asistentes. No se muestra en la página. */
export function buildLlmsTxt(): string {
  const figures = es.credibility.kpis
    .map((kpi) => `${kpi.value}${kpi.suffix} ${kpi.label.toLowerCase()}`)
    .join(". ");

  return `# ${siteConfig.legalName}

> ${es.meta.description}

El sitio canónico es ${siteConfig.url}. monitoring.cl, monitoring.pe y monitoring.com.pe son alias que redirigen (301) a ese sitio.
Versión extendida con casos, MMi y preguntas frecuentes: ${absoluteUrlWithSlash("/").replace(/\/$/, "")}/llms-full.txt

## Qué es

${es.meta.description}
${es.team.presence}
${figures}. ${es.credibility.kpis[2]?.description ?? ""}
Correo general: ${siteConfig.email}.

## Certificaciones

El equipo publica estas certificaciones y esta formación:
${formatCredentials(es)}

${es.credibility.credentialsNote}

## Industrias

${es.industries.subtitle}
${formatIndustries(es)}

## Servicios

${es.services.subtitle}
${formatServices(es)}

MMi es tecnología de Monitoring. ${es.services.items.find((item) => item.id === "transformacion-digital")?.callout?.description ?? ""} ${es.mmi.hero.subtitle} Demostración: https://mmi.monitoring.lat/demostracion

## Oficinas

${formatOffices(es)}

## Dirección

${formatPeople(es)}

## Español

${pageLines(es, "es")}

## English

${en.meta.description}
${en.team.presence}

Certifications published for the consultants:
${formatCredentials(en)}

${en.credibility.credentialsNote}

${pageLines(en, "en")}
`;
}

/** Versión extendida para asistentes e indexadores de IA con casos, MMi y FAQs. */
export function buildLlmsFullTxt(): string {
  const figuresEs = es.credibility.kpis
    .map((kpi) => `${kpi.value}${kpi.suffix} ${kpi.label.toLowerCase()}`)
    .join(". ");
  const figuresEn = en.credibility.kpis
    .map((kpi) => `${kpi.value}${kpi.suffix} ${kpi.label.toLowerCase()}`)
    .join(". ");
  const differentiatorsEs = es.differentiators.items
    .map((item) => `- **${item.title}**: ${item.description} (${item.proof})`)
    .join("\n");
  const mmiProcessEs = es.mmi.process.items
    .map((item, index) => `${index + 1}. **${item.title}**: ${item.text}`)
    .join("\n");
  const mmiServicesEs = es.mmi.services.items
    .map((item) => `- **${item.title}**: ${item.description} Aporta: ${item.contributes.join(", ")}.`)
    .join("\n");

  const differentiatorsEn = en.differentiators.items
    .map((item) => `- **${item.title}**: ${item.description} (${item.proof})`)
    .join("\n");
  const mmiProcessEn = en.mmi.process.items
    .map((item, index) => `${index + 1}. **${item.title}**: ${item.text}`)
    .join("\n");
  const mmiServicesEn = en.mmi.services.items
    .map((item) => `- **${item.title}**: ${item.description} Contributes: ${item.contributes.join(", ")}.`)
    .join("\n");

  return `# ${siteConfig.legalName} — Contexto completo

> ${es.meta.description}

Sitio canónico: ${siteConfig.url}
Dominios alias (301 hacia el canónico): monitoring.cl, monitoring.pe, monitoring.com.pe
LinkedIn oficial: ${siteConfig.sameAs[0]}
Contacto general: ${siteConfig.email} · ${siteConfig.phone}

## Perfil de la empresa (ES)

${es.hero.subtitle}
${es.team.presence}
${figuresEs}. ${es.credibility.kpis[2]?.description ?? ""}

### Diferenciadores
${differentiatorsEs}

### Certificaciones y formación de consultores
${formatCredentials(es)}
Nota: ${es.credibility.credentialsNote}

## Industrias atendidas

${es.industries.subtitle}
${formatIndustries(es)}

## Servicios y metodologías

${es.services.subtitle}
${formatServices(es)}

## Casos de negocio destacados

${es.cases.subtitle}
${formatCases(es)}

## MMi by Monitoring (Inteligencia de mantenimiento)

${es.mmi.hero.subtitle}
${es.mmi.hero.formula}
${es.mmi.problem.lead}

No reemplaza: ${es.mmi.problem.notReplace.join(", ")}.
Principios: ${es.mmi.principles.join(". ")}.
Fuentes documentales que organiza: ${es.mmi.sources.items.join(", ")}.

### Proceso en 5 pasos
${mmiProcessEs}

### Integración con servicios Monitoring
${mmiServicesEs}

## Preguntas frecuentes (ES)

${formatFaqs(es)}

## Oficinas y dirección

### Oficinas
${formatOffices(es)}

### Dirección
${formatPeople(es)}

## URLs en Español

${pageLines(es, "es")}

---

# ${siteConfig.legalName} — English Summary

> ${en.meta.description}

${en.hero.subtitle}
${en.team.presence}
${figuresEn}. ${en.credibility.kpis[2]?.description ?? ""}

## Company Profile (EN)

${en.hero.subtitle}
${en.team.presence}
${figuresEn}. ${en.credibility.kpis[2]?.description ?? ""}

### Differentiators
${differentiatorsEn}

### Consultant Certifications and Training
${formatCredentials(en)}
Note: ${en.credibility.credentialsNote}

## Industries

${en.industries.subtitle}
${formatIndustries(en)}

## Services

${en.services.subtitle}
${formatServices(en)}

## Featured Case Studies

${en.cases.subtitle}
${formatCases(en)}

## MMi by Monitoring

${en.mmi.hero.subtitle}
${en.mmi.hero.formula}
${en.mmi.problem.lead}
Does not replace: ${en.mmi.problem.notReplace.join(", ")}.
Principles: ${en.mmi.principles.join(". ")}.
Source documents organized: ${en.mmi.sources.items.join(", ")}.

### 5-step process
${mmiProcessEn}

### Integration with Monitoring services
${mmiServicesEn}

## Frequently Asked Questions (EN)

${formatFaqs(en)}

## Offices and Leadership

### Offices
${formatOffices(en)}

### Leadership
${formatPeople(en)}

## English URLs

${pageLines(en, "en")}
`;
}
