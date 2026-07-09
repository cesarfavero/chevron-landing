"use client";

import { NAV } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative flex flex-col items-center justify-center overflow-hidden border-t border-white/30 bg-[#050505] px-6 pb-8 pt-32 text-white md:px-12">
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-10 mix-blend-overlay">
        <div className="absolute h-full w-px bg-white" />
        <div className="absolute h-px w-full bg-white" />
        <div className="absolute h-[80vw] w-[80vw] rounded-full border border-dashed border-white md:h-[50vw] md:w-[50vw]" />
      </div>

      <div className="z-10 flex w-full max-w-6xl flex-col items-center text-center">
        <h1 className="footer-title text-[12vw] font-semibold uppercase leading-[0.75] tracking-tighter mix-blend-exclusion md:text-[10vw]">
          Baixe
          <br />
          <span className="mt-2 block font-light italic opacity-80">
            o Chevron
          </span>
        </h1>

        <div className="mb-24 mt-16 grid w-full grid-cols-2 gap-8 border-y border-white/20 py-8 text-left text-xs uppercase tracking-widest md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <span className="mb-4 opacity-50">Nav</span>
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:italic">
                {n.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="mb-4 opacity-50">App</span>
            <span className="opacity-70">iOS</span>
            <span className="opacity-70">Android</span>
            <span className="opacity-70">Tempo real</span>
          </div>
          <div className="col-span-2 flex flex-col gap-2 md:col-span-2">
            <span className="mb-4 opacity-50">Produto</span>
            <p className="normal-case tracking-normal opacity-60">
              Rotas em grupo · Navegação · Chat · Eventos · SOS
            </p>
          </div>
        </div>
      </div>

      <div className="z-10 flex w-full flex-col items-end justify-between text-xs font-medium uppercase tracking-widest opacity-60 md:flex-row">
        <div className="mb-4 flex gap-4 md:mb-0">
          <span>© {year} Chevron</span>
          <span>Caesars Technology</span>
        </div>
        <span>Ride free. Ride together.</span>
      </div>
    </footer>
  );
}
