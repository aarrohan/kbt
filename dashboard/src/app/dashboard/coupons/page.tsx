import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TableWrapper from "./TableWrapper";

export const metadata: Metadata = {
  title: `Coupons | ${process.env.APP_NAME}`,
};

export default function Coupons() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Dashboard&nbsp;&nbsp;‣&nbsp;&nbsp;Coupons
        </p>

        <Button asChild>
          <Link href={"/dashboard/coupons/create"}>New coupon</Link>
        </Button>
      </div>

      <div>
        <TableWrapper />
      </div>
    </div>
  );
}
