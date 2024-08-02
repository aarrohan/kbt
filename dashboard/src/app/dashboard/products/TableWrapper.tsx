"use client";
import { trpc } from "@/app/_trpc/client";
import ProductsTable from "./ProductsTable";
import { Loader2 } from "lucide-react";

export default function TableWrapper() {
  const { data: products, refetch: refetchProducts } =
    trpc.product.getAll.useQuery();

  if (!products)
    return (
      <div className="mt-10">
        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
      </div>
    );

  return <ProductsTable data={products} refetchProducts={refetchProducts} />;
}
