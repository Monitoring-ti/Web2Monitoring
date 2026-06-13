"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const industries: Industry[] = [
  {
    id: "mineria",
    name: "Minería",
    icon: "⛏",
    description: "Flotas de transporte, plantas de procesamiento SAG/bolas y sistemas de chancado crítico.",
  },
  {
    id: "energia",
    name: "Energía",
    icon: "⚡",
    description: "Generadoras hidráulicas, térmicas, eólicas e infraestructura de transmisión eléctrica.",
  },
  {
    id: "infraestructura",
    name: "Infraestructura",
    icon: "🏗",
    description: "Puertos, terminales de carga, autopistas y activos civiles de gran escala.",
  },
  {
    id: "industrial",
    name: "Industrial",
    icon: "🏭",
    description: "Plantas químicas, refinerías y sistemas de almacenamiento y procesamiento de fluidos.",
  },
  {
    id: "manufactura",
    name: "Manufactura",
    icon: "⚙",
    description: "Líneas de ensamble continuo, robótica y maquinaria de alta precisión.",
  },
  {
    id: "utilities",
    name: "Utilities",
    icon: "💧",
    description: "Sistemas de potabilización de agua, redes de distribución y saneamiento municipal.",
  },
];

export default function Industries() {
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

  const handleContactClick = () => {
    const el = document.querySelector("#contacto");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      id="industrias"
      aria-label="Industrias en las que operamos"
      className="section-padding bg-primary text-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
            Nuestros Sectores
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-5">
            Industrias
          </h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Trabajamos mano a mano con organizaciones complejas de la región. Entendemos los desafíos 
            regulatorios, las dinámicas de repuestos y las criticidades operativas de cada vertical.
          </p>
        </div>

        {/* Clean & Corporate Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Sectores industriales atendidos"
        >
          {industries.map((ind, i) => (
            <div
              key={ind.id}
              role="listitem"
              className={`bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col justify-between ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div>
                <span className="text-4xl block mb-4" aria-hidden="true">
                  {ind.icon}
                </span>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {ind.name}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                  {ind.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Affiliation Call to Action */}
        <div
          className={`mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <h4 className="font-bold text-base text-white">¿Opera en alguno de estos sectores?</h4>
            <p className="text-white/60 text-xs sm:text-sm mt-1">
              Descubra casos de estudio y soluciones metodológicas validadas para su línea de negocio.
            </p>
          </div>
          <button
            onClick={handleContactClick}
            className="btn-primary text-sm shrink-0"
            aria-label="Agendar una reunión para hablar sobre su industria"
          >
            Hablar con un especialista
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
