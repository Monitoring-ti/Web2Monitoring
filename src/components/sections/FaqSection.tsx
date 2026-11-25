"use client";

import { ChevronDown } from "lucide-react";
import { useDictionary } from "@/context/LocaleProvider";

type FaqPage = "home" | "services" | "mmi";

interface FaqSectionProps {
  page: FaqPage;
  bgClass?: string;
}

/**
 * Bloque visible de preguntas frecuentes alineado con el esquema FAQPage en JSON-LD.
 * Usa elementos nativos `<details>` para conservar todas las respuestas en el HTML estático.
 */
export default function FaqSection({ page, bgClass = "bg-surface" }: FaqSectionProps) {
  const { faq } = useDictionary();
  const items = faq.items.filter((item) => item.pages.includes(page));

  if (items.length === 0) return null;

  return (
    <section
      id="preguntas-frecuentes"
      aria-label={faq.aria}
      className={`section-padding scroll-mt-40 ${bgClass}`}
    >
      <div className="container-custom">
        <div className="mb-12 max-w-3xl">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-accent">
            {faq.eyebrow}
          </span>
          <h2 className="mb-5 font-display text-3xl font-extrabold text-primary sm:text-4xl">
            {faq.title}
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">{faq.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {items.map((item, index) => (
            <details
              key={item.id}
              open={index === 0}
              className="group rounded-2xl border border-border bg-white p-6 transition-colors open:border-accent/40"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-base font-bold text-primary [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <ChevronDown
                  size={18}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 border-t border-border/60 pt-3 text-sm leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
