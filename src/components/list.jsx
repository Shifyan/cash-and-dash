"use client";
import { useState } from "react";
import ProductCard from "./card";

export default function ProductsList({ data }) {
  const [products, setProducts] = useState(data);
  return (
    <>
      <div>
        <div className="grid grid-cols-5 gap-3">
          {products.map((value, index) => {
            return <ProductCard key={index} productData={value} />;
          })}
        </div>
      </div>
    </>
  );
}
