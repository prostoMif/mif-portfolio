import { ContactForm } from "@/components/contact-form";
import { CONTACT_FORM_ENABLED, contactTelegram, Locale, t } from "@/lib/content";

function TgIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
      <path d="M21.9 4.3 18.7 19.4c-.24 1.07-.88 1.33-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.62-.2L6.22 13.1l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55l18.95-7.3c.88-.32 1.65.2 1.36 1.57Z" />
    </svg>
  );
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = t[locale];

  return (
    <div className="container max-w-2xl space-y-6 py-10 md:py-16">

      <div className="fade-up">
        <h1 className="text-3xl font-bold">{c.contactTitle}</h1>
        <p className="mt-3 leading-relaxed text-muted">
          {CONTACT_FORM_ENABLED ? c.contactTextWithForm : c.contactText}
        </p>
      </div>

      {/* Telegram — главная кнопка */}
      <a
        href={contactTelegram.url}
        target="_blank"
        rel="noreferrer"
        className="fade-up group glass flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-0.5 hover:shadow-md"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
          <TgIcon />
        </span>
        <div className="min-w-0">
          <p className="font-semibold">Telegram</p>
          <p className="text-sm text-accent">@{contactTelegram.username}</p>
          <p className="mt-0.5 text-sm text-muted">{c.telegramCardHint}</p>
        </div>
        <span className="ml-auto hidden text-sm text-muted transition group-hover:text-accent sm:inline">
          {locale === "ru" ? "Открыть →" : "Open →"}
        </span>
      </a>

      {CONTACT_FORM_ENABLED && (
        <div className="fade-up space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted">{c.form.heading}</p>
          <ContactForm locale={locale} />
        </div>
      )}

    </div>
  );
}
