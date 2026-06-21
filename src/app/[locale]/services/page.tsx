import { Locale, t } from "@/lib/content";

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const copy = t[locale];

  return (
    <section className="container space-y-8 py-10 md:py-14">

      <div className="glass fade-up rounded-3xl p-7 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
          {locale === "ru" ? "Что я делаю" : "What I do"}
        </p>
        <h1 className="text-3xl font-bold">{copy.servicesTitle}</h1>
        <p className="mt-3 max-w-2xl text-muted leading-relaxed">{copy.servicesLead}</p>
      </div>

      {/* Service cards */}
      <ul className="fade-up grid gap-4 sm:grid-cols-2" style={{ animationDelay: "0.06s" }}>
        {copy.servicesList.map((item) => (
          <li key={item.title} className="glass rounded-2xl p-6 flex gap-4 transition hover:-translate-y-0.5 hover:shadow-md">
            <span className="text-3xl leading-none mt-0.5" aria-hidden>{item.icon}</span>
            <div>
              <p className="font-semibold text-base">{item.title}</p>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Bottom info cards */}
      <div className="fade-up grid gap-4 md:grid-cols-3" style={{ animationDelay: "0.12s" }}>
        {(["get", "format", "stack"] as const).map((key) => (
          <article key={key} className="glass rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              {copy.servicesCardTitles[key]}
            </p>
            <p className="text-sm text-muted leading-relaxed">
              {copy.servicesCardTexts[key]}
            </p>
          </article>
        ))}
      </div>

    </section>
  );
}
