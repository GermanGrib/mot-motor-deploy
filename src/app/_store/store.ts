"use client";

import { configureStore } from "@reduxjs/toolkit";

import BurgerMenuReducer from "./slices/BurgerMenu";
import CatalogPopupReducer from "./slices/Catalogs";
import ModalWindowsReducer from "./slices/ModalWindows";
import UserDetailsReducer from "./slices/UserDetails";

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
