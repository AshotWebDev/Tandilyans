
import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { postOrder } from "../orderApi/orderApi";


interface orderState {
  message: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: orderState = {
  message: "",
  status: "idle",
  error: null
};





const orderSlice = createSlice({
  name: "order",
  initialState,

  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(postOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postOrder.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "succeeded";
        state.message = action.payload;
      })
      .addCase(postOrder.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.message = action.payload
        // state.error = action.error.message || "Something went wrong";
      })


  },

  
});

export const {} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;