// import myApiToken from "@/utils/product-api/login-api";
import { fetchData } from "@/utils/product-api/product-api";
import Image from "next/image";
import ProductsList from "@/components/list";
export default async function LandingPage() {
  const data = await fetchData();
  const products = data.products;
  return (
    <>
      <h1 className="font-medium text-lg">Hello World!</h1>

      <ProductsList data={products} />
    </>
  );
}
