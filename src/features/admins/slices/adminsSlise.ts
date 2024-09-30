
import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAdmin } from "../adminsApi/adminsApi";


interface AdminsState {
  admins:[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  page: number;
  isAuth: boolean
}

const initialState: AdminsState = {
  admins: [],
  status: "idle",
  error: null,
  page: 1,
  isAuth: false
};





const adminsSlice = createSlice({
  name: "admins",
  initialState,

  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAdmin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAdmin.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "succeeded";
        state.admins = action.payload;
        
      })
      .addCase(getAdmin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      })
  },

  
});

export const {setIsAuth} = adminsSlice.actions;

export const adminsReducer = adminsSlice.reducer;