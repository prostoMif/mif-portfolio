import { contactTelegram, Locale, t } from "@/lib/content";
import { ScrollReveal } from "@/components/scroll-reveal";

function TgIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden><path d="M21.9 4.3 18.7 19.4c-.24 1.07-.88 1.33-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.62-.2L6.22 13.1l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55l18.95-7.3c.88-.32 1.65.2 1.36 1.57Z"/></svg>;
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = t[locale];
  return (
    <div className="container space-y-12 py-16">
      <ScrollReveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e8622a] mb-3">{locale === "ru" ? "Разработчик" : "Developer"}</p>
        <h1 className="text-4xl font-bold mb-5">{c.aboutTitle}</h1>
        <p className="max-w-2xl text-lg font-medium leading-relaxed mb-3">{c.aboutLead}</p>
        <p className="max-w-2xl text-[#8a8a9a] leading-relaxed mb-7">{c.aboutBody}</p>
        <a href={contactTelegram.url} target="_blank" rel="noreferrer" className="btn-primary inline-flex">
          <TgIcon/>{locale === "ru" ? "Написать в Telegram" : "Message on Telegram"}
        </a>
      </ScrollReveal>

      <div className="grid gap-4 md:grid-cols-3">
        {c.aboutCards.map((card, i) => (
          <ScrollReveal key={card.label} delay={i * 0.08}>
            <article className="glass glass-hover p-5 h-full">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#e8622a] mb-3">{card.label}</p>
              <p className="text-sm text-[#8a8a9a] leading-relaxed">{card.text}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
