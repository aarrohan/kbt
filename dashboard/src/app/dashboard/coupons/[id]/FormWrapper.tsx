"use client";
import { redirect } from "next/navigation";
import Form from "./Form";
import { Loader2 } from "lucide-react";
import { trpc } from "@/app/_trpc/client";

export default function FormWrapper({ id }: { id: string }) {
  const { isError: couponIsError, data: coupon } =
    trpc.coupon.getSingle.useQuery({
      id,
    });

  if (couponIsError) {
    return redirect("/dashboard/coupons");
  }

  if (!coupon) {
    return (
      <div className="mt-10">
        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
      </div>
    );
  }

  return (
    <Form
      coupon={{
        ...coupon,
        publishDate: coupon.publishDate ? new Date(coupon.publishDate) : null,
        createdAt: new Date(coupon.createdAt),
        updatedAt: new Date(coupon.updatedAt),
      }}
    />
  );
}
