"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const FAQS = [
  {
    question: "I was fired from my job. How do I know if the termination was unlawful?",
    answer:
      "Whether a termination may be unlawful depends on the circumstances, the reason for termination, applicable employment protections, and how the employer handled the process. An initial consultation can help identify the relevant issues.",
  },
  {
    question: "My employer has not paid everything I am owed. What can I do?",
    answer:
      "Employment records, pay statements, agreements, hours worked, and other documents can be reviewed to determine whether unpaid wages or other compensation may be owed.",
  },
  {
    question: "What happens during the initial consultation?",
    answer:
      "We discuss your situation, review the key facts, identify the main legal issues, and explain potential next steps.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-navy/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-heading text-lg text-navy">{faq.question}</span>
        <Plus
          className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <p className="pb-6 pr-10 text-sm leading-relaxed text-charcoal/70">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            FAQ
          </p>
          <h2 className="mt-4 font-heading text-3xl text-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-12 border-t border-navy/10">
          {FAQS.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
