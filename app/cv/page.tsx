import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";
import {
  capabilities,
  education,
  foundation,
  profile,
  projects,
  socials,
  techStack,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Currículo — Guilherme Mazzo",
  description: "Currículo de Guilherme Augusto Mazzo de Oliveira — Desenvolvedor Full-Stack & SaaS.",
  robots: { index: false, follow: false },
};

const V = "#7c5cff";
const VD = "#6346e0";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.2em] text-slate-900">
      <span className="h-3.5 w-1 rounded-full" style={{ background: V }} />
      {children}
    </h2>
  );
}

export default function CVPage() {
  return (
    <main className="cv-page mx-auto max-w-[820px] bg-white text-slate-700 shadow-xl print:shadow-none">
      {/* Cabeçalho com faixa de cor */}
      <header
        className="relative overflow-hidden px-12 pb-8 pt-10 text-white"
        style={{ background: `linear-gradient(135deg, ${V}, ${VD})` }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full"
          style={{ background: "rgba(255,255,255,0.08)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 right-24 h-44 w-44 rounded-full"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
        <div className="relative">
          <h1 className="font-display text-[34px] font-bold leading-tight tracking-tight">
            Guilherme Augusto Mazzo de Oliveira
          </h1>
          <p className="mt-1 text-[17px] font-medium text-white/90">
            Desenvolvedor Full-Stack &amp; SaaS · Fundador da Vittalix
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-[12px] text-white/85">
            <span>✉ {socials.email}</span>
            <span>in/guilhermemazzoo</span>
            <span>github.com/vittalixcommandcenter-coder</span>
            <span>mazzo.vittalix.com.br</span>
          </div>
        </div>
      </header>

      <div className="px-12 py-9">
        {/* Perfil */}
        <section>
          <SectionTitle>Perfil profissional</SectionTitle>
          <p className="text-[13px] leading-relaxed text-slate-600">
            {profile.pitch} {profile.differentiator}
          </p>
        </section>

        {/* Competências */}
        <section className="mt-7">
          <SectionTitle>Competências técnicas</SectionTitle>
          <div className="grid grid-cols-2 gap-x-7 gap-y-3">
            {capabilities.map((c) => (
              <div key={c.title} className="text-[12.5px] leading-snug">
                <span className="font-semibold text-slate-800">{c.title}.</span>{" "}
                <span className="text-slate-500">{c.description}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {techStack.map((t) => (
              <span
                key={t.name}
                className="rounded-md px-2 py-0.5 text-[11px] font-medium"
                style={{ background: "rgba(124,92,255,0.1)", color: VD }}
              >
                {t.name}
              </span>
            ))}
          </div>
        </section>

        {/* Projetos */}
        <section className="mt-7">
          <SectionTitle>Projetos desenvolvidos</SectionTitle>
          <div className="space-y-4">
            {projects.map((p) => (
              <div
                key={p.name}
                className="break-inside-avoid border-l-2 pl-4"
                style={{ borderColor: "rgba(124,92,255,0.3)" }}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[14px] font-bold text-slate-900">
                    {p.name}
                    {p.featured && (
                      <span
                        className="ml-2 rounded px-1.5 py-0.5 align-middle text-[8.5px] font-bold uppercase tracking-wide text-white"
                        style={{ background: V }}
                      >
                        Carro-chefe
                      </span>
                    )}
                  </h3>
                  <span className="shrink-0 text-[10.5px] font-semibold uppercase tracking-wide" style={{ color: V }}>
                    {p.category}
                  </span>
                </div>
                <p className="text-[12.5px] italic text-slate-500">{p.tagline}</p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-slate-600">
                  {p.description}
                </p>
                <div className="mt-1.5 text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-500">Stack:</span>{" "}
                  {p.stack.join(" · ")}
                  {p.url && <span> · {p.url.replace(/^https?:\/\//, "")}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Formação */}
        <section className="mt-7 break-inside-avoid">
          <SectionTitle>Formação &amp; certificações</SectionTitle>
          <div className="space-y-3">
            {education.map((e) => (
              <div key={e.title} className="flex items-baseline justify-between gap-3">
                <div>
                  <h3 className="text-[13px] font-bold text-slate-900">
                    {e.title}
                    {e.current && (
                      <span
                        className="ml-2 rounded px-1.5 py-0.5 align-middle text-[8.5px] font-bold uppercase tracking-wide text-white"
                        style={{ background: V }}
                      >
                        Em curso
                      </span>
                    )}
                  </h3>
                  <p className="text-[12px] text-slate-500">
                    {e.org} · <span className="italic">{e.type}</span>
                  </p>
                </div>
                <span className="shrink-0 text-[11px] font-medium text-slate-400">
                  {e.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Diferencial */}
        <section className="mt-7 break-inside-avoid rounded-xl bg-slate-50 p-5">
          <SectionTitle>Diferencial técnico</SectionTitle>
          <p className="text-[12.5px] leading-relaxed text-slate-600">
            <span className="font-semibold text-slate-800">{foundation.title}.</span>{" "}
            {foundation.text}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {foundation.tags.map((t) => (
              <span key={t} className="rounded-md bg-white px-2 py-0.5 text-[11px] text-slate-500 ring-1 ring-slate-200">
                {t}
              </span>
            ))}
          </div>
        </section>

        <footer className="mt-8 text-center text-[10px] text-slate-300">
          mazzo.vittalix.com.br
        </footer>
      </div>

      <PrintButton />
    </main>
  );
}
