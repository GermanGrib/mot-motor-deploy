"use client";
import ProductCardCarouselSecondary from "@/_components/ProductCardCarousel/ProductCardCarouselSecondary";
import productCardsData from "@/_data/mockProductCardsData/productCardData.json";

const NewArrivals = () => {
  return (
    <section>
      <div className="container">
        <h2 className="font-bold text-3xl text-center md:text-start md:text-mm-title-two mb-9">
          Новые поступления
        </h2>
        <ProductCardCarouselSecondary cardsContent={productCardsData} />
      </div>
    </section>
  );
};

export default NewArrivals;
