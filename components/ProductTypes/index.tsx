import React from "react";
import * as Styled from "./ProductTypes.styled";
import Link from "next/link";

function ProductTypes(): JSX.Element {
  return (
    <Styled.Wrapper>
      <Link href="/category/headphones">
        <Styled.ProductType>
          <Styled.ProductImage
            width="145"
            height="125"
            src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          />
          <Styled.ProductName>headphones</Styled.ProductName>
          <Styled.ShopLink>
            SHOP
            {">"}
          </Styled.ShopLink>
        </Styled.ProductType>
      </Link>
      <Link href="/category/speakers">
        <Styled.ProductType>
          <Styled.ProductImage
            width="134"
            height="125"
            src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          />
          <Styled.ProductName>speakers</Styled.ProductName>
          <Styled.ShopLink>
            SHOP
            {">"}
          </Styled.ShopLink>
        </Styled.ProductType>
      </Link>
      <Link href="/category/earphones">
        <Styled.ProductType>
          <Styled.ProductImage
            width="145"
            height="125"
            src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          />
          <Styled.ProductName>earphones</Styled.ProductName>
          <Styled.ShopLink>
            SHOP
            {">"}
          </Styled.ShopLink>
        </Styled.ProductType>
      </Link>
    </Styled.Wrapper>
  );
}

export default ProductTypes;
