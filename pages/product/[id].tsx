import type { NextPage } from "next";
import { useRouter } from "next/router";
import Product from "../../components/Product";
import fsPromises from "fs/promises";
import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";

const Home: NextPage = (props: any) => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
      <Product data={props.data} />
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
  const productId = params.id;
  const data = await getData();
  const item = data.find((item: any) => {
    return item.id.toString() === productId;
  });
  console.log(item);
  return {
    props: {
      data: item,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getData();
  const ids = data.map((product: any) => product.id.toString());
  const params = ids.map((id: any) => ({ params: { id: id } }));
  return {
    paths: params,
    fallback: false,
  };
};

export default Home;
