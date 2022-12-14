import React from "react";
import * as Styled from "./NewProduct.styled";
import SeeProductButton from "../SeeProductButton";

function NewProduct(): JSX.Element {
  return (
    <Styled.Wrapper>
      <Styled.NewProduct>NEW PRODUCT</Styled.NewProduct>
      <Styled.ProductName>XX99 MARK II HEADPHONES</Styled.ProductName>
      <Styled.Description>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </Styled.Description>
      <SeeProductButton address="/product/xx99-mark-two-headphones" />
    </Styled.Wrapper>
  );
}

export default NewProduct;
