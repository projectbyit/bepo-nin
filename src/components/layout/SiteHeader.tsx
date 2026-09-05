import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-3 md:py-4">
        <Link
          href="#top"
          className="group flex items-center gap-3 transition-opacity duration-200 ease-out hover:opacity-80"
        >
          <Image
            src="/logo.svg"
            alt={`${site.name} logo`}
            width={56}
            height={56}
            className="h-12 w-12 object-contain md:h-14 md:w-14"
            priority
          />
          <span className="hidden font-serif text-sm tracking-[0.12em] uppercase text-ink sm:block">
            Bepo
          </span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm px-2.5 py-2 font-serif text-sm text-ink-muted transition-colors duration-200 ease-out hover:text-ink focus-visible:text-ink md:px-3 md:text-base"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
