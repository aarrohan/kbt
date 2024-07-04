import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie - KBT",
};

export default function Cookies() {
  return (
    <div>
      <h1 className="mb-8 font-serif text-4xl lg:text-5xl font-normal text-dark">
        Cookies
      </h1>

      <p className="max-w-[950px] text-sm text-dark">
        KBT uses cookies to improve your browsing experience. Cookies are small
        files stored on your device that help us analyze site traffic, remember
        your preferences, and personalize content. By using our website, you
        consent to our use of cookies. You can manage or disable cookies in your
        browser settings, but this may affect site functionality. <br />
        <br /> For more information, contact us at{" "}
        <Link href={"mailto:info@kbt.shop"} className="underline">
          info@kbt.shop.
        </Link>
      </p>
    </div>
  );
}
