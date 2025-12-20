import BackgroundLayout from "@/components/layout/BackgroundLayout";
import HeroSection from "@/components/sections/HeroSection";
import BiographieSection from "@/components/sections/BiographieSection";
import ProjetsSection from "@/components/sections/ProjetsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <BackgroundLayout>
      <HeroSection />
      <BiographieSection />
      <ProjetsSection />
      <Footer />
    </BackgroundLayout>
  );
}
