import { notFound } from "next/navigation";
import { Locale, projects } from "@/lib/content";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    notFound();
  }

  return (
    <section className="container py-10 space-y-6">
      <div className="glass rounded-3xl p-8">
        <h1 className="text-3xl font-semibold">{project.title[locale]}</h1>
        <p className="text-muted max-w-3xl mt-3">{project.details[locale]}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="glass rounded-2xl p-5">
          <p className="text-xs text-accent mb-2">
            {locale === "ru" ? "Превью кейса" : "Case preview"}
          </p>
          <div className="case-preview p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-2xl">{project.icon}</span>
              <span className="chip rounded-full px-2 py-1 text-xs">
                {locale === "ru" ? "Case" : "Case"}
              </span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-muted">
                {locale === "ru" ? "ПРОЕКТ" : "PROJECT"}
              </p>
              <p className="font-medium mt-1">{project.title[locale]}</p>
            </div>
          </div>
        </article>

        <article className="glass rounded-2xl p-5 space-y-3">
          <p className="text-xs text-accent mb-1">
            {locale === "ru" ? "Моя роль и ценность" : "My role and value"}
          </p>
          <p className="text-sm text-muted">
            {locale === "ru"
              ? "Закрыл весь fullstack-цикл: архитектура, реализация, тестирование и упаковка кейса."
              : "Handled the fullstack cycle: architecture, implementation, testing and case packaging."}
          </p>
          <p className="text-sm text-muted">
            {locale === "ru"
              ? "Для вас это означает предсказуемый процесс, прозрачную коммуникацию и результат, который можно показывать или запускать."
              : "For you it means predictable delivery, transparent communication and a result ready to showcase or launch."}
          </p>
        </article>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="glass rounded-2xl p-5">
          <p className="text-xs text-accent mb-2">
            {locale === "ru" ? "Проблема" : "Challenge"}
          </p>
          <p className="text-sm text-muted">{project.challenge[locale]}</p>
        </article>
        <article className="glass rounded-2xl p-5">
          <p className="text-xs text-accent mb-2">
            {locale === "ru" ? "Решение" : "Approach"}
          </p>
          <p className="text-sm text-muted">{project.approach[locale]}</p>
        </article>
        <article className="glass rounded-2xl p-5">
          <p className="text-xs text-accent mb-2">
            {locale === "ru" ? "Результат" : "Result"}
          </p>
          <p className="text-sm text-muted">{project.result[locale]}</p>
        </article>
      </div>

      <div className="glass rounded-2xl p-5 space-y-3">
        <h2 className="font-semibold">
          {locale === "ru" ? "Что входит в кейс" : "Deliverables"}
        </h2>
        <ul className="grid gap-2 md:grid-cols-2">
          {project.deliverables[locale].map((item) => (
            <li
              key={item}
              className="rounded-lg border border-amber-200 bg-white/70 px-3 py-2 text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-sm rounded-full border border-amber-300 px-3 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
