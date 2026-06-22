import Link from "next/link";
import { Locale, t } from "@/lib/content";

export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const c = t[locale];
  const p = (s: string) => `/${locale}${s}`;

  return (
    <div className="noise min-h-screen flex flex-col bg-[#0d0d0f]">

      {/* ── Nav ── */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0d0d0f]/80 backdrop-blur-xl">
        <div className="container h-[60px] flex items-center justify-between">
          <Link href={p("")} className="font-bold text-base tracking-tight group">
            <span className="text-[#f0efe8] group-hover:text-[#e8622a] transition-colors duration-200">mif</span>
            <span className="text-[#e8622a]">.</span>
            <span className="text-[#f0efe8] group-hover:text-[#e8622a] transition-colors duration-200">dev</span>
          </Link>

          <nav className="flex items-center gap-0.5 text-sm">
            {[
              [p(""),          c.nav.home],
              [p("/projects"), c.nav.projects],
              [p("/services"), c.nav.services],
              [p("/about"),    c.nav.about],
              [p("/contact"),  c.nav.contact],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-lg text-[#8a8a9a] hover:text-[#f0efe8] hover:bg-white/[0.06] transition-all duration-150"
              >
                {label}
              </Link>
            ))}
            <Link
              href={locale === "ru" ? "/en" : "/ru"}
              className="ml-2 px-3 py-1.5 rounded-lg border border-white/[0.1] text-xs font-semibold text-[#8a8a9a] hover:text-[#f0efe8] hover:border-white/20 transition-all duration-150"
            >
              {locale === "ru" ? "EN" : "RU"}
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.06] py-8 text-sm text-[#8a8a9a]">
        <div className="container flex flex-col items-center justify-between gap-3 sm:flex-row">
          <span className="font-semibold text-[#f0efe8]">
            mif<span className="text-[#e8622a]">.</span>dev
          </span>
          <span className="text-xs">{c.role}</span>
        </div>
      </footer>
    </div>
  );
}
