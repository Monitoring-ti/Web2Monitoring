"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { images } from "@/data/images";
import { useDictionary, useLocale } from "@/context/LocaleProvider";
import { pagePath, resolveNavPath } from "@/lib/locale-path";
import { siteConfig } from "@/lib/site-config";
import { MmiFlow } from "@/components/sections/MmiVisuals";

const featuredCaseIds = ["operational-readiness", "planificacion", "confiabilidad", "estrategia-molienda"];

const sectionTitle = "mb-2 block text-xs font-bold uppercase tracking-widest text-accent";

export function Challenges() {
  const t = useDictionary();
  const locale = useLocale();
  const block = t.story.challenges;

  return (
    <section id="desafios" aria-label={block.aria} className="section-padding scroll-mt-40 bg-white">
      <div className="container-custom">
        <div className="mb-12 max-w-3xl">
          <span className={sectionTitle}>{block.eyebrow}</span>
          <h2 className="mb-5 font-display text-3xl font-extrabold text-primary sm:text-4xl">{block.title}</h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">{block.subtitle}</p>
        </div>
        <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {block.items.map((item, index) => (
            <li key={item.title}>
              <Link
                href={resolveNavPath(locale, item.href)}
                className="flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
              >
                <span className="mb-3 font-display text-sm font-bold text-accent">0{index + 1}</span>
                <h3 className="mb-2 font-display text-lg font-bold text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function HomeServices() {
  const t = useDictionary();
  const locale = useLocale();

  return (
    <section id="servicios" aria-label={t.services.aria} className="section-padding scroll-mt-40 bg-surface">
      <div className="container-custom">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <span className={sectionTitle}>{t.services.eyebrow}</span>
            <h2 className="mb-5 font-display text-3xl font-extrabold text-primary sm:text-4xl">{t.services.title}</h2>
            <p className="text-base leading-relaxed text-muted sm:text-lg">{t.services.subtitle}</p>
          </div>
          <Link
            href={pagePath(locale, "servicios")}
            aria-label={t.story.servicesMoreAria}
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-primary hover:text-accent"
          >
            {t.story.servicesMore}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service) => {
            const href = service.ctaHref
              ? resolveNavPath(locale, service.ctaHref)
              : `${pagePath(locale, "servicios")}#${service.id}`;
            return (
              <li key={service.id}>
                <Link
                  href={href}
                  className="flex h-full flex-col justify-between rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-card-hover"
                >
                  <div>
                    <h3 className="mb-2 font-display text-lg font-bold text-primary">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{service.description}</p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-accent">
                    {service.ctaText}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function FeaturedResults() {
  const t = useDictionary();
  const locale = useLocale();
  const block = t.story.results;
  const items = featuredCaseIds.flatMap((id) => {
    const item = t.cases.items.find((entry) => entry.id === id);
    return item ? [item] : [];
  });

  return (
    <section id="resultados" aria-label={block.aria} className="section-padding scroll-mt-40 bg-white">
      <div className="container-custom">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <span className={sectionTitle}>{block.eyebrow}</span>
            <h2 className="mb-5 font-display text-3xl font-extrabold text-primary sm:text-4xl">{block.title}</h2>
            <p className="text-base leading-relaxed text-muted sm:text-lg">{block.subtitle}</p>
          </div>
          <Link
            href={pagePath(locale, "casos")}
            aria-label={block.moreAria}
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-primary hover:text-accent"
          >
            {block.more}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={`${pagePath(locale, "casos")}#${item.id}`}
                className="flex h-full flex-col rounded-3xl border-t-4 border-accent bg-white p-7 transition-shadow hover:shadow-card-hover"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent">{item.tag}</p>
                <h3 className="mb-3 mt-2 font-display text-xl font-bold text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.body}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WorkMethod() {
  const block = useDictionary().story.method;

  return (
    <section id="forma-de-trabajo" aria-label={block.aria} className="section-padding scroll-mt-40 bg-surface">
      <div className="container-custom">
        <div className="mb-12 max-w-3xl">
          <span className={sectionTitle}>{block.eyebrow}</span>
          <h2 className="mb-5 font-display text-3xl font-extrabold text-primary sm:text-4xl">{block.title}</h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">{block.subtitle}</p>
        </div>
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {block.steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-border bg-white p-6">
              <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mb-2 font-display text-lg font-bold text-primary">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FieldExperience() {
  const t = useDictionary();
  const locale = useLocale();
  const block = t.story.field;
  const photos = images.galeria.slice(0, 3);

  return (
    <section id="terreno" aria-label={block.aria} className="section-padding scroll-mt-40 bg-white">
      <div className="container-custom">
        <div className="mb-10 max-w-3xl">
          <span className={sectionTitle}>{block.eyebrow}</span>
          <h2 className="mb-5 font-display text-3xl font-extrabold text-primary sm:text-4xl">{block.title}</h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">{t.team.subtitle}</p>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {photos.map((photo, index) => (
            <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <Image
                src={photo.src}
                alt={t.team.galleryAlts[index] ?? photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <ul className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.team.people.map((person) => (
            <li key={person.email} className="rounded-2xl border border-border bg-surface p-5">
              <p className="font-display font-bold text-primary">{person.name}</p>
              <p className="mt-1 text-sm text-muted">{person.role}</p>
            </li>
          ))}
        </ul>
        <Link
          href={pagePath(locale, "equipo")}
          aria-label={block.ctaAria}
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent"
        >
          {block.cta}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export function TechCapability() {
  const t = useDictionary();
  const locale = useLocale();
  const home = t.mmi.home;

  return (
    <section id="capacidad" aria-label={home.aria} className="scroll-mt-40 bg-hero py-14 text-white lg:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-accent">{home.eyebrow}</span>
            <h2 className="mb-4 font-display text-3xl font-extrabold text-[#A5A9EF] sm:text-4xl">{home.title}</h2>
            <p className="mb-6 text-base leading-relaxed text-white/75 sm:text-lg">{home.subtitle}</p>
            <Link
              href={pagePath(locale, "mmi")}
              aria-label={home.ctaAria}
              className="btn-primary inline-flex px-6 py-3 text-sm"
            >
              {home.cta}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <MmiFlow flow={t.mmi.flow} />
        </div>
      </div>
    </section>
  );
}

export function HomeInvite() {
  const t = useDictionary();
  const locale = useLocale();
  const block = t.story.contact;

  return (
    <section id="contacto" aria-label={block.aria} className="section-padding scroll-mt-40 bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <span className={sectionTitle}>{t.contact.eyebrow}</span>
          <h2 className="mb-5 font-display text-3xl font-extrabold text-primary sm:text-4xl">{t.contact.title}</h2>
          <p className="mb-8 text-base leading-relaxed text-muted sm:text-lg">{t.contact.body}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={pagePath(locale, "contacto")}
              aria-label={block.ctaAria}
              className="btn-primary px-8 py-4 text-sm sm:text-base"
            >
              {block.cta}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a href={`mailto:${siteConfig.email}`} className="text-sm font-bold text-primary hover:text-accent">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
