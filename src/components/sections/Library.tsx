"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, FileText, Download, PlayCircle, ClipboardList, CheckCircle } from "lucide-react";

type ContentType = "whitepaper" | "article" | "study" | "guide" | "webinar";

interface Resource {
  id: string;
  type: ContentType;
  tag: string;
  title: string;
  description: string;
  leadMagnetName: string;
}

const resources: Resource[] = [
  {
    id: "res-1",
    type: "guide",
    tag: "Gestión de Activos",
    title: "Guía Técnica de Implementación ISO 55000",
    description: "Una hoja de ruta clara para integrar la gestión del ciclo de vida físico con el control de OPEX de la organización.",
    leadMagnetName: "Descargar Guía ISO 55000",
  },
  {
    id: "res-2",
    type: "guide",
    tag: "Confiabilidad",
    title: "Checklist de Auditoría de Confiabilidad Operacional",
    description: "Autodiagnóstico rápido con 45 puntos críticos para evaluar el estado actual de sus planes preventivos.",
    leadMagnetName: "Obtener Checklist de Confiabilidad",
  },
  {
    id: "res-3",
    type: "study",
    tag: "Gestión de Activos",
    title: "Estudio de Madurez de Gestión de Activos en Latinoamérica",
    description: "Datos agregados y benchmarking de confiabilidad sobre industrias mineras y energéticas en la región.",
    leadMagnetName: "Descargar Estudio de Madurez",
  },
  {
    id: "res-4",
    type: "guide",
    tag: "Supply Chain",
    title: "Modelo de Diagnóstico Integral de Supply Chain",
    description: "Planilla de cálculo técnica para determinar criticidad de repuestos VED y optimizar inventarios críticos.",
    leadMagnetName: "Obtener Planilla Diagnóstico",
  },
  {
    id: "res-5",
    type: "whitepaper",
    tag: "Confiabilidad",
    title: "RCM Aplicado: Del papel a la disponibilidad real",
    description: "Whitepaper detallado con lecciones aprendidas en plantas concentradoras sobre mantenimiento centrado en confiabilidad.",
    leadMagnetName: "Descargar Whitepaper RCM",
  },
  {
    id: "res-6",
    type: "webinar",
    tag: "Transformación Digital",
    title: "Sensórica, IoT y Modelamiento de Fallas de Activos",
    description: "Grabación técnica ejecutiva de 45 minutos explicando arquitecturas de datos para predictivo real.",
    leadMagnetName: "Acceder a Grabación Webinar",
  },
];

const iconMap: Record<ContentType, React.ElementType> = {
  whitepaper: BookOpen,
  article: FileText,
  study: ClipboardList,
  guide: Download,
  webinar: PlayCircle,
};

const typeLabelMap: Record<ContentType, string> = {
  whitepaper: "Whitepaper",
  article: "Artículo Técnico",
  study: "Estudio Sectorial",
  guide: "Guía de Ingeniería",
  webinar: "Webinar Grabado",
};

export default function Library() {
  const [visible, setVisible] = useState(false);
  const [activeType, setActiveType] = useState<ContentType | "all">("all");
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
    // Simular descarga de recurso
    setTimeout(() => {
      setDownloadedId(null);
      // Redirigir al contacto/leads
      const el = document.querySelector("#contacto");
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 1200);
  };

  const filtered = activeType === "all" ? resources : resources.filter((r) => r.type === activeType);

  return (
    <section
      ref={ref}
      id="biblioteca"
      aria-label="Biblioteca técnica y recursos de ingeniería"
      className="section-padding bg-surface"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
              Conocimiento Compartido
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-5">
              Biblioteca técnica
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Consuma recursos de ingeniería, whitepapers y guías conceptuales desarrollados por expertos. 
              Diseñados para transferir conocimiento metodológico directo a su operación.
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtros de biblioteca">
            {(["all", "guide", "whitepaper", "study", "webinar"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 border ${
                  activeType === t
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-primary border-border hover:border-primary/30"
                }`}
              >
                {t === "all" ? "Ver Todo" : typeLabelMap[t as ContentType] || t}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Contenido técnico para descarga"
        >
          {filtered.map((res, i) => {
            const Icon = iconMap[res.type] || FileText;
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
                  {/* Badge & Type */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs text-accent font-bold uppercase tracking-wider">
                      {res.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted bg-surface px-2.5 py-1 rounded-md">
                      <Icon size={12} aria-hidden="true" />
                      {typeLabelMap[res.type]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-base font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors duration-200">
                    {res.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6">
                    {res.description}
                  </p>
                </div>

                {/* Lead Magnet Download Button */}
                <div className="pt-4 border-t border-border/50">
                  <button
                    onClick={() => handleDownload(res.id)}
                    disabled={isDownloading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-white font-bold text-xs px-4 py-3 rounded-lg transition-colors duration-200"
                    aria-label={`Descargar recurso: ${res.title}`}
                  >
                    {isDownloading ? (
                      <>
                        <CheckCircle size={14} className="animate-pulse" />
                        Preparando descarga...
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
