"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDictionary, useLocale } from "@/context/LocaleProvider";
import { localePath, resolveNavPath } from "@/lib/locale-path";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const t = useDictionary();
  const locale = useLocale();
  const pathname = usePathname();
  const homePath = localePath(locale);

  return (
    <footer className="bg-primary text-white border-t border-white/10" role="contentinfo">
      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <Link
            href={homePath}
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

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 max-w-3xl" aria-label={t.footer.navAria}>
            {[...t.nav.primary, ...t.nav.more].map((link) => {
              const href = resolveNavPath(locale, link.href);
              return (
                <Link
                  key={link.href}
                  href={href}
                  className={`text-xs font-semibold transition-colors duration-200 ${
                    pathname === href ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div />
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-center sm:text-left">
            <p className="text-white/30 text-[11px] sm:text-xs">
              © {new Date().getFullYear()} {siteConfig.legalName}. {t.footer.copyright}
            </p>
            <p className="text-white/30 text-[11px] sm:text-xs">
              {t.footer.developedBy}{" "}
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="text-white/45 hover:text-white/70 transition-colors"
              >
                {siteConfig.supportEmail}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
