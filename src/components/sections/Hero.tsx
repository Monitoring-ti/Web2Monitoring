"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/images";
import { useDictionary, useLocale } from "@/context/LocaleProvider";
import { pagePath } from "@/lib/locale-path";

function parseMetric(value: string) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: value };
  return { prefix: match[1], target: Number(match[2]), suffix: match[3] };
}

function MetricValue({ value, active }: { value: string; active: boolean }) {
  const { prefix, target, suffix } = parseMetric(value);
  const [count, setCount] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!active) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = 2400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 2;
      setCount(Math.round(target * eased));
      if (!reduced) setScale(0.72 + 0.28 * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return (
    <p
      className="font-display origin-left text-2xl font-extrabold text-white mb-0.5 tabular-nums sm:text-3xl"
      style={{ transform: `scale(${scale})` }}
      aria-label={value}
    >
      <span aria-hidden="true">
        {prefix}
        {count}
        {suffix}
      </span>
    </p>
  );
}

export default function Hero() {
  const t = useDictionary();
  const locale = useLocale();
  const contactPath = pagePath(locale, "contacto");
  const servicesPath = pagePath(locale, "servicios");
  const [visible, setVisible] = useState(false);
  const [metricsActive, setMetricsActive] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const node = metricsRef.current;
    if (!node) return;

    let delay = 0;
    const arm = () => {
      if (delay) return;
      delay = window.setTimeout(() => setMetricsActive(true), 180);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        arm();
        observer.disconnect();
      },
      { threshold: 0.15 },
    );

    observer.observe(node);

    const fallback = window.setTimeout(() => {
      const rect = node.getBoundingClientRect();
      const visible = rect.bottom > 0 && rect.top < window.innerHeight;
      if (visible) arm();
    }, 400);

    return () => {
      observer.disconnect();
      window.clearTimeout(delay);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="empresa"
      aria-label={t.hero.aria}
      className="relative flex items-start bg-hero overflow-hidden"
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

      <div className="container-custom relative z-10 pt-40 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="inline-flex items-center gap-2 bg-white/5 text-white/90 border border-white/10 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-lg mb-6">
                {t.hero.badge}
              </span>
            </div>

            <h1
              className={`font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-4 tracking-tight transition-all duration-700 delay-100 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {t.hero.title}
              {t.hero.titleHighlight ? (
                <>
                  {" "}
                  <span className="text-gradient">{t.hero.titleHighlight}</span>
                </>
              ) : null}
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
                href={servicesPath}
                aria-label={t.hero.ctaPrimaryAria}
                className="btn-primary text-sm sm:text-base px-8 py-4 justify-center"
              >
                {t.hero.ctaPrimary}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                id="hero-cta-secondary"
                href={contactPath}
                aria-label={t.hero.ctaSecondaryAria}
                className="btn-outline-white text-sm sm:text-base px-8 py-4 justify-center"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>

            <div className="border-t border-white/10 pt-6">
              <div
                ref={metricsRef}
                className="grid grid-cols-3 gap-4 mb-6"
                role="list"
                aria-label={t.hero.metricsAria}
              >
                {t.hero.metrics.map((metric) => (
                  <div key={metric.label} role="listitem" className="text-left">
                    <MetricValue value={metric.value} active={metricsActive} />
                    <p className="text-white/50 text-xs leading-snug">{metric.label}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          <div
            className={`lg:col-span-5 flex justify-center lg:justify-end transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="w-full max-w-lg mx-auto">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
                <Image
                  src={images.hero.src}
                  alt={images.hero.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="origin-right scale-[1.2] object-cover object-right"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
