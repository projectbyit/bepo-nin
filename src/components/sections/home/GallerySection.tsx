// SECTION: Gallery — photo gallery from Nin and the restaurant
import Image from "next/image";
import { Container } from "@/components/shared/Container";

const images = [
  {
    src: "/gallery/terrace.png",
    alt: "Terrace dining at Bepo",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/gallery/dining.png",
    alt: "Table setting at Bepo",
    className: "",
  },
  {
    src: "/gallery/evening.png",
    alt: "Evening light in Old Town Nin",
    className: "",
  },
  {
    src: "/gallery/ambiance.png",
    alt: "Restaurant ambiance",
    className: "md:col-span-2",
  },
] as const;

export function GallerySection() {
  return (
    <section id="gallery" className="w-full bg-background-soft py-16 md:py-24 lg:py-32">
      <Container className="flex flex-col gap-10">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="font-serif text-sm tracking-[0.18em] uppercase text-gold">
            Gallery
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            Moments from the table and the town.
          </h2>
          <p className="font-serif text-lg text-ink-muted">
            Fresh plates, stone streets, and evenings shared with friends and family.
          </p>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:auto-rows-[240px] md:grid-cols-4 md:gap-5 lg:auto-rows-[280px]">
          {images.map((image) => (
            <figure
              key={image.src}
              className={`relative overflow-hidden rounded-lg ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
