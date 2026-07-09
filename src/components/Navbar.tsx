"use client";

import { NAV } from "@/lib/constants";

export function Navbar() {
  return (
    <nav className="pointer-events-none fixed left-0 top-0 z-50 flex w-full items-start justify-between p-4 text-xs font-medium uppercase tracking-widest text-white blend-diff md:p-8">
      <a
        href="#topo"
        className="pointer-events-auto max-w-[9rem] cursor-pointer leading-tight hover:italic"
      >
        Chevron.
      </a>

      <div className="pointer-events-auto hidden flex-col text-center md:flex">
        <span>Brasil</span>
        <span className="opacity-50">GPS · Tempo real · Clube</span>
      </div>

      <div className="pointer-events-auto flex flex-col items-end gap-2 text-right md:flex-row md:items-center md:gap-8">
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="underline-offset-4 hover:underline"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
