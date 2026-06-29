"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, FileText, Download, PlayCircle, ClipboardList, CheckCircle, Newspaper } from "lucide-react";
import { useDictionary } from "@/context/LocaleProvider";

const iconMap: Record<string, React.ElementType> = {
  whitepaper: BookOpen,
  article: FileText,
  study: ClipboardList,
  guide: Download,
  webinar: PlayCircle,
  brochure: FileText,
  newsletter: Newspaper,
};

export default function Library() {
  const t = useDictionary();
  const [visible, setVisible] = useState(false);
  const [activeType, setActiveType] = useState<string>("all");
  const [downloadedId, setDownloadedId] = useState<string | null>(null);
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

  const handleDownload = (id: string) => {
    setDownloadedId(id);
    setTimeout(() => {
      setDownloadedId(null);
      const el = document.querySelector("#contacto");
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 1200);
  };

  const filtered =
    activeType === "all"
      ? t.library.resources
      : activeType === "corporate"
        ? t.library.resources.filter((r) => r.corporate)
        : t.library.resources.filter((r) => r.type === activeType);

  const filterKeys = ["all", "corporate", "guide", "whitepaper", "study"] as const;

  return (
    <section
      ref={ref}
      id="biblioteca"
      aria-label={t.library.aria}
      className="section-padding bg-surface"
    >
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
              {t.library.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-5">
              {t.library.title}
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">{t.library.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label={t.library.filtersAria}>
            {filterKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveType(key)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 border ${
                  activeType === key
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-primary border-border hover:border-primary/30"
                }`}
              >
                {key === "all"
                  ? t.library.filters.all
                  : key === "corporate"
                    ? t.library.filters.corporate
                    : t.library.typeLabels[key] ?? key}
              </button>
            ))}
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label={t.library.listAria}
        >
          {filtered.map((res, i) => {
            const Icon = iconMap[res.type] ?? FileText;
            const isDownloading = downloadedId === res.id;

            return (
              <article
                key={res.id}
                role="listitem"
                className={`bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between group ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs text-accent font-bold uppercase tracking-wider">
                      {res.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted bg-surface px-2.5 py-1 rounded-md">
                      <Icon size={12} aria-hidden="true" />
                      {t.library.typeLabels[res.type] ?? res.type}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors duration-200">
                    {res.title}
                  </h3>

                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6">
                    {res.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <button
                    onClick={() => handleDownload(res.id)}
                    disabled={isDownloading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-white font-bold text-xs px-4 py-3 rounded-lg transition-colors duration-200"
                    aria-label={`${t.library.downloadAria}: ${res.title}`}
                  >
                    {isDownloading ? (
                      <>
                        <CheckCircle size={14} className="animate-pulse" />
                        {t.library.preparing}
                      </>
                    ) : (
                      <>
                        <Download size={14} />
                        {res.leadMagnetName}
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
