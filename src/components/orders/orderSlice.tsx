import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import orders from "../../mockdata/orders.json";

const initialState: any = {
  orders: orders as any,
  selectedOrder: {
    id: Date.now(),
    name: "",
    sku: "",
    amount: 0,
    products: [],
  },
};

export const orderSlice = createSlice({
  name: "ordersState",
  initialState,
  reducers: {
    createOrder: (state, { payload }) =>
      ({
        ...state,
        orders: [{ id: Date.now(), ...payload }, ...state.orders],
      } as any),

    deleteOrder: (state, { payload }) => ({
      ...state,
      orders: state.orders.filter((order: any) => order.id !== payload),
    }),
  },
});

export const { deleteOrder, createOrder } = orderSlice.actions;

export const getOrdersState = (state: RootState) => state;

export default orderSlice.reducer;
