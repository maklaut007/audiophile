import React, { useState, useEffect } from "react";
import * as Styled from "./AddToCart.styled";
import { addProduct } from "../../../store/storeSlice";
import { useDispatch, useSelector } from "react-redux";

function AddToCart({ price, name, pic }: any): JSX.Element {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const addOne = () => {
    setCount(count + 1);
  };
  const reduceOne = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const submitToCart = () => {
    dispatch(
      addProduct({
        name: name,
        amount: count,
        price: price,
        pic: pic,
      })
    );
  };
  return (
    <Styled.AddToCart>
      <Styled.Counter>
        <Styled.CounterSign onClick={reduceOne}>-</Styled.CounterSign>
        <Styled.CounterNumber> {count} </Styled.CounterNumber>
        <Styled.CounterSign onClick={addOne}>+</Styled.CounterSign>
      </Styled.Counter>
      <Styled.AddButton onClick={submitToCart}> ADD TO CART</Styled.AddButton>
    </Styled.AddToCart>
  );
}

export default AddToCart;
