import type { Locale } from "./config";

export type FaqItem = {
  question: string;
  answer: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogDescription: string;
  };
  nav: {
    about: string;
    gallery: string;
    info: string;
    contact: string;
    faq: string;
    languages: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    title: string;
    slogan: string;
    lead: string;
    ctaReserve: string;
    ctaGallery: string;
    imageAlt: string;
  };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    imageAlt: string;
  };
  gallery: {
    label: string;
    title: string;
    lead: string;
  };
  info: {
    label: string;
    title: string;
    hoursLabel: string;
    hoursValue: string;
    winterNote: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    socialLabel: string;
    mapTitle: string;
  };
  contact: {
    label: string;
    title: string;
    leadBefore: string;
    leadAfter: string;
    booking: string;
    mailSubject: string;
  };
  faq: {
    label: string;
    title: string;
    lead: string;
    items: FaqItem[];
  };
  footer: {
    location: string;
    follow: string;
    partners: string;
    partnerDescription: string;
    rights: string;
    createdBy: string;
  };
};

const en: Dictionary = {
  meta: {
    title:
      "Bepo Restaurant Konoba Nin | Dalmatian Cuisine in Old Town Nin, Croatia",
    description:
      "Bepo Restaurant Konoba Nin — traditional Dalmatian fish, seafood and local wine in Old Town Nin. Open in season daily 13:00–22:00. Closed in winter (November–March). Reserve a table, or enquire about celebrations, first communions and confirmations.",
    keywords: [
      "Bepo Restaurant Nin",
      "Konoba Bepo Nin",
      "restaurant Old Town Nin",
      "Dalmatian cuisine Nin",
      "seafood restaurant Nin Croatia",
      "table reservation Nin",
      "celebration restaurant Nin",
      "first communion Nin restaurant",
    ],
    ogDescription:
      "The story continues in Nin. Fresh fish, local wine, and warm company in Old Town Nin. Open in season 13:00–22:00. Closed November–March.",
  },
  nav: {
    about: "About",
    gallery: "Gallery",
    info: "Info",
    contact: "Contact",
    faq: "FAQ",
    languages: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    title: "Restaurant Konoba BEPO Nin",
    slogan: "The story continues in Nin.",
    lead: "Fresh fish, local wine, and warm company in the heart of Old Town Nin.",
    ctaReserve: "Reserve a table",
    ctaGallery: "View gallery",
    imageAlt: "Dining atmosphere at Bepo in Old Town Nin",
  },
  about: {
    label: "About",
    title: "Welcome to the heart of Old Town Nin.",
    p1: "Welcome to Bepo restaurant and konoba in the heart of Old Town Nin, on the quiet shores of the Nin lagoon. Traditional Dalmatian cooking meets the warmth of a home table — fresh fish, seasonal vegetables, local wine, and olive oil that tastes of this place.",
    p2: "Bepo is more than a meal — it is the experience of Nin: sea, salt, stone, and generations who lived from this land and water. Use the weekend for a stroll through town, then finish with a plate at our table.",
    imageAlt: "Atmosphere at Bepo Restaurant Konoba Nin",
  },
  gallery: {
    label: "Gallery",
    title: "Moments from the table and the town.",
    lead: "Fresh plates, stone streets, and evenings shared with friends and family.",
  },
  info: {
    label: "Info / Contact",
    title: "Find us at the end of the Roman bridge.",
    hoursLabel: "Opening hours",
    hoursValue: "In season: every day 13:00 – 22:00 (April–October)",
    winterNote: "Closed in winter: November–March",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    socialLabel: "Social",
    mapTitle: "Bepo Restaurant location on Google Maps",
  },
  contact: {
    label: "Contact",
    title: "The table is set. All that's missing is good company.",
    leadBefore:
      "Send us a message for reservations, celebrations, or questions. We'll get back to you soon — or call us directly at",
    leadAfter: ".",
    booking: "Booking Table",
    mailSubject: "Table booking — Bepo Nin",
  },
  faq: {
    label: "FAQ",
    title: "Questions guests often ask.",
    lead: "Practical answers about Bepo Restaurant Konoba Nin — location, seasonal hours, reservations, celebrations, and what to expect at our table in Old Town Nin.",
    items: [
      {
        question: "Where is Bepo Restaurant Konoba Nin located?",
        answer:
          "Bepo Restaurant Konoba Nin is in the heart of Old Town Nin, Croatia, at Ul. Hrvatskog Sabora 1, 23233 Nin. You will find us near the historic centre and the Nin lagoon — a short walk from the Roman bridge and the old town streets.",
      },
      {
        question: "What are the opening hours? Are you open in winter?",
        answer:
          "In season (April–October) we are open every day from 13:00 to 22:00. We are closed in winter from November to March.",
      },
      {
        question: "How do I reserve a table at Bepo in Nin?",
        answer:
          "To book a table at Bepo Restaurant Konoba Nin, email info@beporestaurantnin.com or call +385 99 873 4483. Tell us the date, time, and number of guests — we will confirm your reservation as soon as we can.",
      },
      {
        question: "What kind of food does Bepo Restaurant Konoba serve?",
        answer:
          "Bepo is a traditional Dalmatian restaurant and konoba. We serve fresh fish and seafood, seasonal vegetables, local olive oil, and Croatian wine — simple, honest cooking that tastes of Nin and the Adriatic coast.",
      },
      {
        question:
          "Do you organise celebrations, first communions and confirmations?",
        answer:
          "Yes. At Bepo Restaurant Konoba Nin we organise private celebrations and family gatherings — including baptisms, first communions (pričesti) and confirmations (krizme). Contact us with the date and number of guests and we will arrange the details.",
      },
      {
        question: "Is Bepo Restaurant Konoba Nin good for visitors and families?",
        answer:
          "Yes. Bepo offers warm hospitality in Old Town Nin — ideal after a stroll through the historic town, for couples, families, and travellers looking for authentic Dalmatian cuisine by the lagoon.",
      },
    ],
  },
  footer: {
    location: "Old Town Nin",
    follow: "Follow",
    partners: "Partners",
    partnerDescription:
      "Porat Pizza & Bar on Branimirova Obala in Zadar — open all year round",
    rights: "© 2026 Restaurant Bepo. All rights reserved. Created by",
    createdBy: "projectby.it",
  },
};

const hr: Dictionary = {
  meta: {
    title:
      "Restoran Konoba Bepo Nin | Dalmatinska kuhinja u starom gradu Ninu",
    description:
      "Restoran Konoba Bepo Nin — tradicionalna dalmatinska riba, plodovi mora i lokalna vina u starom gradu Ninu. U sezoni radimo svaki dan 13:00–22:00. Zimi ne radimo (studeni–ožujak). Rezervirajte stol ili se raspitajte za domjenke, pričesti i krizme.",
    keywords: [
      "Restoran Bepo Nin",
      "Konoba Bepo Nin",
      "restoran stari grad Nin",
      "dalmatinska kuhinja Nin",
      "riba restoran Nin",
      "rezervacija stola Nin",
      "domjenak Nin restoran",
      "pričest krizma Nin",
    ],
    ogDescription:
      "Priča se nastavlja u Ninu. Svježa riba, lokalno vino i toplina domaćeg stola u starom gradu Ninu. U sezoni 13:00–22:00. Zimi zatvoreno (studeni–ožujak).",
  },
  nav: {
    about: "O nama",
    gallery: "Galerija",
    info: "Info",
    contact: "Kontakt",
    faq: "Pitanja",
    languages: "Jezik",
    openMenu: "Otvori izbornik",
    closeMenu: "Zatvori izbornik",
  },
  hero: {
    title: "Restoran Konoba BEPO Nin",
    slogan: "Priča se nastavlja u Ninu.",
    lead: "Svježa riba, lokalno vino i toplina društva u srcu starog grada Nina.",
    ctaReserve: "Rezervirajte stol",
    ctaGallery: "Pogledajte galeriju",
    imageAlt: "Ambijent blagovanja u restoranu Bepo u starom gradu Ninu",
  },
  about: {
    label: "O nama",
    title: "Dobrodošli u srce starog grada Nina.",
    p1: "Dobrodošli u restoran i konobu Bepo u srcu starog grada Nina, uz mirne obale Ninške lagune. Tradicionalna dalmatinska kuhinja susreće toplinu domaćeg stola — svježa riba, sezonsko povrće, lokalno vino i maslinovo ulje okusa ovog kraja.",
    p2: "Bepo je više od obroka — to je doživljaj Nina: more, sol, kamen i naraštaji koji su živjeli od ovog kraja i mora. Iskoristite vikend za šetnju gradom, a zatim završite tanjurom za našim stolom.",
    imageAlt: "Ambijent restorana Konoba Bepo Nin",
  },
  gallery: {
    label: "Galerija",
    title: "Trenuci sa stola i iz grada.",
    lead: "Svježi tanjuri, kamene ulice i večeri provedene s prijateljima i obitelji.",
  },
  info: {
    label: "Info / Kontakt",
    title: "Nađite nas na kraju Rimskog mosta.",
    hoursLabel: "Radno vrijeme",
    hoursValue: "U sezoni: svaki dan 13:00 – 22:00 (travanj–listopad)",
    winterNote: "Zimi ne radimo: studeni–ožujak",
    addressLabel: "Adresa",
    phoneLabel: "Telefon",
    emailLabel: "Email",
    socialLabel: "Društvene mreže",
    mapTitle: "Lokacija restorana Bepo na Google kartama",
  },
  contact: {
    label: "Kontakt",
    title: "Stol je spreman. Nedostaje samo dobro društvo.",
    leadBefore:
      "Pošaljite nam poruku za rezervacije, domjenke ili upite. Javit ćemo vam se uskoro — ili nas nazovite na",
    leadAfter: ".",
    booking: "Rezervacija stola",
    mailSubject: "Rezervacija stola — Bepo Nin",
  },
  faq: {
    label: "Pitanja i odgovori",
    title: "Pitanja koja gosti često postavljaju.",
    lead: "Praktični odgovori o restoranu Konoba Bepo Nin — lokacija, sezonsko radno vrijeme, rezervacije, domjenke i što očekivati za našim stolom u starom gradu Ninu.",
    items: [
      {
        question: "Gdje se nalazi restoran Konoba Bepo Nin?",
        answer:
          "Restoran Konoba Bepo Nin nalazi se u srcu starog grada Nina, Hrvatska, na adresi Ul. Hrvatskog sabora 1, 23233 Nin. Blizu ste povijesne jezgre i Ninške lagune — kratka šetnja od Rimskog mosta i starih ulica.",
      },
      {
        question: "Koje je radno vrijeme? Radite li zimi?",
        answer:
          "U sezoni (travanj–listopad) radimo svaki dan od 13:00 do 22:00. Zimi ne radimo — od studenoga do ožujka smo zatvoreni.",
      },
      {
        question: "Kako rezervirati stol u Bepu u Ninu?",
        answer:
          "Za rezervaciju stola u restoranu Konoba Bepo Nin pošaljite email na info@beporestaurantnin.com ili nazovite +385 99 873 4483. Javite nam datum, vrijeme i broj gostiju — potvrdit ćemo rezervaciju što prije.",
      },
      {
        question: "Kakvu hranu nudi restoran Konoba Bepo?",
        answer:
          "Bepo je tradicionalni dalmatinski restoran i konoba. Poslužujemo svježu ribu i plodove mora, sezonsko povrće, lokalno maslinovo ulje i hrvatska vina — jednostavnu, iskrenu kuhinju okusa Nina i Jadrana.",
      },
      {
        question: "Organizirate li domjenke, pričesti i krizme?",
        answer:
          "Da. U restoranu Konoba Bepo Nin organiziramo privatne proslave i obiteljske domjenke — uključujući krštenja, pričesti i krizme. Javite nam se s datumom i brojem gostiju pa ćemo dogovoriti detalje.",
      },
      {
        question: "Je li Bepo pogodan za posjetitelje i obitelji?",
        answer:
          "Da. Bepo nudi toplu gostoljubivost u starom gradu Ninu — idealan nakon šetnje povijesnim gradom, za parove, obitelji i putnike u potrazi za autentičnom dalmatinskom kuhinjom uz lagunu.",
      },
    ],
  },
  footer: {
    location: "Stari grad Nin",
    follow: "Pratite nas",
    partners: "Partneri",
    partnerDescription:
      "Porat Pizza & Bar na Branimirovoj obali u Zadru — radi cijelu godinu",
    rights: "© 2026 Restaurant Bepo. Sva prava pridržana. Izradio",
    createdBy: "projectby.it",
  },
};

const de: Dictionary = {
  meta: {
    title:
      "Restaurant Konoba Bepo Nin | Dalmatinische Küche in der Altstadt von Nin",
    description:
      "Restaurant Konoba Bepo Nin — traditioneller dalmatinischer Fisch, Meeresfrüchte und lokale Weine in der Altstadt von Nin. In der Saison täglich 13:00–22:00 geöffnet. Im Winter geschlossen (November–März). Reservieren Sie einen Tisch oder fragen Sie nach Feiern, Erstkommunionen und Firmungen.",
    keywords: [
      "Restaurant Bepo Nin",
      "Konoba Bepo Nin",
      "Restaurant Altstadt Nin",
      "dalmatinische Küche Nin",
      "Fischrestaurant Nin Kroatien",
      "Tischreservierung Nin",
      "Feier Restaurant Nin",
      "Erstkommunion Firmung Nin",
    ],
    ogDescription:
      "Die Geschichte geht in Nin weiter. Frischer Fisch, lokaler Wein und herzliche Gastfreundschaft in der Altstadt von Nin. In der Saison 13:00–22:00. Geschlossen November–März.",
  },
  nav: {
    about: "Über uns",
    gallery: "Galerie",
    info: "Info",
    contact: "Kontakt",
    faq: "FAQ",
    languages: "Sprache",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },
  hero: {
    title: "Restaurant Konoba BEPO Nin",
    slogan: "Die Geschichte geht in Nin weiter.",
    lead: "Frischer Fisch, lokaler Wein und herzliche Gesellschaft im Herzen der Altstadt von Nin.",
    ctaReserve: "Tisch reservieren",
    ctaGallery: "Galerie ansehen",
    imageAlt: "Essatmosphäre im Restaurant Bepo in der Altstadt von Nin",
  },
  about: {
    label: "Über uns",
    title: "Willkommen im Herzen der Altstadt von Nin.",
    p1: "Willkommen im Restaurant und in der Konoba Bepo im Herzen der Altstadt von Nin, an den ruhigen Ufern der Lagune von Nin. Traditionelle dalmatinische Küche trifft auf die Wärme eines heimischen Tisches — frischer Fisch, saisonales Gemüse, lokaler Wein und Olivenöl mit dem Geschmack dieser Region.",
    p2: "Bepo ist mehr als eine Mahlzeit — es ist das Erlebnis von Nin: Meer, Salz, Stein und Generationen, die von diesem Land und Wasser lebten. Nutzen Sie das Wochenende für einen Spaziergang durch die Stadt und beenden Sie den Tag an unserem Tisch.",
    imageAlt: "Ambiente im Restaurant Konoba Bepo Nin",
  },
  gallery: {
    label: "Galerie",
    title: "Momente vom Tisch und aus der Stadt.",
    lead: "Frische Teller, steinerne Gassen und Abende mit Freunden und Familie.",
  },
  info: {
    label: "Info / Kontakt",
    title: "Finden Sie uns am Ende der Römerbrücke.",
    hoursLabel: "Öffnungszeiten",
    hoursValue: "In der Saison: täglich 13:00 – 22:00 (April–Oktober)",
    winterNote: "Im Winter geschlossen: November–März",
    addressLabel: "Adresse",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail",
    socialLabel: "Social Media",
    mapTitle: "Standort von Restaurant Bepo auf Google Maps",
  },
  contact: {
    label: "Kontakt",
    title: "Der Tisch ist gedeckt. Es fehlt nur noch gute Gesellschaft.",
    leadBefore:
      "Schreiben Sie uns für Reservierungen, Feiern oder Fragen. Wir melden uns bald — oder rufen Sie uns direkt an unter",
    leadAfter: ".",
    booking: "Tisch reservieren",
    mailSubject: "Tischreservierung — Bepo Nin",
  },
  faq: {
    label: "FAQ",
    title: "Fragen, die Gäste oft stellen.",
    lead: "Praktische Antworten zu Restaurant Konoba Bepo Nin — Lage, saisonale Öffnungszeiten, Reservierungen, Feiern und was Sie an unserem Tisch in der Altstadt von Nin erwarten können.",
    items: [
      {
        question: "Wo befindet sich das Restaurant Konoba Bepo Nin?",
        answer:
          "Das Restaurant Konoba Bepo Nin liegt im Herzen der Altstadt von Nin, Kroatien, in der Ul. Hrvatskog Sabora 1, 23233 Nin. Sie finden uns nahe dem historischen Zentrum und der Lagune von Nin — nur wenige Schritte von der Römerbrücke und den Altstadtgassen entfernt.",
      },
      {
        question: "Welche Öffnungszeiten gelten? Habt ihr im Winter geöffnet?",
        answer:
          "In der Saison (April–Oktober) sind wir täglich von 13:00 bis 22:00 geöffnet. Im Winter haben wir geschlossen — von November bis März.",
      },
      {
        question: "Wie reserviere ich einen Tisch bei Bepo in Nin?",
        answer:
          "Um einen Tisch im Restaurant Konoba Bepo Nin zu reservieren, schreiben Sie an info@beporestaurantnin.com oder rufen Sie +385 99 873 4483 an. Nennen Sie Datum, Uhrzeit und Personenanzahl — wir bestätigen Ihre Reservierung so bald wie möglich.",
      },
      {
        question: "Welche Küche bietet das Restaurant Konoba Bepo?",
        answer:
          "Bepo ist ein traditionelles dalmatinisches Restaurant und eine Konoba. Wir servieren frischen Fisch und Meeresfrüchte, saisonales Gemüse, lokales Olivenöl und kroatische Weine — schlichte, ehrliche Küche mit dem Geschmack von Nin und der Adria.",
      },
      {
        question:
          "Organisiert ihr Feiern, Erstkommunionen und Firmungen?",
        answer:
          "Ja. Im Restaurant Konoba Bepo Nin organisieren wir private Feiern und Familientreffen — einschließlich Taufen, Erstkommunionen und Firmungen. Kontaktieren Sie uns mit Datum und Personenanzahl, und wir klären die Details.",
      },
      {
        question:
          "Ist Bepo Restaurant Konoba Nin für Besucher und Familien geeignet?",
        answer:
          "Ja. Bepo bietet herzliche Gastfreundschaft in der Altstadt von Nin — ideal nach einem Spaziergang durch die historische Stadt, für Paare, Familien und Reisende, die authentische dalmatinische Küche an der Lagune suchen.",
      },
    ],
  },
  footer: {
    location: "Altstadt Nin",
    follow: "Folgen",
    partners: "Partner",
    partnerDescription:
      "Porat Pizza & Bar an der Branimirova Obala in Zadar — ganzjährig geöffnet",
    rights: "© 2026 Restaurant Bepo. Alle Rechte vorbehalten. Erstellt von",
    createdBy: "projectby.it",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, hr, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
