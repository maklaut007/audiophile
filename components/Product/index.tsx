import React from "react";
import * as Styled from "./Product.styled";

function ProductExamples({ item }: any): JSX.Element {
  console.log(item);
  return (
    <Styled.Product>
      Hello
      {/* <Styled.GoBack>Go Back</Styled.GoBack>
      <Styled.ProductImage
        width="327"
        height="352"
        alt={item.name}
        src={item.categoryImage.mobile}
      />
      <Styled.NewProduct>New Product</Styled.NewProduct>
      <Styled.ProductName> {item.name.toUpperCase()}</Styled.ProductName>
      <Styled.ProductDescription>{item.description}</Styled.ProductDescription>
      <Styled.Price>{item.price}</Styled.ProductDescription>
      <Styled.AddToCart>{item.price}</Styled.AddToCart>
      <Styled.FeaturesTitle>Features</Styled.FeaturesTitle>
      <Styled.FeaturesText>{item.features}</Styled.FeaturesTitle>
      <Styled.InTheBox>{item.inTheBox}</Styled.InTheBox>
      <Styled.ImageCollection>{item.inTheBox}</Styled.ImageCollection>
      <Styled.MayLike>{item.mayLike}</Styled.MayLike> */}
    </Styled.Product>
  );
}

export default ProductExamples;
