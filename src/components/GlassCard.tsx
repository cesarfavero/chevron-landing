"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  interactive?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "className">;

export function GlassCard({
  children,
  className = "",
  glowColor = "rgba(0, 255, 136, 0.18)",
  interactive = true,
  ...rest
}: Props) {
  const reduce = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlight = useMotionTemplate`
    radial-gradient(
      420px circle at ${mouseX}px ${mouseY}px,
      ${glowColor},
      transparent 55%
    )
  `;

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (!interactive || reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-[1.75rem] ${className}`}
      whileHover={
        reduce || !interactive
          ? undefined
          : {
              y: -5,
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }
      }
      {...rest}
    >
      <div className="absolute inset-0 rounded-[inherit] glass-panel" />

      {interactive && !reduce && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-400 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
      )}

      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-50"
        style={{
          background: `linear-gradient(145deg, ${glowColor.replace("0.18", "0.1")} 0%, transparent 40%, transparent 100%)`,
        }}
      />

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
