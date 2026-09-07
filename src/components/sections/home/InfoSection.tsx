// SECTION: Info & Map — hours, address, map, and social links
import { Container } from "@/components/shared/Container";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

type Props = { dict: Dictionary };

export function InfoSection({ dict }: Props) {
  return (
    <section id="info" className="w-full bg-background py-16 md:py-24 lg:py-32">
      <Container className="flex flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-4">
          <p className="font-serif text-sm tracking-[0.18em] uppercase text-gold">
            {dict.info.label}
          </p>
          <h2 className="font-display text-4xl uppercase leading-tight tracking-[0.06em] text-ink md:text-5xl">
            {dict.info.title}
          </h2>
        </div>

        <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-[0_20px_50px_rgba(37,34,32,0.08)]">
          <iframe
            title={dict.info.mapTitle}
            src={site.mapsEmbed}
            className="h-[360px] w-full grayscale-[20%] contrast-[1.05] md:h-[480px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-5">
            <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-ink md:text-3xl">
              {dict.info.hoursLabel}
            </h3>
            <div className="font-serif text-lg text-ink-muted">
              <p className="mb-2 text-base text-ink/70">{dict.info.hoursSeason}</p>
              <ul className="flex flex-col gap-1">
                {dict.info.hoursLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="mt-2 text-base text-ink/70">{dict.info.winterNote}</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-display text-2xl uppercase tracking-[0.08em] text-ink md:text-3xl">
              {dict.info.contactHeading}
            </h3>
            <ul className="flex flex-col gap-5 font-serif text-lg text-ink-muted">
              <li>
                <span className="mb-1 block text-sm tracking-[0.12em] uppercase text-ink">
                  {dict.info.addressLabel}
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
                  {dict.info.phoneLabel}
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
                  {dict.info.emailLabel}
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
                  {dict.info.socialLabel}
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
        </div>
      </Container>
    </section>
  );
}
