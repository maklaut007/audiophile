import type { NextPage } from "next";
import NewProduct from "../components/NewProduct";
import ProductExamples from "../components/ProductExamples";
import ProductTypes from "../components/ProductTypes";

const Home: NextPage = () => {
  return (
    <>
      <NewProduct />
      <ProductTypes />
      <ProductExamples />
    </>
  );
};

export default Home;
