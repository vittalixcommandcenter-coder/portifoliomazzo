"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Stethoscope } from "lucide-react";
import Reveal from "./Reveal";
import { flagship } from "@/lib/data";

export default function Flagship() {
  return (
    <section id="prontuia" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-emerald-soft">
            <span className="h-px w-8 bg-emerald/60" />
            Projeto carro-chefe
          </span>
        </Reveal>

        <div className="border-glow relative mt-6 overflow-hidden rounded-3xl">
          {/* brilho ambiente do bloco */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald/15 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-amber/10 blur-[120px]"
          />

          <div className="glass-strong relative grid gap-10 rounded-3xl p-8 md:grid-cols-[1.1fr_1fr] md:p-12">
            {/* Conteúdo */}
            <div>
              <div className="flex items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-emerald/25 bg-emerald/10">
                  <Stethoscope size={28} className="text-emerald-soft" />
                </div>
                <div>
                  <span className="rounded-full bg-emerald/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-soft">
                    {flagship.category}
                  </span>
                </div>
              </div>

              <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-ash-100 md:text-5xl">
                {flagship.name}
              </h2>
              <p className="mt-2 text-lg font-medium text-emerald-soft">
                {flagship.tagline}
              </p>
              <p className="mt-5 text-base leading-relaxed text-ash-300">
                {flagship.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {flagship.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-ash-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={flagship.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald px-6 py-3.5 text-sm font-semibold text-obsidian-950 shadow-glow-emerald transition-transform hover:scale-[1.03]"
                >
                  Visitar prontuia.com.br
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>

            {/* Painel de highlights */}
            <div className="flex flex-col justify-center gap-3">
              {flagship.highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="glass rounded-2xl p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-emerald/10">
                      <Check size={15} className="text-emerald" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-ash-100">
                        {h.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ash-400">
                        {h.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
