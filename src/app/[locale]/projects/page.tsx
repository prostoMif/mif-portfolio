import { Locale, projects, t } from "@/lib/content";
import { ProjectCard } from "@/components/project-card";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = t[locale];

  return (
    <section className="container space-y-6 py-10">
      <div className="glass fade-up rounded-3xl p-6 sm:p-8">
        <h1 className="text-3xl font-semibold">{copy.nav.projects}</h1>
        <p className="mt-2 text-muted">
          {locale === "ru"
            ? "Собрал кейсы по одному принципу: контекст, стек, итог и статус."
            : "All cases follow one format: context, stack, result and status."}
        </p>
      </div>
      <div
        className="fade-up grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        style={{ animationDelay: "0.08s" }}
      >
        {projects.map((item) => (
          <ProjectCard key={item.slug} project={item} locale={locale} />
        ))}
      </div>
    </section>
  );
}
