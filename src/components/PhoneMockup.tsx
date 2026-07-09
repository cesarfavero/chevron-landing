"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Pure CSS floating phone — no photo background, no vignette.
 * Shows a minimal Chevron navigation UI on screen.
 */
export function PhoneMockup({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={`relative mx-auto w-[220px] sm:w-[250px] md:w-[280px] ${className}`}>
      {/* Soft ground glow only — not a background plate */}
      <div
        className="pointer-events-none absolute -bottom-6 left-1/2 h-16 w-[70%] -translate-x-1/2 rounded-full bg-primary/20 blur-2xl"
        aria-hidden
      />

      <motion.div
        className="relative"
        animate={
          reduce
            ? undefined
            : {
                y: [0, -10, 0],
                rotate: [-1.5, 1.5, -1.5],
              }
        }
        transition={
          reduce
            ? undefined
            : {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Device shell */}
        <div
          className="relative overflow-hidden rounded-[2.4rem] bg-[#1a1a1c] p-[10px] shadow-[0_40px_100px_rgba(0,0,0,0.65),0_16px_40px_rgba(0,255,136,0.08),inset_0_1px_0_rgba(255,255,255,0.12)]"
          style={{ aspectRatio: "9 / 19.5" }}
        >
          {/* Side buttons suggestion */}
          <div className="absolute -left-[2px] top-[22%] h-8 w-[3px] rounded-l-sm bg-[#2a2a2c]" />
          <div className="absolute -left-[2px] top-[32%] h-12 w-[3px] rounded-l-sm bg-[#2a2a2c]" />
          <div className="absolute -right-[2px] top-[28%] h-14 w-[3px] rounded-r-sm bg-[#2a2a2c]" />

          {/* Screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-[#0a0a0a]">
            {/* Dynamic island */}
            <div className="absolute left-1/2 top-2.5 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

            {/* Status bar */}
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 pt-3.5 text-[10px] font-medium text-white/80">
              <span>9:42</span>
              <span className="flex gap-1 opacity-70">
                <span className="inline-block h-2 w-3 rounded-sm bg-white/80" />
                <span className="inline-block h-2 w-2 rounded-full bg-white/80" />
              </span>
            </div>

            {/* Fake map UI */}
            <div className="absolute inset-0">
              {/* Grid roads */}
              <svg
                className="absolute inset-0 h-full w-full opacity-40"
                viewBox="0 0 200 400"
                preserveAspectRatio="xMidYMid slice"
              >
                <rect width="200" height="400" fill="#0d0d0d" />
                {/* Street grid */}
                {[40, 80, 120, 160].map((x) => (
                  <line
                    key={`v${x}`}
                    x1={x}
                    y1="0"
                    x2={x}
                    y2="400"
                    stroke="#1f1f1f"
                    strokeWidth="1.5"
                  />
                ))}
                {[60, 120, 180, 240, 300, 360].map((y) => (
                  <line
                    key={`h${y}`}
                    x1="0"
                    y1={y}
                    x2="200"
                    y2={y}
                    stroke="#1f1f1f"
                    strokeWidth="1.5"
                  />
                ))}
                {/* Route path */}
                <path
                  d="M40 340 C70 280, 90 240, 110 200 S150 120, 160 70"
                  fill="none"
                  stroke="#00FF88"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                <circle cx="40" cy="340" r="5" fill="#00FF88" />
                <circle cx="160" cy="70" r="5" fill="#00FF88" />
                {/* Ghost route dashed */}
                <path
                  d="M40 340 C55 300, 60 260, 80 220"
                  fill="none"
                  stroke="#00FF88"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.35"
                />
              </svg>

              {/* Compass chip */}
              <div className="absolute right-3 top-14 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 shadow-float-soft backdrop-blur-md">
                <svg
                  className="h-4 w-4 text-white/80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7l2.5 7L12 12l-2.5 2L12 7z" fill="currentColor" />
                </svg>
              </div>

              {/* Bottom speed pill */}
              <div className="absolute inset-x-4 bottom-8 flex items-center justify-between rounded-full bg-black/70 px-4 py-2.5 shadow-float-soft backdrop-blur-md">
                <svg
                  className="h-3.5 w-3.5 text-primary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 3l7 18-7-4-7 4 7-18z" />
                </svg>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-semibold tabular-nums text-white">
                    68
                  </span>
                  <span className="text-[10px] text-white/50">km/h</span>
                </div>
                <svg
                  className="h-4 w-4 text-primary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5 16l4-4 3 3 6-7 1.5 1.5L12 18l-3-3-2.5 2.5L5 16z" opacity="0" />
                  <path d="M4 17c2-4 5-7 8-8 1.5 3 2 6 1 9-3 .5-6 0-9-1z" />
                  <circle cx="8" cy="17" r="1.5" />
                  <circle cx="16" cy="17" r="1.5" />
                </svg>
              </div>

              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-white/30" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
