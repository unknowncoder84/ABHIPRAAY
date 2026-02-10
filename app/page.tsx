import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { TrustSection } from '@/sections/TrustSection';
import { GallerySection } from '@/sections/GallerySection';
import { ContactSection } from '@/sections/ContactSection';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrustSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
