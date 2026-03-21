import { ContactForm } from "@/components/contact-form";
import {
  CONTACT_FORM_ENABLED,
  contactTelegram,
  Locale,
  t,
} from "@/lib/content";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = t[locale];
  const lead = CONTACT_FORM_ENABLED
    ? copy.contactTextWithForm
    : copy.contactText;

  return (
    <section className="container py-14 space-y-6">
      <h1 className="text-3xl font-semibold">{copy.contactTitle}</h1>
      <p className="text-muted">{lead}</p>
      <div
        className={
          CONTACT_FORM_ENABLED
            ? "grid gap-6 md:grid-cols-2"
            : "max-w-md"
        }
      >
        <div className="rounded-xl bg-card p-5 border border-amber-100 space-y-3">
          <p className="text-sm text-muted">Telegram</p>
          <a
            href={contactTelegram.url}
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            @{contactTelegram.username}
          </a>
        </div>
        {CONTACT_FORM_ENABLED ? <ContactForm locale={locale} /> : null}
      </div>
    </section>
  );
}
