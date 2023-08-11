import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id?: String;
  name: String;
  imageUrl: string;
  description?: String;
  manufactured?: String;
  price: Number;
  sold?: Number;
  stock?: Number;
  qty?: Number;
};

type AuthState = {
  products: Product[];
};

const initialState: AuthState = {
  products: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: () => initialState,
    addToCart: (state, action: PayloadAction<Product>) => {
      const cartItems = action.payload;
      const duplicate = state.products.find((item) => item.id === cartItems.id);
      if (duplicate) {
        state.products = state.products.map((item) => {
          return item.id === cartItems.id
            ? {
                ...duplicate,
                qty: cartItems.qty
                  ? duplicate.qty + cartItems.qty
                  : duplicate.qty + 1,
              }
            : item;
        });
      } else {
        if (cartItems.qty) {
          state.products = [
            ...state.products,
            { ...cartItems, qty: cartItems.qty },
          ];
        } else {
          state.products = [...state.products, { ...cartItems, qty: 1 }];
        }
      }
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const duplicateProd = state.products.find(
        (item) => item.id === productId
      );

      const newQty = duplicateProd.qty + 1;
      state.products = state.products.map((item) =>
        item.id === productId ? { ...item, qty: newQty } : item
      );
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const duplicateProd = state.products.find(
        (item) => item.id === productId
      );

      if (duplicateProd) {
        const newQty = duplicateProd.qty - 1;

        // Đảm bảo newQty không dưới 1
        const updatedQty = Math.max(newQty, 1);

        state.products = state.products.map((item) =>
          item.id === productId ? { ...item, qty: updatedQty } : item
        );
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, reset } =
  cart.actions;
export default cart.reducer;
