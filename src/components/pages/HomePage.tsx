"use client";

import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { LocaleProvider } from "@/context/LocaleProvider";
import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/sections/Hero";

export default function HomePage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <LocaleProvider locale={locale} dictionary={dictionary}>
      <SiteLayout>
        <main id="main-content">
          <Hero />
        </main>
      </SiteLayout>
    </LocaleProvider>
  );
}
