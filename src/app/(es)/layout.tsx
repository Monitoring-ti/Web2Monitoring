import type { Metadata } from "next";
import RootDocument, { buildRootMetadata } from "@/components/layout/RootDocument";

export const metadata: Metadata = buildRootMetadata("es");

export default function SpanishRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootDocument lang="es">{children}</RootDocument>;
}
