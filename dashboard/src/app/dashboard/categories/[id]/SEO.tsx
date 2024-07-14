import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface IProps {
  seoMetaTitle: string;
  setSeoMetaTitle: (seoMetaTitle: string) => void;
  seoMetaDescription: string;
  setSeoMetaDescription: (seoMetaDescription: string) => void;
  seoMetaKeywords: string;
  setSeoMetaKeywords: (seoMetaKeywords: string) => void;
}

export default function SEO({
  seoMetaTitle,
  setSeoMetaTitle,
  seoMetaDescription,
  setSeoMetaDescription,
  seoMetaKeywords,
  setSeoMetaKeywords,
}: IProps) {
  return (
    <Card className="shadow-none">
      <CardHeader className="p-8">
        <CardTitle className="text-lg">SEO</CardTitle>
      </CardHeader>

      <CardContent className="p-8 pt-0 space-y-6">
        <div>
          <Label htmlFor="seoMetaTitle" className="mb-3 block">
            Meta title
          </Label>

          <Input
            onChange={(e) => setSeoMetaTitle(e.target.value)}
            value={seoMetaTitle}
            id="seoMetaTitle"
          />
        </div>

        <div>
          <Label htmlFor="seoMetaDescription" className="mb-3 block">
            Meta description
          </Label>

          <Textarea
            onChange={(e) => setSeoMetaDescription(e.target.value)}
            value={seoMetaDescription}
            id="seoMetaDescription"
          />
        </div>

        <div>
          <Label htmlFor="seoMetaKeywords" className="mb-3 block">
            Meta keywords
          </Label>

          <Input
            onChange={(e) => setSeoMetaKeywords(e.target.value)}
            value={seoMetaKeywords}
            id="seoMetaKeywords"
          />
        </div>
      </CardContent>
    </Card>
  );
}
