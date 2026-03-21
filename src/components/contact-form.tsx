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
    const formData = new FormData(event.currentTarget);
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
      event.currentTarget.reset();
    } catch {
      setError(copy.form.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-3 rounded-xl bg-card p-5 border border-amber-100"
    >
      <input
        name="name"
        required
        placeholder={copy.form.name}
        className="w-full rounded-md border border-amber-200 bg-white px-3 py-2 outline-none"
      />
      <textarea
        name="message"
        required
        placeholder={copy.form.message}
        rows={5}
        className="w-full rounded-md border border-amber-200 bg-white px-3 py-2 outline-none"
      />
      <button
        disabled={loading}
        className="rounded-md bg-accent px-4 py-2 text-white disabled:opacity-70"
      >
        {copy.form.submit}
      </button>
      {sent && <p className="text-sm text-muted">{copy.form.sent}</p>}
      {error && <p className="text-sm text-red-700">{error}</p>}
    </form>
  );
}
