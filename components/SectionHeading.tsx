"use client";

import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl md:mb-16">
      <Reveal>
        <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-amber">
          <span className="h-px w-8 bg-amber/60" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ash-100 sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-base leading-relaxed text-ash-400 md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
