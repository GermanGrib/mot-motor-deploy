"use client";

import { configureStore } from "@reduxjs/toolkit";

import BurgerMenuReducer from "./slices/burger-menu";
import CatalogPopupReducer from "./slices/catalogs";
import ModalWindowsReducer from "./slices/modal-windows";
import UserDetailsReducer from "./slices/user-details";

export const store = configureStore({
  reducer: {
    userDetails: UserDetailsReducer,
    modalWindows: ModalWindowsReducer,
    burgerMenu: BurgerMenuReducer,
    catalogPopup: CatalogPopupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
