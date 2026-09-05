// SECTION: Hero — brand-first full-bleed hero with slogan and CTA
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section id="top" className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/gallery/terrace.png"
          alt="Dining atmosphere at Bepo in Old Town Nin"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/45 to-ink/70" />
        <div className="pattern-2026 absolute inset-0 mix-blend-soft-light" aria-hidden />
      </div>

      <Container className="relative flex min-h-[88vh] flex-col justify-end py-16 md:min-h-[92vh] md:py-24 lg:py-32">
        <div className="flex max-w-2xl flex-col gap-6 text-surface">
          <Image
            src="/logo.svg"
            alt=""
            width={120}
            height={120}
            className="h-20 w-20 object-contain brightness-0 invert md:h-24 md:w-24"
            aria-hidden
          />
          <p className="font-serif text-sm tracking-[0.22em] uppercase text-gold">
            Restaurant // Konoba
          </p>
          <h1 className="font-display text-5xl leading-[1.05] text-surface md:text-6xl lg:text-7xl">
            Bepo
          </h1>
          <p className="font-display text-3xl leading-tight text-gold md:text-4xl lg:text-5xl">
            {site.slogan}
          </p>
          <p className="max-w-xl font-serif text-lg text-surface/90 md:text-xl">
            Fresh fish, local wine, and warm company in the heart of Old Town Nin.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 font-serif text-base text-ink transition-colors duration-200 ease-out hover:bg-gold-hover active:translate-y-px"
            >
              Reserve a table
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-md border border-surface/40 bg-transparent px-6 py-3 font-serif text-base text-surface transition-colors duration-200 ease-out hover:border-gold hover:text-gold active:translate-y-px"
            >
              View gallery
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
