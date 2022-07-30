import React from "react";
import * as Styled from "./CompanyInfo.styled";
import Image from "next/image";
import useImageProps from "../../hooks/useImageProps";

function CompanyInfo(): JSX.Element {
  const imageProps = useImageProps({
    mobile: {
      src: "/assets/shared/mobile/image-best-gear.jpg",
      width: "327",
      height: "300",
    },
    tablet: {
      src: "/assets/shared/tablet/image-best-gear.jpg",
      width: "689",
      height: "300",
    },
    desktop: {
      src: "/assets/shared/desktop/image-best-gear.jpg",
      width: "540",
      height: "588",
    },
  });
  return (
    <Styled.Wrapper>
      <Styled.CompanyInfoImageWrap>
        <Styled.CompanyInfoImage
          alt="image-best-gear"
          layout="responsive"
          src={imageProps.src}
          width={imageProps.width}
          height={imageProps.height}
        />
      </Styled.CompanyInfoImageWrap>
      <Styled.CompanyInfoDescr>
        <Styled.CompanyInfoTitle>
          BRINGING YOU THE
          <Styled.CompanyInfoTitleHighlight>
            {" "}
            BEST{" "}
          </Styled.CompanyInfoTitleHighlight>
          AUDIO GEAR
        </Styled.CompanyInfoTitle>
        <Styled.CompanyInfoText>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Styled.CompanyInfoText>
      </Styled.CompanyInfoDescr>
    </Styled.Wrapper>
  );
}

export default CompanyInfo;
