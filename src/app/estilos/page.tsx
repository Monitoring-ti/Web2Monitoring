import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Palette } from "lucide-react";
import { themeGroups, getThemesByGroup } from "@/lib/themes";

export const metadata = {
  title: "Galería de estilos",
  description:
    "15 propuestas de diseño agrupadas en 3 direcciones estratégicas para la nueva web de Monitoring Consultora.",
};

export default function EstilosIndexPage() {
  let globalIndex = 0;

  return (
    <div className="min-h-screen bg-[#061829] text-white">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <header className="relative z-10 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
          <div className="bg-white rounded-lg px-3 py-2">
            <Image src="/logo.png" alt="Monitoring" width={150} height={38} className="h-8 w-auto" />
          </div>
          <Link href="/" className="text-xs font-semibold text-white/60 hover:text-white transition-colors">
            Versión actual →
          </Link>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-4">
          <Palette size={14} />
          Presentación al cliente
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
          15 propuestas en 3 grupos estratégicos
        </h1>
        <p className="text-white/65 text-lg leading-relaxed max-w-2xl mb-4">
          Misma información de Monitoring — servicios, industrias, casos y propuesta de valor — con
          5 estilos visuales distintos en cada grupo según la guía de transformación de estilos web.
        </p>
        <p className="text-white/40 text-sm mb-14">
          3 grupos × 5 estilos = 15 versiones para comparar con gerencia y equipo comercial.
        </p>

        <div className="space-y-20">
          {themeGroups.map((group) => {
            const groupThemes = getThemesByGroup(group.id);
            return (
              <section key={group.id} id={group.id}>
                <div className="mb-8 pb-6 border-b border-white/10">
                  <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
                    Grupo {group.number}
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold mb-2">{group.name}</h2>
                  <p className="text-white/50 text-sm font-semibold mb-2">{group.subtitle}</p>
                  <p className="text-white/40 text-sm max-w-2xl">{group.description}</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                  {groupThemes.map((theme) => {
                    globalIndex += 1;
                    const index = globalIndex;
                    return (
                      <Link
                        key={theme.id}
                        href={`/estilos/${theme.id}`}
                        className="group rounded-2xl border border-white/10 overflow-hidden bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="h-28 relative" style={{ background: theme.preview }}>
                          <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                            {index}
                          </span>
                        </div>
                        <div className="p-4">
                          <p className="text-[9px] uppercase tracking-widest text-accent font-bold mb-1.5 line-clamp-1">
                            {theme.styleGroup}
                          </p>
                          <h3 className="font-display text-sm font-bold mb-2 group-hover:text-accent transition-colors leading-snug">
                            {theme.name}
                          </h3>
                          <p className="text-white/45 text-xs leading-relaxed mb-3 line-clamp-2">
                            {theme.description}
                          </p>
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-accent">
                            Ver demo
                            <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-20 p-8 rounded-2xl border border-white/10 bg-white/5">
          <h3 className="font-display font-bold text-lg mb-3">Cómo usar esta presentación</h3>
          <ul className="text-white/60 text-sm space-y-2 list-disc list-inside">
            <li><strong className="text-white/80">Grupo 1</strong> — si la prioridad es generar confianza y reuniones comerciales.</li>
            <li><strong className="text-white/80">Grupo 2</strong> — si quieren enfatizar ingeniería, faena y expertise técnico.</li>
            <li><strong className="text-white/80">Grupo 3</strong> — si buscan diferenciarse como consultora innovadora y digital.</li>
            <li>La versión final puede combinar elementos de distintos grupos y estilos.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
