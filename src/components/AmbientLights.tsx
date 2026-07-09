"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function AmbientLights() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.7, 1], [0.9, 1, 0.85, 0.6]);

  if (reduce) {
    return (
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="absolute left-[-10%] top-[10%] h-[40vw] w-[40vw] rounded-full bg-primary/[0.04] blur-[120px]" />
        <div className="absolute right-[-5%] top-[40%] h-[30vw] w-[30vw] rounded-full bg-primary/[0.03] blur-[100px]" />
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <motion.div style={{ opacity }} className="absolute inset-0">
        {/* Primary green bloom — top right */}
        <motion.div
          style={{ y: y1 }}
          className="ambient-drift absolute right-[-8%] top-[-5%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgba(0,255,136,0.11)_0%,transparent_68%)] blur-[2px]"
        />
        {/* Cool soft fill — left */}
        <motion.div
          style={{ y: y2 }}
          className="ambient-drift-slow absolute left-[-15%] top-[25%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)]"
        />
        {/* Secondary green — bottom */}
        <motion.div
          style={{ y: y3 }}
          className="ambient-drift absolute bottom-[-10%] left-[30%] h-[45vh] w-[45vh] rounded-full bg-[radial-gradient(circle,rgba(0,204,102,0.07)_0%,transparent_70%)]"
        />
        {/* Tiny accent near center for depth */}
        <div className="absolute left-[55%] top-[60%] h-[20vh] w-[20vh] rounded-full bg-[radial-gradient(circle,rgba(0,255,136,0.05)_0%,transparent_70%)] blur-xl" />
      </motion.div>

      {/* Subtle noise depth */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
