// SECTION: Contact — reservation CTA via email
import { Container } from "@/components/shared/Container";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

type Props = { dict: Dictionary };

export function ContactSection({ dict }: Props) {
  return (
    <section id="contact" className="w-full bg-background-soft py-16 md:py-24 lg:py-32">
      <Container className="flex max-w-3xl flex-col gap-6">
        <p className="font-serif text-sm tracking-[0.18em] uppercase text-gold">
          {dict.contact.label}
        </p>
        <h2 className="font-display text-4xl uppercase leading-tight tracking-[0.06em] text-ink md:text-5xl">
          {dict.contact.title}
        </h2>
        <p className="font-serif text-lg text-ink-muted md:text-xl">
          {dict.contact.leadBefore}{" "}
          <a
            href={site.phoneHref}
            className="text-ink underline decoration-gold/50 transition-colors duration-200 ease-out hover:decoration-gold"
          >
            {site.phone}
          </a>
          {dict.contact.leadAfter}
        </p>
        <div className="pt-2">
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent(dict.contact.mailSubject)}`}
            className="btn-booking"
          >
            {dict.contact.booking}
          </a>
        </div>
      </Container>
    </section>
  );
}
