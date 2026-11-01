import type { MetadataRoute } from "next";
import { IS_STATIC_EXPORT } from "@/lib/config";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

const aiSearchBots = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
];

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // La copia espejo de GitHub Pages no se indexa: el canónico está en el hosting principal.
  if (IS_STATIC_EXPORT) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  const allowSite = { allow: "/", disallow: ["/acceso-cliente", "/api/"] };

  return {
    rules: [
      { userAgent: "*", ...allowSite },
      ...aiSearchBots.map((userAgent) => ({ userAgent, ...allowSite })),
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
