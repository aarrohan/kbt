import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TableWrapper from "./TableWrapper";

export const metadata: Metadata = {
  title: `Categories | ${process.env.APP_NAME}`,
};

export default function Categories() {
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
        <TableWrapper />
      </div>
    </div>
  );
}
