"use client";

import Image from "next/image";
import { StoreButtons } from "./StoreButtons";

export function Download() {
  return (
    <section
      id="contact"
      className="contact-container relative overflow-hidden border-t border-white/20 bg-[#111] px-6 py-32 text-white md:px-12"
    >
      <div className="contact-bg-parallax pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-[0.08]">
        <Image
          src="/images/brutal/asset-7.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="h-[120%] w-full object-cover grayscale blur-sm"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <span className="mb-8 block text-xs uppercase tracking-widest opacity-50">
          (006 — Download)
        </span>
        <h2 className="contact-title mb-16 text-6xl font-semibold uppercase leading-[0.8] tracking-tighter mix-blend-difference md:text-9xl">
          Baixe o
          <br />
          Chevron
        </h2>
        <div className="contact-form-wrap mx-auto flex w-full max-w-2xl flex-col items-center gap-12">
          <p className="max-w-md text-sm uppercase tracking-widest opacity-60">
            iOS e Android. Rotas em grupo, navegação, chat e SOS — o motoclube
            no mapa.
          </p>
          <StoreButtons />
        </div>
      </div>
    </section>
  );
}
