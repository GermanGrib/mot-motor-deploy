"use client";
import productCardsData from "../../data/mock-product-cards-data/product-card-data.json";
import ProductCardCarousel from "../carousel-product-card";

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
