"use client";

import { Code2, Layers, Network, Smartphone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about, foundation } from "@/lib/data";

const pillars = [
  {
    icon: Layers,
    title: "Ecossistemas SaaS",
    text: "Plataformas completas e multinicho, da arquitetura ao deploy.",
    accent: "text-amber",
  },
  {
    icon: Smartphone,
    title: "Mobile-first / PWA",
    text: "Aplicações rápidas com experiência de app nativo no navegador.",
    accent: "text-emerald-soft",
  },
  {
    icon: Code2,
    title: "Orquestração por IA",
    text: "Desenvolvimento acelerado e LLMs em produção, com qualidade.",
    accent: "text-amber",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Sobre mim" title={about.lead} />

        <div className="grid gap-12 md:grid-cols-[1.25fr_1fr] md:gap-16">
          <Reveal>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-lg leading-relaxed text-ash-200 md:text-xl"
                      : "text-base leading-relaxed text-ash-400"
                  }
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Bloco de fundação (telecom/rede rebaixado a diferencial) */}
            <div className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
              <div className="flex items-center gap-2.5">
                <Network size={18} className="text-emerald-soft" />
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ash-200">
                  {foundation.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ash-400">
                {foundation.text}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {foundation.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-xs text-ash-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid h-fit gap-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="glass group flex items-start gap-4 rounded-2xl p-5 transition-colors hover:border-white/[0.12]">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.04]">
                    <p.icon size={20} className={p.accent} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-ash-100">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ash-400">
                      {p.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
