"use client";
import { trpc } from "@/app/_trpc/client";
import CouponsTable from "./CouponsTable";
import { Loader2 } from "lucide-react";

export default function TableWrapper() {
  const { data: coupons, refetch: refetchCoupons } =
    trpc.coupon.getAll.useQuery();

  if (!coupons)
    return (
      <div className="mt-10">
        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
      </div>
    );

  return <CouponsTable data={coupons} refetchCoupons={refetchCoupons} />;
}
