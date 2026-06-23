"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Check, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { projects, type Project } from "@/lib/data";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
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

function CategoryBadge({ project }: { project: Project }) {
  const isEmerald = project.accent === "emerald";
  return (
    <span
      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${
        isEmerald ? "bg-emerald/10 text-emerald-soft" : "bg-amber/10 text-amber-soft"
      }`}
    >
      {project.category}
    </span>
  );
}

function StackRow({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {project.stack.map((tech) => (
        <span
          key={tech}
          className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[11px] font-medium text-ash-400"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function VisitLink({ project }: { project: Project }) {
  if (!project.url) return null;
  const isEmerald = project.accent === "emerald";
  const host = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
        isEmerald
          ? "text-emerald-soft hover:text-emerald"
          : "text-amber-soft hover:text-amber"
      }`}
    >
      <ExternalLink size={13} />
      {host}
    </a>
  );
}

/* Card grande, em destaque (ocupa 2 colunas no desktop) */
function FeaturedCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const isEmerald = project.accent === "emerald";

  return (
    <TiltCard glow={project.accent} className="h-full">
      <article className="border-glow glass relative flex h-full flex-col gap-6 overflow-hidden rounded-2xl p-7 md:flex-row md:p-8">
        <div
          aria-hidden
          className={`pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full blur-3xl ${
            isEmerald ? "bg-emerald/15" : "bg-amber/15"
          }`}
        />

        <div className="relative flex-1">
          <div className="flex items-center justify-between">
            <div
              className={`grid h-14 w-14 place-items-center rounded-2xl border ${
                isEmerald ? "border-emerald/25 bg-emerald/10" : "border-amber/25 bg-amber/10"
              }`}
            >
              <Icon size={26} className={isEmerald ? "text-emerald-soft" : "text-amber-soft"} />
            </div>
            <CategoryBadge project={project} />
          </div>

          <h3 className="mt-5 font-display text-2xl font-bold text-ash-100 md:text-3xl">
            {project.name}
          </h3>
          <p className={`mt-1 text-sm font-medium ${isEmerald ? "text-emerald-soft" : "text-amber-soft"}`}>
            {project.tagline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ash-400 md:text-base">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">
            <StackRow project={project} />
            <VisitLink project={project} />
          </div>
        </div>

        <div className="relative w-full shrink-0 border-t border-white/[0.06] pt-5 md:w-64 md:border-l md:border-t-0 md:pl-7 md:pt-0">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-ash-500">
            Foco técnico
          </span>
          <ul className="mt-3 space-y-2.5">
            {project.focus.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-ash-300">
                <Check
                  size={15}
                  className={`mt-0.5 shrink-0 ${isEmerald ? "text-emerald" : "text-amber"}`}
                />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </TiltCard>
  );
}

/* Card padrão */
function StandardCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const isEmerald = project.accent === "emerald";

  return (
    <TiltCard glow={project.accent} className="h-full">
      <article className="glass relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-colors duration-300 group-hover:border-white/[0.14]">
        <span
          className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
            isEmerald ? "via-emerald" : "via-amber"
          } to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        />

        <div className="flex items-center justify-between">
          <div
            className={`grid h-12 w-12 place-items-center rounded-xl border ${
              isEmerald ? "border-emerald/25 bg-emerald/10" : "border-amber/25 bg-amber/10"
            }`}
          >
            <Icon size={22} className={isEmerald ? "text-emerald-soft" : "text-amber-soft"} />
          </div>
          <ArrowUpRight
            size={20}
            className="text-ash-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ash-200"
          />
        </div>

        <div className="mt-5">
          <CategoryBadge project={project} />
        </div>
        <h3 className="mt-3 font-display text-xl font-bold text-ash-100">
          {project.name}
        </h3>
        <p className={`mt-0.5 text-sm font-medium ${isEmerald ? "text-emerald-soft" : "text-amber-soft"}`}>
          {project.tagline}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ash-400">
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.focus.slice(0, 2).map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-ash-400">
              <Check
                size={13}
                className={`mt-0.5 shrink-0 ${isEmerald ? "text-emerald" : "text-amber"}`}
              />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/[0.05] pt-4">
          <StackRow project={project} />
        </div>
        {project.url && (
          <div className="mt-3">
            <VisitLink project={project} />
          </div>
        )}
      </article>
    </TiltCard>
  );
}

export default function Projects() {
  return (
    <section id="projetos" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Ecossistema"
          title="Projetos Desenvolvidos"
          description="SaaS multinicho construído de ponta a ponta — cada plataforma resolve uma regra de negócio real em um mercado diferente."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={item}
              className={project.featured ? "sm:col-span-2" : ""}
            >
              {project.featured ? (
                <FeaturedCard project={project} />
              ) : (
                <StandardCard project={project} />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
