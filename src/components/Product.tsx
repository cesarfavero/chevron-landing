"use client";

import Image from "next/image";
import { useGsap, gsap } from "@/hooks/useGsap";

const SHOTS = [
  {
    src: "/images/brutal/harley-sportster.png",
    label: "Sportster S",
    sub: "Referência de máquina · clean studio",
  },
  {
    src: "/images/brutal/hd-beauty.jpg",
    label: "Beauty shot",
    sub: "Fotografia oficial Harley-Davidson",
  },
  {
    src: "/images/brutal/hd-riding.jpg",
    label: "Riding",
    sub: "Estrada real · hiperealista",
  },
  {
    src: "/images/brutal/hd-display.jpg",
    label: "Cockpit",
    sub: "Detalhe de painel · precisão",
  },
];

export function Product() {
  useGsap(() => {
    gsap.fromTo(
      ".product-shot",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: "#produto", start: "top 70%" },
      },
    );
  }, []);

  return (
    <section
      id="produto"
      className="border-t border-white/10 bg-[#0a0a0a] px-6 py-28 text-white md:px-12"
    >
      <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/15 pb-8 md:flex-row md:items-end">
        <div>
          <span className="mb-3 block text-xs uppercase tracking-widest opacity-50">
            (004 — Máquina & app)
          </span>
          <h2 className="max-w-2xl text-4xl font-semibold uppercase tracking-tighter md:text-6xl">
            Feito pra quem roda de verdade
          </h2>
        </div>
        <p className="max-w-sm text-xs uppercase tracking-widest opacity-50">
          Imagens profissionais HD · a mesma linguagem visual da estrada e do
          clube
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {SHOTS.map((shot) => (
          <figure
            key={shot.src}
            className="product-shot group relative aspect-[16/10] overflow-hidden bg-black"
          >
            <Image
              src={shot.src}
              alt={shot.label}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 to-transparent p-5">
              <div>
                <div className="text-xs uppercase tracking-widest text-white/50">
                  {shot.sub}
                </div>
                <div className="mt-1 text-2xl font-semibold uppercase tracking-tighter">
                  {shot.label}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
