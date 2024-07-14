"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BasicInfo from "./BasicInfo";
import SEO from "./SEO";
import Visibility from "./Visibility";
import ParentCategory from "./ParentCategory";
import Img from "./Img";
import { useUploadThing } from "@/lib/uploadthing";
import { useToast } from "@/components/ui/use-toast";
import { trpc } from "@/app/_trpc/client";
import { Loader2 } from "lucide-react";
import type { Category } from "@prisma/client";

export default function Form({ category }: { category: Category }) {
  const [isSavingChanges, setIsSavingChanges] = useState<boolean>(false);

  const [parentCategoryId, setParentCategoryId] = useState<string | undefined>(
    category.parentCategoryId ? category.parentCategoryId : undefined
  );

  const [visibility, setVisibility] = useState<
    "published" | "scheduled" | "hidden"
  >(category.visibility);

  const [imgFile, setImgFile] = useState<File[] | null>(null);

  const [slug, setSlug] = useState<string>(category.slug);
  const [title, setTitle] = useState<string>(category.title);
  const [description, setDescription] = useState<string>(category.description);

  const [seoMetaTitle, setSeoMetaTitle] = useState<string>(
    category.seoMetaTitle ? category.seoMetaTitle : ""
  );
  const [seoMetaDescription, setSeoMetaDescription] = useState<string>(
    category.seoMetaDescription ? category.seoMetaDescription : ""
  );
  const [seoMetaKeywords, setSeoMetaKeywords] = useState<string>(
    category.seoMetaKeywords ? category.seoMetaKeywords : ""
  );

  const [publishDate, setPublishDate] = useState<Date | undefined>(
    category.publishDate ? category.publishDate : undefined
  );

  const { toast } = useToast();
  const { startUpload } = useUploadThing("imageUploader");
  const { mutate: updateCategory } = trpc.category.update.useMutation({
    onMutate() {
      setIsSavingChanges(true);
    },
    onSettled() {
      setIsSavingChanges(false);
    },
    onSuccess() {
      toast({
        title: "Category updated successfully",
      });
    },
    onError(err) {
      toast({
        variant: "destructive",
        title: err.message,
      });
    },
  });

  const handleEdit = async () => {
    try {
      setIsSavingChanges(true);

      let newImgUrl;

      if (imgFile) {
        const res = await startUpload(imgFile);
        newImgUrl = res && res[0] ? res[0].url : "";
      }

      if (slug && title && description) {
        updateCategory({
          id: category.id,
          parentCategoryId,
          visibility,
          newImgUrl,
          slug,
          title,
          description,
          seoMetaTitle,
          seoMetaDescription,
          seoMetaKeywords,
          publishDate: publishDate ? publishDate.toString() : undefined,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Please fill all required fields",
        });
      }
    } catch {
      setIsSavingChanges(false);

      toast({
        variant: "destructive",
        title: "Something went wrong",
      });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Dashboard&nbsp;&nbsp;‣&nbsp;&nbsp;Categories&nbsp;&nbsp;‣&nbsp;&nbsp;Edit
        </p>

        <div className="flex gap-2">
          <Button variant={"secondary"} asChild>
            <Link href={"/dashboard/categories"}>Go back</Link>
          </Button>

          <Button onClick={handleEdit} disabled={isSavingChanges}>
            {isSavingChanges && (
              <Loader2 className="mr-2 w-4 h-4 animate-spin" />
            )}{" "}
            Save changes
          </Button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-[auto_500px] gap-5">
        <div className="space-y-5">
          <BasicInfo
            slug={slug}
            setSlug={setSlug}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
          />

          <SEO
            seoMetaTitle={seoMetaTitle}
            setSeoMetaTitle={setSeoMetaTitle}
            seoMetaDescription={seoMetaDescription}
            setSeoMetaDescription={setSeoMetaDescription}
            seoMetaKeywords={seoMetaKeywords}
            setSeoMetaKeywords={setSeoMetaKeywords}
          />
        </div>

        <div className="space-y-5">
          <Visibility
            visibility={visibility}
            setVisibility={setVisibility}
            publishDate={publishDate}
            setPublishDate={setPublishDate}
          />

          <ParentCategory
            parentCategoryId={parentCategoryId}
            setParentCategoryId={setParentCategoryId}
          />

          <Img
            imgUrl={category.imgUrl}
            imgFile={imgFile}
            setImgFile={setImgFile}
          />
        </div>
      </div>
    </div>
  );
}
