import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductResponse } from "../types/types";

const initialState = [] as ProductResponse[];

interface UpdateQuantityPayload {
  productId: number;
  quantity: number;
}

const productSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductResponse>) => {
      const { id, quantity = 1, ...rest } = action.payload;
      const existingProduct = state.find(product => product.id === id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.push({ id, quantity, ...rest });
      }
    },
    deleteProduct: (state, action: PayloadAction<any>) => {
      const postId = action.payload;
      return state.filter((item) => item.id !== postId);
    },
    deleteAll: (state) => {
      state.splice(0, state.length);
    },
    updateQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const { productId, quantity } = action.payload;
      const productToUpdate = state.find(product => product.id === productId);
      if (productToUpdate) {
        productToUpdate.quantity += quantity;
      }
    }
  }
});

export const { addProduct, deleteProduct, deleteAll, updateQuantity } = productSlice.actions;
export default productSlice.reducer;