import styled from "styled-components";
import Image from "next/image";

interface openStatus {
  isOpen: boolean;
}

export const Cart = styled.section<openStatus>`
  position: absolute;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  top: 114px;
  left: 6vw;
  width: 88vw;
  background-color: ${(props) => props.theme.colors.white};
  padding: 32px 28px;
  border-radius: 8px;
`;
export const CartTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartName = styled.h6``;
export const CartRemove = styled.button`
  border: none;
  background-color: transparent;
  text-decoration: underline;
  opacity: 50%;
`;

export const ItemsList = styled.section`
  margin: 32px 0;
`;

export const Item = styled.div`
  margin: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ItemInfo = styled.div`
  display: flex;
`;
export const ItemPic = styled(Image)``;

export const ItemProperties = styled.div`
  display: flex;
  margin-left: 16px;
  justify-content: center;
  flex-direction: column;
`;
export const ItemName = styled.h6`
  max-width: 80px;
`;
export const ItemPrice = styled.p``;
export const ItemAmount = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 32px;
  width: 96px;
  background-color: ${(props) => props.theme.colors.gray};
`;
export const CounterSign = styled.div`
  opacity: 25%;
  font-size: 0.8rem;
`;
export const CounterNumber = styled.div``;

export const CartBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalTitle = styled.h6`
  opacity: 50%;
`;
export const TotalNumber = styled.h6``;
export const CheckOut = styled.button`
  margin-top: 28px;
  width: 100%;
  padding: 15px 0;
  background-color: ${(props) => props.theme.colors.orange};
  color: ${(props) => props.theme.colors.white};
`;
