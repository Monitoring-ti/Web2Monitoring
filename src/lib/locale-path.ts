import type { Locale } from "@/i18n/config";
import { defaultLocale } from "@/i18n/config";
import type { PageSlug } from "@/lib/pages";
import { isValidPageSlug } from "@/lib/pages";

/** Ruta base de la landing según idioma (es = /, en = /en). */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

/** Ruta de una página interna según idioma. */
export function pagePath(locale: Locale, slug?: PageSlug | null): string {
  const base = localePath(locale);
  if (!slug) return base;
  return base === "/" ? `/${slug}` : `${base}/${slug}`;
}

/** Resuelve un href de navegación (ej. /servicios) al path completo con locale. */
export function resolveNavPath(locale: Locale, href: string): string {
  if (href === "/") return localePath(locale);
  const base = localePath(locale);
  return base === "/" ? href : `${base}${href}`;
}

/** Alterna entre español e inglés conservando la misma página. */
export function alternateLocalePath(current: Locale, slug?: PageSlug | null): string {
  const target: Locale = current === "es" ? "en" : "es";
  return pagePath(target, slug);
}

/** Extrae el slug de página desde un pathname (sin locale). */
export function slugFromPathname(pathname: string): PageSlug | null {
  const segments = pathname.replace(/\/$/, "").split("/").filter(Boolean);
  if (segments.length === 0) return null;
  if (segments[0] === "en") {
    const slug = segments[1];
    return slug && isValidPageSlug(slug) ? slug : null;
  }
  const slug = segments[0];
  return slug && isValidPageSlug(slug) ? slug : null;
}
