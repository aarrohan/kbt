"use client";
import { redirect } from "next/navigation";
import Form from "./Form";
import { Loader2 } from "lucide-react";
import { trpc } from "@/app/_trpc/client";

export default function FormWrapper({ id }: { id: string }) {
  const { isError: categoryIsError, data: category } =
    trpc.category.getSingle.useQuery({
      id,
    });

  if (categoryIsError) {
    return redirect("/dashboard/categories");
  }

  if (!category) {
    return (
      <div className="mt-10">
        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
      </div>
    );
  }

  return (
    <Form
      category={{
        ...category,
        publishDate: category.publishDate
          ? new Date(category.publishDate)
          : null,
        createdAt: new Date(category.createdAt),
        updatedAt: new Date(category.updatedAt),
      }}
    />
  );
}
