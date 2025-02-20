
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
              title=" Mogućnosti koje Vam olakšavaju svakodnevni rad"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquam incidunt id facilis tempore consequuntur labore vel distinctio assumenda eos? Voluptas repellendus quibusdam laborum explicabo iste perspiciatis, eaque aperiam rem!"
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
