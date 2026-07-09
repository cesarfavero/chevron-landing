"use client";

import Image from "next/image";
import { StoreButtons } from "./StoreButtons";
import { SectionReveal } from "./SectionReveal";

export function Download() {
  return (
    <section id="download" className="relative overflow-hidden py-24 md:py-28">
      <div className="absolute inset-0">
        <Image
          src="/images/texture-metal.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/80 to-[#050505]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <SectionReveal>
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(0,255,136,0.25)]">
            <Image
              src="/images/app-icon.png"
              alt="Ícone Chevron"
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl md:text-6xl">
            BAIXE O CHEVRON.
            <br />
            <span className="neon-text">DOMINE A ESTRADA.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm text-secondary md:text-base">
            iOS e Android. Rotas, navegação, chat e SOS — o pack no bolso.
          </p>

          <div className="mt-9 flex justify-center">
            <StoreButtons size="lg" centered />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
