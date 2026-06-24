"use client";

import { ArrowLeft, Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <div className="no-print fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2">
      <a
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-5 py-3 text-sm font-medium text-slate-600 shadow-lg backdrop-blur transition-colors hover:text-slate-900"
      >
        <ArrowLeft size={16} />
        Voltar ao site
      </a>
      <button
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
        style={{ background: "#7c5cff" }}
      >
        <Printer size={16} />
        Baixar / Imprimir PDF
      </button>
    </div>
  );
}
