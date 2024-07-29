import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import CarouselPagination from "./carousel-pagination";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import hangkaiPng from "../assets/images/pngs/hangkai.png";
import RoutesPaths from "../types/enums/routes";
import formatNumberWithSpaces from "../utils/format-numbers-with-spaces";

interface ProductCardProps {
  cardData: {
    id: number;
    title: string;
    images: string[];
    currentPrice: number;
    oldPrice: number;
  };
}

const ProductCard = ({ cardData }: ProductCardProps) => {
  const { id, images, title, currentPrice, oldPrice } = cardData;
  const bankCreditMonths = 12;
  const savingAmount = Math.ceil(oldPrice - currentPrice);
  const partlyPaymentAmount = Math.ceil(currentPrice / bankCreditMonths);
  const router = useRouter();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleProductCardClick = () => {
    router.push(RoutesPaths.productCard + id);
  };
  const handleBuyOnOneClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleBuyBtnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handlePartlyPaymentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const stopPropagation = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.TouchEvent<HTMLDivElement>,
  ) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleProductCardClick}
      className="block px-4 pt-3.5 pb-6 h-full w-full border border-white border-solid hover:border-[#ccc] rounded-2xl cursor-pointer"
      onMouseDown={e => stopPropagation(e)}
      onMouseMove={e => stopPropagation(e)}
      onMouseUp={e => stopPropagation(e)}
      onTouchStart={e => stopPropagation(e)}
      onTouchMove={e => stopPropagation(e)}
      onTouchEnd={e => stopPropagation(e)}
    >
      <div>
        <Carousel opts={{ loop: true }} setApi={setApi}>
          <CarouselContent>
            {images.map((_, index) => {
              return (
                <CarouselItem key={String(id) + String(index)}>
                  <div className="flex justify-center mb-4">
                    <Image
                      className="md:w-52 md:h-52 select-none"
                      src={hangkaiPng}
                      alt="Изображение товара"
                      width={211}
                      height={211}
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        <CarouselPagination
          className="flex gap-1 justify-center mb-3"
          totalLength={count}
          activeIndex={current}
          setActiveIndex={setCurrent}
          emblaApi={api}
        />
        <h4 className={"mb-5 text-sm font-bold line-clamp-2"}>{title}</h4>
        <div className="flex flex-col gap-1 mb-8">
          <div className="text-sm line-through opacity-30">
            {formatNumberWithSpaces(String(oldPrice))} руб.
          </div>
          <div className="text-xl text-mm-main">
            {formatNumberWithSpaces(String(currentPrice))} руб.
          </div>
          <div className="flex gap-1.5 text-sm font-medium">
            <Image
              src="./discount.svg"
              alt="Иконка процента"
              width={16}
              height={16}
            />
            <div>
              Экономия {formatNumberWithSpaces(String(savingAmount))} руб.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5 ">
          <Button onClick={e => handleBuyOnOneClick(e)} variant="secondary">
            Купить в 1 клик
          </Button>
          <Button onClick={e => handleBuyBtnClick(e)}>Купить</Button>
        </div>
        <div
          onClick={e => handlePartlyPaymentClick(e)}
          className="flex flex-col p-2.5 gap-1 justify-center items-center bg-mm-cement rounded-2xl select-none hover:opacity-70"
        >
          <span className="text-sm font-medium opacity-30">
            Или оплачивай частями
          </span>
          <div className="text-base font-bold text-mm-main">
            от {formatNumberWithSpaces(String(partlyPaymentAmount))} / мес.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
