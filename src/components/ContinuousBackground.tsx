"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Fixed cinematic background that morphs through the page scroll:
 * hero cruiser video → pack ride video → night road → chrome handlebar.
 * Creates one continuous "highway ride" feeling across all sections.
 */
export function ContinuousBackground() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 24,
    restDelta: 0.001,
  });

  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const packVideoRef = useRef<HTMLVideoElement>(null);

  // Layer opacities — soft crossfades along the ride
  const heroOp = useTransform(smooth, [0, 0.12, 0.28], [1, 0.85, 0]);
  const packOp = useTransform(smooth, [0.18, 0.32, 0.48, 0.62], [0, 1, 0.9, 0]);
  const roadOp = useTransform(smooth, [0.48, 0.6, 0.78, 0.9], [0, 1, 0.85, 0.2]);
  const chromeOp = useTransform(smooth, [0.72, 0.86, 1], [0, 0.75, 1]);

  // Slow parallax drift
  const yA = useTransform(smooth, [0, 1], ["0%", "12%"]);
  const yB = useTransform(smooth, [0, 1], ["0%", "-8%"]);
  const yC = useTransform(smooth, [0, 1], ["4%", "-6%"]);
  const scaleA = useTransform(smooth, [0, 0.35], [1, 1.08]);
  const scaleB = useTransform(smooth, [0.2, 0.65], [1.05, 1.12]);

  // Ambient green intensity pulses with journey
  const glowOp = useTransform(
    smooth,
    [0, 0.25, 0.5, 0.75, 1],
    [0.55, 0.7, 0.5, 0.65, 0.45],
  );

  // Pause off-screen videos for perf
  useEffect(() => {
    if (reduce) return;
    const unsub = smooth.on("change", (v) => {
      const hero = heroVideoRef.current;
      const pack = packVideoRef.current;
      if (hero) {
        if (v < 0.35) {
          if (hero.paused) void hero.play().catch(() => {});
        } else if (!hero.paused) {
          hero.pause();
        }
      }
      if (pack) {
        if (v > 0.15 && v < 0.7) {
          if (pack.paused) void pack.play().catch(() => {});
        } else if (!pack.paused) {
          pack.pause();
        }
      }
    });
    return () => unsub();
  }, [smooth, reduce]);

  if (reduce) {
    return (
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <Image
          src="/images/hero-moto.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Base black */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Layer: Hero cruiser video */}
      <motion.div
        style={{ opacity: heroOp, y: yA, scale: scaleA }}
        className="absolute inset-0 will-change-transform"
      >
        <video
          ref={heroVideoRef}
          className="h-full w-full scale-110 object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-moto.jpg"
        >
          <source src="/videos/hero-ride.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Layer: Pack ride video */}
      <motion.div
        style={{ opacity: packOp, y: yB, scale: scaleB }}
        className="absolute inset-0 will-change-transform"
      >
        <video
          ref={packVideoRef}
          className="h-full w-full scale-110 object-cover"
          muted
          loop
          playsInline
          poster="/images/pack-ride.jpg"
        >
          <source src="/videos/pack-ride.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Layer: Night road still + ken burns */}
      <motion.div
        style={{ opacity: roadOp, y: yC }}
        className="absolute inset-0 will-change-transform"
      >
        <div className="ken-burns absolute inset-0">
          <Image
            src="/images/road-night.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </motion.div>

      {/* Layer: Chrome handlebar */}
      <motion.div
        style={{ opacity: chromeOp, y: yA }}
        className="absolute inset-0 will-change-transform"
      >
        <div className="ken-burns-reverse absolute inset-0">
          <Image
            src="/images/handlebar.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </motion.div>

      {/* Readability scrim — deeper mid-page, slightly lighter in hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]" />

      {/* Ambient green blooms (scroll-linked) */}
      <motion.div style={{ opacity: glowOp }} className="absolute inset-0">
        <div className="ambient-drift absolute right-[-10%] top-[-8%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgba(0,255,136,0.1)_0%,transparent_68%)]" />
        <div className="ambient-drift-slow absolute bottom-[-12%] left-[-8%] h-[48vh] w-[48vh] rounded-full bg-[radial-gradient(circle,rgba(0,204,102,0.07)_0%,transparent_70%)]" />
        <div className="absolute left-1/2 top-1/2 h-[30vh] w-[30vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,255,136,0.04)_0%,transparent_70%)]" />
      </motion.div>

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
