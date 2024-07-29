"use client";
import Image from "next/image";

import productCardsData from "../../data/mock-product-cards-data/product-card-data.json";
import ProductCardCarousel from "../carousel-product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const mockTabsContent = [
  {
    title: "Выбор покупателей",
    svgIcon: "./like.svg",
    tabsContent: "Карточки товара 1й набор",
  },
  {
    title: "Скидки",
    svgIcon: "./discount.svg",
    tabsContent: "Карточки товара 2й набор",
  },
  {
    title: "Успей купить",
    svgIcon: "./fire.svg",
    tabsContent: "Карточки товара 3й набор",
  },
];
const TagsFilter = () => {
  return (
    <section>
      <div className="container">
        <Tabs
          defaultValue={mockTabsContent[0].title}
          className="md:mb-9 xl:mb-14"
        >
          <div className="overflow-auto">
            <TabsList className="flex h-full gap-5 pb-0 md:gap-12 whitespace-nowrap w-full justify-start bg-transparent mb-6 border-b border-[#ccc]">
              {mockTabsContent.map(tab => {
                return (
                  <TabsTrigger
                    className="pb-4 min-w-fit px-0 md:pb-6 gap-3 text-xl font-medium data-[state=active]:bg-transparent border-b-2 border-transparent data-[state=active]:border-b-2 data-[state=active]:border-mm-main shadow-none"
                    key={tab.title}
                    value={tab.title}
                  >
                    <Image
                      className="w-auto h-auto"
                      src={tab.svgIcon}
                      alt="Иконка тега"
                      width={26}
                      height={26}
                    />
                    {tab.title}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
          {mockTabsContent.map(tab => {
            return (
              <TabsContent key={tab.tabsContent} value={tab.title}>
                {tab.tabsContent}
              </TabsContent>
            );
          })}
        </Tabs>

        <ProductCardCarousel cardsContent={productCardsData} />
      </div>
    </section>
  );
};

export default TagsFilter;
