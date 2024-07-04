"use client";
import { useState } from "react";

interface IFAQ {
  question: string;
  answer: string;
}

export default function SizeFitPart() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const faqs: IFAQ[] = [
    {
      question: "How do I determine the right size for me?",
      answer:
        "To determine the right size, refer to the size chart provided on the product page. Measure your bust, waist, and hips using a flexible measuring tape and compare your measurements to the chart. If you're between sizes, we recommend choosing the larger size for a more comfortable fit.",
    },
    {
      question: "Are the sizes true to fit or do they run small/large?",
      answer:
        "Our sizes are designed to be true to fit, but it can vary depending on the brand and style. We recommend reading customer reviews and checking the product description for any specific sizing advice. If you’re unsure, our customer service team is here to help with any specific questions.",
    },
    {
      question: "What should I do if I'm in between sizes?",
      answer:
        "If you're in between sizes, we generally recommend choosing the larger size, especially for items with a more fitted style. Alternatively, you can refer to the product description for any specific fit notes, as some items are designed to have a looser or tighter fit.",
    },
    {
      question: "Do you offer petite or plus sizes?",
      answer:
        "Yes, we offer a range of sizes to accommodate different body types, including petite and plus sizes. You can filter your search on our website by size to find items that will best fit your body type. Please refer to our size charts for measurements specific to petite and plus sizes.",
    },
    {
      question: "Can I return an item if it doesn't fit?",
      answer:
        "Yes, we offer a hassle-free return policy for items that don't fit. Please ensure that the item is unworn, with original tags attached, and return it within 30 days of purchase. For more details, please visit our returns and exchanges page on our website.",
    },
  ];

  return (
    <div>
      <h3 className="mb-8 font-serif text-3xl lg:text-4xl font-normal text-dark">
        Size fit
      </h3>

      {faqs.map((faq, index) => {
        return (
          <div
            key={index}
            className={`max-w-[750px] py-6 border-t ${
              index === faqs.length - 1 ? "border-b" : ""
            } border-dark/10`}
          >
            <div
              onClick={() => {
                if (activeFAQ === index) {
                  setActiveFAQ(null);
                } else {
                  setActiveFAQ(index);
                }
              }}
              className="flex justify-between items-center cursor-pointer"
            >
              <p className="font-serif text-xl">{faq.question}</p>

              <button
                className={`${
                  activeFAQ === index ? "rotate-45" : ""
                } text-xl font-light duration-200`}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.6 5.478H12.078V6.622H6.6V12.078H5.434V6.622H0V5.478H5.434V0H6.6V5.478Z"
                    className="fill-dark"
                  />
                </svg>
              </button>
            </div>

            <p
              className={`mt-5 max-w-[950px] text-sm text-dark ${
                activeFAQ === index ? "block" : "hidden"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        );
      })}
    </div>
  );
}
