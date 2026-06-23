"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CalendarDays,
  Check,
  ChevronRight,
  Mic,
  Phone,
  Pill,
  Sparkles,
  TriangleAlert,
  Video,
} from "lucide-react";
import { useState } from "react";
import {
  demoAISuggestions,
  demoAISymptoms,
  demoAgenda,
  demoMetrics,
  demoPatients,
  demoRecord,
} from "@/lib/demoData";

/* Paleta interna do demo (independe do tema do site para parecer "um app").
   Sempre escura, com cobre, para dar identidade de produto. */
const card = "rounded-xl border border-white/[0.06] bg-white/[0.02]";

function StatusDot({ status }: { status: string }) {
  const color =
    status === "Em atendimento"
      ? "bg-copper"
      : status === "Aguardando"
        ? "bg-amber-400/80"
        : status === "Concluído"
          ? "bg-emerald-400/70"
          : "bg-platinum-500";
  return <span className={`h-1.5 w-1.5 rounded-full ${color}`} />;
}

/* ----------------------------- DASHBOARD ----------------------------- */
export function DashboardScreen() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-display text-lg font-semibold text-white">
          Bom dia, Dra. Marina 👋
        </h3>
        <p className="text-xs text-platinum-400">Resumo da clínica · Hoje</p>
      </div>

      {/* métricas */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {demoMetrics.map((m) => (
          <div key={m.label} className={`${card} p-3`}>
            <div className="text-[10px] uppercase tracking-wide text-platinum-500">
              {m.label}
            </div>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="font-display text-xl font-semibold text-white">
                {m.value}
              </span>
              <span className="text-[10px] font-medium text-copper-soft">
                {m.delta}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* próximos atendimentos */}
      <div className={`${card} p-4`}>
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-medium text-platinum-200">
            Próximos atendimentos
          </span>
          <span className="text-[10px] text-platinum-500">Ver agenda</span>
        </div>
        <div className="space-y-1.5">
          {demoPatients.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-white/[0.03]"
            >
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-copper/15 text-[11px] font-semibold text-copper-soft">
                {p.initials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium text-platinum-100">
                  {p.name}
                </div>
                <div className="truncate text-[11px] text-platinum-500">
                  {p.reason}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-medium text-platinum-200">
                  {p.time}
                </div>
                <div className="flex items-center justify-end gap-1 text-[10px] text-platinum-500">
                  <StatusDot status={p.status} />
                  {p.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --------------------------- PRONTUÁRIO ------------------------------ */
export function RecordScreen() {
  const r = demoRecord;
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-copper/15 text-sm font-semibold text-copper-soft">
          {r.patient.initials}
        </div>
        <div>
          <h3 className="font-display text-base font-semibold text-white">
            {r.patient.name}
          </h3>
          <p className="text-[11px] text-platinum-400">
            {r.patient.age} anos · Prontuário #00{r.patient.id.slice(1)}
          </p>
        </div>
      </div>

      {/* sinais vitais */}
      <div className="grid grid-cols-4 gap-2">
        {r.vitals.map((v) => (
          <div key={v.label} className={`${card} p-2.5 text-center`}>
            <div className="text-[9px] uppercase text-platinum-500">{v.label}</div>
            <div className="mt-0.5 font-display text-sm font-semibold text-white">
              {v.value}
            </div>
            <div className="text-[9px] text-platinum-500">{v.unit}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-[1.6fr_1fr]">
        {/* timeline */}
        <div className={`${card} p-4`}>
          <span className="text-xs font-medium text-platinum-200">
            Evolução clínica
          </span>
          <div className="mt-3 space-y-3">
            {r.timeline.map((t, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <span className="h-2 w-2 rounded-full bg-copper" />
                  {i < r.timeline.length - 1 && (
                    <span className="mt-1 w-px flex-1 bg-white/[0.08]" />
                  )}
                </div>
                <div className="pb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-platinum-100">
                      {t.title}
                    </span>
                    <span className="text-[10px] text-platinum-500">{t.date}</span>
                  </div>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-platinum-400">
                    {t.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* alergias + medicações */}
        <div className="space-y-3">
          <div className={`${card} p-3`}>
            <div className="flex items-center gap-1.5">
              <TriangleAlert size={12} className="text-amber-400/80" />
              <span className="text-[11px] font-medium text-platinum-200">
                Alergias
              </span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {r.allergies.map((a) => (
                <span
                  key={a}
                  className="rounded-md bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-300/90"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
          <div className={`${card} p-3`}>
            <div className="flex items-center gap-1.5">
              <Pill size={12} className="text-copper-soft" />
              <span className="text-[11px] font-medium text-platinum-200">
                Medicações
              </span>
            </div>
            <div className="mt-2 space-y-1">
              {r.meds.map((m) => (
                <div key={m} className="text-[11px] text-platinum-300">
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------- CO-PILOTO IA ---------------------------- */
export function AIScreen() {
  const [analyzed, setAnalyzed] = useState(false);
  const [loading, setLoading] = useState(false);

  const run = () => {
    setLoading(true);
    setAnalyzed(false);
    setTimeout(() => {
      setLoading(false);
      setAnalyzed(true);
    }, 1100);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Sparkles size={16} className="text-copper-soft" />
        <h3 className="font-display text-base font-semibold text-white">
          Co-Piloto clínico
        </h3>
        <span className="rounded-full bg-copper/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-copper-soft">
          IA
        </span>
      </div>

      {/* sintomas */}
      <div className={`${card} p-4`}>
        <span className="text-[11px] font-medium text-platinum-300">
          Sintomas registrados na consulta
        </span>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {demoAISymptoms.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[11px] text-platinum-200"
            >
              {s}
            </span>
          ))}
        </div>
        <button
          onClick={run}
          disabled={loading}
          className="mt-3.5 inline-flex items-center gap-2 rounded-lg bg-copper px-3.5 py-2 text-xs font-semibold text-graphite-950 transition-all hover:bg-copper-soft disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="h-3 w-3 animate-spin rounded-full border-2 border-graphite-950/40 border-t-graphite-950" />
              Analisando…
            </>
          ) : (
            <>
              <Sparkles size={13} />
              {analyzed ? "Analisar novamente" : "Sugerir diagnósticos"}
            </>
          )}
        </button>
      </div>

      {/* resultados */}
      {analyzed && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-2"
        >
          <span className="text-[11px] font-medium text-platinum-400">
            Diagnósticos diferenciais sugeridos
          </span>
          {demoAISuggestions.map((s) => (
            <motion.div
              key={s.cid}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`${card} p-3`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-white/[0.05] px-1.5 py-0.5 font-mono text-[10px] text-platinum-300">
                    {s.cid}
                  </span>
                  <span className="text-sm font-medium text-platinum-100">
                    {s.name}
                  </span>
                </div>
                <span className="text-xs font-semibold text-copper-soft">
                  {s.confidence}%
                </span>
              </div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${s.confidence}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full bg-copper"
                />
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-platinum-400">
                {s.rationale}
              </p>
            </motion.div>
          ))}
          <p className="pt-1 text-[10px] italic text-platinum-500">
            Sugestões geradas por IA — a decisão final é sempre do médico.
          </p>
        </motion.div>
      )}
    </div>
  );
}

/* ------------------------- TELECONSULTA/AGENDA ----------------------- */
export function TeleconsultScreen() {
  const [inCall, setInCall] = useState(false);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-[1fr_1.1fr]">
        {/* agenda */}
        <div className={`${card} p-4`}>
          <div className="mb-3 flex items-center gap-1.5">
            <CalendarDays size={13} className="text-copper-soft" />
            <span className="text-xs font-medium text-platinum-200">Agenda</span>
          </div>
          <div className="space-y-1">
            {demoAgenda.map((a) => (
              <div
                key={a.time}
                className={`flex items-center gap-2.5 rounded-lg px-2 py-1.5 ${
                  a.now ? "bg-copper/10" : ""
                }`}
              >
                <span className="w-9 text-[11px] tabular-nums text-platinum-400">
                  {a.time}
                </span>
                <div className="flex-1">
                  <div className="text-xs font-medium text-platinum-100">
                    {a.patient}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-platinum-500">
                    {a.type === "Teleconsulta" ? (
                      <Video size={9} className="text-copper-soft" />
                    ) : (
                      <Activity size={9} />
                    )}
                    {a.type}
                  </div>
                </div>
                {a.done ? (
                  <Check size={13} className="text-emerald-400/70" />
                ) : a.now ? (
                  <span className="rounded-full bg-copper px-2 py-0.5 text-[9px] font-semibold text-graphite-950">
                    agora
                  </span>
                ) : (
                  <ChevronRight size={13} className="text-platinum-600" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* sala de vídeo */}
        <div className={`${card} relative overflow-hidden p-0`}>
          <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-graphite-800 to-graphite-950">
            {/* "vídeo" do paciente */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-copper/15 text-lg font-semibold text-copper-soft">
                RL
              </div>
            </div>
            <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/40 px-2 py-1 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
              <span className="text-[10px] text-white">Ao vivo</span>
            </div>
            <div className="absolute bottom-3 left-3 text-[11px] font-medium text-white">
              Rafael Lima · Cardiologia
            </div>
            {/* "câmera" do médico (PiP) */}
            <div className="absolute bottom-3 right-3 h-12 w-16 rounded-md border border-white/15 bg-graphite-700" />
          </div>

          {/* controles */}
          <div className="flex items-center justify-center gap-2 p-3">
            <button className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.06] text-platinum-200 transition-colors hover:bg-white/[0.1]">
              <Mic size={15} />
            </button>
            <button className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.06] text-platinum-200 transition-colors hover:bg-white/[0.1]">
              <Video size={15} />
            </button>
            <button
              onClick={() => setInCall((v) => !v)}
              className={`grid h-9 w-9 place-items-center rounded-full text-white transition-colors ${
                inCall ? "bg-white/[0.06] hover:bg-white/[0.1]" : "bg-red-500/90 hover:bg-red-500"
              }`}
            >
              <Phone size={15} className={inCall ? "" : "rotate-[135deg]"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
