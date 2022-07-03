import React from "react";
import * as Styled from "./ProductsList.styled";

function ProductsList({ items }: any): JSX.Element {
  let prd = {};
  const renderProducts = items.map((item: any) => {
    return <Styled.Product key={item.id}>{item.name}</Styled.Product>;
  });
  return <Styled.ProductsList>{renderProducts}</Styled.ProductsList>;
}

export default ProductsList;
