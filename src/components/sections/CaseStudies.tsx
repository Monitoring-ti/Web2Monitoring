"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, AlertTriangle, Search, Shield, CheckCircle } from "lucide-react";

interface Case {
  id: string;
  tag: string;
  title: string;
  industry: string;
  problem: string;
  diagnosis: string;
  implementation: string;
  result: {
    kpi: string;
    kpiLabel: string;
    description: string;
  };
}

const cases: Case[] = [
  {
    id: "caso-1",
    tag: "Confiabilidad",
    title: "Reducción de fallas críticas en planta concentradora",
    industry: "Minería de Cobre — Chile",
    problem: "Paradas no planificadas recurrentes en el sistema de molienda SAG, generando pérdidas operacionales estimadas en USD 350,000 por hora de inactividad.",
    diagnosis: "Análisis RCA (Root Cause Analysis) determinó fatiga prematura de componentes por lubricación deficiente y desviaciones sistemáticas del plan de mantenimiento preventivo.",
    implementation: "Rediseño completo de la estrategia de lubricación e implantación de mantenimiento preventivo enfocado en confiabilidad (RCM) bajo la norma SAE JA1011.",
    result: {
      kpi: "-42%",
      kpiLabel: "Tasa de fallas mecánicas",
      description: "Disminución directa de paradas no programadas en los primeros 6 meses.",
    },
  },
  {
    id: "caso-2",
    tag: "Gestión de Activos",
    title: "Optimización del ciclo de vida en parque eólico de 150 MW",
    industry: "Energía Renovable — Colombia",
    problem: "Incremento acelerado en los costos de OPEX y envejecimiento prematuro de multiplicadoras sin un plan financiero sustentado.",
    diagnosis: "Falta de alineación estratégica entre las áreas de operación y finanzas; ausencia de modelos predictivos del comportamiento de falla del activo.",
    implementation: "Establecimiento del Plan Estratégico de Gestión de Activos (PEGA) alineado con ISO 55001 y desarrollo de políticas de reemplazo por riesgo técnico-económico.",
    result: {
      kpi: "+18%",
      kpiLabel: "Disponibilidad de turbinas",
      description: "Amortización de OPEX anual y extensión de la vida útil de componentes clave.",
    },
  },
  {
    id: "caso-3",
    tag: "Supply Chain",
    title: "Reducción de capital inmovilizado en repuestos críticos",
    industry: "Industrial / Manufactura — Perú",
    problem: "Exceso de inventario en bodega por un valor de USD 4.8M y, al mismo tiempo, quiebres de stock en componentes esenciales de alta rotación.",
    diagnosis: "Modelo de compras empírico sin categorización técnica de criticidad, rotación ni análisis de confiabilidad de proveedores.",
    implementation: "Aplicación de algoritmo de stock óptimo basado en confiabilidad (RBS - Risk Based Spares) y reestructuración de acuerdos comerciales de entrega just-in-time.",
    result: {
      kpi: "-25%",
      kpiLabel: "Capital en inventario",
      description: "Liberación de flujo de caja manteniendo un nivel de servicio del 99.2% en bodega.",
    },
  },
];

export default function CaseStudies() {
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
      id="casos"
      aria-label="Casos de estudio y éxito"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
            Demostración de Impacto
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-5">
            Casos de éxito
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Consulte cómo aplicamos ingeniería y rigurosidad técnica para resolver brechas operacionales 
            complejas. Resultados medibles y auditados por nuestros propios clientes.
          </p>
        </div>

        {/* Alternating layout vertical stream */}
        <div className="space-y-16" role="list" aria-label="Casos de éxito desarrollados">
          {cases.map((c, index) => {
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
                {/* Left side / Right side (Métricas e Información rápida) */}
                <div className={`lg:col-span-4 flex flex-col justify-between bg-primary text-white p-8 rounded-2xl ${
                  isEven ? "lg:order-last" : ""
                }`}>
                  <div>
                    <span className="inline-block bg-white/10 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full mb-4">
                      {c.tag}
                    </span>
                    <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">
                      {c.industry}
                    </p>
                    <h3 className="font-display text-lg font-bold leading-snug mb-6">
                      {c.title}
                    </h3>
                  </div>

                  {/* Impact Highlight */}
                  <div className="border-t border-white/10 pt-6 mt-8">
                    <div className="font-display text-5xl font-extrabold text-accent mb-2">
                      {c.result.kpi}
                    </div>
                    <div className="text-sm font-bold text-white mb-1">
                      {c.result.kpiLabel}
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {c.result.description}
                    </p>
                  </div>
                </div>

                {/* Technical stream: Problema -> Diagnóstico -> Implementación -> Resultado */}
                <div className="lg:col-span-8 flex flex-col justify-center space-y-6">
                  {/* Problema */}
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center flex-shrink-0 text-rose-500">
                      <AlertTriangle size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-1">
                        Situación Inicial / Problema
                      </h4>
                      <p className="text-sm text-primary/80 leading-relaxed">{c.problem}</p>
                    </div>
                  </div>

                  {/* Diagnóstico */}
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 text-amber-500">
                      <Search size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-1">
                        Diagnóstico Técnico
                      </h4>
                      <p className="text-sm text-primary/80 leading-relaxed">{c.diagnosis}</p>
                    </div>
                  </div>

                  {/* Implementación */}
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-500">
                      <Shield size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-1">
                        Implementación y Solución
                      </h4>
                      <p className="text-sm text-primary/80 leading-relaxed">{c.implementation}</p>
                    </div>
                  </div>

                  {/* Botón rápido */}
                  <div className="pt-4 flex justify-start">
                    <button
                      onClick={handleCtaClick}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent-600 transition-colors"
                      aria-label={`Ver más información del caso ${c.title}`}
                    >
                      Solicitar caso similar
                      <ArrowRight size={14} aria-hidden="true" />
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
