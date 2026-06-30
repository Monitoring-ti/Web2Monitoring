"use client";

import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { LocaleProvider } from "@/context/LocaleProvider";
import SiteLayout from "@/components/layout/SiteLayout";
import CtaBanner from "@/components/sections/CtaBanner";
import { PAGE_COMPONENTS, type PageSlug } from "@/lib/pages";

interface ContentPageProps {
  locale: Locale;
  slug: PageSlug;
}

export default function ContentPage({ locale, slug }: ContentPageProps) {
  const dictionary = getDictionary(locale);
  const Section = PAGE_COMPONENTS[slug];
  const showCta = slug !== "contacto";

  return (
    <LocaleProvider locale={locale} dictionary={dictionary}>
      <SiteLayout showFloatingCta={showCta}>
        <main id="main-content" className="pt-16">
          <Section />
          {showCta && <CtaBanner />}
        </main>
      </SiteLayout>
    </LocaleProvider>
  );
}
