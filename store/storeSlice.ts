/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

interface Product {
  name: string;
  amount: number;
  price: number;
}
interface Cart {
  products: Product[];
}

const initialState: Cart = {
  products: [],
};
export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action: any) => {
      state.products.push({
        name: action.name,
        amount: action.amount,
        price: action.price,
      });
    },
  },
});

export const { setProducts, addProduct } = storeSlice.actions;

export default storeSlice.reducer;
