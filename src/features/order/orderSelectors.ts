import { RootState } from "@/app/store";

export const orderMessageSelector = (state: RootState) => state.order.message;