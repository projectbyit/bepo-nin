// SECTION: About — restaurant story and atmosphere
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = { dict: Dictionary };

export function AboutSection({ dict }: Props) {
  return (
    <section id="about" className="relative w-full bg-background py-16 md:py-24 lg:py-32">
      <div className="pattern-bg absolute inset-0 opacity-20" aria-hidden />
      <Container className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <p className="font-serif text-sm tracking-[0.18em] uppercase text-gold">
            {dict.about.label}
          </p>
          <h2 className="font-display text-4xl uppercase leading-tight tracking-[0.06em] text-ink md:text-5xl">
            {dict.about.title}
          </h2>
          <p className="font-serif text-lg leading-relaxed text-ink-muted md:text-xl">
            {dict.about.p1}
          </p>
          <p className="font-serif text-lg leading-relaxed text-ink-muted md:text-xl">
            {dict.about.p2}
          </p>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
          <Image
            src="/gallery/restaurant_konoba_bepo_nin_old_town_table_booking_reservation_restaurant_ambiance_interior.jpg"
            alt={dict.about.imageAlt}
            fill
            className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </Container>
    </section>
  );
}
