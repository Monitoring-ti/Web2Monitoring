"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/context/LocaleProvider";
import { useSiteVersion, type SiteVersion } from "@/context/SiteVersion";
import { localePath, pathsMatch } from "@/lib/locale-path";

export default function VersionSwitch() {
  const { version, setVersion } = useSiteVersion();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const home = localePath(locale);
  const english = locale === "en";

  const pick = (next: SiteVersion) => {
    setVersion(next);
    if (next === "soft" && !pathsMatch(pathname, home)) {
      router.push(home);
    }
  };

  const options: { id: SiteVersion; label: string }[] = [
    { id: "soft", label: english ? "Soft version" : "Versión soft" },
    { id: "full", label: english ? "Full version" : "Versión full" },
  ];

  return (
    <div
      role="group"
      aria-label={english ? "Choose the site version" : "Elegir la versión del sitio"}
      className="inline-flex rounded-full border border-border bg-white p-1 shadow-sm"
    >
      {options.map((option) => {
        const active = version === option.id;
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={active}
            onClick={() => pick(option.id)}
            className={`rounded-full px-3 py-1.5 text-xs font-bold leading-none transition-colors ${
              active
                ? option.id === "soft"
                  ? "bg-primary text-white"
                  : "bg-accent text-white"
                : "text-primary hover:bg-fondo-claro"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
