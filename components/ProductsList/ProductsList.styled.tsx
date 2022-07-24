import styled from "styled-components";
import Image from "next/image";

export const ProductsList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;
`;

export const Product = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 24px;
`;

export const NewProductSign = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  font: ${(props) => props.theme.text.overline.font};
  letter-spacing: ${(props) => props.theme.text.overline.letterSpacing};
  color: ${(props) => props.theme.colors.orange};
`;
export const ProductName = styled.h3`
  font: ${(props) => props.theme.text.headerThree.font};
  letter-spacing: ${(props) => props.theme.text.headerThree.letterSpacing};
  text-align: center;
  margin-bottom: 20px;
`;
export const ProductImageWrap = styled.div`
  margin-bottom: 32px;
`;
export const ProductImage = styled(Image)`
  border-radius: 8px;
`;

export const ProductDescription = styled.p`
  font: ${(props) => props.theme.text.body.font};
  text-align: center;
  opacity: 50%;
  margin: 16px 0 32px 0;
`;
