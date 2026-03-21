import { Locale, t } from "@/lib/content";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = t[locale];

  return (
    <section className="container py-14 space-y-6">
      <h1 className="text-3xl font-semibold">{copy.servicesTitle}</h1>
      <ul className="grid gap-3 md:grid-cols-2">
        {copy.servicesList.map((item) => (
          <li key={item} className="rounded-xl bg-card p-4 border border-amber-100">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
