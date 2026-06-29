"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { images } from "@/data/images";
import { useDictionary } from "@/context/LocaleProvider";

export default function TeamField() {
  const t = useDictionary();
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
    <section ref={ref} id="equipo" aria-label={t.team.aria} className="section-padding bg-surface">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
              {t.team.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-5">
              {t.team.title}
            </h2>
            <p className="text-muted text-base leading-relaxed mb-6">{t.team.subtitle}</p>
            <div className="flex items-start gap-3 text-sm text-primary/80">
              <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p>{t.team.presence}</p>
            </div>
          </div>

          <div
            className={`lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {images.galeria.map((photo, i) => (
              <div
                key={photo.src}
                className={`relative aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:min-h-[280px]" : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={t.team.galleryAlts[i] ?? photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
