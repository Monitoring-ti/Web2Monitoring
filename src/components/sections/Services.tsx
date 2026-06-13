"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Settings,
  ShieldAlert,
  Shuffle,
  Wrench,
  BarChart2,
  Activity,
  ArrowUpRight,
} from "lucide-react";

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  ctaText: string;
  image: string;
}

const services: Service[] = [
  {
    id: "gestion-activos",
    icon: Settings,
    title: "Gestión de Activos",
    description: "Optimización del ciclo de vida de sus activos físicos alineado con estándares internacionales ISO 55000.",
    ctaText: "Ver capacidades",
    image: "/asset-management.png",
  },
  {
    id: "confiabilidad",
    icon: ShieldAlert,
    title: "Confiabilidad",
    description: "Reducción de riesgos operacionales y tasas de falla aplicando metodologías avanzadas RCM y RCA.",
    ctaText: "Explorar soluciones",
    image: "/operational-reliability.png",
  },
  {
    id: "supply-chain",
    icon: Shuffle,
    title: "Supply Chain",
    description: "Aseguramiento del soporte logístico y disponibilidad de repuestos críticos para evitar paradas costosas.",
    ctaText: "Optimizar cadena",
    image: "/supply-chain.png",
  },
  {
    id: "ingenieria",
    icon: Wrench,
    title: "Ingeniería",
    description: "Diseño, modelado y optimización técnica de sistemas industriales complejos para máxima rentabilidad.",
    ctaText: "Ver ingeniería",
    image: "/engineering-optimization.png",
  },
  {
    id: "transformacion-digital",
    icon: BarChart2,
    title: "Transformación Digital",
    description: "Habilitación de datos, sensórica e inteligencia de negocios para la toma de decisiones operacionales óptimas.",
    ctaText: "Integrar datos",
    image: "/digital-transformation.png",
  },
  {
    id: "excelencia-operacional",
    icon: Activity,
    title: "Excelencia Operacional",
    description: "Sistemas de gestión y mejora continua orientados a elevar la eficiencia y el OEE de su planta.",
    ctaText: "Elevar eficiencia",
    image: "/operational-excellence.png",
  },
];

export default function Services() {
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
      aria-label="Servicios y Capacidades de Monitoring"
      className="section-padding bg-surface"
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
            Servicios destacados
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-5">
            Explorar Capacidades
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Ofrecemos un portafolio de especialidades de ingeniería diseñado para diagnosticar, 
            estructurar y optimizar el rendimiento técnico-económico de sus activos físicos.
          </p>
        </div>

        {/* Services grid (3x2) */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Capacidades de la consultora"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
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
                  {/* Image container */}
                  <div className="relative h-48 w-full overflow-hidden bg-primary/5">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                    
                    {/* Floating Icon inside image */}
                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-white/95 backdrop-blur-sm shadow flex items-center justify-center">
                      <Icon size={18} className="text-primary group-hover:text-accent transition-colors duration-300" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Content with padding */}
                  <div className="p-6 sm:p-8">
                    <h3 className="font-display text-lg font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Small CTA with padding */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <div className="pt-4 border-t border-border/50">
                    <button
                      onClick={handleCtaClick}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-accent transition-colors duration-200"
                      aria-label={`${service.ctaText} para ${service.title}`}
                    >
                      {service.ctaText}
                      <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
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
