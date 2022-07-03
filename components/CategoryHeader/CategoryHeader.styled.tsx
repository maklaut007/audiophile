import styled from "styled-components";

export const CategoryHeader = styled.header`
  display: flex;
  padding-top: 80px;
  background-color: ${(props) => props.theme.colors.backgroundBlack};
  justify-content: center;
`;

export const Title = styled.h4`
  height: 80px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  font: ${(props) => props.theme.text.headerFour.font};
  font-weight: 500;
`;
