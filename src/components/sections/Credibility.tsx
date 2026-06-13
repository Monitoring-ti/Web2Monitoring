"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Layers, Target, Users } from "lucide-react";

interface KPI {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ElementType;
}

const kpis: KPI[] = [
  {
    value: 500,
    suffix: "+",
    label: "Proyectos ejecutados",
    description: "Soluciones de confiabilidad y excelencia operacional implementadas.",
    icon: Target,
  },
  {
    value: 20,
    suffix: "+",
    label: "Años de experiencia",
    description: "Trayectoria sólida liderando la optimización de activos en la región.",
    icon: Award,
  },
  {
    value: 15,
    suffix: "+",
    label: "Industrias atendidas",
    description: "Profundo conocimiento sectorial adaptado a cada desafío regulatorio.",
    icon: Layers,
  },
  {
    value: 95,
    suffix: "%",
    label: "Satisfacción garantizada",
    description: "De nuestros clientes recomiendan nuestras metodologías de trabajo.",
    icon: Users,
  },
];

function useCountUp(target: number, duration = 1500, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function KPICard({ kpi, active }: { kpi: KPI; active: boolean }) {
  const count = useCountUp(kpi.value, 1500, active);
  const Icon = kpi.icon;
  return (
    <div className="flex items-start gap-4 p-6 hover:bg-surface/50 rounded-2xl transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors duration-300">
        <Icon className="text-primary group-hover:text-accent transition-colors duration-300" size={22} aria-hidden="true" />
      </div>
      <div>
        <div className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-1 tabular-nums">
          {kpi.suffix === "+" ? `${count}${kpi.suffix}` : `${count}${kpi.suffix}`}
        </div>
        <div className="font-bold text-primary text-sm mb-1">{kpi.label}</div>
        <p className="text-muted text-xs leading-relaxed max-w-[200px]">
          {kpi.description}
        </p>
      </div>
    </div>
  );
}

export default function Credibility() {
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
      id="credibilidad"
      aria-label="Resultados y credibilidad"
      className="py-12 sm:py-16 bg-white border-b border-border"
    >
      <div className="container-custom">
        {/* Título Breve Opcional */}
        <div className="text-center mb-10">
          <span className="text-accent text-[11px] font-bold uppercase tracking-widest block mb-2">
            Trayectoria y Respaldo
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-primary">
            Confianza respaldada por resultados
          </h2>
        </div>

        {/* KPI Strip - 4 columnas en fila */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y md:divide-y-0 lg:divide-x divide-border"
          role="list"
          aria-label="Métricas de desempeño de la consultora"
        >
          {kpis.map((kpi, i) => (
            <div
              key={kpi.label}
              role="listitem"
              className={`pt-6 md:pt-0 lg:px-4 first:pt-0 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <KPICard kpi={kpi} active={visible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
