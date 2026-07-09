"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { StoreButtons } from "./StoreButtons";
import { SectionReveal } from "./SectionReveal";

export function Download() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1]);
  const cardY = useTransform(scrollYProgress, [0, 1], [40, -20]);

  return (
    <section
      id="download"
      ref={ref}
      className="relative overflow-hidden py-28 md:py-36"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/texture-metal.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-black/85 to-[#030303]" />
      </div>

      <motion.div
        style={reduce ? undefined : { scale: glowScale }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,255,136,0.12)_0%,transparent_70%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-5 md:px-8">
        <SectionReveal>
          <motion.div
            style={reduce ? undefined : { y: cardY }}
            className="glass-panel-strong rounded-[2rem] px-6 py-12 text-center md:px-12 md:py-16"
          >
            <div className="mx-auto mb-7 flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-[22%] shadow-[0_0_40px_rgba(0,255,136,0.22)] ring-1 ring-white/10">
              <Image
                src="/images/app-icon.png"
                alt="Ícone Chevron"
                width={72}
                height={72}
                className="h-full w-full object-cover"
              />
            </div>

            <h2 className="font-display text-[2.35rem] font-bold tracking-[-0.035em] text-white sm:text-5xl md:text-[3.25rem]">
              Baixe o Chevron.
              <br />
              <span className="neon-text soft-glow">Domine a estrada.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-secondary">
              iOS e Android. Rotas, navegação, chat e SOS — o pack no bolso.
            </p>

            <div className="mt-9 flex justify-center">
              <StoreButtons size="lg" centered />
            </div>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}
