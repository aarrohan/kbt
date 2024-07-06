import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface IProps {
  slug: string;
  setSlug: (slug: string) => void;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
}

export default function BasicInfo({
  slug,
  setSlug,
  title,
  setTitle,
  description,
  setDescription,
}: IProps) {
  return (
    <Card className="shadow-none">
      <CardHeader className="p-8">
        <CardTitle className="text-lg">Basic information</CardTitle>
      </CardHeader>

      <CardContent className="p-8 pt-0 space-y-6">
        <div>
          <Label htmlFor="title" className="mb-3 block">
            Title *
          </Label>

          <Input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            id="title"
          />
        </div>

        <div>
          <Label htmlFor="slug" className="mb-3 block">
            Slug *
          </Label>

          <div className="flex">
            <div className="px-4 bg-accent rounded-md rounded-e-none flex items-center">
              <p className="text-sm whitespace-nowrap">
                {process.env.NEXT_PUBLIC_APP_DOMAIN}/categories/
              </p>
            </div>

            <Input
              onChange={(e) => setSlug(e.target.value)}
              value={slug}
              id="slug"
              className="rounded-s-none"
            />
          </div>

          <p className="mt-3 text-sm text-muted-foreground">
            Unique human-readable category identifier. No longer than 255
            characters
          </p>
        </div>

        <div>
          <Label htmlFor="description" className="mb-3 block">
            Description *
          </Label>

          <Textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            id="description"
          />
        </div>
      </CardContent>
    </Card>
  );
}
