"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  FileSignature,
  Layers,
  MessageSquareText,
  ScanSearch,
  ShieldCheck,
  Star,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { flagship } from "@/lib/data";

// Ícone por recurso (mesma ordem do array em data.ts)
const featureIcons: LucideIcon[] = [
  ShieldCheck, // Transcrição segura
  FileSignature, // Assinatura ICP-Brasil
  BrainCircuit, // Co-Piloto clínico
  ScanSearch, // Visão de exames
  MessageSquareText, // Follow-up
  Layers, // Multi-tenant
];

const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cell: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Flagship() {
  return (
    <section id="prontuia" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-copper/[0.08] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-copper-soft">
                <Star size={12} className="fill-copper-soft text-copper-soft" />
                Carro-chefe
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tightest text-platinum-gradient sm:text-4xl">
                O produto que define o meu trabalho
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-platinum-400">
              O ProntuIA reúne tudo o que faço de melhor: segurança de nível
              clínico, IA aplicada e UI/UX premium em um único SaaS.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-9 overflow-hidden rounded-[2rem]">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-copper/[0.08] blur-[100px]"
          />

          {/* Bloco principal */}
          <div className="glass-strong relative grid gap-12 rounded-[2rem] p-8 shadow-lift md:grid-cols-[1.1fr_1fr] md:p-14">
            <div>
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-copper/25 bg-copper/[0.1]">
                  <Stethoscope size={24} className="text-copper-soft" />
                </div>
                <span className="rounded-full border border-copper/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-copper">
                  {flagship.category}
                </span>
              </div>

              <h2 className="mt-7 font-display text-5xl font-semibold tracking-tightest text-platinum-gradient md:text-6xl">
                {flagship.name}
              </h2>
              <p className="mt-3 text-lg font-light text-platinum-300">
                {flagship.tagline}
              </p>
              <p className="mt-6 text-base leading-relaxed text-platinum-400">
                {flagship.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {flagship.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line px-3 py-1 text-xs font-medium text-platinum-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-9">
                <a
                  href={flagship.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group"
                >
                  Visitar prontuia.com.br
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3">
              {flagship.highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="glass ring-hover rounded-2xl p-5"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-copper/[0.12]">
                      <Check size={14} className="text-copper-soft" />
                    </div>
                    <div>
                      <h3 className="font-display font-medium text-ice">
                        {h.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-platinum-400">
                        {h.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Grade de recursos premium */}
        <Reveal>
          <p className="mt-12 text-xs font-medium uppercase tracking-[0.25em] text-platinum-500">
            Recursos que diferenciam
          </p>
        </Reveal>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {flagship.features.map((f, i) => {
            const Icon = featureIcons[i] ?? ShieldCheck;
            return (
              <motion.div key={f.title} variants={cell}>
                <div className="glass ring-hover flex h-full flex-col rounded-2xl p-6">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-copper/20 bg-copper/[0.08]">
                    <Icon size={18} className="text-copper-soft" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-medium text-ice">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-platinum-400">
                    {f.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
