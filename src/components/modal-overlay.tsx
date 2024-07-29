"use client";

import React, { HTMLAttributes } from "react";
import { useDispatch, useSelector } from "react-redux";

import CrossSvg from "./icons/icon-cross";
import useScrollControl from "../hooks/use-scroll-control";
import {
  toggleCallbackWindow,
  toggleCityWindow,
  toggleModalOverlay,
} from "../store/slices/modal-windows";
import { RootState } from "../store/store";

const ModalOverlay = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  const dispatch = useDispatch();

  const { isModalOverlayOpen, showCallback, showCitySearch } = useSelector(
    (state: RootState) => state.modalWindows,
  );
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (e.target === e.currentTarget) {
      dispatch(toggleModalOverlay());
      switch (true) {
        case showCallback:
          dispatch(toggleCallbackWindow());
          break;
        case showCitySearch:
          dispatch(toggleCityWindow());
          break;
        default:
          break;
      }
    }
  };

  const handleCrossClick = () => {
    dispatch(toggleModalOverlay());
    switch (true) {
      case showCallback:
        dispatch(toggleCallbackWindow());
        break;
      case showCitySearch:
        dispatch(toggleCityWindow());
        break;
      default:
        break;
    }
  };

  useScrollControl({ isDisabled: isModalOverlayOpen });

  return (
    <>
      {isModalOverlayOpen && (
        <div
          className="absolute h-full bg-mm-overlay inset-0 z-[999]"
          onClick={handleOverlayClick}
        >
          <div className="fixed min-w-[350px] md:min-w-[450px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl z-[999]">
            {children}{" "}
            <CrossSvg position="rightTop" onClick={handleCrossClick} />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalOverlay;
