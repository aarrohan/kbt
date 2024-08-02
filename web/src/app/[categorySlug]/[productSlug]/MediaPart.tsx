"use client";
import { useState } from "react";
import Image from "next/image";

interface IProps {
  imgUrl: string;
  secondaryImgUrl: string;
  otherImgUrls: string[];
  videoUrls: string[];
}

export default function MediaPart({
  imgUrl,
  secondaryImgUrl,
  otherImgUrls,
  videoUrls,
}: IProps) {
  const [activeImg, setActiveImg] = useState<number>(0);

  const images: string[] = [imgUrl, secondaryImgUrl, ...otherImgUrls];

  return (
    <div className="h-fit grid lg:grid-cols-[auto_50px] gap-5">
      <div className="relative w-full aspect-[3/4]">
        <Image src={images[activeImg]} alt="" fill={true} objectFit="cover" />
      </div>

      <div className="lg:pt-28 px-8 lg:px-0 flex flex-row lg:flex-col gap-4">
        {images.map((img, index) => {
          return (
            <div
              key={index}
              onClick={() => setActiveImg(index)}
              className={`relative w-[50px] h-[50px] border ${
                activeImg === index ? "border-dark/50" : "border-transparent"
              } aspect-[3/4] cursor-pointer duration-300`}
            >
              <Image src={img} alt="" fill={true} objectFit="cover" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
