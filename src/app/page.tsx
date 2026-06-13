"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Credibility from "@/components/sections/Credibility";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import CaseStudies from "@/components/sections/CaseStudies";
import Library from "@/components/sections/Library";
import CtaBanner from "@/components/sections/CtaBanner";
import Contact from "@/components/sections/Contact";
import { MessageSquare } from "lucide-react";

export default function Home() {
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar botón flotante tras avanzar 600px
      setShowFloatingButton(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCtaClick = () => {
    const el = document.querySelector("#contacto");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Credibility />
        <Services />
        <Industries />
        <CaseStudies />
        <Library />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />

      {/* Botón flotante persistente de conversión (Agendar Reunión) */}
      <button
        onClick={handleCtaClick}
        aria-label="Agendar reunión rápida con un consultor"
        className={`fixed bottom-6 right-6 z-40 bg-accent text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-full shadow-lg hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 ${
          showFloatingButton ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <MessageSquare size={18} aria-hidden="true" />
        <span>Agendar Reunión</span>
      </button>
    </>
  );
}
