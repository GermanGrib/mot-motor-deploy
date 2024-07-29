"use client";

import { createSlice } from "@reduxjs/toolkit";

interface ModalPortalState {
  isModalOverlayOpen: boolean;
  showCallback: boolean;
  showCitySearch: boolean;
}

const initialState: ModalPortalState = {
  isModalOverlayOpen: false,
  showCallback: false,
  showCitySearch: false,
};

const modalWindowsSlice = createSlice({
  name: "modalOverlay",
  initialState,
  reducers: {
    toggleModalOverlay: state => {
      state.isModalOverlayOpen = state.isModalOverlayOpen =
        !state.isModalOverlayOpen;
    },
    toggleCallbackWindow: state => {
      state.showCallback = state.showCallback = !state.showCallback;
    },
    toggleCityWindow: state => {
      state.showCitySearch = state.showCitySearch = !state.showCitySearch;
    },
  },
});

export const { toggleModalOverlay, toggleCallbackWindow, toggleCityWindow } =
  modalWindowsSlice.actions;
export default modalWindowsSlice.reducer;
