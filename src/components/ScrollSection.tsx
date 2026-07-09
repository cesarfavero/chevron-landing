"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** How strong the enter/exit travel feels */
  intensity?: number;
};

/**
 * Section wrapper with continuous enter → settle → exit motion
 * tied to scroll position relative to the viewport.
 */
export function ScrollSection({
  id,
  children,
  className = "",
  intensity = 1,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // 0 enter → 0.35 settled → 0.65 settled → 1 exit
  const opacity = useTransform(
    smooth,
    [0, 0.18, 0.5, 0.82, 1],
    [0, 1, 1, 1, 0.15],
  );
  const y = useTransform(
    smooth,
    [0, 0.22, 0.5, 0.78, 1],
    [56 * intensity, 0, 0, 0, -40 * intensity],
  );
  const scale = useTransform(
    smooth,
    [0, 0.2, 0.5, 0.85, 1],
    [0.96, 1, 1, 1, 0.985],
  );
  const blur = useTransform(
    smooth,
    [0, 0.16, 0.5, 0.88, 1],
    [8, 0, 0, 0, 4],
  );
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  if (reduce) {
    return (
      <section id={id} ref={ref} className={`relative ${className}`}>
        {children}
      </section>
    );
  }

  return (
    <section id={id} ref={ref} className={`relative ${className}`}>
      <motion.div
        style={{ opacity, y, scale, filter }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  );
}
