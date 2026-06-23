"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experiencia" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Trajetória"
          title="Experiência Profissional"
          description="Da operação de infraestrutura crítica à liderança de produto e empresa."
        />

        <div className="relative pl-8 md:pl-12">
          {/* Linha vertical que se "desenha" no scroll */}
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ originY: 0 }}
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-amber via-emerald to-transparent md:left-[11px]"
          />

          <div className="space-y-10 md:space-y-12">
            {experiences.map((exp, i) => (
              <Reveal key={exp.role} delay={i * 0.12} as="div" className="relative">
                {/* Marcador na linha */}
                <span
                  className={`absolute -left-8 top-1.5 grid h-4 w-4 place-items-center rounded-full ring-4 ring-obsidian-950 md:-left-12 ${
                    exp.current ? "bg-amber" : "bg-emerald"
                  }`}
                >
                  {exp.current && (
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-amber/60" />
                  )}
                </span>

                <div className="glass rounded-2xl p-6 transition-colors hover:border-white/[0.12] md:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-ash-300">
                      <Briefcase size={15} className="text-amber" />
                      {exp.company}
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        exp.current
                          ? "bg-amber/15 text-amber-soft"
                          : "bg-white/[0.05] text-ash-400"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-bold text-ash-100 md:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ash-400 md:text-base">
                    {exp.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-xs text-ash-300"
                      >
                        {tag}
                      </span>
                    ))}
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
