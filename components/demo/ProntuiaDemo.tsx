"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  LayoutDashboard,
  Sparkles,
  Stethoscope,
  Video,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import {
  AIScreen,
  DashboardScreen,
  RecordScreen,
  TeleconsultScreen,
} from "./screens";

type ScreenKey = "dashboard" | "record" | "ai" | "tele";

const nav: { key: ScreenKey; label: string; icon: LucideIcon }[] = [
  { key: "dashboard", label: "Painel", icon: LayoutDashboard },
  { key: "record", label: "Prontuário", icon: Stethoscope },
  { key: "ai", label: "Co-Piloto IA", icon: Sparkles },
  { key: "tele", label: "Teleconsulta", icon: Video },
];

const screens: Record<ScreenKey, React.ReactNode> = {
  dashboard: <DashboardScreen />,
  record: <RecordScreen />,
  ai: <AIScreen />,
  tele: <TeleconsultScreen />,
};

export default function ProntuiaDemo() {
  const [active, setActive] = useState<ScreenKey>("dashboard");

  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-graphite-950 shadow-lift">
      {/* Window chrome (estilo macOS) */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="ml-2 flex flex-1 items-center justify-center">
          <div className="flex items-center gap-1.5 rounded-md bg-black/30 px-3 py-1 text-[10px] text-platinum-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
            app.prontuia.com.br
          </div>
        </div>
        <span className="hidden text-[10px] font-medium text-platinum-500 sm:block">
          Demonstração
        </span>
      </div>

      <div className="flex min-h-[420px]">
        {/* Sidebar */}
        <aside className="flex w-14 flex-col items-center gap-1 border-r border-white/[0.06] bg-white/[0.015] py-3 sm:w-44 sm:items-stretch sm:px-2.5">
          <div className="mb-3 flex items-center gap-2 px-1 sm:px-2">
            <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-copper/15">
              <Stethoscope size={15} className="text-copper-soft" />
            </div>
            <span className="hidden font-display text-sm font-semibold text-white sm:block">
              ProntuIA
            </span>
          </div>

          {nav.map((n) => {
            const isActive = active === n.key;
            return (
              <button
                key={n.key}
                onClick={() => setActive(n.key)}
                className={`group flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors ${
                  isActive
                    ? "bg-copper/15 text-copper-soft"
                    : "text-platinum-400 hover:bg-white/[0.04] hover:text-platinum-100"
                }`}
              >
                <n.icon size={17} className="shrink-0" />
                <span className="hidden text-xs font-medium sm:block">
                  {n.label}
                </span>
              </button>
            );
          })}

          <div className="mt-auto hidden items-center gap-2 rounded-lg px-2.5 py-2 sm:flex">
            <div className="grid h-7 w-7 place-items-center rounded-full bg-white/[0.06] text-[10px] font-semibold text-platinum-200">
              MV
            </div>
            <div className="leading-tight">
              <div className="text-[11px] font-medium text-platinum-200">
                Dra. Marina
              </div>
              <div className="text-[9px] text-platinum-500">Clínica geral</div>
            </div>
          </div>
        </aside>

        {/* Conteúdo da tela ativa */}
        <main className="flex-1 overflow-hidden p-4 sm:p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {screens[active]}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Barra inferior: dica de interação */}
      <div className="flex items-center justify-center gap-2 border-t border-white/[0.06] bg-white/[0.015] py-2 text-[10px] text-platinum-500">
        <CalendarDays size={11} className="text-copper-soft" />
        Demo interativo · navegue pelos módulos e experimente o Co-Piloto de IA
      </div>
    </div>
  );
}
