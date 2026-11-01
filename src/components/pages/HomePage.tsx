"use client";

import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { LocaleProvider } from "@/context/LocaleProvider";
import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import {
  Challenges,
  FeaturedResults,
  FieldExperience,
  HomeInvite,
  HomeServices,
  TechCapability,
  WorkMethod,
} from "@/components/sections/HomeNarrative";

export default function HomePage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <LocaleProvider locale={locale} dictionary={dictionary}>
      <HomeBody />
    </LocaleProvider>
  );
}

function HomeBody() {
  return (
    <SiteLayout>
      <main id="main-content">
        <Hero />
        <Clients />
        <Challenges />
        <HomeServices />
        <FeaturedResults />
        <WorkMethod />
        <FieldExperience />
        <TechCapability />
        <HomeInvite />
      </main>
    </SiteLayout>
  );
}
