import React from 'react';
import * as Styled from './NewProduct.styled';
import SeeProductButton from '../SeeProductButton';
import Image from 'next/image'

function NewProduct(): JSX.Element {
  return (
    <Styled.Wrapper adress='/assets/home/mobile/image-header.jpg'>
      <Styled.NewProduct>NEW PRODUCT</Styled.NewProduct>
      <Styled.ProductName>XX99 MARK II HEADPHONES</Styled.ProductName>
      <Styled.Description>
        Experience natural, lifelike audio and exceptional
        build quality made for the passionate music enthusiast.
      </Styled.Description>
      <SeeProductButton address="#" />
    </Styled.Wrapper>
  );
}

export default NewProduct;
