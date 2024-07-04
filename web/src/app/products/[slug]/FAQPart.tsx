"use client";
import { useState } from "react";

interface IFAQ {
  question: string;
  answer: string;
}

export default function ShippingDeliveryPart() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(0);

  const faqs: IFAQ[] = [
    {
      question: "Description",
      answer: `Rio Maxi Dress in creme white is a bandeau fitted dress that has a decorative twisted bust and a wide fitted bell bottom hem. <br /><br />
        • Color: Creme White <br />
        • Designed twisted draped bandeau <br />
        • Fits true to size, pick your normal size <br />
        • Model is 176 and wearing size 34 <br />
        • Size range: 32-50 <br />
        • Material: 100% Polyester. Lining 100% Polyester
        `,
    },
    {
      question: "Material Care",
      answer:
        "Once your order has shipped, you will receive a shipping confirmation email with a tracking number. You can use this tracking number on our shipping carrier’s website to track your order. Additionally, you can log into your account on our website to check the status of your order at any time.",
    },
    {
      question: "Shipping and delivery",
      answer:
        "Yes, we offer international shipping to many countries. Shipping rates and delivery times vary depending on the destination. Please refer to our international shipping page for more detailed information on rates and estimated delivery times to your country.",
    },
  ];

  return (
    <div>
      {faqs.map((faq, index) => {
        return (
          <div
            key={index}
            className={`py-6 border-t ${
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
              className={`mt-5 max-w-[950px] text-sm leading-7 text-dark ${
                activeFAQ === index ? "block" : "hidden"
              }`}
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            ></p>
          </div>
        );
      })}
    </div>
  );
}
