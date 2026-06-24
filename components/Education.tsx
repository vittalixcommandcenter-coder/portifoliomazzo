"use client";

import { motion, type Variants } from "framer-motion";
import { GraduationCap, ShieldCheck, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "@/lib/data";

const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cell: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Education() {
  return (
    <section id="formacao" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Formação"
          title="Educação & certificações"
          description="Base acadêmica em desenvolvimento de sistemas, com foco também em proteção de dados."
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {education.map((e) => (
            <motion.div key={e.title} variants={cell}>
              <a
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-glow group flex h-full flex-col rounded-2xl"
              >
                <div className="glass ring-hover flex h-full flex-col rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-copper/20 bg-copper/[0.08]">
                      {e.type === "Graduação" ? (
                        <GraduationCap size={20} className="text-copper-soft" />
                      ) : (
                        <ShieldCheck size={20} className="text-copper-soft" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {e.current && (
                        <span className="rounded-full bg-copper/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-copper-soft">
                          Em curso
                        </span>
                      )}
                      <ArrowUpRight
                        size={18}
                        className="text-platinum-500 transition-colors group-hover:text-copper"
                      />
                    </div>
                  </div>

                  <span className="mt-5 text-[11px] font-medium uppercase tracking-[0.15em] text-platinum-500">
                    {e.type}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-ice">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-sm text-platinum-300">{e.org}</p>
                  <p className="mt-auto pt-3 text-xs text-platinum-500">{e.period}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
