import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface IProps {
  imgUrl: string;
  imgFile: File[] | null;
  setImgFile: (imgFile: File[] | null) => void;
}

export default function Img({ imgUrl, imgFile, setImgFile }: IProps) {
  return (
    <Card className="shadow-none">
      <CardHeader className="p-8">
        <CardTitle className="text-lg">Image *</CardTitle>
      </CardHeader>

      <CardContent className="p-8 pt-0 space-y-6">
        <div className="relative aspect-[3/4]">
          <Image
            src={imgFile ? URL.createObjectURL(imgFile[0]) : imgUrl}
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
                setImgFile(Array.from(files));
              }
            }}
            type="file"
          />

          <Button onClick={() => setImgFile(null)} variant={"destructive"}>
            Clear
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
