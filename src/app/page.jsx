// import myApiToken from "@/utils/product-api/login-api";
import { fetchData } from "@/utils/product-api/product-api";
import ProductsList from "@/components/list";
const data = await fetchData();
export default function LandingPage() {
  return (
    <>
      <h1 className="font-medium text-lg">Hello World!</h1>
      <ProductsList data={data} />
    </>
  );
}
