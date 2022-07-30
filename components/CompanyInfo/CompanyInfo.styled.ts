import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 24px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    margin: 0 40px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 200px 11vw;
    flex-direction: row-reverse;
    justify-content: space-between;
    height: 39vw;
  }
`;
export const CompanyInfoImageWrap = styled.div`
  width: calc(100vw - 48px);
  height: 82vw;
  @media only screen and (min-width: 768px) {
    height: 39vw;
    width: calc(100vw - 80px);
  }
  @media only screen and (min-width: 1440px) {
    width: 37.5vw;
    height: 100%;
  }
`;
export const CompanyInfoImage = styled(Image)`
  border-radius: 8px;
`;
export const CompanyInfoDescr = styled.div`
  padding: 0 0vw;
  @media only screen and (min-width: 768px) {
    padding: 0 6vw;
  }
  @media only screen and (min-width: 1440px) {
    width: 40vw;
    text-align: start;
    padding: 0 8vw 0 0;
  }
`;
export const CompanyInfoTitle = styled.h1`
  font-size: 28px;
  font-weight: 400;
  margin: 40px 0;
  font: ${(props) => props.theme.text.headerFour.font};
  letter-spacing: ${(props) => props.theme.text.headerFour.letterSpacing};
  @media only screen and (min-width: 768px) {
    font: ${(props) => props.theme.text.headerTwo.font};
    letter-spacing: ${(props) => props.theme.text.headerTwo.letterSpacing};
  }
  @media only screen and (min-width: 1440px) {
  }
`;
export const CompanyInfoTitleHighlight = styled.span`
  color: ${(props) => props.theme.colors.orange};
`;
export const CompanyInfoText = styled.p`
  font: ${(props) => props.theme.text.body.font};
  opacity: 50%;
`;
