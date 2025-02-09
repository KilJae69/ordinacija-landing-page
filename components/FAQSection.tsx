"use client";

import { useSectionInView } from "@/lib/hooks";
import { FadeIn } from "./shared/FadeIn";

export default function FAQSection() {
  const { ref } = useSectionInView("Pitanja");
  return (
    <section ref={ref} id="pitanja" className="min-h-[1000px] pt-20">
      <FadeIn className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gradient-accent">
          Najčešće postavljena pitanja
        </h2>
        <p className="text-center text-gray-600 mb-12">
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et magni accusantium mollitia est distinctio enim officiis, voluptatem natus, esse reiciendis quo velit! A quaerat, repudiandae aliquid officia fugiat id nulla.
        </p>
      </FadeIn>
    </section>
  );
}
