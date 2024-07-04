import type { Metadata } from "next";
import SizeFitPart from "./SizeFitPart";
import ShippingDelivery from "./ShippingDeliveryPart";

export const metadata: Metadata = {
  title: "Frequently asked questions - KBT",
};

export default function TermsAndConditions() {
  return (
    <div>
      <h1 className="mb-8 font-serif text-4xl lg:text-5xl font-normal text-dark">
        FAQ
      </h1>

      <p className="mb-14 lg:mb-20 max-w-[950px] text-sm text-dark">
        We're happy to have you here as a customer. We've provided answers to
        the most frequently asked questions about our production, design &
        sizing, shipping & returns and KBT in general. However, if you have any
        additional questions, please don't hesitate to reach out to us.
      </p>

      <div className="space-y-20">
        <SizeFitPart />

        <ShippingDelivery />
      </div>
    </div>
  );
}
