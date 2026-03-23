import Link from "next/link";
import { Locale, projects, t } from "@/lib/content";

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = t[locale];

  return (
    <section className="container py-10 space-y-14">
      <div className="glass fade-up rounded-3xl p-8 md:p-12">
        <p className="text-sm uppercase tracking-[0.22em] text-accent">mif</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight max-w-3xl md:text-5xl">
          {copy.heroTitle}
        </h1>
        <p className="text-muted max-w-2xl mt-4 text-[1.02rem]">{copy.heroText}</p>
        <div className="flex flex-wrap gap-3 pt-6">
          <Link
            href={`/${locale}/projects`}
            className="rounded-xl bg-accent px-5 py-2.5 text-white transition hover:opacity-90"
          >
            {copy.heroPrimary}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="rounded-xl border border-amber-300 px-5 py-2.5 transition hover:bg-accent-soft"
          >
            {copy.heroSecondary}
          </Link>
        </div>
      </div>

      <div className="space-y-5 fade-up" style={{ animationDelay: "0.08s" }}>
        <h2 className="text-2xl font-semibold">{copy.projectsTitle}</h2>
        <p className="text-muted">{copy.projectsText}</p>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.slice(0, 4).map((item) => (
            <article
              key={item.slug}
              className="glass rounded-2xl p-5 transition hover:-translate-y-0.5"
              style={{ borderColor: `${item.accent}55` }}
            >
              <p className="mb-2 text-lg" aria-hidden>
                {item.icon}
              </p>
              <p className="mb-2 inline-flex rounded-full chip px-2.5 py-1 text-xs">
                {item.status[locale]}
              </p>
              <h3 className="font-medium text-lg">{item.title[locale]}</h3>
              <p className="text-sm text-muted mt-2">{item.short[locale]}</p>
              <p className="text-sm mt-2">
                <span className="text-accent">
                  {locale === "ru" ? "Польза: " : "Value: "}
                </span>
                <span className="text-muted">{item.result[locale]}</span>
              </p>
              <Link
                href={`/${locale}/projects/${item.slug}`}
                className="inline-block mt-4 text-sm underline underline-offset-4"
              >
                {locale === "ru" ? "Смотреть кейс" : "View case"}
              </Link>
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((step) => (
          <article key={step} className="glass rounded-2xl p-5">
            <p className="text-xs text-accent mb-2">
              {locale === "ru" ? `Этап 0${step}` : `Step 0${step}`}
            </p>
            <h3 className="font-medium">
              {locale === "ru"
                ? step === 1
                  ? "Бриф и структура"
                  : step === 2
                    ? "Дизайн и реализация"
                    : "Тест и запуск"
                : step === 1
                  ? "Brief and structure"
                  : step === 2
                    ? "Design and implementation"
                    : "QA and launch"}
            </h3>
            <p className="text-sm text-muted mt-2">
              {locale === "ru"
                ? step === 1
                  ? "Определяю задачу, стек и карту страниц."
                  : step === 2
                    ? "Собираю интерфейс, API и бизнес-логику."
                    : "Фиксирую баги и довожу до состояния demo/production."
                : step === 1
                  ? "I define scope, stack and page map."
                  : step === 2
                    ? "I build UI, API and business logic."
                    : "I fix issues and ship demo/production-ready results."}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
