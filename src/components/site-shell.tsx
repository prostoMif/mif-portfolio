import Link from "next/link";
import { Locale, t } from "@/lib/content";

export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const c = t[locale];
  const p = (s: string) => `/${locale}${s}`;
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--bg)" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid var(--border)", background: "rgba(8,8,9,0.85)", backdropFilter: "blur(16px)" }}>
        <div className="container" style={{ height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href={p("")} style={{ fontWeight: 700, fontSize: "0.95rem", letterSpacing: "-0.01em" }}
            className="hover:text-[#e8622a] transition-colors duration-200">
            mif<span style={{ color: "var(--accent)" }}>.</span>dev
          </Link>
          <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {[
              [p(""),          c.nav.home],
              [p("/projects"), c.nav.projects],
              [p("/services"), c.nav.services],
              [p("/about"),    c.nav.about],
              [p("/contact"),  c.nav.contact],
            ].map(([href, label]) => (
              <Link key={href} href={href}
                className="hidden sm:inline-flex items-center transition-colors hover:text-[#e8622a]"
                style={{ padding: "0.375rem 0.75rem", borderRadius: "0.5rem", fontSize: "0.85rem", color: "var(--fg-muted)" }}>
                {label}
              </Link>
            ))}
            <Link href={locale === "ru" ? "/en" : "/ru"}
              className="transition-all hover:text-[#e8622a]"
              style={{ marginLeft: "0.75rem", padding: "0.375rem 0.75rem", borderRadius: "0.5rem", border: "1px solid var(--border-hi)", fontSize: "0.7rem", fontFamily: "var(--mono)", letterSpacing: "0.08em", color: "var(--fg-muted)" }}>
              {locale === "ru" ? "EN" : "RU"}
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer style={{ borderTop: "1px solid var(--border)", padding: "2rem 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--fg-muted)" }}>
          <span style={{ fontWeight: 600, color: "var(--fg)" }}>mif<span style={{ color: "var(--accent)" }}>.</span>dev</span>
          <span style={{ fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: "0.08em" }}>{c.role}</span>
        </div>
      </footer>
    </div>
  );
}
