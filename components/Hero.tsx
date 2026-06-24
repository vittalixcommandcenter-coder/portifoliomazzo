"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { profile } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [photoSrc, setPhotoSrc] = useState(profile.photo);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const { t } = useI18n();

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="topo"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-12 pt-24 text-center sm:px-6 sm:pb-16 sm:pt-32 md:pt-36"
    >
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto flex w-full max-w-4xl flex-col items-center"
      >
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease }}
          className="animate-float"
        >
          <div className="relative h-24 w-24 rounded-full p-[1.5px] sm:h-28 sm:w-28 md:h-32 md:w-32">
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
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-tint px-3 py-1.5 text-[11px] font-medium text-platinum-400 backdrop-blur-xl sm:mt-7 sm:px-3.5 sm:text-[12px]"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-copper opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-copper" />
          </span>
          {t.hero.available}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mt-5 font-display text-4xl font-semibold leading-[0.98] tracking-tightest text-platinum-gradient sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem]"
        >
          Guilherme Mazzo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="mt-2 font-display text-lg font-light text-platinum-300 sm:mt-3 sm:text-xl md:text-2xl lg:text-3xl"
        >
          Desenvolvedor{" "}
          <span className="font-normal text-copper-gradient">Full-Stack</span>{" "}
          &amp; SaaS
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-platinum-400 sm:mt-6 sm:text-base md:text-lg"
        >
          {t.hero.pitch}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
          className="mt-7 flex w-full flex-col items-center gap-3 sm:mt-9 sm:w-auto sm:flex-row"
        >
          <a href="#projetos" className="btn-primary group w-full sm:w-auto">
            {t.hero.cta}
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost w-full sm:w-auto"
          >
            <Download size={15} />
            {t.hero.cv}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease }}
          className="mt-10 flex w-full max-w-2xl items-stretch justify-center divide-x divide-line sm:mt-14"
        >
          {t.stats.map((s) => (
            <div key={s.label} className="flex-1 px-2 py-2 text-center sm:px-6 md:px-8">
              <div className="font-display text-lg font-semibold text-ice sm:text-2xl md:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-[10px] leading-tight text-platinum-500 sm:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Chips de stack */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-10 hidden w-full max-w-3xl flex-wrap items-center justify-center gap-2 px-6 md:flex"
      >
        {t.heroChips.map((chip) => (
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
