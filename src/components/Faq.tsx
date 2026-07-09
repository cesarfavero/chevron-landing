"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { FAQ } from "@/lib/constants";
import { gsap } from "@/hooks/useGsap";

export function Faq() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = listRef.current;
    if (!root) return;

    const buttons = root.querySelectorAll<HTMLButtonElement>(".faq-btn");

    const onClick = (btn: HTMLButtonElement) => {
      const content = btn.nextElementSibling as HTMLElement | null;
      const iconWrap = btn.querySelector(".icon-wrap");
      if (!content || !iconWrap) return;

      const isOpen = content.classList.contains("active");

      root.querySelectorAll<HTMLElement>(".faq-content").forEach((c) => {
        if (c !== content) {
          gsap.to(c, {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          });
          c.classList.remove("active");
        }
      });
      root.querySelectorAll(".icon-wrap").forEach((i) => {
        if (i !== iconWrap) gsap.to(i, { rotation: 0, duration: 0.3 });
      });

      if (isOpen) {
        gsap.to(content, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(iconWrap, { rotation: 0, duration: 0.3 });
        content.classList.remove("active");
      } else {
        content.style.height = "auto";
        const targetHeight = content.offsetHeight;
        content.style.height = "0px";
        gsap.to(content, {
          height: targetHeight,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(iconWrap, { rotation: 45, duration: 0.3 });
        content.classList.add("active");
      }
    };

    const handlers: Array<() => void> = [];
    buttons.forEach((btn) => {
      const handler = () => onClick(btn);
      btn.addEventListener("click", handler);
      handlers.push(() => btn.removeEventListener("click", handler));
    });

    return () => handlers.forEach((h) => h());
  }, []);

  return (
    <section
      id="faq-section"
      className="border-t border-white/20 bg-[#111] px-6 py-32 text-white md:px-12"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="static flex h-fit flex-col justify-between lg:sticky lg:top-32">
          <span className="mb-8 text-xs uppercase tracking-widest opacity-50">
            (005 — FAQ)
          </span>
          <h2 className="mb-12 text-6xl font-semibold uppercase leading-[0.85] tracking-tighter md:text-8xl">
            Common
            <br />
            Inquiries
          </h2>
          <div className="faq-img-wrap relative hidden aspect-square w-full max-w-sm border border-white/10 p-4 md:block">
            <Image
              src="/images/brutal/faq-ref.jpg"
              alt=""
              fill
              sizes="320px"
              className="object-cover grayscale contrast-125 mix-blend-screen"
            />
            <div className="pointer-events-none absolute inset-0 rotate-3 border border-white/30" />
          </div>
          <p className="mt-12 text-xs uppercase tracking-widest opacity-50">
            App nativo · iOS e Android
          </p>
        </div>

        <div ref={listRef} className="faq-list flex flex-col border-t border-white/30">
          {FAQ.map((item) => (
            <div key={item.q} className="border-b border-white/30">
              <button
                type="button"
                className="faq-btn group flex w-full items-center justify-between py-8 text-left text-xl font-medium uppercase tracking-tight md:text-3xl"
              >
                <span className="w-5/6 transition-all duration-300 group-hover:pl-4">
                  {item.q}
                </span>
                <div className="icon-wrap flex h-8 w-8 items-center justify-center rounded-full border border-white/50 transition-transform duration-300">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
              </button>
              <div className="faq-content">
                <div className="w-5/6 pb-8 pt-2 text-base uppercase tracking-tight opacity-70 md:text-lg">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
