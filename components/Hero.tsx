"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { profile, stats, techMarquee } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [photoSrc, setPhotoSrc] = useState(profile.photo);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax suave: blobs e conteúdo se movem em ritmos diferentes no scroll
  const blobsY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="topo"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-10 pt-32"
    >
      {/* Blobs de luz com parallax (sobre a aurora global) */}
      <motion.div
        aria-hidden
        style={{ y: blobsY }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-[8%] top-[14%] h-72 w-72 rounded-full bg-amber/20 blur-[120px]" />
        <div className="absolute bottom-[16%] right-[10%] h-80 w-80 rounded-full bg-emerald/20 blur-[130px]" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto w-full max-w-6xl"
      >
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          {/* Texto */}
          <div className="text-center md:text-left">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-emerald-soft"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
              </span>
              Disponível para novos projetos
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-bold leading-[1.04] tracking-tight text-ash-100 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Guilherme
              <br />
              <span className="text-gradient">Mazzo</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ash-300 md:mx-0 md:text-lg"
            >
              <span className="font-semibold text-ash-100">
                Founder &amp; CEO da Vittalix.
              </span>{" "}
              Da engenharia de Infraestrutura de TI e VoIP à construção de
              ecossistemas SaaS com IA para saúde, governo e serviços.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start"
            >
              <a
                href="#projetos"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber px-6 py-3.5 text-sm font-semibold text-obsidian-950 shadow-glow-amber transition-transform hover:scale-[1.03] sm:w-auto"
              >
                Ver Projetos
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href={profile.cv}
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald/40 bg-emerald/5 px-6 py-3.5 text-sm font-semibold text-emerald-soft transition-colors hover:bg-emerald/10 sm:w-auto"
              >
                <Download size={16} />
                Baixar CV
              </a>
            </motion.div>
          </div>

          {/* Avatar redondo com anel de destaque */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto md:ml-auto"
          >
            <div className="relative animate-float">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-amber via-amber-deep to-emerald opacity-70 blur-sm [mask:radial-gradient(farthest-side,transparent_calc(100%-3px),#000_calc(100%-3px))]" />
              <div className="relative h-56 w-56 rounded-full p-[3px] sm:h-64 sm:w-64 md:h-72 md:w-72">
                <div className="h-full w-full rounded-full bg-gradient-to-tr from-amber to-emerald">
                  <div className="grid h-full w-full place-items-center overflow-hidden rounded-full bg-obsidian-900 p-1">
                    <Image
                      src={photoSrc}
                      alt={profile.name}
                      width={320}
                      height={320}
                      priority
                      onError={() => setPhotoSrc(profile.photoFallback)}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="glass-strong absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold text-ash-100 shadow-lg shadow-black/40">
                <span className="text-emerald-soft">●</span> Founder &amp; CEO @
                Vittalix
              </div>
            </div>
          </motion.div>
        </div>

        {/* Faixa de estatísticas — preenche e dá credibilidade */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] sm:grid-cols-3"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-obsidian-900/40 px-6 py-5 text-center sm:text-left">
              <div className="font-display text-3xl font-bold text-gradient">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-ash-400">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Ticker de stack tecnológica rolando */}
      <div className="mask-fade-x relative mt-12 w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-3">
          {[...techMarquee, ...techMarquee].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 text-sm text-ash-300"
            >
              <Sparkles size={12} className="text-amber/70" />
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="text-ash-500"
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
