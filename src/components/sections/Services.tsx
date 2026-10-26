"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Settings, ShieldAlert, Wrench, Shuffle, Activity, BarChart2, Cpu } from "lucide-react";
import { RevealList } from "@/components/lib/motion";
import { images } from "@/data/images";
import { useDictionary, useLocale } from "@/context/LocaleProvider";
import { pagePath, resolveNavPath } from "@/lib/locale-path";

const serviceIcons: Record<string, React.ElementType> = {
  "gestion-activos": Settings,
  confiabilidad: ShieldAlert,
  "ingenieria-mantenimiento": Wrench,
  "supply-chain": Shuffle,
  "excelencia-operacional": Activity,
  "transformacion-digital": BarChart2,
  mmi: Cpu,
};

const serviceImages: Record<string, string> = {
  "gestion-activos": images.servicios.gestionActivos.src,
  confiabilidad: images.servicios.confiabilidad.src,
  "ingenieria-mantenimiento": images.servicios.sapPm.src,
  "supply-chain": images.servicios.supplyChain.src,
  "excelencia-operacional": images.servicios.excelencia.src,
  "transformacion-digital": images.servicios.digital.src,
  mmi: images.galeria[5].src,
};

export default function Services() {
  const t = useDictionary();
  const locale = useLocale();
  const contactPath = pagePath(locale, "contacto");

  return (
    <section
      id="servicios"
      aria-label={t.services.aria}
      className="section-padding bg-surface"
    >
      <div className="container-custom">
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
            {t.services.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-5">
            {t.services.title}
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">{t.services.subtitle}</p>
        </div>

        <RevealList
          items={t.services.items}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [&>*]:h-full"
        >
          {(service) => {
            const Icon = serviceIcons[service.id] ?? Settings;
            const imageSrc = serviceImages[service.id] ?? images.servicios.gestionActivos.src;
            return (
              <article
                key={service.id}
                role="listitem"
                className="bg-white rounded-2xl border border-border shadow-sm transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 flex h-full flex-col justify-between overflow-hidden group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-primary/5">
                    <Image
                      src={imageSrc}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-cover transition-transform duration-500 ${
                        service.id === "supply-chain"
                          ? "origin-[100%_58%] scale-[1.7] object-right group-hover:scale-[1.82]"
                          : "group-hover:scale-105"
                      }`}
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
                    {service.callout && (
                      <div className="mt-4 rounded-xl border border-accent/20 bg-accent/5 p-4">
                        <p className="text-xs font-bold text-accent mb-1">{service.callout.title}</p>
                        <p className="text-xs text-muted leading-relaxed">{service.callout.description}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <div className="pt-4 border-t border-border/50">
                    <Link
                      href={service.ctaHref ? resolveNavPath(locale, service.ctaHref) : contactPath}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-accent transition-colors duration-200"
                      aria-label={`${service.ctaText} — ${service.title}`}
                    >
                      {service.ctaText}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            );
          }}
        </RevealList>
      </div>
    </section>
  );
}
