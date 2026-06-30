import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "@/components/pages/ContentPage";
import { buildPageMetadata } from "@/lib/metadata";
import { isValidPageSlug, PAGE_SLUGS } from "@/lib/pages";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!isValidPageSlug(params.slug)) return {};
  return buildPageMetadata("en", params.slug);
}

export default function EnglishContentPage({ params }: PageProps) {
  if (!isValidPageSlug(params.slug)) {
    notFound();
  }

  return <ContentPage locale="en" slug={params.slug} />;
}
