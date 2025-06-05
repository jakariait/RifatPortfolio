"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How do you charge?",
    answer:
      "I offer flexible pricing based on the project scope. Depending on your needs, I can work on a project basis, monthly retainer, or hourly consultation. I’ll first understand your goals, then suggest the best pricing structure that delivers value.",
  },
  {
    question: "Do you work on monthly retainers?",
    answer:
      "Yes. For clients looking for ongoing growth and consistent optimization, I recommend a monthly retainer model. This allows us to build momentum, test consistently, and scale results over time — especially for ad campaigns and funnel strategies.",
  },
  {
    question: "Do you offer training?",
    answer:
      "Absolutely. I provide 1-on-1 personalized training as well as team workshops for businesses who want to build in-house marketing knowledge. Whether you're a founder, marketer, or coach — I can help you understand and manage your performance marketing better.",
  },
  {
    question: "Can you help with ad copy and creatives?",
    answer:
      "Yes — I don’t just run ads, I build strategic campaigns. That includes creating scroll-stopping visuals and conversion-focused copywriting. My creative approach is rooted in what performs, not just what looks good.",
  },
  {
    question: "Do you track conversions?",
    answer:
      "Definitely. Tracking is at the core of everything I do. I set up and monitor pixel events, custom conversions, UTM tracking, and goal funnels to make sure every action is measurable — and every dollar spent is optimized for ROI.",
  },
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id={"faqs"} className=" bg-black pt-12 px-4 pb-16 scroll-mt-20">
      <div className={"xl:container xl:mx-auto "}>
        <h2 className="text-xl md:text-2xl font-bold mb-8 text-center text-[#EF6C00]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 md:w-4xl mx-auto text-gray-100">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700  rounded-lg">
              <button
                className="w-full text-left px-4 py-3 flex justify-between cursor-pointer items-center focus:outline-none"
                onClick={() => toggle(index)}
              >
                <span className="text-lg md:text-2xl font-medium cursor-pointer">
                  {faq.question}
                </span>
                <span className={"cursor-pointer"}>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden px-4 ${
                  activeIndex === index ? "max-h-screen py-2" : "max-h-0"
                }`}
              >
                <p className=" text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
