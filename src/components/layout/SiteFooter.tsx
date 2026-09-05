import { Container } from "@/components/shared/Container";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-ink text-surface">
      <Container className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between md:py-10">
        <p className="font-serif text-sm text-surface/80">
          &copy; 2026 All rights reserved. Created by{" "}
          <a
            href={site.createdBy.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline decoration-gold/40 transition-colors duration-200 ease-out hover:text-gold-hover hover:decoration-gold"
          >
            {site.createdBy.label}
          </a>
        </p>
        <div className="flex gap-4 font-serif text-sm">
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-surface/80 transition-colors duration-200 ease-out hover:text-gold"
          >
            Facebook
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-surface/80 transition-colors duration-200 ease-out hover:text-gold"
          >
            Instagram
          </a>
        </div>
      </Container>
    </footer>
  );
}
