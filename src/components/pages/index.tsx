import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhySection from "@/components/WhySection";
import QualitySection from "@/components/QualitySection";
import ProductsSection from "@/components/ProductsSection";
import LeadershipSection from "@/components/LeadershipSection";
import CeoMessageSection from "@/components/CeoMessageSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WhySection />
      <QualitySection />
      <ProductsSection />
      <LeadershipSection />
      <CeoMessageSection />
      <FooterSection />
    </div>
  );
};

export default Index;