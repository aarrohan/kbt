import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Returns & exchanges - KBT",
};

export default function ReturnAndExchanges() {
  return (
    <div>
      <h1 className="mb-8 font-serif text-4xl lg:text-5xl font-normal text-dark">
        Returns and exchanges
      </h1>

      <p className="max-w-[950px] text-sm text-dark">
        We hope you love your KBT items as much as we do. But if you do want to
        make a return or exchange, you can return your order for up to 14 days
        from receiving it. To be eligible for a return, your item must be unused
        and in the same condition that you received it. It must also be in the
        original packaging. To complete your return, we require a receipt or
        proof of purchase. Please do not send your purchase back to the
        manufacturer. <br />
        <br /> For further instructions please read our{" "}
        <Link href={"/info/faq"} className="underline">
          FAQ
        </Link>{" "}
        or contact our customer service at{" "}
        <Link href={"mailto:info@kbt.shop"} className="underline">
          info@kbt.shop.
        </Link>
      </p>
    </div>
  );
}
