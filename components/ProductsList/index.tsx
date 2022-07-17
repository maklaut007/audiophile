import React from "react";
import * as Styled from "./ProductsList.styled";
import SeeProductButton from "../SeeProductButton";
function ProductsList({ items }: any): JSX.Element {
  const renderProducts = items.map((item: any) => {
    console.log(item.name);
    return (
      <Styled.Product key={item.id}>
        <Styled.ProductImage
          width="327"
          height="352"
          alt={item.name}
          src={item.categoryImage.mobile}
        />
        <Styled.NewProductSign>NEW PRODUCT</Styled.NewProductSign>
        <Styled.ProductName> {item.name.toUpperCase()}</Styled.ProductName>
        <Styled.ProductDescription>
          {item.description}
        </Styled.ProductDescription>
        <SeeProductButton address={`/product/${item.slug}`} />
      </Styled.Product>
    );
  });
  //chage adress to item not category
  return <Styled.ProductsList>{renderProducts}</Styled.ProductsList>;
}

export default ProductsList;
