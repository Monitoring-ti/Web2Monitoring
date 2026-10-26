"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import VersionSwitch from "@/components/layout/VersionSwitch";
import { getSoftCopy, softImages } from "@/content/soft-site";
import { useLocale } from "@/context/LocaleProvider";
import { localePath } from "@/lib/locale-path";
import { siteConfig } from "@/lib/site-config";

function Flag({ code }: { code: "cl" | "pe" }) {
  if (code === "pe") {
    return (
      <svg className="mt-1 h-6 w-9 shrink-0 rounded-sm border border-black/10" viewBox="0 0 30 20" aria-hidden="true">
        <rect width="30" height="20" fill="#D91023" />
        <rect x="7.5" width="15" height="20" fill="#fff" />
      </svg>
    );
  }

  return (
    <svg className="mt-1 h-6 w-9 shrink-0 rounded-sm border border-black/10" viewBox="0 0 30 20" aria-hidden="true">
      <rect width="30" height="20" fill="#D52B1E" />
      <rect x="10" width="20" height="10" fill="#fff" />
      <rect width="10" height="10" fill="#0039A6" />
      <polygon points="5,2 5.9,4.2 8.3,4.3 6.4,5.8 7.1,8.1 5,6.8 2.9,8.1 3.6,5.8 1.7,4.3 4.1,4.2" fill="#fff" />
    </svg>
  );
}

export default function SoftHome() {
  const locale = useLocale();
  const copy = getSoftCopy(locale);
  const home = localePath(locale);

  return (
    <div className="soft-site bg-white font-display text-tinta">
      <header className="sticky top-0 z-50 border-b border-[#e3e6f0] bg-white/95 backdrop-blur">
        <div className="flex justify-center border-b border-[#e3e6f0] py-2">
          <VersionSwitch />
        </div>
        <div className="mx-auto flex max-w-[1160px] flex-col items-center justify-between gap-2 px-6 py-2.5 sm:flex-row sm:gap-5">
          <Link href={`${home}#inicio`} aria-label="Monitoring">
            <Image src="/logo.png" alt="Monitoring" width={180} height={48} className="h-11 w-auto" priority />
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-1" aria-label={copy.hero.tag}>
              {copy.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-2.5 py-1.5 text-[12.5px] font-semibold sm:px-3 sm:py-2 sm:text-sm ${
                    item.cta ? "bg-accent text-white" : "text-primary hover:bg-fondo-claro"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <LanguageSwitcher scrolled />
            </nav>
        </div>
      </header>

      <section id="inicio" className="bg-gradient-to-b from-white to-fondo-claro py-10 sm:py-16">
        <div className="mx-auto grid max-w-[1160px] items-center gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3.5 text-[13px] font-extrabold uppercase tracking-[0.18em] text-accent">{copy.hero.tag}</p>
            <h1 className="text-[34px] font-extrabold leading-[1.08] text-primary sm:text-5xl lg:text-[56px]">
              {copy.hero.before}
              <span className="text-accent">{copy.hero.emphasis}</span>
              {copy.hero.after}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted sm:text-xl">{copy.hero.lead}</p>
            <div className="mt-7 flex flex-wrap gap-3.5">
              <a href="#servicios" className="rounded-full bg-primary px-6 py-3.5 text-base font-bold text-white hover:bg-primary-600">
                {copy.hero.primary}
              </a>
              <a href="#contacto" className="rounded-full border-2 border-primary px-6 py-3.5 text-base font-bold text-primary hover:bg-primary hover:text-white">
                {copy.hero.secondary}
              </a>
            </div>
          </div>
          <Image
            src={softImages.cover}
            alt={copy.hero.imageAlt}
            width={900}
            height={879}
            priority
            className="mx-auto w-full max-w-[520px]"
          />
        </div>
      </section>

      <section id="nosotros" className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-[1160px] items-center gap-11 px-6 lg:grid-cols-2">
          <div>
            <p className="mb-3.5 text-[13px] font-extrabold uppercase tracking-[0.18em] text-accent">{copy.about.tag}</p>
            <h2 className="mb-3.5 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">{copy.about.title}</h2>
            <p className="text-lg text-muted">{copy.about.body}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              {copy.about.stats.map((stat) => (
                <div key={stat.label} className="rounded-[20px] bg-primary px-7 py-5 text-white">
                  <b className="block text-4xl leading-none text-accent">{stat.value}</b>
                  <span className="text-[15px]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <blockquote className="rounded-[20px] border-2 border-fondo-claro bg-white p-7 text-lg font-semibold text-primary">
            <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.14em] text-accent">
              {copy.about.missionLabel}
            </span>
            {copy.about.mission}
          </blockquote>
        </div>
      </section>

      <section id="filosofia" className="bg-fondo-claro py-14 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <p className="mb-3.5 text-[13px] font-extrabold uppercase tracking-[0.18em] text-accent">{copy.philosophy.tag}</p>
          <h2 className="mb-3.5 max-w-4xl text-3xl font-extrabold leading-tight text-primary sm:text-4xl">{copy.philosophy.title}</h2>
          <p className="mb-9 max-w-3xl text-lg text-muted">{copy.philosophy.subtitle}</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {copy.philosophy.cards.map((card, index) => (
              <article
                key={card.title}
                className={`rounded-[20px] p-7 shadow-[0_6px_22px_rgba(51,42,131,0.08)] ${
                  index === 0 ? "bg-primary text-white" : "bg-white"
                }`}
              >
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl text-xl font-extrabold text-white ${
                    index === 0 ? "bg-accent" : "bg-primary"
                  }`}
                >
                  {card.n}
                </div>
                <h3 className={`mb-2.5 text-xl font-extrabold ${index === 0 ? "text-white" : "text-primary"}`}>{card.title}</h3>
                <p className={index === 0 ? "text-[#dcd9f5]" : "text-muted"}>{card.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {copy.philosophy.chips.map((chip) => (
              <span key={chip} className="rounded-full border border-[#d6d9e6] bg-white px-4 py-2 text-sm font-semibold text-primary">
                {chip}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.philosophy.photos.map((photo) => (
              <figure key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-fondo-claro">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent px-3.5 pb-3 pt-8 text-sm font-semibold leading-snug text-white">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-7 flex items-center gap-3.5 rounded-[20px] bg-accent px-6 py-5 text-lg font-bold text-white">
            <span aria-hidden="true" className="text-3xl">
              ⛑
            </span>
            {copy.philosophy.safety}
          </p>
        </div>
      </section>

      <section id="servicios" className="py-14 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <p className="mb-3.5 text-[13px] font-extrabold uppercase tracking-[0.18em] text-accent">{copy.services.tag}</p>
          <h2 className="mb-3.5 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">{copy.services.title}</h2>
          <p className="mb-9 max-w-3xl text-lg text-muted">{copy.services.subtitle}</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {copy.services.items.map((item) => (
              <article key={item.title} className="rounded-[20px] bg-white p-7 shadow-[0_6px_22px_rgba(51,42,131,0.08)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-xl font-extrabold text-white">
                  {item.icon}
                </div>
                <h3 className="mb-2.5 text-xl font-extrabold text-primary">{item.title}</h3>
                <ul>
                  {item.points.map((point) => (
                    <li key={point} className="relative py-1.5 pl-5 text-muted before:absolute before:left-0 before:top-3.5 before:h-2 before:w-2 before:rounded-full before:bg-accent">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ia" className="bg-gradient-to-br from-primary to-primary-600 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <p className="mb-3.5 text-[13px] font-extrabold uppercase tracking-[0.18em] text-accent">{copy.ia.tag}</p>
          <h2 className="mb-3.5 text-3xl font-extrabold leading-tight text-white sm:text-4xl">{copy.ia.title}</h2>
          <p className="mb-9 max-w-3xl text-lg text-[#dcd9f5]">{copy.ia.subtitle}</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {copy.ia.steps.map((step) => (
              <article key={step.n} className="rounded-[20px] bg-white/10 p-6">
                <b className="mb-2 block text-sm tracking-[0.1em] text-accent">{step.n}</b>
                <h3 className="mb-1.5 text-lg font-extrabold text-white">{step.title}</h3>
                <p className="text-[15px] text-[#dcd9f5]">{step.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 rounded-[20px] bg-white px-6 py-5 text-[17px] font-semibold text-primary">
            <b className="text-accent">{copy.ia.noteLead}</b>
            {copy.ia.note}
          </p>
        </div>
      </section>

      <section id="industrias" className="py-14 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <p className="mb-3.5 text-[13px] font-extrabold uppercase tracking-[0.18em] text-accent">{copy.industries.tag}</p>
          <h2 className="text-3xl font-extrabold leading-tight text-primary sm:text-4xl">{copy.industries.title}</h2>
          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[20px] bg-primary p-7 text-white">
              <h3 className="mb-2.5 text-xl font-extrabold text-white">{copy.industries.miningTitle}</h3>
              <ul>
                {copy.industries.mining.map((item) => (
                  <li key={item.label} className="relative py-1.5 pl-5 text-[#dcd9f5] before:absolute before:left-0 before:top-3.5 before:h-2 before:w-2 before:rounded-full before:bg-accent">
                    <b className="text-white">{item.label}</b>
                    {item.text}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-[20px] bg-white p-7 shadow-[0_6px_22px_rgba(51,42,131,0.08)]">
              <h3 className="mb-2.5 text-xl font-extrabold text-primary">{copy.industries.otherTitle}</h3>
              <ul>
                {copy.industries.other.map((item) => (
                  <li key={item} className="relative py-1.5 pl-5 text-muted before:absolute before:left-0 before:top-3.5 before:h-2 before:w-2 before:rounded-full before:bg-accent">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="casos" className="bg-fondo-claro py-14 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <p className="mb-3.5 text-[13px] font-extrabold uppercase tracking-[0.18em] text-accent">{copy.cases.tag}</p>
          <h2 className="text-3xl font-extrabold leading-tight text-primary sm:text-4xl">{copy.cases.title}</h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {copy.cases.items.map((item) => (
              <article key={item.title} className="rounded-[20px] border-t-4 border-accent bg-white p-7 shadow-[0_6px_22px_rgba(51,42,131,0.08)]">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-accent">{item.k}</p>
                <h3 className="mb-2.5 mt-2 text-xl font-extrabold text-primary">{item.title}</h3>
                <p className="text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="clientes" className="py-14 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <p className="mb-3.5 text-[13px] font-extrabold uppercase tracking-[0.18em] text-accent">{copy.clients.tag}</p>
          <h2 className="text-3xl font-extrabold leading-tight text-primary sm:text-4xl">{copy.clients.title}</h2>
          <div className="mt-7 overflow-hidden rounded-[20px] bg-white p-5 shadow-[0_6px_22px_rgba(51,42,131,0.08)]">
            <Image src={softImages.clients} alt={copy.clients.alt} width={1800} height={822} className="h-auto w-full" />
          </div>
        </div>
      </section>

      <section id="certificaciones" className="bg-fondo-claro py-14 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <p className="mb-3.5 text-[13px] font-extrabold uppercase tracking-[0.18em] text-accent">{copy.certs.tag}</p>
          <h2 className="mb-3.5 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">{copy.certs.title}</h2>
          <p className="mb-8 max-w-3xl text-lg text-muted">{copy.certs.subtitle}</p>
          <div className="overflow-hidden rounded-[20px] bg-white p-5 shadow-[0_6px_22px_rgba(51,42,131,0.08)]">
            <Image src={softImages.certs} alt={copy.certs.alt} width={1800} height={822} className="h-auto w-full" />
          </div>
        </div>
      </section>

      <section id="contacto" className="py-14 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <p className="mb-3.5 text-[13px] font-extrabold uppercase tracking-[0.18em] text-accent">{copy.contact.tag}</p>
          <h2 className="mb-3.5 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">{copy.contact.title}</h2>
          <p className="mb-9 max-w-3xl text-lg text-muted">
            {copy.contact.before}
            <a href={`mailto:${siteConfig.email}`} className="font-bold text-primary">
              {siteConfig.email}
            </a>
            {copy.contact.after}
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {copy.contact.offices.map((office) => (
              <article key={office.city} className="flex gap-3.5 rounded-[20px] bg-white p-7 shadow-[0_6px_22px_rgba(51,42,131,0.08)]">
                <Flag code={office.flag} />
                <div>
                  <h3 className="text-lg font-extrabold text-primary">{office.city}</h3>
                  {office.lines.map((line) => (
                    <p key={line} className="text-[15.5px] text-muted">
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-8 inline-block rounded-full bg-primary px-6 py-3.5 text-base font-bold text-white hover:bg-primary-600"
          >
            {copy.contact.cta}
          </a>
        </div>
      </section>

      <footer className="bg-navy py-9 text-sm text-[#c8cbe0]">
        <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-5 px-6">
          <Image src="/logo.png" alt="Monitoring" width={160} height={44} className="h-11 w-auto rounded-[10px] bg-white px-2 py-1" />
          <p>
            {copy.footerLine}
            <br />
            {copy.footerSite}
          </p>
        </div>
      </footer>
    </div>
  );
}
