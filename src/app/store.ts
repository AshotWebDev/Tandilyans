import { adminsReducer } from "@/features/admins/slices/adminsSlise";
import { orderReducer } from "@/features/order/slices/orderSlice";
import { productsReducer } from "@/features/products/slices/productsSlice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    admins: adminsReducer,
    order: orderReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
