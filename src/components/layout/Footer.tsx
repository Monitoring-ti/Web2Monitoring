"use client";

import Image from "next/image";
import Link from "next/link";
import { useDictionary, useLocale } from "@/context/LocaleProvider";
import { localePath } from "@/lib/locale-path";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const t = useDictionary();
  const locale = useLocale();
  const homePath = localePath(locale);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white border-t border-white/10" role="contentinfo">
      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <Link
            href={homePath}
            onClick={(e) => {
              if (homePath === window.location.pathname) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center bg-white rounded-lg px-3 py-2"
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

          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-3xl" aria-label={t.footer.navAria}>
            {t.nav.items.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/60 hover:text-white text-xs font-semibold transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.linkedinAria}
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-accent flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-4 h-4 fill-white/70" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/acceso-cliente"
            className="text-white/50 hover:text-white text-xs font-semibold transition-colors"
          >
            {t.footer.clientPortal}
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-[11px] sm:text-xs">
            © {new Date().getFullYear()} {siteConfig.legalName}. {t.footer.copyright}
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-white/30 hover:text-white/55 text-[11px] sm:text-xs transition-colors"
            >
              {t.footer.privacy}
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-white/30 hover:text-white/55 text-[11px] sm:text-xs transition-colors"
            >
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
