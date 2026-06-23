"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { profile, stats, heroChips } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [photoSrc, setPhotoSrc] = useState(profile.photo);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="topo"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-36 text-center"
    >
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto flex w-full max-w-4xl flex-col items-center"
      >
        {/* Avatar com fino anel de cobre */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease }}
          className="animate-float"
        >
          <div className="relative h-28 w-28 rounded-full p-[1.5px] sm:h-32 sm:w-32">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-copper/50 to-transparent" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 shadow-lift">
              <Image
                src={photoSrc}
                alt={profile.name}
                width={160}
                height={160}
                priority
                onError={() => setPhotoSrc(profile.photoFallback)}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-line bg-tint px-3.5 py-1.5 text-[12px] font-medium text-platinum-400 backdrop-blur-xl"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-copper opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-copper" />
          </span>
          Disponível para novos projetos
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mt-6 font-display text-5xl font-semibold leading-[0.98] tracking-tightest text-platinum-gradient sm:text-6xl md:text-7xl lg:text-[5.25rem]"
        >
          Guilherme Mazzo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="mt-3 font-display text-xl font-light text-platinum-300 sm:text-2xl md:text-3xl"
        >
          Desenvolvedor{" "}
          <span className="font-normal text-copper-gradient">Full-Stack</span>{" "}
          &amp; SaaS
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-platinum-400 md:text-lg"
        >
          {profile.pitch}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#projetos" className="btn-primary group w-full sm:w-auto">
            Ver projetos
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a href={profile.cv} download className="btn-ghost w-full sm:w-auto">
            <Download size={15} />
            Baixar CV
          </a>
        </motion.div>

        {/* Stats minimalistas */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease }}
          className="mt-14 flex w-full max-w-2xl flex-wrap items-stretch justify-center divide-x divide-line"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-2 text-center sm:px-8">
              <div className="font-display text-2xl font-semibold text-ice sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 max-w-[12rem] text-xs text-platinum-500">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Chips de stack estáticos (sem esteira) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-10 hidden w-full max-w-3xl flex-wrap items-center justify-center gap-2 px-6 md:flex"
      >
        {heroChips.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-line-soft px-3 py-1 text-xs font-medium text-platinum-500"
          >
            {chip}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
