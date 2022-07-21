import React from "react";
import * as Styled from "./Product.styled";
function AddToCart({ price }: any): JSX.Element {
  return (
    <Styled.AddToCart>
      <Styled.Counter>
        <Styled.CounterMinus>-</Styled.CounterMinus>
        <Styled.CounterNumber> 0 </Styled.CounterNumber>
        <Styled.CounterPlus>+</Styled.CounterPlus>
      </Styled.Counter>
    </Styled.AddToCart>
  );
}

export default AddToCart;
