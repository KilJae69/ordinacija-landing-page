import ContactForm from "@/components/ContactForm";
import { FadeIn } from "@/components/shared/FadeIn";
import PageIntro from "@/components/shared/PageIntro";
import { Metadata } from "next";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "OrdinacijaCMS | Kontakt",
  description:
    "Kontaktirajte nas za sva pitanja o OrdinacijaCMS platformi. Tu smo da vam pomognemo sa upravljanjem pacijentima, zakazivanjem termina i medicinskom dokumentacijom.",
  openGraph: {
    title: "OrdinacijaCMS | Kontakt",
    description:
      "Imate pitanja o OrdinacijaCMS platformi? Kontaktirajte nas putem e-maila i saznajte više o digitalnom upravljanju medicinskom praksom.",
    url: "https://ordinacijacms.com/kontakt",
    siteName: "OrdinacijaCMS",
    images: [
      {
        url: "/ordinacija-og.png", // Postavi tačan URL do slike
        width: 1200,
        height: 630,
        alt: "OrdinacijaCMS - SaaS platforma za medicinske prakse",
      },
    ],
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <section className="relative flex-1 size-full bg-gradient-to-r pb-24 from-white via-green-50 to-green-100  pt-52">
      <PageIntro
        eyebrow="Kontakt"
        title="Kontaktirajte nas – tu smo da vam pomognemo"
        paragraph="Bilo da imate pitanja o funkcionalnostima, cijenama ili tehničkoj podršci – tu smo da vam pomognemo!"
      />
      <FadeIn className="max-w-2xl mx-auto mt-32 sm:mt-52 relative px-4">
        <div className="absolute w-[300px] h-[300px] -top-[140px] sm:w-[500px] sm:h-[500px] sm:-top-[238px]">
          <Image
            className="isolate z-10 pointer-events-none  object-contain "
            src="/form-doctor.png"
            fill
            alt="doctor"
          />
        </div>

        <div className="-z-10">
          <ContactForm />
        </div>
      </FadeIn>
      <Toaster />
    </section>
  );
}
