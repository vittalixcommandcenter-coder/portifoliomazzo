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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mb-3 border-b pb-1 text-[13px] font-bold uppercase tracking-[0.18em]"
      style={{ color: V, borderColor: "rgba(124,92,255,0.25)" }}
    >
      {children}
    </h2>
  );
}

export default function CVPage() {
  return (
    <main className="cv-page mx-auto max-w-[820px] bg-white px-10 py-12 text-slate-700 print:px-0 print:py-0">
      {/* Cabeçalho */}
      <header className="flex items-start justify-between gap-6 border-b-2 pb-6" style={{ borderColor: V }}>
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900">
            Guilherme Augusto Mazzo de Oliveira
          </h1>
          <p className="mt-1 text-lg font-medium" style={{ color: V }}>
            Desenvolvedor Full-Stack &amp; SaaS · Fundador da Vittalix
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-slate-500">
            <span>{socials.email}</span>
            <span>linkedin.com/in/guilhermemazzoo</span>
            <span>github.com/vittalixcommandcenter-coder</span>
            <span>mazzo.vittalix.com.br</span>
          </div>
        </div>
      </header>

      {/* Perfil */}
      <section className="mt-6">
        <SectionTitle>Perfil</SectionTitle>
        <p className="text-[13px] leading-relaxed text-slate-600">
          {profile.pitch} {profile.differentiator}
        </p>
      </section>

      {/* Competências */}
      <section className="mt-6">
        <SectionTitle>Competências técnicas</SectionTitle>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
          {capabilities.map((c) => (
            <div key={c.title} className="text-[12.5px]">
              <span className="font-semibold text-slate-800">{c.title}.</span>{" "}
              <span className="text-slate-600">{c.description}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {techStack.map((t) => (
            <span
              key={t.name}
              className="rounded-md px-2 py-0.5 text-[11px] font-medium"
              style={{ background: "rgba(124,92,255,0.08)", color: V }}
            >
              {t.name}
            </span>
          ))}
        </div>
      </section>

      {/* Projetos */}
      <section className="mt-6">
        <SectionTitle>Projetos desenvolvidos</SectionTitle>
        <div className="space-y-3.5">
          {projects.map((p) => (
            <div key={p.name} className="break-inside-avoid">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[14px] font-bold text-slate-900">
                  {p.name}
                  {p.featured && (
                    <span
                      className="ml-2 rounded px-1.5 py-0.5 align-middle text-[9px] font-semibold uppercase text-white"
                      style={{ background: V }}
                    >
                      Carro-chefe
                    </span>
                  )}
                </h3>
                <span className="shrink-0 text-[11px] font-medium text-slate-400">
                  {p.category}
                </span>
              </div>
              <p className="text-[12.5px] italic text-slate-500">{p.tagline}</p>
              <p className="mt-1 text-[12.5px] leading-relaxed text-slate-600">
                {p.description}
              </p>
              <div className="mt-1 text-[11px] text-slate-500">
                <span className="font-semibold">Stack:</span> {p.stack.join(" · ")}
                {p.url && (
                  <span>
                    {"  ·  "}
                    {p.url.replace(/^https?:\/\//, "")}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formação */}
      <section className="mt-6 break-inside-avoid">
        <SectionTitle>Formação & certificações</SectionTitle>
        <div className="space-y-2.5">
          {education.map((e) => (
            <div key={e.title} className="flex items-baseline justify-between gap-3">
              <div>
                <h3 className="text-[13px] font-bold text-slate-900">{e.title}</h3>
                <p className="text-[12px] text-slate-600">
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

      {/* Diferencial / fundação */}
      <section className="mt-6 break-inside-avoid">
        <SectionTitle>Diferencial técnico</SectionTitle>
        <p className="text-[12.5px] leading-relaxed text-slate-600">
          <span className="font-semibold text-slate-800">{foundation.title}.</span>{" "}
          {foundation.text}
        </p>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {foundation.tags.map((t) => (
            <span key={t} className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] text-slate-500">
              {t}
            </span>
          ))}
        </div>
      </section>

      <footer className="mt-8 border-t pt-3 text-center text-[10px] text-slate-400">
        Currículo gerado a partir de mazzo.vittalix.com.br
      </footer>

      <PrintButton />
    </main>
  );
}
