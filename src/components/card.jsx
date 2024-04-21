"use client";
import Image from "next/image";
import { useState } from "react";
export default function ProductCard({ productData }) {
  const [product, setProduct] = useState(productData);
  return (
    <>
      <div className="text-black border">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={255}
          height={100}
        />
        <div className="description">
          <div className="title">
            <h1>{product.title}</h1>
          </div>
          <div className="price">
            <p>{product.price}</p>
          </div>
          <div className="rating">
            <p>{product.rating}</p>
          </div>
        </div>
      </div>
    </>
  );
}
