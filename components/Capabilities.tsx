"use client";

import { motion, type Variants } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { techStack } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import {
  AudioLines, BrainCircuit, Cloud, Code2, Database, Radio, Sparkles,
} from "lucide-react";

const capIcons = [Code2, BrainCircuit, Sparkles, Database, Cloud, Radio];

const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cell: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Capabilities() {
  const { t } = useI18n();
  const { capabilities: cap } = t;

  return (
    <section id="stack" className="relative px-4 py-20 sm:px-6 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={cap.eyebrow}
          title={cap.title}
          description={cap.description}
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cap.items.map((c, i) => {
            const Icon = capIcons[i] ?? Code2;
            return (
              <motion.div key={c.title} variants={cell}>
                <div className="glass ring-hover flex h-full flex-col rounded-2xl p-5 sm:rounded-3xl sm:p-7">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-copper/20 bg-copper/[0.08]">
                    <Icon size={20} className="text-copper-soft" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-medium text-ice">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-platinum-400">{c.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {techStack.map((tech, i) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-2 rounded-full border border-line-soft px-3.5 py-2 text-sm text-platinum-400 transition-colors hover:border-copper/35 hover:text-ice"
              >
                <tech.icon size={14} className="text-copper/80" />
                {cap.techStack[i] ?? tech.name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
