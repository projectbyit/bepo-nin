export const site = {
  name: "Bepo Restaurant Konoba Nin",
  slogan: "The story continues in Nin.",
  description:
    "Welcome to Bepo restaurant and konoba in the heart of Old Town Nin, on the quiet shores of the Nin lagoon. Traditional Dalmatian cooking meets the warmth of a home table — fresh fish, seasonal vegetables, local wine, and olive oil that tastes of this place.",
  hours: "Every day 13:00 – 22:00",
  address: "Ul. Hrvatskog Sabora 1, 23233 Nin, Croatia",
  mapsUrl: "https://maps.app.goo.gl/We9fGqkHwMfigMvZ6",
  mapsEmbed:
    "https://www.google.com/maps?q=Bepo+Restaurant+Konoba+Nin,+Ul.+Hrvatskog+Sabora+1,+23233+Nin,+Croatia&z=18&hl=en&output=embed",
  phone: "+385 99 873 4483",
  phoneHref: "tel:+385998734483",
  email: "info@beporestaurantnin.com",
  website: "https://beporestaurantnin.com/",
  facebook: "https://www.facebook.com/restaurant.bepo/",
  instagram: "https://www.instagram.com/restaurant.bepo/",
  createdBy: {
    label: "projectby.it",
    href: "https://projectby.it",
  },
  partner: {
    label: "poratzadar.com",
    href: "https://poratzadar.com",
    description:
      "Porat Pizza & Bar on Branimirova Obala in Zadar — open all year round",
  },
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#info", label: "Info" },
  { href: "#contact", label: "Contact" },
  { href: "#faq", label: "FAQ" },
] as const;
