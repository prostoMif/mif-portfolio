import { contactTelegram, Locale, t } from "@/lib/content";
import { ScrollReveal } from "@/components/scroll-reveal";

function TgIcon() { return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden><path d="M21.9 4.3 18.7 19.4c-.24 1.07-.88 1.33-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.62-.2L6.22 13.1l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55l18.95-7.3c.88-.32 1.65.2 1.36 1.57Z"/></svg>; }

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = t[locale];
  return (
    <div className="container" style={{ paddingTop: "5rem", paddingBottom: "6rem" }}>
      <ScrollReveal>
        <div className="section-label"><span className="h-[5px] w-[5px] rounded-full bg-[#e8622a]" />{locale === "ru" ? "что я делаю" : "what i do"}</div>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>{c.servicesTitle}</h1>
        <p style={{ color: "var(--fg-muted)", maxWidth: "36rem", lineHeight: 1.65, marginBottom: "3rem", fontSize: "0.9rem" }}>{c.servicesLead}</p>
      </ScrollReveal>
      <ul className="grid gap-4 sm:grid-cols-2" style={{ marginBottom: "2.5rem" }}>
        {c.servicesList.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.08}>
            <li className="glass glass-hover p-6 flex gap-4 h-full">
              <span style={{ fontSize: "1.75rem", lineHeight: 1, flexShrink: 0, marginTop: 2 }} aria-hidden>{item.icon}</span>
              <div>
                <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>{item.title}</p>
                <p style={{ fontSize: "0.82rem", color: "var(--fg-muted)", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            </li>
          </ScrollReveal>
        ))}
      </ul>
      <div className="grid gap-4 md:grid-cols-3" style={{ marginBottom: "2.5rem" }}>
        {(["get","format","guarantee"] as const).map((key, i) => (
          <ScrollReveal key={key} delay={i * 0.08}>
            <article className="glass p-5 h-full">
              <div className="section-label" style={{ marginBottom: "0.75rem", fontSize: "0.6rem" }}><span className="h-[4px] w-[4px] rounded-full bg-[#e8622a]" />{c.servicesCardTitles[key]}</div>
              <p style={{ fontSize: "0.82rem", color: "var(--fg-muted)", lineHeight: 1.65 }}>{c.servicesCardTexts[key]}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal>
        <div style={{ padding: "2rem", borderRadius: "1rem", border: "1px solid rgba(232,98,42,0.18)", background: "rgba(232,98,42,0.05)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <p style={{ fontWeight: 500 }}>{c.servicesCta}</p>
          <a href={contactTelegram.url} target="_blank" rel="noreferrer" className="btn-primary"><TgIcon />{c.servicesCtaBtn}</a>
        </div>
      </ScrollReveal>
    </div>
  );
}
