import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Lock, Shield, Users } from "lucide-react";
import { CLIENT_PORTAL_URL } from "@/lib/config";
import { images } from "@/data/images";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Acceso Cliente",
  description:
    "Portal seguro para clientes Monitoring. Plataforma robusta con datos confiables y navegación intuitiva.",
  alternates: {
    canonical: `${siteConfig.url}/acceso-cliente`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AccesoClientePage() {
  return (
    <div className="min-h-screen bg-hero flex flex-col">
      <header className="container-custom py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold transition-colors"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Volver al sitio
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 pb-16">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="Monitoring" width={140} height={36} className="h-9 w-auto" />
          </div>

          <h1 className="font-display text-2xl font-extrabold text-primary text-center mb-2">
            Portal de Clientes
          </h1>
          <p className="text-muted text-sm text-center leading-relaxed mb-8">
            Acceda a su plataforma de gestión con datos confiables, navegación intuitiva y el respaldo
            de nuestros equipos en terreno.
          </p>

          <div className="relative h-40 rounded-xl overflow-hidden mb-8 border border-border">
            <Image
              src={images.portal.src}
              alt={images.portal.alt}
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>

          <div className="space-y-3 mb-8" role="list">
            {[
              { icon: Shield, text: "Plataforma robusta y segura" },
              { icon: Lock, text: "Confiabilidad y trazabilidad de la información" },
              { icon: Users, text: "Equipos reales, visibles y en contacto directo" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} role="listitem" className="flex items-center gap-3 text-sm text-primary/80">
                <Icon size={16} className="text-accent flex-shrink-0" aria-hidden="true" />
                {text}
              </div>
            ))}
          </div>

          <a
            href={CLIENT_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center py-4"
          >
            <Lock size={16} aria-hidden="true" />
            Ingresar al sistema
          </a>

          <p className="text-center text-xs text-muted mt-6">
            ¿Problemas de acceso?{" "}
            <Link href="/contacto" className="text-accent font-semibold hover:underline">
              Contacte a soporte
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
