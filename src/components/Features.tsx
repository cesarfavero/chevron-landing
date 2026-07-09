"use client";

import { FEATURES } from "@/lib/constants";
import { useGsap, gsap } from "@/hooks/useGsap";

export function Features() {
  useGsap(() => {
    gsap.utils.toArray<HTMLElement>(".service-item").forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: i * 0.05,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        },
      );
    });
  }, []);

  return (
    <section
      id="recursos"
      className="relative min-h-[900px] overflow-hidden border-t border-white/10 bg-[#111] py-32 text-white"
    >
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-[0.04]">
        <h1 className="scale-y-[2.5] text-[22vw] font-semibold uppercase tracking-tighter text-white blur-sm">
          Recursos
        </h1>
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between px-6 md:px-12">
        <div className="mb-20 border-b border-white/20 pb-8 text-center">
          <span className="mb-4 block text-xs uppercase tracking-widest opacity-50">
            (002 — Capacidades)
          </span>
          <h2 className="text-5xl font-semibold uppercase tracking-tighter md:text-7xl">
            O que o app faz
          </h2>
        </div>

        <div className="flex w-full flex-col">
          {FEATURES.map((f) => (
            <div
              key={f.id}
              className="service-item group -mx-4 cursor-default border-b border-white/20 px-4 py-8 transition-colors duration-500 hover:bg-white hover:text-black"
            >
              <div className="flex flex-col justify-between md:flex-row md:items-end">
                <span className="mb-2 text-xs uppercase tracking-widest opacity-50 md:mb-0 md:w-1/12">
                  {f.id}
                </span>
                <h3 className="text-4xl font-semibold uppercase leading-none tracking-tighter transition-transform duration-500 group-hover:translate-x-3 md:w-6/12 md:text-6xl lg:text-7xl">
                  {f.title}
                </h3>
                <p className="mt-4 text-sm uppercase tracking-tight opacity-70 transition-opacity group-hover:opacity-100 md:mt-0 md:w-4/12 md:text-base">
                  {f.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
