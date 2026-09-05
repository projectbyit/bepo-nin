// SECTION: Hero — brand-first full-bleed hero with slogan and CTA
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = { dict: Dictionary };

export function HeroSection({ dict }: Props) {
  return (
    <section id="top" className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/gallery/restaurant_konoba_bepo_nin_old_town_table_booking_reservation_terrace_outdoor_dining_ambiance.jpg"
          alt={dict.hero.imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/45 to-ink/70" />
        <div className="pattern-bg absolute inset-0 mix-blend-soft-light" aria-hidden />
      </div>

      <Container className="relative flex min-h-[88vh] flex-col justify-end py-16 md:min-h-[92vh] md:py-24 lg:py-32">
        <div className="flex max-w-2xl flex-col gap-6 text-surface">
          <h1 className="font-display text-4xl uppercase leading-[1.1] tracking-[0.06em] text-surface md:text-5xl lg:text-6xl">
            {dict.hero.title}
          </h1>
          <p className="font-display text-2xl uppercase leading-tight tracking-[0.06em] text-gold md:text-3xl lg:text-4xl">
            {dict.hero.slogan}
          </p>
          <p className="max-w-xl font-serif text-lg text-surface/90 md:text-xl">
            {dict.hero.lead}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 font-serif text-base text-ink transition-colors duration-200 ease-out hover:bg-gold-hover active:translate-y-px"
            >
              {dict.hero.ctaReserve}
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-md border border-surface/40 bg-transparent px-6 py-3 font-serif text-base text-surface transition-colors duration-200 ease-out hover:border-gold hover:text-gold active:translate-y-px"
            >
              {dict.hero.ctaGallery}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
