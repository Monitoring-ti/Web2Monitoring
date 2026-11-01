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

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();
  if (!ALIAS_HOSTS.has(host)) return NextResponse.next();

  const destination = new URL(request.nextUrl.pathname + request.nextUrl.search, CANONICAL_ORIGIN);
  return NextResponse.redirect(destination, 301);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
