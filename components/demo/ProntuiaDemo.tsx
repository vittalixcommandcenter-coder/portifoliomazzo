"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bell, BookOpen, Clock, Sun } from "lucide-react";
import { useState } from "react";
import { demoSidebar } from "@/lib/demoData";
import {
  ConsultScreen,
  DashboardScreen,
  SigningScreen,
  VittalisScreen,
} from "./screens";

const V = "#7c5cff";

type ScreenKey = "Início" | "Consulta" | "Assinatura" | "Vittalis IA";

/* Mapa: rótulo da sidebar -> tela renderizada.
   Itens sem tela própria apenas selecionam visualmente (demo). */
const screenFor: Partial<Record<string, ScreenKey>> = {
  Início: "Início",
  "Vittalis IA": "Vittalis IA",
  Assinatura: "Assinatura",
};

const screens: Record<ScreenKey, React.ReactNode> = {
  Início: <DashboardScreen />,
  Consulta: <ConsultScreen />,
  Assinatura: <SigningScreen />,
  "Vittalis IA": <VittalisScreen />,
};

const tabs: { key: ScreenKey; sidebarLabel: string }[] = [
  { key: "Início", sidebarLabel: "Início" },
  { key: "Consulta", sidebarLabel: "Agenda" },
  { key: "Assinatura", sidebarLabel: "Assinatura" },
  { key: "Vittalis IA", sidebarLabel: "Vittalis IA" },
];

export default function ProntuiaDemo() {
  const [active, setActive] = useState<ScreenKey>("Início");
  const activeSidebar = tabs.find((t) => t.key === active)?.sidebarLabel;

  return (
    <div className="overflow-hidden rounded-2xl border border-black/20 bg-[#f6f7fb] shadow-lift">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-black/10 bg-[#eef0f4] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex items-center gap-1.5 rounded-md bg-white/70 px-3 py-1 text-[10px] text-slate-500 ring-1 ring-black/5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          app.prontuia.com.br
        </div>
        <span className="hidden text-[10px] font-medium text-slate-400 sm:block">Demo</span>
      </div>

      <div className="flex min-h-[460px]">
        {/* Sidebar (clara, estilo real) */}
        <aside className="flex w-14 flex-col border-r border-black/[0.06] bg-white py-3 sm:w-48 sm:px-2.5">
          {/* perfil */}
          <div className="mb-3 flex items-center gap-2 px-1 sm:px-1.5">
            <div
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-semibold text-white"
              style={{ background: "linear-gradient(135deg,#a78bfa,#7c5cff)" }}
            >
              G
            </div>
            <div className="hidden leading-tight sm:block">
              <div className="text-[11px] font-semibold text-slate-800">Guilherme Ma…</div>
              <div className="text-[9px] text-slate-400">Administrador · Clín…</div>
            </div>
          </div>

          <div className="flex-1 space-y-0.5 overflow-hidden">
            {demoSidebar.map((item) => {
              const screenKey = screenFor[item.label];
              const isActive = item.label === activeSidebar;
              const clickable = !!screenKey || item.label === "Agenda";
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    const tab = tabs.find((t) => t.sidebarLabel === item.label);
                    if (tab) setActive(tab.key);
                  }}
                  className={`group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-left transition-colors ${
                    isActive
                      ? "font-medium"
                      : "text-slate-500 hover:bg-slate-50"
                  } ${clickable ? "" : "cursor-default"}`}
                  style={
                    isActive
                      ? { background: "rgba(124,92,255,0.1)", color: V }
                      : undefined
                  }
                >
                  <item.icon size={16} className="shrink-0" />
                  <span className="hidden flex-1 truncate text-[11.5px] sm:block">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="hidden rounded-full bg-slate-100 px-1.5 text-[9px] text-slate-500 sm:block">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-2 hidden px-1 sm:block">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-[9px] font-semibold text-slate-500">
              MODO DEV
            </span>
          </div>
        </aside>

        {/* Área direita: header + conteúdo */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* header */}
          <div className="flex items-center justify-end gap-3 border-b border-black/[0.05] bg-white/60 px-5 py-2.5 text-slate-400">
            <span className="flex items-center gap-1 text-[10px] font-medium">
              <Clock size={11} style={{ color: V }} /> 20:45 · 23/06/2026
            </span>
            <Sun size={14} />
            <span className="relative">
              <Bell size={14} />
              <span className="absolute -right-1 -top-1 grid h-3 w-3 place-items-center rounded-full bg-amber-400 text-[7px] font-bold text-white">
                4
              </span>
            </span>
            <BookOpen size={14} />
          </div>

          {/* conteúdo da tela ativa */}
          <main className="flex-1 overflow-hidden p-4 sm:p-5">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                {screens[active]}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* dica */}
      <div className="flex items-center justify-center gap-2 border-t border-black/[0.06] bg-white py-2 text-[10px] text-slate-400">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: V }} />
        Demo interativo · navegue pelos módulos e rode a IA na consulta e no Vittalis
      </div>
    </div>
  );
}
