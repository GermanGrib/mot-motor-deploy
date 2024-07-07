"use client";
import Image from "next/image";

import RightArrowSvg from "@/_assets/images/svgs/RightArrow.svg";
import ProductCardCarouselSecondary from "@/_components/ProductCardCarousel/ProductCardCarouselSecondary";
import productCardsData from "@/_data/mockProductCardsData/productCardData.json";

const Recommendations = () => {
  return (
    <section>
      <div className="container">
        <div className="flex mb-5 md:mb-12 items-center gap-3 md:gap-8">
          <h2>Рекомендуем</h2>
          <Image
            className="md:w-8 md:h-3.5"
            src={RightArrowSvg}
            alt="arrow"
            width={12}
            height={8}
          />
        </div>
        <ProductCardCarouselSecondary cardsContent={productCardsData} />
      </div>
    </section>
  );
};

export default Recommendations;
