import ContactsAndShareInformation from "./ContactsAndShareInformation";
import Recommendations from "@/_components/ProductCardCarousel/Recommendations";
import VideoConsultation from "@/_components/VideoConsultation";
import productCards from "@/_data/mockProductCardsData/productCardData.json";
import ExtraOffers from "@/products/_DetailedCardContent/ExtraOffers";
import FirstImpression from "@/products/_DetailedCardContent/FirstImpression";
import SimilarProducts from "@/products/_DetailedCardContent/SimilarProducts";
import TabsSwitcher from "@/products/_DetailedCardContent/TabsSwitcher";

const DetailedCardContent = () => {
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
      <Recommendations />
    </>
  );
};

export default DetailedCardContent;
