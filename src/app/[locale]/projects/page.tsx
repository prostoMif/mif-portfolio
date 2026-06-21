import { contactTelegram, Locale, projects, t } from "@/lib/content";
import { ProjectCard } from "@/components/project-card";

function TgIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
      <path d="M21.9 4.3 18.7 19.4c-.24 1.07-.88 1.33-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.62-.2L6.22 13.1l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55l18.95-7.3c.88-.32 1.65.2 1.36 1.57Z" />
    </svg>
  );
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = t[locale];

  return (
    <div className="container space-y-8 py-10 md:py-16">

      <div className="fade-up glass rounded-3xl p-8 sm:p-10">
        <h1 className="text-3xl font-bold">{c.projectsTitle}</h1>
        <p className="mt-2 text-muted">{c.projectsText}</p>
      </div>

      <div className="fade-up grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" style={{ animationDelay: "0.06s" }}>
        {projects.map((item) => (
          <ProjectCard key={item.slug} project={item} locale={locale} />
        ))}
      </div>

      <div
        className="fade-up rounded-2xl p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        style={{ background: "linear-gradient(135deg,rgba(176,90,47,0.08),rgba(176,90,47,0.03))", border: "1px solid rgba(176,90,47,0.18)", animationDelay: "0.1s" } as React.CSSProperties}
      >
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

    </div>
  );
}
