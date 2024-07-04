import BtnText from "@/components/BtnText";
import ProductCard from "@/components/ProductCard";

export default function TrendingCollectionSection() {
  const products: IProductCard[] = [
    {
      image: "/images/product-5.png",
      backImage: "/images/product-5-2.png",
      title: "Leather Flat Lace",
      color: "Light Yellow",
    },
    {
      image: "/images/product-6.png",
      backImage: "/images/product-6-2.png",
      title: "Feather Skirt",
      color: "White",
    },
    {
      image: "/images/product-7.png",
      backImage: "/images/product-7-2.png",
      title: "Print Top",
      color: "Mix",
    },
    {
      image: "/images/product-8.png",
      backImage: "/images/product-8-2.png",
      title: "Embroidered Top",
      color: "Black",
      label: "New",
    },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="px-8">
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-center gap-5">
          <h2 className="font-serif text-3xl lg:text-4xl font-normal text-dark">
            Trending collection
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
