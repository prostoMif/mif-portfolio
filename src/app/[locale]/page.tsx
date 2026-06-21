import Link from "next/link";
import { contactTelegram, Locale, projects, skills, t } from "@/lib/content";
import { ProjectCard } from "@/components/project-card";
import { TechBadge } from "@/components/tech-badge";

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M21.9 4.3 18.7 19.4c-.24 1.07-.88 1.33-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.62-.2L6.22 13.1l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55l18.95-7.3c.88-.32 1.65.2 1.36 1.57Z" />
    </svg>
  );
}

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = t[locale];
  const featured = projects.slice(0, 3);

  return (
    <section className="container space-y-16 py-10 md:py-14">
      <div className="glass fade-up rounded-3xl p-6 sm:p-8 md:p-12">
        <p className="text-sm uppercase tracking-[0.22em] text-accent">mif</p>
        <h1 className="mt-3 max-w-3xl text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          {copy.heroTitle}
        </h1>
        <p className="mt-4 max-w-2xl text-[1.02rem] text-muted">
          {copy.heroText}
        </p>
        <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:flex-wrap">
          <a
            href={contactTelegram.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-accent px-5 text-white transition hover:opacity-90"
          >
            <TelegramIcon />
            {copy.heroTelegram}
          </a>
          <Link
            href={`/${locale}/projects`}
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-amber-300 px-5 transition hover:bg-accent-soft"
          >
            {copy.heroPrimary}
          </Link>
        </div>
      </div>

      <div className="fade-up space-y-5" style={{ animationDelay: "0.06s" }}>
        <div>
          <h2 className="text-2xl font-semibold">{copy.skillsTitle}</h2>
          <p className="mt-2 text-muted">{copy.skillsText}</p>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((skill) => (
            <TechBadge key={skill.slug} name={skill.name} slug={skill.slug} />
          ))}
        </div>
      </div>

      <div className="fade-up space-y-5" style={{ animationDelay: "0.12s" }}>
        <div>
          <h2 className="text-2xl font-semibold">{copy.projectsTitle}</h2>
          <p className="mt-2 text-muted">{copy.projectsText}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <ProjectCard key={item.slug} project={item} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
