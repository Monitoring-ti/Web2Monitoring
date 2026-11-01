"use client";

import { useDictionary } from "@/context/LocaleProvider";
import { presentationClients } from "@/data/presentation";
import { CredibilityFigures } from "@/components/sections/Credibility";
import LogoMarquee from "@/components/sections/LogoMarquee";

export default function Clients() {
  const t = useDictionary();

  return (
    <section
      id="clientes"
      aria-labelledby="clientes-title"
      className="section-padding overflow-hidden bg-surface border-b border-border"
    >
      <div className="container-custom">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-accent">
            {t.clients.eyebrow}
          </span>
          <h2
            id="clientes-title"
            className="mb-4 font-display text-3xl font-extrabold text-primary sm:text-4xl"
          >
            {t.clients.title}
          </h2>
          <p className="text-base leading-relaxed text-muted">{t.clients.subtitle}</p>
        </div>
        <CredibilityFigures />
      </div>

      <LogoMarquee items={presentationClients} label={t.clients.aria} />
    </section>
  );
}
