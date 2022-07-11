import styled from "styled-components";
import Image from "next/image";

export const Product = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 24px;
`;

export const ProductImage = styled(Image)`
  border-radius: 8px;
`;
