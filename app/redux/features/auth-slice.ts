import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  account: object;
};

const initialState = {
  account: {},
} as AuthState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
    getAccount: (state, action: PayloadAction<object>) => {
      state.account = action.payload;
    },
  },
});

export const { getAccount, reset } = auth.actions;
export default auth.reducer;
