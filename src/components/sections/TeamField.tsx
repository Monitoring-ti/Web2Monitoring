"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { images } from "@/data/images";
import { presentationCredentials } from "@/data/presentation";
import { useDictionary } from "@/context/LocaleProvider";
import LogoMarquee from "@/components/sections/LogoMarquee";

export default function TeamField() {
  const t = useDictionary();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="equipo" aria-label={t.team.aria} className="section-padding overflow-hidden bg-surface">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
            {t.team.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary mb-5">
            {t.team.title}
          </h2>
          <p className="text-muted text-base leading-relaxed mb-6">{t.team.subtitle}</p>
          <div className="flex items-start gap-3 text-sm text-primary/80">
            <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p>{t.team.presence}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div
            className={`lg:col-span-12 grid grid-cols-2 sm:grid-cols-3 gap-3 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {images.galeria.map((photo, i) => (
              <div
                key={photo.src}
                className={`relative aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:min-h-[280px]" : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={t.team.galleryAlts[i] ?? photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14">
        <LogoMarquee
          items={t.credibility.credentials.flatMap((item) => {
            const file = presentationCredentials.find((credential) => credential.id === item.id);
            return file ? [{ id: item.id, name: item.name, src: file.src }] : [];
          })}
          label={t.credibility.credentialsTitle}
        />
        <p className="container-custom mt-4 max-w-3xl text-center text-xs leading-relaxed text-muted">
          {t.credibility.credentialsNote}
        </p>
      </div>

      <div className="container-custom">
        <div className="mt-14">
          <h3 className="font-display text-xl font-bold text-primary mb-6">{t.team.peopleTitle}</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.team.people.map((person) => (
              <li key={person.email} className="rounded-2xl border border-border bg-white p-5">
                <p className="font-display font-bold text-primary">{person.name}</p>
                <p className="text-sm text-muted mt-1 mb-4">{person.role}</p>
                <a
                  href={`tel:${person.phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center gap-2 text-sm text-primary/80 hover:text-accent"
                >
                  <Phone size={14} className="text-accent shrink-0" aria-hidden="true" />
                  {person.phone}
                </a>
                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-2 text-sm text-primary/80 hover:text-accent mt-2 break-all"
                >
                  <Mail size={14} className="text-accent shrink-0" aria-hidden="true" />
                  {person.email}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
