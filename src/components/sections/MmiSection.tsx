"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Cpu,
  FolderSearch,
  GitBranch,
  Layers,
  ScanSearch,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Reveal, RevealList } from "@/components/lib/motion";
import { MmiExample, MmiFlow, MmiProcess } from "@/components/sections/MmiVisuals";
import { useDictionary, useLocale } from "@/context/LocaleProvider";
import { pagePath } from "@/lib/locale-path";

const capabilityIcons = [Layers, GitBranch, ScanSearch, ShieldCheck];
const differentialIcons = [FolderSearch, Workflow, Layers, GitBranch, ShieldCheck];

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
        <div className="container-custom grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
              {m.example.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-4">
              {m.example.title}
            </h2>
            <p className="text-muted text-base leading-relaxed mb-6">{m.example.subtitle}</p>
            <ul className="space-y-3">
              {m.principles.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-primary/80">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
              {m.problem.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-5">
              {m.problem.title}
            </h2>
            <p className="text-muted text-base leading-relaxed mb-8">{m.problem.lead}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <blockquote className="rounded-2xl border border-border bg-surface p-5">
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted mb-2">
                  {m.problem.notThisLabel}
                </p>
                <p className="text-primary/70 text-sm line-through decoration-muted/60">{m.problem.notThis}</p>
              </blockquote>
              <blockquote className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
                <p className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2">
                  {m.problem.thisIsLabel}
                </p>
                <p className="text-primary text-sm font-medium leading-relaxed">{m.problem.thisIs}</p>
              </blockquote>
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-4">
              {m.problem.notReplaceLabel}
            </p>
            <ul className="space-y-3">
              {m.problem.notReplace.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-primary/80">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted leading-relaxed border-t border-border pt-5">
              {m.problem.worksWith}
            </p>
          </div>
        </div>
      </section>

      <section id="aliado" className="section-padding bg-surface border-b border-border">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
              {m.ally.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-4">
              {m.ally.title}
            </h2>
            <p className="text-muted text-base leading-relaxed">{m.ally.subtitle}</p>
          </div>

          <div className="max-w-xl mx-auto flex flex-col items-center text-center gap-3">
            {m.ally.layers.map((layer) => (
              <div key={layer} className="w-full">
                <div className="rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm">
                  {layer}
                </div>
                <ArrowDown size={16} className="mx-auto mt-3 text-accent/80" aria-hidden="true" />
              </div>
            ))}
            <div className="w-full rounded-2xl bg-hero text-white px-6 py-8 border border-white/10 shadow-lg">
              <p className="font-display text-xl font-extrabold mb-1">{m.ally.boxTitle}</p>
              <p className="text-white/70 text-sm">{m.ally.boxSubtitle}</p>
            </div>
            <ArrowDown size={16} className="text-accent/80" aria-hidden="true" />
            <p className="font-display text-base font-bold text-primary">{m.ally.outcome}</p>
            <p className="text-sm text-muted">{m.ally.specialistNote}</p>
          </div>
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

      <section className="section-padding bg-white border-b border-border">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
              {m.differentials.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-4">
              {m.differentials.title}
            </h2>
            <p className="text-muted text-base leading-relaxed">{m.differentials.subtitle}</p>
          </div>
          <RevealList items={m.differentials.items} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {(item, i) => {
              const Icon = differentialIcons[i] ?? FolderSearch;
              return (
                <article
                  key={item.title}
                  role="listitem"
                  className="rounded-2xl border border-border bg-surface p-5"
                >
                  <Icon size={18} className="text-accent mb-3" aria-hidden="true" />
                  <h3 className="font-display text-sm font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted text-xs leading-relaxed">{item.description}</p>
                </article>
              );
            }}
          </RevealList>
        </div>
      </section>

      <section className="section-padding bg-surface border-b border-border">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
              {m.specialists.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-4">
              {m.specialists.title}
            </h2>
            <p className="text-muted text-base leading-relaxed">{m.specialists.subtitle}</p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="rounded-2xl bg-hero text-white text-center px-6 py-4 font-display font-bold">
              {m.specialists.coordinator}
            </div>
            <ArrowDown size={16} className="mx-auto my-3 text-accent" aria-hidden="true" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {m.specialists.roles.map((role) => (
                <div
                  key={role}
                  className="rounded-xl border border-border bg-white px-4 py-4 text-center text-sm font-semibold text-primary"
                >
                  {role}
                </div>
              ))}
            </div>
            <ArrowDown size={16} className="mx-auto my-3 text-accent" aria-hidden="true" />
            <div className="rounded-2xl border-2 border-accent/40 bg-white text-center px-6 py-4 font-display font-bold text-primary">
              {m.specialists.verifier}
            </div>
          </div>

          <p className="text-xs font-bold uppercase tracking-widest text-muted mb-4">
            {m.specialists.functionTitle}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {m.specialists.functions.map((fn) => (
              <li
                key={fn}
                className="flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-3 text-sm text-primary/80"
              >
                <CheckCircle2 size={14} className="text-accent shrink-0" aria-hidden="true" />
                {fn}
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted">{m.specialists.note}</p>
        </div>
      </section>

      <section id="servicios-mmi" className="section-padding bg-white border-b border-border">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
              {m.services.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-4">
              {m.services.title}
            </h2>
            <p className="text-muted text-base leading-relaxed">{m.services.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" role="list">
            {m.services.items.map((item) => (
              <article
                key={item.title}
                role="listitem"
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <h3 className="font-display text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{item.description}</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2">
                  {m.services.contributesLabel}
                </p>
                <ul className="space-y-1.5">
                  {item.contributes.map((point) => (
                    <li key={point} className="text-sm text-primary/80 flex items-start gap-2">
                      <span className="text-accent mt-1" aria-hidden="true">
                        •
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <article className="rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
            <h3 className="font-display text-lg font-bold text-primary mb-3">{m.services.digitalTitle}</h3>
            <p className="text-muted text-sm leading-relaxed mb-6">{m.services.digitalLead}</p>
            <ol className="flex flex-wrap items-center gap-2 text-sm font-semibold text-primary">
              {m.services.digitalChain.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span className="rounded-lg bg-white border border-border px-3 py-1.5">{step}</span>
                  {i < m.services.digitalChain.length - 1 && (
                    <ArrowRight size={14} className="text-accent" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </article>
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

      <section className="section-padding bg-white border-b border-border">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
              {m.demo.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-4">
              {m.demo.title}
            </h2>
            <p className="text-muted text-base leading-relaxed mb-4">{m.demo.subtitle}</p>
            <p className="text-primary/80 text-sm leading-relaxed">{m.demo.context}</p>
          </div>
          <RevealList items={m.demo.steps} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {(step, i) => (
              <li key={step.title} className="rounded-2xl border border-border bg-surface p-5">
                <span className="text-accent font-display text-sm font-extrabold">0{i + 1}</span>
                <h3 className="font-display text-base font-bold text-primary mt-2 mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.text}</p>
              </li>
            )}
          </RevealList>
          <p className="text-sm font-medium text-primary border-l-2 border-accent pl-4">{m.demo.result}</p>
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
          <p className="text-white/45 text-sm mt-10 italic">{m.cta.principle}</p>
        </div>
      </section>
    </div>
  );
}
