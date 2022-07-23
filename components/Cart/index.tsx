import React from "react";
import * as Styled from "./Cart.styled";
import { useSelector, useDispatch } from "react-redux";

interface Props {
  isOpen: boolean;
}
function Cart({ isOpen }: Props) {
  const data = useSelector((state: any) => state.data.products);

  const total = data.reduce((sum: number, item: any) => {
    return sum + item.price * item.amount;
  }, 0);
  console.log(data);
  const cartItems = data.map((item: any) => {
    return (
      <Styled.Item key={item.name + item.price.toString()}>
        <Styled.ItemInfo>
          <Styled.ItemPic
            width="64"
            height="64"
            src={item.pic}
            alt="Product Pic"
          />
          <Styled.ItemProperties>
            <Styled.ItemName>{item.name}</Styled.ItemName>
            <Styled.ItemPrice> $ {item.price}</Styled.ItemPrice>
          </Styled.ItemProperties>
        </Styled.ItemInfo>
        <Styled.ItemAmount>
          <Styled.CounterSign>-</Styled.CounterSign>
          <Styled.CounterNumber> {item.amount} </Styled.CounterNumber>
          <Styled.CounterSign>+</Styled.CounterSign>
        </Styled.ItemAmount>
      </Styled.Item>
    );
  });
  return (
    <Styled.Cart isOpen={isOpen}>
      <Styled.CartTop>
        <Styled.CartName> CART ({data.length})</Styled.CartName>
        <Styled.CartRemove> Remove all</Styled.CartRemove>
      </Styled.CartTop>
      <Styled.ItemsList>{cartItems}</Styled.ItemsList>
      <Styled.CartBottom>
        <Styled.TotalTitle>TOTAL</Styled.TotalTitle>
        <Styled.TotalNumber>$ {total}</Styled.TotalNumber>
      </Styled.CartBottom>
      <Styled.CheckOut>
        {" "}
        {/* add link to checkout page */}
        CHECKOUT
      </Styled.CheckOut>
    </Styled.Cart>
  );
}

export default Cart;
