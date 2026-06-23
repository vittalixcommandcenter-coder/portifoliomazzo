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
  },
  {
    icon: Smartphone,
    title: "Mobile-first / PWA",
    text: "Aplicações rápidas com experiência de app nativo no navegador.",
  },
  {
    icon: Code2,
    title: "Orquestração por IA",
    text: "Desenvolvimento acelerado e LLMs em produção, com qualidade.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Sobre" title={about.lead} />

        <div className="grid gap-14 md:grid-cols-[1.3fr_1fr] md:gap-20">
          <Reveal>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-lg leading-relaxed text-platinum-200 md:text-xl"
                      : "text-base leading-relaxed text-platinum-400"
                  }
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Fundação de rede — diferencial técnico, tom contido */}
            <div className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6">
              <div className="flex items-center gap-2.5">
                <Network size={17} className="text-platinum-300" />
                <h3 className="font-display text-sm font-medium uppercase tracking-[0.15em] text-platinum-300">
                  {foundation.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-platinum-400">
                {foundation.text}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {foundation.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.07] px-2.5 py-1 text-xs text-platinum-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid h-fit gap-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="glass ring-hover flex items-start gap-4 rounded-2xl p-5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.05]">
                    <p.icon size={18} className="text-platinum-200" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-ice">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-platinum-400">
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
