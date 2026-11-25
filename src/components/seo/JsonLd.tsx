import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { getDictionary } from "@/i18n/get-dictionary";
import { pagePath } from "@/lib/locale-path";
import { getPageMeta, type PageSlug } from "@/lib/pages";
import { absoluteUrlWithSlash, siteConfig } from "@/lib/site-config";

interface JsonLdProps {
  data: Record<string, unknown>;
}

const BASE_URL = siteConfig.url.replace(/\/$/, "");
const ORG_ID = `${BASE_URL}/#organization`;
const SITE_ID = `${BASE_URL}/#website`;

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function countryCode(city: string): string {
  const country = city.split(",").pop()?.trim().toLowerCase() ?? "";
  if (country.startsWith("per")) return "PE";
  if (country.startsWith("mex")) return "MX";
  return "CL";
}

function officeSlug(city: string): string {
  return (city.split(",")[0] ?? city)
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-");
}

function organizationNode(dict: Dictionary) {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: absoluteUrlWithSlash("/"),
    logo: `${BASE_URL}/logo.png`,
    image: `${BASE_URL}${siteConfig.ogImage}`,
    description: dict.meta.description,
    slogan: dict.meta.tagline,
    sameAs: [...siteConfig.sameAs],
    email: siteConfig.email,
    telephone: dict.contact.offices[0]?.phone ?? siteConfig.phone,
    address: dict.contact.offices.map((office) => ({
      "@type": "PostalAddress",
      streetAddress: office.address.replace(/\.$/, ""),
      addressLocality: office.city.split(",")[0]?.trim(),
      addressCountry: countryCode(office.city),
      telephone: office.phone,
    })),
    areaServed: [
      { "@type": "Country", name: "Chile" },
      { "@type": "Country", name: "Peru" },
      { "@type": "Country", name: "Mexico" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.email,
      telephone: dict.contact.offices[0]?.phone ?? siteConfig.phone,
      availableLanguage: ["Spanish", "English"],
      areaServed: ["CL", "PE", "MX"],
    },
    knowsAbout: [
      ...dict.industries.items.map((item) => item.name),
      ...dict.services.items.map((item) => item.title),
      "MMi",
      "RCM",
      "FMECA",
      "RCA",
      "SAP PM",
      "Operational Readiness",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: dict.services.title,
      itemListElement: dict.services.items.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.description,
          provider: { "@id": ORG_ID },
        },
      })),
    },
    employee: dict.team.people.map((person) => ({
      "@type": "Person",
      name: person.name,
      jobTitle: person.role,
      email: person.email,
      telephone: person.phone,
      worksFor: { "@id": ORG_ID },
    })),
  };
}

function officeNodes(dict: Dictionary, locale: Locale) {
  const contactUrl = absoluteUrlWithSlash(pagePath(locale, "contacto"));
  return dict.contact.offices.map((office) => {
    const locality = office.city.split(",")[0]?.trim() ?? office.city;
    const country = countryCode(office.city);
    return {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#office-${officeSlug(office.city)}`,
      name: `${siteConfig.shortName} — ${locality}`,
      url: contactUrl,
      image: `${BASE_URL}${siteConfig.ogImage}`,
      telephone: office.phone,
      email: siteConfig.email,
      parentOrganization: { "@id": ORG_ID },
      address: {
        "@type": "PostalAddress",
        streetAddress: office.address.replace(/\.$/, ""),
        addressLocality: locality,
        addressCountry: country,
      },
      areaServed: {
        "@type": "Country",
        name: country === "PE" ? "Peru" : "Chile",
      },
    };
  });
}

function websiteNode(dict: Dictionary, locale: Locale) {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    name: siteConfig.shortName,
    url: absoluteUrlWithSlash("/"),
    description: dict.meta.description,
    inLanguage: locale,
    publisher: { "@id": ORG_ID },
  };
}

function navigationNode(dict: Dictionary, locale: Locale) {
  const home = absoluteUrlWithSlash(locale === "es" ? "/" : "/en");
  const sections = [
    { name: locale === "es" ? "Empresa" : "Company", url: home },
    ...dict.nav.primary.map((item) => ({
      name: item.label,
      url: absoluteUrlWithSlash(`${locale === "es" ? "" : "/en"}${item.href}`),
    })),
  ];

  return {
    "@type": "ItemList",
    name: locale === "es" ? "Secciones" : "Sections",
    itemListElement: sections.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

function faqPageNode(dict: Dictionary, page: "home" | "services" | "mmi", pageUrl: string) {
  const items = dict.faq.items.filter((item) => item.pages.includes(page));
  if (items.length === 0) return null;

  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function homeJsonLd(locale: Locale) {
  const dict = getDictionary(locale);
  const homeUrl = absoluteUrlWithSlash(locale === "es" ? "/" : "/en");
  const faqNode = faqPageNode(dict, "home", homeUrl);

  const graph: Record<string, unknown>[] = [
    organizationNode(dict),
    ...officeNodes(dict, locale),
    websiteNode(dict, locale),
    navigationNode(dict, locale),
  ];
  if (faqNode) graph.push(faqNode);

  return { "@context": "https://schema.org", "@graph": graph };
}

export function pageJsonLd(locale: Locale, slug: PageSlug) {
  const dict = getDictionary(locale);
  const meta = getPageMeta(locale, slug);
  const url = absoluteUrlWithSlash(pagePath(locale, slug));
  const home = absoluteUrlWithSlash(locale === "es" ? "/" : "/en");
  const crumbLabel =
    [...dict.nav.primary, ...dict.nav.more].find((item) => item.href === `/${slug}`)?.label ?? meta.title;

  const graph: Record<string, unknown>[] = [
    organizationNode(dict),
    websiteNode(dict, locale),
    {
      "@type": slug === "contacto" ? "ContactPage" : "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: meta.title,
      description: meta.description,
      inLanguage: locale,
      isPartOf: { "@id": SITE_ID },
      about: { "@id": ORG_ID },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: locale === "es" ? "Inicio" : "Home",
          item: home,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: crumbLabel,
          item: url,
        },
      ],
    },
  ];

  if (slug === "contacto") {
    graph.push(...officeNodes(dict, locale));
  }

  if (slug === "servicios") {
    graph.push({
      "@type": "ItemList",
      name: dict.services.title,
      itemListElement: dict.services.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        description: item.description,
        url: `${url}#${item.id}`,
      })),
    });
    const faqNode = faqPageNode(dict, "services", url);
    if (faqNode) graph.push(faqNode);
  }

  if (slug === "mmi") {
    graph.push({
      "@type": "SoftwareApplication",
      name: dict.mmi.brand,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: dict.mmi.hero.subtitle,
      url: "https://mmi.monitoring.lat/",
      provider: { "@id": ORG_ID },
    });
    const faqNode = faqPageNode(dict, "mmi", url);
    if (faqNode) graph.push(faqNode);
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
