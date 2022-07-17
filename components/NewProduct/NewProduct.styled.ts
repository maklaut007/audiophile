import styled from "styled-components";

export const Wrapper = styled.header<{ adress: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.textWhite};
  text-align: center;
  background-image: url(${(props) => props.adress});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  justify-content: center;
  padding: 10px 20px 0;
  height: 600px;
`;

export const NewProduct = styled.h3`
  font: ${(props) => props.theme.text.overline.font};
  letter-spacing: ${(props) => props.theme.text.overline.letterSpacing};
  opacity: 50%;
`;

export const ProductName = styled.h1`
  font: ${(props) => props.theme.text.headerThree.fonst};
  letter-spacing: ${(props) => props.theme.text.headerThree.letterSpacing};
`;
export const Description = styled.p`
  opacity: 75%;
  font-size: 0.9rem;
  margin-bottom: 40px;
`;
