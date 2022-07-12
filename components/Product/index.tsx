import React from "react";
import * as Styled from "./Product.styled";

function ProductExamples({ data }: any): JSX.Element {
  console.log(data);

  const itemsInBox = data.includes.map((component: any) => {
    return (
      <Styled.InTheBoxItem key={component.item}>
        <Styled.Quantity>
          {component.quantity}x &nbsp; &nbsp; &nbsp;
        </Styled.Quantity>
        <Styled.InTheBoxText>{component.item}</Styled.InTheBoxText>
      </Styled.InTheBoxItem>
    );
  });

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
      <Styled.Title>FEATURES</Styled.Title>
      <Styled.Description>{data.features}</Styled.Description>
      <Styled.InTheBox>
        <Styled.Title>IN THE BOX</Styled.Title>
        <Styled.InTheBoxList>{itemsInBox}</Styled.InTheBoxList>
      </Styled.InTheBox>
      <Styled.ImageCollection>Image Collection</Styled.ImageCollection>
      <Styled.MayLike>May Like</Styled.MayLike>
    </Styled.Product>
  );
}

export default ProductExamples;
