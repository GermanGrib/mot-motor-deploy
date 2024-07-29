import CarouselRecommendations from "@/components/carousel-recommendations";
import ContactsAndShareInformation from "@/components/page-detailed-card-content/contacts-and-share-information";
import ExtraOffers from "@/components/page-detailed-card-content/extra-offers";
import FirstImpression from "@/components/page-detailed-card-content/first-impression";
import SimilarProducts from "@/components/page-detailed-card-content/similar-products";
import TabsSwitcher from "@/components/page-detailed-card-content/tabs-switcher";
import VideoConsultation from "@/components/video-consultation";
import cardData from "@/data/mock-product-cards-data/product-card-data.json";
import ProductCardContent from "@/types/intefaces/product-card.interface";

export function generateStaticParams() {
  return [{ cardId: "1" }, { cardID: "2" }];
}

interface DetailedCardProps {
  params: {
    cardId: string;
  };
}

const DetailedCard = async ({ params }: DetailedCardProps) => {
  const { cardId } = params;

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
        productTitle={card.title}
        productId={card.id}
      />
      <CarouselRecommendations />
      <div className="mb-5"></div>
    </>
  );
};

export default DetailedCard;
