"use client";
import { useState } from "react";

interface IFAQ {
  question: string;
  answer: string;
}

export default function ShippingDeliveryPart() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const faqs: IFAQ[] = [
    {
      question: "What are your shipping options and delivery times?",
      answer: "Delivery within 5-7 business days.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has shipped, you will receive a shipping confirmation email with a tracking number. You can use this tracking number on our shipping carrier’s website to track your order. Additionally, you can log into your account on our website to check the status of your order at any time.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to many countries. Shipping rates and delivery times vary depending on the destination. Please refer to our international shipping page for more detailed information on rates and estimated delivery times to your country.",
    },
    {
      question: "What should I do if my package is delayed or lost?",
      answer:
        "If your package is delayed beyond the estimated delivery time or you believe it has been lost, please contact our customer service team as soon as possible. We will work with the shipping carrier to locate your package and ensure it is delivered to you. If the package cannot be found, we will arrange for a replacement or a refund.",
    },
    {
      question:
        "Are there any shipping fees, and how can I qualify for free shipping?",
      answer:
        "Shipping fees vary based on the shipping method chosen and the total order amount. We offer free standard shipping on orders over a certain amount, which you can find detailed on our shipping information page. During promotional periods, we may also offer free shipping with no minimum purchase required. Please check our website for current promotions and shipping offers.",
    },
  ];

  return (
    <div>
      <h3 className="mb-8 font-serif text-3xl lg:text-4xl font-normal text-dark">
        Shipping delivery
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
