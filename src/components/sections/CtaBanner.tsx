"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useDictionary, useLocale } from "@/context/LocaleProvider";
import { pagePath } from "@/lib/locale-path";

export default function CtaBanner() {
  const t = useDictionary();
  const locale = useLocale();
  const contactPath = pagePath(locale, "contacto");

  return (
    <section aria-label={t.ctaBanner.aria} className="py-24 bg-hero relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #E85D26 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #1D4ED8 0%, transparent 70%)" }}
      />

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
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
          {t.ctaBanner.eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">
          {t.ctaBanner.title}
        </h2>
        <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto mb-10">
          {t.ctaBanner.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            id="cta-banner-primary"
            href={contactPath}
            aria-label={t.ctaBanner.primaryAria}
            className="btn-primary text-base px-8 py-4"
          >
            {t.ctaBanner.primary}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link
            id="cta-banner-secondary"
            href={contactPath}
            aria-label={t.ctaBanner.secondaryAria}
            className="btn-outline-white text-base px-8 py-4"
          >
            {t.ctaBanner.secondary}
          </Link>
        </div>

        <p className="text-white/30 text-xs mt-8">{t.ctaBanner.footnote}</p>
      </div>
    </section>
  );
}
