import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface IProps {
  title: string;
  videoFiles: File[] | null;
  setVideoFiles: (videoFiles: any) => void;
}

interface IVideoProps {
  index: number;
  videoFiles: File[] | null;
  setVideoFiles: (videoFiles: any) => void;
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

function Video({ index, videoFiles, setVideoFiles }: IVideoProps) {
  if (!videoFiles) return;

  const imgUrl = URL.createObjectURL(videoFiles[index]);

  return (
    <div className="flex flex-col space-y-6">
      <div className="relative aspect-[3/4]">
        <video
          src={videoFiles[index].name ? imgUrl : ""}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
          controls
          muted
        ></video>
      </div>

      <div className="space-y-3">
        <Input
          onChange={(e) => {
            const files = e.target.files;

            if (files) {
              const newFiles = Array.from(files);
              const updatedFiles = videoFiles?.map((file, i) =>
                i === index ? newFiles[0] : file
              );

              setVideoFiles(updatedFiles);
            }
          }}
          type="file"
        />

        <Button
          onClick={() => {
            const updatedFiles = videoFiles?.filter((_, i) => i !== index);

            setVideoFiles(updatedFiles);
          }}
          variant={"destructive"}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default function Videos({ title, videoFiles, setVideoFiles }: IProps) {
  return (
    <Card className="shadow-none">
      <CardHeader className="p-8">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>

      <CardContent className="p-8 pt-0 grid grid-cols-3 gap-y-12 gap-x-6">
        {videoFiles?.map((_, index) => (
          <Video
            key={index}
            index={index}
            videoFiles={videoFiles}
            setVideoFiles={setVideoFiles}
          />
        ))}

        <BtnAddNew
          handleClick={() => {
            const inputElem = document.createElement("input");
            inputElem.type = "file";
            inputElem.accept = "video/*";
            inputElem.click();

            inputElem.addEventListener("change", (e) => {
              const files = (e.target as HTMLInputElement)?.files;

              if (files) {
                const newFiles = Array.from(files);

                setVideoFiles((prevFiles: File[]) => {
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
