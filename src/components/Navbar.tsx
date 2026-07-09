"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { StoreButtons } from "./StoreButtons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06] bg-black/55 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[4.25rem] md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative h-8 w-8 overflow-hidden rounded-lg shadow-[0_0_20px_rgba(0,255,136,0.2)]">
            <Image
              src="/images/app-icon.png"
              alt="Chevron"
              fill
              sizes="32px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-display text-xl tracking-[0.14em] text-white md:text-2xl">
            CHEV<span className="text-primary">RON</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-secondary transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#download"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-black shadow-[0_0_24px_rgba(0,255,136,0.2)] transition hover:bg-primary-light hover:shadow-[0_0_32px_rgba(0,255,136,0.3)]"
          >
            Baixar app
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex w-4 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-white transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full bg-white transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-full bg-white transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-40 bg-black/90 px-6 pt-24 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-5">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl tracking-widest text-white"
                  >
                    {link.label.toUpperCase()}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10">
              <StoreButtons />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
