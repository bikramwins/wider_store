import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

type Order = {
  id: "";
  name: string;
  sku: string;
  price: number;
};

export interface OrderState {
  selectedOrder: Order;
  orders: Order[];
}

const initialState: OrderState = {
  orders: [],
  selectedOrder: {
    id: "",
    name: "",
    sku: "",
    price: 0,
  },
};

export const orderSlice = createSlice({
  name: "ordersState",
  initialState,
  reducers: {
    addNewOrder: (state, { payload }) =>
      ({
        ...state,
        selectedOrder: [...state.orders, payload],
      } as any),

    createOrder: (state, { payload }) => ({
      ...state,
      orders: state.orders.filter((Order) => Order.id !== payload.id),
    }),
  },
});

export const { addNewOrder, createOrder } = orderSlice.actions;

export const getOrdersState = (state: RootState) => state;

export default orderSlice.reducer;
