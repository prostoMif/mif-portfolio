import { notFound } from "next/navigation";
import { Locale, locales } from "@/lib/content";
import { SiteShell } from "@/components/site-shell";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <SiteShell locale={locale as Locale}>{children}</SiteShell>;
}
