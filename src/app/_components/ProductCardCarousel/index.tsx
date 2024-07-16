import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import ChangeSlideButton from "@/_components/Buttons/ChangeSlideButton";
import ProductCardSecondary from "@/_components/ProductCard";
import ProductCardCarouselProps from "@/_components/ProductCardCarousel/ProductCardCarousel.interface";

const Index = ({ cardsContent }: ProductCardCarouselProps) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  return (
    <div className="relative md:mx-2.5">
      <ChangeSlideButton swiper={swiperInstance} position="left" left />
      <ul className="flex justify-between gap-3.5">
        <Swiper
          loop={true}
          onSwiper={swiper => setSwiperInstance(swiper)}
          breakpoints={{
            0: {
              centeredSlides: true,
              slidesPerView: "auto",
              spaceBetween: 25,
            },
            620: {
              centeredSlides: false,
              spaceBetween: 25,
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            830: {
              centeredSlides: false,
              spaceBetween: 25,
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1280: {
              centeredSlides: false,
              spaceBetween: 10,
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
        >
          {cardsContent.map(card => {
            return (
              <SwiperSlide key={card.id}>
                <li className="m-auto md:m-0 w-fit">
                  <ProductCardSecondary
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
  );
};

export default Index;
