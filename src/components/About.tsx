"use client";

import Image from "next/image";
import { STATS } from "@/lib/constants";
import { useGsap, gsap } from "@/hooks/useGsap";

export function About() {
  useGsap(() => {
    gsap.utils.toArray<HTMLElement>(".stat-block").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        },
      );
    });

    gsap.fromTo(
      ".manifesto-title",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#sobre", start: "top 70%" },
      },
    );
  }, []);

  return (
    <section
      id="sobre"
      className="relative min-h-[900px] border-t border-white/20 bg-[#050505] px-6 py-32 text-white md:px-12"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col gap-16 lg:col-span-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-block border-t border-white/30 pt-4">
              <div className="mb-2 text-xs uppercase tracking-widest opacity-50">
                {stat.label}
              </div>
              <h2 className="text-6xl font-semibold tracking-tighter md:text-8xl">
                {stat.value}
                <span className="ml-2 text-3xl text-white/50 md:text-4xl">
                  {stat.suffix}
                </span>
              </h2>
              <p className="mt-4 w-4/5 text-sm uppercase tracking-tight opacity-80 md:text-base">
                {stat.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col pt-4 lg:col-span-8 lg:pt-0">
          <div className="mb-8 border-b border-white/20 pb-4 text-xs uppercase tracking-widest opacity-50">
            (001 — O que é o Chevron)
          </div>

          <h3 className="manifesto-title mb-16 text-4xl font-semibold uppercase leading-[0.9] tracking-tighter text-gray-300 mix-blend-exclusion md:text-6xl lg:text-[5.5vw]">
            Conectamos motoclubes com rotas em grupo, navegação e SOS — sem
            improvisar no WhatsApp.
          </h3>

          <div className="relative flex flex-col items-start gap-8 md:flex-row">
            {/* Aesthetic image kept (not Harley) — as requested */}
            <div className="relative aspect-square w-full rotate-3 overflow-hidden md:w-64">
              <Image
                src="/images/brutal/signal-ref.jpg"
                alt=""
                fill
                sizes="256px"
                className="object-cover grayscale contrast-150"
              />
            </div>

            <div className="flex flex-col gap-8">
              <p className="w-full text-xl font-medium uppercase leading-snug tracking-tight md:w-4/5 md:text-3xl">
                GPS ao vivo do clube. Turn-by-turn no guidão. Chat e eventos.
                Quando a estrada aperta, SOS com localização.
              </p>

              <a
                href="#baixar"
                className="group flex h-32 w-32 items-center justify-center self-start rounded-full border border-white text-xs font-bold uppercase tracking-widest transition-colors duration-500 hover:bg-white hover:text-black md:absolute md:-bottom-8 md:right-8"
              >
                <span className="transition-transform group-hover:scale-90">
                  Baixar
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
