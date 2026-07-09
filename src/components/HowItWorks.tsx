"use client";

import { STEPS } from "@/lib/constants";
import { SectionReveal, StaggerContainer, StaggerItem } from "./SectionReveal";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionReveal className="mb-14 text-center">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
            Como funciona
          </p>
          <h2 className="font-display text-4xl tracking-wide text-white md:text-5xl lg:text-6xl">
            TRÊS PASSOS.
            <br />
            <span className="text-secondary">ZERO FRICÇÃO.</span>
          </h2>
        </SectionReveal>

        <StaggerContainer className="grid gap-4 md:grid-cols-3">
          {STEPS.map((step) => (
            <StaggerItem key={step.step}>
              <div className="h-full rounded-2xl border border-white/[0.07] bg-surface/50 p-8 text-center transition hover:border-primary/20">
                <span className="font-display text-3xl tracking-widest text-primary">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-xl tracking-wider text-white">
                  {step.title.toUpperCase()}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
