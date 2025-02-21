
// import Image from "next/image";
import FeatureCards from "./FeaturesCards";
// import { FeaturesSectionCards } from "./FeaturesSmallCards";
import { FadeIn, FadeInStagger } from "./shared/FadeIn";
import PageIntro from "./shared/PageIntro";


export default function FeaturesSection() {
  return (
    <>
      <section className="py-20 relative ">
        {/* <FeaturesSectionCards /> */}
        {/* <Image src="/medical-bg.jpg" alt="bg" fill className="relative object-cover -z-10 opacity-20"/> */}

        <div className="lg:container lg:mx-auto">
          <FadeInStagger>
            <PageIntro
              eyebrow="Pogodnosti"
              title=" Sve što vam treba za organiziran i siguran rad"
              paragraph="OrdinacijaCMS je dizajniran da pojednostavi administrativne procese vaše klinike. Brže upravljajte pacijentima, terminima i medicinskim podacima – sve na jednom sigurnom mjestu."
            />

            <FadeIn className="mt-10">
              {/* <AnimatedFeaturesTab /> */}
              <FeatureCards />
             
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>
    </>
  );
}
