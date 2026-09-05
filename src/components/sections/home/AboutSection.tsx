// SECTION: About — restaurant story and atmosphere
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-background py-16 md:py-24 lg:py-32">
      <div className="pattern-bg absolute inset-0 opacity-20" aria-hidden />
      <Container className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <p className="font-serif text-sm tracking-[0.18em] uppercase text-gold">
            About
          </p>
          <h2 className="font-display text-4xl uppercase leading-tight tracking-[0.06em] text-ink md:text-5xl">
            Welcome to the heart of Old Town Nin.
          </h2>
          <p className="font-serif text-lg leading-relaxed text-ink-muted md:text-xl">
            {site.description}
          </p>
          <p className="font-serif text-lg leading-relaxed text-ink-muted md:text-xl">
            Bepo is more than a meal — it is the experience of Nin: sea, salt, stone,
            and generations who lived from this land and water. Use the weekend for a
            stroll through town, then finish with a plate at our table.
          </p>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
          <Image
            src="/gallery/ambiance.png"
            alt="Atmosphere at Bepo Restaurant Konoba Nin"
            fill
            className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </Container>
    </section>
  );
}
