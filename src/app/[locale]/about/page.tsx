import { Locale, t } from "@/lib/content";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = t[locale];

  return (
    <section className="container py-14 space-y-4">
      <h1 className="text-3xl font-semibold">{copy.aboutTitle}</h1>
      <p className="text-muted max-w-3xl">{copy.aboutText}</p>
    </section>
  );
}
