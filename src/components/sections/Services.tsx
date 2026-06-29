"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Settings,
  ShieldAlert,
  Wrench,
  Shuffle,
  Activity,
  BarChart2,
  ArrowUpRight,
} from "lucide-react";
import { images } from "@/data/images";
import { useDictionary } from "@/context/LocaleProvider";

const serviceIcons: Record<string, React.ElementType> = {
  "gestion-activos": Settings,
  confiabilidad: ShieldAlert,
  "ingenieria-mantenimiento": Wrench,
  "supply-chain": Shuffle,
  "excelencia-operacional": Activity,
  "transformacion-digital": BarChart2,
};

const serviceImages: Record<string, string> = {
  "gestion-activos": images.servicios.gestionActivos.src,
  confiabilidad: images.servicios.confiabilidad.src,
  "ingenieria-mantenimiento": images.servicios.sapPm.src,
  "supply-chain": images.servicios.supplyChain.src,
  "excelencia-operacional": images.servicios.excelencia.src,
  "transformacion-digital": images.servicios.digital.src,
};

export default function Services() {
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

  const handleCtaClick = () => {
    const el = document.querySelector("#contacto");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      id="servicios"
      aria-label={t.services.aria}
      className="section-padding bg-surface"
    >
      <div className="container-custom">
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
            {t.services.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-5">
            {t.services.title}
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">{t.services.subtitle}</p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label={t.services.listAria}
        >
          {t.services.items.map((service, i) => {
            const Icon = serviceIcons[service.id] ?? Settings;
            const imageSrc = serviceImages[service.id] ?? images.servicios.gestionActivos.src;
            return (
              <article
                key={service.id}
                role="listitem"
                className={`bg-white rounded-2xl border border-border shadow-sm transition-all duration-300 hover:shadow-card hover:-translate-y-1 flex flex-col justify-between overflow-hidden group ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-primary/5">
                    <Image
                      src={imageSrc}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />

                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-white/95 backdrop-blur-sm shadow flex items-center justify-center">
                      <Icon
                        size={18}
                        className="text-primary group-hover:text-accent transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="font-display text-lg font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <div className="pt-4 border-t border-border/50">
                    <button
                      onClick={handleCtaClick}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-accent transition-colors duration-200"
                      aria-label={`${service.ctaText} — ${service.title}`}
                    >
                      {service.ctaText}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
