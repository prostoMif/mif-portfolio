import Link from "next/link";
import Image from "next/image";
import { Locale, Project, t } from "@/lib/content";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>
    </svg>
  );
}
function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17 17 7M9 7h8v8"/>
    </svg>
  );
}

export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const copy = t[locale];

  return (
    <article
      className="glass glass-hover flex flex-col h-full overflow-hidden"
      style={{ "--card-accent": project.accent } as React.CSSProperties}
    >
      {/* Шапка с цветом акцента */}
      <div
        className="relative h-36 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.accent}22 0%, ${project.accent}08 100%)` }}
      >
        {project.image ? (
          <Image src={project.image} alt={project.title[locale]} fill className="object-cover opacity-60" sizes="400px"/>
        ) : null}
        {/* Оверлей с иконкой */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl drop-shadow-lg" aria-hidden>{project.icon}</span>
        </div>
        {/* Бейдж статуса */}
        <div className="absolute top-3 right-3">
          <span
            className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
            style={{ background: `${project.accent}25`, color: project.accent, border: `1px solid ${project.accent}40` }}
          >
            {project.status[locale]}
          </span>
        </div>
        {/* Нижняя линия цвета */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)` }}/>
      </div>

      {/* Контент */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div>
          <h3 className="font-semibold text-[0.95rem] leading-snug text-[#f0efe8]">{project.title[locale]}</h3>
          <p className="mt-2 text-[0.82rem] text-[#8a8a9a] leading-relaxed">{project.short[locale]}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={`${project.slug}-${tag}`} className="tag">{tag}</span>
          ))}
        </div>

        {/* Кнопки — всегда внизу */}
        <div className="mt-auto pt-2 flex flex-wrap gap-2">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full bg-[#e8622a] px-4 text-xs font-semibold text-white transition hover:opacity-90">
              <ExternalIcon/>
              {copy.liveDemo}
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 text-xs font-medium text-[#d0cfc8] transition hover:border-white/20 hover:bg-white/[0.08]">
              <GithubIcon/>
              {copy.sourceCode}
            </a>
          )}
          <Link href={`/${locale}/projects/${project.slug}`}
            className="inline-flex min-h-[38px] items-center px-3 text-xs font-medium text-[#e8622a] transition hover:opacity-70">
            {copy.caseStudy}
          </Link>
        </div>
      </div>
    </article>
  );
}
