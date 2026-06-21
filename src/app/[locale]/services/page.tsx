import { contactTelegram, Locale, t } from "@/lib/content";

function TgIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
      <path d="M21.9 4.3 18.7 19.4c-.24 1.07-.88 1.33-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.62-.2L6.22 13.1l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55l18.95-7.3c.88-.32 1.65.2 1.36 1.57Z" />
    </svg>
  );
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = t[locale];

  const ctaStyle = {
    background: "linear-gradient(135deg, rgba(176,90,47,0.08) 0%, rgba(176,90,47,0.03) 100%)",
    border: "1px solid rgba(176,90,47,0.18)",
  };

  return (
    <div className="container space-y-10 py-10 md:py-16">

      <div className="fade-up glass rounded-3xl p-8 sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          {locale === "ru" ? "Что я делаю" : "What I do"}
        </p>
        <h1 className="mt-3 text-3xl font-bold">{c.servicesTitle}</h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">{c.servicesLead}</p>
      </div>

      <ul className="fade-up grid gap-4 sm:grid-cols-2" style={{ animationDelay: "0.05s" }}>
        {c.servicesList.map((item) => (
          <li key={item.title} className="glass rounded-2xl p-6 flex gap-5 transition hover:-translate-y-0.5 hover:shadow-md">
            <span className="text-3xl leading-none shrink-0 mt-0.5" aria-hidden>{item.icon}</span>
            <div>
              <p className="font-semibold text-base">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="fade-up grid gap-4 md:grid-cols-3" style={{ animationDelay: "0.08s" }}>
        {(["get", "format", "guarantee"] as const).map((key) => (
          <article key={key} className="glass rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              {c.servicesCardTitles[key]}
            </p>
            <p className="text-sm leading-relaxed text-muted">{c.servicesCardTexts[key]}</p>
          </article>
        ))}
      </div>

      <div className="fade-up rounded-2xl p-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between" style={ctaStyle}>
        <p className="font-medium max-w-md">{c.servicesCta}</p>
        <a
          href={contactTelegram.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 min-h-[48px] items-center gap-2 rounded-xl bg-accent px-6 text-sm font-semibold text-white shadow transition hover:opacity-90"
        >
          <TgIcon />
          {c.servicesCtaBtn}
        </a>
      </div>

    </div>
  );
}
