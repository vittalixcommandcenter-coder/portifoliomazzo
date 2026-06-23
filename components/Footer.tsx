"use client";

import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { company, profile, socials } from "@/lib/data";

const links = [
  { label: "LinkedIn", href: socials.linkedin, icon: Linkedin, external: true },
  { label: "GitHub", href: socials.github, icon: Github, external: true },
  { label: "E-mail", href: `mailto:${socials.email}`, icon: Mail, external: false },
];

export default function Footer() {
  return (
    <footer id="contato" className="relative px-6 pb-12 pt-24 md:pt-32">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-emerald-soft">
            <span className="h-px w-8 bg-emerald/60" />
            Contato
            <span className="h-px w-8 bg-emerald/60" />
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-ash-100 sm:text-4xl md:text-5xl">
            Vamos construir algo{" "}
            <span className="text-gradient">de alto impacto</span>?
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-4 max-w-xl text-ash-400">
            Aberto a parcerias, projetos SaaS e oportunidades. Escolha o melhor
            canal abaixo.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="glass group inline-flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-medium text-ash-200 transition-all hover:scale-[1.03] hover:border-white/[0.14] hover:text-ash-100"
              >
                <link.icon
                  size={18}
                  className="text-amber transition-colors group-hover:text-amber-soft"
                />
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 max-w-6xl">
        <div className="accent-divider" />
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-ash-500 sm:flex-row">
          <div className="flex items-center gap-4">
            <span className="font-display font-semibold text-ash-300">
              {profile.shortName}
              <span className="text-amber">.</span>
            </span>
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ash-400 transition-colors hover:text-amber-soft"
            >
              <ExternalLink size={12} />
              {company.name}
            </a>
          </div>
          <span>
            © {new Date().getFullYear()} — Construído com Next.js, Tailwind &amp;
            Framer Motion.
          </span>
        </div>
      </div>
    </footer>
  );
}
