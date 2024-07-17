import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface IProps {
  visibility: "published" | "scheduled" | "hidden";
  setVisibility: (visibility: "published" | "scheduled" | "hidden") => void;
  publishDate: Date | undefined;
  setPublishDate: (publishDate: Date | undefined) => void;
}

export default function Visibility({
  visibility,
  setVisibility,
  publishDate,
  setPublishDate,
}: IProps) {
  useEffect(() => {
    if (visibility !== "scheduled") {
      setPublishDate(undefined);
    }
  }, [visibility]);

  return (
    <Card className="shadow-none">
      <CardHeader className="p-8">
        <CardTitle className="text-lg">Visibility *</CardTitle>
      </CardHeader>

      <CardContent className="p-8 pt-0 space-y-8">
        <RadioGroup
          onValueChange={(value: "published" | "scheduled" | "hidden") =>
            setVisibility(value)
          }
          value={visibility}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="published" id="r1" />
            <Label htmlFor="r1">Published</Label>
          </div>

          <div className="flex items-center space-x-2">
            <RadioGroupItem value="scheduled" id="r2" />
            <Label htmlFor="r2">Scheduled</Label>
          </div>

          <div className="flex items-center space-x-2">
            <RadioGroupItem value="hidden" id="r3" />
            <Label htmlFor="r3">Hidden</Label>
          </div>
        </RadioGroup>

        {visibility === "scheduled" && (
          <div>
            <Label className="mb-3 block">Publish date</Label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full pl-3 font-normal text-left",
                    !publishDate && "text-muted-foreground"
                  )}
                >
                  {publishDate ? (
                    format(publishDate, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={publishDate}
                  onSelect={setPublishDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <p className="mt-3 text-sm text-muted-foreground">
              The category will not be visible until the specified date
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
