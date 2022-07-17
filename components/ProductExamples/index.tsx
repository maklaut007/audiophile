import React from "react";
import * as Styled from "./ProductExamples.styled";
import SeeProductButton from "../SeeProductButton";
function ProductExamples(): JSX.Element {
  return (
    <Styled.Wrapper>
      <Styled.FirstProduct>
        <Styled.FirstProductImage
          width="165"
          height="210"
          src="/assets/home/mobile/image-speaker-zx9.png"
        />
        <Styled.FirstProductName>ZX9 SPEAKER</Styled.FirstProductName>
        <Styled.FirstProductText>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Styled.FirstProductText>
        <SeeProductButton address="/product/zx9-speaker" background="#000" />
        <Styled.Circle diameter="300px" />
        <Styled.Circle diameter="340px" />
        <Styled.Circle diameter="610px" />
      </Styled.FirstProduct>
      <Styled.SecondProduct>
        <Styled.SecondProductName>ZX7 SPEAKER</Styled.SecondProductName>
        <SeeProductButton
          address="/product/zx7-speaker"
          background="transparent"
          textColor="#000"
          border="1px solid #000"
        />
      </Styled.SecondProduct>
      <Styled.ThirdProduct>
        <Styled.ThirdProductImgWrap>
          <Styled.ThirdProductImg
            layout="fill"
            src="/assets/home/mobile/image-earphones-yx1.jpg"
          />
        </Styled.ThirdProductImgWrap>
        <Styled.ThirdProductDescription>
          <Styled.ThirdProductName>YX1 EARPHONES</Styled.ThirdProductName>
          <SeeProductButton
            address="/product/yx1-earphones"
            background="transparent"
            textColor="#000"
            border="1px solid #000"
          />
        </Styled.ThirdProductDescription>
      </Styled.ThirdProduct>
    </Styled.Wrapper>
  );
}

export default ProductExamples;
