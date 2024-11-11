"use client";
import { useEffect } from "react";
// import type { Metadata } from "next";
// import prisma from "@/lib/prisma";
// import VTR from "./VTR";

// export const metadata: Metadata = {
//   title: "Virtual Trial Room - KBT",
// };

export default function VirtualTrialRoom() {
  // const products: IProduct[] = await prisma.product.findMany({
  //   include: {
  //     category: true,
  //   },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  });

  // return <VTR products={products} />;
  return (
    <iframe
      src="https://kbt-vrtr.netlify.app/"
      className="fixed top-0 left-0 w-full h-[100svh]"
    />
  );
}
