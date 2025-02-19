import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Naslovna | OrdinacijaCMS',
  description: 'Dobro došli u OrdinacijaCMS, sveobuhvatno rješenje za privatne medicinske prakse. OrdinacijaCMS nudi brojne pogodnosti koje še ubrzati, pojednostaviti i olakšati svakodnevnicu vođenja medicinske prakse. ',
}

export default function Home() {
  return (
    < >
      <HeroSection />
      <FeaturesSection />
      <PricingSection/>
      <FAQSection/>
    </>
  );
}
