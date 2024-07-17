import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface IProps {
  type: "fixed" | "percentage";
  setType: (type: "fixed" | "percentage") => void;
  title: string;
  setTitle: (title: string) => void;
  code: string;
  setCode: (code: string) => void;
  value: number;
  setValue: (value: number) => void;
}

export default function BasicInfo({
  type,
  setType,
  title,
  setTitle,
  code,
  setCode,
  value,
  setValue,
}: IProps) {
  return (
    <Card className="shadow-none">
      <CardHeader className="p-8">
        <CardTitle className="text-lg">Basic information</CardTitle>
      </CardHeader>

      <CardContent className="p-8 pt-0 space-y-6">
        <div>
          <Label className="mb-3 block">Type *</Label>

          <RadioGroup
            onValueChange={(value: "fixed" | "percentage") => setType(value)}
            value={type}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="fixed" id="cTr1" />
              <Label htmlFor="cTr1">Fixed</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="percentage" id="cTr2" />
              <Label htmlFor="cTr2">Percentage</Label>
            </div>
          </RadioGroup>
        </div>

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
          <Label htmlFor="code" className="mb-3 block">
            Code *
          </Label>

          <Input
            onChange={(e) => setCode(e.target.value)}
            value={code}
            id="code"
          />
        </div>

        <div>
          <Label htmlFor="value" className="mb-3 block">
            Discount rate *
          </Label>

          <div className="flex">
            <div className="px-4 bg-accent rounded-md rounded-e-none flex items-center">
              <p className="text-sm whitespace-nowrap">
                {type === "fixed" ? "$" : "%"}
              </p>
            </div>

            <Input
              onChange={(e) => setValue(parseInt(e.target.value))}
              value={value}
              type="number"
              id="value"
              className="rounded-s-none"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
