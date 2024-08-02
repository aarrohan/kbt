import HeroSection from "./HeroSection";
import RelevantProductsSection from "./RelevantProducts";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

interface IProps {
  params: { categorySlug: string; productSlug: string };
}

export default async function Product({ params }: IProps) {
  const category = await prisma.category.findUnique({
    where: {
      slug: params.categorySlug,
    },
  });

  const product = await prisma.product.findUnique({
    where: {
      slug: params.productSlug,
    },
    include: {
      category: true,
    },
  });

  if (!category || !product) redirect("/");

  return (
    <>
      <HeroSection product={product} />
      <RelevantProductsSection />
    </>
  );
}
