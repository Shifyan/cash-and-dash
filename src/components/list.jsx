"use client";
import { useState } from "react";
import ProductCard from "./card";

export default function ProductsList({ data }) {
  const [products, setProducts] = useState(data);
  return (
    <>
      <div>
        <div className="grid grid-col-4 gap-3">
          {products.map((value, index) => {
            return <ProductCard key={index} data={value} />;
          })}
        </div>
      </div>
    </>
  );
}
