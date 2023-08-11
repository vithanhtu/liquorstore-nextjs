import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/auth-slice";
import cartReducer from "./features/cart-slice";

export const store = configureStore({
  reducer: {
    userReducer,
    cartReducer,
  },
  //   devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
