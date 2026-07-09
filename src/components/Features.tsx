"use client";

import { FEATURES } from "@/lib/constants";
import { FeatureIcon } from "./FeatureIcons";
import { GlassCard } from "./GlassCard";
import { ScrollSection } from "./ScrollSection";
import { StaggerContainer, StaggerItem } from "./SectionReveal";

export function Features() {
  return (
    <ScrollSection id="features" className="py-28 md:py-36" intensity={0.85}>
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(80%,720px)] -translate-x-1/2 depth-line"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-[12px] font-medium tracking-wide text-primary">
              Recursos
            </p>
            <h2 className="font-display text-[2.25rem] font-bold tracking-[-0.035em] text-white md:text-4xl lg:text-[2.85rem]">
              Tudo que o clube
              <br />
              <span className="text-white/45">precisa na estrada</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-secondary md:pb-1 md:text-[15px]">
            Navegação, chat e segurança — do ponto de encontro ao destino.
            Tudo conectado, em tempo real.
          </p>
        </div>

        <StaggerContainer className="grid auto-rows-fr gap-3 md:gap-4 lg:grid-cols-12">
          {FEATURES.map((feature) => (
            <StaggerItem
              key={feature.id}
              className={`${feature.span} ${feature.featured ? "min-h-[280px] md:min-h-[340px]" : "min-h-[200px]"}`}
            >
              <GlassCard
                className="h-full"
                glowColor={
                  feature.id === "sos"
                    ? "rgba(255, 92, 85, 0.16)"
                    : feature.id === "chat"
                      ? "rgba(77, 163, 255, 0.14)"
                      : feature.id === "events"
                        ? "rgba(255, 176, 32, 0.14)"
                        : "rgba(0, 255, 136, 0.16)"
                }
              >
                <div
                  className={`flex h-full flex-col p-6 md:p-8 ${feature.featured ? "justify-between" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black/45 shadow-float-soft"
                      style={{ color: feature.accent }}
                    >
                      <FeatureIcon name={feature.icon} className="h-5 w-5" />
                    </div>
                    {feature.featured && (
                      <span className="rounded-full bg-primary/12 px-3 py-1 text-[11px] font-medium tracking-wide text-primary shadow-float-soft">
                        Principal
                      </span>
                    )}
                  </div>

                  <div className={feature.featured ? "mt-auto pt-10" : "mt-6"}>
                    <h3
                      className={`font-display font-semibold tracking-tight text-white ${
                        feature.featured
                          ? "text-2xl md:text-3xl"
                          : "text-lg md:text-xl"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`mt-3 leading-relaxed text-secondary ${
                        feature.featured
                          ? "max-w-md text-[15px] md:text-base"
                          : "text-sm"
                      }`}
                    >
                      {feature.description}
                    </p>

                    {feature.featured && (
                      <div className="mt-8 flex flex-wrap gap-2">
                        {[
                          "Código de convite",
                          "Mapa ao vivo",
                          "Grupo em tempo real",
                        ].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-black/35 px-3 py-1 text-[11px] text-secondary shadow-float-soft"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div
                    className="pointer-events-none absolute bottom-0 left-6 right-6 h-px opacity-40 md:left-8 md:right-8"
                    style={{
                      background: `linear-gradient(90deg, ${feature.accent}55, transparent)`,
                    }}
                  />
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </ScrollSection>
  );
}
