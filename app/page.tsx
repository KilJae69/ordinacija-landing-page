import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <FeaturesSection />
      <PricingSection/>
      <FAQSection/>
    </main>
  );
}
