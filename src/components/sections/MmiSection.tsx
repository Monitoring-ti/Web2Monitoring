"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, GitBranch, Layers, ScanSearch, ShieldCheck } from "lucide-react";
import { RevealList } from "@/components/lib/motion";
import { MmiExample, MmiFlow, MmiProcess } from "@/components/sections/MmiVisuals";
import { useDictionary, useLocale } from "@/context/LocaleProvider";
import { pagePath } from "@/lib/locale-path";

const capabilityIcons = [Layers, GitBranch, ScanSearch, ShieldCheck];

export default function Mmi() {
  const t = useDictionary();
  const locale = useLocale();
  const contactPath = pagePath(locale, "contacto");
  const m = t.mmi;

  return (
    <div aria-label="Propuesta de valor principal">
      <section className="relative overflow-hidden bg-hero pt-20 pb-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-[-20%] right-[-8%] w-[640px] h-[640px] rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #E85D26 0%, transparent 70%)" }}
        />

        <div className="container-custom relative z-10 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">
              {m.hero.eyebrow}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              {m.hero.title}{" "}
              <span className="text-gradient">{m.hero.titleHighlight}</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-4">
              {m.hero.subtitle}
            </p>
            <p className="text-white/90 font-semibold text-sm sm:text-base mb-8">{m.hero.formula}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#como-funciona" aria-label={m.hero.ctaPrimaryAria} className="btn-primary">
                {m.hero.ctaPrimary}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <Link
                href={contactPath}
                aria-label={m.hero.ctaSecondaryAria}
                className="btn-outline-white"
              >
                {m.hero.ctaSecondary}
              </Link>
            </div>
          </div>
          <MmiFlow flow={m.flow} />
        </div>
      </section>

      <section className="section-padding bg-white border-b border-border" aria-label={m.example.title}>
        <div className="container-custom grid items-start gap-6 lg:grid-cols-12">
          <article className="rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8 lg:col-span-5">
            <h2 className="mb-4 font-display text-xl font-bold leading-snug text-primary sm:text-2xl">
              {m.example.title}
            </h2>
            <p className="text-sm leading-relaxed text-primary/80">{m.example.subtitle}</p>
            <ul className="mt-6 space-y-3 border-t border-border pt-5">
              {m.principles.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-primary/80">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <div className="lg:col-span-7">
            <MmiExample example={m.example} />
          </div>
        </div>
      </section>

      <section id="como-funciona" className="section-padding bg-surface border-b border-border">
        <div className="container-custom">
          <div className="max-w-3xl mb-10">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
              {m.process.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-4">
              {m.process.title}
            </h2>
            <p className="text-muted text-base leading-relaxed">{m.process.subtitle}</p>
          </div>
          <MmiProcess process={m.process} />
        </div>
      </section>

      <section className="section-padding bg-white border-b border-border">
        <div className="container-custom">
          <div className="max-w-3xl mb-10">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
              {m.sources.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-4">
              {m.sources.title}
            </h2>
            <p className="text-muted text-base leading-relaxed">{m.sources.subtitle}</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {m.sources.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-primary/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-surface border-b border-border">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
              {m.capabilities.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-4">
              {m.capabilities.title}
            </h2>
            <p className="text-muted text-base leading-relaxed">{m.capabilities.subtitle}</p>
          </div>
          <RevealList items={m.capabilities.items} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(item, i) => {
              const Icon = capabilityIcons[i] ?? Cpu;
              return (
                <article
                  key={item.title}
                  role="listitem"
                  className="rounded-2xl border border-border bg-white p-6 hover:shadow-card transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                </article>
              );
            }}
          </RevealList>
        </div>
      </section>

      <section className="section-padding bg-surface border-b border-border">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
              {m.evidence.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-4">
              {m.evidence.title}
            </h2>
            <p className="text-muted text-base leading-relaxed mb-6">{m.evidence.subtitle}</p>
            <p className="font-display text-lg font-bold text-primary">{m.evidence.closing}</p>
          </div>
          <ul className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {m.evidence.chain.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-border bg-white px-5 py-4 text-sm font-semibold text-primary"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 bg-hero relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 max-w-3xl mx-auto">
            {m.cta.title}
          </h2>
          <p className="text-white/65 text-base leading-relaxed max-w-2xl mx-auto mb-8">{m.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={contactPath} aria-label={m.cta.primaryAria} className="btn-primary">
              {m.cta.primary}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href={contactPath} aria-label={m.cta.secondaryAria} className="btn-outline-white">
              {m.cta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
