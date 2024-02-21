import { configureStore } from '@reduxjs/toolkit';
import productSlices from './slices/productSlices';
import viewsSlices from './slices/viewsSlices';

export const makeStore = configureStore({
  reducer: {
    product: productSlices,
    pages: viewsSlices
  }
});
