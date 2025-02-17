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
        title="Imate pitanja?"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            aliquam incidunt id facilis tempore consequuntur labore vel
            distinctio assumenda eos? Voluptas repellendus quibusdam laborum
            explicabo iste perspiciatis, eaque aperiam rem!"
      />
     

      <FadeIn className="max-w-3xl px-4 mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className=" sm:text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </section>
  );
}
