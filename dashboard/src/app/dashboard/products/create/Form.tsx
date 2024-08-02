"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BasicInfo from "./BasicInfo";
import SEO from "./SEO";
import Visibility from "./Visibility";
import Category from "./Category";
import Img from "./Img";
import OtherImgs from "./OtherImgs";
import Videos from "./Videos";
import { useUploadThing } from "@/lib/uploadthing";
import { useToast } from "@/components/ui/use-toast";
import { trpc } from "@/app/_trpc/client";
import { Loader2 } from "lucide-react";

export interface IStock {
  size: string;
  color: string;
  available: number;
}

export default function Form() {
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const [categoryId, setCategoryId] = useState<string | undefined>();

  const [visibility, setVisibility] = useState<
    "published" | "scheduled" | "hidden"
  >("published");

  const [isFeatured, setIsFeatured] = useState<boolean>(false);

  const [imgFile, setImgFile] = useState<File[] | null>(null);
  const [secondaryImgFile, setSecondaryImgFile] = useState<File[] | null>(null);

  const [modelImgFiles, setModelImgFiles] = useState<File[] | null>(null);

  const [otherImgFiles, setOtherImgFiles] = useState<File[] | null>(null);
  const [videoFiles, setVideoFiles] = useState<File[] | null>(null);

  const [slug, setSlug] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const [price, setPrice] = useState<string>("");
  const [discountedPrice, setDiscountedPrice] = useState<string>("");

  const [description, setDescription] = useState<string>("");

  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);

  const [stock, setStock] = useState<IStock[]>([]);

  const [seoMetaTitle, setSeoMetaTitle] = useState<string>("");
  const [seoMetaDescription, setSeoMetaDescription] = useState<string>("");
  const [seoMetaKeywords, setSeoMetaKeywords] = useState<string>("");

  const [publishDate, setPublishDate] = useState<Date | undefined>();

  const { toast } = useToast();
  const { startUpload } = useUploadThing("mediaUploader");
  const { mutate: createProduct } = trpc.product.create.useMutation({
    onMutate() {
      setIsCreating(true);
    },
    onSettled() {
      setIsCreating(false);
    },
    onSuccess() {
      setCategoryId(undefined);

      setVisibility("published");

      setIsFeatured(false);

      setImgFile(null);
      setSecondaryImgFile(null);

      setModelImgFiles(null);

      setOtherImgFiles(null);
      setVideoFiles(null);

      setSlug("");
      setTitle("");

      setPrice("");
      setDiscountedPrice("");

      setDescription("");

      setColors([]);
      setSizes([]);

      setStock([]);

      setSeoMetaTitle("");
      setSeoMetaDescription("");
      setSeoMetaKeywords("");

      setPublishDate(undefined);

      toast({
        title: "Product created successfully",
      });
    },
    onError(err) {
      toast({
        variant: "destructive",
        title: err.message,
      });
    },
  });

  const handleCreate = async () => {
    try {
      setIsCreating(true);

      if (
        categoryId &&
        imgFile &&
        secondaryImgFile &&
        modelImgFiles?.length === 5 &&
        slug &&
        title &&
        price &&
        description &&
        colors &&
        sizes &&
        stock
      ) {
        const imgRes = await startUpload(imgFile);
        const imgUrl = imgRes && imgRes[0] ? imgRes[0].url : "";

        const secondaryImgRes = await startUpload(secondaryImgFile);
        const secondaryImgUrl =
          secondaryImgRes && secondaryImgRes[0] ? secondaryImgRes[0].url : "";

        let otherImgUrls: string[] | undefined = undefined;
        let modelImgUrls: string[] | undefined = undefined;
        let videoUrls: string[] | undefined = undefined;

        if (modelImgFiles) {
          const modelImgRes = await startUpload(modelImgFiles);
          modelImgUrls = modelImgRes?.map((img) => img.url);
        }

        if (otherImgFiles) {
          const otherImgRes = await startUpload(otherImgFiles);
          otherImgUrls = otherImgRes?.map((img) => img.url);
        }

        if (videoFiles) {
          const videoRes = await startUpload(videoFiles);
          videoUrls = videoRes?.map((video) => video.url);
        }

        createProduct({
          categoryId,
          visibility,
          isFeatured,
          imgUrl,
          secondaryImgUrl,
          modelImgUrls,
          otherImgUrls,
          videoUrls,
          slug,
          title,
          price,
          discountedPrice,
          description,
          colors,
          sizes,
          stock,
          seoMetaTitle,
          seoMetaDescription,
          seoMetaKeywords,
          publishDate: publishDate ? publishDate.toString() : undefined,
        });
      } else {
        setIsCreating(false);

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
          Dashboard&nbsp;&nbsp;‣&nbsp;&nbsp;Products&nbsp;&nbsp;‣&nbsp;&nbsp;Create
        </p>

        <div className="flex gap-2">
          <Button variant={"secondary"} asChild>
            <Link href={"/dashboard/products"}>Go back</Link>
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
            isFeatured={isFeatured}
            setIsFeatured={setIsFeatured}
            slug={slug}
            setSlug={setSlug}
            title={title}
            setTitle={setTitle}
            price={price}
            setPrice={setPrice}
            discountedPrice={discountedPrice}
            setDiscountedPrice={setDiscountedPrice}
            description={description}
            setDescription={setDescription}
            colors={colors}
            setColors={setColors}
            sizes={sizes}
            setSizes={setSizes}
            stock={stock}
            setStock={setStock}
          />

          <SEO
            seoMetaTitle={seoMetaTitle}
            setSeoMetaTitle={setSeoMetaTitle}
            seoMetaDescription={seoMetaDescription}
            setSeoMetaDescription={setSeoMetaDescription}
            seoMetaKeywords={seoMetaKeywords}
            setSeoMetaKeywords={setSeoMetaKeywords}
          />

          <OtherImgs
            title="Model images *"
            otherImgFiles={modelImgFiles}
            setOtherImgFiles={setModelImgFiles}
          />

          <OtherImgs
            title="Other images"
            otherImgFiles={otherImgFiles}
            setOtherImgFiles={setOtherImgFiles}
          />

          <Videos
            title="Videos"
            videoFiles={videoFiles}
            setVideoFiles={setVideoFiles}
          />
        </div>

        <div className="space-y-5">
          <Visibility
            visibility={visibility}
            setVisibility={setVisibility}
            publishDate={publishDate}
            setPublishDate={setPublishDate}
          />

          <Category categoryId={categoryId} setCategoryId={setCategoryId} />

          <Img
            title="Featured image *"
            imgFile={imgFile}
            setImgFile={setImgFile}
          />

          <Img
            title="Secondary image *"
            imgFile={secondaryImgFile}
            setImgFile={setSecondaryImgFile}
          />
        </div>
      </div>
    </div>
  );
}
