"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import HangkaiPng from "@/assets/images/pngs/hangkai.png";
import CarouselPagination from "@/components/carousel-pagination";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ProductPresentationImgs = () => {
  const [emblaApi, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const handleVerticalImgsClick = (currInd: number) => {
    setCurrent(currInd);
    if (emblaApi) {
      emblaApi.scrollTo(currInd);
    }
  };

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    setCount(emblaApi.scrollSnapList().length);
    setCurrent(emblaApi.selectedScrollSnap() + 1);

    emblaApi.on("select", () => {
      setCurrent(emblaApi.selectedScrollSnap() + 1);
    });
  }, [emblaApi]);

  return (
    <div className="flex lg:gap-16 justify-center items-center mb-8">
      <div className="hidden md:block w-24 min-w-24">
        <Carousel
          orientation="vertical"
          opts={{
            align: "start",
          }}
          setApi={setApi}
        >
          <CarouselContent className="h-[460px]">
            {[1, 2, 3, 4, 5, 6, 7].map((_, index) => {
              const currentActiveSlide = current === index + 1;

              return (
                <CarouselItem
                  key={index}
                  className="w-fit basis-1/6 first:pt-6 pt-2"
                  onClick={() => handleVerticalImgsClick(index)}
                >
                  <div
                    className={`flex justify-center items-center border border-gray-300 rounded-lg w-[72px] h-[72px] ${currentActiveSlide ? "border-mm-main" : "border-[#d5d8de]"}`}
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
      <div className="flex flex-col gap-5 md:gap-0">
        <Carousel orientation="horizontal" setApi={setApi}>
          <CarouselContent>
            {[1, 2, 3, 4, 5, 6, 7].map((_, index) => {
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
        <CarouselPagination
          className="flex justify-center gap-1.5 md:hidden"
          totalLength={count}
          activeIndex={current}
          setActiveIndex={setCurrent}
          emblaApi={emblaApi}
        />
      </div>
    </div>
  );
};

export default ProductPresentationImgs;
