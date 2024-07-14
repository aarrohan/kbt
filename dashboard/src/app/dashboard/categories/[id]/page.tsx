import type { Metadata } from "next";
import FormWrapper from "./FormWrapper";

export const metadata: Metadata = {
  title: `Edit Category | ${process.env.APP_NAME}`,
};

export default function EditCategory({ params }: { params: { id: string } }) {
  return <FormWrapper id={params.id} />;
}
