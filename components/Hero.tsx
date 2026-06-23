"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { profile } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [photoSrc, setPhotoSrc] = useState(profile.photo);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax suave: blobs e conteúdo se movem em ritmos diferentes no scroll
  const blobsY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="topo"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20"
    >
      {/* Background com parallax — blobs âmbar/esmeralda desfocados */}
      <motion.div
        aria-hidden
        style={{ y: blobsY }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-[12%] top-[18%] h-72 w-72 rounded-full bg-amber/20 blur-[120px]" />
        <div className="absolute bottom-[12%] right-[14%] h-80 w-80 rounded-full bg-emerald/20 blur-[130px]" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-deep/10 blur-[150px]" />
      </motion.div>

      {/* Grade sutil de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.4fr_1fr]"
      >
        {/* Texto */}
        <div className="text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-emerald-soft"
          >
            <Sparkles size={14} />
            Disponível para novos projetos
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ash-100 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {profile.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-gradient">
              {profile.name.split(" ").slice(2).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ash-300 md:mx-0 md:text-lg"
          >
            {profile.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row md:justify-start"
          >
            <a
              href="#projetos"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber px-6 py-3.5 text-sm font-semibold text-obsidian-950 shadow-glow-amber transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Ver Projetos
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
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
            {/* Anel girando (âmbar -> esmeralda) */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-amber via-amber-deep to-emerald opacity-70 blur-sm [mask:radial-gradient(farthest-side,transparent_calc(100%-3px),#000_calc(100%-3px))]" />
            <div className="relative h-56 w-56 rounded-full p-[3px] sm:h-64 sm:w-64 md:h-72 md:w-72">
              <div className="h-full w-full rounded-full bg-gradient-to-tr from-amber to-emerald">
                <div className="grid h-full w-full place-items-center overflow-hidden rounded-full bg-obsidian-900 p-1">
                  {/* Substitua /public/profile.jpg pela sua foto.
                      Se o arquivo não existir, cai no placeholder SVG. */}
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
            {/* Chip flutuante */}
            <div className="glass-strong absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold text-ash-100 shadow-lg shadow-black/40">
              <span className="text-emerald-soft">●</span> Founder &amp; CEO @
              Vittalix
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="text-ash-500"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
