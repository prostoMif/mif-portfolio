import { Locale, t } from "@/lib/content";

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const copy = t[locale];

  return (
    <section className="container space-y-8 py-10 md:py-14">

      <div className="glass fade-up rounded-3xl p-7 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
          {locale === "ru" ? "Разработчик" : "Developer"}
        </p>
        <h1 className="text-3xl font-bold">{copy.aboutTitle}</h1>
        <p className="mt-3 max-w-2xl text-muted leading-relaxed">{copy.aboutText}</p>
      </div>

      <div className="fade-up grid gap-4 md:grid-cols-3" style={{ animationDelay: "0.07s" }}>
        {copy.aboutCards.map((card) => (
          <article key={card.label} className="glass rounded-2xl p-5 transition hover:-translate-y-0.5 hover:shadow-md">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              {card.label}
            </p>
            <p className="text-sm text-muted leading-relaxed">{card.text}</p>
          </article>
        ))}
      </div>

    </section>
  );
}
