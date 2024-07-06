"use client";
import { useEffect, useState } from "react";
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

export default function Form() {
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const [parentCategoryId, setParentCategoryId] = useState<
    string | undefined
  >();

  const [visibility, setVisibility] = useState<
    "published" | "scheduled" | "hidden"
  >("published");

  const [imgFile, setImgFile] = useState<File[] | null>(null);

  const [slug, setSlug] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [seoMetaTitle, setSeoMetaTitle] = useState<string>("");
  const [seoMetaDescription, setSeoMetaDescription] = useState<string>("");
  const [seoMetaKeywords, setSeoMetaKeywords] = useState<string>("");

  const [publishDate, setPublishDate] = useState<Date | undefined>();

  const { toast } = useToast();
  const { startUpload } = useUploadThing("imageUploader");
  const { mutate: createCategory } = trpc.category.create.useMutation({
    onMutate() {
      setIsCreating(true);
    },
    onSettled() {
      setIsCreating(false);
    },
    onSuccess() {
      setParentCategoryId(undefined);

      setVisibility("published");

      setImgFile(null);

      setSlug("");
      setTitle("");
      setDescription("");

      setSeoMetaTitle("");
      setSeoMetaDescription("");
      setSeoMetaKeywords("");

      toast({
        title: "Category created successfully",
      });
    },
    onError() {
      toast({
        variant: "destructive",
        title: "Something went wrong",
      });
    },
  });

  const handleCreate = async () => {
    try {
      setIsCreating(true);

      if (imgFile && slug && title && description) {
        const res = await startUpload(imgFile);
        const imgUrl = res && res[0] ? res[0].url : "";

        createCategory({
          parentCategoryId,
          visibility,
          imgUrl,
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
      setIsCreating(false);

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
          Dashboard&nbsp;&nbsp;‣&nbsp;&nbsp;Categories&nbsp;&nbsp;‣&nbsp;&nbsp;Create
        </p>

        <div className="flex gap-2">
          <Button variant={"secondary"} asChild>
            <Link href={"/dashboard/categories"}>Go back</Link>
          </Button>

          <Button onClick={handleCreate} disabled={isCreating}>
            {isCreating && <Loader2 className="mr-2 w-4 h-4 animate-spin" />}{" "}
            Create
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

          <Img imgFile={imgFile} setImgFile={setImgFile} />
        </div>
      </div>
    </div>
  );
}
