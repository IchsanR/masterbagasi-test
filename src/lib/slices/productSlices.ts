import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductResponse } from "../types/types";

const initialState: ProductResponse[] = [];

const productSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductResponse>) => {
      const { id, title, price, description, category, image, rating } = action.payload;
      state.push({ id, title, price, description, category, image, rating });
    },
    deleteProduct: (state, action: PayloadAction<any>) => {
      const postId = action.payload;
      return state.filter((item) => item.id === postId);
    }
  }
});

export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;