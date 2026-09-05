import { faqs } from "@/lib/faq";
import { site } from "@/lib/site";

export function JsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
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
    name: site.name,
    description: site.description,
    url: site.website,
    telephone: site.phone,
    email: site.email,
    image: "https://beporestaurantnin.com/logo-bepo.png",
    servesCuisine: ["Dalmatian", "Croatian", "Mediterranean", "Seafood"],
    priceRange: "$$",
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
