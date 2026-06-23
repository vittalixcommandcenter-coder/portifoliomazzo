"use client";

import { motion, type Variants } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { capabilities, techStack } from "@/lib/data";

const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cell: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Capabilities() {
  return (
    <section id="stack" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Matriz de Competências"
          title="Stack de um desenvolvedor full-stack moderno"
          description="Do banco de dados e da orquestração por IA à segurança de borda — domino o ciclo completo de criação de um produto SaaS."
        />

        {/* Grid de capacidades */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map((cap) => {
            const isEmerald = cap.accent === "emerald";
            return (
              <motion.div key={cap.title} variants={cell}>
                <div className="border-glow group h-full rounded-2xl">
                  <div className="glass flex h-full flex-col rounded-2xl p-6 transition-colors duration-300">
                    <div
                      className={`grid h-12 w-12 place-items-center rounded-xl border ${
                        isEmerald
                          ? "border-emerald/25 bg-emerald/10"
                          : "border-amber/25 bg-amber/10"
                      }`}
                    >
                      <cap.icon
                        size={22}
                        className={isEmerald ? "text-emerald-soft" : "text-amber-soft"}
                      />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-ash-100">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ash-400">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Faixa de tecnologias */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3.5 py-2 text-sm text-ash-300 transition-colors hover:border-amber/30 hover:text-ash-100"
              >
                <tech.icon size={15} className="text-amber/80" />
                {tech.name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
