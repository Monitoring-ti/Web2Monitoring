"use client";

import Image from "next/image";

export interface LogoItem {
  id: string;
  name: string;
  src: string;
}

const MIN_PER_SET = 12;

function repeatItems(items: LogoItem[]) {
  const copies = Math.max(1, Math.ceil(MIN_PER_SET / items.length));
  return Array.from({ length: copies }, () => items).flat();
}

function LogoCard({ item, alt }: { item: LogoItem; alt: string }) {
  return (
    <div className="flex h-16 w-36 items-center justify-center rounded-2xl bg-white px-4 shadow-soft sm:h-20 sm:w-44">
      <Image
        src={item.src}
        alt={alt}
        width={160}
        height={64}
        className="h-9 w-auto max-w-[7.5rem] object-contain sm:h-11 sm:max-w-36"
      />
    </div>
  );
}

function LogoSet({
  items,
  copy,
}: {
  items: LogoItem[];
  copy: "visible" | "clone";
}) {
  const labeled = copy === "visible";
  const row = repeatItems(items);

  return (
    <ul aria-hidden={!labeled} className="flex shrink-0 items-center gap-6 pr-6 sm:gap-10 sm:pr-10">
      {row.map((item, index) => (
        <li key={`${copy}-${item.id}-${index}`}>
          <LogoCard item={item} alt={labeled && index < items.length ? item.name : ""} />
        </li>
      ))}
    </ul>
  );
}

export default function LogoMarquee({
  items,
  label,
  tone = "surface",
}: {
  items: LogoItem[];
  label: string;
  tone?: "surface" | "white";
}) {
  const fade =
    tone === "white"
      ? "from-white via-white/80"
      : "from-surface via-surface/80";

  return (
    <>
      <div className="relative hidden motion-reduce:block">
        <ul aria-label={label} className="container-custom flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {items.map((item) => (
            <li key={item.id}>
              <LogoCard item={item} alt={item.name} />
            </li>
          ))}
        </ul>
      </div>

      <div className="group relative motion-reduce:hidden" aria-label={label}>
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r ${fade} to-transparent sm:w-32`}
          aria-hidden="true"
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l ${fade} to-transparent sm:w-32`}
          aria-hidden="true"
        />
        <div className="logo-marquee flex w-max will-change-transform">
          <LogoSet items={items} copy="visible" />
          <LogoSet items={items} copy="clone" />
        </div>
      </div>
    </>
  );
}
