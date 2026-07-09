"use client";

import Image from "next/image";
import { StoreButtons } from "./StoreButtons";
import { useGsap, gsap } from "@/hooks/useGsap";

export function Download() {
  useGsap(() => {
    gsap.fromTo(
      ".contact-title",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#baixar", start: "top 70%" },
      },
    );
    gsap.fromTo(
      ".contact-form-wrap",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#baixar", start: "top 65%" },
      },
    );
    gsap.to(".contact-bg-parallax img", {
      yPercent: -18,
      ease: "none",
      scrollTrigger: {
        trigger: "#baixar",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="baixar"
      className="contact-container relative min-h-[80vh] overflow-hidden border-t border-white/10"
    >
      <div className="contact-bg-parallax absolute inset-0">
        <Image
          src="/images/brutal/asset-7.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover grayscale contrast-125 opacity-40"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-5xl flex-col justify-center px-6 py-28 md:px-12">
        <p className="mb-4 text-xs uppercase tracking-widest text-white/50">
          (006 — Download)
        </p>
        <h2 className="contact-title max-w-3xl text-5xl font-semibold uppercase leading-[0.9] tracking-tighter text-white md:text-7xl lg:text-8xl">
          Baixe o Chevron.
          <br />
          Chame o clube.
        </h2>
        <p className="contact-form-wrap mt-6 max-w-lg text-sm uppercase tracking-wide text-white/60 md:text-base">
          iOS e Android. Rotas em grupo, navegação, chat e SOS — o motoclube no
          mapa, de verdade.
        </p>
        <div className="contact-form-wrap mt-10">
          <StoreButtons />
        </div>
      </div>
    </section>
  );
}
