"use client";

import { FormEvent, useState } from "react";
import { Locale, t } from "@/lib/content";

export function ContactForm({ locale }: { locale: Locale }) {
  const copy = t[locale];
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setLoading(true);
    setSent(false);
    setError(null);

    const payload = {
      name: formData.get("name"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setError(copy.form.error);
        return;
      }

      setSent(true);
      form.reset();
    } catch {
      setError(copy.form.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-3 rounded-2xl border border-amber-100 bg-card p-5"
    >
      <input
        name="name"
        required
        placeholder={copy.form.name}
        className="min-h-[44px] w-full rounded-xl border border-amber-200 bg-white px-3 py-2 outline-none focus:border-accent focus:ring-2 focus:ring-accent-soft"
      />
      <textarea
        name="message"
        required
        placeholder={copy.form.message}
        rows={5}
        className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2 outline-none focus:border-accent focus:ring-2 focus:ring-accent-soft"
      />
      <button
        type="submit"
        disabled={loading}
        className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-accent px-5 font-medium text-white transition hover:opacity-90 disabled:opacity-70"
      >
        {loading ? copy.form.sending : copy.form.submit}
      </button>
      {sent && <p className="text-sm text-accent">{copy.form.sent}</p>}
      {error && <p className="text-sm text-red-700">{error}</p>}
    </form>
  );
}
