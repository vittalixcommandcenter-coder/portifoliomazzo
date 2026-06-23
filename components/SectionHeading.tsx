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
    <div className={`mb-14 max-w-2xl md:mb-20 ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-platinum-500">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display text-4xl font-semibold tracking-tightest text-platinum-gradient sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-platinum-400 md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
