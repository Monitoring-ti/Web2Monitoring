"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/types";

type FlowCopy = Dictionary["mmi"]["flow"];
type ExampleCopy = Dictionary["mmi"]["example"];
type ProcessCopy = Dictionary["mmi"]["process"];

export function MmiFlow({ flow }: { flow: FlowCopy }) {
  return (
    <div>
      <div
        className="flex flex-col items-stretch gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 sm:flex-row sm:items-center sm:gap-3"
        aria-label={flow.aria}
      >
        <div className="flex flex-wrap gap-2 rounded-xl border border-white/10 bg-[#06142B]/50 p-3 sm:flex-col">
          {flow.sources.map((source, index) => (
            <span
              key={source}
              className={`rounded-full px-3 py-1 text-center text-xs font-bold ${
                index === 0
                  ? "bg-accent text-white"
                  : "border border-white/20 text-white/85"
              }`}
            >
              {source}
            </span>
          ))}
        </div>

        <FlowConnector delay="0s" />

        <div className="relative mx-auto h-[84px] w-[84px] shrink-0">
          <div
            aria-hidden="true"
            className="mmi-flow-ring absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, #36A9DF 60deg, #F09321 140deg, transparent 220deg)",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
            }}
          />
          <div className="mmi-flow-node absolute inset-[8px] flex items-center justify-center rounded-full border border-white/15 bg-[#0B1B33] text-lg font-extrabold leading-none">
            <span className="relative -translate-y-0.5 leading-none">
              <span className="text-white">MM</span>
              <span className="text-accent">i</span>
            </span>
          </div>
        </div>

        <FlowConnector delay="0.7s" />

        <div className="mmi-flow-result min-w-0 flex-1 rounded-xl border border-white/15 bg-[#0B1B33] px-4 py-3">
          <p className="text-sm font-bold text-white">{flow.result}</p>
          <p className="text-xs text-white/60">{flow.resultDetail}</p>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-white/55 sm:text-left">{flow.caption}</p>
    </div>
  );
}

function FlowConnector({ delay }: { delay: string }) {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-8 w-0.5 shrink-0 bg-gradient-to-b from-white/20 to-celeste sm:mx-0 sm:h-0.5 sm:w-8 sm:bg-gradient-to-r"
    >
      <span
        className="mmi-flow-dot absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-celeste shadow-[0_0_8px_rgba(54,169,223,0.7)] sm:left-0 sm:top-1/2 sm:-translate-x-0 sm:-translate-y-1/2"
        style={{ animationDelay: delay }}
      />
      <span
        className="mmi-flow-dot absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full bg-celeste opacity-80 sm:left-0 sm:top-1/2 sm:-translate-x-0 sm:-translate-y-1/2"
        style={{ animationDelay: delay === "0s" ? "1.2s" : "1.8s" }}
      />
    </div>
  );
}

function ExampleArrow({ delay }: { delay: string }) {
  return (
    <div aria-hidden="true" className="relative h-7 overflow-hidden">
      <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-accent/15 to-celeste/70" />
      <svg
        className="mmi-example-flow absolute left-[14px] h-3 w-3 text-accent"
        style={{ animationDelay: delay }}
        viewBox="0 0 12 12"
      >
        <path d="M6 2 L10.5 9 H1.5 Z" fill="currentColor" transform="rotate(180 6 6)" />
      </svg>
    </div>
  );
}

export function MmiExample({ example }: { example: ExampleCopy }) {
  return (
    <article className="rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">
          {example.badge}
        </p>
        <p className="text-xs font-semibold text-muted">{example.kind}</p>
      </div>
      <h3 className="font-display text-xl font-bold leading-snug text-primary sm:text-2xl">
        {example.question}
      </h3>

      <div className="mt-6">
        {example.panels.map((panel, index) => (
          <div key={panel.title}>
            <section className="rounded-2xl border border-border bg-surface px-5 py-4">
              <h4 className="mb-1 text-xs font-bold uppercase tracking-widest text-accent">{panel.title}</h4>
              <p className="text-sm leading-relaxed text-primary/80">{panel.text}</p>
            </section>
            {index < example.panels.length - 1 ? <ExampleArrow delay={`${index * 0.45}s`} /> : null}
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted">
            {example.confidenceLabel}{" "}
            <span className="ml-1 rounded-full bg-accent/15 px-2 py-0.5 text-accent">{example.confidence}</span>
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-primary/75">{example.confidenceNote}</p>
        </div>
        <p className="shrink-0 text-xs text-muted">
          <span className="font-bold uppercase tracking-wider">{example.executionLabel}</span>{" "}
          {example.execution}
        </p>
      </div>

      <a
        href="https://mmi.monitoring.lat/demostracion"
        target="_blank"
        rel="noreferrer"
        className="btn-primary mt-6 text-sm"
      >
        {example.openDemo}
      </a>
    </article>
  );
}

export function MmiProcess({ process }: { process: ProcessCopy }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % process.items.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [process.items.length]);

  return (
    <ol className="grid grid-cols-1 gap-4 md:grid-cols-5">
      {process.items.map((item, index) => {
        const on = index === active;
        return (
          <li
            key={item.title}
            className={`rounded-2xl border p-5 transition-all duration-500 ${
              on ? "border-accent bg-white shadow-card" : "border-border bg-white/60"
            }`}
          >
            <span className={`font-display text-sm font-extrabold ${on ? "text-accent" : "text-primary/40"}`}>
              0{index + 1}
            </span>
            <h3 className="mt-2 font-display text-base font-bold text-primary">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
          </li>
        );
      })}
    </ol>
  );
}
