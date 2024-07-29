"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import mainBannerJpg from "@/assets/images/jpgs/mainBanner.jpg";
import CarouselPagination from "@/components/carousel-pagination";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import mainBannerData from "@/data/main-page/main-banner.json";

const MainBanner = () => {
  const mainSliderAutoplayDelay = 3000;
  const [emblaApi, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    setCount(emblaApi.scrollSnapList().length);
    setCurrent(0);

    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, mainSliderAutoplayDelay);

    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <section className="container mb-2.5 pt-3.5 md:pt-6">
      <div className="flex flex-col justify-between gap-3.5 md:gap-8 xl:flex-row lg:gap-3.5">
        <div className="relative w-[375px] md:w-[670px] rounded-lg xl:rounded-2xl self-center xl:self-auto">
          <Carousel opts={{ loop: true }} setApi={setApi}>
            <CarouselContent>
              {mainBannerData[0].content.map(img => {
                return (
                  <CarouselItem key={img.id}>
                    <Link
                      href={img.route}
                      className="flex rounded-lg md:rounded-2xl"
                    >
                      <Image
                        className="rounded-lg w-auto h-auto h=[230px] xl:rounded-2xl"
                        src={mainBannerJpg}
                        alt="Главный банер"
                        width={670}
                        height={415}
                      />
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
          <CarouselPagination
            className="absolute -bottom-4 left-1/2 flex gap-1.5"
            totalLength={count}
            activeIndex={current + 1}
            setActiveIndex={setCount}
            emblaApi={emblaApi}
          />
        </div>
        <div className="flex justify-center rounded-lg lg:rounded-2xl">
          <ul className="flex gap-1.5 md:gap-3 lg:gap-1.5 flex-wrap justify-center max-w-[500px] rounded-2xl shadow-none">
            {mainBannerData[1].content.map((banner, index) => {
              return (
                <li
                  key={banner.id}
                  className="flex border-2 border-white border-solid rounded-lg w-fit md:rounded-2xl"
                  style={{
                    boxShadow: "8px 8px 40px rgba(51, 60, 73, 0.1490196078)",
                    background:
                      "linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%)",
                  }}
                >
                  <Link href={banner.route} className="rounded-lg ">
                    <Image
                      className="grow min-w-[100px] w-[170px] h-[145px] rounded-lg lg:rounded-2xl md:w-[215px] md:h-[180px] lg:w-auto lg:h-auto"
                      src={`/mainPromoBanners/${index + 1}.jpg`}
                      alt="Промо банер"
                      width={238}
                      height={200}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
