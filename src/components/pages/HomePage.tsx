"use client";

import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { LocaleProvider } from "@/context/LocaleProvider";
import { useSiteVersion } from "@/context/SiteVersion";
import SiteLayout from "@/components/layout/SiteLayout";
import SoftHome from "@/components/pages/SoftHome";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";

export default function HomePage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <LocaleProvider locale={locale} dictionary={dictionary}>
      <HomeBody />
    </LocaleProvider>
  );
}

function HomeBody() {
  const { version } = useSiteVersion();

  if (version === "soft") {
    return <SoftHome />;
  }

  return (
    <SiteLayout>
      <main id="main-content">
        <Hero />
        <Clients />
      </main>
    </SiteLayout>
  );
}
