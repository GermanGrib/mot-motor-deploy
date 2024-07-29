import CarouselRecommendations from "@/components/carousel-recommendations";
import AdditionalInformation from "@/components/page-main-content/additional-information";
import Benefits from "@/components/page-main-content/benefits";
import BestOffers from "@/components/page-main-content/best-offers";
import Brands from "@/components/page-main-content/brands";
import MainBanner from "@/components/page-main-content/main-banner";
import NewArrivals from "@/components/page-main-content/new-arrivals";
import TagsFilter from "@/components/page-main-content/tags-filter";
import VideoConsultation from "@/components/video-consultation";

export default function Home() {
  return (
    <>
      <MainBanner />
      <Benefits />
      <TagsFilter />
      <VideoConsultation />
      <BestOffers />
      <NewArrivals />
      <Brands />
      <CarouselRecommendations />
      <AdditionalInformation />
    </>
  );
}
