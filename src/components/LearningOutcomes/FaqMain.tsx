"use client";
import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What types of courses does Care Learning offer?",
    answer:
      "We offer a wide range of courses covering various aspects of healthcare, including patient care, medical ethics, advanced nursing practices, and more",
  },
  {
    id: 2,
    question: "How can I enroll in a course?",
    answer:
      "To enroll in a course, simply create an account on our platform, browse the course catalog, and click on the 'Enroll' button for the course you wish to take.",
  },
  {
    id: 3,
    question: "Are there any prerequisites for taking a course?",
    answer:
      "Some courses may have prerequisites, which will be clearly stated in the course description. However, many of our courses are designed for beginners and do not require any prior knowledge.",
  },
];

function FaqMain() {
  // const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(faqData[0].id);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="faq-sec">
      {faqData.map((faq) => (
        <div key={faq.id} className="faq-contents">
          <h3
            className={`faq-qns flex items-center gap-3 justify-between ${
              openFaq === faq.id ? "active" : ""
            }`}
            onClick={() => toggleFaq(faq.id)}
          >
            {faq.question}
            <div className="icon-div">{openFaq === faq.id ? "−" : "+"}</div>
          </h3>

          <div
            className={`overflow-hidden transition-all duration-900 ease-in-out 
            ${
              openFaq === faq.id ? "max-h-50 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="faq-answer">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaqMain;
