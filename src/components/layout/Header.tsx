"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Lock } from "lucide-react";
import { useDictionary, useLocale } from "@/context/LocaleProvider";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { localePath as getLocalePath } from "@/lib/locale-path";

export default function Header() {
  const t = useDictionary();
  const locale = useLocale();
  const homePath = getLocalePath(locale);
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
        <div className="flex items-center justify-between gap-3 h-18 py-3">
          <Link
            href={homePath}
            onClick={(e) => {
              if (homePath === window.location.pathname) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            aria-label={t.header.homeAria}
            className={`flex items-center shrink-0 rounded-lg transition-all duration-300 ${
              scrolled ? "" : "bg-white/95 shadow-sm px-2.5 py-1.5"
            }`}
          >
            <Image
              src="/logo.png"
              alt="Monitoring Logo"
              width={180}
              height={48}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          <nav
            className="hidden xl:flex items-center gap-0.5 flex-1 justify-center overflow-x-auto scrollbar-none"
            aria-label={t.header.navAria}
          >
            {t.nav.items.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`whitespace-nowrap px-2.5 py-2 text-[11px] font-medium rounded-lg transition-all duration-200 ${
                  scrolled
                    ? "text-primary/80 hover:text-primary hover:bg-primary/5"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 shrink-0">
            <LanguageSwitcher scrolled={scrolled} />
            <Link
              href="/estilos"
              className={`text-xs font-semibold transition-colors duration-200 ${
                scrolled ? "text-primary/60 hover:text-accent" : "text-white/70 hover:text-white"
              }`}
            >
              {t.header.demoStyles}
            </Link>
            <Link
              href="/acceso-cliente"
              className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 ${
                scrolled ? "text-primary hover:text-accent" : "text-white/90 hover:text-white"
              }`}
            >
              <Lock size={14} aria-hidden="true" />
              <span className="hidden lg:inline">{t.header.clientAccess}</span>
            </Link>
            <button
              onClick={() => handleNavClick("#contacto")}
              id="header-cta-btn"
              aria-label={t.header.requestMeetingAria}
              className="btn-primary text-xs px-4 py-2.5"
            >
              {t.header.requestMeeting}
              <ArrowRight size={15} aria-hidden="true" />
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2 shrink-0">
            <LanguageSwitcher scrolled={scrolled} />
            <button
              className={`p-2 rounded-lg transition-colors shrink-0 ${
                scrolled ? "text-primary hover:bg-primary/5" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? t.header.closeMenu : t.header.openMenu}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        role="dialog"
        aria-label={t.header.mobileMenuAria}
        className={`xl:hidden transition-all duration-300 overflow-hidden bg-white border-b border-border ${
          mobileOpen ? "max-h-[85vh] overflow-y-auto opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-custom py-4 flex flex-col gap-1">
          {t.nav.items.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-left px-4 py-3 text-sm font-medium text-primary/80 hover:text-primary hover:bg-surface rounded-xl transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 pb-2 flex flex-col gap-3 border-t border-border mt-2">
            <Link
              href="/acceso-cliente"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary border border-border rounded-xl py-3 hover:bg-surface transition-colors"
            >
              <Lock size={14} aria-hidden="true" />
              {t.header.clientAccess}
            </Link>
            <button
              onClick={() => handleNavClick("#contacto")}
              id="header-mobile-cta"
              className="btn-primary justify-center"
            >
              {t.header.requestMeeting}
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
