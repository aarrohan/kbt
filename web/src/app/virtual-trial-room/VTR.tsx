"use client";
import { useState } from "react";
import Canvas from "./Canvas";
import Products from "./Products";

interface IProps {
  products: IProduct[];
}

export default function VTR({ products }: IProps) {
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);

  return (
    <section className="lg:flex gap-8">
      <Canvas selectedProducts={selectedProducts} />

      <Products
        products={products}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
    </section>
  );
}
