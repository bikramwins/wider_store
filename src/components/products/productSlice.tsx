import { createSlice } from "@reduxjs/toolkit";
import { type } from "os";
import { RootState } from "../../redux/store";

type Product = {
  id: "";
  name: string;
  sku: string;
  price: number;
};

export interface ProductState {
  selectedProduct: Product;
  products: Product[];
}

const initialState: ProductState = {
  products: [],
  selectedProduct: {
    id: "",
    name: "",
    sku: "",
    price: 0,
  },
};

export const productSlice = createSlice({
  name: "productsState",
  initialState,
  reducers: {
    addNewProduct: (state, { payload }) =>
      ({
        ...state,
        selectedProduct: [...state.products, payload],
      } as any),

    deleteProduct: (state, { payload }) => ({
      ...state,
      products: state.products.filter((product) => product.id !== payload.id),
    }),
  },
});

export const { addNewProduct, deleteProduct } = productSlice.actions;

export const getProductsState = (state: RootState) => state;

export default productSlice.reducer;
