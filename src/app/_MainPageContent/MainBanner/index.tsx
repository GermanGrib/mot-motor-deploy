"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./mainBanner.module.scss";
import "./customerSwiper.scss";
import mainBannerJpg from "@/_assets/images/jpgs/mainBanner.jpg";
import promoBannerJpg from "@/_assets/images/jpgs/tradeIn.jpg";
import mainBannerData from "@/_data/mainPage/mainBanner.json";

const MainBanner = () => {
  const mainSliderAutoplayDelay = 3000;
  const slides = mainBannerData[0].content.map(banner => {
    return (
      <SwiperSlide key={`product-${banner.id}`}>
        <Link href={banner.route} className="flex rounded-lg md:rounded-2xl">
          <Image
            className="rounded-lg w-auto h-auto h=[230px] xl:rounded-2xl"
            src={mainBannerJpg}
            alt="Главный банер"
            width={670}
            height={415}
          />
        </Link>
      </SwiperSlide>
    );
  });
  return (
    <section className="container mb-2.5 pt-3.5 md:pt-6">
      <div className="flex flex-col justify-between gap-3.5 md:gap-8 xl:flex-row lg:gap-3.5">
        <div className="w-[375px] md:w-[670px] rounded-lg xl:rounded-2xl self-center xl:self-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: mainSliderAutoplayDelay,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {slides}
          </Swiper>
        </div>
        <div className="flex justify-center rounded-lg lg:rounded-2xl">
          <ul className="flex gap-1.5 md:gap-3 lg:gap-1.5 flex-wrap justify-center max-w-[500px] rounded-2xl shadow-none">
            {mainBannerData[1].content.map(banner => {
              return (
                <li
                  key={banner.id}
                  className={classNames(
                    styles.promoLink,
                    "flex border-2 border-white border-solid rounded-lg w-fit md:rounded-2xl",
                  )}
                >
                  <Link href={banner.route} className="rounded-lg ">
                    <Image
                      className="grow min-w-[100px] w-[170px] h-[145px] rounded-lg lg:rounded-2xl md:w-[215px] md:h-[180px] lg:w-auto lg:h-auto"
                      src={promoBannerJpg}
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
