"use client";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";

import FiltersSvg from "@/assets/images/general/filters.svg";
import ProductCardsResult from "@/components/product-cards-result";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RootState } from "@/store/store";
import RoutesPaths from "@/types/enums/routes";

interface CatalogResultsProps {
  isAsideVisible: boolean;
  setAsideVisible: Dispatch<SetStateAction<boolean>>;
}

const CatalogResults = ({
  isAsideVisible,
  setAsideVisible,
}: CatalogResultsProps) => {
  const currentCity = useSelector((state: RootState) => state.userDetails.city);
  const handleFilterBtn = () => {
    setAsideVisible(!isAsideVisible);
  };
  return (
    <div className="flex-grow">
      <h3 className="mb-6 md:mb-10 text-2xl font-bold w-full md:w-1/2">
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
      <div className="flex gap-2.5 mb-6 md:mb-8">
        <Button
          className="flex gap-2.5 lg:hidden h-10"
          onClick={() => handleFilterBtn()}
        >
          <Image
            src={FiltersSvg}
            alt="иконка фильтров"
            width={20}
            height={20}
          />
          <span className="text-base font-bold">Фильтры</span>
        </Button>
        <Select defaultValue="default">
          <SelectTrigger className="w-full md:w-64 rounded-2xl">
            <SelectValue placeholder="Исходная сортировка" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Исходная сортировка</SelectItem>
            <SelectItem value="popular">По популярности</SelectItem>
            <SelectItem value="raiting">По рейтингу</SelectItem>
            <SelectItem value="new">По новизне</SelectItem>
            <SelectItem value="priceUp">По возрастанию цены</SelectItem>
            <SelectItem value="priceDown">По убыванию цены</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ProductCardsResult />
    </div>
  );
};

export default CatalogResults;
