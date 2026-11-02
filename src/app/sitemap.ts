import type { MetadataRoute } from "next";
import { pagePath } from "@/lib/locale-path";
import { PAGE_SLUGS } from "@/lib/pages";
import { absoluteUrlWithSlash, siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.contentLastUpdated);
  const entries: MetadataRoute.Sitemap = [
    {
      url: absoluteUrlWithSlash("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrlWithSlash("/en"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  for (const slug of PAGE_SLUGS) {
    entries.push({
      url: absoluteUrlWithSlash(pagePath("es", slug)),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    });
    entries.push({
      url: absoluteUrlWithSlash(pagePath("en", slug)),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
