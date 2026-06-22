import { ContactForm } from "@/components/contact-form";
import { CONTACT_FORM_ENABLED, contactTelegram, Locale, t } from "@/lib/content";
import { ScrollReveal } from "@/components/scroll-reveal";

function TgIcon() {
  return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden><path d="M21.9 4.3 18.7 19.4c-.24 1.07-.88 1.33-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.62-.2L6.22 13.1l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55l18.95-7.3c.88-.32 1.65.2 1.36 1.57Z"/></svg>;
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = t[locale];
  return (
    <div className="container max-w-2xl space-y-8 py-16">
      <ScrollReveal>
        <h1 className="text-4xl font-bold mb-3">{c.contactTitle}</h1>
        <p className="text-[#8a8a9a] leading-relaxed">{CONTACT_FORM_ENABLED ? c.contactTextWithForm : c.contactText}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.08}>
        <a href={contactTelegram.url} target="_blank" rel="noreferrer"
          className="glass glass-hover flex items-center gap-4 p-5 block">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e8622a] text-white shadow-lg shadow-[#e8622a]/30">
            <TgIcon/>
          </span>
          <div className="min-w-0">
            <p className="font-semibold">Telegram</p>
            <p className="text-sm text-[#e8622a]">@{contactTelegram.username}</p>
            <p className="mt-0.5 text-sm text-[#8a8a9a]">{c.telegramCardHint}</p>
          </div>
          <span className="ml-auto text-sm text-[#8a8a9a] hidden sm:inline">{locale === "ru" ? "Открыть →" : "Open →"}</span>
        </a>
      </ScrollReveal>

      {CONTACT_FORM_ENABLED && (
        <ScrollReveal delay={0.14}>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8a8a9a] mb-3">{c.form.heading}</p>
          <ContactForm locale={locale}/>
        </ScrollReveal>
      )}
    </div>
  );
}
