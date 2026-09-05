import type { Metadata } from "next";
import { Sorts_Mill_Goudy } from "next/font/google";
import Script from "next/script";
import { notFound } from "next/navigation";
import {
  isLocale,
  localeHtmlLang,
  localeOpenGraph,
  localePath,
  locales,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const goudy = Sorts_Mill_Goudy({
  variable: "--font-goudy",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw;
  const dict = getDictionary(locale);
  const canonical = `https://beporestaurantnin.com${localePath(locale)}`;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    metadataBase: new URL("https://beporestaurantnin.com"),
    alternates: {
      canonical,
      languages: {
        en: "https://beporestaurantnin.com/",
        hr: "https://beporestaurantnin.com/hr",
        de: "https://beporestaurantnin.com/de",
        "x-default": "https://beporestaurantnin.com/",
      },
    },
    openGraph: {
      title: "Bepo Restaurant Konoba Nin",
      description: dict.meta.ogDescription,
      url: canonical,
      siteName: "Bepo Restaurant Konoba Nin",
      locale: localeOpenGraph[locale],
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => localeOpenGraph[item]),
      type: "website",
      images: [
        {
          url: "/og-cover.jpg",
          width: 1200,
          height: 630,
          alt: "Bepo Restaurant Konoba Nin",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Bepo Restaurant Konoba Nin",
      description: dict.meta.ogDescription,
      images: ["/og-cover.jpg"],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.png", type: "image/png", sizes: "512x512" },
        { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <html lang={localeHtmlLang[locale]} className={`${goudy.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-serif text-ink">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3359W3HNYJ"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3359W3HNYJ');
        `}</Script>
        {children}
      </body>
    </html>
  );
}
