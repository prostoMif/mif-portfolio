import Link from "next/link";
import { Locale, t } from "@/lib/content";

type Props = {
  locale: Locale;
  children: React.ReactNode;
};

export function SiteShell({ locale, children }: Props) {
  const copy = t[locale];
  const path = (segment: string) => `/${locale}${segment}`;

  return (
    <div className="min-h-screen flex flex-col bg-warm-noise">
      <header className="sticky top-0 z-50 border-b border-amber-200/70 bg-card/85 backdrop-blur">
        <div className="container h-16 flex items-center justify-between gap-4">
          <Link href={path("")} className="font-semibold tracking-tight">
            {copy.brand}
          </Link>
          <nav className="flex items-center gap-3 text-sm text-muted sm:gap-5">
            <Link href={path("")}>{copy.nav.home}</Link>
            <Link href={path("/projects")}>{copy.nav.projects}</Link>
            <Link href={path("/services")}>{copy.nav.services}</Link>
            <Link href={path("/about")}>{copy.nav.about}</Link>
            <Link href={path("/contact")} className="hidden sm:inline">
              {copy.nav.contact}
            </Link>
            <Link
              href={locale === "ru" ? "/en" : "/ru"}
              className="rounded-md border border-amber-300 px-2 py-1 text-foreground transition hover:bg-accent-soft"
            >
              {locale === "ru" ? "EN" : "RU"}
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="mt-14 border-t border-amber-200/70 py-6 text-sm text-muted">
        <div className="container flex items-center justify-between">
          <span>mif.dev</span>
          <span>{copy.role}</span>
        </div>
      </footer>
    </div>
  );
}
