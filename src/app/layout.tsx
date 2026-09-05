import type { Metadata } from "next";
import { Sorts_Mill_Goudy } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const goudy = Sorts_Mill_Goudy({
  variable: "--font-goudy",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bepo Restaurant Konoba Nin | The story continues in Nin",
  description:
    "Bepo Restaurant Konoba Nin — traditional Dalmatian cuisine in Old Town Nin. Opening hours, location, gallery, and reservations.",
  metadataBase: new URL("https://beporestaurantnin.com"),
  openGraph: {
    title: "Bepo Restaurant Konoba Nin",
    description:
      "The story continues in Nin. Fresh fish, local wine, and warm company in Old Town Nin.",
    url: "https://beporestaurantnin.com",
    siteName: "Bepo Restaurant Konoba Nin",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${goudy.variable} h-full antialiased`}>
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
