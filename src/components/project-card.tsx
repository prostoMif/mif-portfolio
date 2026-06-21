import Link from "next/link";
import Image from "next/image";
import { Locale, Project, t } from "@/lib/content";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const copy = t[locale];

  return (
    <article className="glass flex flex-col rounded-2xl overflow-hidden transition hover:-translate-y-1 hover:shadow-lg h-full">
      {/* Цветная шапка карточки */}
      <div
        className="flex items-center justify-between px-5 py-4"
        style={{ background: `linear-gradient(135deg, ${project.accent}22 0%, ${project.accent}0a 100%)`, borderBottom: `1px solid ${project.accent}22` }}
      >
        <span className="text-2xl" aria-hidden>{project.icon}</span>
        <span
          className="rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide"
          style={{ backgroundColor: `${project.accent}18`, color: project.accent }}
        >
          {project.status[locale]}
        </span>
      </div>

      {/* Превью изображение */}
      {project.image && (
        <div className="relative h-40 w-full overflow-hidden">
          <Image src={project.image} alt={project.title[locale]} fill className="object-cover" sizes="(max-width:768px) 100vw, 400px" />
        </div>
      )}

      {/* Основной контент */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div>
          <h3 className="font-semibold text-base leading-snug">{project.title[locale]}</h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">{project.short[locale]}</p>
        </div>

        {/* Теги */}
        <ul className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={`${project.slug}-${tag}`} className="rounded-full border border-stone-200 bg-stone-50 px-2.5 py-0.5 font-mono text-xs text-muted">
              {tag}
            </li>
          ))}
        </ul>

        {/* Кнопки — всегда внизу */}
        <div className="mt-auto pt-2 flex flex-wrap gap-2">
          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl bg-accent px-4 text-sm font-medium text-white transition hover:opacity-90"
            >
              <ExternalIcon />
              {copy.liveDemo}
            </a>
          ) : null}

          {project.githubLink ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-stone-200 bg-white px-4 text-sm font-medium transition hover:bg-stone-50"
            >
              <GithubIcon />
              {copy.sourceCode}
            </a>
          ) : null}

          <Link
            href={`/${locale}/projects/${project.slug}`}
            className="inline-flex min-h-[40px] items-center rounded-xl px-3 text-sm font-medium text-accent transition hover:bg-accent-soft"
          >
            {copy.caseStudy}
          </Link>
        </div>
      </div>
    </article>
  );
}
