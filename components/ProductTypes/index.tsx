import React from 'react';
import * as Styled from './ProductTypes.styled';
import ProductSpeakersImage from '/assets/mobile/speakers-product.png';
import ProductEarphonesImage from '../../assets/mobile/earphones-product.png';
import ProductHeadphonesImage from '../../assets/mobile/headphones-product.png';

interface LabeledValue {
  label: string;
}

function ProductTypes(): JSX.Element {
  return (
    <Styled.Wrapper>
      <Styled.ProductType>
        <Styled.ProductImage width="145" height="125" src="/assets/shared/desktop/image-category-thumbnail-headphones.png" />
        <Styled.ProductName>
          headphones
        </Styled.ProductName>
        <Styled.ShopLink>
          SHOP
          {'>'}
        </Styled.ShopLink>
      </Styled.ProductType>
      <Styled.ProductType>
        <Styled.ProductImage width="134" height="125" src="/assets/shared/desktop/image-category-thumbnail-speakers.png" />
        <Styled.ProductName>
          speakers
        </Styled.ProductName>
        <Styled.ShopLink>
          SHOP
          {'>'}
        </Styled.ShopLink>
      </Styled.ProductType>
      <Styled.ProductType>
        <Styled.ProductImage width="145" height="125" src="/assets/shared/desktop/image-category-thumbnail-earphones.png" />
        <Styled.ProductName>
          earphones
        </Styled.ProductName>
        <Styled.ShopLink>
          SHOP
          {'>'}
        </Styled.ShopLink>
      </Styled.ProductType>
    </Styled.Wrapper>
  );
}

export default ProductTypes;
