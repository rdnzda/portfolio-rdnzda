import BackgroundLayout from "@/components/layout/BackgroundLayout";
import HeroSection from "@/components/sections/HeroSection";
import BiographieSection from "@/components/sections/BiographieSection";
import ProjetsSection from "@/components/sections/ProjetsSection";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import { Contact } from "lucide-react";

export default function Home() {
  return (
    <BackgroundLayout>
      <main>
        <HeroSection />
        <ProjetsSection />
        <ServicesSection />
        <BiographieSection />
        <ContactSection />
      </main>
      <Footer />
    </BackgroundLayout>
  );
}
