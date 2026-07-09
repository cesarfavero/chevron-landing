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
  const cardY = useTransform(scrollYProgress, [0, 1], [24, -16]);

  return (
    <ScrollSection id="download" className="py-28 md:py-36" intensity={0.75}>
      <div className="relative z-10 mx-auto max-w-2xl px-5 md:px-8" ref={ref}>
        <motion.div
          style={reduce ? undefined : { y: cardY }}
          className="relative rounded-[2rem] glass-panel-strong px-6 py-12 text-center md:px-10 md:py-14"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-[20%] shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_32px_rgba(0,255,136,0.18)]">
            <Image
              src="/images/app-icon.png"
              alt="Ícone Chevron"
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="font-display text-[2rem] font-bold tracking-[-0.035em] text-white sm:text-[2.35rem] md:text-[2.6rem]">
            Leve o Chevron na estrada
          </h2>

          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-secondary">
            Disponível para iOS e Android. Rotas, navegação, chat e SOS do
            motoclube — no bolso.
          </p>

          <div className="mt-8 flex justify-center">
            <StoreButtons size="lg" centered />
          </div>
        </motion.div>
      </div>
    </ScrollSection>
  );
}
