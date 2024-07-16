"use client";
import Image from "next/image";
import { useState } from "react";

import HangkaiPng from "@/_assets/images/pngs/hangkai.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/_components/ui/carousel";

const ProductPresentationImgs = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="flex lg:gap-16 justify-center items-center mb-8">
      <div className="hidden md:block w-24 min-w-24">
        <Carousel
          orientation="vertical"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="h-[460px]">
            {[1, 2, 3, 4, 5, 6, 7].map((img, index) => {
              const currentActiveSlide = activeSlide === index;

              return (
                <CarouselItem
                  key={index}
                  className="w-fit basis-1/6 first:pt-6 pt-2"
                  onClick={() => setActiveSlide(index)}
                >
                  <div
                    className="flex justify-center items-center border border-gray-300 rounded-lg w-[72px] h-[72px]"
                    style={{
                      border: currentActiveSlide
                        ? "1px solid #0787EA"
                        : "1px solid #d5d8de",
                    }}
                  >
                    <Image
                      className="w-auto h-auto rounded-lg"
                      src={HangkaiPng}
                      alt="Фотография продукции"
                      width={70}
                      height={70}
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex flex-col">
        <Carousel orientation="horizontal">
          <CarouselContent>
            {[1, 2, 3, 4, 5, 6, 7].map((img, index) => {
              return (
                <CarouselItem key={index}>
                  <div className="flex justify-center lg:justify-start items-center">
                    <Image
                      className="md:w-[354px] md:h-[354px]"
                      src={HangkaiPng}
                      alt="Фотография продукции"
                      width={260}
                      height={260}
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ProductPresentationImgs;
