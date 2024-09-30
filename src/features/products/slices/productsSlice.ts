
import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProducts, postProducts } from "../productsApi.ts/productsApi";


interface ProductsState {
  products:[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  page: number;
  isActivCart: boolean
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
  page: 1,
  isActivCart: false
};





const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    setIsActivCart: (state, ) => {
      state.isActivCart = !state.isActivCart
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      })

    //   ================================================================


    .addCase(postProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postProducts.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(postProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },

  
});

export const {setIsActivCart} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;