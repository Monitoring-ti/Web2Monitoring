"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Globe } from "lucide-react";
import { useDictionary, useLocale } from "@/context/LocaleProvider";
import { alternateLocalePath } from "@/lib/locale-path";

interface LanguageSwitcherProps {
  scrolled?: boolean;
}

export default function LanguageSwitcher({ scrolled = false }: LanguageSwitcherProps) {
  const locale = useLocale();
  const t = useDictionary();

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "es";
  }, [locale]);

  return (
    <Link
      href={alternateLocalePath(locale)}
      aria-label={t.language.aria}
      className={`inline-flex items-center gap-1.5 text-xs font-semibold rounded-lg px-2.5 py-1.5 transition-colors duration-200 border ${
        scrolled
          ? "text-primary/70 hover:text-accent border-border hover:border-accent/30"
          : "text-white/80 hover:text-white border-white/20 hover:border-white/40"
      }`}
    >
      <Globe size={14} aria-hidden="true" />
      <span className="uppercase tracking-wide">{t.language.current}</span>
      <span className="opacity-50" aria-hidden="true">
        |
      </span>
      <span>{t.language.switchTo}</span>
    </Link>
  );
}
