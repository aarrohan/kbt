import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy policy - KBT",
};

export default function PrivacyPolicy() {
  return (
    <div>
      <h1 className="mb-8 font-serif text-4xl lg:text-5xl font-normal text-dark">
        Privacy policy
      </h1>

      <p className="max-w-[950px] text-sm text-dark">
        At KBT, your privacy is important to us. We collect personal information
        to process orders and improve your experience. We do not share your data
        with third parties, except as necessary for transactions or as required
        by law. Our website uses cookies to enhance functionality. By using our
        site, you consent to our data practices. <br />
        <br /> For any concerns or to access your information, contact us at{" "}
        <Link href={"mailto:info@kbt.shop"} className="underline">
          info@kbt.shop.
        </Link>
      </p>
    </div>
  );
}
