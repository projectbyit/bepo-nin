// SECTION: FAQ — SEO questions and answers for Google and AI
import { Container } from "@/components/shared/Container";
import { faqs } from "@/lib/faq";

export function FaqSection() {
  return (
    <section id="faq" className="relative w-full bg-background py-16 md:py-24 lg:py-32">
      <div className="pattern-bg absolute inset-0 opacity-20" aria-hidden />
      <Container className="relative flex flex-col gap-10">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="font-serif text-sm tracking-[0.18em] uppercase text-gold">
            FAQ
          </p>
          <h2 className="font-display text-4xl uppercase leading-tight tracking-[0.06em] text-ink md:text-5xl">
            Questions guests often ask.
          </h2>
          <p className="font-serif text-lg text-ink-muted">
            Practical answers about Bepo Restaurant Konoba Nin — location, hours,
            reservations, and what to expect at our table in Old Town Nin.
          </p>
        </div>

        <div className="flex max-w-3xl flex-col divide-y divide-border border-y border-border">
          {faqs.map((item) => (
            <details key={item.question} className="group py-5 md:py-6">
              <summary className="cursor-pointer list-none font-display text-xl uppercase leading-snug tracking-[0.04em] text-ink transition-colors duration-200 ease-out marker:content-none [&::-webkit-details-marker]:hidden hover:text-gold md:text-2xl">
                <span className="flex items-start justify-between gap-4">
                  <span>{item.question}</span>
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 font-serif text-2xl leading-none text-gold transition-transform duration-300 ease-out group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-ink-muted md:text-xl">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
