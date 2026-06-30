"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/images";
import { useDictionary, useLocale } from "@/context/LocaleProvider";
import { pagePath } from "@/lib/locale-path";

const industryImages: Record<string, string> = {
  mineria: images.industrias.mineria.src,
  "oil-gas": images.industrias.oilGas.src,
  celulosa: images.industrias.celulosa.src,
  energia: images.industrias.energia.src,
  industrial: images.industrias.industrial.src,
};

export default function Industries() {
  const t = useDictionary();
  const locale = useLocale();
  const contactPath = pagePath(locale, "contacto");
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="industrias"
      aria-label={t.industries.aria}
      className="section-padding bg-primary text-white"
    >
      <div className="container-custom">
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
            {t.industries.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-5">
            {t.industries.title}
          </h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">{t.industries.subtitle}</p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label={t.industries.listAria}
        >
          {t.industries.items.map((ind, i) => (
            <div
              key={ind.id}
              role="listitem"
              className={`rounded-2xl overflow-hidden border border-accent/40 transition-all duration-300 hover:bg-white/10 flex flex-col ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative h-40 w-full">
                <Image
                  src={industryImages[ind.id] ?? images.industrias.mineria.src}
                  alt={ind.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-white mb-2">{ind.name}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{ind.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <h4 className="font-bold text-base text-white">{t.industries.ctaTitle}</h4>
            <p className="text-white/60 text-xs sm:text-sm mt-1">{t.industries.ctaSubtitle}</p>
          </div>
          <Link
            href={contactPath}
            className="btn-primary text-sm shrink-0"
            aria-label={t.industries.ctaAria}
          >
            {t.industries.ctaButton}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
