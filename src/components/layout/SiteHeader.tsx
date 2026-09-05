"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Container } from "@/components/shared/Container";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteHeader({ locale, dict }: Props) {
  const [open, setOpen] = useState(false);
  const home = localePath(locale);
  const navLinks = [
    { href: "#about", label: dict.nav.about },
    { href: "#gallery", label: dict.nav.gallery },
    { href: "#info", label: dict.nav.info },
    { href: "#contact", label: dict.nav.contact },
    { href: "#faq", label: dict.nav.faq },
  ] as const;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-[70] border-b border-border bg-background">
        <Container className="relative flex items-center justify-between gap-4 py-3 md:py-4">
          <Link
            href={home}
            onClick={() => setOpen(false)}
            className="group relative z-[80] inline-flex shrink-0 items-center transition-opacity duration-200 ease-out hover:opacity-80"
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

          <div className="hidden items-center gap-1 md:flex md:gap-2">
            <nav aria-label="Primary" className="flex items-center gap-1 md:gap-2">
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
            <LanguageSwitcher locale={locale} label={dict.nav.languages} />
          </div>

          <button
            type="button"
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="relative z-[80] flex h-11 w-11 items-center justify-center rounded-sm md:hidden"
          >
            <span className="relative block h-3 w-7" aria-hidden>
              <span
                className={`absolute left-0 top-0 block h-px w-full bg-ink transition-transform duration-200 ease-out ${
                  open ? "translate-y-[5.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 block h-px w-full bg-ink transition-transform duration-200 ease-out ${
                  open ? "-translate-y-[5.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </Container>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[60] flex min-h-[100dvh] w-full flex-col bg-[#f1eee6] md:hidden"
          style={{ backgroundColor: "var(--background)" }}
        >
          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col items-center justify-center gap-10 px-6 pb-16 pt-24"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-center text-3xl uppercase tracking-[0.14em] text-ink transition-colors duration-200 ease-out hover:text-gold sm:text-4xl"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher
              locale={locale}
              label={dict.nav.languages}
              variant="mobile"
            />
          </nav>
        </div>
      ) : null}
    </>
  );
}
