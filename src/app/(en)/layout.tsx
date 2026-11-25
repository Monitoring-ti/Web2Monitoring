import type { Metadata } from "next";
import RootDocument, { buildRootMetadata } from "@/components/layout/RootDocument";

export const metadata: Metadata = buildRootMetadata("en");

export default function EnglishRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
