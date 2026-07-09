"use client";

import Image from "next/image";
import { useState } from "react";
import { FAQ } from "@/lib/constants";
import { useGsap, gsap } from "@/hooks/useGsap";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  useGsap(() => {
    gsap.fromTo(
      "#faq .faq-row",
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: "#faq", start: "top 75%" },
      },
    );
  }, []);

  return (
    <section
      id="faq"
      className="border-t border-white/10 bg-[#050505] px-6 py-28 text-white md:px-12"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="mb-3 block text-xs uppercase tracking-widest opacity-50">
            (005 — Dúvidas)
          </span>
          <h2 className="text-4xl font-semibold uppercase tracking-tighter md:text-6xl">
            Perguntas
            <br />
            comuns
          </h2>
          <div className="relative mt-10 aspect-square w-full max-w-md overflow-hidden">
            <Image
              src="/images/brutal/faq-ref.jpg"
              alt=""
              fill
              sizes="400px"
              className="object-cover grayscale contrast-125"
            />
          </div>
        </div>

        <div className="faq-list flex flex-col lg:col-span-7">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="faq-row border-t border-white/20 py-5 last:border-b"
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-6 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold uppercase tracking-tight md:text-2xl">
                    {item.q}
                  </span>
                  <span className="mt-1 text-xs uppercase tracking-widest opacity-50">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    isOpen ? "mt-4 max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
