import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_ORIGIN = "https://monitoring.lat";

/** Dominios que deben verse como monitoring.lat. .cl queda listo para cuando el DNS apunte a este sitio. */
const ALIAS_HOSTS = new Set([
  "www.monitoring.lat",
  "monitoring.pe",
  "www.monitoring.pe",
  "monitoring.com.pe",
  "www.monitoring.com.pe",
  "monitoring.cl",
  "www.monitoring.cl",
]);

/** Rutas internas de Next: no se redirigen ni pasan por el optimizador. */
const INTERNAL_PREFIX = "/_next/";

/** Un archivo tiene extensión si el último segmento incluye un punto. */
const HAS_EXTENSION = /\/[^/]*\.[^/]+$/;

/**
 * Next sirve el HTML prerenderizado con `s-maxage=31536000`: la CDN del hosting
 * lo guarda un año y, tras un despliegue, sigue entregando el contenido viejo
 * a quien visita y a los rastreadores. Se acorta a diez minutos con
 * revalidación en segundo plano, para que un push se vea en el sitio sin
 * depender de que alguien limpie la caché a mano.
 */
const HTML_CACHE_CONTROL = "public, max-age=0, s-maxage=600, stale-while-revalidate=86400";

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();

  if (ALIAS_HOSTS.has(host)) {
    const destination = new URL(request.nextUrl.pathname + request.nextUrl.search, CANONICAL_ORIGIN);
    return NextResponse.redirect(destination, 301);
  }

  // El sitio vive con barra final (canónica y sitemap la incluyen). Next resuelve
  // esa redirección con una regla interna que también captura `/_next/image`, la
  // ruta del optimizador de imágenes, y obliga a cada imagen a un 308 antes de
  // servirse. Como esa regla se desactivó en next.config.js, la barra final de
  // las páginas se resuelve aquí, donde el orden es explícito.
  const { pathname } = request.nextUrl;
  const needsTrailingSlash =
    pathname !== "/" &&
    !pathname.startsWith(INTERNAL_PREFIX) &&
    !pathname.endsWith("/") &&
    !HAS_EXTENSION.test(pathname);

  if (needsTrailingSlash) {
    const destination = new URL(
      `${pathname}/${request.nextUrl.search}`,
      request.url,
    );
    return NextResponse.redirect(destination, 308);
  }

  const response = NextResponse.next();

  if (!pathname.startsWith(INTERNAL_PREFIX)) {
    response.headers.set("Cache-Control", HTML_CACHE_CONTROL);
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
