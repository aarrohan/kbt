import type { Metadata } from "next";
import FormWrapper from "./FormWrapper";

export const metadata: Metadata = {
  title: `Edit Coupon | ${process.env.APP_NAME}`,
};

export default function EditCoupon({ params }: { params: { id: string } }) {
  return <FormWrapper id={params.id} />;
}
