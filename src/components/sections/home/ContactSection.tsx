// SECTION: Contact — reservation CTA via email
import { Container } from "@/components/shared/Container";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-background-soft py-16 md:py-24 lg:py-32">
      <Container className="flex max-w-3xl flex-col gap-6">
        <p className="font-serif text-sm tracking-[0.18em] uppercase text-gold">
          Contact
        </p>
        <h2 className="font-display text-4xl uppercase leading-tight tracking-[0.06em] text-ink md:text-5xl">
          The table is set. All that&apos;s missing is good company.
        </h2>
        <p className="font-serif text-lg text-ink-muted md:text-xl">
          Send us a message for reservations or questions. We&apos;ll get back to you
          soon — or call us directly at{" "}
          <a
            href={site.phoneHref}
            className="text-ink underline decoration-gold/50 transition-colors duration-200 ease-out hover:decoration-gold"
          >
            {site.phone}
          </a>
          .
        </p>
        <div className="pt-2">
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Table booking — Bepo Nin")}`}
            className="inline-flex items-center justify-center rounded-md bg-ink px-8 py-3.5 font-serif text-base tracking-[0.06em] uppercase text-gold transition-colors duration-200 ease-out hover:bg-ink/90 hover:text-gold-hover active:translate-y-px"
          >
            Booking Table
          </a>
        </div>
      </Container>
    </section>
  );
}
