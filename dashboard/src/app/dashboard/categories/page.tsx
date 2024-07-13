import { Button } from "@/components/ui/button";
import Link from "next/link";
import CategoriesTable from "./CategoriesTable";
import prisma from "@/lib/prisma";

export default async function Categories() {
  const categories = await prisma.category.findMany();

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Dashboard&nbsp;&nbsp;‣&nbsp;&nbsp;Categories
        </p>

        <Button asChild>
          <Link href={"/dashboard/categories/create"}>New category</Link>
        </Button>
      </div>

      <div>
        <CategoriesTable data={categories} />
      </div>
    </div>
  );
}
