"use client";

import Image from "next/image";
import { WORKS } from "@/lib/constants";

export function Works() {
  return (
    <section
      id="works"
      className="relative overflow-hidden bg-[#000] py-20 text-white"
    >
      <div className="relative mb-24 flex items-end justify-between border-b border-white/20 px-6 pb-8 pt-10 uppercase tracking-tighter md:px-12">
        <span className="absolute left-6 top-0 block text-xs font-normal tracking-widest opacity-50 md:left-12">
          (003 — Na estrada)
        </span>
        <h2 className="text-4xl font-semibold md:text-6xl">A visão</h2>
        <h2 className="text-4xl font-semibold md:text-6xl">O resultado</h2>
      </div>

      <div className="archive-container relative w-full px-6 md:min-h-[1800px] md:px-12">
        {WORKS.map((work) => (
          <div
            key={work.case}
            className={`project-card group relative w-full mix-blend-lighten md:absolute ${work.pos}`}
          >
            <div className="proj-header mb-4 flex items-center justify-between border-t border-white/30 pt-2">
              <span className="text-xs uppercase tracking-widest opacity-50">
                Case {work.case}
              </span>
              <span className="text-xs uppercase tracking-widest">
                {work.tag}
              </span>
            </div>

            <div className={`group relative bg-[#1a1a1a] ${work.aspect}`}>
              <div
                className="proj-img-mask absolute inset-0 overflow-hidden"
                style={{ clipPath: "inset(0%)" }}
              >
                <Image
                  src={work.image}
                  alt={work.title.join(" ")}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="proj-img h-full w-full scale-110 object-cover opacity-80 grayscale transition-transform duration-1000 group-hover:scale-100"
                />
              </div>
              <h3 className={work.titleClass}>
                {work.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
            </div>

            <p className={work.captionClass}>{work.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
