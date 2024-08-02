import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { trpc } from "@/app/_trpc/client";
import { Loader2 } from "lucide-react";

interface IProps {
  categoryId: string | undefined;
  setCategoryId: (categoryId: string | undefined) => void;
}

export default function Category({ categoryId, setCategoryId }: IProps) {
  const { isError, isLoading, data } = trpc.category.getAll.useQuery();

  return (
    <Card className="shadow-none">
      <CardHeader className="p-8">
        <CardTitle className="text-lg">Category</CardTitle>
      </CardHeader>

      <CardContent className="p-8 pt-0 space-y-6">
        {isLoading ? (
          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
        ) : isError ? (
          <p className="text-sm text-muted-foreground">Something went wrong</p>
        ) : (
          <Select
            onValueChange={(value) => {
              if (value === "none") {
                setCategoryId(undefined);
              } else {
                setCategoryId(value);
              }
            }}
            value={categoryId}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectItem value="none">None</SelectItem>

                {data?.map((category, index) => {
                  return (
                    <SelectItem key={index} value={category.id}>
                      {category.title}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      </CardContent>
    </Card>
  );
}
