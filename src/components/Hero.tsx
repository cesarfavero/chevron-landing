"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section
      id="topo"
      className="hero-section relative flex min-h-[900px] flex-col justify-center overflow-hidden bg-[#d4d4d4] pt-20 text-black md:min-h-[980px]"
    >
      {/* Massive Background Text */}
      <div className="pointer-events-none absolute inset-0 z-10 flex w-full flex-col items-center justify-center px-4 text-white mix-blend-difference md:px-12">
        <h1
          className="hero-text w-full text-left text-[20vw] font-semibold uppercase leading-[0.75] tracking-tighter md:text-[18vw]"
          data-speed="0.8"
        >
          Estrada
        </h1>
        <h1
          className="hero-text w-full pl-[10vw] text-right text-[20vw] font-semibold uppercase leading-[0.75] tracking-tighter md:text-[18vw]"
          data-speed="1.2"
        >
          Clube
        </h1>
      </div>

      {/* Center Collage Block — Harley hyperreal, same palette as ref (grayscale + contrast) */}
      <div className="hero-image-block relative z-0 mx-auto aspect-[4/5] w-[90%] rotate-[-2deg] bg-black p-2 md:aspect-square md:w-[45%] md:p-6">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/images/brutal/asset-8.jpeg"
            alt="Harley Sportster — fotografia profissional"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 45vw"
            className="hero-img object-cover opacity-80 grayscale contrast-125"
          />
        </div>

        <div className="hero-overlay-grid pointer-events-none absolute inset-0 z-10 grid grid-cols-2 grid-rows-3 p-8 text-xs uppercase tracking-widest text-white/60">
          <div className="w-1/2 border-t border-white/20 pt-2">Rotas em grupo</div>
          <div className="w-1/2 justify-self-end border-t border-white/20 pt-2 text-right">
            Navegação
          </div>
          <div className="col-span-2 self-center border-y border-white/10 py-4 text-center text-base opacity-30">
            GPS ao vivo · chat · SOS
          </div>
          <div className="w-1/2 self-end border-b border-white/20 pb-2">
            Eventos
          </div>
          <div className="w-1/2 justify-self-end self-end border-b border-white/20 pb-2 text-right">
            Motoclube
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 z-20 flex w-full justify-between px-6 text-xs font-medium uppercase tracking-widest text-white mix-blend-difference md:px-12">
        <div className="w-1/3 border-t border-white pt-2">
          App nativo pra motoclube: mapa ao vivo, navegação e SOS na mesma
          estrada.
        </div>
        <div className="w-1/3 border-t border-white pt-2 text-right">
          Índice 01 — O app
        </div>
      </div>
    </section>
  );
}
