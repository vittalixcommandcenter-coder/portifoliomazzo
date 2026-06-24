"use client";

import { motion, type Variants } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useI18n } from "@/lib/i18n";

const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cell: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Process() {
  const { t } = useI18n();
  const { process: proc } = t;

  return (
    <section id="processo" className="relative px-4 py-20 sm:px-6 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={proc.eyebrow}
          title={proc.title}
          description={proc.description}
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {proc.steps.map((s, i) => (
            <motion.div key={s.n} variants={cell} className="relative">
              <div className="glass ring-hover h-full rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl font-bold text-copper/30">{s.n}</span>
                  {i < proc.steps.length - 1 && (
                    <span className="hidden h-px flex-1 bg-gradient-to-r from-copper/30 to-transparent lg:block" />
                  )}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ice">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-platinum-400">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
