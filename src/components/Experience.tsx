"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionReveal } from "./SectionReveal";

const highlights = [
  {
    title: "Mapa ao vivo do clube",
    text: "Veja quem está online e onde o pack se move — em tempo real.",
  },
  {
    title: "Código de convite",
    text: "Compartilhe o código da rota e o grupo entra em segundos.",
  },
  {
    title: "Interface dark premium",
    text: "Contraste alto e layout limpo — legível no guidão, dia ou noite.",
  },
];

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      id="experiencia"
      ref={ref}
      className="relative overflow-hidden py-24 md:py-28"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/pack-ride.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/92 to-[#050505]/75" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <SectionReveal>
          <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
            Experiência
          </p>
          <h2 className="font-display text-4xl tracking-wide text-white md:text-5xl lg:text-6xl">
            FEITO PARA
            <br />
            <span className="neon-text">O ASFALTO.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-secondary md:text-base">
            Visual moderno, minimal e tech — com a energia do motoclube e a
            precisão de um app de navegação de verdade.
          </p>

          <ul className="mt-10 space-y-5">
            {highlights.map((item, i) => (
              <li key={item.title} className="flex gap-4">
                <span className="font-display text-lg text-primary/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-secondary">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </SectionReveal>

        <div className="relative mx-auto w-full max-w-md">
          <motion.div style={{ y }} className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/[0.08]">
              <Image
                src="/images/hero-moto.jpg"
                alt="Moto moderna minimal"
                width={1280}
                height={720}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-2 w-[42%] overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:-right-4 sm:w-[45%]">
              <Image
                src="/images/handlebar.jpg"
                alt="Cockpit digital"
                width={1280}
                height={720}
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
