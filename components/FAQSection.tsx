"use client";

import { useSectionInView } from "@/lib/hooks";
import { FadeIn } from "./shared/FadeIn";
import { ChevronDown } from "lucide-react";
import { AnimatePresence,m } from "framer-motion";
import { ReactNode, useState } from "react";
import { faqs } from "@/lib/data";


const FAQItem: React.FC<{ question: string; answer: string | ReactNode; isOpen: boolean; onClick: () => void }> = ({
    question,
    answer,
    isOpen,
    onClick,
  }) => {
    return (
      <div className="border-b border-gray-200">
        <button
          className="flex justify-between items-center w-full py-4 text-left"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span className="text-lg font-semibold">{question}</span>
          <m.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="w-5 h-5 text-[#24ae7c]" />
          </m.div>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <m.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 text-gray-600">{answer}</div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

export default function FAQSection() {
  const { ref } = useSectionInView("Pitanja");
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <section ref={ref} id="pitanja" className=" py-20">
      <FadeIn className="md:container md:mx-auto px-4">
      <h2 className="text-3xl md:text-6xl leading-10 font-bold text-center mb-8 text-black">
          Najčešće postavljena pitanja
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et magni accusantium mollitia est distinctio enim officiis, voluptatem natus, esse reiciendis quo velit! A quaerat, repudiandae aliquid officia fugiat id nulla.
        </p>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
