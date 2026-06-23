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
    <footer id="contato" className="relative px-6 pb-12 pt-28 md:pt-36">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.3em] text-copper">
            <span className="h-1 w-1 rounded-full bg-copper" />
            Contato
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 font-display text-4xl font-semibold tracking-tightest text-platinum-gradient sm:text-5xl md:text-6xl">
            Vamos construir
            <br />
            algo excepcional.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-lg text-base text-platinum-400">
            Aberto a parcerias, projetos SaaS e oportunidades. Escolha o melhor
            canal abaixo.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="btn-ghost group"
              >
                <link.icon
                  size={16}
                  className="text-copper transition-colors group-hover:text-copper-soft"
                />
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-24 max-w-6xl">
        <div className="hairline" />
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-platinum-500 sm:flex-row">
          <div className="flex items-center gap-4">
            <span className="font-display font-medium text-platinum-300">
              {profile.shortName}
            </span>
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-platinum-400 transition-colors hover:text-ice"
            >
              <ExternalLink size={12} />
              {company.name}
            </a>
          </div>
          <span>© {new Date().getFullYear()} — Guilherme Mazzo.</span>
        </div>
      </div>
    </footer>
  );
}
