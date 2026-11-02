import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { getDictionary } from "@/i18n/get-dictionary";
import { pagePath } from "@/lib/locale-path";
import { getPageMeta, type PageSlug } from "@/lib/pages";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

interface JsonLdProps {
  data: Record<string, unknown>;
}

const ORG_ID = `${siteConfig.url}/#organization`;
const SITE_ID = `${siteConfig.url}/#website`;

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

function organizationNode(dict: Dictionary) {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
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

function websiteNode(dict: Dictionary, locale: Locale) {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    name: siteConfig.shortName,
    url: siteConfig.url,
    description: dict.meta.description,
    inLanguage: locale,
    publisher: { "@id": ORG_ID },
  };
}

function navigationNode(dict: Dictionary, locale: Locale) {
  const home = absoluteUrl(locale === "es" ? "/" : "/en/");
  const sections = [
    { name: locale === "es" ? "Empresa" : "Company", url: home },
    ...dict.nav.primary.map((item) => ({
      name: item.label,
      url: absoluteUrl(`${locale === "es" ? "" : "/en"}${item.href}/`),
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

export function homeJsonLd(locale: Locale) {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(dict), websiteNode(dict, locale), navigationNode(dict, locale)],
  };
}

export function pageJsonLd(locale: Locale, slug: PageSlug) {
  const dict = getDictionary(locale);
  const meta = getPageMeta(locale, slug);
  const url = absoluteUrl(pagePath(locale, slug));
  const home = absoluteUrl(locale === "es" ? "/" : "/en/");
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
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
