"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

/* Efeito Tilt 3D suave seguindo o cursor + brilho ("spotlight") que
   acompanha o mouse. Desativa-se naturalmente em toque/teclado. */

const ROTATION = 6; // graus máximos de inclinação (sutil, Apple-like)

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  glow?: "platinum";
};

export default function TiltCard({
  children,
  className = "",
  glow = "platinum",
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const rotateX = useSpring(useMotionValue(0), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useMotionValue(0), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1

    rotateY.set((px - 0.5) * ROTATION * 2);
    rotateX.set((0.5 - py) * ROTATION * 2);

    mouseX.set(px * 100);
    mouseY.set(py * 100);
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  // Spotlight branco translúcido (monocromático, à la Apple)
  void glow;
  const spotlight = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(255,255,255,0.07), transparent 55%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative [perspective:1000px] ${className}`}
    >
      {/* Camada de spotlight que segue o cursor */}
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {children}
    </motion.div>
  );
}
