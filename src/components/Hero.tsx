"use client";

import Image from "next/image";
import { useGsap, gsap, ScrollTrigger } from "@/hooks/useGsap";

export function Hero() {
  useGsap(() => {
    gsap.fromTo(
      ".hero-text",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, stagger: 0.12, ease: "power3.out" },
    );
    gsap.fromTo(
      ".hero-image-block",
      { y: 60, opacity: 0, rotate: -6 },
      { y: 0, opacity: 1, rotate: -2, duration: 1.2, delay: 0.15, ease: "power3.out" },
    );

    gsap.utils.toArray<HTMLElement>(".hero-text").forEach((el) => {
      const speed = Number(el.dataset.speed || 1);
      gsap.to(el, {
        yPercent: (1 - speed) * 40,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="topo"
      className="hero-section relative flex min-h-[900px] flex-col justify-center overflow-hidden bg-[#d4d4d4] pt-20 text-black md:min-h-[980px]"
    >
      {/* Massive background type */}
      <div className="pointer-events-none absolute inset-0 z-10 flex w-full flex-col items-center justify-center px-4 text-white mix-blend-difference md:px-12">
        <h1
          className="hero-text w-full text-left text-[18vw] font-semibold uppercase leading-[0.75] tracking-tighter md:text-[16vw]"
          data-speed="0.85"
        >
          Estrada
        </h1>
        <h1
          className="hero-text w-full pl-[8vw] text-right text-[18vw] font-semibold uppercase leading-[0.75] tracking-tighter md:text-[16vw]"
          data-speed="1.15"
        >
          Clube
        </h1>
      </div>

      {/* Center collage — hyperreal Harley */}
      <div className="hero-image-block relative z-0 mx-auto aspect-[4/5] w-[90%] rotate-[-2deg] bg-black p-2 md:aspect-square md:w-[42%] md:p-6">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/images/brutal/asset-8.jpeg"
            alt="Harley Sportster em rua urbana — foto profissional"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 42vw"
            className="object-cover grayscale-hard opacity-90"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 grid-rows-3 p-6 text-[10px] uppercase tracking-widest text-white/60 md:p-8 md:text-xs">
          <div className="w-1/2 border-t border-white/20 pt-2">Rotas em grupo</div>
          <div className="w-1/2 justify-self-end border-t border-white/20 pt-2 text-right">
            Turn-by-turn
          </div>
          <div className="col-span-2 self-center border-y border-white/10 py-4 text-center text-sm opacity-40 md:text-base">
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
        <div className="w-[48%] border-t border-white pt-2 md:w-1/3">
          App nativo pra motoclube: mapa ao vivo, navegação e SOS na mesma
          estrada.
        </div>
        <div className="w-[40%] border-t border-white pt-2 text-right md:w-1/3">
          Índice 01 — O app
        </div>
      </div>
    </section>
  );
}
