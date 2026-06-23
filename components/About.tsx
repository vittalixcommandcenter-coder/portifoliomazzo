"use client";

import { Brain, Network, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

const pillars = [
  {
    icon: Network,
    title: "Infraestrutura & VoIP",
    text: "Base sólida em comunicação crítica, redes e telefonia de alta disponibilidade.",
    accent: "text-amber",
  },
  {
    icon: Brain,
    title: "Orquestração de IA",
    text: "Integração de IA em produtos reais — de análise técnica a automação de processos.",
    accent: "text-emerald-soft",
  },
  {
    icon: Rocket,
    title: "Ecossistemas SaaS",
    text: "Produtos sob medida para saúde, governo e serviços, do branding à engenharia.",
    accent: "text-amber",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Sobre mim" title="Da engenharia de TI ao produto digital" />

        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <Reveal>
            <p className="text-lg leading-relaxed text-ash-300 md:text-xl">
              {profile.about}
            </p>
            <div className="accent-divider my-8" />
            <p className="text-base leading-relaxed text-ash-400">
              Trabalho na ponte entre a robustez da infraestrutura e a
              sofisticação do produto: cada solução nasce pensando em
              experiência, escala e identidade visual marcante.
            </p>
          </Reveal>

          <div className="grid gap-4">
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
