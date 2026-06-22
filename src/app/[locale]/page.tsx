import Link from "next/link";
import { contactTelegram, Locale, projects, skills, t } from "@/lib/content";
import { ProjectCard } from "@/components/project-card";
import { TechBadge } from "@/components/tech-badge";
import { ScrollReveal } from "@/components/scroll-reveal";

function TgIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M21.9 4.3 18.7 19.4c-.24 1.07-.88 1.33-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.62-.2L6.22 13.1l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55l18.95-7.3c.88-.32 1.65.2 1.36 1.57Z"/>
    </svg>
  );
}

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = t[locale];

  return (
    <div className="space-y-32 pb-32">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center grid-bg">

        {/* Орбы */}
        <div className="hero-orb w-[600px] h-[600px] top-[-100px] right-[-150px]"
          style={{ background: "radial-gradient(circle, rgba(232,98,42,0.18) 0%, transparent 70%)" }} />
        <div className="hero-orb w-[400px] h-[400px] bottom-[-80px] left-[-100px]"
          style={{ background: "radial-gradient(circle, rgba(100,80,200,0.1) 0%, transparent 70%)", animationDelay: "3s" }} />

        <div className="container relative z-10 py-24">
          {/* Метка */}
          <div className="fade-in inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-[#8a8a9a] mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e8622a] animate-pulse" />
            mif.dev · {locale === "ru" ? "Fullstack-разработчик" : "Fullstack Developer"}
          </div>

          {/* Заголовок — stagger по строкам */}
          <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.12]">
            {c.heroTitle.split(". ").map((line, i) => (
              <span key={i} className="line-reveal">
                <span style={{ animationDelay: `${i * 0.12}s` }}>
                  {i === 1 ? <span className="text-gradient">{line}</span> : line}
                  {i < c.heroTitle.split(". ").length - 1 ? "." : ""}
                </span>
              </span>
            ))}
          </h1>

          <p className="fade-in mt-6 max-w-xl text-[1.05rem] leading-relaxed text-[#8a8a9a]"
            style={{ animationDelay: "0.35s" }}>
            {c.heroSubtitle}
          </p>

          {/* CTA */}
          <div className="fade-in mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.48s" }}>
            <a href={contactTelegram.url} target="_blank" rel="noreferrer" className="btn-primary">
              <TgIcon />
              {c.heroTelegram}
            </a>
            <Link href={`/${locale}/projects`} className="btn-ghost">
              {c.heroPrimary}
            </Link>
          </div>

          {/* Статы */}
          <div className="fade-in mt-10 flex flex-wrap gap-3" style={{ animationDelay: "0.58s" }}>
            {c.heroStats.map((s) => (
              <div key={s.label} className="stat-pill">
                <span className="text-base font-bold text-[#e8622a]">{s.value}</span>
                <span className="text-[11px] text-[#8a8a9a]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ME ── */}
      <section className="container">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e8622a] mb-3">
            {locale === "ru" ? "Почему я" : "Why me"}
          </p>
          <h2 className="text-3xl font-bold mb-10">{c.whyTitle}</h2>
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {c.whyItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="glass glass-hover h-full p-7">
                <span className="text-3xl block mb-5" aria-hidden>{item.icon}</span>
                <p className="font-semibold text-base mb-3">{item.title}</p>
                <p className="text-sm leading-relaxed text-[#8a8a9a]">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="container">
        <ScrollReveal>
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e8622a] mb-3">
                {locale === "ru" ? "Работы" : "Work"}
              </p>
              <h2 className="text-3xl font-bold">{c.projectsTitle}</h2>
              <p className="mt-2 text-[#8a8a9a]">{c.projectsText}</p>
            </div>
            <Link href={`/${locale}/projects`}
              className="shrink-0 text-sm font-medium text-[#e8622a] hover:opacity-70 transition-opacity">
              {locale === "ru" ? "Все →" : "All →"}
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.08}>
              <ProjectCard project={item} locale={locale} />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA после проектов */}
        <ScrollReveal delay={0.1}>
          <div className="mt-6 rounded-2xl border border-[#e8622a]/20 bg-[#e8622a]/[0.06] p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-medium">{c.projectsCta}</p>
            <a href={contactTelegram.url} target="_blank" rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#e8622a] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
              <TgIcon className="h-4 w-4" />
              {c.projectsCtaBtn}
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* ── STACK ── */}
      <section className="container">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e8622a] mb-3">
            {locale === "ru" ? "Инструменты" : "Tools"}
          </p>
          <h2 className="text-3xl font-bold mb-2">{c.skillsTitle}</h2>
          <p className="text-[#8a8a9a] mb-8">{c.skillsText}</p>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((s, i) => (
            <ScrollReveal key={s.slug} delay={i * 0.04}>
              <TechBadge name={s.name} slug={s.slug} />
            </ScrollReveal>
          ))}
        </div>
      </section>

    </div>
  );
}
