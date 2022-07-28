import React from "react";
import * as Styled from "./ProductExamples.styled";
import SeeProductButton from "../SeeProductButton";
import Image from "next/image";
import useImageProps from "../../hooks/useImageProps";
function ProductExamples(): JSX.Element {
  const secondImageProps = useImageProps({
    mobile: {
      src: "/assets/home/mobile/image-speaker-zx7.jpg",
      width: "327",
      height: "320",
    },
    tablet: {
      src: "/assets/home/tablet/image-speaker-zx7.jpg",
      width: "689",
      height: "320",
    },
    desktop: {
      src: "/assets/home/desktop/image-speaker-zx7.jpg",
      width: "1110",
      height: "320",
    },
  });
  const thirdImageProps = useImageProps({
    mobile: {
      src: "/assets/home/mobile/image-earphones-yx1.jpg",
      width: "327",
      height: "200",
    },
    tablet: {
      src: "/assets/home/tablet/image-earphones-yx1.jpg",
      width: "339",
      height: "320",
    },
    desktop: {
      src: "/assets/home/desktop/image-earphones-yx1.jpg",
      width: "540",
      height: "320",
    },
  });
  return (
    <Styled.Wrapper>
      <Styled.FirstProduct>
        <Styled.FirstProductImage>
          <Image
            width="165"
            height="210"
            src="/assets/home/desktop/image-speaker-zx9.png"
            alt="ZX9 Pic"
            layout="responsive"
          />
        </Styled.FirstProductImage>
        <Styled.FirstProductDescription>
          <Styled.FirstProductName>
            ZX9 <br /> SPEAKER
          </Styled.FirstProductName>
          <Styled.FirstProductText>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Styled.FirstProductText>
          <SeeProductButton address="/product/zx9-speaker" background="#000" />
        </Styled.FirstProductDescription>
        <Styled.Circle diameter={288} />
        <Styled.Circle diameter={326} />
        <Styled.Circle diameter={610} />
      </Styled.FirstProduct>
      <Styled.SecondProduct>
        <Styled.SecondProductImage>
          <Image
            width={secondImageProps.width}
            height={secondImageProps.height}
            src={secondImageProps.src}
            alt="ZX7 Pic"
            layout="responsive"
          />
        </Styled.SecondProductImage>
        <Styled.SecondProductDescription>
          <Styled.SecondProductName>ZX7 SPEAKER</Styled.SecondProductName>
          <SeeProductButton
            address="/product/zx7-speaker"
            background="transparent"
            textColor="#000"
            border="1px solid #000"
          />
        </Styled.SecondProductDescription>
      </Styled.SecondProduct>
      <Styled.ThirdProduct>
        <Styled.ThirdProductImgWrap>
          <Styled.ThirdProductImg
            width={thirdImageProps.width}
            height={thirdImageProps.height}
            src={thirdImageProps.src}
            alt="YX1 Pic"
            layout="responsive"
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
