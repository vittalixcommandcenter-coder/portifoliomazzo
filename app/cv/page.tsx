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
    <h2 className="mb-2 flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-slate-900">
      <span className="h-3 w-1 rounded-full" style={{ background: V }} />
      {children}
    </h2>
  );
}

export default function CVPage() {
  return (
    <main className="cv-page mx-auto max-w-[820px] bg-white text-[11px] text-slate-700 shadow-xl print:shadow-none sm:text-[11px]">
      {/* Cabeçalho com faixa de cor (slim) */}
      <header
        className="relative overflow-hidden px-5 pb-5 pt-6 text-white sm:px-10"
        style={{ background: `linear-gradient(135deg, ${V}, ${VD})` }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full"
          style={{ background: "rgba(255,255,255,0.09)" }}
        />
        <div className="relative">
          <h1 className="font-display text-[20px] font-bold leading-tight tracking-tight sm:text-[26px]">
            Guilherme Augusto Mazzo de Oliveira
          </h1>
          <p className="mt-0.5 text-[14px] font-medium text-white/90">
            Desenvolvedor Full-Stack &amp; SaaS · Fundador da Vittalix
          </p>
          <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 text-[10.5px] text-white/85">
            <span>✉ {socials.email}</span>
            <span>in/guilhermemazzoo</span>
            <span>github.com/vittalixcommandcenter-coder</span>
            <span>mazzo.vittalix.com.br</span>
          </div>
        </div>
      </header>

      <div className="px-4 py-5 sm:px-10 sm:py-6">
        {/* Perfil */}
        <section>
          <SectionTitle>Perfil</SectionTitle>
          <p className="text-[11px] leading-snug text-slate-600">
            {profile.pitch} {profile.differentiator}
          </p>
        </section>

        {/* Projetos */}
        <section className="mt-4">
          <SectionTitle>Projetos desenvolvidos</SectionTitle>
          <div className="space-y-2">
            {projects.map((p) => (
              <div
                key={p.name}
                className="break-inside-avoid border-l-2 pl-3"
                style={{ borderColor: "rgba(124,92,255,0.3)" }}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[12px] font-bold text-slate-900">
                    {p.name}
                    {p.featured && (
                      <span
                        className="ml-1.5 rounded px-1 py-0.5 align-middle text-[8px] font-bold uppercase tracking-wide text-white"
                        style={{ background: V }}
                      >
                        Carro-chefe
                      </span>
                    )}
                    <span className="ml-2 align-middle text-[10.5px] font-normal italic text-slate-400">
                      {p.tagline}
                    </span>
                  </h3>
                  <span className="shrink-0 text-[9px] font-semibold uppercase tracking-wide" style={{ color: V }}>
                    {p.category}
                  </span>
                </div>
                <p className="mt-0.5 text-[10.5px] leading-snug text-slate-600">
                  {p.description}
                </p>
                <div className="mt-0.5 text-[9.5px] text-slate-400">
                  <span className="font-semibold text-slate-500">Stack:</span>{" "}
                  {p.stack.join(" · ")}
                  {p.url && <span> · {p.url.replace(/^https?:\/\//, "")}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Duas colunas: Competências | (Formação + Diferencial) */}
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <section className="break-inside-avoid">
            <SectionTitle>Competências técnicas</SectionTitle>
            <div className="space-y-1.5">
              {capabilities.map((c) => (
                <div key={c.title} className="text-[10.5px] leading-snug">
                  <span className="font-semibold text-slate-800">{c.title}.</span>{" "}
                  <span className="text-slate-500">{c.description}</span>
                </div>
              ))}
            </div>
            <div className="mt-2.5 flex flex-wrap gap-1">
              {techStack.map((t) => (
                <span
                  key={t.name}
                  className="rounded px-1.5 py-0.5 text-[9px] font-medium"
                  style={{ background: "rgba(124,92,255,0.1)", color: VD }}
                >
                  {t.name}
                </span>
              ))}
            </div>
          </section>

          <div className="space-y-4">
            <section className="break-inside-avoid">
              <SectionTitle>Formação &amp; certificações</SectionTitle>
              <div className="space-y-2">
                {education.map((e) => (
                  <div key={e.title}>
                    <h3 className="text-[11px] font-bold text-slate-900">
                      {e.title}
                      {e.current && (
                        <span
                          className="ml-1.5 rounded px-1 py-0.5 align-middle text-[8px] font-bold uppercase tracking-wide text-white"
                          style={{ background: V }}
                        >
                          Em curso
                        </span>
                      )}
                    </h3>
                    <p className="text-[10px] text-slate-500">
                      {e.org} · {e.type} · {e.period}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="break-inside-avoid rounded-lg bg-slate-50 p-3">
              <SectionTitle>Diferencial técnico</SectionTitle>
              <p className="text-[10px] leading-snug text-slate-600">
                <span className="font-semibold text-slate-800">{foundation.title}.</span>{" "}
                {foundation.text}
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {foundation.tags.map((t) => (
                  <span key={t} className="rounded bg-white px-1.5 py-0.5 text-[9px] text-slate-500 ring-1 ring-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <PrintButton />
    </main>
  );
}
