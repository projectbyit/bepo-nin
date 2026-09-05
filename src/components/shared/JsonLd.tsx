import type { Dictionary } from "@/i18n/dictionaries";
import { localePath, type Locale } from "@/i18n/config";
import { site } from "@/lib/site";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function JsonLd({ locale, dict }: Props) {
  const pageUrl = `https://beporestaurantnin.com${localePath(locale)}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${pageUrl}#restaurant`,
    name: site.name,
    description: dict.meta.description,
    url: pageUrl,
    telephone: site.phone,
    email: site.email,
    image: [
      "https://beporestaurantnin.com/og-cover.jpg",
      "https://beporestaurantnin.com/logo-bepo.png",
    ],
    servesCuisine: ["Dalmatian", "Croatian", "Mediterranean", "Seafood"],
    priceRange: "$$",
    inLanguage: locale,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ul. Hrvatskog Sabora 1",
      addressLocality: "Nin",
      postalCode: "23233",
      addressCountry: "HR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.2435,
      longitude: 15.1831,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "13:00",
      closes: "22:00",
      validFrom: "2026-04-01",
      validThrough: "2026-10-31",
    },
    sameAs: [site.facebook, site.instagram],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
    </>
  );
}
