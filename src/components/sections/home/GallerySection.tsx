"use client";

// SECTION: Gallery — photo gallery with soft lightbox zoom
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/shared/Container";

const P =
  "/gallery/restaurant_konoba_bepo_nin_old_town_table_booking_reservation";

const images = [
  {
    src: `${P}_terrace_outdoor_dining_ambiance.jpg`,
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
    src: `${P}_dining_table_setting.jpg`,
    alt: "Table setting at Restaurant Konoba Bepo Nin",
  },
  {
    src: `${P}_evening_old_town_lights.jpg`,
    alt: "Evening lights in Old Town Nin near Bepo",
  },
  {
    src: `${P}_restaurant_ambiance_interior.jpg`,
    alt: "Warm dining ambiance at Bepo Restaurant Konoba Nin",
  },
] as const;

const SLIDE_MS = 360;

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [motion, setMotion] = useState({
    opacity: 1,
    x: 0,
    animate: true,
  });
  const locking = useRef(false);

  const close = useCallback(() => {
    setActiveIndex(null);
    locking.current = false;
    setMotion({ opacity: 1, x: 0, animate: true });
  }, []);

  const goTo = useCallback(
    (nextIndex: number, dir: 1 | -1) => {
      if (locking.current || activeIndex === null) return;
      locking.current = true;

      // Soft exit
      setMotion({ opacity: 0, x: dir * -28, animate: true });

      window.setTimeout(() => {
        setDisplayIndex(nextIndex);
        setActiveIndex(nextIndex);
        // Place incoming slide without animating
        setMotion({ opacity: 0, x: dir * 28, animate: false });

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setMotion({ opacity: 1, x: 0, animate: true });
            window.setTimeout(() => {
              locking.current = false;
            }, SLIDE_MS);
          });
        });
      }, SLIDE_MS);
    },
    [activeIndex],
  );

  const showPrev = useCallback(() => {
    if (activeIndex === null) return;
    goTo((activeIndex - 1 + images.length) % images.length, -1);
  }, [activeIndex, goTo]);

  const showNext = useCallback(() => {
    if (activeIndex === null) return;
    goTo((activeIndex + 1) % images.length, 1);
  }, [activeIndex, goTo]);

  const openAt = useCallback((index: number) => {
    setDisplayIndex(index);
    setActiveIndex(index);
    setMotion({ opacity: 1, x: 0, animate: true });
    locking.current = false;
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

  const active = activeIndex !== null ? images[displayIndex] : null;

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
              onClick={() => openAt(index)}
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
          className="fixed inset-0 z-[100]"
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          {/* Dedicated backdrop — tap/click anywhere on dark area closes (mobile + desktop) */}
          <button
            type="button"
            className="absolute inset-0 bg-ink/92"
            aria-label="Close gallery"
            onClick={close}
          />

          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-md bg-surface/10 font-serif text-2xl text-surface transition-colors duration-300 ease-out hover:bg-surface/20 md:top-6 md:right-6"
            aria-label="Close"
          >
            ×
          </button>

          <button
            type="button"
            onClick={showPrev}
            className="absolute top-1/2 left-2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-surface/10 font-serif text-2xl text-surface transition-colors duration-300 ease-out hover:bg-surface/20 md:left-6"
            aria-label="Previous photo"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={showNext}
            className="absolute top-1/2 right-2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md bg-surface/10 font-serif text-2xl text-surface transition-colors duration-300 ease-out hover:bg-surface/20 md:right-6"
            aria-label="Next photo"
          >
            ›
          </button>

          <div className="pointer-events-none relative flex h-full items-center justify-center p-4 md:p-10">
            <div
              className="pointer-events-auto relative aspect-[3/4] w-full max-w-[min(100%,22rem)] md:max-h-[82vh] md:max-w-xl lg:max-w-2xl"
              style={{
                opacity: motion.opacity,
                transform: `translateX(${motion.x}px)`,
                transition: motion.animate
                  ? `opacity ${SLIDE_MS}ms ease-out, transform ${SLIDE_MS}ms ease-out`
                  : "none",
              }}
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 900px"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
