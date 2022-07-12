import React from "react";
import * as Styled from "./Product.styled";

function ProductExamples({ data }: any): JSX.Element {
  return (
    <Styled.Product>
      <Styled.GoBack>Go Back</Styled.GoBack>
      <Styled.ProductImageWrap>
        <Styled.ProductImage
          width="327"
          height="352"
          alt={data.name}
          src={data.image.mobile}
        />
      </Styled.ProductImageWrap>
      <Styled.NewProduct>New Product</Styled.NewProduct>
      <Styled.Title> {data.name.toUpperCase()}</Styled.Title>
      <Styled.Description>{data.description}</Styled.Description>
      <Styled.Price>$ {data.price}</Styled.Price>
      <Styled.AddToCart>ADD TO CART</Styled.AddToCart>
      <Styled.Title>Features</Styled.Title>
      <Styled.Description>{data.features}</Styled.Description>
      <Styled.InTheBox>In The Box</Styled.InTheBox>
      <Styled.ImageCollection>Image Collection</Styled.ImageCollection>
      <Styled.MayLike>May Like</Styled.MayLike>
    </Styled.Product>
  );
}

export default ProductExamples;
