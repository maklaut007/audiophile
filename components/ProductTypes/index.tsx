import React from "react";
import * as Styled from "./ProductTypes.styled";
import Link from "next/link";
import Image from "next/image";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useEffect } from "react";

function ProductTypes(): JSX.Element {
  return (
    <Styled.Wrapper>
      <Link href="/category/headphones">
        <Styled.ProductType>
          <Styled.ImageWrap>
            <Image
              width="145"
              height="125"
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt="headphones pic"
              layout="responsive"
            />
          </Styled.ImageWrap>
          <Styled.ProductName>headphones</Styled.ProductName>
          <Styled.ShopLink>
            <Styled.ShopLinkText>SHOP</Styled.ShopLinkText>
            <Styled.Arrow>{">"}</Styled.Arrow>
          </Styled.ShopLink>
        </Styled.ProductType>
      </Link>
      <Link href="/category/speakers">
        <Styled.ProductType>
          <Styled.ImageWrap>
            <Image
              width="145"
              height="125"
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt="speakers pic"
              layout="responsive"
            />
          </Styled.ImageWrap>
          <Styled.ProductName>speakers</Styled.ProductName>
          <Styled.ShopLink>
            <Styled.ShopLinkText>SHOP</Styled.ShopLinkText>
            <Styled.Arrow>{">"}</Styled.Arrow>
          </Styled.ShopLink>
        </Styled.ProductType>
      </Link>
      <Link href="/category/earphones">
        <Styled.ProductType>
          <Styled.ImageWrap>
            <Image
              width="145"
              height="125"
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt="earphones pic"
              layout="responsive"
            />
          </Styled.ImageWrap>
          <Styled.ProductName>earphones</Styled.ProductName>
          <Styled.ShopLink>
            <Styled.ShopLinkText>SHOP</Styled.ShopLinkText>
            <Styled.Arrow>{">"}</Styled.Arrow>
          </Styled.ShopLink>
        </Styled.ProductType>
      </Link>
    </Styled.Wrapper>
  );
}

export default ProductTypes;
