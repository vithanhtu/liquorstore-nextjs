import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  account: null | object;
};

const initialState = {
  account: null,
} as AuthState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
    getAccount: (state, action: PayloadAction<object>) => {
      // console.log(action.payload);
      state.account = action.payload;
    },
  },
});

export const { getAccount, reset } = auth.actions;
export default auth.reducer;
