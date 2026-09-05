import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-ink text-surface">
      <Container className="flex flex-col gap-10 py-16 md:gap-12 md:py-20 lg:py-24">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col gap-4">
            <Link
              href="#top"
              className="inline-flex w-fit transition-opacity duration-200 ease-out hover:opacity-80"
            >
              <Image
                src="/logo-bepo.png"
                alt={`${site.name} logo`}
                width={773}
                height={206}
                className="h-12 w-auto object-contain brightness-0 invert md:h-14"
              />
            </Link>
            <p className="font-serif text-lg leading-relaxed text-surface/85 md:text-xl">
              Old Town Nin
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-serif text-xs tracking-[0.18em] uppercase text-gold">
              Follow
            </p>
            <div className="flex flex-col gap-2 font-serif text-base md:text-lg">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-surface/85 transition-colors duration-200 ease-out hover:text-gold"
              >
                Facebook
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-surface/85 transition-colors duration-200 ease-out hover:text-gold"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-serif text-xs tracking-[0.18em] uppercase text-gold">
              Partners
            </p>
            <a
              href={site.partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-base text-surface/85 transition-colors duration-200 ease-out hover:text-gold md:text-lg"
            >
              {site.partner.label}
            </a>
            <p className="max-w-xs font-serif text-sm leading-relaxed text-surface/65 md:text-base">
              {site.partner.description}
            </p>
          </div>
        </div>

        <div className="border-t border-surface/15 pt-8">
          <p className="font-serif text-base text-surface/75 md:text-lg">
            &copy; 2026 Restaurant Bepo. All rights reserved. Created by{" "}
            <a
              href={site.createdBy.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline decoration-gold/40 transition-colors duration-200 ease-out hover:text-gold-hover hover:decoration-gold"
            >
              {site.createdBy.label}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
