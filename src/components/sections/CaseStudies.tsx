"use client";

import { useDictionary } from "@/context/LocaleProvider";

export default function CaseStudies() {
  const t = useDictionary();

  return (
    <section id="casos" aria-label={t.cases.aria} className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
            {t.cases.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-5">
            {t.cases.title}
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">{t.cases.subtitle}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2" role="list" aria-label={t.cases.listAria}>
          {t.cases.items.map((item) => (
            <article
              key={item.id}
              id={item.id}
              role="listitem"
              className="scroll-mt-32 rounded-3xl border-t-4 border-accent bg-white p-7 shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent">{item.tag}</p>
              <h3 className="mb-3 mt-2 font-display text-xl font-bold text-primary">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
