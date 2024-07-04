import BtnText from "@/components/BtnText";
import ProductCard from "@/components/ProductCard";

export default function MidSummerCollectionSection() {
  const products: IProductCard[] = [
    {
      image: "/images/product-1.png",
      backImage: "/images/product-1-2.png",
      title: "Knit Dress",
      color: "Light Pink",
    },
    {
      image: "/images/product-2.png",
      backImage: "/images/product-2-2.png",
      title: "Floral Dress",
      color: "Baby Blue",
      label: "New",
    },
    {
      image: "/images/product-3.png",
      backImage: "/images/product-3-2.png",
      title: "Printed Midi Dress",
      color: "Olive",
      label: "New",
    },
    {
      image: "/images/product-4.png",
      backImage: "/images/product-4-2.png",
      title: "Linen Shirt",
      color: "Grey",
      label: "Sold out",
    },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="px-8">
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-center gap-5">
          <h2 className="font-serif text-3xl lg:text-4xl font-normal text-dark">
            Midsummer collection
          </h2>

          <BtnText text="View all" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            return <ProductCard key={index} {...product} />;
          })}
        </div>
      </div>
    </section>
  );
}
