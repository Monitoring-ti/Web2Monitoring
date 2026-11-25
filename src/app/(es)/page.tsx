import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { JsonLd, homeJsonLd } from "@/components/seo/JsonLd";
import { buildHomeMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildHomeMetadata("es");

export default function Page() {
  return (
    <>
      <JsonLd data={homeJsonLd("es")} />
      <HomePage locale="es" />
    </>
  );
}
