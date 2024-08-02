import type { Metadata } from "next";
import Form from "./Form";

export const metadata: Metadata = {
  title: `Create Product | ${process.env.APP_NAME}`,
};

export default function CreateProduct() {
  return <Form />;
}
