import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { ContactSection } from "@/components/sections/home/ContactSection";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { GallerySection } from "@/components/sections/home/GallerySection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { InfoSection } from "@/components/sections/home/InfoSection";
import { JsonLd } from "@/components/shared/JsonLd";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <JsonLd locale={locale} dict={dict} />
      <SiteHeader locale={locale} dict={dict} />
      <main>
        <HeroSection dict={dict} />
        <AboutSection dict={dict} />
        <GallerySection dict={dict} />
        <InfoSection dict={dict} />
        <ContactSection dict={dict} />
        <FaqSection dict={dict} />
      </main>
      <SiteFooter locale={locale} dict={dict} />
    </>
  );
}
