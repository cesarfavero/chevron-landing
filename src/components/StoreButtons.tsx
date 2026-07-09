"use client";

import { STORE_LINKS } from "@/lib/constants";

function AppleIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3.6 1.8 13.8 12 3.6 22.2a1 1 0 0 1-.6-.92V2.72a1 1 0 0 1 .6-.92Zm10.9 10.9 2.3 2.3-10.94 6.33 8.64-8.63Zm3.2-3.2 2.8 1.63a1 1 0 0 1 0 1.73l-2.81 1.63L15.2 12l2.5-2.5ZM5.86 2.66 16.8 9l-2.3 2.3-8.64-8.64Z" />
    </svg>
  );
}

type Size = "md" | "lg";

const baseBtn =
  "store-btn group inline-flex items-center gap-3.5 rounded-2xl bg-[#111] px-5 text-left text-white shadow-[0_10px_30px_rgba(0,0,0,0.45),0_2px_8px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#161616] hover:shadow-[0_16px_40px_rgba(0,0,0,0.55),0_0_24px_rgba(0,255,136,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] active:translate-y-0";

export function StoreButtons({
  size = "md",
  className = "",
  centered = false,
}: {
  size?: Size;
  className?: string;
  centered?: boolean;
}) {
  const pad = size === "lg" ? "py-3.5 pr-7 pl-4" : "py-3 pr-6 pl-3.5";
  const icon = size === "lg" ? "h-8 w-8" : "h-7 w-7";
  const title = size === "lg" ? "text-[15px]" : "text-sm";
  const sub = size === "lg" ? "text-[10px]" : "text-[9px]";

  return (
    <div
      className={`flex flex-wrap gap-3 ${centered ? "justify-center" : ""} ${className}`}
    >
      <a
        href={STORE_LINKS.appStore}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseBtn} ${pad}`}
        aria-label="Baixar na App Store"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition group-hover:scale-105">
          <AppleIcon className={icon} />
        </span>
        <span className="leading-tight">
          <span className={`block font-medium tracking-wide text-white/50 ${sub}`}>
            Baixar na
          </span>
          <span className={`block font-semibold tracking-tight ${title}`}>
            App Store
          </span>
        </span>
      </a>

      <a
        href={STORE_LINKS.playStore}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseBtn} ${pad}`}
        aria-label="Disponível no Google Play"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition group-hover:scale-105">
          <PlayIcon className={icon} />
        </span>
        <span className="leading-tight">
          <span className={`block font-medium tracking-wide text-white/50 ${sub}`}>
            Disponível no
          </span>
          <span className={`block font-semibold tracking-tight ${title}`}>
            Google Play
          </span>
        </span>
      </a>
    </div>
  );
}
