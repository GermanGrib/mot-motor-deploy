import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./productCardCarousel.module.scss";
import ChangeSlideButton from "@/_components/Buttons/ChangeSlideButton";
import ProductCard from "@/_components/ProductCard";
import ProductCardCarouselProps from "@/_components/ProductCardCarousel/ProductCardCarousel.interface";

const ProductCardCarousel = ({ cardsContent }: ProductCardCarouselProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  return (
    <>
      <div className="relative hidden md:block md:mx-2.5">
        <ChangeSlideButton swiper={swiperInstance} position="left" left />
        <ul className="flex justify-between gap-3.5">
          <Swiper
            loop={true}
            onSwiper={swiper => setSwiperInstance(swiper)}
            breakpoints={{
              768: {
                spaceBetween: 25,
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              830: {
                spaceBetween: 25,
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1280: {
                spaceBetween: 10,
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
            }}
          >
            {cardsContent.map(card => {
              return (
                <SwiperSlide key={card.id}>
                  <li className="w-fit">
                    <ProductCard
                      id={card.id}
                      title={card.title}
                      images={card.images}
                      currentPrice={card.currentPrice}
                      oldPrice={card.oldPrice}
                      main
                    />
                  </li>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </ul>
        <ChangeSlideButton swiper={swiperInstance} position="right" right />
      </div>
      <div className="flex justify-center md:hidden">
        <ul className="grid grid-cols-2 w-fit">
          {cardsContent.map(card => {
            return (
              <li className={styles.listItemMobile} key={card.id}>
                <ProductCard
                  id={card.id}
                  title={card.title}
                  images={card.images}
                  currentPrice={card.currentPrice}
                  oldPrice={card.oldPrice}
                  main
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ProductCardCarousel;
