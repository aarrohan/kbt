"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BasicInfo from "./BasicInfo";
import Visibility from "./Visibility";
import { useToast } from "@/components/ui/use-toast";
import { trpc } from "@/app/_trpc/client";
import { Loader2 } from "lucide-react";

export default function Form() {
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const [visibility, setVisibility] = useState<
    "published" | "scheduled" | "hidden"
  >("published");

  const [type, setType] = useState<"fixed" | "percentage">("fixed");

  const [title, setTitle] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [value, setValue] = useState<number>(10);

  const [publishDate, setPublishDate] = useState<Date | undefined>();

  const { toast } = useToast();
  const { mutate: createCoupon } = trpc.coupon.create.useMutation({
    onMutate() {
      setIsCreating(true);
    },
    onSettled() {
      setIsCreating(false);
    },
    onSuccess() {
      setVisibility("published");

      setType("fixed");

      setTitle("");
      setCode("");
      setValue(10);

      toast({
        title: "Coupon created successfully",
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

      if (title && code && value) {
        createCoupon({
          visibility,
          type,
          title,
          code,
          value,
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
          Dashboard&nbsp;&nbsp;‣&nbsp;&nbsp;Coupons&nbsp;&nbsp;‣&nbsp;&nbsp;Create
        </p>

        <div className="flex gap-2">
          <Button variant={"secondary"} asChild>
            <Link href={"/dashboard/coupons"}>Go back</Link>
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
            type={type}
            setType={setType}
            title={title}
            setTitle={setTitle}
            code={code}
            setCode={setCode}
            value={value}
            setValue={setValue}
          />
        </div>

        <div className="space-y-5">
          <Visibility
            visibility={visibility}
            setVisibility={setVisibility}
            publishDate={publishDate}
            setPublishDate={setPublishDate}
          />
        </div>
      </div>
    </div>
  );
}
