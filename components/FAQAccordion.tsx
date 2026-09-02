"use client";

import { useState } from "react";

import type { FaqItem } from "@/lib/site-data";

type FAQAccordionProps = {
  items: FaqItem[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium text-white">{item.question}</span>
              <span className="text-xl text-sky-300">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="mt-4 text-sm leading-7 text-slate-300">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
