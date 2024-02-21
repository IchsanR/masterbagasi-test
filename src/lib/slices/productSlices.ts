import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductResponse, ProductWarehouse } from "../types/types";

const initialState = {
  products: [] as ProductResponse[],
  warehouse: [] as ProductWarehouse[]
};

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
      const existingProduct = state.products.find(product => product.id === id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
        existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
      } else {
        state.products.push({ id, quantity, ...rest });
      }
    },
    deleteProduct: (state, action: PayloadAction<any>) => {
      const postId = action.payload;
      state.products = state.products.filter((item) => item.id !== postId);
    },
    deleteAll: (state) => {
      state.products.splice(0, state.products.length);
    },
    updateQuantity: (state, action: PayloadAction<UpdateQuantityPayload>) => {
      const { productId, quantity } = action.payload;
      const productToUpdate = state.products.find(product => product.id === productId);
      if (productToUpdate) {
        productToUpdate.quantity += quantity;
        productToUpdate.totalPrice = productToUpdate.quantity * productToUpdate.price;
      }
    },
    addWarehouse: (state, action: PayloadAction<ProductWarehouse>) => {
      const { id, quantity, ...rest } = action.payload;
      state.warehouse.push({ id, quantity, ...rest });
    },
    deleteWarehouseItem: (state, action: PayloadAction<any>) => {
      const postId = action.payload;
      state.warehouse = state.warehouse.filter((item) => item.id !== postId);
    }
  }
});

export const { addProduct, deleteProduct, deleteAll, updateQuantity, addWarehouse, deleteWarehouseItem } = productSlice.actions;
export default productSlice.reducer;