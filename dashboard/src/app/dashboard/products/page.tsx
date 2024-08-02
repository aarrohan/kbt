import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TableWrapper from "./TableWrapper";

export const metadata: Metadata = {
  title: `Products | ${process.env.APP_NAME}`,
};

export default function Products() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Dashboard&nbsp;&nbsp;‣&nbsp;&nbsp;Products
        </p>

        <Button asChild>
          <Link href={"/dashboard/products/create"}>New product</Link>
        </Button>
      </div>

      <div>
        <TableWrapper />
      </div>
    </div>
  );
}
