"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Check, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { projects, type Project } from "@/lib/data";

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

function CategoryBadge({ project }: { project: Project }) {
  return (
    <span className="rounded-full border border-white/[0.08] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-platinum-400">
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
          className="rounded-full border border-white/[0.06] px-2.5 py-0.5 text-[11px] font-medium text-platinum-500"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function VisitLink({ project }: { project: Project }) {
  if (!project.url) return null;
  const host = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-medium text-copper transition-colors hover:text-copper-soft"
    >
      <ExternalLink size={13} />
      {host}
    </a>
  );
}

/* Card grande, em destaque (ocupa 2 colunas no desktop) */
function FeaturedCard({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <TiltCard className="h-full">
      <article className="glass ring-hover relative flex h-full flex-col gap-7 overflow-hidden rounded-3xl p-8 md:flex-row md:p-9">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/[0.05] blur-[80px]"
        />
        <div className="relative flex-1">
          <div className="flex items-center justify-between">
            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-copper/20 bg-copper/[0.08]">
              <Icon size={24} className="text-copper-soft" />
            </div>
            <CategoryBadge project={project} />
          </div>

          <h3 className="mt-6 font-display text-3xl font-semibold tracking-tightest text-ice">
            {project.name}
          </h3>
          <p className="mt-1.5 text-sm font-light text-platinum-300">
            {project.tagline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-platinum-400 md:text-base">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
            <StackRow project={project} />
            <VisitLink project={project} />
          </div>
        </div>

        <div className="relative w-full shrink-0 border-t border-white/[0.06] pt-6 md:w-60 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-copper">
            Foco técnico
          </span>
          <ul className="mt-4 space-y-3">
            {project.focus.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-platinum-300">
                <Check size={14} className="mt-0.5 shrink-0 text-copper" />
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
  return (
    <TiltCard className="h-full">
      <article className="glass ring-hover relative flex h-full flex-col overflow-hidden rounded-3xl p-7">
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
          <CategoryBadge project={project} />
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ice">
          {project.name}
        </h3>
        <p className="mt-1 text-sm font-light text-platinum-300">
          {project.tagline}
        </p>
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

        <div className="mt-6 border-t border-white/[0.05] pt-5">
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
    <section id="projetos" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Ecossistema"
          title="Projetos desenvolvidos"
          description="SaaS multinicho construído de ponta a ponta — cada plataforma resolve uma regra de negócio real em um mercado diferente."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
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
