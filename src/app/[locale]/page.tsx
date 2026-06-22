import Link from "next/link";
import { contactTelegram, Locale, projects, skills, t } from "@/lib/content";
import { TechBadge } from "@/components/tech-badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import { HeroCanvas } from "@/components/hero-canvas";
import { Typewriter } from "@/components/typewriter";

function TgIcon({ cls = "h-4 w-4" }: { cls?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
      <path d="M21.9 4.3 18.7 19.4c-.24 1.07-.88 1.33-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.62-.2L6.22 13.1l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55l18.95-7.3c.88-.32 1.65.2 1.36 1.57Z"/>
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17 17 7M9 7h8v8"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>
    </svg>
  );
}

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = t[locale];

  return (
    <div className="pb-32">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative grid-bg overflow-hidden" style={{ minHeight: "100vh" }}>
        <HeroCanvas />
        {/* орбы */}
        <div className="orb" style={{ width: 500, height: 500, top: -80, right: -120, background: "radial-gradient(circle, rgba(232,98,42,0.16) 0%, transparent 70%)", animationDelay: "0s" }} />
        <div className="orb" style={{ width: 350, height: 350, bottom: -60, left: -80, background: "radial-gradient(circle, rgba(80,60,180,0.08) 0%, transparent 70%)", animationDelay: "5s" }} />

        <div className="container relative z-10 flex flex-col justify-center" style={{ minHeight: "100vh", paddingTop: "7rem", paddingBottom: "4rem" }}>
          {/* статус-бейдж */}
          <div className="inline-flex items-center gap-2 mb-10 w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e8622a] animate-pulse" />
            <span style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg-muted)" }}>
              mif.dev &nbsp;·&nbsp; fullstack
            </span>
          </div>

          {/* заголовок */}
          <h1 style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: "820px" }}>
            <Typewriter text={c.heroTitle} delay={200} />
          </h1>

          {/* линия акцента */}
          <div className="accent-line mt-5" style={{ width: "4rem" }} />

          <p className="mt-5 max-w-lg text-base leading-relaxed" style={{ color: "var(--fg-muted)", animationDelay: "0.5s" }}>
            {c.heroSubtitle}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={contactTelegram.url} target="_blank" rel="noreferrer" className="btn-primary">
              <TgIcon cls="h-4 w-4" />
              {c.heroTelegram}
            </a>
            <Link href={`/${locale}/projects`} className="btn-ghost">
              {c.heroPrimary}
            </Link>
          </div>

          {/* статы */}
          <div className="mt-10 flex flex-wrap gap-3">
            {c.heroStats.map((s) => (
              <div key={s.label} className="stat-pill">
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--accent)" }}>{s.value}</span>
                <span style={{ fontSize: "0.68rem", color: "var(--fg-muted)", fontFamily: "var(--mono)", letterSpacing: "0.06em" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ME ───────────────────────────────────────────── */}
      <section className="container" style={{ paddingTop: "7rem" }}>
        <ScrollReveal>
          <div className="section-label">
            <span className="h-[5px] w-[5px] rounded-full bg-[#e8622a]" />
            {locale === "ru" ? "почему я" : "why me"}
          </div>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "2.5rem" }}>{c.whyTitle}</h2>
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {c.whyItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="glass glass-hover h-full p-7">
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "1.25rem" }} aria-hidden>{item.icon}</span>
                <p style={{ fontWeight: 600, marginBottom: "0.625rem" }}>{item.title}</p>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.65, color: "var(--fg-muted)" }}>{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── PROJECTS (curatoroff-style list) ─────────────────── */}
      <section className="container" style={{ paddingTop: "7rem" }}>
        <ScrollReveal>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1rem", marginBottom: "0" }}>
            <div>
              <div className="section-label">
                <span className="h-[5px] w-[5px] rounded-full bg-[#e8622a]" />
                {locale === "ru" ? "избранные работы" : "selected work"}
              </div>
            </div>
            <Link
              href={`/${locale}/projects`}
              style={{ fontSize: "0.78rem", fontFamily: "var(--mono)", color: "var(--fg-muted)", letterSpacing: "0.06em", marginBottom: "2.5rem", whiteSpace: "nowrap" }}
              className="hover:text-[#e8622a] transition-colors"
            >
              {locale === "ru" ? "все →" : "all →"}
            </Link>
          </div>
        </ScrollReveal>

        <div>
          {projects.slice(0, 4).map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.07}>
              <div className="project-row">
                <span className="row-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="row-title">{project.title[locale]}</div>
                  <div className="row-desc">{project.short[locale]}</div>
                  <div className="row-tags">
                    {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
                <div className="row-links">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#e8622a] hover:opacity-70 transition-opacity">
                      <ExternalIcon /> live
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium hover:text-[#e8622a] transition-colors" style={{ color: "var(--fg-muted)" }}>
                      <GithubIcon /> github
                    </a>
                  )}
                  <Link href={`/${locale}/projects/${project.slug}`}
                    style={{ fontSize: "0.72rem", fontFamily: "var(--mono)", color: "var(--fg-dim)", letterSpacing: "0.06em" }}
                    className="hover:text-[#e8622a] transition-colors">
                    {locale === "ru" ? "кейс →" : "case →"}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA после проектов */}
        <ScrollReveal delay={0.1}>
          <div style={{ marginTop: "2rem", padding: "1.5rem", borderRadius: "1rem", border: "1px solid rgba(232,98,42,0.18)", background: "rgba(232,98,42,0.05)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
            <p style={{ fontWeight: 500 }}>{c.projectsCta}</p>
            <a href={contactTelegram.url} target="_blank" rel="noreferrer" className="btn-primary" style={{ minHeight: "40px", padding: "0 1.25rem", fontSize: "0.82rem" }}>
              <TgIcon cls="h-3.5 w-3.5" />{c.projectsCtaBtn}
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* ── STACK ────────────────────────────────────────────── */}
      <section className="container" style={{ paddingTop: "7rem" }}>
        <ScrollReveal>
          <div className="section-label">
            <span className="h-[5px] w-[5px] rounded-full bg-[#e8622a]" />
            {locale === "ru" ? "стек" : "stack"}
          </div>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>{c.skillsTitle}</h2>
          <p style={{ color: "var(--fg-muted)", marginBottom: "2rem", fontSize: "0.9rem" }}>{c.skillsText}</p>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((s, i) => (
            <ScrollReveal key={s.slug} delay={i * 0.035}>
              <TechBadge name={s.name} slug={s.slug} />
            </ScrollReveal>
          ))}
        </div>
      </section>

    </div>
  );
}
