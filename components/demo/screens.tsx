"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Check,
  FileSignature,
  Lightbulb,
  Mic,
  MonitorUp,
  Paperclip,
  PhoneOff,
  Send,
  ShieldCheck,
  Sparkles,
  Upload,
  Video,
} from "lucide-react";
import { useState } from "react";
import {
  demoConsult,
  demoDifferentials,
  demoExecSummary,
  demoMetrics,
  demoNextPatients,
  demoSigning,
  demoVittalisAnswer,
  demoVittalisChips,
  demoVittalisQuestion,
} from "@/lib/demoData";

/* Paleta interna do demo — CLARA + ROXO, fiel ao ProntuIA real.
   Independe do tema do site para parecer "a tela do produto". */
const V = "#7c5cff"; // violeta principal

const cardCls =
  "rounded-xl border border-black/[0.06] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]";

/* ----------------------------- DASHBOARD ----------------------------- */
export function DashboardScreen() {
  return (
    <div className="space-y-4 text-slate-700">
      {/* saudação com barra roxa */}
      <div className={`${cardCls} relative overflow-hidden p-5`}>
        <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 to-violet-400" />
        <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
          Terça-feira, 23 de junho
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold text-slate-900">
          Boa noite, Guilherme
        </h3>
        <div className="mt-3 flex items-start gap-2 rounded-lg bg-violet-50 p-3">
          <Sparkles size={14} className="mt-0.5 shrink-0" style={{ color: V }} />
          <p className="text-[11px] leading-relaxed text-slate-600">
            <span className="font-semibold text-slate-700">Resumo executivo:</span>{" "}
            {demoExecSummary}
          </p>
        </div>
        <div className="mt-3 flex gap-1.5">
          {["Semana", "Mês", "Ano"].map((t, i) => (
            <span
              key={t}
              className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                i === 0 ? "text-white" : "bg-slate-100 text-slate-500"
              }`}
              style={i === 0 ? { background: V } : undefined}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* métricas */}
      <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        {demoMetrics.map((m) => (
          <div key={m.label} className={`${cardCls} p-3.5`}>
            <div className="flex items-center justify-between">
              <m.icon size={15} className="text-slate-400" />
              <span className="text-[10px] font-medium text-violet-500">{m.trend}</span>
            </div>
            <div className="mt-2 font-display text-2xl font-semibold text-slate-900">
              {m.value}
            </div>
            <div className="text-[10px] uppercase tracking-wide text-slate-400">
              {m.label}
            </div>
            <div className="mt-0.5 text-[10px] text-slate-400">{m.sub}</div>
          </div>
        ))}
      </div>

      {/* próximos pacientes */}
      <div className={`${cardCls} p-4`}>
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-700">Próximos pacientes</span>
          <span className="flex items-center gap-1 text-[10px] font-medium" style={{ color: V }}>
            Ver agenda <ArrowRight size={11} />
          </span>
        </div>
        <div className="space-y-1">
          {demoNextPatients.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-slate-50"
            >
              <div
                className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[11px] font-semibold text-white"
                style={{ background: V }}
              >
                {p.initials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium text-slate-800">{p.name}</div>
                <div className="truncate text-[11px] text-slate-400">{p.info}</div>
              </div>
              <span className="rounded-full bg-violet-50 px-2 py-0.5 text-[10px] font-medium text-violet-600">
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --------------------------- CONSULTA SOAP --------------------------- */
export function ConsultScreen() {
  const c = demoConsult;
  const [analyzed, setAnalyzed] = useState(false);
  const [loading, setLoading] = useState(false);

  const suggest = () => {
    setLoading(true);
    setAnalyzed(false);
    setTimeout(() => {
      setLoading(false);
      setAnalyzed(true);
    }, 1000);
  };

  return (
    <div className="space-y-4 text-slate-700">
      {/* cabeçalho do paciente */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="grid h-9 w-9 place-items-center rounded-lg text-xs font-semibold text-white"
            style={{ background: V }}
          >
            {c.patient.initials}
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">{c.patient.name}</div>
            <div className="text-[11px] text-slate-400">
              Consulta de rotina · {c.patient.age} anos ·{" "}
              <span className="text-emerald-500">● {c.timer}</span>
            </div>
          </div>
        </div>
        <span
          className="rounded-lg px-3 py-1.5 text-[11px] font-semibold text-white"
          style={{ background: V }}
        >
          Finalizar
        </span>
      </div>

      {/* vitais */}
      <div className="grid grid-cols-2 gap-2.5">
        {c.vitals.map((v) => (
          <div key={v.label} className={`${cardCls} p-3`}>
            <div className="text-[10px] uppercase tracking-wide text-slate-400">
              {v.label}
            </div>
            <div className="mt-0.5 font-display text-base font-semibold text-slate-900">
              {v.value}
            </div>
          </div>
        ))}
      </div>

      {/* SOAP */}
      <div className={`${cardCls} p-4`}>
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-700">Evolução Clínica (SOAP)</span>
          <div className="flex items-center gap-3 text-[10px] font-medium">
            <span className="flex items-center gap-1 text-slate-500">
              <Mic size={11} /> Transcrever Áudio
            </span>
            <span className="flex items-center gap-1" style={{ color: V }}>
              <Sparkles size={11} /> Gerar SOAP via IA
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {c.soap.map((s) => (
            <div key={s.key}>
              <div className="mb-1 flex items-center gap-1.5">
                <span
                  className="grid h-4 w-4 place-items-center rounded-full text-[9px] font-bold text-white"
                  style={{ background: V }}
                >
                  {s.key}
                </span>
                <span className="text-[11px] font-medium text-slate-600">{s.title}</span>
                {s.key === "A" && (
                  <button
                    onClick={suggest}
                    className="ml-auto flex items-center gap-1 text-[10px] font-semibold text-amber-500"
                  >
                    <Lightbulb size={10} /> Sugerir diferenciais
                  </button>
                )}
              </div>
              <div className="min-h-[52px] rounded-lg border border-slate-200 bg-slate-50/60 p-2 text-[11px] leading-relaxed text-slate-600">
                {s.filled || <span className="text-slate-300">{s.placeholder}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* sugestões IA */}
        {(loading || analyzed) && (
          <div className="mt-3 rounded-lg border border-violet-100 bg-violet-50/50 p-3">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold" style={{ color: V }}>
              <Sparkles size={12} />
              {loading ? "Analisando sintomas…" : "Diagnósticos diferenciais sugeridos"}
            </div>
            {analyzed && (
              <div className="mt-2 space-y-1.5">
                {demoDifferentials.map((d) => (
                  <motion.div
                    key={d.cid}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2"
                  >
                    <span className="rounded bg-white px-1.5 py-0.5 font-mono text-[9px] text-slate-500 ring-1 ring-slate-200">
                      {d.cid}
                    </span>
                    <span className="text-[11px] text-slate-700">{d.name}</span>
                    <div className="ml-auto flex items-center gap-1.5">
                      <div className="h-1 w-14 overflow-hidden rounded-full bg-slate-200">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${d.confidence}%` }}
                          transition={{ duration: 0.7 }}
                          className="h-full rounded-full"
                          style={{ background: V }}
                        />
                      </div>
                      <span className="w-7 text-right text-[10px] font-semibold text-violet-600">
                        {d.confidence}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="mt-3 flex gap-2">
          <span className="rounded-lg px-3 py-1.5 text-[11px] font-semibold text-white" style={{ background: V }}>
            Prescrever
          </span>
          <span className="rounded-lg border border-slate-200 px-3 py-1.5 text-[11px] font-medium text-slate-500">
            Atestado / Laudo
          </span>
          <span className="rounded-lg border border-slate-200 px-3 py-1.5 text-[11px] font-medium text-slate-500">
            Solicitar Exames
          </span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------- ASSINATURA ICP-BRASIL ----------------------- */
export function SigningScreen() {
  const s = demoSigning;
  const [tab, setTab] = useState<"sign" | "validate">("sign");

  return (
    <div className="space-y-4 text-slate-700">
      <div className="flex items-center gap-2.5">
        <div
          className="grid h-9 w-9 place-items-center rounded-lg text-white"
          style={{ background: V }}
        >
          <FileSignature size={18} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Assinar documentos</h3>
          <p className="text-[11px] text-slate-400">Padrão ICP-Brasil · Motor Vittalix V7</p>
        </div>
      </div>

      {/* abas */}
      <div className="flex gap-4 border-b border-slate-200 text-[11px] font-medium">
        {[
          { k: "sign", label: "Assinar documentos" },
          { k: "validate", label: "Validador jurídico" },
        ].map((t) => (
          <button
            key={t.k}
            onClick={() => setTab(t.k as "sign" | "validate")}
            className={`-mb-px border-b-2 pb-2 transition-colors ${
              tab === t.k ? "text-slate-900" : "border-transparent text-slate-400"
            }`}
            style={tab === t.k ? { borderColor: V } : undefined}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "sign" ? (
        <div className="grid gap-3 sm:grid-cols-[1fr_1.2fr]">
          {/* autenticação */}
          <div className={`${cardCls} p-4`}>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={13} style={{ color: V }} />
              <span className="text-xs font-semibold text-slate-700">Autenticação</span>
            </div>
            <div className="mt-3 flex gap-1 rounded-lg bg-slate-100 p-0.5">
              {s.modes.map((m, i) => (
                <span
                  key={m}
                  className={`flex-1 rounded-md px-1 py-1 text-center text-[9px] font-medium ${
                    i === 0 ? "bg-white text-slate-800 shadow-sm" : "text-slate-400"
                  }`}
                >
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-2.5 rounded-lg border border-slate-200 px-3 py-2 text-[11px] text-slate-600">
              {s.cert}
            </div>
            <div className="mt-2 rounded-lg border border-slate-200 px-3 py-2 text-[11px] text-slate-300">
              Senha do certificado
            </div>
            <button className="mt-3 w-full rounded-lg py-2 text-[11px] font-semibold text-white opacity-80" style={{ background: V }}>
              Marque o local primeiro
            </button>
          </div>

          {/* dropzone */}
          <div className={`${cardCls} grid place-items-center p-4`}>
            <div className="grid w-full place-items-center rounded-xl border-2 border-dashed border-slate-200 py-8">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-violet-50">
                <Upload size={18} style={{ color: V }} />
              </div>
              <p className="mt-2 text-[11px] font-medium text-slate-600">Solte o PDF aqui</p>
              <p className="text-[10px] text-slate-400">Clique para selecionar o documento</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={`${cardCls} p-4`}>
            <span className="text-xs font-semibold text-slate-700">
              Validador de Hash (SHA-256)
            </span>
            <div className="mt-3 grid place-items-center rounded-xl border-2 border-dashed border-slate-200 py-6">
              <Upload size={18} className="text-slate-300" />
              <p className="mt-1.5 text-[10px] text-slate-400">Arraste o PDF assinado aqui</p>
            </div>
            <div className="mt-3 rounded-lg bg-slate-50 px-3 py-2 font-mono text-[10px] text-slate-400">
              Hash SHA-256 (64 caracteres)
            </div>
            <div className="mt-4">
              <div className="text-[10px] uppercase tracking-wide text-slate-400">
                Total de assinaturas
              </div>
              <div className="font-display text-xl font-semibold text-slate-900">
                {s.totalSignatures}
              </div>
              {s.adoption.map((a) => (
                <div key={a.label} className="mt-1.5">
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>{a.label}</span>
                    <span>{a.value}%</span>
                  </div>
                  <div className="mt-0.5 h-1 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${a.value}%`,
                        background: a.value === 100 ? "#10b981" : V,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`${cardCls} grid place-items-center p-4 text-center`}>
            <div>
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-slate-50">
                <ShieldCheck size={22} className="text-slate-300" />
              </div>
              <p className="mt-2 text-xs font-medium text-slate-600">Livro de Auditoria Digital</p>
              <p className="mt-1 text-[10px] leading-relaxed text-slate-400">
                Carregue um arquivo assinado ou insira o Hash para conferir a validade jurídica.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ----------------- VITTALIS (IA) + TELEMEDICINA ---------------------- */
export function VittalisScreen() {
  const [inCall, setInCall] = useState(false);

  return (
    <div className="grid gap-3 text-slate-700 lg:grid-cols-2">
      {/* chat Vittalis */}
      <div className={`${cardCls} flex flex-col p-0`}>
        <div className="flex items-center gap-2 border-b border-slate-100 p-3">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-violet-100">
            <Sparkles size={15} style={{ color: V }} />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-800">Vittalis</div>
            <div className="text-[10px] text-slate-400">Assistente IA · Resumido</div>
          </div>
        </div>

        <div className="flex-1 space-y-2 p-3">
          {/* pergunta */}
          <div className="flex justify-end">
            <div
              className="max-w-[80%] rounded-2xl rounded-tr-sm px-3 py-2 text-[11px] text-white"
              style={{ background: V }}
            >
              {demoVittalisQuestion}
            </div>
          </div>
          {/* resposta */}
          <div className="max-w-[88%] space-y-0.5 rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-2.5">
            {demoVittalisAnswer.map((l, i) =>
              l.type === "h" ? (
                <p key={i} className="text-[11px] font-semibold text-slate-800">{l.text}</p>
              ) : l.type === "b" ? (
                <p key={i} className="pt-1 text-[11px] font-semibold text-slate-700">{l.text}</p>
              ) : l.type === "note" ? (
                <p key={i} className="pt-1 text-[10px] italic text-slate-400">{l.text}</p>
              ) : (
                <p key={i} className="pl-2 text-[11px] text-slate-600">• {l.text}</p>
              )
            )}
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-100 p-3">
          <div className="flex flex-wrap gap-1.5">
            {demoVittalisChips.map((c) => (
              <span key={c} className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] text-slate-500">
                {c}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2">
            <span className="flex-1 text-[11px] text-slate-300">Pergunte à Vittalis…</span>
            <Send size={14} style={{ color: V }} />
          </div>
        </div>
      </div>

      {/* telemedicina */}
      <div className={`${cardCls} flex flex-col overflow-hidden p-0`}>
        <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-slate-800 to-slate-950">
          <div className="absolute inset-0 grid place-items-center text-slate-500">
            <span className="text-[11px]">Aguardando paciente entrar…</span>
          </div>
          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/40 px-2 py-1 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
            <span className="text-[10px] text-white">Ao vivo</span>
          </div>
          <div className="absolute bottom-3 left-3 text-[11px] font-medium text-white">
            Guilherme Oliveira · Cardiologia
          </div>
          <div className="absolute bottom-3 right-3 h-12 w-16 rounded-md border border-white/15 bg-slate-700" />
        </div>
        <div className="flex items-center justify-center gap-2 p-3">
          {[Mic, Video, MonitorUp].map((Icon, i) => (
            <button key={i} className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200">
              <Icon size={15} />
            </button>
          ))}
          <button
            className="grid h-9 w-9 place-items-center rounded-full text-white"
            style={{ background: V }}
          >
            <Sparkles size={15} />
          </button>
          <button
            onClick={() => setInCall((v) => !v)}
            className={`grid h-9 w-9 place-items-center rounded-full text-white transition-colors ${
              inCall ? "bg-slate-300" : "bg-red-500 hover:bg-red-600"
            }`}
          >
            <PhoneOff size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
