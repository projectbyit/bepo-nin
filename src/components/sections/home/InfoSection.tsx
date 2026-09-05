// SECTION: Info & Map — hours, address, map, and social links
import { Container } from "@/components/shared/Container";
import { site } from "@/lib/site";

export function InfoSection() {
  return (
    <section id="info" className="w-full bg-background py-16 md:py-24 lg:py-32">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="font-serif text-sm tracking-[0.18em] uppercase text-gold">
              Info / Contact
            </p>
            <h2 className="font-display text-4xl uppercase leading-tight tracking-[0.06em] text-ink md:text-5xl">
              Find us at the end of the Roman bridge.
            </h2>
          </div>

          <ul className="flex flex-col gap-5 font-serif text-lg text-ink-muted">
            <li>
              <span className="mb-1 block text-sm tracking-[0.12em] uppercase text-ink">
                Opening hours
              </span>
              {site.hours}
            </li>
            <li>
              <span className="mb-1 block text-sm tracking-[0.12em] uppercase text-ink">
                Address
              </span>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gold/50 transition-colors duration-200 ease-out hover:text-ink hover:decoration-gold"
              >
                {site.address}
              </a>
            </li>
            <li>
              <span className="mb-1 block text-sm tracking-[0.12em] uppercase text-ink">
                Phone
              </span>
              <a
                href={site.phoneHref}
                className="transition-colors duration-200 ease-out hover:text-ink"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <span className="mb-1 block text-sm tracking-[0.12em] uppercase text-ink">
                Email
              </span>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors duration-200 ease-out hover:text-ink"
              >
                {site.email}
              </a>
            </li>
            <li>
              <span className="mb-1 block text-sm tracking-[0.12em] uppercase text-ink">
                Social
              </span>
              <span className="flex flex-wrap gap-4">
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 ease-out hover:text-ink"
                >
                  Facebook
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 ease-out hover:text-ink"
                >
                  Instagram
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-[0_20px_50px_rgba(37,34,32,0.08)]">
          <iframe
            title="Bepo Restaurant location on Google Maps"
            src={site.mapsEmbed}
            className="h-[360px] w-full grayscale-[20%] contrast-[1.05] md:h-full md:min-h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </Container>
    </section>
  );
}
