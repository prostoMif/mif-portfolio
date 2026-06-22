"use client";
import { FormEvent, useState } from "react";
import { Locale, t } from "@/lib/content";

export function ContactForm({ locale }: { locale: Locale }) {
  const c = t[locale];
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true); setSent(false); setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fd.get("name"), message: fd.get("message") }),
      });
      if (!res.ok) { setError(c.form.error); return; }
      setSent(true);
      (e.target as HTMLFormElement).reset();
    } catch { setError(c.form.error); }
    finally { setLoading(false); }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3 glass p-6">
      <input name="name" required placeholder={c.form.name}
        className="w-full min-h-[44px] rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-[#f0efe8] placeholder-[#8a8a9a] outline-none focus:border-[#e8622a]/60 focus:ring-2 focus:ring-[#e8622a]/20 transition"/>
      <textarea name="message" required placeholder={c.form.message} rows={5}
        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-[#f0efe8] placeholder-[#8a8a9a] outline-none focus:border-[#e8622a]/60 focus:ring-2 focus:ring-[#e8622a]/20 transition resize-none"/>
      <button type="submit" disabled={loading}
        className="btn-primary disabled:opacity-60">
        {loading ? c.form.sending : c.form.submit}
      </button>
      {sent && <p className="text-sm text-[#e8622a]">{c.form.sent}</p>}
      {error && <p className="text-sm text-red-400">{error}</p>}
    </form>
  );
}
