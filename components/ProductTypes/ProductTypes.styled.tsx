import styled from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.section`
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;
export const ProductType = styled.article`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  &::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 80%;
    top: 15%;
    background-color: #F1F1F1;
    z-index: -1;
    border-radius: 8px;
  }
`;
export const ProductImage = styled(Image)`
`;
export const ProductName = styled.h5`
  font: ${(props) => props.theme.text.headerSix.font};
  
  margin: 0;
  font-weight: 500;
`;
export const ShopLink = styled.p`
  margin: 20px 0 24px;
  color: #787878;
  letter-spacing: 0.1rem;
`;
