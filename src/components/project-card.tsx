import Link from "next/link";
import { Locale, Project, t } from "@/lib/content";

function GithubIcon() {
  return <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>;
}
function ExternalIcon() {
  return <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M7 17 17 7M9 7h8v8"/></svg>;
}

export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const copy = t[locale];
  const ac = project.accent;

  return (
    <article
      className="glass glass-hover flex flex-col h-full overflow-hidden"
      style={{ borderTopColor: `${ac}30` }}
    >
      {/* Цветная метка сверху */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${ac} 0%, transparent 100%)` }} />

      <div className="flex items-center justify-between px-5 pt-4 pb-0">
        <span style={{ fontSize: "1.5rem" }} aria-hidden>{project.icon}</span>
        <span style={{
          fontFamily: "var(--mono)", fontSize: "0.65rem", letterSpacing: "0.1em",
          padding: "0.2rem 0.6rem", borderRadius: 4,
          background: `${ac}18`, color: ac, border: `1px solid ${ac}35`
        }}>
          {project.status[locale]}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5 pt-4 gap-3">
        <h3 style={{ fontWeight: 600, fontSize: "0.95rem", lineHeight: 1.3, color: "var(--fg)" }}>
          {project.title[locale]}
        </h3>
        <p style={{ fontSize: "0.8rem", color: "var(--fg-muted)", lineHeight: 1.6 }}>
          {project.short[locale]}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={`${project.slug}-${tag}`} className="tag">{tag}</span>
          ))}
        </div>

        {/* Кнопки */}
        <div className="mt-auto pt-2 flex flex-wrap gap-2 items-center">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white transition hover:opacity-85"
              style={{ background: "var(--accent)" }}>
              <ExternalIcon/>{copy.liveDemo}
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition hover:border-white/20"
              style={{ border: "1px solid var(--border-hi)", color: "var(--fg-muted)" }}>
              <GithubIcon/>{copy.sourceCode}
            </a>
          )}
          <Link href={`/${locale}/projects/${project.slug}`}
            className="inline-flex items-center text-xs font-medium transition hover:opacity-70 ml-auto"
            style={{ fontFamily: "var(--mono)", color: `${ac}cc`, letterSpacing: "0.04em" }}>
            {copy.caseStudy}
          </Link>
        </div>
      </div>
    </article>
  );
}
