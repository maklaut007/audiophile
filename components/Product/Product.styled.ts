import styled from "styled-components";
import Image from "next/image";

export const Product = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 24px 0;
`;

export const GoBack = styled.button``;
export const ProductImageWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const ProductImage = styled(Image)`
  border-radius: 8px;
`;
export const NewProduct = styled.h6``; //import from theme

export const Title = styled.h2`
  font-weight: 400;
  margin: 14px 0;
`; //maybe romove font-weight
export const Description = styled.p`
  opacity: 50%;
  margin: 14px 0;
`;
export const Price = styled.h6`
  margin: 14px 0;
`;
export const AddToCart = styled.button`
  margin: 14px 0;
`;

export const InTheBox = styled.div``;
export const ImageCollection = styled.div``;
export const MayLike = styled.div``;
