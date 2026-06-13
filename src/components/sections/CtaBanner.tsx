"use client";

import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  const scrollToContact = () => {
    const el = document.querySelector("#contacto");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      aria-label="Llamada a la acción"
      className="py-24 bg-hero relative overflow-hidden"
    >
      {/* Accent glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #E85D26 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #1D4ED8 0%, transparent 70%)" }}
      />

      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10 text-center">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
          Próximo paso
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">
          ¿Necesita mejorar el desempeño de sus activos?
        </h2>
        <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto mb-10">
          En 30 minutos le mostramos cómo otras operaciones en su industria han
          logrado resultados medibles. Sin compromiso. Con claridad.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            id="cta-banner-primary"
            onClick={scrollToContact}
            aria-label="Agendar una reunión gratuita con un especialista"
            className="btn-primary text-base px-8 py-4"
          >
            Agendar Reunión Ahora
            <ArrowRight size={18} aria-hidden="true" />
          </button>
          <button
            id="cta-banner-secondary"
            onClick={scrollToContact}
            aria-label="Solicitar un diagnóstico gratuito"
            className="btn-outline-white text-base px-8 py-4"
          >
            Solicitar Diagnóstico Gratuito
          </button>
        </div>

        <p className="text-white/30 text-xs mt-8">
          Sin costo. Sin compromiso. Respuesta en menos de 24 horas.
        </p>
      </div>
    </section>
  );
}
