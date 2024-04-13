"use client";
import Image from "next/image";
import { useState } from "react";
export default function ProductCard({ data }) {
  const [product, setProduct] = useState(data);
  return (
    <>
      <div>
        <Image src={products.images[0]} alt={product.title} />
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
