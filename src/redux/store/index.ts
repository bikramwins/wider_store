import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productReducer from "../../components/products/productSlice";
import orderReducer from "../../components/orders/orderSlice";

export const store = configureStore({
  reducer: {
    productState: productReducer,
    orderState: orderReducer,
  },
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
