import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Categories() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Dashboard&nbsp;&nbsp;‣&nbsp;&nbsp;Categories
        </p>

        <Button asChild>
          <Link href={"/dashboard/categories/create"}>New category</Link>
        </Button>
      </div>
    </div>
  );
}
