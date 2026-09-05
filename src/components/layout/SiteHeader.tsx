import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-3 md:py-4">
        <Link
          href="#top"
          className="group inline-flex shrink-0 items-center transition-opacity duration-200 ease-out hover:opacity-80"
        >
          <Image
            src="/logo-bepo.png"
            alt={`${site.name} logo`}
            width={773}
            height={206}
            className="h-10 w-auto object-contain md:h-12"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm px-2.5 py-2 font-serif text-xs tracking-[0.16em] uppercase text-ink-muted transition-colors duration-200 ease-out hover:text-ink focus-visible:text-ink md:px-3 md:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
