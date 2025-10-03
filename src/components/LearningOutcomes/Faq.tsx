"use client";
import React, { useState } from "react";

interface FaqTranslation {
  id: number;
  question: string;
  answer: string;
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  translations?: FaqTranslation[];
}

interface FaqProps {
  faqs: FaqItem[];
}

export default function Faq({ faqs }: FaqProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(
    Array.isArray(faqs) && faqs.length > 0 ? faqs[0].id : null
  );

  if (!faqs || faqs.length === 0) {
    return <div>No FAQs available.</div>;
  }

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="faq-sec">
      {faqs.map((faq) => {
        const question =
          faq.translations?.[0]?.question || faq.question || "No question";
        const answer =
          faq.translations?.[0]?.answer || faq.answer || "No answer";

        return (
          <div key={faq.id} className="faq-contents">
            <h3
              className={`faq-qns flex items-center gap-3 justify-between ${
                openFaq === faq.id ? "active" : ""
              }`}
              onClick={() => toggleFaq(faq.id)}
            >
              {question}
              <div className="icon-div">{openFaq === faq.id ? "−" : "+"}</div>
            </h3>

            <div
              className={`overflow-hidden transition-all duration-900 ease-in-out ${
                openFaq === faq.id
                  ? "max-h-50 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="faq-answer">{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
