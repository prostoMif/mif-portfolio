import { ContactForm } from "@/components/contact-form";
import { CONTACT_FORM_ENABLED, contactTelegram, Locale, t } from "@/lib/content";
import { ScrollReveal } from "@/components/scroll-reveal";

function TgIcon() { return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden><path d="M21.9 4.3 18.7 19.4c-.24 1.07-.88 1.33-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.62-.2L6.22 13.1l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55l18.95-7.3c.88-.32 1.65.2 1.36 1.57Z"/></svg>; }

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = t[locale];
  return (
    <div className="container" style={{ maxWidth: "42rem", paddingTop: "5rem", paddingBottom: "6rem" }}>
      <ScrollReveal>
        <div className="section-label"><span className="h-[5px] w-[5px] rounded-full bg-[#e8622a]" />{locale === "ru" ? "контакт" : "contact"}</div>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>{c.contactTitle}</h1>
        <p style={{ color: "var(--fg-muted)", lineHeight: 1.65, marginBottom: "2rem", fontSize: "0.9rem" }}>{CONTACT_FORM_ENABLED ? c.contactTextWithForm : c.contactText}</p>
      </ScrollReveal>
      <ScrollReveal delay={0.08}>
        <a href={contactTelegram.url} target="_blank" rel="noreferrer"
          className="glass glass-hover flex items-center gap-4 p-5 block" style={{ marginBottom: "2rem" }}>
          <span style={{ display: "flex", width: 48, height: 48, alignItems: "center", justifyContent: "center", borderRadius: "0.75rem", background: "var(--accent)", color: "#fff", flexShrink: 0, boxShadow: "0 0 20px rgba(232,98,42,0.3)" }}>
            <TgIcon />
          </span>
          <div>
            <p style={{ fontWeight: 600 }}>Telegram</p>
            <p style={{ fontSize: "0.85rem", color: "var(--accent)" }}>@{contactTelegram.username}</p>
            <p style={{ marginTop: "0.125rem", fontSize: "0.8rem", color: "var(--fg-muted)" }}>{c.telegramCardHint}</p>
          </div>
          <span style={{ marginLeft: "auto", fontSize: "0.8rem", color: "var(--fg-muted)", display: "none" }} className="sm:inline">{locale === "ru" ? "Открыть →" : "Open →"}</span>
        </a>
      </ScrollReveal>
      {CONTACT_FORM_ENABLED && (
        <ScrollReveal delay={0.14}>
          <div className="section-label" style={{ marginBottom: "0.75rem", fontSize: "0.6rem" }}><span className="h-[4px] w-[4px] rounded-full bg-[#e8622a]" />{c.form.heading}</div>
          <ContactForm locale={locale} />
        </ScrollReveal>
      )}
    </div>
  );
}
