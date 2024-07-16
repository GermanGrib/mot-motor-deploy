import Recommendations from "../_components/ProductCardCarousel/Recommendations";
import VideoConsultation from "@/_components/VideoConsultation";
import AdditionalInformation from "@/_MainPageContent/AdditionalInformation";
import Benefits from "@/_MainPageContent/Benefits";
import BestOffers from "@/_MainPageContent/BestOffers";
import Brands from "@/_MainPageContent/Brands";
import MainBanner from "@/_MainPageContent/MainBanner";
import NewArrivals from "@/_MainPageContent/NewArrivals";
import TagsFilter from "@/_MainPageContent/TagsFilter";

const MainPageContent = () => {
  return (
    <>
      <MainBanner />
      <Benefits />
      <TagsFilter />
      <VideoConsultation />
      <BestOffers />
      <NewArrivals />
      <Brands />
      <Recommendations />
      <AdditionalInformation />
    </>
  );
};

export default MainPageContent;
