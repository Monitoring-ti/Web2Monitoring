"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useDictionary, useLocale } from "@/context/LocaleProvider";
import { pagePath, localePath } from "@/lib/locale-path";

interface SiteLayoutProps {
  children: React.ReactNode;
  showFloatingCta?: boolean;
}

export default function SiteLayout({ children, showFloatingCta = true }: SiteLayoutProps) {
  const t = useDictionary();
  const locale = useLocale();
  const pathname = usePathname();
  const contactPath = pagePath(locale, "contacto");
  const isHome = pathname === localePath(locale);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    if (!showFloatingCta || !isHome) {
      setShowFloatingButton(false);
      return;
    }

    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showFloatingCta, isHome]);

  return (
    <>
      <Header />
      {children}
      <Footer />

      {showFloatingCta && (
        <Link
          href={contactPath}
          aria-label={t.floatingCta.aria}
          className={`fixed bottom-6 right-6 z-40 bg-accent text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-full shadow-lg hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 ${
            showFloatingButton ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <MessageSquare size={18} aria-hidden="true" />
          <span>{t.floatingCta.label}</span>
        </Link>
      )}
    </>
  );
}
