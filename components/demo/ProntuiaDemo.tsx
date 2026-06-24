"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bell, BookOpen, Clock, PanelLeft, Search, Sun } from "lucide-react";
import { useState } from "react";
import { demoSidebar } from "@/lib/demoData";
import {
  ConsultScreen,
  DashboardScreen,
  SigningScreen,
  TeleconsultScreen,
  VittalisScreen,
} from "./screens";
import {
  AgendaScreen,
  CobrancasScreen,
  EspecialistasScreen,
  EstoqueScreen,
  FinanceiroScreen,
  LaboratoriosScreen,
  LembretesScreen,
  MuralScreen,
  PacientesScreen,
  RelatoriosScreen,
  SuporteScreen,
  TissScreen,
} from "./screensExtra";

const V = "#7c5cff";

export default function ProntuiaDemo() {
  // A tela ativa é o rótulo da sidebar; "Consulta" é um estado especial
  // alcançado ao abrir um agendamento dentro da Agenda.
  const [active, setActive] = useState<string>("Início");

  const renderScreen = () => {
    switch (active) {
      case "Início":
        return <DashboardScreen />;
      case "Mural da Equipe":
        return <MuralScreen />;
      case "Agenda":
        return <AgendaScreen onOpen={() => setActive("Consulta")} />;
      case "Consulta":
        return <ConsultScreen onTelemedicine={() => setActive("Teleconsulta")} />;
      case "Teleconsulta":
        return <TeleconsultScreen onBack={() => setActive("Consulta")} />;
      case "Pacientes":
        return <PacientesScreen />;
      case "Especialistas":
        return <EspecialistasScreen />;
      case "Relatórios":
        return <RelatoriosScreen />;
      case "Vittalis IA":
        return <VittalisScreen />;
      case "Faturamento TISS":
        return <TissScreen />;
      case "Financeiro":
        return <FinanceiroScreen />;
      case "Estoque":
        return <EstoqueScreen />;
      case "Cobranças":
        return <CobrancasScreen />;
      case "Lembretes WA":
        return <LembretesScreen />;
      case "Laboratórios":
        return <LaboratoriosScreen />;
      case "Assinatura":
        return <SigningScreen />;
      case "Suporte":
        return <SuporteScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  // Consulta/Teleconsulta fazem parte do fluxo de atendimento -> destacam "Agenda"
  const activeSidebar =
    active === "Consulta" || active === "Teleconsulta" ? "Agenda" : active;

  return (
    <div className="overflow-hidden rounded-2xl border border-black/15 bg-[#f7f8fb] shadow-lift">
      {/* Window chrome (estilo macOS) */}
      <div className="flex items-center gap-2 border-b border-black/[0.07] bg-[#edeef2]/80 px-4 py-2.5 backdrop-blur">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-[10px] text-slate-500 ring-1 ring-black/5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          app.prontuia.com.br
        </div>
        <span className="w-9" />
      </div>

      <div className="flex min-h-[480px]">
        {/* Sidebar (clara, estilo Apple) */}
        <aside className="flex w-14 flex-col border-r border-black/[0.06] bg-white/90 py-3 backdrop-blur sm:w-[200px] sm:px-2.5">
          {/* perfil */}
          <div className="mb-3 flex items-center gap-2 px-1 sm:px-1.5">
            <div
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-semibold text-white shadow-sm"
              style={{ background: "linear-gradient(135deg,#a78bfa,#7c5cff)" }}
            >
              G
            </div>
            <div className="hidden min-w-0 leading-tight sm:block">
              <div className="truncate text-[11.5px] font-semibold text-slate-800">
                Guilherme Mazzo
              </div>
              <div className="truncate text-[9px] text-slate-400">
                Administrador · Clínica
              </div>
            </div>
            <PanelLeft size={13} className="ml-auto hidden text-slate-300 sm:block" />
          </div>

          <div className="flex-1 space-y-[3px] overflow-y-auto pr-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {demoSidebar.map((item) => {
              const isActive = item.label === activeSidebar;
              return (
                <button
                  key={item.label}
                  onClick={() => setActive(item.label)}
                  className={`group flex w-full items-center gap-2.5 rounded-[10px] px-2.5 py-[7px] text-left transition-all ${
                    isActive ? "font-medium shadow-sm" : "text-slate-500 hover:bg-slate-50"
                  }`}
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
                    <span
                      className="hidden rounded-full px-1.5 text-[9px] font-medium text-white sm:block"
                      style={{ background: V }}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Área direita */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* top bar fiel ao real */}
          <div className="flex items-center gap-3 border-b border-black/[0.05] bg-white/70 px-4 py-2.5 backdrop-blur">
            <div className="hidden flex-1 items-center gap-1.5 rounded-lg bg-slate-100/80 px-2.5 py-1.5 text-[10px] text-slate-400 sm:flex">
              <Search size={11} />
              Buscar paciente, agenda, documento…
            </div>
            <span className="ml-auto flex items-center gap-1 text-[10px] font-medium text-slate-400">
              <Clock size={11} style={{ color: V }} /> 20:45 · 23/06/2026
            </span>
            <button className="grid h-7 w-7 place-items-center rounded-full text-slate-400 transition-colors hover:bg-slate-100">
              <Sun size={14} />
            </button>
            <button className="relative grid h-7 w-7 place-items-center rounded-full text-slate-400 transition-colors hover:bg-slate-100">
              <Bell size={14} />
              <span className="absolute right-0.5 top-0.5 grid h-3 w-3 place-items-center rounded-full bg-amber-400 text-[7px] font-bold text-white">
                4
              </span>
            </button>
            <button className="grid h-7 w-7 place-items-center rounded-full text-slate-400 transition-colors hover:bg-slate-100">
              <BookOpen size={14} />
            </button>
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
                {renderScreen()}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

      {/* rodapé com dica */}
      <div className="flex items-center justify-center gap-2 border-t border-black/[0.06] bg-white py-2 text-[10px] text-slate-400">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: V }} />
        Demo interativo · explore os 15 módulos, abra um agendamento e use o microfone na consulta
      </div>
    </div>
  );
}
