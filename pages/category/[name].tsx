import type { NextPage } from "next";
import { useRouter } from "next/router";
import CategoryHeader from "../../components/CategoryHeader";
import ProductsList from "../../components/ProductsList";
import ProductTypes from "../../components/ProductTypes";
import fsPromises from "fs/promises";
import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";

const Home: NextPage = (props: any) => {
  const router = useRouter();
  const { name } = router.query;
  console.log(props);
  return (
    <>
      <CategoryHeader name={name?.toString() || ""}></CategoryHeader>
      <ProductsList items={props.loadedItems} />
      <ProductTypes />
    </>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), "data/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  return JSON.parse(jsonData.toString());
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { params } = context;
  const categoryName = params.name;
  const data = await getData();
  const items = data.filter((item: any) => {
    return item.category === categoryName;
  });
  return {
    props: {
      loadedItems: items,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const names = ["speakers", "headphones", "earphones"];
  const pathsWithParams = names.map((pname) => ({ params: { name: pname } }));
  return {
    paths: pathsWithParams,
    fallback: false,
  };
};

export default Home;
