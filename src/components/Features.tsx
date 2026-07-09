"use client";

import { SERVICES } from "@/lib/constants";

export function Features() {
  return (
    <section
      id="vectors-section"
      className="relative min-h-[900px] overflow-hidden border-t border-white/10 bg-[#111] py-32 text-white"
    >
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-[0.03]">
        <h1 className="distorted-bg scale-y-[3] bg-gradient-to-b from-white to-transparent bg-clip-text text-[25vw] font-semibold uppercase tracking-tighter text-transparent blur-sm">
          Recursos
        </h1>
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between px-6 md:px-12">
        <div className="mb-24 border-b border-white/20 pb-8 text-center">
          <span className="mb-4 block text-xs uppercase tracking-widest opacity-50">
            (002 — Capacidades)
          </span>
          <h2 className="text-5xl font-semibold uppercase tracking-tighter md:text-7xl">
            O que o app faz
          </h2>
        </div>

        <div className="list-container flex w-full flex-col">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="service-item group -mx-4 flex cursor-pointer flex-col justify-between border-b border-white/20 px-4 py-8 transition-colors duration-500 hover:bg-white hover:text-black md:flex-row md:items-end"
            >
              <span className="mb-2 text-xs uppercase tracking-widest opacity-50 md:mb-0 md:w-1/12">
                {s.id}
              </span>
              <h3 className="whitespace-pre-line text-5xl font-semibold uppercase leading-none tracking-tighter transition-transform duration-500 group-hover:translate-x-4 md:w-7/12 md:text-7xl lg:text-8xl">
                {s.title}
              </h3>
              <div className="mt-4 text-base uppercase tracking-tight opacity-70 transition-opacity group-hover:opacity-100 md:mt-0 md:w-3/12 md:text-lg">
                {s.text}
              </div>
              <svg
                className="hidden h-12 w-12 opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:opacity-100 md:block"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
