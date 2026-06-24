"use client";

import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { config } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const { t } = useI18n();
  const { form } = t;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const el = e.currentTarget;
    const data = new FormData(el);
    data.append("access_key", config.web3formsKey);
    data.append("subject", form.subject);
    data.append("from_name", form.fromName);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        el.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-3 text-sm text-platinum-100 outline-none transition-colors placeholder:text-platinum-500 focus:border-copper/50";

  if (status === "ok") {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-copper/20 bg-copper/[0.05] p-8 text-center">
        <div className="text-2xl">✅</div>
        <h3 className="mt-2 font-display text-lg font-semibold text-ice">{form.successTitle}</h3>
        <p className="mt-1 text-sm text-platinum-400">{form.successDesc}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-3 text-left">
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="name" required placeholder={form.namePlaceholder} className={inputCls} />
        <input name="email" type="email" required placeholder={form.emailPlaceholder} className={inputCls} />
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder={form.messagePlaceholder}
        className={`${inputCls} resize-none`}
      />
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> {form.sending}
          </>
        ) : (
          <>
            <Send size={15} /> {form.submit}
          </>
        )}
      </button>

      {status === "error" && (
        <p className="text-center text-xs text-rose-400">{form.error}</p>
      )}
    </form>
  );
}
