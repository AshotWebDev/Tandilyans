import { RootState } from "@/app/store";

export const productsSelector = (state: RootState) => state.products.products;
export const productsStatusSelector = (state: RootState) => state.products.status;
export const productsErrorSelector = (state: RootState) => state.products.error;
export const productsPageSelector = (state: RootState) => state.products.page;
export const  isActiveCart = (state: RootState) => state.products.isActivCart