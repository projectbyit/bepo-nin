"use client";

// SECTION: Gallery — photo gallery with lightbox zoom
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Container } from "@/components/shared/Container";

const P =
  "/gallery/restaurant_konoba_bepo_nin_old_town_table_booking_reservation";

const images = [
  {
    src: `${P}_terrace_outdoor_dining_ambiance.png`,
    alt: "Outdoor terrace dining at Restaurant Konoba Bepo Nin",
  },
  {
    src: `${P}_staff_smiling_hospitality_team.jpg`,
    alt: "Friendly Bepo restaurant staff smiling in Old Town Nin",
  },
  {
    src: `${P}_waiter_serving_steak_seafood_terrace.jpg`,
    alt: "Waiter serving steak and seafood on the Bepo terrace",
  },
  {
    src: `${P}_grilled_seafood_fish_platter_rose_wine.jpg`,
    alt: "Grilled seafood platter with rose wine at Bepo Nin",
  },
  {
    src: `${P}_grilled_steak_rosemary_potatoes_vegetables.jpg`,
    alt: "Grilled steak with rosemary, potatoes and vegetables at Bepo",
  },
  {
    src: `${P}_white_fish_polenta_capers_seafood.jpg`,
    alt: "White fish with polenta and capers at Restaurant Konoba Bepo",
  },
  {
    src: `${P}_grilled_steak_sliced_meat_dish.jpg`,
    alt: "Sliced grilled steak served at Bepo Restaurant Nin",
  },
  {
    src: `${P}_steak_tartare_tableside_preparation.jpg`,
    alt: "Tableside steak tartare preparation at Bepo Konoba Nin",
  },
  {
    src: `${P}_wooden_sign_entrance_logo.jpg`,
    alt: "Wooden Bepo restaurant sign at the entrance in Nin",
  },
  {
    src: `${P}_dining_table_setting.png`,
    alt: "Table setting at Restaurant Konoba Bepo Nin",
  },
  {
    src: `${P}_evening_old_town_lights.png`,
    alt: "Evening lights in Old Town Nin near Bepo",
  },
  {
    src: `${P}_restaurant_ambiance_interior.png`,
    alt: "Warm dining ambiance at Bepo Restaurant Konoba Nin",
  },
] as const;

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length,
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <section id="gallery" className="w-full bg-background-soft py-16 md:py-24 lg:py-32">
      <Container className="flex flex-col gap-10">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="font-serif text-sm tracking-[0.18em] uppercase text-gold">
            Gallery
          </p>
          <h2 className="font-display text-4xl uppercase leading-tight tracking-[0.06em] text-ink md:text-5xl">
            Moments from the table and the town.
          </h2>
          <p className="font-serif text-lg text-ink-muted">
            Fresh plates, stone streets, and evenings shared with friends and family.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-label={`Open photo: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/15" />
            </button>
          ))}
        </div>
      </Container>

      {active && activeIndex !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-md bg-surface/10 font-serif text-2xl text-surface transition-colors hover:bg-surface/20 md:top-6 md:right-6"
            aria-label="Close"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-md bg-surface/10 font-serif text-2xl text-surface transition-colors hover:bg-surface/20 md:left-6"
            aria-label="Previous photo"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-md bg-surface/10 font-serif text-2xl text-surface transition-colors hover:bg-surface/20 md:right-16"
            aria-label="Next photo"
          >
            ›
          </button>

          <div
            className="relative h-[min(85vh,900px)] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
