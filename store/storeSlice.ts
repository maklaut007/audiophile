/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

interface Product {
  name: string;
  amount: number;
  price: number;
  pic: string;
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
      //check if alredy exist and add amount if it is.
      state.products = [...state.products, action.payload];
    },
    removeAll: (state) => {
      state.products = [];
    },
    changeProductAmount: (state, action) => {
      // find by id/name and change ammount;
    },
  },
});

export const { setProducts, addProduct } = storeSlice.actions;

export default storeSlice.reducer;
