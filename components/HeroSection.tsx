"use client";
import Image from "next/image";
// import RotatingText from "./ui/rotating-text";
import { FadeIn, FadeInStagger } from "./shared/FadeIn";
import Button from "./shared/Button";
import LottieComponent from "./shared/LottieComponent";
import { useState } from "react";
import VideoModal from "./shared/VideoModal";

// import dynamic from "next/dynamic";
// import { useActiveSectionContext } from "@/context/active-section-context";

// const DynamicLottieComponent = dynamic(
//   () => import("@/components/shared/LottieComponent"),
//   {
//     ssr: false,

//   }
// );

export default function HeroSection() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <section className="min-h-screen pt-24 w-full flex items-center bg-gradient-to-r from-white via-green-50 to-green-100 justify-center relative  overflow-hidden">
      <FadeIn className="lg:container lg:mx-auto bg-transparent  px-4 py-12 md:py-24 relative z-10 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary my-4">
              {/* <RotatingText
                texts={["Moderno", "Efikasno", "Isplativo"]}
                mainClassName="px-2 min-w-[190px] sm:min-w-[245px] md:px-3 bg-[#24ae7c] w-fit mb-4 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              /> */}
              Jednostavno rješenje za privatne prakse
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Pojednostavite i ubrzajte rad Vaše prakse sa{" "}
              <span className="text-gradient-accent font-bold tracking-wider">
                OrdinacijaCMS
              </span>
            </p>
            <FadeInStagger>
              <ul className="space-y-2 mt-6  text-lg tracking-widest">
                <li>
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
                <li>
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
                <li>
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
                <li>
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
              <FadeIn className="mt-6 flex flex-col  sm:flex-row gap-8 mb-8 sm:mb-0">
                <Button className="text-lg" href="">
                  Počnite danas
                </Button>
                <button
                  onClick={() => setModalOpen(true)}
                  className="flex group relative self-center items-center sm:self-auto gap-2 text-slate-800 font-semibold"
                >
                  <span className="mr-[60px] whitespace-nowrap transition-all group-hover:scale-[1.05]">
                    Pogledaj DEMO
                  </span>
                  <span className="video-play-button">
                    <span></span>
                  </span>
                </button>
              </FadeIn>
            </FadeInStagger>
          </div>
          {/* <div className="md:w-1/2 mt-8 md:mt-0 relative z-10">
            <Image
              src="/ordinacija-kalendar.png"
              alt="Ordinacija CMS Dashboard"
              width={800}
              height={400}
              priority
              className="rounded-lg shadow-xl"
            />
          </div> */}
          <div className="max-w-[700px] flex-1">
            {/* <DynamicLottieComponent path="/animations/hero-lottie.json" /> */}
            <LottieComponent path="/animations/hero-lottie.json" />
          </div>
        </div>
      </FadeIn>
      <div className="absolute top-0 bottom-0 -right-0 w-1/2 min-h-[500px]">
        <Image
          src="/shape-green.png"
          priority
          fill
          sizes="(min-width: 1900px) 58.91vw, (min-width: 1540px) calc(20.59vw + 724px), (min-width: 1280px) 957px, (min-width: 1120px) 857px, (min-width: 780px) calc(-42.5vw + 1325px), (min-width: 580px) calc(75.56vw + 783px), (min-width: 400px) calc(-98.75vw + 1197px), calc(-165vw + 1430px)"
          className="object-cover  object-left-top size-full"
          alt="shape"
        />
      </div>
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        videoId="dQw4w9WgXcQ" // Replace with your YouTube video ID
      />
    </section>
  );
}
