import ContactForm from "@/components/ContactForm";
import { FadeIn } from "@/components/shared/FadeIn";
import PageIntro from "@/components/shared/PageIntro";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function ContactPage() {
  return (
    <section className="relative flex-1 size-full bg-gradient-to-r pb-52 from-white via-green-50 to-green-100  pt-52">
      <PageIntro
        eyebrow="Kontakt"
        title="Za sva pitanja tu smo za Vas"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquam
          incidunt id facilis tempore consequuntur labore vel distinctio
          assumenda eos? Voluptas repellendus quibusdam laborum explicabo iste
          perspiciatis, eaque aperiam rem!"
      />
      <FadeIn className="max-w-2xl mx-auto mt-52 relative px-4">
        <div className="absolute -left-10 -top-[230px] size-full pointer-events-none z-10">
          <Image
            className=" relative object-contain"
            src="/form-doctor.png"
            fill
            alt="doctor"
          />
        </div>
        <div className="-z-10">
          <ContactForm />
        </div>
      </FadeIn>
      <Toaster/>
    </section>
  );
}
