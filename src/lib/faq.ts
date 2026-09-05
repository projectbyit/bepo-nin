import { site } from "@/lib/site";

export const faqs = [
  {
    question: "Where is Bepo Restaurant Konoba Nin located?",
    answer: `Bepo Restaurant Konoba Nin is in the heart of Old Town Nin, Croatia, at ${site.address}. You will find us near the historic centre and the Nin lagoon — a short walk from the Roman bridge and the old town streets.`,
  },
  {
    question: "What are the opening hours at Bepo Restaurant Konoba Nin?",
    answer: `Bepo Restaurant Konoba Nin is open ${site.hours}. We welcome guests for lunch and dinner throughout the week in Old Town Nin.`,
  },
  {
    question: "How do I reserve a table at Bepo in Nin?",
    answer: `To book a table at Bepo Restaurant Konoba Nin, email ${site.email} or call ${site.phone}. Tell us the date, time, and number of guests — we will confirm your reservation as soon as we can.`,
  },
  {
    question: "What kind of food does Bepo Restaurant Konoba serve?",
    answer:
      "Bepo is a traditional Dalmatian restaurant and konoba. We serve fresh fish and seafood, seasonal vegetables, local olive oil, and Croatian wine — simple, honest cooking that tastes of Nin and the Adriatic coast.",
  },
  {
    question: "Is Bepo Restaurant Konoba Nin good for visitors and families?",
    answer:
      "Yes. Bepo offers warm hospitality in Old Town Nin — ideal after a stroll through the historic town, for couples, families, and travellers looking for authentic Dalmatian cuisine by the lagoon.",
  },
] as const;
