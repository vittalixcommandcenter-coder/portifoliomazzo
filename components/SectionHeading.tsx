"use client";

import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 max-w-2xl sm:mb-14 md:mb-20 ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.3em] text-copper">
          <span className="h-1 w-1 rounded-full bg-copper" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tightest text-platinum-gradient sm:mt-5 sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-sm leading-relaxed text-platinum-400 sm:mt-5 sm:text-base md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
