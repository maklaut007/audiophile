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
export const ImageColSmall = styled.div`
  margin-bottom: 20px;
`;
export const ImageColLarge = styled.div``;

export const NewProduct = styled.h6``; //import from theme

export const Title = styled.h3`
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
export const InTheBox = styled.section`
  margin-top: 100px;
`;
export const InTheBoxList = styled.ul`
  margin: 30px 0 120px;
`;
export const InTheBoxItem = styled.li`
  margin-bottom: 13px;
  list-style-type: none;
`;
export const InTheBoxText = styled.span`
  opacity: 50%;
`;
export const Quantity = styled.span`
  color: ${(props) => props.theme.colors.orange};
`;

export const ImageCollection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MayLike = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 120px 0;
`;
export const MayLikeItem = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 56px;
`;
export const MayLikeImage = styled.div``;
export const MayLikeTitle = styled.h5`
  font-weight: 500;
  margin: 30px;
`;
export const MayLikeLink = styled.div``;
