"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Download,
  Menu,
  X,
  Lock,
  Shield,
  Handshake,
  Users,
  MapPin,
  Share2,
  Send,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { WebTheme } from "@/lib/themes";
import { getAdjacentThemes } from "@/lib/themes";
import {
  monitoringBrand,
  trustMetrics,
  clientLogos,
  differentiators,
  services,
  industries,
  cases,
  fieldPhotos,
} from "@/data/monitoring-content";
import { images } from "@/data/images";

interface DemoLandingProps {
  theme: WebTheme;
}

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 80,
      behavior: "smooth",
    });
  }
}

const diffIcons = [Handshake, Shield, Users];

export default function DemoLanding({ theme }: DemoLandingProps) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const c = theme.colors;
  const isDark = ["tecnologico", "neon-tech", "creativo"].includes(theme.id);
  const imageFilter = theme.flags.vintage ? "sepia(0.35) contrast(1.05)" : undefined;
  const isLightHero = !theme.flags.darkHero;

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = theme.fonts.googleUrl;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [theme.fonts.googleUrl]);

  const { prev, next, index, total } = getAdjacentThemes(theme.id);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [theme.id]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && prev) {
        router.push(`/estilos/${prev.id}`);
      } else if (e.key === "ArrowRight" && next) {
        router.push(`/estilos/${next.id}`);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [prev, next, router]);

  const fontDisplay = { fontFamily: theme.fonts.display };
  const fontBody = { fontFamily: theme.fonts.body };

  const btnPrimary: React.CSSProperties = {
    backgroundColor: theme.flags.neonGlow ? c.accent : c.accent,
    color: theme.flags.neonGlow ? c.primary : c.onPrimary,
    borderRadius: theme.shape.buttonRadius,
    boxShadow: theme.flags.neonGlow ? `0 0 24px ${c.accent}55` : undefined,
    fontFamily: theme.fonts.body,
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: isDark ? c.surface : "#FFFFFF",
    border: `1px solid ${c.border}`,
    borderRadius: theme.shape.cardRadius,
    boxShadow: theme.flags.minimalShadow
      ? "none"
      : theme.id === "moderno"
        ? "0 4px 24px rgba(10,37,64,0.08)"
        : "0 2px 12px rgba(0,0,0,0.06)",
  };

  const navItems = [
    { label: "Empresa", href: "#empresa" },
    { label: "Servicios", href: "#servicios" },
    { label: "Industrias", href: "#industrias" },
    { label: "Casos", href: "#casos" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <div
      style={{ ...fontBody, backgroundColor: c.bg, color: c.text }}
      className="min-h-screen"
    >
      {/* Demo banner */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] text-center py-1.5 text-[10px] sm:text-xs font-semibold tracking-wide"
        style={{ backgroundColor: c.accent, color: theme.flags.neonGlow ? c.primary : c.onPrimary }}
      >
        {theme.groupName} · {theme.name} —{" "}
        <Link href="/estilos" className="underline underline-offset-2">
          Ver los 3 grupos (15 estilos)
        </Link>
      </div>

      {/* Header */}
      <header
        className="fixed top-7 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? (isDark ? `${c.surface}ee` : `${c.bg}f5`) : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : undefined,
          borderBottom: scrolled ? `1px solid ${c.border}` : undefined,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3 gap-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="shrink-0 rounded-lg"
            style={isLightHero && !scrolled ? { backgroundColor: "#fff", padding: "6px 10px" } : {}}
          >
            <Image src="/logo.png" alt="Monitoring" width={160} height={40} className="h-8 w-auto" priority />
          </button>

          <nav className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="px-3 py-2 text-xs font-medium transition-opacity hover:opacity-70"
                style={{ color: scrolled || isLightHero ? c.text : c.heroText }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-2">
            <Link
              href="/acceso-cliente"
              className="text-xs font-semibold flex items-center gap-1"
              style={{ color: scrolled || isLightHero ? c.muted : `${c.heroText}cc` }}
            >
              <Lock size={12} /> Acceso
            </Link>
            <button
              onClick={() => scrollTo("#contacto")}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold transition-transform hover:-translate-y-0.5"
              style={btnPrimary}
            >
              Reunión <ArrowRight size={14} />
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: scrolled || isLightHero ? c.text : c.heroText }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t px-4 py-3 space-y-1" style={{ backgroundColor: c.bg, borderColor: c.border }}>
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => { scrollTo(item.href); setMenuOpen(false); }}
                className="block w-full text-left px-3 py-2.5 text-sm"
                style={{ color: c.text }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="empresa"
          className="relative min-h-screen flex items-center pt-24 overflow-hidden"
          style={{ background: c.heroBg, color: c.heroText }}
        >
          {theme.flags.blueprint && (
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(${c.accent}33 1px, transparent 1px),
                  linear-gradient(90deg, ${c.accent}33 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />
          )}
          {theme.flags.neonGlow && (
            <div
              className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: c.accent }}
            />
          )}
          {theme.flags.creative && (
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, #A855F755, transparent 40%, #0E749055)",
              }}
            />
          )}
          {theme.flags.organic && (
            <div
              className="absolute bottom-0 left-0 right-0 h-32 opacity-20 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at bottom, ${c.accent}44, transparent)`,
              }}
            />
          )}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <span
                className="inline-block text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 opacity-70"
                style={fontDisplay}
              >
                ♟ {monitoringBrand.taglineEn}
              </span>
              <h1
                className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4"
                style={{
                  ...fontDisplay,
                  fontStyle: theme.flags.serifDisplay ? "normal" : undefined,
                }}
              >
                Optimizando sus activos{" "}
                <span style={{ color: c.accent }}>desde la primera jugada</span>
              </h1>
              <p className="text-base sm:text-lg leading-relaxed mb-4 opacity-85 max-w-xl">
                {monitoringBrand.subtitle}
              </p>
              {theme.id !== "minimalista" && (
                <p className="text-sm italic opacity-50 mb-8">{monitoringBrand.motto}</p>
              )}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("#contacto")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold"
                  style={btnPrimary}
                >
                  Solicitar Reunión <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => scrollTo("#servicios")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold border-2"
                  style={{
                    borderColor: isLightHero ? c.border : `${c.heroText}55`,
                    color: c.heroText,
                    borderRadius: theme.shape.buttonRadius,
                  }}
                >
                  <Download size={16} /> Brochure
                </button>
              </div>
              <div className="mt-10 pt-6 border-t flex flex-wrap gap-6" style={{ borderColor: `${c.heroText}22` }}>
                {trustMetrics.slice(0, 3).map((m) => (
                  <div key={m.label}>
                    <p className="text-2xl font-extrabold" style={fontDisplay}>{m.value}</p>
                    <p className="text-xs opacity-60">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="relative aspect-[4/5] overflow-hidden"
                style={{
                  borderRadius: theme.flags.angular ? 0 : theme.shape.cardRadius,
                  border: theme.flags.angular ? `3px solid ${c.accent}` : `1px solid ${c.heroText}22`,
                }}
              >
                <Image
                  src={images.hero.src}
                  alt={images.hero.alt}
                  fill
                  className="object-cover"
                  style={{ filter: imageFilter }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold">
                  Consultores con experiencia comprobable en terreno
                </p>
              </div>
              {theme.flags.angular && (
                <div
                  className="absolute -bottom-3 -right-3 w-16 h-16"
                  style={{ backgroundColor: c.accent, clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                />
              )}
            </div>
          </div>
        </section>

        {/* Logos */}
        <section className="py-8 border-b" style={{ backgroundColor: c.surface, borderColor: c.border }}>
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-x-8 gap-y-2 opacity-60">
            {clientLogos.map((logo) => (
              <span key={logo} className="text-sm font-semibold" style={{ color: c.text }}>{logo}</span>
            ))}
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: c.bg }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: c.accent }}>Por qué Monitoring</p>
            <h2 className="text-3xl font-extrabold mb-12" style={{ ...fontDisplay, color: c.text }}>
              Lo que nos hace únicos
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {differentiators.map((d, i) => {
                const Icon = diffIcons[i];
                return (
                  <article key={d.title} className="p-8" style={cardStyle}>
                    <Icon size={22} style={{ color: c.accent }} className="mb-4" />
                    <h3 className="font-bold mb-2" style={{ ...fontDisplay, color: c.text }}>{d.title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: c.muted }}>{d.description}</p>
                    <p className="text-xs font-semibold pt-4 border-t" style={{ color: c.accent, borderColor: c.border }}>
                      {d.proof}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicios" className="py-20 lg:py-28" style={{ backgroundColor: c.surface }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: c.accent }}>Servicios</p>
            <h2 className="text-3xl font-extrabold mb-12" style={{ ...fontDisplay, color: c.text }}>
              Del proyecto EPCM a la operación
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <article key={s.title} className="overflow-hidden group" style={cardStyle}>
                  <div className="relative h-40">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold mb-2" style={{ ...fontDisplay, color: c.text }}>{s.title}</h3>
                    <p className="text-sm" style={{ color: c.muted }}>{s.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section id="industrias" className="py-20 lg:py-28" style={{ backgroundColor: c.primary, color: c.onPrimary }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: c.accent }}>Sectores</p>
            <h2 className="text-3xl font-extrabold mb-12" style={fontDisplay}>
              Clientes nacionales e internacionales
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((ind) => (
                <div
                  key={ind.name}
                  className="p-6"
                  style={{
                    border: `1px solid ${c.onPrimary}22`,
                    borderRadius: theme.flags.angular ? 0 : theme.shape.cardRadius,
                    backgroundColor: `${c.onPrimary}08`,
                  }}
                >
                  <h3 className="font-bold mb-2" style={fontDisplay}>{ind.name}</h3>
                  <p className="text-sm opacity-70">{ind.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases */}
        <section id="casos" className="py-20 lg:py-28" style={{ backgroundColor: c.bg }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: c.accent }}>Impacto</p>
            <h2 className="text-3xl font-extrabold mb-12" style={{ ...fontDisplay, color: c.text }}>Casos de éxito</h2>
            <div className="space-y-6">
              {cases.map((caso) => (
                <article
                  key={caso.title}
                  className="grid lg:grid-cols-12 gap-6 p-6 lg:p-8"
                  style={cardStyle}
                >
                  <div
                    className="lg:col-span-4 p-6 flex flex-col justify-between"
                    style={{
                      backgroundColor: c.primary,
                      color: c.onPrimary,
                      borderRadius: theme.flags.angular ? 0 : theme.shape.radius,
                    }}
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">{caso.tag}</span>
                      <p className="text-xs opacity-50 mt-1">{caso.industry}</p>
                      <h3 className="font-bold mt-3 leading-snug" style={fontDisplay}>{caso.title}</h3>
                    </div>
                    <div className="mt-6 pt-4 border-t" style={{ borderColor: `${c.onPrimary}22` }}>
                      <p className="text-4xl font-extrabold" style={{ color: c.accent }}>{caso.kpi}</p>
                      <p className="text-sm font-semibold">{caso.kpiLabel}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-8 flex flex-col justify-center">
                    <p className="text-sm leading-relaxed mb-4" style={{ color: c.muted }}>{caso.summary}</p>
                    <div className="flex gap-4">
                      <button onClick={() => scrollTo("#contacto")} className="text-xs font-bold flex items-center gap-1" style={{ color: c.accent }}>
                        Solicitar caso similar <ArrowRight size={12} />
                      </button>
                      <button className="text-xs font-bold flex items-center gap-1 opacity-50" style={{ color: c.text }}>
                        <Share2 size={12} /> Compartir
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: c.surface }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: c.accent }}>Presencia real</p>
              <h2 className="text-3xl font-extrabold mb-4" style={{ ...fontDisplay, color: c.text }}>Personas y faena</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: c.muted }}>
                Equipos reales en terreno. Sin imágenes genéricas: la confianza se construye viendo quiénes están detrás de cada proyecto.
              </p>
              <div className="flex gap-2 text-sm" style={{ color: c.text }}>
                <MapPin size={16} style={{ color: c.accent }} className="shrink-0 mt-0.5" />
                Chile y la región — minería, Oil&amp;Gas, celulosa y energía.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {fieldPhotos.map((photo, i) => (
                <div
                  key={photo.src}
                  className={`relative aspect-[4/3] overflow-hidden ${i === 0 ? "col-span-2 aspect-[16/7]" : ""}`}
                  style={{ borderRadius: theme.flags.angular ? 0 : theme.shape.radius }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    style={{ filter: imageFilter }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20 text-center relative overflow-hidden"
          style={{ background: c.heroBg, color: c.heroText }}
        >
          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-extrabold mb-4" style={fontDisplay}>
              ¿Necesita mejorar el desempeño de sus activos?
            </h2>
            <p className="opacity-75 mb-8">En 30 minutos le mostramos cómo otras operaciones han logrado resultados medibles.</p>
            <button
              onClick={() => scrollTo("#contacto")}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold"
              style={btnPrimary}
            >
              Agendar Reunión <ArrowRight size={16} />
            </button>
          </div>
        </section>

        {/* Contact */}
        <section id="contacto" className="py-20 lg:py-28" style={{ backgroundColor: c.bg }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: c.accent }}>Contacto</p>
              <h2 className="text-3xl font-extrabold mb-4" style={{ ...fontDisplay, color: c.text }}>
                Comuníquenos sus requerimientos
              </h2>
              <p className="text-sm mb-6" style={{ color: c.muted }}>
                Reunión, diagnóstico o descarga de material. Respuesta en menos de 24 horas hábiles.
              </p>
              <p className="text-sm font-semibold" style={{ color: c.text }}>{monitoringBrand.email}</p>
              <p className="text-sm font-semibold mt-1" style={{ color: c.text }}>{monitoringBrand.phone}</p>
            </div>
            <form
              className="p-8 space-y-4"
              style={cardStyle}
              onSubmit={(e) => e.preventDefault()}
            >
              <input placeholder="Nombre completo" className="w-full px-4 py-3 text-sm border" style={{ borderColor: c.border, borderRadius: theme.shape.radius, backgroundColor: isDark ? c.bg : c.surface, color: c.text }} />
              <input placeholder="Empresa" className="w-full px-4 py-3 text-sm border" style={{ borderColor: c.border, borderRadius: theme.shape.radius, backgroundColor: isDark ? c.bg : c.surface, color: c.text }} />
              <input placeholder="Correo corporativo" type="email" className="w-full px-4 py-3 text-sm border" style={{ borderColor: c.border, borderRadius: theme.shape.radius, backgroundColor: isDark ? c.bg : c.surface, color: c.text }} />
              <textarea placeholder="Mensaje / requerimiento" rows={3} className="w-full px-4 py-3 text-sm border resize-none" style={{ borderColor: c.border, borderRadius: theme.shape.radius, backgroundColor: isDark ? c.bg : c.surface, color: c.text }} />
              <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-bold" style={btnPrimary}>
                <Send size={14} /> Enviar solicitud
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t" style={{ backgroundColor: c.primary, color: c.onPrimary, borderColor: `${c.onPrimary}15` }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="bg-white rounded-lg px-3 py-2">
            <Image src="/logo.png" alt="Monitoring" width={140} height={36} className="h-8 w-auto" />
          </div>
          <p className="text-xs opacity-50 text-center">
            © {new Date().getFullYear()} Monitoring Consultora Ltda. — Demo {theme.name}
          </p>
          <Link
            href="/estilos"
            className="inline-flex items-center gap-1 text-xs font-semibold opacity-70 hover:opacity-100"
            style={{ color: c.onPrimary }}
          >
            <ChevronLeft size={14} /> Todas las versiones
          </Link>
        </div>
      </footer>

      {/* Navegación rápida entre estilos */}
      <nav
        aria-label="Navegación entre estilos demo"
        className="fixed bottom-0 left-0 right-0 z-[55] border-t shadow-[0_-4px_24px_rgba(0,0,0,0.12)]"
        style={{
          backgroundColor: isDark ? c.surface : "#FFFFFF",
          borderColor: c.border,
        }}
      >
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
          {prev ? (
            <Link
              href={`/estilos/${prev.id}`}
              className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-[10px] sm:text-xs font-bold rounded-lg border transition-opacity hover:opacity-80 min-w-0 max-w-[40%] sm:max-w-none"
              style={{ borderColor: c.border, color: c.text }}
            >
              <ChevronLeft size={16} className="shrink-0" aria-hidden="true" />
              <span className="truncate hidden sm:inline">Anterior: {prev.name}</span>
              <span className="truncate sm:hidden">Anterior</span>
            </Link>
          ) : (
            <span className="w-20 sm:w-32" aria-hidden="true" />
          )}

          <div className="text-center shrink-0 px-1">
            <p className="text-[10px] sm:text-xs font-bold" style={{ color: c.text }}>
              {index} / {total}
            </p>
            <p className="text-[9px] sm:text-[10px] opacity-60 hidden sm:block" style={{ color: c.muted }}>
              ← → para navegar
            </p>
          </div>

          {next ? (
            <Link
              href={`/estilos/${next.id}`}
              className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-[10px] sm:text-xs font-bold rounded-lg transition-opacity hover:opacity-90 min-w-0 max-w-[40%] sm:max-w-none"
              style={{ ...btnPrimary }}
            >
              <span className="truncate hidden sm:inline">Siguiente: {next.name}</span>
              <span className="truncate sm:hidden">Siguiente</span>
              <ChevronRight size={16} className="shrink-0" aria-hidden="true" />
            </Link>
          ) : (
            <span className="w-20 sm:w-32" aria-hidden="true" />
          )}
        </div>
      </nav>

      {/* Espacio para barra inferior */}
      <div className="h-16" aria-hidden="true" />
    </div>
  );
}
