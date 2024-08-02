import type { Metadata } from "next";
import prisma from "@/lib/prisma";
import VTR from "./VTR";

export const metadata: Metadata = {
  title: "Virtual Trial Room - KBT",
};

export default async function VirtualTrialRoom() {
  const products: IProduct[] = await prisma.product.findMany({
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return <VTR products={products} />;
}
