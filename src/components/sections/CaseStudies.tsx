"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, AlertTriangle, Search, Shield, Share2 } from "lucide-react";
import { useDictionary } from "@/context/LocaleProvider";

export default function CaseStudies() {
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

  const handleShareCase = async (title: string) => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#casos`;
    const shareData = {
      title: `${t.cases.shareTitle}: ${title}`,
      text: t.cases.shareText,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // cancelled
      }
    }

    await navigator.clipboard.writeText(shareUrl);
    alert(t.cases.shareCopied);
  };

  return (
    <section ref={ref} id="casos" aria-label={t.cases.aria} className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
            {t.cases.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-5">
            {t.cases.title}
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">{t.cases.subtitle}</p>
        </div>

        <div className="space-y-16" role="list" aria-label={t.cases.listAria}>
          {t.cases.items.map((c, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={c.id}
                role="listitem"
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-border rounded-3xl overflow-hidden p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`lg:col-span-4 flex flex-col justify-between bg-primary text-white p-8 rounded-2xl ${
                    isEven ? "lg:order-last" : ""
                  }`}
                >
                  <div>
                    <span className="inline-block bg-white/10 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full mb-4">
                      {c.tag}
                    </span>
                    <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">
                      {c.industry}
                    </p>
                    <h3 className="font-display text-lg font-bold leading-snug mb-6">{c.title}</h3>
                  </div>

                  <div className="border-t border-white/10 pt-6 mt-8">
                    <div className="font-display text-5xl font-extrabold text-accent mb-2">
                      {c.result.kpi}
                    </div>
                    <div className="text-sm font-bold text-white mb-1">{c.result.kpiLabel}</div>
                    <p className="text-xs text-white/60 leading-relaxed">{c.result.description}</p>
                  </div>
                </div>

                <div className="lg:col-span-8 flex flex-col justify-center space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center flex-shrink-0 text-rose-500">
                      <AlertTriangle size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-1">
                        {t.cases.problemLabel}
                      </h4>
                      <p className="text-sm text-primary/80 leading-relaxed">{c.problem}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-500">
                      <Search size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-1">
                        {t.cases.diagnosisLabel}
                      </h4>
                      <p className="text-sm text-primary/80 leading-relaxed">{c.diagnosis}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-500">
                      <Shield size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-1">
                        {t.cases.implementationLabel}
                      </h4>
                      <p className="text-sm text-primary/80 leading-relaxed">{c.implementation}</p>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <button
                      onClick={handleCtaClick}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent-600 transition-colors"
                      aria-label={`${t.cases.requestSimilarAria} ${c.title}`}
                    >
                      {t.cases.requestSimilar}
                      <ArrowRight size={14} aria-hidden="true" />
                    </button>
                    <button
                      onClick={() => handleShareCase(c.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary/60 hover:text-primary transition-colors"
                      aria-label={`${t.cases.shareAria} ${c.title}`}
                    >
                      <Share2 size={14} aria-hidden="true" />
                      {t.cases.share}
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
