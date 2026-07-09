"use client";

import { STEPS } from "@/lib/constants";
import { GlassCard } from "./GlassCard";
import { ScrollSection } from "./ScrollSection";
import { StaggerContainer, StaggerItem } from "./SectionReveal";

export function HowItWorks() {
  return (
    <ScrollSection id="como-funciona" className="py-28 md:py-36" intensity={0.9}>
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 max-w-xl md:mb-16">
          <p className="mb-3 text-[12px] font-medium tracking-wide text-primary">
            Como funciona
          </p>
          <h2 className="font-display text-[2.25rem] font-bold tracking-[-0.035em] text-white md:text-4xl lg:text-[2.75rem]">
            Comece em minutos
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-secondary">
            Conta, clube e rota — sem complicação.
          </p>
        </div>

        <StaggerContainer className="grid gap-4 md:grid-cols-3 md:gap-5">
          {STEPS.map((step) => (
            <StaggerItem key={step.step}>
              <GlassCard
                className="h-full"
                glowColor="rgba(0, 255, 136, 0.12)"
              >
                <div className="flex h-full flex-col px-6 py-8 md:px-7">
                  <span className="font-display text-sm font-semibold tabular-nums text-primary/80">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">
                    {step.description}
                  </p>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </ScrollSection>
  );
}
