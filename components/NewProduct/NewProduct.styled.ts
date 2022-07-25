import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.textWhite};
  text-align: center;
  background-image: url("/assets/home/mobile/image-header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  justify-content: center;
  padding: 80px 20px 0;
  min-height: 600px;
  height: 150vw;
  @media only screen and (min-width: 768px) {
    background-image: url("/assets/home/tablet/image-header.jpg");
    min-height: 730px;
    height: 90vw;
    padding: 0 25vw;
  }
  @media only screen and (min-width: 1440px) {
    background-image: url("/assets/home/desktop/image-hero.jpg");
    height: 50vw;
    text-align: left;
    align-items: flex-start;
    padding: 0 62vw 0 11.5vw;
  }
`;

export const NewProduct = styled.h3`
  font: ${(props) => props.theme.text.overline.font};
  letter-spacing: ${(props) => props.theme.text.overline.letterSpacing};
  opacity: 50%;
  margin-bottom: 16px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const ProductName = styled.h1`
  font: ${(props) => props.theme.text.headerTwo.font};
  letter-spacing: ${(props) => props.theme.text.headerTwo.letterSpacing};
  margin-bottom: 16px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 24px;
    font: ${(props) => props.theme.text.headerOne.font};
    letter-spacing: ${(props) => props.theme.text.headerOne.letterSpacing};
  }
`;
export const Description = styled.p`
  opacity: 75%;
  font-size: 0.9rem;
  margin-bottom: 32px;
  @media only screen and (min-width: 768px) {
    margin: 0 14px 45px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0 28px 45px 0;
  }
`;
