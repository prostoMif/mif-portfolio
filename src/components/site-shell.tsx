import Link from "next/link";
import { Locale, t } from "@/lib/content";

type Props = { locale: Locale; children: React.ReactNode };

export function SiteShell({ locale, children }: Props) {
  const copy = t[locale];
  const path = (segment: string) => `/${locale}${segment}`;

  return (
    <div className="min-h-screen flex flex-col bg-warm-noise">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/80 backdrop-blur-md">
        <div className="container h-[60px] flex items-center justify-between gap-4">
          <Link href={path("")} className="font-bold tracking-tight text-foreground hover:text-accent transition text-base">
            mif<span className="text-accent">.</span>dev
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            {[
              { href: path(""),           label: copy.nav.home    },
              { href: path("/projects"),  label: copy.nav.projects},
              { href: path("/services"),  label: copy.nav.services},
              { href: path("/about"),     label: copy.nav.about   },
              { href: path("/contact"),   label: copy.nav.contact },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hidden sm:inline-flex items-center rounded-lg px-3 py-1.5 text-muted transition hover:bg-accent-soft hover:text-foreground"
              >
                {label}
              </Link>
            ))}
            <Link
              href={locale === "ru" ? "/en" : "/ru"}
              className="ml-2 rounded-lg border border-stone-200 bg-white px-2.5 py-1 text-xs font-semibold text-muted transition hover:border-accent/40 hover:text-accent"
            >
              {locale === "ru" ? "EN" : "RU"}
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-16 border-t border-stone-200/80 bg-white/60 py-6 text-sm text-muted">
        <div className="container flex flex-col items-center justify-between gap-2 sm:flex-row">
          <span className="font-semibold text-foreground">mif<span className="text-accent">.</span>dev</span>
          <span className="text-xs">{copy.role}</span>
        </div>
      </footer>
    </div>
  );
}
