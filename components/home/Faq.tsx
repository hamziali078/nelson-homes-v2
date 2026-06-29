"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/ui/container";

const faqs = [
  {
    question: "How much is the down payment?",
    answer:
      "Most Nelson Homes projects start with only a 10% down payment, making premium home ownership affordable for families.",
  },
  {
    question: "Can I get possession before completing payment?",
    answer:
      "Yes. Eligible customers receive possession after approximately 88% payment according to the selected project and payment plan.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No. We believe in complete transparency. The agreed sale price remains fixed with no hidden development or escalation charges.",
  },
  {
    question: "Do you provide a structural warranty?",
    answer:
      "Yes. Every Nelson Home comes with a lifetime structural warranty for complete peace of mind.",
  },
  {
    question: "Can overseas Pakistanis invest?",
    answer:
      "Absolutely. We assist overseas clients throughout the booking, documentation and payment process.",
  },
  {
    question: "How long does construction take?",
    answer:
      "Construction timelines vary by project, but every customer receives regular progress updates until possession.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-white py-28">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
            FAQ
          </p>

          <h2 className="mt-5 text-4xl font-bold text-neutral-900 lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-neutral-600">
            Everything you need to know before buying your dream home.
          </p>

        </div>

        <div className="mx-auto mt-20 max-w-4xl">

          {faqs.map((faq, index) => {
            const active = openIndex === index;

            return (
              <div
                key={faq.question}
                className="mb-5 rounded-3xl border border-neutral-200 bg-[#FCFCFB]"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between p-7 text-left"
                >
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`transition duration-300 ${
                      active ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    active ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-7 pb-7 leading-8 text-neutral-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}