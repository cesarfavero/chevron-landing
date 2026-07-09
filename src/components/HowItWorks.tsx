"use client";

import { STEPS } from "@/lib/constants";
import { GlassCard } from "./GlassCard";
import { ScrollSection } from "./ScrollSection";
import { StaggerContainer, StaggerItem } from "./SectionReveal";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineScale = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);

  return (
    <ScrollSection id="como-funciona" className="py-28 md:py-36" intensity={0.9}>
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8" ref={ref}>
        <div className="mb-16 text-center">
          <p className="mb-3 text-[12px] font-medium tracking-wide text-primary">
            Como funciona
          </p>
          <h2 className="font-display text-[2.35rem] font-bold tracking-[-0.035em] text-white md:text-5xl lg:text-[3.5rem]">
            Três passos.
            <br />
            <span className="text-white/35">Zero fricção.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-[2.75rem] hidden h-px overflow-hidden md:block">
            <div className="h-full w-full bg-white/[0.06]" />
            <motion.div
              style={
                reduce
                  ? { scaleX: 1 }
                  : { scaleX: lineScale, transformOrigin: "left center" }
              }
              className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10"
            />
          </div>

          <StaggerContainer className="grid gap-4 md:grid-cols-3 md:gap-5">
            {STEPS.map((step) => (
              <StaggerItem key={step.step}>
                <GlassCard
                  className="h-full text-center"
                  glowColor="rgba(0, 255, 136, 0.12)"
                >
                  <div className="flex h-full flex-col items-center px-6 py-9 md:px-8">
                    <div className="relative mb-6 flex h-14 w-14 items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-primary/10 blur-md" />
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-primary/25 bg-black/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                        <span className="font-display text-lg font-semibold tabular-nums text-primary">
                          {step.step}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-white md:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-secondary">
                      {step.description}
                    </p>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </ScrollSection>
  );
}
