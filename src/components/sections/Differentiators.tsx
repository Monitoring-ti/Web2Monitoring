"use client";

import { useEffect, useRef, useState } from "react";
import { Handshake, ShieldCheck, Users } from "lucide-react";
import { useDictionary } from "@/context/LocaleProvider";

const diffIcons = [Handshake, ShieldCheck, Users];

export default function Differentiators() {
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
    <section
      ref={ref}
      id="diferenciadores"
      aria-label={t.differentiators.aria}
      className="section-padding bg-white border-b border-border"
    >
      <div className="container-custom">
        <div className="max-w-3xl mb-14">
          <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
            {t.differentiators.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-5">
            {t.differentiators.title}
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">{t.differentiators.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          {t.differentiators.items.map((item, i) => {
            const Icon = diffIcons[i] ?? Handshake;
            return (
              <article
                key={item.title}
                role="listitem"
                className={`rounded-2xl border border-border p-8 bg-surface hover:shadow-card transition-all duration-300 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                  <Icon className="text-accent" size={22} aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{item.description}</p>
                <p className="text-xs font-semibold text-accent/90 border-t border-border pt-4">
                  {item.proof}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
