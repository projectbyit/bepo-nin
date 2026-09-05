"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  localeNames,
  localePath,
  locales,
  type Locale,
} from "@/i18n/config";

type Props = {
  locale: Locale;
  label: string;
  variant?: "desktop" | "mobile";
};

export function LanguageSwitcher({
  locale,
  label,
  variant = "desktop",
}: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  if (variant === "mobile") {
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="font-serif text-sm tracking-[0.18em] uppercase text-gold">
          {label}
        </p>
        <div className="flex items-center gap-3">
          {locales.map((code) => (
            <Link
              key={code}
              href={localePath(code)}
              className={`font-display text-2xl uppercase tracking-[0.12em] transition-colors duration-200 ease-out ${
                code === locale ? "text-gold" : "text-ink hover:text-gold"
              }`}
              hrefLang={code}
            >
              {localeNames[code]}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-1.5 rounded-sm px-2.5 py-2 font-serif text-xs tracking-[0.16em] uppercase text-ink-muted transition-colors duration-200 ease-out hover:text-ink md:px-3 md:text-sm"
      >
        {localeNames[locale]}
        <span aria-hidden className="text-[0.65em] text-gold">
          ▾
        </span>
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute right-0 top-full z-[90] mt-1 min-w-[5.5rem] overflow-hidden rounded-md border border-border bg-background py-1 shadow-[0_12px_30px_rgba(37,34,32,0.12)]"
        >
          {locales.map((code) => (
            <li key={code} role="option" aria-selected={code === locale}>
              <Link
                href={localePath(code)}
                hrefLang={code}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 font-serif text-sm tracking-[0.12em] uppercase transition-colors duration-200 ease-out ${
                  code === locale
                    ? "bg-background-soft text-gold"
                    : "text-ink-muted hover:bg-background-soft hover:text-ink"
                }`}
              >
                {localeNames[code]}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
