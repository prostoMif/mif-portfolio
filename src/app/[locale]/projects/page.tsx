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
    <section className="container py-14 space-y-6">
      <h1 className="text-3xl font-semibold">{copy.nav.projects}</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((item) => (
          <article key={item.slug} className="rounded-xl bg-card p-5 border border-amber-100">
            <p className="text-xs text-accent mb-2">{item.status}</p>
            <h2 className="font-medium">{item.title[locale]}</h2>
            <p className="text-sm text-muted mt-2">{item.short[locale]}</p>
            <Link
              href={`/${locale}/projects/${item.slug}`}
              className="inline-block mt-4 text-sm underline"
            >
              Details
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
