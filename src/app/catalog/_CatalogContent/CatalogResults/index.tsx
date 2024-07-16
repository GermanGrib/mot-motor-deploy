"use client";
import Link from "next/link";
import { useSelector } from "react-redux";

import { RootState } from "@/_store/store";
import RoutesPaths from "@/types/enums/routes";

const CatalogResults = () => {
  const currentCity = useSelector((state: RootState) => state.userDetails.city);
  return (
    <div className="flex-grow">
      <h3 className="text-2xl font-bold w-1/2">
        Лодки ПВХ Altair в {currentCity} приобрести в{" "}
        <Link
          href={RoutesPaths.credit}
          className="text-mm-main hover:text-mm-main-hover active:text-mm-main-active"
        >
          КРЕДИТ
        </Link>
        ,
        <Link
          href={RoutesPaths.loan}
          className="text-mm-main hover:text-mm-main-hover active:text-mm-main-active"
        >
          РАССРОЧКУ
        </Link>
      </h3>
    </div>
  );
};

export default CatalogResults;
