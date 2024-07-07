"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import RightArrowSvg from "@/_assets/images/svgs/RightArrow.svg";
import ChangeSlideButton from "@/_components/Buttons/ChangeSlideButton";
import brandsData from "@/_data/mockBrands/mockBrands.json";

const Brands = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  return (
    <section>
      <div className="container">
        <div className="flex mb-5 md:mb-12 items-center gap-3 md:gap-8">
          <h2 className="text-2xl md:text-3xl font-medium">
            Популярные бренды
          </h2>
          <Image
            className="md:w-8 md:h-3.5"
            src={RightArrowSvg}
            alt="arrow"
            width={12}
            height={8}
          />
        </div>
        <div className="relative md:mx-2.5">
          <ChangeSlideButton
            className="hidden"
            swiper={swiperInstance}
            left
            position="left"
          />
          <ul className="flex justify-between gap-3.5">
            <Swiper
              loop={true}
              onSwiper={swiper => setSwiperInstance(swiper)}
              breakpoints={{
                319: {
                  spaceBetween: 20,
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                768: {
                  spaceBetween: 30,
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                },
                1280: {
                  spaceBetween: 30,
                  slidesPerView: 6,
                  slidesPerGroup: 6,
                },
              }}
            >
              {brandsData.map(brand => {
                return (
                  <SwiperSlide key={brand.id}>
                    <li className="w-fit">
                      <Image
                        className="md:w-[170px] md:h-[88px]"
                        src={`/brands/${brand.id}.png`}
                        alt="brand logo"
                        width={120}
                        height={64}
                      />
                    </li>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ul>
          <ChangeSlideButton swiper={swiperInstance} position="right" right />
        </div>
      </div>
    </section>
  );
};

export default Brands;
