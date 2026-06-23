"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { projects } from "@/lib/data";

/* Cascata (stagger children): o container orquestra a entrada
   escalonada de cada card conforme entram na viewport. */
const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  return (
    <section id="projetos" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos Desenvolvidos"
          description="Ecossistemas SaaS e plataformas sob medida para nichos de alto impacto."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            const isEmerald = project.accent === "emerald";

            return (
              <motion.div key={project.name} variants={item}>
                <TiltCard glow={project.accent} className="h-full">
                  <article className="glass relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-colors duration-300 group-hover:border-white/[0.14]">
                    {/* Barra de acento no topo */}
                    <span
                      className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
                        isEmerald ? "via-emerald" : "via-amber"
                      } to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    <div className="flex items-center justify-between">
                      <div
                        className={`grid h-12 w-12 place-items-center rounded-xl border ${
                          isEmerald
                            ? "border-emerald/25 bg-emerald/10"
                            : "border-amber/25 bg-amber/10"
                        }`}
                      >
                        <Icon
                          size={22}
                          className={isEmerald ? "text-emerald-soft" : "text-amber-soft"}
                        />
                      </div>
                      <ArrowUpRight
                        size={20}
                        className="text-ash-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ash-200"
                      />
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold text-ash-100">
                      {project.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ash-400">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[11px] font-medium text-ash-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
