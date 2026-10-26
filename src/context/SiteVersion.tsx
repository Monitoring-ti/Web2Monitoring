"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type SiteVersion = "soft" | "full";

const STORAGE_KEY = "monitoring-site-version";

type SiteVersionContextValue = {
  version: SiteVersion;
  setVersion: (version: SiteVersion) => void;
};

const SiteVersionContext = createContext<SiteVersionContextValue | null>(null);

export function SiteVersionProvider({ children }: { children: React.ReactNode }) {
  const [version, setVersionState] = useState<SiteVersion>("full");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "soft" || stored === "full") setVersionState(stored);
  }, []);

  const setVersion = (next: SiteVersion) => {
    setVersionState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <SiteVersionContext.Provider value={{ version, setVersion }}>
      {children}
    </SiteVersionContext.Provider>
  );
}

export function useSiteVersion() {
  const value = useContext(SiteVersionContext);
  if (!value) {
    throw new Error("useSiteVersion must be used within SiteVersionProvider");
  }
  return value;
}
