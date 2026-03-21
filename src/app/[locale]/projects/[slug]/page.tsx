import { notFound } from "next/navigation";
import { Locale, projects } from "@/lib/content";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    notFound();
  }

  return (
    <section className="container py-14 space-y-6">
      <p className="text-xs text-accent">{project.status[locale]}</p>
      <h1 className="text-3xl font-semibold">{project.title[locale]}</h1>
      <p className="text-muted max-w-3xl">{project.details[locale]}</p>
      <div className="flex flex-wrap gap-2 pt-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-sm rounded-full border border-amber-300 px-3 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
