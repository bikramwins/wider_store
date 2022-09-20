import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import products from "../../mockdata/products.json";

type Product = {
  id: number;
  name: string;
  sku: string;
  price: number;
  imageUrl: string;
};

export interface ProductState {
  selectedProduct: Product;
  products: Product[];
}

const initialState: ProductState = {
  products,
  selectedProduct: {
    id: Date.now(),
    name: "",
    sku: "",
    price: 0,
    imageUrl: "",
  },
};

export const productSlice = createSlice({
  name: "productsState",
  initialState,
  reducers: {
    addNewProduct: (state, { payload }) =>
      ({
        ...state,
        products: [payload, ...state.products],
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
