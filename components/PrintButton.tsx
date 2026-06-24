"use client";

import { ArrowLeft, Printer } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function PrintButton() {
  const { t } = useI18n();
  const { print } = t;

  return (
    <div className="no-print fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 sm:bottom-6">
      <a
        href="/"
        className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/90 px-4 py-2.5 text-xs font-medium text-slate-600 shadow-lg backdrop-blur transition-colors hover:text-slate-900 sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
      >
        <ArrowLeft size={14} className="sm:hidden" />
        <ArrowLeft size={16} className="hidden sm:block" />
        <span className="hidden sm:inline">{print.back}</span>
        <span className="sm:hidden">{print.backShort}</span>
      </a>
      <button
        onClick={() => window.print()}
        className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-[1.03] sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
        style={{ background: "#7c5cff" }}
      >
        <Printer size={14} className="sm:hidden" />
        <Printer size={16} className="hidden sm:block" />
        <span className="hidden sm:inline">{print.print}</span>
        <span className="sm:hidden">{print.printShort}</span>
      </button>
    </div>
  );
}
