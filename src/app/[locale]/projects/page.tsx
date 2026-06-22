import { contactTelegram, Locale, projects, t } from "@/lib/content";
import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";

function TgIcon() { return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden><path d="M21.9 4.3 18.7 19.4c-.24 1.07-.88 1.33-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.62-.2L6.22 13.1l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55l18.95-7.3c.88-.32 1.65.2 1.36 1.57Z"/></svg>; }

export default async function ProjectsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = t[locale];
  return (
    <div className="container" style={{ paddingTop: "5rem", paddingBottom: "6rem" }}>
      <ScrollReveal>
        <div className="section-label"><span className="h-[5px] w-[5px] rounded-full bg-[#e8622a]" />{locale === "ru" ? "работы" : "work"}</div>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>{c.projectsTitle}</h1>
        <p style={{ color: "var(--fg-muted)", marginBottom: "3rem", fontSize: "0.9rem" }}>{c.projectsText}</p>
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" style={{ marginBottom: "2.5rem" }}>
        {projects.map((item, i) => (
          <ScrollReveal key={item.slug} delay={i * 0.07}>
            <ProjectCard project={item} locale={locale} />
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal>
        <div style={{ padding: "1.5rem", borderRadius: "1rem", border: "1px solid rgba(232,98,42,0.18)", background: "rgba(232,98,42,0.05)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <p style={{ fontWeight: 500 }}>{c.projectsCta}</p>
          <a href={contactTelegram.url} target="_blank" rel="noreferrer" className="btn-primary" style={{ minHeight: 40, padding: "0 1.25rem", fontSize: "0.82rem" }}>
            <TgIcon />{c.projectsCtaBtn}
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
}
