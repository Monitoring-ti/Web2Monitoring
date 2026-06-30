import type { MetadataRoute } from "next";
import { pagePath } from "@/lib/locale-path";
import { PAGE_SLUGS } from "@/lib/pages";
import { absoluteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/en"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  for (const slug of PAGE_SLUGS) {
    entries.push({
      url: absoluteUrl(pagePath("es", slug)),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
    entries.push({
      url: absoluteUrl(pagePath("en", slug)),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
