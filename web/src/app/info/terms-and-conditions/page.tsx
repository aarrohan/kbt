import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & conditions - KBT",
};

export default function TermsAndConditions() {
  return (
    <div>
      <h1 className="mb-8 font-serif text-4xl lg:text-5xl font-normal text-dark">
        Terms and conditions
      </h1>

      <p className="max-w-[950px] text-sm text-dark">
        Welcome to KBT! By using our website, you agree to our terms. All
        purchases are subject to availability and our return policy. Prices and
        promotions may change without notice. Unauthorized use of our content is
        prohibited. We are not liable for any direct or indirect damages from
        the use of our site. Please review our Privacy Policy for details on how
        we protect your information. <br />
        <br /> For questions, contact us at{" "}
        <Link href={"mailto:info@kbt.shop"} className="underline">
          info@kbt.shop.
        </Link>
      </p>
    </div>
  );
}
