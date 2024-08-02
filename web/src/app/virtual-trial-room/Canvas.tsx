"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  selectedProducts: IProduct[];
}

interface IModel {
  imgUrl: string;
  name: string;
  height: string;
  size: string;
}

export default function Canvas({ selectedProducts }: IProps) {
  const [isProductSelected, setIsProductSelected] = useState<boolean>(false);
  const [isModelLoaded, setIsModelLoaded] = useState<boolean>(false);
  const [activeModel, setActiveModel] = useState<number>(0);

  useEffect(() => {
    if (selectedProducts.length > 0) {
      setIsProductSelected(true);
    } else {
      setIsProductSelected(false);
    }
  }, [selectedProducts]);

  const models: IModel[] = [
    {
      imgUrl: "/images/models/amelia.png",
      name: "Amelia",
      height: "170cm / 5'7",
      size: "37",
    },
    {
      imgUrl: "/images/models/scarlett.png",
      name: "Scarlett",
      height: "182cm / 6",
      size: "39",
    },
    {
      imgUrl: "/images/models/luna.png",
      name: "Luna",
      height: "175cm / 5'9",
      size: "38",
    },
    {
      imgUrl: "/images/models/xisu.png",
      name: "Xisu",
      height: "160cm / 5'3",
      size: "36",
    },
    {
      imgUrl: "/images/models/grace.png",
      name: "Grace",
      height: "165cm / 5'5",
      size: "40",
    },
  ];

  return (
    <div className="relative w-full lg:w-fit lg:h-[70svh] xl:h-[100svh] aspect-[2/3]">
      <Link
        href="/"
        className="absolute top-5 left-8 z-20 font-serif text-3xl font-bold text-dark duration-300"
      >
        KBT
      </Link>

      {isProductSelected && !isModelLoaded && (
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-foreground-1/75 flex justify-center items-center">
          <p className="text-white">Wearing...</p>
        </div>
      )}

      <Image
        src={models[activeModel].imgUrl}
        alt=""
        fill={true}
        objectFit="cover"
        objectPosition="top"
      />

      {selectedProducts.map((product, index) => {
        return (
          <Image
            key={index}
            onLoad={() => {
              setIsModelLoaded(true);
            }}
            src={product.modelImgUrls[activeModel]}
            alt=""
            fill={true}
            objectFit="cover"
            objectPosition="top"
            className={`${
              isModelLoaded ? "opacity-100" : "opacity-0"
            } transition`}
          />
        );
      })}

      <div className="absolute top-5 right-8 z-20 space-y-1">
        <h5 className="text-lg font-medium text-right text-dark">
          {models[activeModel].name}
        </h5>

        <p className="text-sm text-right">{models[activeModel].height}</p>

        <p className="text-sm text-right">Size: {models[activeModel].size}</p>
      </div>

      <div className="absolute bottom-5 z-20 w-full px-8 flex justify-between">
        <button
          onClick={() => {
            setIsModelLoaded(false);

            setActiveModel((prev) =>
              prev === 0 ? models.length - 1 : prev - 1
            );
          }}
          className={`text-xs font-medium uppercase tracking-[1.5px] text-dark`}
        >
          Prev
        </button>

        <button
          onClick={() => {
            setIsModelLoaded(false);

            setActiveModel((prev) =>
              prev === models.length - 1 ? 0 : prev + 1
            );
          }}
          className={`text-xs font-medium uppercase tracking-[1.5px] text-dark`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
