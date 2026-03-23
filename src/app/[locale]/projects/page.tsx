import Link from "next/link";
import { Locale, projects, t } from "@/lib/content";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = t[locale];

  return (
    <section className="container py-10 space-y-6">
      <div className="glass fade-up rounded-3xl p-8">
        <h1 className="text-3xl font-semibold">{copy.nav.projects}</h1>
        <p className="text-muted mt-2">
          {locale === "ru"
            ? "Собрал кейсы по одному принципу: контекст, стек, итог и статус."
            : "All cases follow one format: context, stack, result and status."}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 fade-up" style={{ animationDelay: "0.08s" }}>
        {projects.map((item) => (
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
            <h2 className="font-medium text-lg">{item.title[locale]}</h2>
            <p className="text-sm text-muted mt-2">{item.short[locale]}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.stack.slice(0, 3).map((tech) => (
                <span
                  key={`${item.slug}-${tech}`}
                  className="rounded-full border border-amber-300 px-2 py-0.5 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href={`/${locale}/projects/${item.slug}`}
              className="inline-block mt-4 text-sm underline underline-offset-4"
            >
              {locale === "ru" ? "Подробнее" : "Details"}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
