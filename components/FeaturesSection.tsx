"use client";

import { useSectionInView } from "@/lib/hooks";
import AnimatedFeaturesTab from "./AnimatedFeaturesTabs";
import { FadeIn, FadeInStagger } from "./shared/FadeIn";

export default function FeaturesSection() {
  const { ref } = useSectionInView("Pogodnosti");

  return (
    <section ref={ref} id="pogodnosti" className="py-20 scroll-mt-48 md:py-28 md:scroll-mt-32">
      <div className="lg:container lg:mx-auto">
        <FadeInStagger>
          <FadeIn>
          <h2 className="text-3xl md:text-6xl leading-10 font-bold text-center mb-8 text-black">
              Pogodnosti koje nudimo za Vašu praksu
            </h2>
            
          </FadeIn>
          <FadeIn className="mt-20">
            <AnimatedFeaturesTab />
          </FadeIn>
        </FadeInStagger>
      </div>
    </section>
  );
}
