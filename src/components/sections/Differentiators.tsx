"use client";

import Link from "next/link";
import { ArrowRight, Handshake, ShieldCheck, Users, Cpu } from "lucide-react";
import { RevealList, Reveal } from "@/components/lib/motion";
import { useDictionary, useLocale } from "@/context/LocaleProvider";
import { pagePath } from "@/lib/locale-path";

const diffIcons = [Handshake, ShieldCheck, Users, Cpu];

export default function Differentiators() {
  const t = useDictionary();
  const locale = useLocale();
  const mmiPath = pagePath(locale, "mmi");

  return (
    <section
      id="diferenciadores"
      aria-label={t.differentiators.aria}
      className="section-padding bg-white border-b border-border"
    >
      <div className="container-custom">
        <div className="max-w-3xl mb-14">
          <Reveal>
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
              {t.differentiators.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-5">
              {t.differentiators.title}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-muted text-base sm:text-lg leading-relaxed">{t.differentiators.subtitle}</p>
          </Reveal>
        </div>

        <RevealList
          items={t.differentiators.items}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {(item, i) => {
            const Icon = diffIcons[i] ?? Handshake;
            const isMmi = i === t.differentiators.items.length - 1;

            return (
              <article
                key={item.title}
                role="listitem"
                className="rounded-2xl border border-border p-8 bg-surface hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                  <Icon className="text-accent" size={22} aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{item.description}</p>
                <p className="text-xs font-semibold text-accent/90 border-t border-border pt-4">
                  {item.proof}
                </p>
                {isMmi && (
                  <Link
                    href={mmiPath}
                    className="inline-flex items-center gap-1.5 mt-4 text-xs font-bold text-primary hover:text-accent"
                  >
                    {t.mmi.home.cta}
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                )}
              </article>
            );
          }}
        </RevealList>
      </div>
    </section>
  );
}
