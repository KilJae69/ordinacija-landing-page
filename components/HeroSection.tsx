"use client";
import Image from "next/image";
import RotatingText from "./ui/rotating-text";
import { FadeIn, FadeInStagger } from "./shared/FadeIn";
import Button from "./shared/Button";
import { useSectionInView } from "@/lib/hooks";
// import { useActiveSectionContext } from "@/context/active-section-context";

export default function HeroSection() {
  const { ref } = useSectionInView("Naslovna", 0.5);
  // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="naslovna"
      className="min-h-screen pt-[10.5rem] w-full sm:pt-0 flex items-center justify-center relative bg-gradient-to-r from-white via-green-50 to-green-100 overflow-hidden"
    >
      <FadeIn className="lg:container lg:mx-auto  px-4 py-12 md:py-24 relative z-10 ">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary my-4">
              <RotatingText
                texts={["Moderno", "Efikasno", "Isplativo"]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-[#24ae7c] w-fit mb-4 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
              rješenje za privatne prakse
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Pojednostavite i ubrzajte rad Vaše prakse sa{" "}
              <span className="text-gradient-accent font-bold tracking-wider">
                OrdinacijaCMS
              </span>
            </p>
            <Button className="text-lg ">Počnite danas</Button>
            <FadeInStagger>
              <ul className="space-y-2 mt-6  text-lg tracking-widest">
                <li >
                  <FadeIn className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
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
                    Jednostavno upravljanje pacijentima
                  </FadeIn>
                </li>
                  <li >
                <FadeIn className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
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
                    Kalendar i zakazivanje pregleda
                </FadeIn>
                  </li>
                  <li >
                  <FadeIn className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
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
                    Kreiranje i spremanje nalaza i mišljenja
                </FadeIn>
                  </li>
                  <li >
                  <FadeIn className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
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
                    Kompletan prikaz pregleda na jednom mjestu
                </FadeIn>
                  </li>
              </ul>
            </FadeInStagger>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 relative z-10">
            <Image
              src="/ordinacija-kalendar.png"
              alt="Ordinacija CMS Dashboard"
              width={800}
              height={400}
              priority
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
