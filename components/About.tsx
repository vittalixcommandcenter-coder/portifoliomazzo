"use client";

import { Code2, Layers, Network, Smartphone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useI18n } from "@/lib/i18n";

const pillarIcons = [Layers, Smartphone, Code2];

export default function About() {
  const { t } = useI18n();
  const { about } = t;

  return (
    <section id="sobre" className="relative px-4 py-20 sm:px-6 sm:py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow={about.eyebrow} title={about.lead} />

        <div className="grid gap-14 md:grid-cols-[1.3fr_1fr] md:gap-20">
          <Reveal>
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-base leading-relaxed text-platinum-200 sm:text-lg md:text-xl"
                      : "text-sm leading-relaxed text-platinum-400 sm:text-base"
                  }
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-line-soft bg-tint p-6">
              <div className="flex items-center gap-2.5">
                <Network size={17} className="text-copper" />
                <h3 className="font-display text-sm font-medium uppercase tracking-[0.15em] text-platinum-300">
                  {about.foundation.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-platinum-400">
                {about.foundation.text}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {about.foundation.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line-soft px-2.5 py-1 text-xs text-platinum-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid h-fit gap-3">
            {about.pillars.map((p, i) => {
              const Icon = pillarIcons[i];
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="glass ring-hover flex items-start gap-4 rounded-2xl p-5">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-copper/20 bg-copper/[0.08]">
                      <Icon size={18} className="text-copper-soft" />
                    </div>
                    <div>
                      <h3 className="font-display font-medium text-ice">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-platinum-400">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
