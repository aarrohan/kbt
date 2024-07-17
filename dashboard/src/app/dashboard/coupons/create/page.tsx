import type { Metadata } from "next";
import Form from "./Form";

export const metadata: Metadata = {
  title: `Create Coupon | ${process.env.APP_NAME}`,
};

export default function CreateCoupon() {
  return <Form />;
}
