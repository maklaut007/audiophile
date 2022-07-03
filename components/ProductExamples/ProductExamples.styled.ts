import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 5%;
`;
export const FirstProduct = styled.div`
  background-color: ${(props) => props.theme.colors.orange};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 32px;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
`;
export const FirstProductImage = styled(Image)``;
export const FirstProductName = styled.h1`
  margin: 40px 0 20px;
  color: white;
  font-size: 36px;
  font-weight: 400;
  width: 200px;
  text-align: center;
  letter-spacing: 0.1rem;
`;
export const FirstProductText = styled.p`
  color: white;
  font-size: 15px;
  text-align: center;
  opacity: 75%;
  margin-bottom: 30px;
`;
export const Circle = styled.div<{ diameter: string }>`
  position: absolute;
  width: ${({ diameter }) => diameter};
  height: ${({ diameter }) => diameter};
  border-radius: 50%;
  border: 1px solid #d8d8d8;
  background-color: rgba(0, 0, 0, 0);
  top: calc(145px - ${({ diameter }) => diameter} / 2);
  opacity: 30%;
`;
export const SecondProduct = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 24px 0;
  border-radius: 6px;
  padding: 90px 25px;
  background-image: url("/assets/home/mobile/image-speaker-zx7.jpg");
`;
export const SecondProductName = styled.h1`
  margin-bottom: 34px;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 0.1rem;
`;
export const ThirdProduct = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ThirdProductImgWrap = styled.div`
  position: relative;
  width: 90vw;
  height: 63vw;
  border-radius: 6px;
  overflow: hidden;
`;
export const ThirdProductImg = styled(Image)``;
export const ThirdProductDescription = styled.div`
  margin: 20px 0;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 0.1rem;
  background-color: #f1f1f1;
  border-radius: 6px;
  padding: 40px 20px;
`;
export const ThirdProductName = styled.h1`
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 0.1rem;
  margin-bottom: 40px;
`;
