import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import UserDetails from "@/_store/slices/UserDetails/UserDetails.interface";

const initialState: UserDetails = {
  city: "Москва",
  basketPurchasesQnt: 0,
  basketSumTotal: "5 500",
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    changeUserCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const { changeUserCity } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
