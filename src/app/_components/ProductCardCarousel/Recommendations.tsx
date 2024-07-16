"use client";
import Image from "next/image";

import RightArrowSvg from "@/_assets/images/svgs/RightArrow.svg";
import ProductCardCarousel from "@/_components/ProductCardCarousel/index";
import productCardsData from "@/_data/mockProductCardsData/productCardData.json";

const Recommendations = () => {
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

export default Recommendations;
