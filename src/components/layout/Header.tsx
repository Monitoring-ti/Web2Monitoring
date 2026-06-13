"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const navItems = [
  { label: "Empresa", href: "#empresa" },
  { label: "Servicios", href: "#servicios" },
  { label: "Industrias", href: "#industrias" },
  { label: "Casos", href: "#casos" },
  { label: "Biblioteca", href: "#biblioteca" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Monitoring — inicio"
            className="flex items-center group"
          >
            <Image
              src="/logo.png"
              alt="Monitoring Logo"
              width={140}
              height={36}
              className={`h-9 w-auto object-contain transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Navegación principal"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-white/10 
                  ${scrolled ? "text-primary/80 hover:text-primary hover:bg-primary/5" : "text-white/80 hover:text-white"}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
              className={`text-sm font-semibold transition-colors duration-200 ${
                scrolled ? "text-primary hover:text-accent" : "text-white/90 hover:text-white"
              }`}
            >
              Iniciar sesión
            </a>
            <button
              onClick={() => handleNavClick("#contacto")}
              id="header-cta-btn"
              aria-label="Solicitar reunión con un especialista"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Solicitar Reunión
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-primary hover:bg-primary/5" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menú de navegación móvil"
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white border-b border-border ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-custom py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-left px-4 py-3 text-sm font-medium text-primary/80 hover:text-primary hover:bg-surface rounded-xl transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 pb-2 flex flex-col gap-3 border-t border-border mt-2">
            <button
              onClick={() => handleNavClick("#contacto")}
              id="header-mobile-cta"
              className="btn-primary justify-center"
            >
              Solicitar Reunión
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
