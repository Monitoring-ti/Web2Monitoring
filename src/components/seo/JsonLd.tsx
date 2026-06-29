import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { siteConfig } from "@/lib/site-config";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd(dict: Dictionary, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: dict.meta.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: ["CL", "LATAM"],
    knowsAbout: siteConfig.industries,
    slogan: dict.meta.tagline,
    inLanguage: locale,
    sameAs: [] as string[],
  };
}

export function webSiteJsonLd(dict: Dictionary, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.shortName,
    url: siteConfig.url,
    description: dict.meta.description,
    inLanguage: locale,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
  };
}
