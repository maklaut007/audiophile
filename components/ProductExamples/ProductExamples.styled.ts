import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 24px 40px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    margin: 0 40px 40px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0 11vw 40px;
  }
`;
export const FirstProduct = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.orange};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 55px 20px;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  @media only screen and (min-width: 768px) {
    padding: 55px 22vw;
  }
  @media only screen and (min-width: 1440px) {
    flex-wrap: nowrap;
    padding: 8vw 0 0 0;
    align-items: center;
    justify-content: flex-start;
  }
`;
export const FirstProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 1440px) {
    align-items: flex-start;
    margin-left: 140px;
    width: 30vw;
    margin-bottom: 180px;
  }
`;
export const FirstProductImage = styled.div`
  width: 165px;
  height: 210px;
  z-index: 1;
  @media only screen and (min-width: 768px) {
    width: 170px;
    height: 230px;
  }
  @media only screen and (min-width: 1440px) {
    width: 410px;
    height: 500px;
    margin-left: calc(25vw - 210px);
  }
`;
export const FirstProductName = styled.h1`
  margin: 40px 90px 20px;
  color: white;
  font: ${(props) => props.theme.text.headerThree.font};
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.1rem;
  line-height: 1.2em;
  @media only screen and (min-width: 768px) {
    font: small-caps 500 56px/58px Manrope, sans-serif;
    margin: 70px 30vw 10px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0;
    margin-bottom: 8px;
    text-align: center;
    text-align: start;
  }
`;
export const FirstProductText = styled.p`
  color: white;
  font-size: 15px;
  text-align: center;
  opacity: 75%;
  margin-bottom: 30px;
  z-index: 1;
  @media only screen and (min-width: 768px) {
    margin-bottom: 50px;
    font: ${(props) => props.theme.text.body.font};
  }
  @media only screen and (min-width: 1440px) {
    text-align: start;
    margin-bottom: 45px;
  }
`;
export const Circle = styled.div<{ diameter: number }>`
  position: absolute;
  width: ${({ diameter }) => diameter.toString() + "px"};
  height: ${({ diameter }) => diameter.toString() + "px"};
  border-radius: 50%;
  border: 1px solid #d8d8d8;
  background-color: rgba(0, 0, 0, 0);
  top: calc(165px - ${({ diameter }) => diameter.toString() + "px"} / 2);
  opacity: 30%;
  @media only screen and (min-width: 768px) {
    width: ${({ diameter }) => (diameter * 1.4).toString() + "px"};
    height: ${({ diameter }) => (diameter * 1.4).toString() + "px"};
    top: calc(
      180px - ${({ diameter }) => (diameter * 1.4).toString() + "px"} / 2
    );
  }
  @media only screen and (min-width: 1440px) {
    width: ${({ diameter }) => (diameter * 1.9).toString() + "px"};
    height: ${({ diameter }) => (diameter * 1.9).toString() + "px"};
    top: calc(
      80% - ${({ diameter }) => (diameter * 1.9).toString() + "px"} / 2
    );
    left: calc(
      25vw - ${({ diameter }) => (diameter * 1.9).toString() + "px"} / 2
    );
  }
`;
export const SecondProduct = styled.div`
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 24px 0;
  position: relative;
  width: calc(100vw - 48px);
  height: calc(100vw - 66px);
  font: ${(props) => props.theme.text.headerFour.font};
  @media only screen and (min-width: 768px) {
    font: ${(props) => props.theme.text.headerFour.font};
    width: calc(100vw - 80px);
    height: calc(48vw - 55px);
    margin-top: 32px 0;
  }
  @media only screen and (min-width: 1440px) {
    width: 100%;
    height: calc(22.2vw);
    margin-top: 48px;
  }
`;
export const SecondProductName = styled.h1`
  margin-bottom: 34px;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 0.1rem;
  z-index: 1;
  text-align: start;
`;
export const SecondProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-left: 5vw;
  @media only screen and (min-width: 768px) {
    padding-left: 8vw;
  }
`;
export const SecondProductImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 8px;
  overflow: hidden;
`;
export const ThirdProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;
  width: 100%;
  height: calc(130vw - 32px);
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    height: 41vw;
    margin-top: 32px;
  }
  @media only screen and (min-width: 1440px) {
    height: 22vw;
    margin-top: 48px;
  }
`;
export const ThirdProductImgWrap = styled.div`
  border-radius: 6px;
  overflow: hidden;
  height: 47%;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 49%;
    height: 100%;
  }
`;
export const ThirdProductImg = styled(Image)``;
export const ThirdProductDescription = styled.div`
  height: 47%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5%;
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 6px;
  @media only screen and (min-width: 768px) {
    width: 49%;
    height: 100%;
  }
  @media only screen and (min-width: 1440px) {
    padding-left: 7%;
  }
`;
export const ThirdProductName = styled.h1`
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 0.1rem;
  margin-bottom: 40px;
`;
