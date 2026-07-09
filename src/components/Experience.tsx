"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import { GlassCard } from "./GlassCard";
import { ScrollSection } from "./ScrollSection";

const highlights = [
  {
    title: "Mapa ao vivo do clube",
    text: "Veja quem está online e onde cada um está na estrada.",
  },
  {
    title: "Código de convite",
    text: "O grupo entra em segundos. Simples e direto.",
  },
  {
    title: "Dark premium",
    text: "Contraste alto, legível no guidão — dia ou noite.",
  },
];

export function Experience() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: mediaRef,
    offset: ["start end", "end start"],
  });

  const mainY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const floatY = useTransform(scrollYProgress, [0, 1], [80, -30]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2.5, -2.5]);
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.93, 1, 0.97]);

  return (
    <ScrollSection id="experiencia" className="py-28 md:py-36" intensity={1}>
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-5 md:grid-cols-2 md:gap-20 md:px-8">
        <div>
          <p className="mb-3 text-[12px] font-medium tracking-wide text-primary">
            Experiência
          </p>
          <h2 className="font-display text-[2.35rem] font-bold tracking-[-0.035em] text-white md:text-5xl lg:text-[3.5rem]">
            Feito para
            <br />
            <span className="neon-text soft-glow">o asfalto.</span>
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-secondary">
            A energia do motoclube com a precisão de um app de navegação de
            verdade.
          </p>

          <ul className="mt-10 space-y-3">
            {highlights.map((item, i) => (
              <li key={item.title}>
                <GlassCard
                  className="!rounded-3xl"
                  glowColor="rgba(0, 255, 136, 0.1)"
                >
                  <div className="flex items-center gap-4 px-5 py-4">
                    <span className="font-display text-base font-semibold tabular-nums text-primary/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold tracking-tight text-white">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-sm leading-relaxed text-secondary">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={mediaRef}
          className="relative mx-auto h-[420px] w-full max-w-lg md:h-[500px]"
        >
          <motion.div
            style={reduce ? undefined : { y: mainY, scale, rotate }}
            className="absolute inset-x-0 top-0 overflow-hidden rounded-[1.75rem] will-change-transform"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] shadow-float-strong">
              <Image
                src="/images/hero-moto.jpg"
                alt="Cruiser na estrada à noite"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/[0.04]" />
            </div>
          </motion.div>

          <motion.div
            style={reduce ? undefined : { y: floatY }}
            className="absolute bottom-4 right-0 w-[48%] overflow-hidden rounded-3xl shadow-float-strong will-change-transform sm:right-2"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/handlebar.jpg"
                alt="Guidão e chrome de cruiser"
                fill
                sizes="240px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute bottom-16 left-0 rounded-3xl glass-panel-strong px-4 py-3"
          >
            <p className="text-[11px] font-medium tracking-wide text-primary">
              Ao vivo
            </p>
            <p className="font-display text-base font-semibold tracking-tight text-white">
              Clube online
            </p>
          </motion.div>
        </div>
      </div>
    </ScrollSection>
  );
}
