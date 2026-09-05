export const locales = ["en", "hr", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "EN",
  hr: "HR",
  de: "DE",
};

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  hr: "hr",
  de: "de",
};

export const localeOpenGraph: Record<Locale, string> = {
  en: "en_US",
  hr: "hr_HR",
  de: "de_DE",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale, path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) {
    return clean === "/" ? "/" : clean;
  }
  if (clean === "/") return `/${locale}`;
  return `/${locale}${clean}`;
}
