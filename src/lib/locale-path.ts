import type { Locale } from "@/i18n/config";
import { defaultLocale } from "@/i18n/config";

/** Ruta base de la landing según idioma (es = /, en = /en). */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

/** Alterna entre español e inglés conservando la misma página. */
export function alternateLocalePath(current: Locale): string {
  return current === "es" ? "/en" : "/";
}
