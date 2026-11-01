import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { JsonLd, homeJsonLd } from "@/components/seo/JsonLd";
import { buildHomeMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildHomeMetadata("en");

export default function EnglishPage() {
  return (
    <>
      <JsonLd data={homeJsonLd("en")} />
      <HomePage locale="en" />
    </>
  );
}
