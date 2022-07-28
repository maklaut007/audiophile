import styled from "styled-components";

export const Wrapper = styled.a<{
  border?: string;
  background?: string;
  textColor?: string;
}>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ textColor }) => textColor};
  width: 160px;
  height: 48px;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  border: ${({ border }) => border};
  background-color: ${({ background }) => background};
  z-index: 1;
`;

export const FirstProductName = styled.div``;
