export const CLIENT_PORTAL_URL =
  process.env.NEXT_PUBLIC_CLIENT_PORTAL_URL ?? "https://sistema.monitoring.cl";

/**
 * El build de GitHub Pages publica una copia espejo del sitio. No debe indexarse
 * ni canonicizarse: el dominio canónico es el del hosting principal.
 */
export const IS_STATIC_EXPORT = process.env.GITHUB_PAGES === "true";
