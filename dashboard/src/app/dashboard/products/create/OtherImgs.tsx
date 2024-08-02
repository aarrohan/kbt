import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface IProps {
  title: string;
  otherImgFiles: File[] | null;
  setOtherImgFiles: (otherImgFiles: any) => void;
}

interface IImgProps {
  index: number;
  imgFiles: File[] | null;
  setImgFiles: (imgFiles: any) => void;
}

function BtnAddNew({ handleClick }: { handleClick: () => void }) {
  return (
    <div
      onClick={handleClick}
      className="aspect-[3/4] border border-dashed hover:bg-accent rounded-md flex justify-center items-center cursor-pointer transition"
    >
      <Plus className="w-6 h-6 text-muted-foreground" />
    </div>
  );
}

function Img({ index, imgFiles, setImgFiles }: IImgProps) {
  if (!imgFiles) return;

  const imgUrl = URL.createObjectURL(imgFiles[index]);

  return (
    <div className="flex flex-col space-y-6">
      <div className="relative aspect-[3/4]">
        <Image
          src={imgFiles[index].name ? imgUrl : "/placeholder-1.svg"}
          alt="placeholder"
          fill={true}
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      <div className="space-y-3">
        <Input
          onChange={(e) => {
            const files = e.target.files;

            if (files) {
              const newFiles = Array.from(files);
              const updatedFiles = imgFiles?.map((file, i) =>
                i === index ? newFiles[0] : file
              );

              setImgFiles(updatedFiles);
            }
          }}
          type="file"
        />

        <Button
          onClick={() => {
            const updatedFiles = imgFiles?.filter((_, i) => i !== index);

            setImgFiles(updatedFiles);
          }}
          variant={"destructive"}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default function OtherImgs({
  title,
  otherImgFiles,
  setOtherImgFiles,
}: IProps) {
  return (
    <Card className="shadow-none">
      <CardHeader className="p-8">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>

      <CardContent className="p-8 pt-0 grid grid-cols-3 gap-y-12 gap-x-6">
        {otherImgFiles?.map((_, index) => (
          <Img
            key={index}
            index={index}
            imgFiles={otherImgFiles}
            setImgFiles={setOtherImgFiles}
          />
        ))}

        <BtnAddNew
          handleClick={() => {
            const inputElem = document.createElement("input");
            inputElem.type = "file";
            inputElem.accept = "image/*";
            inputElem.click();

            inputElem.addEventListener("change", (e) => {
              const files = (e.target as HTMLInputElement)?.files;

              if (files) {
                const newFiles = Array.from(files);

                setOtherImgFiles((prevFiles: File[]) => {
                  return prevFiles ? [...prevFiles, ...newFiles] : newFiles;
                });
              }
            });
          }}
        />
      </CardContent>
    </Card>
  );
}
