import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { localeOg } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { pagePath } from "@/lib/locale-path";
import { getPageMeta, type PageSlug } from "@/lib/pages";
import { absoluteUrl } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";

const searchTitle = {
  es: "Monitoring | Gestión de activos",
  en: "Monitoring | Asset management",
} as const;

/** Propuesta de valor primero y NAP al final, dentro del recorte del snippet. */
const searchDescription = {
  es: "Ingeniería en gestión de activos, mantenimiento y confiabilidad para minería, energía, celulosa y puertos. Santiago, Calama y Lima. soporte@monitoring.cl.",
  en: "Engineering in asset management, maintenance and reliability for mining, energy, pulp and ports. Santiago, Calama and Lima. soporte@monitoring.cl.",
} as const;

export function buildHomeMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  const path = locale === "es" ? "/" : `/${locale}`;
  const title = searchTitle[locale];
  const description = searchDescription[locale];

  return {
    title: { absolute: title },
    description,
    keywords: [...dict.meta.keywords],
    alternates: {
      canonical: absoluteUrl(path),
      languages: {
        es: absoluteUrl("/"),
        en: absoluteUrl("/en"),
        "x-default": absoluteUrl("/"),
      },
    },
    openGraph: {
      type: "website",
      locale: localeOg[locale],
      url: absoluteUrl(path),
      siteName: siteConfig.shortName,
      title,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: dict.meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export function buildPageMetadata(locale: Locale, slug: PageSlug): Metadata {
  const dict = getDictionary(locale);
  const { title, description } = getPageMeta(locale, slug);
  const path = pagePath(locale, slug);

  return {
    title,
    description,
    keywords: [...dict.meta.keywords],
    alternates: {
      canonical: absoluteUrl(path),
      languages: {
        es: absoluteUrl(pagePath("es", slug)),
        en: absoluteUrl(pagePath("en", slug)),
        "x-default": absoluteUrl(pagePath("es", slug)),
      },
    },
    openGraph: {
      type: "website",
      locale: localeOg[locale],
      url: absoluteUrl(path),
      siteName: siteConfig.shortName,
      title,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: dict.meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
