"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

import basketIcon from "../assets/images/general/basket.svg";
import { RootState } from "../store/store";
import RoutesPaths from "../types/enums/routes";

const Basket = () => {
  const purchasesQnt = useSelector(
    (state: RootState) => state.userDetails.basketPurchasesQnt,
  );
  const totalSumInBasket = useSelector(
    (state: RootState) => state.userDetails.basketSumTotal,
  );
  return (
    <Link
      href={RoutesPaths.basket}
      className="flex flex-col gap-2 items-center justify-center mr-3 select-none md:m-0"
    >
      <div className="relative flex justify-end">
        <Image
          src={basketIcon}
          alt="Иконка корзины"
          width={32}
          height={32}
          className="w-auto h-auto"
        />
        <div className="flex items-center justify-center absolute top-[-9px] right-[-9px] w-4 h-4 rounded-full bg-mm-attention text-white text-xs font-bold ">
          {purchasesQnt}
        </div>
      </div>
      <div className="text-xs whitespace-nowrap font-bold">
        {totalSumInBasket} ₽
      </div>
    </Link>
  );
};

export default Basket;
