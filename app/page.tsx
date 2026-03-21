import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import UnitsSection from "@/components/sections/UnitsSection";
import FloorPlanSection from "@/components/sections/FloorPlanSection";
import MapSection from "@/components/sections/MapSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <UnitsSection />
        <FloorPlanSection />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
