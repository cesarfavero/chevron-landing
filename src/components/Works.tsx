"use client";

import Image from "next/image";
import { WORKS } from "@/lib/constants";
import { useGsap, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { useRef } from "react";

export function Works() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".work-card");
    if (!cards.length || !sectionRef.current) return;

    const isMobile = window.innerWidth < 768;
    const yOffset = isMobile ? -120 : -200;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${cards.length * 90}%`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    cards.forEach((card, i) => {
      if (i === 0) return;
      tl.to(
        {},
        {
          duration: 0.2,
        },
        `step${i}`,
      );
      for (let j = 0; j < i; j++) {
        tl.to(
          cards[j],
          {
            y: yOffset * (i - j),
            scale: 1 - 0.04 * (i - j),
            opacity: i - j === 1 ? 0.2 : 0,
            ease: "power2.inOut",
          },
          `step${i}`,
        );
      }
      tl.fromTo(
        card,
        { y: window.innerHeight * 0.55, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, ease: "power2.inOut" },
        `step${i}`,
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="estrada"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden border-t border-white/10 bg-[#050505] text-white"
    >
      <div className="flex h-screen flex-col px-6 py-16 md:px-12 md:py-20">
        <div className="mb-8 flex items-end justify-between border-b border-white/20 pb-6">
          <div>
            <span className="mb-2 block text-xs uppercase tracking-widest opacity-50">
              (003 — Na estrada)
            </span>
            <h2 className="text-4xl font-semibold uppercase tracking-tighter md:text-6xl">
              Visual do asfalto
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-xs uppercase tracking-widest opacity-50 md:block">
            Fotos profissionais · estética cruiser · o clima do clube
          </p>
        </div>

        <div
          ref={stackRef}
          className="relative mx-auto flex h-[60vh] w-full max-w-4xl flex-1 items-center justify-center md:h-[65vh]"
        >
          {WORKS.map((work, i) => (
            <article
              key={work.index}
              className="work-card absolute inset-x-0 mx-auto h-[52vh] w-full max-w-3xl overflow-hidden border border-white/15 bg-[#0a0a0a] md:h-[58vh]"
              style={{ zIndex: i + 1 }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={work.image}
                  alt={work.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 48rem"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-white/50">
                      {work.index} — {work.meta}
                    </span>
                    <h3 className="mt-2 text-3xl font-semibold uppercase tracking-tighter md:text-5xl">
                      {work.title}
                    </h3>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
