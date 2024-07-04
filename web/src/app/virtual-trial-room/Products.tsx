import ProductCard from "@/components/ProductCard";

export default function Products() {
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
    <div className="relative">
      <div className="hide-scrollbar lg:absolute w-full h-full pt-12 lg:pt-28 pb-20 lg:pb-28 pl-8 lg:pl-0 pr-8 overflow-scroll">
        <div className="mb-12 flex justify-between sm:justify-start sm:gap-12">
          <h3 className="font-serif text-lg lg:text-2xl font-normal whitespace-nowrap text cursor-pointer">
            Explore
          </h3>

          <h3 className="font-serif text-lg lg:text-2xl font-normal whitespace-nowrap text-dark/35 cursor-pointer">
            Curated looks
          </h3>

          <h3 className="font-serif text-lg lg:text-2xl font-normal whitespace-nowrap text-dark/35 cursor-pointer">
            My selection
          </h3>
        </div>

        <div className="mb-12 flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-12">
          <input
            type="text"
            placeholder="Email address"
            className="flex-1 w-full min-h-[50px] px-5 border border-dark/10 bg-transparent text-sm text-dark"
          />

          <div className="flex gap-8">
            <button className="flex items-center gap-3 text-xs font-medium uppercase tracking-[1.5px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.53942 4.25015C1.97216 3.61616 1.68854 3.29917 1.67784 3.02976C1.66854 2.79573 1.76912 2.57079 1.94972 2.42167C2.15763 2.25 2.58299 2.25 3.43371 2.25H14.5659C15.4166 2.25 15.842 2.25 16.0499 2.42167C16.2305 2.57079 16.3311 2.79573 16.3218 3.02976C16.3111 3.29917 16.0275 3.61616 15.4602 4.25015L11.1805 9.03332C11.0674 9.1597 11.0109 9.22289 10.9706 9.29481C10.9348 9.35859 10.9086 9.42726 10.8927 9.49863C10.8748 9.57911 10.8748 9.6639 10.8748 9.83348V13.8438C10.8748 13.9905 10.8748 14.0638 10.8512 14.1272C10.8303 14.1832 10.7963 14.2334 10.752 14.2736C10.7019 14.3192 10.6338 14.3464 10.4976 14.4009L7.94764 15.4209C7.67199 15.5311 7.53416 15.5863 7.42351 15.5633C7.32676 15.5432 7.24185 15.4857 7.18725 15.4033C7.12481 15.3091 7.12481 15.1607 7.12481 14.8638V9.83348C7.12481 9.6639 7.12481 9.57911 7.1069 9.49863C7.09102 9.42726 7.06478 9.35859 7.02903 9.29481C6.98871 9.22289 6.93217 9.1597 6.8191 9.03332L2.53942 4.25015Z"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="stroke-dark"
                />
              </svg>
              Filter
            </button>

            <button className="flex items-center gap-3 text-xs font-medium uppercase tracking-[1.5px]">
              Sort by
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.75 7.5H9.75M15.75 4.5H9.75M15.75 10.5H9.75M15.75 13.5H9.75M4.5 15L4.5 3M4.5 15L2.25 12.75M4.5 15L6.75 12.75M4.5 3L2.25 5.25M4.5 3L6.75 5.25"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="stroke-dark"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {products.map((product, index) => {
            return <ProductCard key={index} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
}
