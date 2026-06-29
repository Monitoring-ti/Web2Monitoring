"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useDictionary, useLocale } from "@/context/LocaleProvider";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { localePath as getLocalePath } from "@/lib/locale-path";

const SECTION_IDS = [
  "empresa",
  "credibilidad",
  "diferenciadores",
  "servicios",
  "industrias",
  "casos",
  "equipo",
  "actualidad",
  "biblioteca",
  "contacto",
];

function useActiveSection() {
  const [active, setActive] = useState<string>("empresa");

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function Header() {
  const t = useDictionary();
  const locale = useLocale();
  const homePath = getLocalePath(locale);
  const activeSection = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    setMoreOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const isActive = (href: string) => activeSection === href.replace("#", "");

  const navLinkClass = (href: string, compact = false) => {
    const active = isActive(href);
    const base = compact
      ? "w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors"
      : "whitespace-nowrap px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200";

    if (compact) {
      return `${base} ${active ? "text-accent bg-accent/5" : "text-primary/80 hover:text-primary hover:bg-surface"}`;
    }

    if (scrolled) {
      return `${base} ${
        active
          ? "text-accent bg-accent/10 font-semibold"
          : "text-primary/75 hover:text-primary hover:bg-primary/5"
      }`;
    }

    return `${base} ${
      active
        ? "text-white bg-white/15 font-semibold"
        : "text-white/85 hover:text-white hover:bg-white/10"
    }`;
  };

  const moreHasActive = t.nav.more.some((item) => isActive(item.href));

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
        <div className="flex items-center justify-between gap-4 h-16 py-2">
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
              className="h-8 sm:h-9 w-auto object-contain"
              priority
            />
          </Link>

          <nav
            className="hidden lg:flex items-center gap-0.5 flex-1 justify-center"
            aria-label={t.header.navAria}
          >
            {t.nav.primary.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={navLinkClass(item.href)}
                aria-current={isActive(item.href) ? "true" : undefined}
              >
                {item.label}
              </button>
            ))}

            <div ref={moreRef} className="relative">
              <button
                type="button"
                onClick={() => setMoreOpen((o) => !o)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                aria-label={t.header.moreAria}
                className={`inline-flex items-center gap-1 whitespace-nowrap px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  moreHasActive
                    ? scrolled
                      ? "text-accent bg-accent/10 font-semibold"
                      : "text-white bg-white/15 font-semibold"
                    : scrolled
                      ? "text-primary/75 hover:text-primary hover:bg-primary/5"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                {t.header.moreLabel}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>

              {moreOpen && (
                <div
                  role="menu"
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[200px] py-2 bg-white rounded-xl border border-border shadow-lg"
                >
                  {t.nav.more.map((item) => (
                    <button
                      key={item.href}
                      role="menuitem"
                      onClick={() => handleNavClick(item.href)}
                      className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        isActive(item.href)
                          ? "text-accent font-semibold bg-accent/5"
                          : "text-primary/80 hover:text-primary hover:bg-surface"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <LanguageSwitcher scrolled={scrolled} />
            <button
              onClick={() => handleNavClick("#contacto")}
              id="header-cta-btn"
              aria-label={t.header.requestMeetingAria}
              className="btn-primary text-xs sm:text-sm px-4 py-2.5"
            >
              {t.header.requestMeeting}
              <ArrowRight size={15} aria-hidden="true" />
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2 shrink-0">
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
        className={`lg:hidden transition-all duration-300 overflow-hidden bg-white border-b border-border ${
          mobileOpen ? "max-h-[85vh] overflow-y-auto opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-custom py-4 flex flex-col gap-1">
          {t.nav.primary.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={navLinkClass(item.href, true)}
              aria-current={isActive(item.href) ? "true" : undefined}
            >
              {item.label}
            </button>
          ))}

          <p className="px-4 pt-4 pb-1 text-[10px] font-bold uppercase tracking-widest text-muted">
            {t.header.moreLabel}
          </p>
          {t.nav.more.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={navLinkClass(item.href, true)}
              aria-current={isActive(item.href) ? "true" : undefined}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-4 pb-2 border-t border-border mt-2">
            <button
              onClick={() => handleNavClick("#contacto")}
              id="header-mobile-cta"
              className="btn-primary w-full justify-center"
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
