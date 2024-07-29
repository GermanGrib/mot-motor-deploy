"use client";
import { useState } from "react";

import BreadCrumbCustom from "@/components/bread-crumb-custom";
import CarouselRecommendations from "@/components/carousel-recommendations";
import AsideMenu from "@/components/page-catalog-content/aside-menu";
import AsideMobile from "@/components/page-catalog-content/aside-menu/aside-mobile";
import CatalogResults from "@/components/page-catalog-content/catalog-results";
import SeoAdditional from "@/components/page-catalog-content/seo-additional";
import VideoConsultation from "@/components/video-consultation";
import MockFiltersAsideMenu from "@/data/catalog/aside-menu-filters.json";
import MockSeoData from "@/data/catalog/seo-info.json";

const Catalog = () => {
  const [isAsideVisible, setAsideVisible] = useState(false);
  return (
    <>
      <section>
        <div className="container">
          <div className="pt-4 mb-2 md:mb-7">
            <BreadCrumbCustom
              routes={[
                { id: 1, href: "/", title: "Главная" },
                { id: 2, href: "/catalog", title: "Лодки ПВХ Altair" },
              ]}
            />
          </div>
          <div className="flex gap-10 mb-8">
            <AsideMenu filters={MockFiltersAsideMenu} />
            <AsideMobile
              filters={MockFiltersAsideMenu}
              isVisible={isAsideVisible}
              setIsVisible={setAsideVisible}
            />
            <CatalogResults
              isAsideVisible={isAsideVisible}
              setAsideVisible={setAsideVisible}
            />
          </div>
        </div>
      </section>
      <VideoConsultation />
      <SeoAdditional additionalInfo={MockSeoData} />
      <CarouselRecommendations />
      <div className="h-1" />
    </>
  );
};

export default Catalog;
