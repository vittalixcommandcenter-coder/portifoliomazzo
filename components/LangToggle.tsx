"use client";

import { useI18n } from "@/lib/i18n";

export default function LangToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <button
      aria-label="Switch language"
      onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
      className="grid h-9 w-9 place-items-center rounded-full text-[11px] font-semibold text-platinum-300 transition-colors hover:bg-white/[0.06] hover:text-ice"
    >
      {locale === "pt" ? "EN" : "PT"}
    </button>
  );
}
