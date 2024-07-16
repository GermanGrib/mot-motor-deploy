"use client";
import ProductCardCarousel from "@/_components/ProductCardCarousel";
import productCardsData from "@/_data/mockProductCardsData/productCardData.json";

const NewArrivals = () => {
  return (
    <section>
      <div className="container">
        <h2 className="font-bold text-3xl text-center md:text-start md:text-mm-title-two mb-9">
          Новые поступления
        </h2>
        <ProductCardCarousel cardsContent={productCardsData} />
      </div>
    </section>
  );
};

export default NewArrivals;
