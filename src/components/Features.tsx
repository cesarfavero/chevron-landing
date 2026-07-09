"use client";

import { FEATURES } from "@/lib/constants";
import { FeatureIcon } from "./FeatureIcons";
import { SectionReveal, StaggerContainer, StaggerItem } from "./SectionReveal";

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionReveal>
          <div className="mb-12 max-w-xl md:mb-16">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
              Recursos
            </p>
            <h2 className="font-display text-4xl tracking-wide text-white md:text-5xl lg:text-6xl">
              TUDO QUE O PACK
              <br />
              PRECISA NA ESTRADA
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-secondary md:text-base">
              Do ponto de encontro ao último quilômetro — navegação, clube, chat
              e segurança num app nativo e limpo.
            </p>
          </div>
        </SectionReveal>

        <StaggerContainer className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.id}>
              <article className="group h-full rounded-2xl border border-white/[0.07] bg-surface/60 p-6 transition duration-400 hover:border-primary/25 hover:bg-elevated/80 md:p-7">
                <div
                  className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-black/40 transition group-hover:border-primary/30"
                  style={{ color: feature.accent }}
                >
                  <FeatureIcon name={feature.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl tracking-wider text-white">
                  {feature.title.toUpperCase()}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-secondary">
                  {feature.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
