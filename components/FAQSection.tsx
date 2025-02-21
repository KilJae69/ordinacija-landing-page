import { FadeIn } from "./shared/FadeIn";

import { faqs } from "@/lib/data";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageIntro from "./shared/PageIntro";

export default function FAQSection() {
  return (
    <section className=" pt-20 pb-52">
      <PageIntro
        eyebrow="Pitanja"
        title="Česta pitanja – Sve što trebate znati o OrdinacijaCMS-u"
        paragraph="Imate pitanja o našem sistemu? Ovdje ćete pronaći odgovore na najčešće postavljana pitanja. Ako ne pronađete ono što vas zanima, slobodno nas kontaktirajte!"
      />
     

      <FadeIn className="max-w-3xl px-4 mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className=" sm:text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className=" sm:text-lg text-justify italic">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </section>
  );
}
