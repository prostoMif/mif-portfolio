import { Locale, t } from "@/lib/content";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = t[locale];

  return (
    <section className="container py-10 space-y-6">
      <div className="glass rounded-3xl p-8">
        <h1 className="text-3xl font-semibold">{copy.servicesTitle}</h1>
        <p className="text-muted mt-3 max-w-3xl">
          {locale === "ru"
            ? "Помогаю закрывать digital-задачи под ключ: от структуры до рабочего результата. Подходит для фриланс-заказов, запусков MVP и обновления существующих продуктов."
            : "I help deliver digital tasks end-to-end: from structure to working result. Fits freelance requests, MVP launches and product upgrades."}
        </p>
      </div>

      <ul className="grid gap-3 md:grid-cols-2">
        {copy.servicesList.map((item) => (
          <li key={item} className="glass rounded-xl p-4">
            <p className="font-medium">{item}</p>
            <p className="text-sm text-muted mt-2">
              {locale === "ru"
                ? "С понятным объемом работ, сроками и регулярным апдейтом по процессу."
                : "With clear scope, timeline and regular progress updates."}
            </p>
          </li>
        ))}
      </ul>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="glass rounded-2xl p-5">
          <p className="text-xs text-accent mb-2">
            {locale === "ru" ? "Что получаете вы" : "What you get"}
          </p>
          <p className="text-sm text-muted">
            {locale === "ru"
              ? "Вы получаете рабочий результат, который можно сразу использовать: сайт, бот, интеграцию или сервисный модуль."
              : "You get a practical result ready to use: website, bot, integration or service module."}
          </p>
        </article>
        <article className="glass rounded-2xl p-5">
          <p className="text-xs text-accent mb-2">
            {locale === "ru" ? "Формат работы" : "Work format"}
          </p>
          <p className="text-sm text-muted">
            {locale === "ru"
              ? "Сначала я уточняю задачу и приоритеты, затем фиксирую план и двигаюсь короткими итерациями."
              : "I align on goals and priorities first, then execute in short iterations with clear checkpoints."}
          </p>
        </article>
        <article className="glass rounded-2xl p-5">
          <p className="text-xs text-accent mb-2">
            {locale === "ru" ? "Технологический стек" : "Tech stack"}
          </p>
          <p className="text-sm text-muted">
            {locale === "ru"
              ? "Frontend и backend решения, API-интеграции, базы данных и автоматизация процессов."
              : "Frontend and backend solutions, API integrations, databases and workflow automation."}
          </p>
        </article>
      </div>
    </section>
  );
}
