"use client";
import { trpc } from "@/app/_trpc/client";
import CategoriesTable from "./CategoriesTable";
import { Loader2 } from "lucide-react";

export default function TableWrapper() {
  const { data: categories, refetch: refetchCategories } =
    trpc.category.getAll.useQuery();

  if (!categories)
    return (
      <div className="mt-10">
        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
      </div>
    );

  return (
    <CategoriesTable data={categories} refetchCategories={refetchCategories} />
  );
}
