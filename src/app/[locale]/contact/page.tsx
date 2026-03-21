import { ContactForm } from "@/components/contact-form";
import { Locale, t } from "@/lib/content";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = t[locale];

  return (
    <section className="container py-14 space-y-6">
      <h1 className="text-3xl font-semibold">{copy.contactTitle}</h1>
      <p className="text-muted">{copy.contactText}</p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-card p-5 border border-amber-100 space-y-3">
          <p className="text-sm text-muted">Telegram</p>
          <a href="https://t.me/your_username" className="underline" target="_blank" rel="noreferrer">
            @your_username
          </a>
        </div>
        <ContactForm locale={locale} />
      </div>
    </section>
  );
}
