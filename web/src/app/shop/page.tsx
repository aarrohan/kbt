import type { Metadata } from "next";
import Product from "@/components/Product";
import prisma from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Shop - KBT",
};

export default async function Shop() {
  const products: IProduct[] = await prisma.product.findMany({
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section className="mt-[50px] py-20 lg:py-28">
      <div className="px-8 flex flex-col items-center">
        <div className="relative mb-16 w-full">
          <h1 className="mb-4 font-serif text-3xl lg:text-4xl font-normal text-center text-dark">
            Dresses
          </h1>

          <p className="text-xs font-medium text-center tracking-[1.5px] text-dark/50">
            {products.length} / {products.length}
          </p>

          <button className="absolute bottom-0 left-0 flex items-center gap-3 text-xs font-medium uppercase tracking-[1.5px]">
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

          <button className="absolute bottom-0 right-0 flex items-center gap-3 text-xs font-medium uppercase tracking-[1.5px]">
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

        {/* <div className="mb-16 w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-8"> */}
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            return <Product key={index} {...product} />;
          })}
        </div>

        {/* <button className="py-3 px-8 border border-dark/25 hover:border-transparent bg-white text-xs font-bold uppercase tracking-[1.5px] text-dark duration-300">
          Load more
        </button> */}
      </div>
    </section>
  );
}
