"use client";

import { VOICES } from "@/lib/constants";

export function Voices() {
  return (
    <section
      data-element-id="testimonials-section"
      className="relative border-t border-white/20 bg-[#050505] px-6 py-32 text-white md:px-12"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <div className="testimonial-sticky sticky top-32 flex flex-col gap-8">
            <span className="text-xs uppercase tracking-widest opacity-50">
              (004 — Na estrada)
            </span>
            <h2 className="text-5xl font-semibold uppercase leading-[0.85] tracking-tighter md:text-7xl">
              O
              <br />
              veredito
            </h2>
            <p className="w-4/5 text-base uppercase tracking-tight opacity-70">
              Quem já usa o Chevron pra rodar com o clube.
            </p>
          </div>
        </div>

        <div className="testimonial-list relative grid pt-16 lg:col-span-7">
          {VOICES.map((v) => (
            <div
              key={v.name}
              className="testimonial-card origin-top col-start-1 row-start-1 flex w-full flex-col gap-6"
            >
              <p className="text-2xl font-medium uppercase leading-snug tracking-tight md:text-4xl">
                &ldquo;{v.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-white/20 pt-4">
                <div className="text-xs uppercase tracking-widest">
                  <strong>{v.name}</strong>
                  <br />
                  <span className="opacity-50">{v.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
