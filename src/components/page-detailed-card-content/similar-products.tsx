"use client";
import productCardsData from "../../data/mock-product-cards-data/product-card-data.json";
import ProductCardCarousel from "../carousel-product-card";

const SimilarProducts = () => {
  return (
    <section>
      <div className="container">
        <h2 className="font-bold text-xl md:text-2xl text-center md:text-start md:text-mm-title-two mb-9">
          Похожие товары
        </h2>
        <ProductCardCarousel cardsContent={productCardsData} />
      </div>
    </section>
  );
};

export default SimilarProducts;
