import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "@/components/pages/ContentPage";
import { JsonLd, pageJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/metadata";
import { isValidPageSlug, PAGE_SLUGS } from "@/lib/pages";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isValidPageSlug(slug)) return {};
  return buildPageMetadata("es", slug);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  if (!isValidPageSlug(slug)) {
    notFound();
  }

  return (
    <>
      <JsonLd data={pageJsonLd("es", slug)} />
      <ContentPage locale="es" slug={slug} />
    </>
  );
}
