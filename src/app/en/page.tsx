import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { JsonLd, organizationJsonLd, webSiteJsonLd } from "@/components/seo/JsonLd";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildHomeMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildHomeMetadata("en");

export default function EnglishPage() {
  const dict = getDictionary("en");

  return (
    <>
      <JsonLd data={organizationJsonLd(dict, "en")} />
      <JsonLd data={webSiteJsonLd(dict, "en")} />
      <HomePage locale="en" />
    </>
  );
}
