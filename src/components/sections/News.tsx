"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Download, GraduationCap, Newspaper, Trophy } from "lucide-react";
import { images } from "@/data/images";
import { useDictionary, useLocale } from "@/context/LocaleProvider";
import { pagePath } from "@/lib/locale-path";

const newsImages = [
  images.actualidad.newsletter.src,
  images.actualidad.cierre.src,
  images.actualidad.curso.src,
];

const typeIcons = {
  newsletter: Newspaper,
  cierre: Trophy,
  curso: GraduationCap,
  avance: Calendar,
};

export default function News() {
  const t = useDictionary();
  const locale = useLocale();
  const libraryPath = pagePath(locale, "biblioteca");
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
      id="actualidad"
      aria-label={t.news.aria}
      className="section-padding bg-white border-y border-border"
    >
      <div className="container-custom">
        <div className="max-w-3xl mb-14">
          <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
            {t.news.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-5">
            {t.news.title}
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">{t.news.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
          {t.news.items.map((item, i) => {
            const Icon = typeIcons[item.type] ?? Newspaper;
            return (
              <article
                key={item.id}
                role="listitem"
                className={`rounded-2xl border border-border overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={newsImages[i] ?? images.actualidad.newsletter.src}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-accent">
                        <Icon size={12} aria-hidden="true" />
                        {t.news.typeLabels[item.type]}
                      </span>
                      <time className="text-xs text-muted">{item.date}</time>
                    </div>
                    <h3 className="font-display text-base font-bold text-primary mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">{item.summary}</p>
                  </div>
                  <Link
                    href={libraryPath}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent transition-colors"
                  >
                    <Download size={14} aria-hidden="true" />
                    {t.news.viewLibrary}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
