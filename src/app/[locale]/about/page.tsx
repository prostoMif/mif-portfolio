import { Locale, t } from "@/lib/content";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = t[locale];

  return (
    <section className="container py-10 space-y-6">
      <div className="glass rounded-3xl p-8">
        <h1 className="text-3xl font-semibold">{copy.aboutTitle}</h1>
        <p className="text-muted max-w-3xl mt-3">{copy.aboutText}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="glass rounded-2xl p-5">
          <p className="text-xs text-accent mb-2">
            {locale === "ru" ? "Подход" : "Approach"}
          </p>
          <p className="text-sm text-muted">
            {locale === "ru"
              ? "Сначала проясняю задачу и критерии результата, затем предлагаю рабочую архитектуру и план."
              : "I clarify the goal and success criteria first, then suggest practical architecture and delivery plan."}
          </p>
        </article>
        <article className="glass rounded-2xl p-5">
          <p className="text-xs text-accent mb-2">
            {locale === "ru" ? "Фокус" : "Focus"}
          </p>
          <p className="text-sm text-muted">
            {locale === "ru"
              ? "Делаю интерфейс и backend как единую систему: скорость, стабильность и удобство поддержки."
              : "I build interface and backend as one system: speed, stability and maintainability."}
          </p>
        </article>
        <article className="glass rounded-2xl p-5">
          <p className="text-xs text-accent mb-2">
            {locale === "ru" ? "Коммуникация" : "Communication"}
          </p>
          <p className="text-sm text-muted">
            {locale === "ru"
              ? "Работаю прозрачно: понятные этапы, короткие отчеты и быстрые правки по обратной связи."
              : "I keep delivery transparent: clear milestones, short updates and fast iterations based on feedback."}
          </p>
        </article>
      </div>
    </section>
  );
}
