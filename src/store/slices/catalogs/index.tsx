"use client";

import { createSlice } from "@reduxjs/toolkit";

interface CatalogPopupMenuState {
  isCatalogPopupOpen: boolean;
}

const initialState: CatalogPopupMenuState = {
  isCatalogPopupOpen: false,
};

const catalogPopupSlice = createSlice({
  name: "catalogPopup",
  initialState,
  reducers: {
    toggleCatalogPopup: state => {
      state.isCatalogPopupOpen = state.isCatalogPopupOpen =
        !state.isCatalogPopupOpen;
    },
  },
});

export const { toggleCatalogPopup } = catalogPopupSlice.actions;
export default catalogPopupSlice.reducer;
