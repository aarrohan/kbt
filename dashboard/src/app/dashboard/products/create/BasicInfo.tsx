import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IStock } from "./Form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface IProps {
  isFeatured: boolean;
  setIsFeatured: (isFeatured: boolean) => void;
  slug: string;
  setSlug: (slug: string) => void;
  title: string;
  setTitle: (title: string) => void;
  price: string;
  setPrice: (title: string) => void;
  discountedPrice: string;
  setDiscountedPrice: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  colors: string[];
  setColors: (colors: string[]) => void;
  sizes: string[];
  setSizes: (sizes: string[]) => void;
  stock: IStock[];
  setStock: (stock: any) => void;
}

export default function BasicInfo({
  isFeatured,
  setIsFeatured,
  slug,
  setSlug,
  title,
  setTitle,
  price,
  setPrice,
  discountedPrice,
  setDiscountedPrice,
  description,
  setDescription,
  colors,
  setColors,
  sizes,
  setSizes,
  stock,
  setStock,
}: IProps) {
  return (
    <Card className="shadow-none">
      <CardHeader className="p-8">
        <CardTitle className="text-lg">Basic information</CardTitle>
      </CardHeader>

      <CardContent className="p-8 pt-0 space-y-6">
        <div>
          <Label htmlFor="title" className="mb-3 block">
            Type *
          </Label>

          <RadioGroup
            onValueChange={(value: "normal" | "featured") =>
              setIsFeatured(value === "featured")
            }
            value={isFeatured ? "featured" : "normal"}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="normal" id="tr1" />
              <Label htmlFor="tr1">Normal</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="featured" id="tr2" />
              <Label htmlFor="tr2">Featured</Label>
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
          <Label htmlFor="price" className="mb-3 block">
            Price *
          </Label>

          <Input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            id="price"
          />
        </div>

        <div>
          <Label htmlFor="discountedPrice" className="mb-3 block">
            Discounted price *
          </Label>

          <Input
            onChange={(e) => setDiscountedPrice(e.target.value)}
            value={discountedPrice}
            id="discountedPrice"
          />
        </div>

        <div>
          <Label htmlFor="slug" className="mb-3 block">
            Slug *
          </Label>

          <div className="flex">
            <div className="px-4 bg-accent rounded-md rounded-e-none flex items-center">
              <p className="text-sm whitespace-nowrap">
                {process.env.NEXT_PUBLIC_APP_DOMAIN}/category/products/
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

        <div>
          <Label htmlFor="colors" className="mb-3 block">
            Colors *
          </Label>

          <Input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();

                const value = e.currentTarget.value;

                setColors([...colors, value]);

                let exists = stock.find((item) => item.color === value);

                if (sizes.length > 0 && !exists) {
                  setStock((prev: IStock[]) => {
                    return [
                      ...prev,
                      ...sizes.map((size) => {
                        return {
                          color: value,
                          size,
                          available: 0,
                        };
                      }),
                    ];
                  });
                }

                e.currentTarget.value = "";
              }
            }}
            id="colors"
          />

          <div className="mt-3 flex flex-wrap gap-2">
            {colors.map((color, index) => {
              return (
                <p
                  key={index}
                  onClick={() => {
                    if (colors.length === 1) {
                      setSizes([]);
                      setStock([]);
                    }

                    setColors(colors.filter((item) => item !== color));

                    setStock((prev: IStock[]) => {
                      return prev.filter((item) => item.color !== color);
                    });
                  }}
                  className="py-1 pl-2 pr-3 bg-accent rounded-full flex items-center gap-2 text-sm font-medium cursor-pointer"
                >
                  <span
                    className={`w-[12px] h-[12px] rounded-full block`}
                    style={{ backgroundColor: color }}
                  ></span>
                  {color}
                </p>
              );
            })}
          </div>
        </div>

        {colors.length > 0 && (
          <div>
            <Label htmlFor="sizes" className="mb-3 block">
              Sizes *
            </Label>

            <Input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();

                  const value = e.currentTarget.value;

                  setSizes([...sizes, value]);

                  setStock((prev: IStock[]) => {
                    return [
                      ...prev,
                      ...colors.map((color) => {
                        return { size: value, color, available: 0 };
                      }),
                    ];
                  });

                  e.currentTarget.value = "";
                }
              }}
              id="sizes"
            />

            <div className="mt-3 flex flex-wrap gap-2">
              {sizes.map((size, index) => {
                return (
                  <p
                    key={index}
                    onClick={() => {
                      setSizes(sizes.filter((item) => item !== size));

                      setStock((prev: IStock[]) => {
                        return prev.filter((item) => item.size !== size);
                      });
                    }}
                    className="py-1 px-3 bg-accent rounded-full text-sm font-medium cursor-pointer"
                  >
                    {size}
                  </p>
                );
              })}
            </div>
          </div>
        )}

        {sizes.length > 0 && (
          <div>
            <Label className="mb-3 block">Products in stock *</Label>

            <div className="space-y-6">
              {sizes.map((size) => {
                return colors.map((color, index) => {
                  return (
                    <div key={index} className="flex items-center gap-5">
                      <p className="py-1 pl-3 pr-2 bg-accent rounded-full flex items-center gap-2 text-sm font-medium cursor-pointer">
                        {size}:
                        <span
                          className={`w-[12px] h-[12px] rounded-full block`}
                          style={{ backgroundColor: color }}
                        ></span>
                      </p>

                      <Input
                        onChange={(e) => {
                          const value = parseInt(e.target.value);

                          setStock((prev: IStock[]) => {
                            return prev.map((item) => {
                              if (item.size === size && item.color === color) {
                                return { ...item, available: value };
                              }

                              return item;
                            });
                          });
                        }}
                        defaultValue={0}
                      />
                    </div>
                  );
                });
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
