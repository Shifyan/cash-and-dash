"use client";
// import myApiToken from "@/utils/product-api/login-api";
import { fetchData } from "@/utils/product-api/product-api";
import ProductsList from "@/components/list";
import { useState } from "react";
// const products = await getProducts();
const data = await fetchData();
export default function LandingPage() {
  console.log(data);
  const [products, setProducts] = useState(data);
  console.log(products);
  return (
    <>
      <h1 className="font-medium text-lg">Hello World!</h1>
      {/* <h1>{myApiToken}</h1> */}
      {/* <ProductsList data={products} /> */}
    </>
  );
}
