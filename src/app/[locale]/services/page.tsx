import { contactTelegram, Locale, t } from "@/lib/content";
import { ScrollReveal } from "@/components/scroll-reveal";

function TgIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden><path d="M21.9 4.3 18.7 19.4c-.24 1.07-.88 1.33-1.78.83l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.09-.55-.62-.2L6.22 13.1l-4.85-1.52c-1.05-.33-1.07-1.05.22-1.55l18.95-7.3c.88-.32 1.65.2 1.36 1.57Z"/></svg>;
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = t[locale];
  return (
    <div className="container space-y-16 py-16">
      <ScrollReveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e8622a] mb-3">{locale === "ru" ? "Что я делаю" : "What I do"}</p>
        <h1 className="text-4xl font-bold mb-4">{c.servicesTitle}</h1>
        <p className="max-w-2xl text-[#8a8a9a] leading-relaxed">{c.servicesLead}</p>
      </ScrollReveal>

      <ul className="grid gap-4 sm:grid-cols-2">
        {c.servicesList.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.08}>
            <li className="glass glass-hover p-6 flex gap-5 h-full">
              <span className="text-3xl shrink-0 mt-0.5" aria-hidden>{item.icon}</span>
              <div>
                <p className="font-semibold mb-2">{item.title}</p>
                <p className="text-sm text-[#8a8a9a] leading-relaxed">{item.desc}</p>
              </div>
            </li>
          </ScrollReveal>
        ))}
      </ul>

      <div className="grid gap-4 md:grid-cols-3">
        {(["get","format","guarantee"] as const).map((key, i) => (
          <ScrollReveal key={key} delay={i * 0.08}>
            <article className="glass p-5 h-full">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#e8622a] mb-3">{c.servicesCardTitles[key]}</p>
              <p className="text-sm text-[#8a8a9a] leading-relaxed">{c.servicesCardTexts[key]}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="rounded-2xl border border-[#e8622a]/20 bg-[#e8622a]/[0.06] p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium max-w-md">{c.servicesCta}</p>
          <a href={contactTelegram.url} target="_blank" rel="noreferrer" className="btn-primary shrink-0">
            <TgIcon/>{c.servicesCtaBtn}
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
}
