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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-20 text-gradient-accent">
              Pogodnosti koje nudimo za Vašu praksu
            </h2>
          </FadeIn>
          <FadeIn>
            <AnimatedFeaturesTab />
          </FadeIn>
        </FadeInStagger>
      </div>
    </section>
  );
}
