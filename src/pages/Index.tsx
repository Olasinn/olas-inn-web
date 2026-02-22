import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/WhatsAppButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { ZeroSurprisesSection } from "@/components/sections/ZeroSurprisesSection";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { HowToBookSection } from "@/components/sections/HowToBookSection";
import { CleanlinessSection } from "@/components/sections/CleanlinessSection";
import { RelaxSection } from "@/components/sections/RelaxSection";
import { AdventureSection } from "@/components/sections/AdventureSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <ZeroSurprisesSection />
        <RoomsSection />
        <HowToBookSection />
        <CleanlinessSection />
        <RelaxSection />
        <AdventureSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
