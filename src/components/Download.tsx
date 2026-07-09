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
import { ScrollSection } from "./ScrollSection";

export function Download() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.12, 1]);
  const cardY = useTransform(scrollYProgress, [0, 1], [30, -24]);

  return (
    <ScrollSection id="download" className="py-28 md:py-36" intensity={0.75}>
      <div className="relative z-10 mx-auto max-w-3xl px-5 md:px-8" ref={ref}>
        <motion.div
          style={reduce ? undefined : { scale: glowScale }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[42vh] w-[42vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,255,136,0.14)_0%,transparent_70%)]"
          aria-hidden
        />

        <motion.div
          style={reduce ? undefined : { y: cardY }}
          className="glass-panel-strong relative rounded-[2rem] px-6 py-12 text-center md:px-12 md:py-16"
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
      </div>
    </ScrollSection>
  );
}
