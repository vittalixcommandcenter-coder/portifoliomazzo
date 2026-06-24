"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Check, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { projects } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  const { t } = useI18n();
  const { projects: proj } = t;

  // Merge static data (icon, stack, url, name) with translated text
  const gallery = projects
    .filter((p) => !p.featured)
    .map((p, i) => {
      // Non-featured projects: indices 1-5 in projects array → i+1 in translation items
      const translated = proj.items[i + 1] ?? proj.items[i];
      return { ...p, ...translated };
    });

  return (
    <section id="projetos" className="relative px-4 py-20 sm:px-6 sm:py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={proj.eyebrow}
          title={proj.title}
          description={proj.description}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {gallery.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div key={project.name} variants={item}>
                <TiltCard className="h-full">
                  <article className="glass ring-hover relative flex h-full flex-col overflow-hidden rounded-2xl p-5 sm:rounded-3xl sm:p-7">
                    <div className="flex items-center justify-between">
                      <div className="grid h-11 w-11 place-items-center rounded-xl border border-copper/20 bg-copper/[0.08]">
                        <Icon size={20} className="text-copper-soft" />
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-platinum-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper"
                      />
                    </div>

                    <div className="mt-6">
                      <span className="rounded-full border border-line px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-platinum-400">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ice">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm font-light text-platinum-300">{project.tagline}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-platinum-400">
                      {project.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {project.focus.slice(0, 2).map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-platinum-400">
                          <Check size={12} className="mt-0.5 shrink-0 text-copper/80" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 border-t border-line-soft pt-5">
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-line-soft px-2.5 py-0.5 text-[11px] font-medium text-platinum-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.url && (
                      <div className="mt-3">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-copper transition-colors hover:text-copper-soft"
                        >
                          <ExternalLink size={13} />
                          {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        </a>
                      </div>
                    )}
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
