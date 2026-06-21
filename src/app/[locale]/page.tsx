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

export default async function LocaleHome({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const copy = t[locale];

  return (
    <div className="container space-y-20 py-10 md:py-14">

      {/* ── Hero ── */}
      <section className="fade-up">
        <div className="glass rounded-3xl p-7 sm:p-10 md:p-14 relative overflow-hidden">
          {/* декоративный круг */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-40"
            style={{ background: "radial-gradient(circle, rgba(176,90,47,0.18) 0%, transparent 70%)" }} />

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">mif.dev</p>
          <h1 className="mt-4 max-w-3xl text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {copy.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
            {copy.heroSubtitle}
          </p>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={contactTelegram.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-accent px-6 text-base font-semibold text-white shadow-md transition hover:opacity-90 hover:shadow-lg"
            >
              <TelegramIcon />
              {copy.heroTelegram}
            </a>
            <Link
              href={`/${locale}/projects`}
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border-2 border-stone-200 bg-white/80 px-6 text-base font-medium transition hover:border-accent/30 hover:bg-accent-soft"
            >
              {copy.heroPrimary}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-3">
            {copy.heroStats.map((s) => (
              <div key={s.label} className="stat-pill">
                <span className="text-xl font-bold text-accent">{s.value}</span>
                <span className="text-xs text-muted mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="fade-up space-y-5" style={{ animationDelay: "0.06s" }}>
        <div>
          <h2 className="text-2xl font-bold">{copy.skillsTitle}</h2>
          <p className="mt-1.5 text-muted">{copy.skillsText}</p>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => (
            <TechBadge key={skill.slug} name={skill.name} slug={skill.slug} />
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="fade-up space-y-5" style={{ animationDelay: "0.12s" }}>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">{copy.projectsTitle}</h2>
            <p className="mt-1.5 text-muted">{copy.projectsText}</p>
          </div>
          <Link
            href={`/${locale}/projects`}
            className="shrink-0 text-sm font-medium text-accent underline underline-offset-4 hover:opacity-70"
          >
            {locale === "ru" ? "Все проекты →" : "All projects →"}
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((item) => (
            <ProjectCard key={item.slug} project={item} locale={locale} />
          ))}
        </div>
      </section>

    </div>
  );
}
