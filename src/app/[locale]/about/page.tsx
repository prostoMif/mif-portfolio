import { contactTelegram, Locale, t } from "@/lib/content";

function TgIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
      <path d="M21.9 4.3 18.7 19.4c-.24 1.07-.88 1.33-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.62-.2L6.22 13.1l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55l18.95-7.3c.88-.32 1.65.2 1.36 1.57Z" />
    </svg>
  );
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = t[locale];

  return (
    <div className="container space-y-8 py-10 md:py-16">

      <div className="fade-up glass rounded-3xl p-8 sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          {locale === "ru" ? "Разработчик" : "Developer"}
        </p>
        <h1 className="mt-3 text-3xl font-bold">{c.aboutTitle}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed font-medium">{c.aboutLead}</p>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">{c.aboutBody}</p>
        <a
          href={contactTelegram.url}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-accent px-6 text-sm font-semibold text-white transition hover:opacity-90"
        >
          <TgIcon />
          {locale === "ru" ? "Написать в Telegram" : "Message on Telegram"}
        </a>
      </div>

      <div className="fade-up grid gap-4 md:grid-cols-3" style={{ animationDelay: "0.06s" }}>
        {c.aboutCards.map((card) => (
          <article key={card.label} className="glass rounded-2xl p-5 transition hover:-translate-y-0.5 hover:shadow-md">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">{card.label}</p>
            <p className="text-sm leading-relaxed text-muted">{card.text}</p>
          </article>
        ))}
      </div>

    </div>
  );
}
