import { contactTelegram, Locale, projects, t } from "@/lib/content";
import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";

function TgIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden><path d="M21.9 4.3 18.7 19.4c-.24 1.07-.88 1.33-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.62-.2L6.22 13.1l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55l18.95-7.3c.88-.32 1.65.2 1.36 1.57Z"/></svg>;
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = t[locale];
  return (
    <div className="container space-y-12 py-16">
      <ScrollReveal>
        <h1 className="text-4xl font-bold mb-2">{c.projectsTitle}</h1>
        <p className="text-[#8a8a9a]">{c.projectsText}</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((item, i) => (
          <ScrollReveal key={item.slug} delay={i * 0.08}>
            <ProjectCard project={item} locale={locale}/>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="rounded-2xl border border-[#e8622a]/20 bg-[#e8622a]/[0.06] p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium">{c.projectsCta}</p>
          <a href={contactTelegram.url} target="_blank" rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#e8622a] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
            <TgIcon/>{c.projectsCtaBtn}
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
}
