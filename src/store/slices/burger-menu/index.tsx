"use client";

import { createSlice } from "@reduxjs/toolkit";

interface BurgerMenuState {
  isBurgerMenuOpen: boolean;
}

const initialState: BurgerMenuState = {
  isBurgerMenuOpen: false,
};

const burgerMenuSlice = createSlice({
  name: "burgerMenu",
  initialState,
  reducers: {
    toggleBurgerMenu: state => {
      state.isBurgerMenuOpen = state.isBurgerMenuOpen = !state.isBurgerMenuOpen;
    },
  },
});

export const { toggleBurgerMenu } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;
