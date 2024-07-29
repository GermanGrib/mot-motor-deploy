"use client";
import Image from "next/image";

import RightArrowSvg from "@/assets/images/svgs/RightArrow.svg";
import ProductCardCarousel from "@/components/carousel-product-card";
import productCardsData from "@/data/mock-product-cards-data/product-card-data.json";

const CarouselRecommendations = () => {
  return (
    <section>
      <div className="container">
        <div className="flex mb-5 md:mb-12 items-center gap-3 md:gap-8">
          <h2 className="text-2xl md:text-3xl font-medium">Рекомендуем</h2>
          <Image
            className="md:w-8 md:h-3.5"
            src={RightArrowSvg}
            alt="arrow"
            width={12}
            height={8}
          />
        </div>
        <ProductCardCarousel cardsContent={productCardsData} />
      </div>
    </section>
  );
};

export default CarouselRecommendations;
