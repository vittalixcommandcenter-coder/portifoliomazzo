"use client";

import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Plus,
  ShieldCheck,
  TriangleAlert,
  Wallet,
} from "lucide-react";
import {
  demoAgendaSlots,
  demoAgendaSpecialists,
  demoAgendaStatuses,
  demoBillingRows,
  demoFinanceCards,
  demoFinanceRows,
  demoLabExams,
  demoMural,
  demoPatientsList,
  demoPatientsStats,
  demoReportBars,
  demoReportDonut,
  demoReportKpis,
  demoSpecialistsList,
  demoStockItems,
  demoSupportStats,
  demoSupportTickets,
  demoTissGuides,
  demoWaMessages,
} from "@/lib/demoData";

const V = "#7c5cff";
const cardCls =
  "rounded-xl border border-black/[0.06] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)]";

/* Cabeçalho padrão de tela */
function Head({ title, sub, action }: { title: string; sub?: string; action?: string }) {
  return (
    <div className="mb-4 flex items-end justify-between">
      <div>
        <h3 className="font-display text-lg font-semibold text-slate-900">{title}</h3>
        {sub && <p className="text-[11px] text-slate-400">{sub}</p>}
      </div>
      {action && (
        <span
          className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-[11px] font-semibold text-white"
          style={{ background: V }}
        >
          <Plus size={12} /> {action}
        </span>
      )}
    </div>
  );
}

function StatRow({
  items,
}: {
  items: { label: string; value: string; color?: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
      {items.map((s) => (
        <div key={s.label} className={`${cardCls} p-3`}>
          <div className="font-display text-2xl font-semibold" style={{ color: s.color ?? "#0f172a" }}>
            {s.value}
          </div>
          <div className="text-[10px] uppercase tracking-wide text-slate-400">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------ AGENDA ------------------------------ */
export function AgendaScreen({ onOpen }: { onOpen: () => void }) {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  return (
    <div className="space-y-4 text-slate-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarDays size={18} style={{ color: V }} />
          <div>
            <h3 className="font-display text-base font-semibold text-slate-900">
              Terça-feira, 23 de junho
            </h3>
            <p className="text-[11px] text-slate-400">1 consulta · 5% ocupação</p>
          </div>
        </div>
        <div className="flex gap-1">
          {["Dia", "Semana", "Mês"].map((t, i) => (
            <span
              key={t}
              className={`rounded-md px-2.5 py-1 text-[11px] font-medium ${
                i === 0 ? "text-white" : "bg-slate-100 text-slate-500"
              }`}
              style={i === 0 ? { background: V } : undefined}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-[200px_1fr]">
        {/* coluna esquerda: mini calendário + status + especialistas */}
        <div className="space-y-3">
          <div className={`${cardCls} p-3`}>
            <div className="mb-2 flex items-center justify-between text-[11px] font-medium text-slate-600">
              <ChevronLeft size={13} className="text-slate-400" />
              Junho 2026
              <ChevronRight size={13} className="text-slate-400" />
            </div>
            <div className="grid grid-cols-7 gap-0.5 text-center text-[9px] text-slate-400">
              {["D", "S", "T", "Q", "Q", "S", "S"].map((d, i) => (
                <span key={i}>{d}</span>
              ))}
              {days.map((d) => (
                <span
                  key={d}
                  className={`grid h-5 place-items-center rounded ${
                    d === 23 ? "font-semibold text-white" : "text-slate-500"
                  }`}
                  style={d === 23 ? { background: V } : undefined}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          <div className={`${cardCls} p-3`}>
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Filtro por status
            </div>
            <div className="space-y-1">
              {demoAgendaStatuses.map((s) => (
                <div key={s.label} className="flex items-center gap-2 text-[11px] text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.color }} />
                  {s.label}
                  <span className="ml-auto text-slate-400">{s.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* coluna direita: timeline com agendamento clicável */}
        <div className={`${cardCls} relative overflow-hidden p-0`}>
          <div className="divide-y divide-slate-100">
            {["08:00", "08:30", "09:00", "09:30", "10:00"].map((t) => (
              <div key={t} className="flex min-h-[44px] gap-3 px-3 py-1.5">
                <span className="w-9 pt-1 text-[10px] text-slate-400">{t}</span>
                <div className="flex-1">
                  {t === "08:30" &&
                    demoAgendaSlots.map((a) => (
                      <button
                        key={a.patient}
                        onClick={onOpen}
                        className="flex w-full items-center gap-2 rounded-lg border border-violet-200 bg-violet-50 px-2.5 py-2 text-left transition-colors hover:bg-violet-100"
                      >
                        <div
                          className="grid h-7 w-7 place-items-center rounded-md text-[10px] font-semibold text-white"
                          style={{ background: V }}
                        >
                          {a.initials}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="truncate text-[11px] font-medium text-slate-800">
                            {a.time} · {a.patient}
                          </div>
                          <div className="truncate text-[10px] text-slate-500">
                            {a.spec} · {a.tag}
                          </div>
                        </div>
                        <ChevronRight size={13} className="text-violet-400" />
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-100 p-2 text-center text-[10px] text-slate-400">
            Clique no agendamento para iniciar o atendimento
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------- MURAL DA EQUIPE ------------------------- */
export function MuralScreen() {
  const m = demoMural;
  return (
    <div className="space-y-4 text-slate-700">
      <Head title="Mural da Equipe" sub="Comunicados, marcos e datas especiais." action="Novo comunicado" />
      <div className="grid gap-3 sm:grid-cols-[1.6fr_1fr]">
        <div className={`${cardCls} p-4`}>
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-full text-[10px] font-semibold text-white" style={{ background: V }}>
              GM
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-slate-800">{m.post.author}</div>
              <div className="text-[10px] text-slate-400">{m.post.date}</div>
            </div>
            <span className="rounded-full bg-violet-50 px-2 py-0.5 text-[9px] font-medium text-violet-600">
              Fixado
            </span>
          </div>
          <div className="mt-3 font-display text-base font-semibold text-slate-900">{m.post.title}</div>
          <div className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-500">
            {m.post.badge}
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-slate-600">{m.post.body}</p>
          <div className="mt-3 h-20 rounded-lg bg-gradient-to-br from-emerald-400 via-emerald-300 to-yellow-300" />
          <div className="mt-2 flex gap-1">
            {m.post.reactions.map((r) => (
              <span key={r} className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px]">{r}</span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className={`${cardCls} p-3`}>
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Datas da equipe
            </div>
            {m.dates.map((d, i) => (
              <div key={i} className="flex items-center gap-2 py-1">
                <div className="grid h-6 w-6 place-items-center rounded-full bg-violet-100 text-[9px] font-semibold text-violet-600">
                  {d.initials}
                </div>
                <div>
                  <div className="text-[11px] font-medium text-slate-700">{d.name}</div>
                  <div className="text-[9px] text-slate-400">{d.info}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={`${cardCls} p-3`}>
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Diretório da equipe
            </div>
            {m.team.map((t, i) => (
              <div key={i} className="flex items-center gap-2 py-1">
                <div className="grid h-6 w-6 place-items-center rounded-full bg-slate-100 text-[9px] font-semibold text-slate-500">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[11px] font-medium text-slate-700">{t.name}</div>
                  <div className="text-[9px] text-slate-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- PACIENTES ---------------------------- */
export function PacientesScreen() {
  return (
    <div className="space-y-4 text-slate-700">
      <Head title="Pacientes" sub="1 paciente cadastrado · gestão de convênios e histórico." action="Novo paciente" />
      <StatRow items={demoPatientsStats.map((s) => ({ label: s.label, value: s.value }))} />
      <div className="space-y-2">
        {demoPatientsList.map((p) => (
          <div key={p.name} className={`${cardCls} flex items-center gap-3 p-3.5`}>
            <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-600">
              {p.initials}
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-slate-800">{p.name}</div>
              <div className="text-[11px] text-slate-400">
                CPF {p.doc} · {p.phone}
              </div>
            </div>
            <div className="text-right">
              <span className="rounded-full bg-violet-50 px-2 py-0.5 text-[10px] font-medium text-violet-600">
                {p.tag} · {p.age} anos
              </span>
              <div className="mt-1 text-[10px] text-slate-400">Última: {p.last}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------- ESPECIALISTAS -------------------------- */
export function EspecialistasScreen() {
  return (
    <div className="space-y-4 text-slate-700">
      <Head title="Especialistas" sub="4 profissionais ativos na clínica." action="Novo especialista" />
      <div className="grid gap-2.5 sm:grid-cols-2">
        {demoSpecialistsList.map((s) => (
          <div key={s.name} className={`${cardCls} flex items-center gap-3 p-3.5`}>
            <div
              className="grid h-11 w-11 place-items-center rounded-full text-xs font-semibold text-white"
              style={{ background: s.color }}
            >
              {s.initials}
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-slate-800">{s.name}</div>
              <div className="text-[11px] text-slate-400">
                {s.spec} · {s.crm}
              </div>
            </div>
            <div className="text-right">
              <div className="font-display text-base font-semibold text-slate-900">{s.patients}</div>
              <div className="text-[9px] uppercase text-slate-400">pacientes</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- RELATÓRIOS --------------------------- */
export function RelatoriosScreen() {
  const max = Math.max(...demoReportBars, 1);
  // donut via conic-gradient
  let acc = 0;
  const stops = demoReportDonut
    .map((d) => {
      const from = acc;
      acc += d.value;
      return `${d.color} ${from}% ${acc}%`;
    })
    .join(", ");

  return (
    <div className="space-y-4 text-slate-700">
      <Head title="Relatórios" sub="Visão geral · Semana" />
      <div className="grid gap-3 sm:grid-cols-[1.4fr_1fr]">
        {/* barras */}
        <div className={`${cardCls} p-4`}>
          <div className="mb-3 text-xs font-semibold text-slate-700">Faturamento semanal</div>
          <div className="flex h-28 items-end gap-2">
            {demoReportBars.map((b, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className="w-full rounded-t"
                  style={{ height: `${(b / max) * 100}%`, background: i % 2 ? "#c4b5fd" : V, minHeight: 4 }}
                />
                <span className="text-[8px] text-slate-400">{["S", "T", "Q", "Q", "S", "S", "D"][i]}</span>
              </div>
            ))}
          </div>
        </div>
        {/* donut */}
        <div className={`${cardCls} flex items-center gap-4 p-4`}>
          <div
            className="h-24 w-24 shrink-0 rounded-full"
            style={{ background: `conic-gradient(${stops})` }}
          >
            <div className="grid h-full w-full place-items-center">
              <div className="h-14 w-14 rounded-full bg-white" />
            </div>
          </div>
          <div className="space-y-1">
            {demoReportDonut.map((d) => (
              <div key={d.label} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                <span className="h-2 w-2 rounded-full" style={{ background: d.color }} />
                {d.label} <span className="text-slate-400">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {demoReportKpis.map((k) => (
          <div key={k.label} className={`${cardCls} p-3`}>
            <div className="text-[10px] uppercase tracking-wide text-slate-400">{k.label}</div>
            <div className="mt-0.5 font-display text-lg font-semibold" style={{ color: k.color }}>
              {k.value}
            </div>
            <div className="text-[9px] text-slate-400">{k.goal}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ FINANCEIRO -------------------------- */
export function FinanceiroScreen() {
  return (
    <div className="space-y-4 text-slate-700">
      <Head title="Financeiro" sub="Junho 2026 · fluxo de caixa" />
      <div className="grid gap-2.5 sm:grid-cols-3">
        {demoFinanceCards.map((c) => (
          <div key={c.label} className={`${cardCls} p-3.5`}>
            <div className="text-[10px] uppercase tracking-wide text-slate-400">{c.label}</div>
            <div className="mt-1 font-display text-xl font-semibold text-slate-900">{c.value}</div>
            <div className={`text-[10px] font-medium ${c.up ? "text-emerald-500" : "text-rose-500"}`}>
              {c.trend}
            </div>
          </div>
        ))}
      </div>
      <div className={`${cardCls} p-4`}>
        <div className="mb-2 text-xs font-semibold text-slate-700">Movimentações recentes</div>
        <div className="divide-y divide-slate-100">
          {demoFinanceRows.map((r, i) => (
            <div key={i} className="flex items-center gap-3 py-2">
              <div className={`h-1.5 w-1.5 rounded-full ${r.in ? "bg-emerald-500" : "bg-rose-500"}`} />
              <div className="flex-1">
                <div className="text-[11px] font-medium text-slate-700">{r.desc}</div>
                <div className="text-[9px] text-slate-400">{r.date} · {r.type}</div>
              </div>
              <div className={`text-[11px] font-semibold ${r.in ? "text-emerald-600" : "text-rose-600"}`}>
                {r.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --------------------------- FATURAMENTO TISS ----------------------- */
export function TissScreen() {
  return (
    <div className="space-y-4 text-slate-700">
      <Head title="Faturamento TISS" sub="Guias e convênios" action="Nova guia" />
      <div className={`${cardCls} overflow-hidden`}>
        <div className="grid grid-cols-[1fr_1fr_auto_auto] gap-2 border-b border-slate-100 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
          <span>Guia / Paciente</span><span>Convênio</span><span>Valor</span><span>Status</span>
        </div>
        {demoTissGuides.map((g) => (
          <div key={g.guide} className="grid grid-cols-[1fr_1fr_auto_auto] items-center gap-2 border-b border-slate-50 px-3 py-2.5">
            <div>
              <div className="text-[11px] font-medium text-slate-700">{g.patient}</div>
              <div className="font-mono text-[9px] text-slate-400">{g.guide}</div>
            </div>
            <span className="text-[11px] text-slate-600">{g.plan}</span>
            <span className="text-[11px] font-medium text-slate-700">{g.value}</span>
            <span className="rounded-full px-2 py-0.5 text-[10px] font-medium text-white" style={{ background: g.color }}>
              {g.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------- ESTOQUE ---------------------------- */
export function EstoqueScreen() {
  return (
    <div className="space-y-4 text-slate-700">
      <Head title="Estoque" sub="Controle de insumos" action="Novo item" />
      <div className="space-y-2">
        {demoStockItems.map((it) => (
          <div key={it.name} className={`${cardCls} flex items-center gap-3 p-3`}>
            <div className={`grid h-9 w-9 place-items-center rounded-lg ${it.low ? "bg-rose-50" : "bg-emerald-50"}`}>
              {it.low ? (
                <TriangleAlert size={16} className="text-rose-500" />
              ) : (
                <ShieldCheck size={16} className="text-emerald-500" />
              )}
            </div>
            <div className="flex-1">
              <div className="text-[12px] font-medium text-slate-800">{it.name}</div>
              <div className="text-[10px] text-slate-400">Mínimo: {it.min} {it.unit}</div>
            </div>
            <div className="text-right">
              <div className={`font-display text-base font-semibold ${it.low ? "text-rose-600" : "text-slate-900"}`}>
                {it.qty}
              </div>
              <div className="text-[9px] uppercase text-slate-400">{it.unit}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ COBRANÇAS --------------------------- */
export function CobrancasScreen() {
  return (
    <div className="space-y-4 text-slate-700">
      <Head title="Cobranças" sub="Faturas e pagamentos" />
      <div className="space-y-2">
        {demoBillingRows.map((r) => (
          <div key={r.patient} className={`${cardCls} flex items-center gap-3 p-3.5`}>
            <Wallet size={16} className="text-slate-300" />
            <div className="flex-1">
              <div className="text-[12px] font-medium text-slate-800">{r.patient}</div>
              <div className="text-[10px] text-slate-400">{r.due}</div>
            </div>
            <span className="text-[12px] font-semibold text-slate-700">{r.value}</span>
            <span className="rounded-full px-2 py-0.5 text-[10px] font-medium text-white" style={{ background: r.color }}>
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- LEMBRETES WA ------------------------- */
export function LembretesScreen() {
  return (
    <div className="space-y-4 text-slate-700">
      <Head title="Lembretes WhatsApp" sub="Mensagens automáticas aos pacientes" action="Nova mensagem" />
      <div className="space-y-2">
        {demoWaMessages.map((w, i) => (
          <div key={i} className={`${cardCls} p-3`}>
            <div className="flex items-center gap-2">
              <div className="grid h-7 w-7 place-items-center rounded-full bg-emerald-100">
                <MessageCircle size={13} className="text-emerald-600" />
              </div>
              <span className="text-[11px] font-medium text-slate-700">{w.patient}</span>
              <span className="ml-auto text-[9px] text-slate-400">{w.time}</span>
            </div>
            <div className="mt-2 rounded-lg rounded-tl-sm bg-emerald-50 px-3 py-2 text-[11px] text-slate-700">
              {w.text}
            </div>
            <div className="mt-1 text-right text-[9px] text-emerald-600">✓ {w.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------- LABORATÓRIOS -------------------------- */
export function LaboratoriosScreen() {
  return (
    <div className="space-y-4 text-slate-700">
      <Head title="Laboratórios" sub="Exames e resultados" action="Solicitar exame" />
      <div className="space-y-2">
        {demoLabExams.map((e, i) => (
          <div key={i} className={`${cardCls} flex items-center gap-3 p-3.5`}>
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-violet-50 text-violet-600">
              🧪
            </div>
            <div className="flex-1">
              <div className="text-[12px] font-medium text-slate-800">{e.exam}</div>
              <div className="text-[10px] text-slate-400">{e.patient} · {e.lab}</div>
            </div>
            <span className="rounded-full px-2 py-0.5 text-[10px] font-medium text-white" style={{ background: e.color }}>
              {e.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------- SUPORTE ---------------------------- */
export function SuporteScreen() {
  return (
    <div className="space-y-4 text-slate-700">
      <Head title="Suporte" sub="1 chamado em aberto" action="Novo chamado" />
      <StatRow items={demoSupportStats} />
      <div className="space-y-2">
        {demoSupportTickets.map((t) => (
          <div key={t.id} className={`${cardCls} p-3.5`}>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-slate-400">{t.id} · {t.cat}</span>
              <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-medium text-sky-600">
                {t.status}
              </span>
            </div>
            <div className="mt-1 text-[12px] font-medium text-slate-800">{t.subject}</div>
            <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-400">
              <span className="rounded bg-rose-50 px-1.5 py-0.5 font-medium text-rose-500">
                {t.priority}
              </span>
              Aberto {t.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
