import type { Metadata } from "next";
import Form from "./Form";

export const metadata: Metadata = {
  title: `Create Category | ${process.env.APP_NAME}`,
};

export default function CreateCategory() {
  return <Form />;
}
