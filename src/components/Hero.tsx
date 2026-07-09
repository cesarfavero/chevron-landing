"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { StoreButtons } from "./StoreButtons";
import { STATS } from "@/lib/constants";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const phoneScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const statsOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden pt-20"
    >
      {/* Parallax video depth */}
      <motion.div
        style={reduce ? undefined : { y: bgY }}
        className="absolute inset-0 will-change-transform"
      >
        <video
          className="h-[115%] w-full object-cover opacity-[0.22]"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-moto.jpg"
        >
          <source src="/videos/hero-ride.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-[#030303]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(0,255,136,0.09),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(0,0,0,0.6),transparent_50%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 px-5 pb-10 pt-6 md:grid-cols-12 md:gap-6 md:px-8 md:pb-16 md:pt-10">
        <motion.div
          style={
            reduce
              ? undefined
              : { y: contentY, opacity: contentOpacity }
          }
          className="order-2 md:order-1 md:col-span-6"
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.2em] text-primary uppercase backdrop-blur-md"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Motoclubes · Brasil
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.06, ease }}
            className="font-display text-[3.35rem] leading-[0.94] tracking-[0.03em] text-white sm:text-6xl md:text-7xl lg:text-[5.4rem]"
          >
            A ESTRADA
            <br />
            NÃO ESPERA.
            <br />
            <span className="neon-text soft-glow">O PACK SIM.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease }}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-secondary md:text-base"
          >
            Rotas em grupo, navegação turn-by-turn, chat ao vivo e SOS.
            Nativo, limpo e feito pro asfalto.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease }}
            className="mt-8"
          >
            <StoreButtons size="lg" />
          </motion.div>
        </motion.div>

        {/* Phone + 3D depth stack */}
        <div className="relative order-1 flex h-[360px] items-center justify-center sm:h-[440px] md:order-2 md:col-span-6 md:h-[560px]">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <HeroCanvas />
          </div>

          {/* Soft ground glow */}
          <div className="pointer-events-none absolute bottom-[12%] left-1/2 h-24 w-48 -translate-x-1/2 rounded-[100%] bg-primary/15 blur-3xl" />

          <motion.div
            style={
              reduce
                ? undefined
                : {
                    y: phoneY,
                    scale: phoneScale,
                    rotate: phoneRotate,
                  }
            }
            initial={reduce ? false : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="relative z-10 w-[220px] sm:w-[250px] md:w-[290px] float-soft will-change-transform"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/[0.07] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.12)]">
                <Image
                  src="/images/phone-mockup.jpg"
                  alt="Chevron no iPhone"
                  width={864}
                  height={1152}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Glass stats strip */}
      <motion.div
        style={reduce ? undefined : { opacity: statsOpacity }}
        className="relative z-10 px-5 pb-8 md:px-8"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl glass-panel-strong">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.4 + i * 0.07, ease }}
                className="border-white/[0.05] px-5 py-6 md:border-r md:px-7 md:last:border-r-0 [&:nth-child(odd)]:border-r [&:nth-child(-n+2)]:border-b md:[&:nth-child(-n+2)]:border-b-0"
              >
                <p className="font-display text-xl tracking-wider text-primary md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
