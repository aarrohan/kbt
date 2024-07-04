"use client";
import { useState } from "react";
import Image from "next/image";

export default function Canvas() {
  const [activeModel, setActiveModel] = useState<number>(0);

  return (
    <div className="relative aspect-[3/4] sm:aspect-square">
      <Image
        src="/images/product-9.png"
        alt=""
        fill={true}
        objectFit="cover"
        objectPosition="top"
      />

      {activeModel === 0 ? (
        <div className="absolute top-28 right-5 space-y-1">
          <h5 className="text-lg font-medium text-right text-dark">Jade</h5>

          <p className="text-sm text-right">162 / 5'3</p>

          <p className="text-sm text-right">Size: 36</p>
        </div>
      ) : activeModel === 1 ? (
        <div className="absolute top-28 right-5 space-y-1">
          <h5 className="text-lg font-medium text-right text-dark">Kara</h5>

          <p className="text-sm text-right">170cm / 5'7</p>

          <p className="text-sm text-right">Size: 37</p>
        </div>
      ) : activeModel === 2 ? (
        <div className="absolute top-28 right-5 space-y-1">
          <h5 className="text-lg font-medium text-right text-dark">Xae</h5>

          <p className="text-sm text-right">180 / 5'10</p>

          <p className="text-sm text-right">Size: 38</p>
        </div>
      ) : (
        <div className="absolute top-28 right-5 space-y-1">
          <h5 className="text-lg font-medium text-right text-dark">Howard</h5>

          <p className="text-sm text-right">190cm / 6'2</p>

          <p className="text-sm text-right">Size: 39</p>
        </div>
      )}

      <div className="absolute bottom-5 left-5 flex items-center gap-5">
        <p className="text-xs font-medium uppercase tracking-[1.5px] text-dark">
          Models:
        </p>

        <div className="flex gap-3">
          <div
            onClick={() => setActiveModel(0)}
            className={`relative w-[40px] h-[40px] border ${
              activeModel === 0 ? "border-dark" : "border-transparent"
            } cursor-pointer duration-300`}
          >
            <Image
              src="/images/model-1-avatar.png"
              alt=""
              fill={true}
              objectFit="cover"
            />
          </div>

          <div
            onClick={() => setActiveModel(1)}
            className={`relative w-[40px] h-[40px] border ${
              activeModel === 1 ? "border-dark" : "border-transparent"
            } cursor-pointer duration-300`}
          >
            <Image
              src="/images/model-2-avatar.png"
              alt=""
              fill={true}
              objectFit="cover"
            />
          </div>

          <div
            onClick={() => setActiveModel(2)}
            className={`relative w-[40px] h-[40px] border ${
              activeModel === 2 ? "border-dark" : "border-transparent"
            } cursor-pointer duration-300`}
          >
            <Image
              src="/images/model-3-avatar.png"
              alt=""
              fill={true}
              objectFit="cover"
            />
          </div>

          <div
            onClick={() => setActiveModel(3)}
            className={`relative w-[40px] h-[40px] border ${
              activeModel === 3 ? "border-dark" : "border-transparent"
            } cursor-pointer duration-300`}
          >
            <Image
              src="/images/model-4-avatar.png"
              alt=""
              fill={true}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
