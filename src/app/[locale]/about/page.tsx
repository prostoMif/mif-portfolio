import { contactTelegram, Locale, t } from "@/lib/content";
import { ScrollReveal } from "@/components/scroll-reveal";

function TgIcon() { return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden><path d="M21.9 4.3 18.7 19.4c-.24 1.07-.88 1.33-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.62-.2L6.22 13.1l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55l18.95-7.3c.88-.32 1.65.2 1.36 1.57Z"/></svg>; }

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = t[locale];
  return (
    <div className="container" style={{ paddingTop: "5rem", paddingBottom: "6rem" }}>
      <ScrollReveal>
        <div className="section-label"><span className="h-[5px] w-[5px] rounded-full bg-[#e8622a]" />{locale === "ru" ? "обо мне" : "about"}</div>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.25rem" }}>{c.aboutTitle}</h1>
        <p style={{ fontSize: "1.05rem", fontWeight: 500, maxWidth: "38rem", lineHeight: 1.65, marginBottom: "0.75rem" }}>{c.aboutLead}</p>
        <p style={{ color: "var(--fg-muted)", maxWidth: "38rem", lineHeight: 1.65, marginBottom: "2rem", fontSize: "0.9rem" }}>{c.aboutBody}</p>
        <a href={contactTelegram.url} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: "inline-flex" }}>
          <TgIcon />{locale === "ru" ? "Написать в Telegram" : "Message on Telegram"}
        </a>
      </ScrollReveal>
      <div className="grid gap-4 md:grid-cols-3" style={{ marginTop: "3rem" }}>
        {c.aboutCards.map((card, i) => (
          <ScrollReveal key={card.label} delay={i * 0.08}>
            <article className="glass glass-hover p-5 h-full">
              <div className="section-label" style={{ marginBottom: "0.75rem", fontSize: "0.6rem" }}><span className="h-[4px] w-[4px] rounded-full bg-[#e8622a]" />{card.label}</div>
              <p style={{ fontSize: "0.82rem", color: "var(--fg-muted)", lineHeight: 1.65 }}>{card.text}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
