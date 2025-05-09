"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import Button from "@/components/shared/Button";
import { Switch } from "./shared/Switch";
import { FadeIn } from "./shared/FadeIn";
import Image from "next/image";

// import { GAEvents } from "@/lib/ga4";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  const pricingPlan = isYearly
    ? {
        name: "Godišnje",
        price: "15 KM",
        description:
          "Naplaćuje se godišnje. Uštedite 25% u poređenju sa mjesečnim planom.",
        cta: "Počnite besplatno",
        features: [
          "30 dana besplatno",
          "Pristup svim mogućnostima",
          "24/7 podrška",
          "Bez dodatnih naplata",
        ],
      }
    : {
        name: "Mjesečno",
        price: "20 KM",
        description: "Naplaćuje se mjesečno. Prekinite u svakom trenutku.",
        cta: "Počnite besplatno",
        features: [
          "30 dana besplatno",
          "Pristup svim mogućnostima",
          "24/7 podrška",
          "Bez dodatnih naplata",
        ],
      };

  return (
    <section className="pt-20 scroll-mt-24 bg-gradient-to-r from-white via-green-50 to-green-100">
      <FadeIn className="container flex flex-col mx-auto px-4">
        <span className="mx-auto mb-4 tracking-widest font-semibold text-primary-accent bg-primary-accent/20 rounded-3xl px-2 py-1">
          Cjenovnik
        </span>
        <h2 className="text-3xl md:text-4xl leading-10 font-bold text-center mb-8 text-black">
          Izaberite Vaš plan
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Počnite sa 30 dana besplatno i uvjerite se da je{" "}
          <span className="text-gradient-accent font-semibold">
            OrdinacijaCMS
          </span>{" "}
          aplikacija za Vas.
        </p>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className="text-gray-600">Mjesečno</span>
          <Switch
            checked={isYearly}
            onCheckedChange={() => setIsYearly(!isYearly)}
          />
          <span className="text-gray-600">Godišnje (-25%)</span>
        </div>

        {/* Single Pricing Card with Inner Animation */}
        <div className="flex justify-center">
          <div className="relative w-full hidden md:block">
            <Image
              sizes="590px"
              src="/ai-male-doctor.png"
              fill
              alt="muški avatar doktora"
              className="object-cover object-top"
            />
          </div>

          {/* Static Card Wrapper */}
          <div className="bg-white mb-20 md:mb-32 p-8 rounded-[20px] min-w-[320px]  shadow-lg border border-gray-100 max-w-md w-full">
            {/* Animate Name, Price, and Description Only */}
            <AnimatePresence mode="wait">
              <m.h3
                key={pricingPlan.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-2xl font-bold mb-4 text-gray-800"
              >
                {pricingPlan.name}
              </m.h3>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <m.p
                key={pricingPlan.description}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-gray-600 mb-6 min-h-[72px]"
              >
                {pricingPlan.description}
              </m.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <m.div
                key={pricingPlan.price}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-4xl flex items-center font-bold mb-6 text-primary-accent"
              >
                {pricingPlan.price}
                <span className="text-lg text-gray-500">
                  {isYearly ? "/mjesečno" : "/mjesečno"}
                </span>
              </m.div>
            </AnimatePresence>

            {/* Features List (Static) */}
            <ul className="space-y-3 mb-8">
              {pricingPlan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Button
            //  onClick={() => GAEvents.ctaClick("Pricing CTA Clicked")}
              href="https://app.ordinacijacms.com"
              className="w-full"
            >
              {pricingPlan.cta}
            </Button>
          </div>

          <div className="relative w-full hidden lg:block">
            <Image
              sizes="590px"
              src="/ai-female-doctor.png"
              fill
              alt="muški avatar doktora"
              className="object-cover object-top"
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
