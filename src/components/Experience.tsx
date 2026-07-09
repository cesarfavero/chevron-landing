"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import { SectionReveal } from "./SectionReveal";
import { GlassCard } from "./GlassCard";

const highlights = [
  {
    title: "Mapa ao vivo do clube",
    text: "Veja quem está online e onde o pack se move.",
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
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const mainY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const floatY = useTransform(scrollYProgress, [0, 1], [90, -40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [0.94, 1, 0.98]);

  return (
    <section
      id="experiencia"
      ref={ref}
      className="relative overflow-hidden py-28 md:py-36"
    >
      <motion.div
        style={reduce ? undefined : { y: bgY }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/images/pack-ride.jpg"
          alt=""
          fill
          sizes="100vw"
          className="scale-110 object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/90 to-[#030303]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(0,255,136,0.06),transparent_55%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-5 md:grid-cols-2 md:gap-20 md:px-8">
        <SectionReveal>
          <p className="mb-3 text-[12px] font-medium tracking-wide text-primary">
            Experiência
          </p>
          <h2 className="font-display text-[2.35rem] font-bold tracking-[-0.035em] text-white md:text-5xl lg:text-[3.5rem]">
            Feito para
            <br />
            <span className="neon-text soft-glow">o asfalto.</span>
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-secondary">
            Profundidade visual, glass sutil e precisão de navegação — a energia
            do pack com a clareza de um app nativo.
          </p>

          <ul className="mt-10 space-y-3">
            {highlights.map((item, i) => (
              <li key={item.title}>
                <GlassCard
                  className="!rounded-2xl"
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
        </SectionReveal>

        <div className="relative mx-auto h-[420px] w-full max-w-lg md:h-[500px]">
          <motion.div
            style={
              reduce
                ? undefined
                : { y: mainY, scale, rotate }
            }
            className="absolute inset-x-0 top-0 overflow-hidden rounded-3xl will-change-transform"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/[0.1] shadow-[0_40px_100px_rgba(0,0,0,0.65)]">
              <Image
                src="/images/hero-moto.jpg"
                alt="Moto moderna minimal"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/[0.04]" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
            </div>
          </motion.div>

          <motion.div
            style={reduce ? undefined : { y: floatY }}
            className="absolute bottom-4 right-0 w-[48%] overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.7)] will-change-transform sm:right-2"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/handlebar.jpg"
                alt="Cockpit digital"
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
            className="absolute bottom-16 left-0 glass-panel-strong rounded-2xl px-4 py-3 shadow-xl"
          >
            <p className="text-[11px] font-medium tracking-wide text-primary">
              Ao vivo
            </p>
            <p className="font-display text-base font-semibold tracking-tight text-white">
              Pack online
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
