"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BasicInfo from "./BasicInfo";
import Visibility from "./Visibility";
import { useToast } from "@/components/ui/use-toast";
import { trpc } from "@/app/_trpc/client";
import { Loader2 } from "lucide-react";
import type { Coupon } from "@prisma/client";

export default function Form({ coupon }: { coupon: Coupon }) {
  const [isSavingChanges, setIsSavingChanges] = useState<boolean>(false);

  const [visibility, setVisibility] = useState<
    "published" | "scheduled" | "hidden"
  >(coupon.visibility);

  const [type, setType] = useState<"fixed" | "percentage">(coupon.type);

  const [title, setTitle] = useState<string>(coupon.title);
  const [code, setCode] = useState<string>(coupon.code);
  const [value, setValue] = useState<number>(coupon.value);

  const [publishDate, setPublishDate] = useState<Date | undefined>(
    coupon.publishDate ? coupon.publishDate : undefined
  );

  const { toast } = useToast();
  const { mutate: updateCoupon } = trpc.coupon.update.useMutation({
    onMutate() {
      setIsSavingChanges(true);
    },
    onSettled() {
      setIsSavingChanges(false);
    },
    onSuccess() {
      toast({
        title: "Coupon updated successfully",
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

      if (title && code && value) {
        updateCoupon({
          id: coupon.id,
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
          Dashboard&nbsp;&nbsp;‣&nbsp;&nbsp;Coupons&nbsp;&nbsp;‣&nbsp;&nbsp;Edit
        </p>

        <div className="flex gap-2">
          <Button variant={"secondary"} asChild>
            <Link href={"/dashboard/coupons"}>Go back</Link>
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
