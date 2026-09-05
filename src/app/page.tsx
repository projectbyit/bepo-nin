import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { ContactSection } from "@/components/sections/home/ContactSection";
import { GallerySection } from "@/components/sections/home/GallerySection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { InfoSection } from "@/components/sections/home/InfoSection";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <InfoSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
