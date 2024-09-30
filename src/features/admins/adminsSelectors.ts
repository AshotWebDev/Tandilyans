import { RootState } from "@/app/store";

export const adminsSelector = (state: RootState) => state.admins.admins;
export const adminStatusSelector = (state: RootState) => state.admins.status;
export const adminErrorSelector = (state: RootState) => state.admins.error;
export const adminPageSelector = (state: RootState) => state.admins.page;
export const isAuth = (state: RootState) => state.admins.isAuth