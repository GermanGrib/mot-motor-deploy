"use client";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import IconArrow from "./icons/icon-arrow";
import locationSvg from "../assets/images/general/location.svg";
import {
  toggleCityWindow,
  toggleModalOverlay,
} from "../store/slices/modal-windows";
import { RootState } from "../store/store";

interface CityPickerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CityPicker = ({ className }: CityPickerProps) => {
  const dispatch = useDispatch();
  const userCity = useSelector((state: RootState) => state.userDetails.city);

  const handleBtnClick = () => {
    dispatch(toggleModalOverlay());
    dispatch(toggleCityWindow());
  };

  return (
    <button
      className={`flex gap-2.5 justify-between items-center bg-transparent border-0 outline-0 cursor-pointer w-fit ${className}`}
      onClick={handleBtnClick}
    >
      <Image
        className="w-4 h-4 mr-1.5"
        src={locationSvg}
        alt="знак локации"
        width={16}
        height={20}
      />
      <div className="-ml-1.5 -mr-1 text-xs leading-3 whitespace-nowrap font-bold md:leading-5 md:text-lg md:-ml-2.5 mr:-ml-1.5">
        {userCity}
      </div>
      <IconArrow />
    </button>
  );
};

export default CityPicker;
