"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { StoreButtons } from "./StoreButtons";
import { STATS } from "@/lib/constants";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-32 w-32 rounded-full bg-primary/10 blur-3xl pulse-soft" />
    </div>
  ),
});

const ease = [0.25, 0.1, 0.25, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-20">
      {/* Soft video backdrop */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-25"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-moto.jpg"
        >
          <source src="/videos/hero-ride.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(0,255,136,0.08),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-5 pb-14 pt-8 md:grid-cols-12 md:gap-8 md:px-8 md:pb-20 md:pt-12">
        <div className="order-2 md:order-1 md:col-span-6 lg:col-span-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium tracking-[0.18em] text-primary uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Motoclubes · Brasil
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease }}
            className="font-display text-[3.25rem] leading-[0.95] tracking-[0.03em] text-white sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            A ESTRADA
            <br />
            NÃO ESPERA.
            <br />
            <span className="neon-text soft-glow">O PACK SIM.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-secondary md:text-base"
          >
            Rotas em grupo, navegação turn-by-turn, chat ao vivo e SOS.
            O app nativo dos motoclubes — limpo, preciso, premium.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease }}
            className="mt-8"
          >
            <StoreButtons size="lg" />
          </motion.div>
        </div>

        {/* Visual stack: phone + 3D accent */}
        <div className="relative order-1 flex h-[340px] items-center justify-center sm:h-[420px] md:order-2 md:col-span-6 md:h-[540px]">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="pointer-events-none absolute inset-0 opacity-50"
          >
            <HeroCanvas />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease }}
            className="relative z-10 w-[210px] sm:w-[240px] md:w-[280px] float-soft"
          >
            <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.65),0_0_60px_rgba(0,255,136,0.08)] ring-1 ring-white/10">
              <Image
                src="/images/phone-mockup.jpg"
                alt="Chevron no iPhone"
                width={864}
                height={1152}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.06, ease }}
              className="border-white/[0.06] px-5 py-6 md:border-r md:px-8 md:last:border-r-0 [&:nth-child(odd)]:border-r"
            >
              <p className="font-display text-xl tracking-wider text-primary md:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
