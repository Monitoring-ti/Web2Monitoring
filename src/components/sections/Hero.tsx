"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { images } from "@/data/images";
import { useDictionary, useLocale } from "@/context/LocaleProvider";
import { pagePath } from "@/lib/locale-path";

const clientLogos = ["Codelco", "Engie", "Colbún", "Anglo American", "SQM"];

export default function Hero() {
  const t = useDictionary();
  const locale = useLocale();
  const contactPath = pagePath(locale, "contacto");
  const libraryPath = pagePath(locale, "biblioteca");
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      id="empresa"
      aria-label={t.hero.aria}
      className="relative min-h-screen flex items-center bg-hero overflow-hidden"
    >
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
        className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #E85D26 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #1D4ED8 0%, transparent 70%)" }}
      />

      <div className="container-custom relative z-10 py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="inline-flex items-center gap-2 bg-white/5 text-white/90 border border-white/10 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-lg mb-6">
                <span className="text-base" aria-hidden="true">
                  ♟
                </span>
                {t.hero.badge}
              </span>
            </div>

            <h1
              className={`font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-4 tracking-tight transition-all duration-700 delay-100 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {t.hero.title}{" "}
              <span className="text-gradient">{t.hero.titleHighlight}</span>
            </h1>

            <p
              className={`text-base sm:text-lg text-white/70 leading-relaxed mb-4 max-w-2xl transition-all duration-700 delay-150 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {t.hero.subtitle}
            </p>

            <p
              className={`text-sm text-white/50 italic mb-8 max-w-xl transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {t.hero.motto}
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-700 delay-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                id="hero-cta-primary"
                href={contactPath}
                aria-label={t.hero.ctaPrimaryAria}
                className="btn-primary text-sm sm:text-base px-8 py-4 justify-center"
              >
                {t.hero.ctaPrimary}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                id="hero-cta-secondary"
                href={libraryPath}
                aria-label={t.hero.ctaSecondaryAria}
                className="btn-outline-white text-sm sm:text-base px-8 py-4 justify-center"
              >
                <Download size={18} aria-hidden="true" />
                {t.hero.ctaSecondary}
              </Link>
            </div>

            <div
              className={`border-t border-white/10 pt-6 transition-all duration-700 delay-400 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="grid grid-cols-3 gap-4 mb-6" role="list" aria-label={t.hero.metricsAria}>
                {t.hero.metrics.map((metric) => (
                  <div key={metric.label} role="listitem" className="text-left">
                    <p className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-0.5">
                      {metric.value}
                    </p>
                    <p className="text-white/50 text-xs leading-snug">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-3 font-semibold">
                  {t.hero.clientsLabel}
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 opacity-50 grayscale hover:opacity-75 transition-opacity duration-300">
                  {clientLogos.map((logo) => (
                    <span
                      key={logo}
                      className="text-white text-sm font-semibold tracking-tight"
                      aria-label={`${t.hero.clientPrefix}: ${logo}`}
                    >
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`lg:col-span-5 flex justify-center lg:justify-end transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="w-full max-w-md relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src={images.hero.src}
                  alt={images.hero.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/60 text-[10px] uppercase tracking-widest font-semibold mb-1">
                    {t.hero.fieldLabel}
                  </p>
                  <p className="text-white font-display font-bold text-lg leading-snug">
                    {t.hero.fieldCaption}
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg">
                {t.hero.fieldBadge}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
