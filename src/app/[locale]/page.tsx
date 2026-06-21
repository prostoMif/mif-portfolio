import Link from "next/link";
import { contactTelegram, Locale, projects, skills, t } from "@/lib/content";
import { ProjectCard } from "@/components/project-card";
import { TechBadge } from "@/components/tech-badge";

function TgIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
      <path d="M21.9 4.3 18.7 19.4c-.24 1.07-.88 1.33-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.62-.2L6.22 13.1l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55l18.95-7.3c.88-.32 1.65.2 1.36 1.57Z" />
    </svg>
  );
}

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = t[locale];

  return (
    <div className="container space-y-24 py-10 md:py-16">

      {/* ── HERO ── */}
      <section className="fade-up">
        <div className="relative overflow-hidden rounded-3xl glass p-8 sm:p-12 md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(176,90,47,0.15) 0%, transparent 70%)" }}
          />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">mif.dev</p>
          <h1 className="mt-4 max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {c.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            {c.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={contactTelegram.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-accent px-7 text-base font-semibold text-white shadow-lg transition hover:opacity-90"
            >
              <TgIcon />
              {c.heroTelegram}
            </a>
            <Link
              href={`/${locale}/projects`}
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border-2 border-stone-200 bg-white/70 px-7 text-base font-medium transition hover:border-accent/30 hover:bg-accent-soft"
            >
              {c.heroPrimary}
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {c.heroStats.map((s) => (
              <div key={s.label} className="stat-pill">
                <span className="text-lg font-bold text-accent">{s.value}</span>
                <span className="mt-0.5 text-xs text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ME ── */}
      <section className="fade-up space-y-6" style={{ animationDelay: "0.05s" }}>
        <h2 className="text-2xl font-bold">{c.whyTitle}</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {c.whyItems.map((item) => (
            <div key={item.title} className="glass rounded-2xl p-6 transition hover:-translate-y-0.5 hover:shadow-md">
              <span className="text-3xl" aria-hidden>{item.icon}</span>
              <p className="mt-4 font-semibold">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="fade-up space-y-6" style={{ animationDelay: "0.08s" }}>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">{c.projectsTitle}</h2>
            <p className="mt-1.5 text-muted">{c.projectsText}</p>
          </div>
          <Link
            href={`/${locale}/projects`}
            className="shrink-0 text-sm font-medium text-accent underline underline-offset-4 hover:opacity-70"
          >
            {locale === "ru" ? "Все проекты →" : "All projects →"}
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((item) => (
            <ProjectCard key={item.slug} project={item} locale={locale} />
          ))}
        </div>
        {/* CTA после проектов */}
        <div className="glass rounded-2xl p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium">{c.projectsCta}</p>
          <a
            href={contactTelegram.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 min-h-[44px] items-center gap-2 rounded-xl bg-accent px-5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <TgIcon />
            {c.projectsCtaBtn}
          </a>
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="fade-up space-y-5" style={{ animationDelay: "0.11s" }}>
        <h2 className="text-2xl font-bold">{c.skillsTitle}</h2>
        <p className="text-muted">{c.skillsText}</p>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((s) => (
            <TechBadge key={s.slug} name={s.name} slug={s.slug} />
          ))}
        </div>
      </section>

    </div>
  );
}
