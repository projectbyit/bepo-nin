import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { ContactSection } from "@/components/sections/home/ContactSection";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { GallerySection } from "@/components/sections/home/GallerySection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { InfoSection } from "@/components/sections/home/InfoSection";
import { JsonLd } from "@/components/shared/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <InfoSection />
        <ContactSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
