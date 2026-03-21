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
    <section className="container py-14 space-y-12">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">mif</p>
        <h1 className="text-4xl font-semibold leading-tight max-w-3xl">
          {copy.heroTitle}
        </h1>
        <p className="text-muted max-w-2xl">{copy.heroText}</p>
        <div className="flex gap-3 pt-2">
          <Link
            href={`/${locale}/projects`}
            className="rounded-md bg-accent px-4 py-2 text-white"
          >
            {copy.heroPrimary}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="rounded-md border border-amber-300 px-4 py-2"
          >
            {copy.heroSecondary}
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">{copy.projectsTitle}</h2>
        <p className="text-muted">{copy.projectsText}</p>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.slice(0, 4).map((item) => (
            <article key={item.slug} className="rounded-xl bg-card p-5 border border-amber-100">
              <p className="text-xs text-accent mb-2">{item.status[locale]}</p>
              <h3 className="font-medium">{item.title[locale]}</h3>
              <p className="text-sm text-muted mt-2">{item.short[locale]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
