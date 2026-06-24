"use client";

import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { config } from "@/lib/data";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", config.web3formsKey);
    data.append("subject", "Novo contato pelo portfólio");
    data.append("from_name", "Portfólio Guilherme Mazzo");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        form.reset();
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
        <h3 className="mt-2 font-display text-lg font-semibold text-ice">
          Mensagem enviada!
        </h3>
        <p className="mt-1 text-sm text-platinum-400">
          Obrigado pelo contato. Retorno o mais rápido possível.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-3 text-left">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Seu nome"
          className={inputCls}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Seu e-mail"
          className={inputCls}
        />
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Conte sobre o projeto ou a oportunidade…"
        className={`${inputCls} resize-none`}
      />
      {/* honeypot anti-spam */}
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
            <Loader2 size={16} className="animate-spin" /> Enviando…
          </>
        ) : (
          <>
            <Send size={15} /> Enviar mensagem
          </>
        )}
      </button>

      {status === "error" && (
        <p className="text-center text-xs text-rose-400">
          Não foi possível enviar agora. Tente outro canal abaixo.
        </p>
      )}
    </form>
  );
}
