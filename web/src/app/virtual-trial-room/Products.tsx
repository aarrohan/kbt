import { useState } from "react";
import Product from "@/components/Product";

interface IProps {
  products: IProduct[];
  selectedProducts: IProduct[];
  setSelectedProducts: (ids: IProduct[]) => void;
}

export default function Products({
  products,
  selectedProducts,
  setSelectedProducts,
}: IProps) {
  const [activeView, setActiveView] = useState<number>(0);
  const [query, setQuery] = useState<string>("");

  const views = ["Explore", "My selection"];

  return (
    <div className="relative flex-1">
      <div className="hide-scrollbar lg:absolute w-full h-full pt-8 lg:pt-5 pb-20 lg:pb-28 pl-8 lg:pl-0 pr-8 overflow-scroll">
        <div className="mb-10 flex justify-between sm:justify-start sm:gap-12">
          {views.map((view, index) => {
            return (
              <h3
                key={index}
                onClick={() => setActiveView(index)}
                className={`font-serif text-xl lg:text-2xl font-normal whitespace-nowrap ${
                  activeView === index ? "text-dark" : "text-dark/35"
                } cursor-pointer transition`}
              >
                {view}
              </h3>
            );
          })}
        </div>

        <div className="mb-12 flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-12">
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="text"
            placeholder="Search products..."
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
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-dark"
                />
              </svg>
            </button>
          </div>
        </div>

        {activeView === 0 ? (
          <div className="grid sm:grid-cols-2 2xl:grid-cols-4 gap-8">
            {products
              .filter((product) => !selectedProducts.includes(product))
              .filter((product) =>
                product.title.toLowerCase().includes(query.toLowerCase())
              ).length > 0 ? (
              products
                .filter((product) => !selectedProducts.includes(product))
                .filter((product) =>
                  product.title.toLowerCase().includes(query.toLowerCase())
                )
                .map((product, index) => {
                  return (
                    <Product
                      key={index}
                      vtr={true}
                      handleClick={() => {
                        if (selectedProducts.includes(product)) {
                          setSelectedProducts(
                            selectedProducts.filter(
                              (selectedProduct) => selectedProduct !== product
                            )
                          );
                        } else {
                          setSelectedProducts([...selectedProducts, product]);
                        }
                      }}
                      {...product}
                    />
                  );
                })
            ) : (
              <p className="text-sm text-dark/50">Nothing to show...</p>
            )}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 2xl:grid-cols-4 gap-8">
            {selectedProducts.filter((product) =>
              product.title.toLowerCase().includes(query.toLowerCase())
            ).length > 0 ? (
              selectedProducts
                .filter((product) =>
                  product.title.toLowerCase().includes(query.toLowerCase())
                )
                .map((product, index) => {
                  return (
                    <Product
                      key={index}
                      vtr={true}
                      handleClick={() => {
                        if (selectedProducts.includes(product)) {
                          setSelectedProducts(
                            selectedProducts.filter(
                              (selectedProduct) => selectedProduct !== product
                            )
                          );
                        } else {
                          setSelectedProducts([...selectedProducts, product]);
                        }
                      }}
                      {...product}
                    />
                  );
                })
            ) : (
              <p className="text-sm text-dark/50">Nothing to show...</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
