import PropTypes from "prop-types";

import CarouselRecommendations from "@/components/carousel-recommendations";
import ContactsAndShareInformation from "@/components/page-detailed-card-content/contacts-and-share-information";
import ExtraOffers from "@/components/page-detailed-card-content/extra-offers";
import FirstImpression from "@/components/page-detailed-card-content/first-impression";
import SimilarProducts from "@/components/page-detailed-card-content/similar-products";
import TabsSwitcher from "@/components/page-detailed-card-content/tabs-switcher";
import VideoConsultation from "@/components/video-consultation";
import productCards from "@/data/mock-product-cards-data/product-card-data.json";
import cardData from "@/data/mock-product-cards-data/product-card-data.json";
import ProductCardContent from "@/types/intefaces/product-card.interface";

export function generateStaticParams() {
  return [{ cardId: "1" }, { cardId: "2" }, { cardId: "3" }];
}

interface ParamsExampleTest {
  params: {
    cardId: string;
  };
}

// props: {
//   params: {
//     cardId: string;
//   };
// }

const DetailedCard: React.FC<ParamsExampleTest> = async ({ params }) => {
  const { cardId } = params;
  console.log(cardId);

  const card = cardData.find(
    (card: ProductCardContent) => Number(cardId) === card.id,
  );
  if (!card) {
    return (
      <section>
        <div className="container pt-5">
          Карточку с таким ID я не нашел в нашей базе, пожалуйста выберите
          другой продукт или свяжитесь с нашим специалистом
        </div>
      </section>
    );
  }
  return (
    <>
      <FirstImpression />
      <TabsSwitcher />
      <SimilarProducts />
      <ExtraOffers />
      <VideoConsultation />
      <ContactsAndShareInformation
        productTitle={productCards[1].title}
        productId={productCards[1].id}
      />
      <CarouselRecommendations />
      <div className="mb-5"></div>
    </>
  );
};

DetailedCard.propTypes = {
  params: PropTypes.shape({
    cardId: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailedCard;
