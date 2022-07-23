import styled from "styled-components";
import Image from "next/image";

export const AddToCart = styled.section`
  display: flex;
  width: 100%;

  align-items: center;
`;
export const Counter = styled.div`
  width: 120px;
  height: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray};
  cursor: pointer;
  margin-right: 16px;
`;
export const CounterSign = styled.div``;
export const CounterNumber = styled.div``;

export const AddButton = styled.button`
  height: 48px;
  width: 160px;
  border: none;
  background-color: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
`;
