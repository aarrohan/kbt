import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping & delivery - KBT",
};

export default function ShippingAndDelivery() {
  return (
    <div>
      <h1 className="mb-8 font-serif text-4xl lg:text-5xl font-normal text-dark">
        Shipping and delivery
      </h1>

      <p className="max-w-[950px] text-sm text-dark">
        At KBT, we aim to process and ship orders within 5-7 business days.
        Shipping times and costs vary by location and will be calculated at
        checkout. You will receive a tracking number once your order is
        dispatched. We are not responsible for delays caused by carriers or
        customs. <br />
        <br /> For any issues or questions about your order, please contact us
        at{" "}
        <Link href={"mailto:info@kbt.shop"} className="underline">
          info@kbt.shop.
        </Link>
      </p>
    </div>
  );
}
