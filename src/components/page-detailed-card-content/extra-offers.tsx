"use client";
import productCardsData from "../../data/mock-product-cards-data/product-card-data.json";
import ProductCardCarousel from "../carousel-product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const mockTabsContent = [
  {
    title: "Все предложения",
    tabsContent: "Карточки товара 1й набор",
  },
  {
    title: "Лодочные моторы",
    tabsContent: "Карточки товара 2й набор",
  },
  {
    title: "Лодочные моторы от 9.8 л.с.",
    tabsContent: "Карточки товара 3й набор",
  },
  {
    title: "Hangkai",
    tabsContent: "Карточки товара 4й набор",
  },
  {
    title: "Моторы до 180 000 руб.",
    tabsContent: "Карточки товара 5й набор",
  },
  {
    title: "Моторы",
    tabsContent: "Карточки товара 6й набор",
  },
];
const BestOffers = () => {
  return (
    <section>
      <div className="container">
        <h2 className="font-bold text-xl md:text-2xl text-center md:text-start md:text-mm-title-two mb-9">
          Смотрите так же
        </h2>
        <Tabs
          defaultValue={mockTabsContent[0].title}
          className="md:mb-9 xl:mb-14"
        >
          <div className="overflow-auto">
            <TabsList className="gap-5 pb-5 md:gap-12 whitespace-nowrap w-full justify-start bg-transparent mb-2 border-b border-[#ccc]">
              {mockTabsContent.map(tab => {
                return (
                  <TabsTrigger
                    className="pb-4 px-0 md:pb-6 text-xl font-medium data-[state=active]:bg-transparent border-b-2 border-transparent data-[state=active]:border-b-2 data-[state=active]:border-mm-main shadow-none"
                    key={tab.title}
                    value={tab.title}
                  >
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

export default BestOffers;
