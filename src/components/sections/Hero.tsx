"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download, CheckCircle, TrendingUp, Shield, Activity } from "lucide-react";

const trustMetricsSummary = [
  { value: "+20", label: "Años de experiencia" },
  { value: "+150", label: "Proyectos" },
  { value: "+40", label: "Profesionales senior" },
];

const clientLogos = ["Codelco", "Engie", "Colbún", "Anglo American", "SQM"];

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      id="empresa"
      aria-label="Propuesta de valor principal"
      className="relative min-h-screen flex items-center bg-hero overflow-hidden"
    >
      {/* Fondo técnico premium: Grid y destellos de luz */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Orbes de gradiente estratégico */}
      <div
        aria-hidden="true"
        className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #E85D26 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #1D4ED8 0%, transparent 70%)" }}
      />

      <div className="container-custom relative z-10 py-28 lg:py-36">
        {/* Layout 60/40 preciso con grid de 12 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Mensaje Principal (60% aprox -> 7 columnas) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Etiqueta corporativa */}
            <div
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="inline-flex items-center gap-2 bg-white/5 text-white/90 border border-white/10 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-lg mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                Consultora de Confiabilidad y Gestión de Activos
              </span>
            </div>

            {/* Título Principal */}
            <h1
              className={`font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight transition-all duration-700 delay-100 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Ingeniería para la{" "}
              <span className="text-gradient">Confiabilidad</span>{" "}
              Operacional.
            </h1>

            {/* Subtítulo Ajustado */}
            <p
              className={`text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Ayudamos a organizaciones intensivas en activos a maximizar disponibilidad, 
              confiabilidad y desempeño mediante ingeniería, analítica y excelencia operacional.
            </p>

            {/* CTAs Primario y Secundario */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-700 delay-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <button
                id="hero-cta-primary"
                onClick={() => scrollToSection("#contacto")}
                aria-label="Solicitar una reunión con un especialista de Monitoring"
                className="btn-primary text-sm sm:text-base px-8 py-4 justify-center"
              >
                Solicitar Reunión
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              <button
                id="hero-cta-secondary"
                onClick={() => scrollToSection("#biblioteca")}
                aria-label="Descargar la presentación corporativa de Monitoring"
                className="btn-outline-white text-sm sm:text-base px-8 py-4 justify-center"
              >
                <Download size={18} aria-hidden="true" />
                Descargar Presentación
              </button>
            </div>

            {/* Bloque Compacto de Confianza */}
            <div
              className={`border-t border-white/10 pt-6 transition-all duration-700 delay-400 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="grid grid-cols-3 gap-4 mb-6" role="list" aria-label="Métricas clave de confianza">
                {trustMetricsSummary.map((metric) => (
                  <div key={metric.label} role="listitem" className="text-left">
                    <p className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-0.5">
                      {metric.value}
                    </p>
                    <p className="text-white/50 text-xs leading-snug">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Logos de Clientes Estratégicos */}
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-3 font-semibold">
                  Respaldado por operadores líderes en la región
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 opacity-50 grayscale hover:opacity-75 transition-opacity duration-300">
                  {clientLogos.map((logo) => (
                    <span
                      key={logo}
                      className="text-white text-sm font-semibold tracking-tight"
                      aria-label={`Cliente: ${logo}`}
                    >
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Visual Premium Corporativo (40% aprox -> 5 columnas) */}
          <div
            className={`lg:col-span-5 flex justify-center lg:justify-end transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Tarjeta Visual Premium Interactiva */}
            <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-300">
              
              {/* Elementos decorativos de fondo del panel */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Encabezado del visualizador técnico */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                  </div>
                  <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">
                    Asset Health Analytica
                  </span>
                </div>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Visualización de Activo & Nodos */}
              <div className="mb-8 relative h-40 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-25">
                  {/* Círculos de radar concéntricos */}
                  <div className="w-32 h-32 rounded-full border border-white/40 animate-pulse" />
                  <div className="absolute w-20 h-20 rounded-full border border-white/30" />
                  <div className="absolute w-44 h-44 rounded-full border border-white/15" />
                </div>

                {/* Grafico conceptual de red */}
                <div className="z-10 flex flex-col items-center">
                  <Activity className="text-accent mb-2 w-10 h-10 animate-pulse" />
                  <span className="text-[11px] font-mono text-white/60 tracking-wider">
                    SISTEMA DE DIAGNÓSTICO ACTIVO
                  </span>
                  <span className="text-xs font-bold text-white tracking-wide mt-1">
                    Confiabilidad Operacional
                  </span>
                </div>
              </div>

              {/* Indicadores Operativos Realistas */}
              <div className="space-y-4">
                {[
                  { label: "Índice de Disponibilidad Operacional (OEE)", value: "94.8%", change: "+12.4%", desc: "vs. Línea base inicial" },
                  { label: "Costo Total de Mantenimiento", value: "-28.3%", change: "Optimizado", desc: "Ahorro directo en CAPEX/OPEX" },
                ].map((item, index) => (
                  <div key={item.label} className="bg-white/[0.03] border border-white/5 rounded-xl p-4 hover:bg-white/[0.05] transition-colors duration-200">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-white/60 text-[11px] font-semibold uppercase tracking-wider">{item.label}</span>
                      <span className="text-accent text-xs font-bold bg-accent/10 px-2 py-0.5 rounded">
                        {item.change}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-bold text-white font-display">{item.value}</span>
                      <span className="text-[10px] text-white/40">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
