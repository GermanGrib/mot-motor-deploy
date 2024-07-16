import DetailedCardContent from "../_DetailedCardContent";
import cardData from "@/_data/mockProductCardsData/productCardData.json";

const DetailedCard = (props: {
  params: {
    cardId: string;
  };
}) => {
  const card = cardData.find(card => Number(props.params.cardId) === card.id);
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
  return <DetailedCardContent />;
};

export default DetailedCard;
