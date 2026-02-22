import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhySection from "@/components/WhySection";
import ProductsSection from "@/components/ProductsSection";
import QualitySection from "@/components/QualitySection";
import CeoMessageSection from "@/components/CeoMessageSection";
import LeadershipSection from "@/components/LeadershipSection";
import FooterSection from "@/components/FooterSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WhySection />
      <ProductsSection />
      <QualitySection />
      <CeoMessageSection />
      <LeadershipSection />
      <FooterSection />
    </div>
  );
}
