import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 40px 19px;
  @media only screen and (min-width: 768px) {
    flex-flow: row nowrap;
    padding: 96px 40px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 168px 165px;
  }
`;
export const ProductType = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 5px 20px;
  cursor: pointer;
  max-width: 350px;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 165px;
    top: 48px;
    background-color: #f1f1f1;
    z-index: -1;
    border-radius: 8px;
  }
  @media only screen and (min-width: 768px) {
    margin: 0 5px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0 30px;
    &::after {
      height: 204px;
    }
  }
`;
export const ImageWrap = styled.div`
  width: 145px;
  height: 125px;
  @media only screen and (min-width: 1440px) {
    width: 181px;
    height: 155px;
  }
`;
export const ProductImage = styled(Image)``;
export const ProductName = styled.h5`
  font: ${(props) => props.theme.text.headerFive.font};
  margin: 0;
  font-weight: 500;
`;

export const ShopLinkText = styled.span`
  vertical-align: bottom;
  font: ${(props) => props.theme.text.body.font};
  opacity: 50%;
`;

export const ShopLink = styled.p`
  margin: 17px 0 24px;
  letter-spacing: 0.1rem;
  text-align: center;
  opacity: 100%;
  &:hover ${ShopLinkText} {
    color: ${(props) => props.theme.colors.orange};
    opacity: 100%;
  }
`;

export const Arrow = styled.span`
  color: ${(props) => props.theme.colors.orange};
  font-weight: 700;
  font-size: 1.6rem;
  vertical-align: bottom;
`;
